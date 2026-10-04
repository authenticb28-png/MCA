// check_data.js — load every data file in a sandbox (no browser) and validate the schema.
// Run via verify.py, or directly: node docs/check_data.js. Prints "OK" or one error per line.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = { console, Math, JSON, Set, Object, Array, String, Number, parseInt, document: { querySelector: () => null } };
ctx.window = ctx;
vm.createContext(ctx);
const errs = [];
const load = (f) => { try { vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(f + ': load error ' + e.message); } };
load('js/svglib.js');
for (let i = 1; i <= 15; i++) load('data/unit' + String(i).padStart(2, '0') + '.js');
['data/diagrams.js', 'data/mock1.js', 'data/mock2.js', 'data/extras.js'].forEach(load);

const D = {}, qids = new Set();
let nq = 0;
function checkQ(q, where) {
  nq++;
  if (!q.q) errs.push(where + ': no question text');
  if (q.id) { if (qids.has(q.id)) errs.push(where + ': duplicate id ' + q.id); qids.add(q.id); }
  if (q.type === 'mcq') { if (!(q.answer >= 0 && q.answer < q.options.length)) errs.push(where + ': mcq answer out of range'); if (q.why && q.why.length !== q.options.length) errs.push(where + ': why[] length'); }
  else if (q.type === 'msq') { if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((a) => a >= q.options.length)) errs.push(where + ': msq answer'); if (q.why && q.why.length !== q.options.length) errs.push(where + ': why[] length'); }
  else if (q.type === 'nat') { if (typeof q.answer !== 'number' || isNaN(q.answer)) errs.push(where + ': nat answer'); }
  else if (q.type === 'text') { if (!q.answer || !(Array.isArray(q.answer) ? q.answer.length : String(q.answer).length)) errs.push(where + ': text answer'); }
  else if (q.type === 'match') { if (q.answer.length !== q.left.length || q.answer.some((a) => !(a >= 0 && a < q.right.length))) errs.push(where + ': match answer'); }
  else if (q.type === 'sub' || q.type === 'diag') { if (!q.model) errs.push(where + ': no model answer'); }
  else errs.push(where + ': unknown type ' + q.type);
}

const units = (ctx.UNITS || []).slice().sort((a, b) => a.id - b.id);
if (units.length !== 15) errs.push('expected 15 units, found ' + units.length);
units.forEach((u) => u.subtopics.forEach((st) => (st.diagrams || []).forEach((d) => { if (D[d.id]) errs.push('duplicate diagram ' + d.id); D[d.id] = d; })));
units.forEach((u) => u.subtopics.forEach((st) => {
  const w = st.id;
  ['id', 'title', 'badge', 'sources', 'explain'].forEach((k) => { if (!st[k]) errs.push(w + ': missing ' + k); });
  if (!/^(class|researched|extra)$/.test(st.badge)) errs.push(w + ': bad badge');
  if ((st.badge === 'researched' || st.badge === 'extra') && !st.sourceLine) errs.push(w + ': researched/extra needs sourceLine');
  (st.diagrams || []).forEach((d) => { if (!/^<svg/.test(d.svg || '') || /NaN|undefined/.test(d.svg)) errs.push(w + ': bad svg ' + d.id); if (!d.how) errs.push(w + ': no how-to-draw for ' + d.id); });
  (st.code || []).forEach((c) => { if (!c.id || !c.src || !c.lang) errs.push(w + ': bad code entry ' + c.id); });
  if ((st.practice || []).length < 3) errs.push(w + ': fewer than 3 practice questions');
  (st.practice || []).forEach((q, i) => checkQ(q, w + ' P' + (i + 1)));
  (st.subjective || []).forEach((q, i) => { if (!q.q || !q.model) errs.push(w + ' S' + (i + 1) + ': incomplete'); (q.refs || []).forEach((r) => { if (!D[r]) errs.push(w + ' S' + (i + 1) + ': unknown ref ' + r); }); });
}));

const G = ctx.DIAGQ;
if (!G) errs.push('DIAGQ missing'); else {
  G.samples.concat(G.predicted).forEach((s) => checkQ(s.q, 'diagrams ' + s.q.id));
  G.top.forEach((t) => { checkQ(t.q, 'diagrams ' + t.q.id); (t.q.refs || []).forEach((r) => { if (!D[r]) errs.push(t.q.id + ': unknown ref ' + r); }); });
}

[1, 2].forEach((n) => {
  const M = (ctx.MOCKS || {})[n];
  if (!M) { errs.push('mock ' + n + ' missing'); return; }
  if (!M.title || !M.minutes) errs.push('mock ' + n + ': title/minutes');
  let marks = 0;
  'ABCDEF'.split('').forEach((s) => {
    const qs = M.sections[s] || [];
    if (!qs.length) errs.push('mock ' + n + ': section ' + s + ' empty');
    qs.forEach((q) => { if (!q.id) errs.push('mock ' + n + ' ' + s + ': question without id'); checkQ(q, q.id || ('mock ' + n + s)); marks += q.marks || 0; (q.refs || []).forEach((r) => { if (!D[r]) errs.push(q.id + ': unknown ref ' + r); }); if (s === 'B' && !(M.passages || []).some((p) => p.id === q.passage)) errs.push(q.id + ': passage not found'); });
  });
  if (marks !== 100) errs.push('mock ' + n + ': total marks ' + marks + ' (expected 100)');
});

const E = ctx.EXTRAS;
if (!E) errs.push('EXTRAS missing'); else {
  ['home', 'plan', 'revision', 'bonus'].forEach((k) => { if (!E[k]) errs.push('EXTRAS.' + k + ' missing'); });
  ((E.bonus && E.bonus.questions) || []).forEach((q) => checkQ(q, q.id));
}

console.log('units ' + units.length + ' | diagrams ' + Object.keys(D).length + ' | questions ' + nq);
console.log(errs.length ? errs.join('\n') : 'OK');
process.exitCode = errs.length ? 1 : 0;
