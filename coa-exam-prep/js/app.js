/* app.js — navigation, rendering, quiz engine, mock timer, progress (all offline). */
(function () {
  'use strict';
  const UNITS = (window.UNITS || []).slice().sort((a, b) => a.id - b.id);
  const DIAG = (window.DIAG = window.DIAG || {});
  const QBANK = (window.QBANK = {});
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /* ---------- storage (always guarded) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('coa.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('coa.' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    clearAll() { try { Object.keys(localStorage).filter((k) => k.indexOf('coa.') === 0).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* ignore */ } }
  };

  /* ---------- registries ---------- */
  UNITS.forEach((u) => u.subtopics.forEach((st) => {
    (st.diagrams || []).forEach((d) => { DIAG[d.id] = Object.assign({ unit: u.id, sub: st.id }, d); });
    (st.practice || []).forEach((q, i) => { q.id = q.id || ('p' + st.id + '.' + (i + 1)); q.unit = u.id; QBANK[q.id] = q; });
    (st.subjective || []).forEach((q, i) => { q.id = q.id || ('s' + st.id + '.' + (i + 1)); q.type = 'sub'; q.unit = u.id; });
  }));
  if (window.DIAGQ && window.DIAGQ.extraDiagrams) window.DIAGQ.extraDiagrams.forEach((d) => (DIAG[d.id] = d));

  /* ---------- theme ---------- */
  function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); store.set('theme', t); }
  applyTheme(store.get('theme', (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'));

  /* ---------- sidebar ---------- */
  function unitPct(u) {
    const ids = u.subtopics.map((s) => s.id);
    const done = ids.filter((id) => store.get('done.' + id, false)).length;
    return Math.round((100 * done) / ids.length);
  }
  function buildSidebar() {
    const sb = $('#sidebar');
    let h = '<input class="search" id="search" type="search" placeholder="Search topics (e.g. K-map, beq)" aria-label="Search topics">';
    h += '<div id="searchResults"></div>';
    h += '<div class="grp">Start here</div>';
    h += '<a href="#/home">Home &amp; how to use</a><a href="#/plan">7-Day Study Plan</a>';
    h += '<div class="grp">Units</div>';
    UNITS.forEach((u) => { h += '<a href="#/unit/' + u.id + '" data-unit="' + u.id + '">' + u.id + '. ' + esc(u.short || u.title) + '<span class="pct">' + unitPct(u) + '%</span></a>'; });
    h += '<div class="grp">Exam practice</div>';
    h += '<a href="#/diagrams">Diagram Questions</a><a href="#/mock/1">Mock Paper 1</a><a href="#/mock/2">Mock Paper 2</a><a href="#/bonus">Bonus: Units 14–15</a>';
    h += '<div class="grp">Revise &amp; track</div>';
    h += '<a href="#/tools">Interactive Tools</a><a href="#/revision">Last-Night Revision</a><a href="#/progress">Progress</a>';
    sb.innerHTML = h;
    $('#search').addEventListener('input', onSearch);
  }
  function onSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    const box = $('#searchResults');
    if (q.length < 2) { box.innerHTML = ''; return; }
    const hits = [];
    UNITS.forEach((u) => u.subtopics.forEach((st) => {
      const hay = (st.id + ' ' + st.title + ' ' + (st.keywords || '') + ' ' + (st.keypoints || []).join(' ')).toLowerCase();
      if (hay.indexOf(q) >= 0) hits.push('<a href="#/unit/' + u.id + '/' + st.id + '">' + st.id + ' ' + esc(st.title) + '</a>');
    }));
    box.innerHTML = hits.slice(0, 12).join('') || '<div class="hint" style="padding:4px 10px">No match</div>';
  }
  function markActive() {
    const h = location.hash || '#/home';
    $$('#sidebar a').forEach((a) => {
      const href = a.getAttribute('href');
      const on = h === href || (a.dataset.unit && h.indexOf('#/unit/' + a.dataset.unit) === 0 && (h.length === href.length || h[href.length] === '/'));
      a.classList.toggle('active', !!on);
    });
  }

  /* ---------- question rendering ---------- */
  const TAGCLS = (t) => 'badge tag';
  function qHead(q, num) {
    let h = '<div class="qhead"><b>' + (num != null ? 'Q' + num : 'Question') + '</b>';
    h += '<span class="pill">' + esc({ mcq: 'MCQ', msq: 'MSQ (one or more correct)', nat: 'NAT (numerical)', text: 'Short answer', match: 'Match the following', sub: 'Subjective', diag: 'Diagram' }[q.type] || q.type) + '</span>';
    if (q.tag) h += '<span class="' + TAGCLS(q.tag) + '">' + esc(q.tag) + '</span>';
    if (q.marks) h += '<span class="pill">' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + '</span>';
    if (q.unitLabel) h += '<span class="pill">Unit ' + esc(q.unitLabel) + '</span>';
    const prev = store.get('q.' + q.id, null);
    if (prev != null && q.type !== 'sub' && q.type !== 'diag') h += '<span class="pill">' + (prev ? 'last try: correct' : 'last try: wrong') + '</span>';
    return h + '</div>';
  }
  function renderQ(q, num, mode) {
    // mode: 'practice' (Check button) | 'exam' (no per-question check)
    const id = 'q_' + q.id.replace(/[^\w]/g, '_');
    let h = '<div class="q" id="' + id + '" data-qid="' + esc(q.id) + '">' + qHead(q, num);
    if (q.pre) h += '<div class="qtext">' + q.pre + '</div>';
    h += '<div class="qtext">' + q.q + '</div>';
    if (q.ref && DIAG[q.ref] && q.showRef) h += figure(DIAG[q.ref]);
    if (q.type === 'mcq' || q.type === 'msq') {
      const inp = q.type === 'mcq' ? 'radio' : 'checkbox';
      h += '<div class="opts">' + q.options.map((o, i) => '<label data-i="' + i + '"><input type="' + inp + '" name="' + id + '" value="' + i + '"><span><b>' + 'ABCDEFGH'[i] + '.</b> ' + o + '</span></label>').join('') + '</div>';
    } else if (q.type === 'nat' || q.type === 'text') {
      h += '<div><input class="nat" type="text" inputmode="' + (q.type === 'nat' ? 'decimal' : 'text') + '" placeholder="' + (q.type === 'nat' ? 'Enter a number' : 'Type your answer') + '" aria-label="answer"> ' + (q.unitHint ? '<span class="hint">' + esc(q.unitHint) + '</span>' : '') + '</div>';
    } else if (q.type === 'match') {
      h += '<div class="hint">Choose the matching item from the right column for each row.</div>';
      h += q.left.map((l, i) => '<div class="match-row"><div><b>' + (i + 1) + '.</b> ' + l + '</div><select data-i="' + i + '" aria-label="match for row ' + (i + 1) + '"><option value="">-- choose --</option>' +
        q.right.map((r, j) => '<option value="' + j + '">' + 'PQRSTUVW'[j] + '. ' + stripTags(r) + '</option>').join('') + '</select></div>').join('');
    }
    if (mode !== 'exam') {
      if (q.type === 'sub' || q.type === 'diag') {
        h += '<textarea class="nat" style="width:100%;min-height:70px;margin-top:6px" placeholder="Write or sketch your answer on paper first, then reveal."></textarea>';
        h += '<button class="btn" data-act="reveal">Reveal model answer</button>';
      } else {
        h += '<button class="btn" data-act="check">Check</button><button class="btn secondary" data-act="reveal">Reveal answer</button>';
      }
    } else if (q.type === 'sub' || q.type === 'diag') {
      h += '<textarea class="nat" style="width:100%;min-height:80px;margin-top:6px" placeholder="Answer on paper; reveal the model answer after you submit the paper."></textarea>';
      h += '<button class="btn secondary" data-act="reveal">Reveal model answer</button>';
    }
    h += '<div class="sol"></div></div>';
    return h;
  }
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ''); }
  function normalize(s) { return String(s).toLowerCase().replace(/\s+/g, '').replace(/[’']/g, "'"); }

  function evaluate(q, el) {
    if (q.type === 'mcq') {
      const c = $('input:checked', el); if (!c) return null;
      return Number(c.value) === q.answer;
    }
    if (q.type === 'msq') {
      const sel = $$('input:checked', el).map((c) => Number(c.value)).sort();
      if (!sel.length) return null;
      const ans = q.answer.slice().sort();
      return sel.length === ans.length && sel.every((v, i) => v === ans[i]);
    }
    if (q.type === 'nat') {
      const raw = $('input.nat', el).value.trim(); if (!raw) return null;
      const v = parseFloat(raw.replace(/,/g, ''));
      if (isNaN(v)) return false;
      return Math.abs(v - q.answer) <= (q.tol == null ? 1e-9 : q.tol);
    }
    if (q.type === 'text') {
      const raw = $('input.nat', el).value; if (!raw.trim()) return null;
      const acc = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(normalize);
      return acc.indexOf(normalize(raw)) >= 0;
    }
    if (q.type === 'match') {
      const sels = $$('select', el); if (sels.some((s) => s.value === '')) return null;
      return sels.every((s, i) => Number(s.value) === q.answer[i]);
    }
    return null;
  }
  function answerText(q) {
    if (q.type === 'mcq') return 'ABCDEFGH'[q.answer] + '. ' + q.options[q.answer];
    if (q.type === 'msq') return q.answer.map((i) => 'ABCDEFGH'[i]).join(', ');
    if (q.type === 'nat') return String(q.answer) + (q.tol ? ' (accepted range ' + (q.answer - q.tol) + ' to ' + (q.answer + q.tol) + ')' : '');
    if (q.type === 'text') return (Array.isArray(q.answer) ? q.answer[0] : q.answer);
    if (q.type === 'match') return q.left.map((l, i) => (i + 1) + ' → ' + 'PQRSTUVW'[q.answer[i]]).join(', ');
    return '';
  }
  function solutionHTML(q, ok) {
    let h = '';
    if (ok === true) h += '<div class="verdict ok">✔ Correct</div>';
    else if (ok === false) h += '<div class="verdict no">✘ Not quite</div>';
    if (q.type === 'sub' || q.type === 'diag') {
      if (q.ref && DIAG[q.ref]) h += figure(DIAG[q.ref]);
      (q.refs || []).forEach((r) => { if (DIAG[r]) h += figure(DIAG[r]); });
      if (q.svg) h += '<figure class="dg-fig">' + q.svg + '</figure>';
      h += '<div><b>Model answer</b></div>' + (q.model || '');
      if (q.scheme) h += '<div class="section-h">Marking scheme</div><ul class="marking">' + q.scheme.map((m) => '<li>' + m + '</li>').join('') + '</ul>';
      if (q.draw) h += '<div class="section-h">How to draw it in 2–3 minutes</div>' + q.draw;
      return h;
    }
    h += '<div><b>Answer:</b> ' + answerText(q) + '</div>';
    if (q.explain) h += '<div style="margin-top:6px"><b>Why:</b> ' + q.explain + '</div>';
    if (q.why && q.why.length) h += '<ul class="why">' + q.why.map((w, i) => '<li><b>' + 'ABCDEFGH'[i] + ':</b> ' + w + '</li>').join('') + '</ul>';
    return h;
  }
  function wireQuestions(root, list) {
    const map = {}; list.forEach((q) => (map[q.id] = q));
    $$('.q', root).forEach((el) => {
      const q = map[el.dataset.qid]; if (!q) return;
      el.addEventListener('click', (ev) => {
        const b = ev.target.closest('button[data-act]'); if (!b) return;
        const sol = $('.sol', el);
        if (b.dataset.act === 'check') {
          const ok = evaluate(q, el);
          if (ok === null) { sol.innerHTML = '<div class="verdict no">Attempt the question first (select or type an answer).</div>'; sol.classList.add('show'); return; }
          store.set('q.' + q.id, ok ? 1 : 0);
          markOptions(q, el);
          sol.innerHTML = solutionHTML(q, ok); sol.classList.add('show');
        } else if (b.dataset.act === 'reveal') {
          if (q.type !== 'sub' && q.type !== 'diag' && !el.dataset.confirmed) {
            const att = evaluate(q, el);
            if (att === null) {
              el.dataset.confirmed = '1';
              sol.innerHTML = '<div class="verdict no">Attempt-first: try it, then press Check. Press “Reveal answer” again to give up and see the solution.</div>';
              sol.classList.add('show'); return;
            }
          }
          markOptions(q, el);
          sol.innerHTML = solutionHTML(q, null); sol.classList.add('show');
        }
      });
    });
  }
  function markOptions(q, el) {
    if (q.type === 'mcq' || q.type === 'msq') {
      const ans = q.type === 'mcq' ? [q.answer] : q.answer;
      $$('.opts label', el).forEach((l) => {
        const i = Number(l.dataset.i);
        const checked = $('input', l).checked;
        l.classList.toggle('correct', ans.indexOf(i) >= 0);
        l.classList.toggle('wrong', checked && ans.indexOf(i) < 0);
      });
    }
  }

  /* ---------- figures ---------- */
  function figure(d) {
    return '<figure class="dg-fig" id="fig_' + esc(d.id) + '">' + (d.svg || '') + '<figcaption><b>' + esc(d.id) + ' · ' + esc(d.title || '') + '</b>' + (d.how ? '<br>✏ <i>How to draw:</i> ' + d.how : '') + '</figcaption></figure>';
  }

  /* ---------- pages ---------- */
  const BADGE = { class: ['class', 'From class slides'], researched: ['researched', '⚠ Not covered in class – researched'], extra: ['extra', 'Extra (beyond slides)'] };
  function badge(b) { const x = BADGE[b] || BADGE.class; return '<span class="badge ' + x[0] + '">' + x[1] + '</span>'; }

  function renderSubtopic(u, st) {
    let h = '<section class="card sub" id="st_' + st.id + '">';
    h += '<h2><span class="sid">' + st.id + '</span>' + esc(st.title) + ' ' + badge(st.badge) +
      '<label class="done-toggle"><input type="checkbox" data-done="' + st.id + '"' + (store.get('done.' + st.id, false) ? ' checked' : '') + '> Mark as done</label></h2>';
    h += '<div class="srcline"><b>From:</b> ' + (st.sources || 'n/a') + (st.sourceLine ? '<br><b>' + esc(st.sourceLine) + '</b>' : '') + '</div>';
    h += '<div class="section-h">Concept</div>' + (st.explain || '');
    if (st.keypoints && st.keypoints.length) h += '<div class="keybox"><h4>⚡ Key points &amp; formulas (night-before box)</h4><ul>' + st.keypoints.map((k) => '<li>' + k + '</li>').join('') + '</ul></div>';
    if (st.diagrams && st.diagrams.length) h += '<div class="section-h">Diagrams</div>' + st.diagrams.map(figure).join('');
    if (st.tool && window.TOOLS && window.TOOLS[st.tool]) h += '<div class="section-h">Try it</div><div class="tool" data-tool="' + st.tool + '"></div>';
    if (st.examples && st.examples.length) h += '<div class="section-h">Worked examples</div>' + st.examples.map((e) => '<details open><summary>' + e.title + '</summary>' + e.html + '</details>').join('');
    if (st.code && st.code.length) h += '<div class="section-h">Code / lab programs</div>' + st.code.map((c) => '<details><summary><span class="pill">' + esc(c.id) + '</span> ' + esc(c.title) + ' <span class="hint">(' + esc(c.lang) + ')</span></summary><pre><code>' + esc(c.src) + '</code></pre>' + (c.io ? '<div class="hint"><b>Sample run / expected output:</b></div>' + c.io : '') + '</details>').join('');
    if (st.mistakes && st.mistakes.length) h += '<div class="mistakes"><b>⚠ Common mistakes &amp; exam traps</b><ul>' + st.mistakes.map((m) => '<li>' + m + '</li>').join('') + '</ul></div>';
    if (st.practice && st.practice.length) h += '<div class="section-h">Practice (attempt first)</div>' + st.practice.map((q, i) => renderQ(q, i + 1, 'practice')).join('');
    if (st.subjective && st.subjective.length) h += '<div class="section-h">University-style subjective</div>' + st.subjective.map((q, i) => renderQ(q, 'S' + (i + 1), 'practice')).join('');
    return h + '</section>';
  }
  function pageUnit(id, sub) {
    const u = UNITS.find((x) => x.id === id);
    if (!u) return pageHome();
    let h = '<h1>Unit ' + u.id + ' – ' + esc(u.title) + '</h1>';
    if (u.intro) h += '<p>' + u.intro + '</p>';
    h += '<div class="card toc"><b>Subtopics:</b><br>' + u.subtopics.map((s) => '<a href="#/unit/' + u.id + '/' + s.id + '">' + s.id + ' ' + esc(s.title) + '</a>').join('') + '</div>';
    h += u.subtopics.map((st) => renderSubtopic(u, st)).join('');
    const prev = UNITS.find((x) => x.id === id - 1), next = UNITS.find((x) => x.id === id + 1);
    h += '<div class="row">' + (prev ? '<a class="btn secondary" href="#/unit/' + prev.id + '">← Unit ' + prev.id + '</a>' : '') + (next ? '<a class="btn" href="#/unit/' + next.id + '">Unit ' + next.id + ' →</a>' : '') + '</div>';
    render(h, () => {
      const all = []; u.subtopics.forEach((st) => { all.push(...(st.practice || []), ...(st.subjective || [])); });
      wireQuestions($('#main'), all);
      $$('[data-done]').forEach((cb) => cb.addEventListener('change', () => { store.set('done.' + cb.dataset.done, cb.checked); buildSidebar(); markActive(); }));
      mountTools($('#main'));
      if (sub) { const t = document.getElementById('st_' + sub); if (t) t.scrollIntoView(); }
    });
  }
  function mountTools(root) {
    $$('[data-tool]', root).forEach((el) => { try { window.TOOLS[el.dataset.tool](el); } catch (e) { el.innerHTML = '<div class="hint">Tool failed to load: ' + esc(e.message) + '</div>'; } });
  }
  function pageHome() {
    const E = window.EXTRAS || {};
    let h = '<h1>Modern Computer Architecture — Exam Prep</h1>';
    h += E.home || '';
    h += '<div class="grid2">' + UNITS.map((u) => '<div class="card"><b><a href="#/unit/' + u.id + '">Unit ' + u.id + '</a></b> – ' + esc(u.title) + '<div class="bar" style="margin-top:8px"><span style="width:' + unitPct(u) + '%"></span></div><div class="hint">' + unitPct(u) + '% done · ' + u.subtopics.length + ' subtopics</div></div>').join('') + '</div>';
    render(h);
  }
  function pageStatic(key) {
    const E = window.EXTRAS || {};
    const P = E[key];
    if (!P) return pageHome();
    render(typeof P === 'function' ? P() : P.html, () => {
      if (P.questions) wireQuestions($('#main'), P.questions);
      mountTools($('#main'));
    });
  }
  function pageTools() {
    const T = window.TOOLS || {};
    let h = '<h1>Interactive tools</h1><p class="hint">All tools run offline in your browser.</p>';
    (window.TOOL_ORDER || Object.keys(T)).forEach((k) => { h += '<div class="tool" data-tool="' + k + '"></div>'; });
    render(h, () => mountTools($('#main')));
  }
  function pageDiagrams() {
    const D = window.DIAGQ;
    if (!D) return render('<p>Diagram data missing.</p>');
    let h = '<h1>Diagram Questions</h1>' + (D.intro || '');
    h += '<div class="card toc"><a href="#dq-samples">Your 4 samples</a><a href="#dq-pattern">Pattern analysis</a><a href="#dq-predicted">5 predicted questions</a><a href="#dq-top">Top diagram questions (Units 1–13)</a><a href="#dq-tracer">Datapath tracer</a></div>';
    h += '<h2 id="dq-samples">Phase 1 · Your 4 sample questions, analysed</h2>';
    D.samples.forEach((s, i) => { h += '<div class="card">' + s.analysis + '</div>' + renderQ(s.q, 'Sample ' + (i + 1), 'practice'); });
    h += '<h2 id="dq-pattern">Pattern analysis</h2><div class="card">' + D.pattern + '</div>';
    h += '<h2 id="dq-predicted">5 new predicted questions (same style)</h2>';
    D.predicted.forEach((p, i) => { h += '<div class="card"><b>Why this is likely:</b> ' + p.why + '</div>' + renderQ(p.q, 'P' + (i + 1), 'practice'); });
    h += '<h2 id="dq-tracer">Practice: trace an instruction and fill the control signals</h2><div class="tool" data-tool="datapath"></div>';
    h += '<h2 id="dq-top">Top diagram questions for this exam (ranked)</h2>' + (D.topIntro || '');
    D.top.forEach((t, i) => { h += renderQ(t.q, '#' + (i + 1), 'practice'); });
    const all = D.samples.map((s) => s.q).concat(D.predicted.map((p) => p.q), D.top.map((t) => t.q));
    render(h, () => { wireQuestions($('#main'), all); mountTools($('#main')); });
  }

  /* ---------- mock papers ---------- */
  let timerHandle = null;
  function pageMock(n) {
    const M = (window.MOCKS || {})[n];
    if (!M) return render('<p>Mock paper ' + n + ' missing.</p>');
    const secs = [['A', 'Section A · MCQs'], ['B', 'Section B · Comprehension MCQs'], ['C', 'Section C · Numericals'], ['D', 'Section D · Match the following'], ['E', 'Section E · Compulsory subjective (5 marks each)'], ['F', 'Section F · Diagram questions (5 marks each)']];
    let h = '<h1>' + esc(M.title) + '</h1>' + (M.instructions || '');
    h += '<div class="timer"><span>⏱ <span class="t" id="tmr">' + fmt(M.minutes * 60) + '</span></span><button class="btn" id="tStart">Start timer</button><button class="btn secondary" id="tPause">Pause</button><button class="btn warn" id="submitPaper">Submit Paper</button><span id="mockScore" class="score"></span></div>';
    const list = [];
    secs.forEach((s) => {
      const qs = M.sections[s[0]] || [];
      h += '<h2>' + s[1] + '</h2>';
      if (s[0] === 'B' && M.passages) {
        M.passages.forEach((p) => {
          h += '<div class="card"><b>' + esc(p.title) + '</b> <span class="pill">Unit ' + esc(p.unit) + '</span>' + p.html + '</div>';
          qs.filter((q) => q.passage === p.id).forEach((q) => { q.unitLabel = q.unitLabel || p.unit; h += renderQ(q, s[0] + (qs.indexOf(q) + 1), 'exam'); list.push(q); });
        });
      } else qs.forEach((q, i) => { h += renderQ(q, s[0] + (i + 1), 'exam'); list.push(q); });
    });
    h += '<div class="card"><button class="btn warn" id="submitPaper2">Submit Paper</button> <span class="hint">Sections A–D are auto-scored; reveal E and F model answers to self-grade.</span></div>';
    render(h, () => {
      wireQuestions($('#main'), list);
      let left = store.get('mock' + n + '.left', M.minutes * 60), running = false;
      const show = () => ($('#tmr').textContent = fmt(left));
      show();
      if (timerHandle) clearInterval(timerHandle);
      timerHandle = setInterval(() => {
        if (!running || !document.getElementById('tmr')) return;
        left = Math.max(0, left - 1); store.set('mock' + n + '.left', left); show();
        if (left === 0) { running = false; submit(); }
      }, 1000);
      $('#tStart').onclick = () => (running = true);
      $('#tPause').onclick = () => (running = false);
      const submit = () => {
        running = false;
        let got = 0, max = 0;
        list.forEach((q) => {
          if (q.type === 'sub' || q.type === 'diag') return;
          const el = document.querySelector('[data-qid="' + CSS.escape(q.id) + '"]');
          const ok = evaluate(q, el);
          const mk = q.marks || 1; max += mk; if (ok) got += mk;
          markOptions(q, el);
          const sol = $('.sol', el); sol.innerHTML = solutionHTML(q, ok === null ? false : ok) + (ok === null ? '<div class="hint">Not attempted.</div>' : ''); sol.classList.add('show');
        });
        const res = { got: got, max: max, when: new Date().toISOString().slice(0, 16).replace('T', ' ') };
        store.set('mock' + n + '.result', res);
        $('#mockScore').textContent = 'Sections A–D: ' + got + ' / ' + max;
        window.scrollTo(0, 0);
      };
      $('#submitPaper').onclick = submit; $('#submitPaper2').onclick = submit;
    });
  }
  function fmt(s) { const m = Math.floor(s / 60), x = s % 60; return (m < 10 ? '0' : '') + m + ':' + (x < 10 ? '0' : '') + x; }

  /* ---------- progress ---------- */
  function pageProgress() {
    let h = '<h1>Progress</h1><p class="hint">Saved only in this browser (localStorage).</p>';
    h += '<div class="card"><table><tr><th>Unit</th><th>Topics done</th><th>Practice answered</th><th>Accuracy</th></tr>';
    UNITS.forEach((u) => {
      const qs = []; u.subtopics.forEach((s) => qs.push(...(s.practice || [])));
      const tried = qs.filter((q) => store.get('q.' + q.id, null) != null);
      const right = tried.filter((q) => store.get('q.' + q.id, 0) === 1);
      const pct = unitPct(u);
      h += '<tr><td><a href="#/unit/' + u.id + '">' + u.id + '. ' + esc(u.short || u.title) + '</a></td><td style="min-width:160px"><div class="bar"><span style="width:' + pct + '%"></span></div>' + pct + '%</td><td>' + tried.length + ' / ' + qs.length + '</td><td>' + (tried.length ? Math.round(100 * right.length / tried.length) + '%' : '–') + '</td></tr>';
    });
    h += '</table></div>';
    [1, 2].forEach((n) => { const r = store.get('mock' + n + '.result', null); h += '<div class="card"><b>Mock Paper ' + n + ':</b> ' + (r ? r.got + ' / ' + r.max + ' (A–D) on ' + esc(r.when) : 'not submitted yet') + '</div>'; });
    h += '<button class="btn warn" id="resetAll">Reset all progress</button>';
    render(h, () => {
      $('#resetAll').onclick = () => { if (window.confirm('Reset all progress, quiz results and mock timers?')) { store.clearAll(); buildSidebar(); pageProgress(); } };
    });
  }

  /* ---------- router ---------- */
  function render(html, after) {
    const m = $('#main'); m.innerHTML = html; if (after) after();
    if (!/#\/unit\/\d+\//.test(location.hash)) window.scrollTo(0, 0);
    markActive();
    $('#sidebar').classList.remove('open');
  }
  function route() {
    const h = location.hash || '#/home';
    const parts = h.slice(2).split('/');
    try {
      if (parts[0] === 'unit') pageUnit(Number(parts[1]), parts[2]);
      else if (parts[0] === 'mock') pageMock(Number(parts[1]));
      else if (parts[0] === 'diagrams') pageDiagrams();
      else if (parts[0] === 'tools') pageTools();
      else if (parts[0] === 'progress') pageProgress();
      else if (parts[0] === 'plan' || parts[0] === 'revision' || parts[0] === 'bonus') pageStatic(parts[0]);
      else pageHome();
    } catch (e) {
      $('#main').innerHTML = '<div class="card"><b>Render error:</b> ' + esc(e.message) + '</div>';
      console.error(e);
    }
  }
  window.COA = { renderQ, wireQuestions, figure, store, evaluate, solutionHTML };
  document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    $('#themeBtn').onclick = () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    $('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
    $('#printBtn').onclick = () => window.print();
    window.addEventListener('hashchange', route);
    route();
  });
})();
