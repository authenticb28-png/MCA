/* tools.js — interactive tools. Each TOOLS[name](el) mounts into a container element. */
(function () {
  'use strict';
  const TOOLS = (window.TOOLS = {});
  window.TOOL_ORDER = ['truthtable', 'kmap', 'numconv', 'overflow', 'mips', 'pipeline', 'datapath'];
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $ = (sel, root) => root.querySelector(sel);

  /* ================= Boolean engine ================= */
  const BOOL = (window.BOOL = {});
  // parse: OR (+ |) < XOR (^) < AND (· * & or juxtaposition) < NOT (~ ! prefix, ' postfix)
  BOOL.parse = function (src) {
    const s = src.replace(/[·.*&∧]/g, '*').replace(/[∨|]/g, '+').replace(/[¬!~]/g, '~').replace(/⊕/g, '^').replace(/[’`]/g, "'");
    let i = 0;
    const peek = () => { while (s[i] === ' ') i++; return s[i]; };
    const vars = new Set();
    function parseOr() { let n = parseXor(); while (peek() === '+') { i++; n = { t: '+', a: n, b: parseXor() }; } return n; }
    function parseXor() { let n = parseAnd(); while (peek() === '^') { i++; n = { t: '^', a: n, b: parseAnd() }; } return n; }
    function parseAnd() {
      let n = parseNot();
      for (;;) {
        const c = peek();
        if (c === '*') { i++; n = { t: '*', a: n, b: parseNot() }; }
        else if (c && (/[A-Za-z01(~]/.test(c))) n = { t: '*', a: n, b: parseNot() };
        else break;
      }
      return n;
    }
    function parseNot() {
      if (peek() === '~') { i++; return post({ t: '~', a: parseNot() }); }
      return post(parseAtom());
    }
    function post(n) { while (peek() === "'") { i++; n = { t: '~', a: n }; } return n; }
    function parseAtom() {
      const c = peek();
      if (c === '(') { i++; const n = parseOr(); if (peek() !== ')') throw new Error('missing )'); i++; return n; }
      if (c === '0' || c === '1') { i++; return { t: 'c', v: c === '1' }; }
      if (c && /[A-Za-z]/.test(c)) { i++; const v = c.toUpperCase(); vars.add(v); return { t: 'v', v: v }; }
      throw new Error('unexpected "' + (c || 'end') + '" at position ' + (i + 1));
    }
    const tree = parseOr();
    if (peek() !== undefined) throw new Error('unexpected "' + peek() + '" at position ' + (i + 1));
    return { tree: tree, vars: Array.from(vars).sort() };
  };
  BOOL.evalTree = function (n, env) {
    switch (n.t) {
      case 'c': return n.v;
      case 'v': return !!env[n.v];
      case '~': return !BOOL.evalTree(n.a, env);
      case '*': return BOOL.evalTree(n.a, env) && BOOL.evalTree(n.b, env);
      case '+': return BOOL.evalTree(n.a, env) || BOOL.evalTree(n.b, env);
      case '^': return BOOL.evalTree(n.a, env) !== BOOL.evalTree(n.b, env);
    }
    return false;
  };
  BOOL.minterms = function (tree, vars) {
    const out = [];
    for (let m = 0; m < (1 << vars.length); m++) {
      const env = {}; vars.forEach((v, k) => (env[v] = (m >> (vars.length - 1 - k)) & 1));
      if (BOOL.evalTree(tree, env)) out.push(m);
    }
    return out;
  };
  // Quine–McCluskey + exact minimum cover (fine for up to 5 variables)
  BOOL.minimize = function (n, ones, dcs) {
    dcs = dcs || [];
    const all = ones.concat(dcs);
    if (!ones.length) return { terms: [], expr: '0' };
    if (ones.length + dcs.length === (1 << n)) return { terms: [{ val: 0, mask: (1 << n) - 1 }], expr: '1' };
    let cur = all.map((m) => ({ val: m, mask: 0 }));
    const primes = [];
    const key = (t) => t.val + ':' + t.mask;
    while (cur.length) {
      const used = new Set(), next = new Map();
      for (let a = 0; a < cur.length; a++) for (let b = a + 1; b < cur.length; b++) {
        const x = cur[a], y = cur[b];
        if (x.mask !== y.mask) continue;
        const d = x.val ^ y.val;
        if (d && (d & (d - 1)) === 0) {
          const t = { val: x.val & ~d, mask: x.mask | d };
          next.set(key(t), t); used.add(a); used.add(b);
        }
      }
      cur.forEach((t, k) => { if (!used.has(k) && !primes.some((p) => key(p) === key(t))) primes.push(t); });
      cur = Array.from(next.values());
    }
    const covers = (t, m) => ((m & ~t.mask) === t.val);
    const useful = primes.filter((p) => ones.some((m) => covers(p, m)));
    const lits = (t) => n - popc(t.mask);
    // exact cover: increasing number of terms, then fewest literals
    let best = null;
    const ess = [];
    ones.forEach((m) => { const c = useful.filter((p) => covers(p, m)); if (c.length === 1 && ess.indexOf(c[0]) < 0) ess.push(c[0]); });
    const left = ones.filter((m) => !ess.some((p) => covers(p, m)));
    const rest = useful.filter((p) => ess.indexOf(p) < 0);
    if (!left.length) best = ess.slice();
    else {
      for (let k = 1; k <= rest.length && !best; k++) {
        combos(rest, k, (sel) => {
          if (left.every((m) => sel.some((p) => covers(p, m)))) {
            const cand = ess.concat(sel);
            const cost = cand.reduce((s, p) => s + lits(p), 0);
            if (!best || cost < best.cost) { best = cand.slice(); best.cost = cost; }
          }
        });
      }
    }
    return { terms: best, primes: useful, essential: ess };
  };
  function popc(x) { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; }
  function combos(arr, k, fn, start, acc) {
    start = start || 0; acc = acc || [];
    if (acc.length === k) { fn(acc); return; }
    for (let i = start; i < arr.length; i++) { acc.push(arr[i]); combos(arr, k, fn, i + 1, acc); acc.pop(); }
  }
  BOOL.termStr = function (t, vars) {
    const n = vars.length; let s = '';
    for (let k = 0; k < n; k++) { const bit = 1 << (n - 1 - k); if (t.mask & bit) continue; s += vars[k] + ((t.val & bit) ? '' : "'"); }
    return s || '1';
  };
  BOOL.sumStr = function (terms, vars) { if (!terms || !terms.length) return '0'; return terms.map((t) => BOOL.termStr(t, vars)).join(' + '); };
  BOOL.cells = function (t, n) { const out = []; for (let m = 0; m < (1 << n); m++) if ((m & ~t.mask) === t.val) out.push(m); return out; };
  BOOL.posStr = function (n, ones, dcs, vars) {
    const zeros = []; for (let m = 0; m < (1 << n); m++) if (ones.indexOf(m) < 0 && dcs.indexOf(m) < 0) zeros.push(m);
    if (!zeros.length) return '1';
    const r = BOOL.minimize(n, zeros, dcs);
    return r.terms.map((t) => {
      const parts = [];
      for (let k = 0; k < n; k++) { const bit = 1 << (n - 1 - k); if (t.mask & bit) continue; parts.push(vars[k] + ((t.val & bit) ? "'" : '')); }
      return parts.length > 1 ? '(' + parts.join(' + ') + ')' : parts[0];
    }).join('');
  };

  /* ================= 1. truth table generator ================= */
  TOOLS.truthtable = function (el) {
    el.innerHTML = '<h3>Truth-table generator</h3><div class="hint">Operators: <span class="kbd">+</span> OR, <span class="kbd">·</span> or juxtaposition AND, <span class="kbd">\'</span> or <span class="kbd">~</span> NOT, <span class="kbd">^</span> XOR, brackets. Example: <code>A\'B + AB\'C + (A^C)</code></div>' +
      '<div class="row"><input type="text" id="ttExpr" size="34" value="A\'B + BC\' + AB\'C" aria-label="expression"><button class="btn" id="ttGo">Build table</button></div><div id="ttOut"></div>';
    const go = () => {
      const out = $('#ttOut', el);
      try {
        const p = BOOL.parse($('#ttExpr', el).value);
        if (p.vars.length > 5) throw new Error('use at most 5 variables');
        const n = p.vars.length, ones = BOOL.minterms(p.tree, p.vars);
        let h = '<div class="table-wrap"><table class="tt"><tr><th>m</th>' + p.vars.map((v) => '<th>' + v + '</th>').join('') + '<th>F</th></tr>';
        for (let m = 0; m < (1 << n); m++) {
          h += '<tr><td>' + m + '</td>' + p.vars.map((v, k) => '<td>' + ((m >> (n - 1 - k)) & 1) + '</td>').join('') + '<td><b>' + (ones.indexOf(m) >= 0 ? 1 : 0) + '</b></td></tr>';
        }
        h += '</table></div>';
        const zeros = []; for (let m = 0; m < (1 << n); m++) if (ones.indexOf(m) < 0) zeros.push(m);
        const mn = BOOL.minimize(n, ones, []);
        h += '<div class="out">F = Σm(' + ones.join(', ') + ')\nF = ΠM(' + zeros.join(', ') + ')\nMinimal SOP: F = ' + BOOL.sumStr(mn.terms, p.vars) + '\nMinimal POS: F = ' + BOOL.posStr(n, ones, [], p.vars) + '</div>';
        out.innerHTML = h;
      } catch (e) { out.innerHTML = '<div class="out">Error: ' + esc(e.message) + '</div>'; }
    };
    $('#ttGo', el).onclick = go; $('#ttExpr', el).addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
    go();
  };

  /* ================= 2. K-map practice ================= */
  TOOLS.kmap = function (el) {
    const st = { n: 4, v: {} };
    el.innerHTML = '<h3>K-map practice (2, 3 or 4 variables, with don\'t-cares)</h3>' +
      '<div class="row"><label>Variables <select id="kmN"><option>2</option><option>3</option><option selected>4</option></select></label>' +
      '<button class="btn secondary" id="kmRand">Random function</button><button class="btn secondary" id="kmClear">Clear</button>' +
      '<label><input type="text" id="kmSig" size="26" placeholder="e.g. 0,2,5,7 d 8,10" aria-label="minterms"></label><button class="btn secondary" id="kmLoad">Load Σm (d = don\'t-cares)</button></div>' +
      '<div class="hint">Click a cell to cycle 0 → 1 → X. Then write your minimal SOP and check it.</div><div id="kmGrid"></div>' +
      '<div class="row"><input type="text" id="kmAns" size="30" placeholder="Your SOP, e.g. B\'D\' + BD" aria-label="your answer"><button class="btn" id="kmCheck">Check my answer</button><button class="btn secondary" id="kmSolve">Show solution</button></div><div id="kmOut"></div>';
    const vars = () => ['A', 'B', 'C', 'D'].slice(0, st.n);
    const G = { 1: ['0', '1'], 2: ['00', '01', '11', '10'] };
    function draw() {
      const n = st.n, rv = Math.floor(n / 2), cv = n - rv, rl = G[rv], cl = G[cv];
      let h = '<div class="kmgrid" style="grid-template-columns:repeat(' + (cl.length + 1) + ',46px)"><div class="hdr">' + vars().slice(0, rv).join('') + '\\' + vars().slice(rv).join('') + '</div>' + cl.map((c) => '<div class="hdr">' + c + '</div>').join('');
      rl.forEach((r) => { h += '<div class="hdr">' + r + '</div>'; cl.forEach((c) => { const m = parseInt(r + c, 2); h += '<button data-m="' + m + '" title="m' + m + '">' + (st.v[m] || '0') + '</button>'; }); });
      h += '</div>';
      $('#kmGrid', el).innerHTML = h;
      el.querySelectorAll('#kmGrid button').forEach((b) => (b.onclick = () => { const m = +b.dataset.m; st.v[m] = { 0: '1', 1: 'X', X: '0' }[st.v[m] || '0']; draw(); }));
    }
    const sets = () => { const ones = [], dc = []; Object.keys(st.v).forEach((k) => { if (st.v[k] === '1') ones.push(+k); if (st.v[k] === 'X') dc.push(+k); }); return { ones: ones.sort((a, b) => a - b), dc: dc.sort((a, b) => a - b) }; };
    $('#kmN', el).onchange = (e) => { st.n = +e.target.value; st.v = {}; draw(); $('#kmOut', el).innerHTML = ''; };
    $('#kmClear', el).onclick = () => { st.v = {}; draw(); $('#kmOut', el).innerHTML = ''; };
    $('#kmRand', el).onclick = () => { st.v = {}; for (let m = 0; m < (1 << st.n); m++) { const r = Math.random(); st.v[m] = r < 0.42 ? '1' : (st.n > 2 && r < 0.5 ? 'X' : '0'); } draw(); $('#kmOut', el).innerHTML = ''; };
    $('#kmLoad', el).onclick = () => {
      const txt = $('#kmSig', el).value.toLowerCase(); const parts = txt.split('d');
      st.v = {}; const num = (s) => (s || '').split(/[^0-9]+/).filter((x) => x !== '').map(Number).filter((m) => m < (1 << st.n));
      num(parts[0]).forEach((m) => (st.v[m] = '1')); num(parts[1]).forEach((m) => (st.v[m] = 'X')); draw();
    };
    function solution() {
      const s = sets(), r = BOOL.minimize(st.n, s.ones, s.dc);
      return { s: s, r: r, expr: BOOL.sumStr(r.terms, vars()) };
    }
    $('#kmSolve', el).onclick = () => {
      const x = solution();
      const groups = (x.r.terms || []).map((t, i) => ({ cells: BOOL.cells(t, st.n), label: BOOL.termStr(t, vars()), c: i % 6 }));
      $('#kmOut', el).innerHTML = '<figure class="dg-fig">' + S.kmap({ vars: vars(), ones: x.s.ones, dc: x.s.dc, groups: groups, title: 'Minimal grouping' }) + '</figure>' +
        '<div class="out">F = Σm(' + x.s.ones.join(', ') + ')' + (x.s.dc.length ? ' + d(' + x.s.dc.join(', ') + ')' : '') + '\nMinimal SOP: F = ' + x.expr +
        '\nPrime implicants: ' + (x.r.primes || []).map((p) => BOOL.termStr(p, vars())).join(', ') + '\nEssential: ' + ((x.r.essential || []).map((p) => BOOL.termStr(p, vars())).join(', ') || 'none (cyclic map)') + '\nMinimal POS: F = ' + BOOL.posStr(st.n, x.s.ones, x.s.dc, vars()) + '</div>';
    };
    $('#kmCheck', el).onclick = () => {
      const out = $('#kmOut', el); const x = solution();
      try {
        const p = BOOL.parse($('#kmAns', el).value || '0');
        const extra = p.vars.filter((v) => vars().indexOf(v) < 0);
        if (extra.length) throw new Error('unknown variable ' + extra.join(','));
        const mine = BOOL.minterms(p.tree, vars());
        const bad = []; for (let m = 0; m < (1 << st.n); m++) { if (x.s.dc.indexOf(m) >= 0) continue; if ((mine.indexOf(m) >= 0) !== (x.s.ones.indexOf(m) >= 0)) bad.push(m); }
        if (bad.length) { out.innerHTML = '<div class="verdict no">✘ Not equivalent — wrong at minterm(s) ' + bad.join(', ') + '.</div>'; return; }
        const myLits = ($('#kmAns', el).value.match(/[A-Za-z]/g) || []).length;
        const bestLits = (x.r.terms || []).reduce((s, t) => s + BOOL.termStr(t, vars()).replace(/'/g, '').length, 0);
        out.innerHTML = myLits <= bestLits ? '<div class="verdict ok">✔ Correct and minimal (' + myLits + ' literals).</div>' : '<div class="verdict ok">✔ Equivalent, but not minimal: ' + myLits + ' literals vs ' + bestLits + '. Try bigger groups.</div>';
      } catch (e) { out.innerHTML = '<div class="verdict no">Could not read your expression: ' + esc(e.message) + '</div>'; }
    };
    draw();
  };

  /* ================= 3. number converter & two's complement ================= */
  const big = (s) => { s = s.trim().toLowerCase().replace(/_/g, ''); let neg = false; if (s[0] === '-') { neg = true; s = s.slice(1); } let v; if (s.startsWith('0x')) v = BigInt('0x' + s.slice(2)); else if (s.startsWith('0b')) v = BigInt('0b' + s.slice(2)); else if (/^[0-9]+$/.test(s)) v = BigInt(s); else throw new Error('use decimal, 0x… or 0b… form'); return neg ? -v : v; };
  const binN = (v, n) => { const m = (1n << BigInt(n)); v = ((v % m) + m) % m; return v.toString(2).padStart(n, '0'); };
  const grp = (b) => b.replace(/(.{4})(?=.)/g, '$1 ');
  TOOLS.numconv = function (el) {
    el.innerHTML = '<h3>Number converter &amp; two\'s complement</h3><div class="row"><input type="text" id="ncV" value="-45" size="16" aria-label="value"><label>Width <select id="ncN"><option>4</option><option selected>8</option><option>16</option><option>32</option></select> bits</label><button class="btn" id="ncGo">Convert</button></div><div class="hint">Enter decimal (−45), hex (0xB7) or binary (0b1011). Hex/binary inputs are read as raw n-bit patterns.</div><div class="out" id="ncOut"></div>';
    const go = () => {
      const o = $('#ncOut', el);
      try {
        const raw = $('#ncV', el).value, n = +$('#ncN', el).value, N = BigInt(n);
        const v = big(raw); const isPattern = /^\s*0[xb]/i.test(raw);
        const lines = [];
        const minS = -(1n << (N - 1n)), maxS = (1n << (N - 1n)) - 1n, maxU = (1n << N) - 1n;
        let pattern;
        if (isPattern) { if (v < 0n || v > maxU) throw new Error('pattern does not fit in ' + n + ' bits'); pattern = binN(v, n); }
        else {
          if (v < minS || v > maxU) throw new Error(v + ' does not fit in ' + n + ' bits (signed range ' + minS + '..' + maxS + ', unsigned 0..' + maxU + ')');
          pattern = binN(v, n);
          if (v < 0n) {
            const pos = binN(-v, n), inv = pos.split('').map((c) => (c === '1' ? '0' : '1')).join('');
            lines.push('Negation steps for ' + v + ':', '  +' + (-v) + '        = ' + grp(pos), '  invert bits   = ' + grp(inv), '  add 1         = ' + grp(pattern));
          } else if (v > maxS) lines.push('Note: ' + v + ' only fits as UNSIGNED in ' + n + ' bits (signed max is ' + maxS + ').');
        }
        const u = BigInt('0b' + pattern), s = pattern[0] === '1' ? u - (1n << N) : u;
        lines.push('Bit pattern   : ' + grp(pattern), 'Hex           : 0x' + u.toString(16).toUpperCase().padStart(n / 4, '0'), 'Unsigned      : ' + u, 'Signed (2\'s)  : ' + s + '   (MSB weight = −' + (1n << (N - 1n)) + ')');
        if (s >= -(maxS) && s <= maxS) {
          const mag = binN(s < 0n ? -s : s, n - 1);
          lines.push('Sign-magnitude: ' + (s < 0n ? '1' : '0') + ' ' + mag, '1\'s complement: ' + (s < 0n ? binN(-s, n).split('').map((c) => (c === '1' ? '0' : '1')).join('') : pattern));
        }
        lines.push('Sign-extended to ' + (2 * n) + ' bits: ' + grp(pattern[0].repeat(n) + pattern), 'Zero-extended to ' + (2 * n) + ' bits: ' + grp('0'.repeat(n) + pattern));
        lines.push('Signed range for ' + n + ' bits: ' + minS + ' to ' + maxS + '; unsigned: 0 to ' + maxU);
        o.textContent = lines.join('\n');
      } catch (e) { o.textContent = 'Error: ' + e.message; }
    };
    $('#ncGo', el).onclick = go; go();
  };
  TOOLS.overflow = function (el) {
    el.innerHTML = '<h3>Binary add / subtract with carry &amp; overflow flags</h3><div class="row"><input type="text" id="ovA" value="5" size="8" aria-label="A"><select id="ovOp"><option value="+">+</option><option value="-">−</option></select><input type="text" id="ovB" value="4" size="8" aria-label="B"><label>Width <select id="ovN"><option selected>4</option><option>8</option><option>16</option></select></label><button class="btn" id="ovGo">Compute</button></div><div class="out" id="ovOut"></div>';
    const go = () => {
      const o = $('#ovOut', el);
      try {
        const n = +$('#ovN', el).value, N = BigInt(n);
        const a = big($('#ovA', el).value), b0 = big($('#ovB', el).value), sub = $('#ovOp', el).value === '-';
        const A = binN(a, n), B0 = binN(b0, n);
        const B = sub ? B0.split('').map((c) => (c === '1' ? '0' : '1')).join('') : B0;
        let c = sub ? 1 : 0; const carries = new Array(n + 1).fill(0); carries[0] = c; let sum = '';
        for (let i = n - 1, k = 0; i >= 0; i--, k++) { const x = +A[i] + +B[i] + c; sum = (x & 1) + sum; c = x >> 1; carries[k + 1] = c; }
        const cin = carries[n - 1], cout = carries[n], V = cin ^ cout;
        const toS = (p) => { const u = BigInt('0b' + p); return p[0] === '1' ? u - (1n << N) : u; };
        const lines = [];
        lines.push('A           = ' + grp(A) + '   (signed ' + toS(A) + ', unsigned ' + BigInt('0b' + A) + ')');
        lines.push((sub ? '~B (B inv.) = ' : 'B           = ') + grp(B) + (sub ? '   with Cin = 1  (A − B = A + ~B + 1)' : ''));
        lines.push('carries     = ' + grp(carries.slice(0, n).reverse().join('')) + '   (carry INTO each column, MSB first)');
        lines.push('-'.repeat(14 + n + n / 4));
        lines.push('Result      = ' + grp(sum) + '   (signed ' + toS(sum) + ', unsigned ' + BigInt('0b' + sum) + ')');
        lines.push('Carry into MSB = ' + cin + ', carry out of MSB (C) = ' + cout);
        lines.push('V (signed overflow) = Cin(MSB) XOR Cout(MSB) = ' + cin + ' ⊕ ' + cout + ' = ' + V);
        lines.push(sub ? 'Unsigned subtraction: borrow occurred = ' + (1 - cout) + ' (C = 0 means A < B unsigned)' : 'Unsigned overflow (CF) = ' + cout);
        const exact = sub ? toS(A) - toS(B0) : toS(A) + toS(B0);
        lines.push('True signed answer = ' + exact + (V ? '  → does NOT fit in ' + n + ' bits: OVERFLOW' : '  → fits, no signed overflow'));
        o.textContent = lines.join('\n');
      } catch (e) { o.textContent = 'Error: ' + e.message; }
    };
    $('#ovGo', el).onclick = go; go();
  };

  /* ================= 4. MIPS encoder / decoder ================= */
  const REGN = ['$zero', '$at', '$v0', '$v1', '$a0', '$a1', '$a2', '$a3', '$t0', '$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7', '$s0', '$s1', '$s2', '$s3', '$s4', '$s5', '$s6', '$s7', '$t8', '$t9', '$k0', '$k1', '$gp', '$sp', '$fp', '$ra'];
  const RF = { add: 0x20, addu: 0x21, sub: 0x22, subu: 0x23, and: 0x24, or: 0x25, xor: 0x26, nor: 0x27, slt: 0x2a, sltu: 0x2b, sll: 0x00, srl: 0x02, sra: 0x03, jr: 0x08, mult: 0x18, multu: 0x19, div: 0x1a, divu: 0x1b, mfhi: 0x10, mflo: 0x12 };
  const IOP = { addi: 0x08, addiu: 0x09, slti: 0x0a, sltiu: 0x0b, andi: 0x0c, ori: 0x0d, xori: 0x0e, lui: 0x0f, lw: 0x23, sw: 0x2b, lb: 0x20, lbu: 0x24, lh: 0x21, lhu: 0x25, sb: 0x28, sh: 0x29, beq: 0x04, bne: 0x05, blez: 0x06, bgtz: 0x07 };
  const JOP = { j: 0x02, jal: 0x03 };
  const MIPS = (window.MIPS = { REGN: REGN, RF: RF, IOP: IOP, JOP: JOP });
  MIPS.reg = function (t) {
    t = t.trim(); if (t[0] !== '$') throw new Error('register expected, got "' + t + '"');
    const i = REGN.indexOf(t); if (i >= 0) return i;
    if (t === '$s8') return 30;
    const n = parseInt(t.slice(1), 10); if (!isNaN(n) && n >= 0 && n < 32) return n;
    throw new Error('unknown register ' + t);
  };
  const num = (t) => { t = t.trim(); const neg = t[0] === '-'; const x = neg ? t.slice(1) : t; const v = /^0x/i.test(x) ? parseInt(x, 16) : parseInt(x, 10); if (isNaN(v)) throw new Error('number expected, got "' + t + '"'); return neg ? -v : v; };
  const bits = (v, n) => ((v >>> 0) & ((n === 32 ? 0xffffffff : (1 << n) - 1))).toString(2).padStart(n, '0');
  MIPS.assemble = function (line) {
    const m = line.trim().replace(/#.*/, '').match(/^([a-z]+)\s*(.*)$/i); if (!m) throw new Error('empty line');
    const op = m[1].toLowerCase(); const a = m[2].split(',').map((x) => x.trim()).filter((x) => x !== '');
    if (op in RF) {
      let rs = 0, rt = 0, rd = 0, sh = 0;
      if (op === 'sll' || op === 'srl' || op === 'sra') { rd = MIPS.reg(a[0]); rt = MIPS.reg(a[1]); sh = num(a[2]); }
      else if (op === 'jr') { rs = MIPS.reg(a[0]); }
      else if (/^(mult|multu|div|divu)$/.test(op)) { rs = MIPS.reg(a[0]); rt = MIPS.reg(a[1]); }
      else if (op === 'mfhi' || op === 'mflo') { rd = MIPS.reg(a[0]); }
      else { if (a.length !== 3) throw new Error(op + ' needs rd, rs, rt'); rd = MIPS.reg(a[0]); rs = MIPS.reg(a[1]); rt = MIPS.reg(a[2]); }
      const f = [{ n: 'opcode', b: 6, v: 0 }, { n: 'rs', b: 5, v: rs }, { n: 'rt', b: 5, v: rt }, { n: 'rd', b: 5, v: rd }, { n: 'shamt', b: 5, v: sh }, { n: 'funct', b: 6, v: RF[op] }];
      return { fmt: 'R', f: f };
    }
    if (op in IOP) {
      let rs = 0, rt = 0, imm = 0;
      if (/^(lw|sw|lb|lbu|lh|lhu|sb|sh)$/.test(op)) {
        rt = MIPS.reg(a[0]); const mm = (a[1] || '').match(/^(-?[0-9a-fx]*)\s*\((\$[a-z0-9]+)\)$/i); if (!mm) throw new Error('use offset($base), e.g. 8($sp)');
        imm = mm[1] ? num(mm[1]) : 0; rs = MIPS.reg(mm[2]);
      } else if (op === 'lui') { rt = MIPS.reg(a[0]); imm = num(a[1]); }
      else if (op === 'beq' || op === 'bne') { rs = MIPS.reg(a[0]); rt = MIPS.reg(a[1]); imm = num(a[2]); }
      else if (op === 'blez' || op === 'bgtz') { rs = MIPS.reg(a[0]); imm = num(a[1]); }
      else { rt = MIPS.reg(a[0]); rs = MIPS.reg(a[1]); imm = num(a[2]); }
      if (imm < -32768 || imm > 65535) throw new Error('immediate does not fit in 16 bits');
      return { fmt: 'I', f: [{ n: 'opcode', b: 6, v: IOP[op] }, { n: 'rs', b: 5, v: rs }, { n: 'rt', b: 5, v: rt }, { n: 'immediate', b: 16, v: imm & 0xffff }] };
    }
    if (op in JOP) {
      const t = num(a[0]);
      return { fmt: 'J', f: [{ n: 'opcode', b: 6, v: JOP[op] }, { n: 'address', b: 26, v: (t >>> 2) & 0x3ffffff }], note: 'target ' + a[0] + ' → field = target >> 2 (keep low 26 bits)' };
    }
    throw new Error('unsupported instruction "' + op + '"');
  };
  MIPS.word = function (f) { let w = 0; f.forEach((x) => { w = (w * Math.pow(2, x.b)) + (x.v >>> 0); }); return w >>> 0; };
  MIPS.disasm = function (w) {
    w = w >>> 0; const op = w >>> 26, rs = (w >>> 21) & 31, rt = (w >>> 16) & 31, rd = (w >>> 11) & 31, sh = (w >>> 6) & 31, fn = w & 63, imm = w & 0xffff, simm = imm & 0x8000 ? imm - 65536 : imm;
    const R = REGN;
    if (op === 0) {
      const name = Object.keys(RF).find((k) => RF[k] === fn); if (!name) throw new Error('unknown funct ' + fn);
      let asm;
      if (/^(sll|srl|sra)$/.test(name)) asm = name + ' ' + R[rd] + ', ' + R[rt] + ', ' + sh;
      else if (name === 'jr') asm = 'jr ' + R[rs];
      else if (/^(mult|multu|div|divu)$/.test(name)) asm = name + ' ' + R[rs] + ', ' + R[rt];
      else if (/^(mfhi|mflo)$/.test(name)) asm = name + ' ' + R[rd];
      else asm = name + ' ' + R[rd] + ', ' + R[rs] + ', ' + R[rt];
      return { fmt: 'R', asm: asm, f: [{ n: 'opcode', b: 6, v: 0 }, { n: 'rs', b: 5, v: rs }, { n: 'rt', b: 5, v: rt }, { n: 'rd', b: 5, v: rd }, { n: 'shamt', b: 5, v: sh }, { n: 'funct', b: 6, v: fn }] };
    }
    const jn = Object.keys(JOP).find((k) => JOP[k] === op);
    if (jn) return { fmt: 'J', asm: jn + ' 0x' + ((w & 0x3ffffff) * 4).toString(16) + '  (word address × 4, upper 4 bits from PC)', f: [{ n: 'opcode', b: 6, v: op }, { n: 'address', b: 26, v: w & 0x3ffffff }] };
    const name = Object.keys(IOP).find((k) => IOP[k] === op); if (!name) throw new Error('unknown opcode ' + op);
    let asm;
    if (/^(lw|sw|lb|lbu|lh|lhu|sb|sh)$/.test(name)) asm = name + ' ' + R[rt] + ', ' + simm + '(' + R[rs] + ')';
    else if (name === 'lui') asm = 'lui ' + R[rt] + ', 0x' + imm.toString(16);
    else if (name === 'beq' || name === 'bne') asm = name + ' ' + R[rs] + ', ' + R[rt] + ', ' + simm + '   (target = PC + 4 + ' + simm + ' × 4)';
    else if (/^(andi|ori|xori)$/.test(name)) asm = name + ' ' + R[rt] + ', ' + R[rs] + ', 0x' + imm.toString(16) + '  (zero-extended)';
    else asm = name + ' ' + R[rt] + ', ' + R[rs] + ', ' + simm;
    return { fmt: 'I', asm: asm, f: [{ n: 'opcode', b: 6, v: op }, { n: 'rs', b: 5, v: rs }, { n: 'rt', b: 5, v: rt }, { n: 'immediate', b: 16, v: imm }] };
  };
  TOOLS.mips = function (el) {
    el.innerHTML = '<h3>MIPS instruction encoder / decoder (R / I / J → binary / hex)</h3>' +
      '<div class="row"><input type="text" id="mpA" size="30" value="add $t1, $s1, $s2" aria-label="assembly"><button class="btn" id="mpEnc">Encode</button></div>' +
      '<div class="row"><input type="text" id="mpH" size="16" value="0x8D280004" aria-label="hex word"><button class="btn" id="mpDec">Decode</button></div><div id="mpOut"></div>' +
      '<div class="hint">Supported: add addu sub subu and or xor nor slt sltu sll srl sra jr mult div mfhi mflo · addi addiu slti andi ori xori lui lw sw lb lbu lh lhu sb sh beq bne blez bgtz · j jal. Branch immediates are the word offset (number of instructions from PC+4).</div>';
    const show = (fmt, f, asm, note) => {
      const w = MIPS.word(f), b = bits(w, 32);
      const fv = f.map((x) => ({ n: x.n, b: x.b, v: bits(x.v, x.b), note: x.n === 'rs' || x.n === 'rt' || x.n === 'rd' ? REGN[x.v] + ' = ' + x.v : String(x.v) + (x.n === 'opcode' || x.n === 'funct' ? ' = 0x' + x.v.toString(16) : '') }));
      $('#mpOut', el).innerHTML = '<figure class="dg-fig">' + S.fields(fv, { title: fmt + '-format' }) + '</figure><div class="out">' + (asm ? 'Assembly : ' + esc(asm) + '\n' : '') + 'Binary   : ' + grp(b) + '\nHex      : 0x' + w.toString(16).toUpperCase().padStart(8, '0') + (note ? '\n' + esc(note) : '') + '</div>';
    };
    $('#mpEnc', el).onclick = () => { try { const r = MIPS.assemble($('#mpA', el).value); show(r.fmt, r.f, $('#mpA', el).value.trim(), r.note); } catch (e) { $('#mpOut', el).innerHTML = '<div class="out">Error: ' + esc(e.message) + '</div>'; } };
    $('#mpDec', el).onclick = () => { try { const v = parseInt($('#mpH', el).value.replace(/^0x/i, ''), 16); if (isNaN(v)) throw new Error('enter a hex word'); const r = MIPS.disasm(v); show(r.fmt, r.f, r.asm); } catch (e) { $('#mpOut', el).innerHTML = '<div class="out">Error: ' + esc(e.message) + '</div>'; } };
    $('#mpEnc', el).onclick();
  };

  /* ================= 5. pipeline stepper ================= */
  const PIPE = (window.PIPE = {});
  PIPE.parse = function (line) {
    const m = line.trim().replace(/#.*/, '').match(/^([a-z]+)\s*(.*)$/i); if (!m) return null;
    const op = m[1].toLowerCase(), a = m[2].split(',').map((x) => x.trim());
    const r = (t) => { try { return MIPS.reg(t); } catch (e) { return -1; } };
    let dst = -1, src = [], load = false;
    if (/^(lw|lb|lbu|lh|lhu)$/.test(op)) { dst = r(a[0]); const mm = (a[1] || '').match(/\((\$[a-z0-9]+)\)/i); src = [mm ? r(mm[1]) : -1]; load = true; }
    else if (/^(sw|sb|sh)$/.test(op)) { const mm = (a[1] || '').match(/\((\$[a-z0-9]+)\)/i); src = [r(a[0]), mm ? r(mm[1]) : -1]; }
    else if (/^(beq|bne)$/.test(op)) src = [r(a[0]), r(a[1])];
    else if (/^(addi|addiu|andi|ori|xori|slti|sltiu)$/.test(op)) { dst = r(a[0]); src = [r(a[1])]; }
    else if (/^(sll|srl|sra)$/.test(op)) { dst = r(a[0]); src = [r(a[1])]; }
    else if (op === 'lui') dst = r(a[0]);
    else if (op === 'nop') { /* nothing */ }
    else { dst = r(a[0]); src = [r(a[1]), r(a[2])]; }
    return { text: line.trim(), op: op, dst: dst, src: src.filter((x) => x > 0), load: load };
  };
  PIPE.schedule = function (prog, fwd) {
    const rows = [], notes = []; let prevID = 0, prevE = 0;
    prog.forEach((ins, i) => {
      const F = i === 0 ? 1 : rows[i - 1].ID;
      let ID = Math.max(F + 1, i === 0 ? 0 : prevE);
      let E = Math.max(ID + 1, prevE + 1);
      ins.src.forEach((s) => {
        for (let j = i - 1; j >= 0; j--) {
          const p = rows[j]; if (p.ins.dst !== s) continue;
          let need;
          if (!fwd) { need = p.E + 3; }                // read in ID after WB (write first half, read second half)
          else need = p.ins.load ? p.E + 2 : p.E + 1;  // forward from MEM/WB (load) or EX/MEM (ALU)
          if (need > E) { notes.push(ins.text + ' waits ' + (need - E) + ' cycle(s) for ' + MIPS.REGN[s] + ' from "' + p.ins.text + '"'); E = need; }
          if (fwd) { const gap = E - p.E; notes.push(MIPS.REGN[s] + ' for "' + ins.text + '": ' + (gap >= 3 ? 'read from the register file (already written back)' : gap === 2 ? 'forwarded MEM/WB → EX' : 'forwarded EX/MEM → EX') + ' (producer "' + p.ins.text + '")'); }
          break;
        }
      });
      rows.push({ ins: ins, F: F, ID: ID, E: E });
      prevID = ID; prevE = E;
    });
    const out = rows.map((r) => {
      const c = {}; c[r.F] = 'IF';
      for (let k = r.F + 1; k < r.ID; k++) c[k] = 'stall';
      c[r.ID] = 'ID';
      for (let k = r.ID + 1; k < r.E; k++) c[k] = 'stall';
      c[r.E] = 'EX'; c[r.E + 1] = 'MEM'; c[r.E + 2] = 'WB';
      return { l: r.ins.text, c: c };
    });
    const total = rows.length ? rows[rows.length - 1].E + 2 : 0;
    return { rows: out, total: total, ideal: prog.length + 4, stalls: total - (prog.length + 4), notes: notes };
  };
  TOOLS.pipeline = function (el) {
    const presets = {
      'Load-use hazard': 'lw $t0, 0($t1)\nadd $t2, $t0, $t3\nsub $t4, $t2, $t5\nor $t6, $t4, $t7',
      'ALU→ALU chain': 'add $t1, $t2, $t3\nsub $t4, $t1, $t5\nand $t6, $t1, $t4\nor $t7, $t6, $t1',
      'Reordered (compiler scheduling)': 'lw $t1, 0($t0)\nlw $t2, 4($t0)\nadd $t3, $t1, $t2\nsw $t3, 12($t0)',
      'Independent': 'add $t1, $t2, $t3\nsub $t4, $t5, $t6\nand $t7, $s0, $s1\nor $s2, $s3, $s4'
    };
    el.innerHTML = '<h3>Pipeline diagram stepper (5-stage MIPS, stalls &amp; forwarding)</h3><div class="row"><select id="ppP">' + Object.keys(presets).map((k) => '<option>' + k + '</option>').join('') + '</select><label><input type="checkbox" id="ppF" checked> Forwarding</label><button class="btn" id="ppGo">Build diagram</button><button class="btn secondary" id="ppStep">Step one cycle</button></div>' +
      '<textarea id="ppT" rows="5" cols="40" aria-label="program"></textarea><div class="hint">Assumptions: register file written in the first half of a cycle and read in the second half; separate instruction/data memories (no structural hazard); branches not modelled here.</div><div id="ppOut"></div>';
    let res = null, cyc = 0;
    const ta = $('#ppT', el);
    ta.value = presets['Load-use hazard'];
    $('#ppP', el).onchange = (e) => { ta.value = presets[e.target.value]; };
    const build = (upto) => {
      const prog = ta.value.split('\n').map(PIPE.parse).filter(Boolean);
      res = PIPE.schedule(prog, $('#ppF', el).checked);
      const rows = upto ? res.rows.map((r) => { const c = {}; Object.keys(r.c).forEach((k) => { if (+k <= upto) c[k] = r.c[k]; }); return { l: r.l, c: c }; }) : res.rows;
      let h = '<figure class="dg-fig">' + S.pipe({ rows: rows, n: res.total, title: $('#ppF', el).checked ? 'With forwarding' : 'Without forwarding (stall until WB)' }) + '</figure>';
      h += '<div class="out">Total cycles = ' + res.total + '   (ideal ' + res.ideal + ' = 5 + (' + prog.length + ' − 1))\nStall cycles = ' + res.stalls + '\n' + res.notes.join('\n') + (upto ? '\nShowing up to cycle ' + upto + ' of ' + res.total : '') + '</div>';
      $('#ppOut', el).innerHTML = h;
    };
    $('#ppGo', el).onclick = () => { cyc = 0; build(0); };
    $('#ppStep', el).onclick = () => { if (!res || cyc >= res.total) cyc = 0; cyc++; build(cyc); };
    build(0);
  };

  /* ================= 6. datapath control-signal tracer ================= */
  TOOLS.datapath = function (el) {
    const INS = { 'add $t1, $t2, $t3 (R-type)': 'R', 'sub $s0, $s1, $s2 (R-type)': 'R', 'slt $t0, $t1, $t2 (R-type)': 'R', 'lw $t2, 4($t1)': 'lw', 'sw $t2, 4($t1)': 'sw', 'beq $t1, $t2, L1': 'beq', 'addi $t0, $t1, 5': 'addi', 'j L2 (with jump extension)': 'j' };
    const SIG = ['RegDst', 'ALUSrc', 'MemtoReg', 'RegWrite', 'MemRead', 'MemWrite', 'Branch', 'ALUOp', 'Jump'];
    el.innerHTML = '<h3>Datapath tracer — fill the control signals</h3><div class="row"><select id="dpI">' + Object.keys(INS).map((k) => '<option>' + k + '</option>').join('') + '</select><button class="btn secondary" id="dpBlank">Blank datapath</button></div>' +
      '<div class="ctl-grid">' + SIG.map((s) => '<label id="dpl_' + s + '">' + s + '<select data-s="' + s + '"><option value="">?</option>' + (s === 'ALUOp' ? ['00', '01', '10', 'XX'] : ['0', '1', 'X']).map((v) => '<option>' + v + '</option>').join('') + '</select></label>').join('') + '</div>' +
      '<button class="btn" id="dpCheck">Check signals</button><button class="btn secondary" id="dpShow">Show traced datapath</button><div id="dpOut"></div>';
    const cur = () => INS[$('#dpI', el).value];
    $('#dpBlank', el).onclick = () => { $('#dpOut', el).innerHTML = '<figure class="dg-fig">' + S.datapath({ title: 'Single-cycle datapath (blank)' }) + '</figure>'; };
    $('#dpI', el).onchange = () => { el.querySelectorAll('.ctl-grid label').forEach((l) => l.classList.remove('ok', 'no')); $('#dpOut', el).innerHTML = ''; };
    $('#dpCheck', el).onclick = () => {
      const want = S.CONTROL[cur()]; let right = 0, total = 0, missing = 0;
      el.querySelectorAll('.ctl-grid select').forEach((sel) => {
        const s = sel.dataset.s, lab = sel.parentNode; total++;
        if (!sel.value) { missing++; lab.classList.remove('ok', 'no'); return; }
        const ok = sel.value === want[s]; lab.classList.toggle('ok', ok); lab.classList.toggle('no', !ok); if (ok) right++;
      });
      $('#dpOut', el).innerHTML = '<div class="out">' + right + ' / ' + total + ' correct' + (missing ? ' (' + missing + ' left blank)' : '') + '. Correct values: ' + SIG.map((s) => s + '=' + want[s]).join(', ') + '\nX = don\'t care: that signal\'s MUX output is never used (or nothing is written), so either value works — write "X / don\'t care" in the exam.</div>';
    };
    $('#dpShow', el).onclick = () => { const p = cur(); $('#dpOut', el).innerHTML = '<figure class="dg-fig">' + S.datapath({ path: p, alt: p === 'beq' ? ['pc4_mux'] : [], title: $('#dpI', el).value + ' — active path in orange' + (p === 'beq' ? ' (blue = not-taken path)' : '') }) + '</figure>'; };
  };
})();
