/* svglib.js — tiny inline-SVG diagram toolkit (no dependencies, works from file://).
   Every helper returns an SVG/markup STRING. Colours come from CSS classes in style.css,
   so diagrams follow the light/dark theme automatically. */
(function () {
  'use strict';
  const S = {};
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  S.esc = esc;
  const r1 = (v) => Math.round(v * 10) / 10;

  S.svg = function (w, h, inner, title, cls) {
    return '<svg class="dg ' + (cls || '') + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      esc(title || 'diagram') + '"><title>' + esc(title || 'diagram') + '</title>' + inner + '</svg>';
  };
  /* text: o = {cls, a:'start'|'middle'|'end', rot} */
  S.t = function (x, y, txt, cls, anchor, rot) {
    const tr = rot ? ' transform="rotate(' + rot + ' ' + x + ' ' + y + ')"' : '';
    return '<text x="' + r1(x) + '" y="' + r1(y) + '" text-anchor="' + (anchor || 'start') + '" class="' + (cls || '') + '"' + tr + '>' + txt + '</text>';
  };
  S.tc = (x, y, txt, cls) => S.t(x, y, txt, cls, 'middle');
  S.p = function (pts, cls) {
    return '<polyline class="' + (cls || 'w') + '" points="' + pts.map((q) => r1(q[0]) + ',' + r1(q[1])).join(' ') + '"/>';
  };
  /* arrowhead at the end of the polyline */
  S.head = function (a, b, cls, size) {
    const s = size || 7;
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
    const ux = dx / L, uy = dy / L;
    const p1 = [b[0] - ux * s - uy * s * 0.5, b[1] - uy * s + ux * s * 0.5];
    const p2 = [b[0] - ux * s + uy * s * 0.5, b[1] - uy * s - ux * s * 0.5];
    return '<polygon class="ah ' + (cls || '') + '" points="' + [b, p1, p2].map((q) => r1(q[0]) + ',' + r1(q[1])).join(' ') + '"/>';
  };
  const headCls = (cls) => {
    if (!cls) return '';
    if (/\bhl2\b/.test(cls)) return 'ah-hl2';
    if (/\bhl\b/.test(cls)) return 'ah-hl';
    if (/\bctl\b/.test(cls)) return 'ah-ctl';
    if (/amber/.test(cls)) return 'ah-hl';
    if (/accent/.test(cls)) return 'ah-acc';
    return '';
  };
  S.a = function (pts, cls, size) {
    const n = pts.length;
    return S.p(pts, cls) + S.head(pts[n - 2], pts[n - 1], headCls(cls), size);
  };
  S.dot = (x, y, r) => '<circle class="dot" cx="' + x + '" cy="' + y + '" r="' + (r || 3) + '"/>';
  S.rect = (x, y, w, h, cls, rx) => '<rect class="' + (cls || 'box') + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 6 : rx) + '"/>';
  S.circ = (cx, cy, r, cls) => '<circle class="' + (cls || 'box') + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
  S.ell = function (cx, cy, rx, ry, label, cls, tcls) {
    let s = '<ellipse class="' + (cls || 'box') + '" cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"/>';
    if (label) {
      const lines = String(label).split('\n');
      lines.forEach((ln, i) => { s += S.tc(cx, cy + 4 + (i - (lines.length - 1) / 2) * 14, ln, tcls || 'b'); });
    }
    return s;
  };
  /* box with centred multi-line label */
  S.box = function (x, y, w, h, label, cls, tcls) {
    let s = S.rect(x, y, w, h, cls || 'box');
    if (label) {
      const lines = String(label).split('\n');
      lines.forEach((ln, i) => { s += S.tc(x + w / 2, y + h / 2 + 4 + (i - (lines.length - 1) / 2) * 15, ln, tcls || 'b'); });
    }
    return s;
  };
  /* orthogonal elbow wire from a to b (horizontal, vertical, horizontal) */
  S.elbow = function (a, b, midx) {
    if (a[1] === b[1]) return [a, b];
    const mx = midx == null ? (a[0] + b[0]) / 2 : midx;
    return [a, [mx, a[1]], [mx, b[1]], b];
  };
  S.wire = (a, b, midx, cls) => S.p(S.elbow(a, b, midx), cls || 'w');
  S.awire = (a, b, midx, cls) => S.a(S.elbow(a, b, midx), cls || 'w');

  /* ---------- logic gates ----------
     (x,y) = left edge, vertical centre of the gate body.
     returns {svg, in:[[x,y]...], out:[x,y]} ; input stubs (12px) are drawn. */
  S.gate = function (type, x, y, o) {
    o = o || {};
    type = type.toUpperCase();
    const n = o.n || (type === 'NOT' || type === 'BUF' ? 1 : 2);
    const H = o.h || Math.max(36, n * 14 + 10);
    const W = o.w || 50;
    const h = H / 2;
    let body = '', outX, ins = [];
    const offs = [];
    for (let i = 0; i < n; i++) offs.push(n === 1 ? 0 : -h + 8 + i * (H - 16) / (n - 1));
    const bubble = /^(NAND|NOR|XNOR|NOT)$/.test(type);
    if (type === 'AND' || type === 'NAND') {
      body = '<path class="g" d="M' + x + ',' + (y - h) + ' h' + (W / 2) + ' a' + h + ',' + h + ' 0 0 1 0,' + H + ' h' + (-W / 2) + ' z"/>';
      outX = x + W / 2 + h;
      offs.forEach((d) => ins.push([x, y + d]));
    } else if (type === 'OR' || type === 'NOR' || type === 'XOR' || type === 'XNOR') {
      const sh = (type === 'XOR' || type === 'XNOR') ? 7 : 0;
      const bx = x + sh, c = W * 0.3;
      body = '<path class="g" d="M' + bx + ',' + (y - h) + ' Q' + (bx + W * 0.55) + ',' + (y - h) + ' ' + (bx + W) + ',' + y +
        ' Q' + (bx + W * 0.55) + ',' + (y + h) + ' ' + bx + ',' + (y + h) + ' Q' + (bx + c) + ',' + y + ' ' + bx + ',' + (y - h) + ' z"/>';
      if (sh) body += '<path class="w" d="M' + x + ',' + (y - h) + ' Q' + (x + c) + ',' + y + ' ' + x + ',' + (y + h) + '"/>';
      outX = bx + W;
      offs.forEach((d) => { const t = (d / h + 1) / 2; ins.push([x + 2 * t * (1 - t) * c, y + d]); });
    } else if (type === 'NOT' || type === 'BUF') {
      const L = o.w || 32;
      body = '<path class="g" d="M' + x + ',' + (y - 15) + ' L' + (x + L) + ',' + y + ' L' + x + ',' + (y + 15) + ' z"/>';
      outX = x + L;
      ins.push([x, y]);
    }
    if (bubble) { body += '<circle class="g" cx="' + (outX + 4) + '" cy="' + y + '" r="4"/>'; outX += 8; }
    let stubs = '';
    const stub = o.stub == null ? 12 : o.stub;
    const pins = ins.map((p) => [p[0] - stub, p[1]]);
    if (stub) ins.forEach((p, i) => { stubs += S.p([pins[i], p]); });
    let lbl = '';
    if (o.label) lbl = S.tc(x + (outX - x) / 2 - (bubble ? 4 : 0), y + 4, o.label, 'sm b');
    if (o.name) lbl += S.tc(x + (outX - x) / 2, y - h - 5, o.name, 'xs muted');
    const outStub = o.ostub == null ? 10 : o.ostub;
    const out = [outX + outStub, y];
    const ostub = outStub ? S.p([[outX, y], out]) : '';
    return { svg: stubs + body + ostub + lbl, in: pins, out: out, x: x, y: y, w: outX - x, h: H };
  };

  /* MUX drawn as a stadium (datapath style) */
  S.muxS = function (x, y, w, h, top, bot, cls) {
    let s = '<rect class="' + (cls || 'box') + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (w / 2) + '"/>';
    const cx = x + w / 2, cy = y + h / 2;
    s += S.tc(cx, cy - 10, 'M', 'xs b') + S.tc(cx, cy, 'U', 'xs b') + S.tc(cx, cy + 10, 'X', 'xs b');
    if (top != null) s += S.tc(cx, y + 13, top, 'xs b');
    if (bot != null) s += S.tc(cx, y + h - 5, bot, 'xs b');
    return s;
  };
  /* MUX as trapezoid (logic style); n inputs on the left, select at bottom */
  S.muxT = function (x, y, n, o) {
    o = o || {};
    const H = o.h || Math.max(60, n * 24 + 12), W = o.w || 42;
    let s = '<path class="g" d="M' + x + ',' + y + ' L' + (x + W) + ',' + (y + 12) + ' L' + (x + W) + ',' + (y + H - 12) + ' L' + x + ',' + (y + H) + ' z"/>';
    const ins = [];
    for (let i = 0; i < n; i++) {
      const yy = y + (H / (n + 1)) * (i + 1);
      ins.push([x, yy]);
      s += S.t(x + 4, yy + 4, (o.inLabels ? o.inLabels[i] : String(i)), 'xs');
    }
    s += S.tc(x + W / 2, y + H / 2 + 4, o.label || (n + ':1'), 'xs b');
    return { svg: s, in: ins, out: [x + W, y + H / 2], sel: [x + W / 2, y + H - 6], w: W, h: H };
  };
  /* ALU / adder outline (notched) */
  S.alu = function (x, y, w, h, label, cls) {
    const pts = [[x, y], [x + w, y + h * 0.25], [x + w, y + h * 0.75], [x, y + h], [x, y + h * 0.6], [x + w * 0.28, y + h / 2], [x, y + h * 0.4]];
    let s = '<polygon class="' + (cls || 'box') + '" points="' + pts.map((q) => r1(q[0]) + ',' + r1(q[1])).join(' ') + '"/>';
    if (label) s += S.tc(x + w * 0.62, y + h / 2 + 5, label, 'b');
    return s;
  };
  /* flip-flop / latch block with pin labels. pins: {l:[[label,dy]], r:[[label,dy]]}, clk: dy of clock triangle on left */
  S.ff = function (x, y, w, h, title, pins, clk, cls) {
    let s = S.rect(x, y, w, h, cls || 'box', 4);
    if (title) s += S.tc(x + w / 2, y + h / 2 + 4, title, 'sm b');
    (pins.l || []).forEach((p) => { s += S.t(x + 5, y + p[1] + 4, p[0], 'sm'); });
    (pins.r || []).forEach((p) => { s += S.t(x + w - 5, y + p[1] + 4, p[0], 'sm', 'end'); });
    (pins.t || []).forEach((p) => { s += S.tc(x + p[1], y + 12, p[0], 'xs'); });
    (pins.b || []).forEach((p) => { s += S.tc(x + p[1], y + h - 4, p[0], 'xs'); });
    if (clk != null) s += '<path class="w" d="M' + x + ',' + (y + clk - 7) + ' l9,7 l-9,7"/>';
    return s;
  };
  S.slash = function (x, y, n) { return S.p([[x - 5, y + 7], [x + 5, y - 7]], 'w') + S.tc(x, y - 10, String(n), 'xs'); };

  /* ---------- K-map ----------
     o = {vars:['A','B','C','D'], ones:[minterms], dc:[minterms], groups:[{cells:[..], label}], title, showIdx}
     rows use the first floor(n/2) variables, columns the rest, both in Gray order. */
  const GRAY = { 1: ['0', '1'], 2: ['00', '01', '11', '10'] };
  S.kmap = function (o) {
    const v = o.vars, n = v.length;
    const rv = Math.floor(n / 2), cv = n - rv;
    const rl = GRAY[rv], cl = GRAY[cv];
    const cw = 52, ch = 42, ox = 92, oy = 58;
    const W = ox + cl.length * cw + 28 + (o.side || 0), H = oy + rl.length * ch + 26 + (o.groups && o.groups.length ? 18 * Math.ceil(o.groups.length / 2) : 0);
    let s = '';
    const vals = {};
    for (let m = 0; m < (1 << n); m++) vals[m] = '0';
    (o.ones || []).forEach((m) => (vals[m] = '1'));
    (o.dc || []).forEach((m) => (vals[m] = 'X'));
    const mOf = (r, c) => parseInt(rl[r] + cl[c], 2);
    const pos = {};
    // header
    s += '<line class="wt" x1="' + (ox - 34) + '" y1="' + (oy - 32) + '" x2="' + ox + '" y2="' + oy + '"/>';
    s += S.t(ox - 40, oy - 2, v.slice(0, rv).join(''), 'sm b', 'end');
    s += S.t(ox - 18, oy - 26, v.slice(rv).join(''), 'sm b');
    cl.forEach((c, j) => { s += S.tc(ox + j * cw + cw / 2, oy - 8, c, 'mono sm'); });
    rl.forEach((r, i) => { s += S.t(ox - 16, oy + i * ch + ch / 2 + 5, r, 'mono sm', 'end'); });
    for (let i = 0; i < rl.length; i++) for (let j = 0; j < cl.length; j++) {
      const m = mOf(i, j); pos[m] = [i, j];
      const x = ox + j * cw, y = oy + i * ch;
      s += '<rect class="' + (vals[m] === 'X' ? 'cellx' : 'cell') + '" x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '"/>';
      s += S.tc(x + cw / 2, y + ch / 2 + 6, vals[m], 'mono lg' + (vals[m] === '0' ? ' muted' : ''));
      if (o.showIdx !== false) s += S.t(x + 3, y + 11, 'm' + m, 'xs muted');
    }
    // groups
    (o.groups || []).forEach((g, gi) => {
      const rows = [...new Set(g.cells.map((m) => pos[m][0]))].sort((a, b) => a - b);
      const cols = [...new Set(g.cells.map((m) => pos[m][1]))].sort((a, b) => a - b);
      const runs = (arr, len) => {
        const out = []; let cur = [arr[0]];
        for (let k = 1; k < arr.length; k++) { if (arr[k] === arr[k - 1] + 1) cur.push(arr[k]); else { out.push(cur); cur = [arr[k]]; } }
        out.push(cur);
        return out.map((rn) => ({ a: rn[0], b: rn[rn.length - 1], openLo: rn[0] === 0 && out.length > 1, openHi: rn[rn.length - 1] === len - 1 && out.length > 1 }));
      };
      const rr = runs(rows, rl.length), cc = runs(cols, cl.length);
      const ins = 4 + (gi % 3) * 4;
      rr.forEach((R) => cc.forEach((C) => {
        let x1 = ox + C.a * cw + ins, x2 = ox + (C.b + 1) * cw - ins, y1 = oy + R.a * ch + ins, y2 = oy + (R.b + 1) * ch - ins;
        if (C.openLo) x1 -= ins + 5; if (C.openHi) x2 += ins + 5;
        if (R.openLo) y1 -= ins + 5; if (R.openHi) y2 += ins + 5;
        s += '<rect class="grp' + (g.c != null ? g.c : gi % 6) + '" x="' + x1 + '" y="' + y1 + '" width="' + (x2 - x1) + '" height="' + (y2 - y1) + '" rx="12"/>';
      }));
    });
    // legend
    if (o.groups && o.groups.length) {
      o.groups.forEach((g, gi) => {
        const lx = 10 + (gi % 2) * (W / 2), ly = oy + rl.length * ch + 22 + Math.floor(gi / 2) * 18;
        s += '<rect class="grp' + (g.c != null ? g.c : gi % 6) + '" x="' + lx + '" y="' + (ly - 11) + '" width="14" height="12" rx="3"/>' + S.t(lx + 20, ly, g.label || '', 'sm b');
      });
    }
    if (o.title) s += S.t(8, 16, o.title, 'sm b');
    return S.svg(W, H, s, o.title || 'K-map');
  };

  /* ---------- timing diagram ----------
     o = {unit:22, signals:[{n:'CLK', w:'0101', cls:'wave', vals:[]}], edges:[unit idx], labels:[{x:unit,y:row,t}], title}
     wave chars per unit: 0,1, x (unknown), z (mid), d (new bus value from vals), . (continue bus), m (metastable) */
  S.timing = function (o) {
    const u = o.unit || 24, rowH = o.rowH || 44, ox = o.ox || 70, oy = 18;
    const len = Math.max(...o.signals.map((sg) => sg.w.length));
    const W = ox + len * u + 16, H = oy + o.signals.length * rowH + (o.extraH || 8);
    let s = '';
    (o.edges || []).forEach((e) => { s += '<line class="edge" x1="' + (ox + e * u) + '" y1="' + (oy - 6) + '" x2="' + (ox + e * u) + '" y2="' + (H - 4) + '"/>'; });
    (o.shade || []).forEach((z) => { s += '<rect x="' + (ox + z.a * u) + '" y="' + (oy - 6) + '" width="' + ((z.b - z.a) * u) + '" height="' + (H - oy) + '" fill="' + (z.fill || 'rgba(240,140,0,.15)') + '"/>' + (z.t ? S.tc(ox + (z.a + z.b) / 2 * u, H - 4, z.t, 'xs b') : ''); });
    o.signals.forEach((sg, i) => {
      const yT = oy + i * rowH + 6, yB = yT + rowH - 20, ym = (yT + yB) / 2;
      s += S.t(ox - 10, ym + 4, sg.n, 'sm b', 'end');
      let d = '', prev = null, vi = 0, segStart = 0;
      const cls = sg.cls || 'wave';
      const busSegs = [];
      for (let k = 0; k < sg.w.length; k++) {
        const c = sg.w[k];
        const x0 = ox + k * u, x1 = x0 + u;
        if (c === '0' || c === '1') {
          const y = c === '1' ? yT : yB;
          if (prev === null) d += 'M' + x0 + ',' + y;
          else if (prev === '0' || prev === '1') { if (prev !== c) d += ' L' + x0 + ',' + y; }
          else d += ' M' + x0 + ',' + y;
          d += ' L' + x1 + ',' + y;
        } else if (c === 'z') {
          d += ' M' + x0 + ',' + ym + ' L' + x1 + ',' + ym;
        } else if (c === 'x' || c === 'm') {
          s += '<rect x="' + x0 + '" y="' + yT + '" width="' + u + '" height="' + (yB - yT) + '" fill="' + (c === 'm' ? 'rgba(192,57,43,.25)' : 'rgba(128,128,128,.25)') + '"/>';
          d += ' M' + x0 + ',' + yT + ' L' + x1 + ',' + yT + ' M' + x0 + ',' + yB + ' L' + x1 + ',' + yB;
        } else if (c === 'd') {
          busSegs.push({ a: k, b: k + 1, t: sg.vals ? sg.vals[vi++] : '' });
        } else if (c === '.') {
          if (busSegs.length) busSegs[busSegs.length - 1].b = k + 1;
          else if (prev === '0' || prev === '1') { const y = prev === '1' ? yT : yB; d += ' L' + x1 + ',' + y; }
        }
        if (c !== '.') prev = c;
      }
      busSegs.forEach((b) => {
        const x0 = ox + b.a * u, x1 = ox + b.b * u, e = 4;
        s += '<path class="' + cls + '" d="M' + x0 + ',' + ym + ' L' + (x0 + e) + ',' + yT + ' L' + (x1 - e) + ',' + yT + ' L' + x1 + ',' + ym + ' L' + (x1 - e) + ',' + yB + ' L' + (x0 + e) + ',' + yB + ' Z" fill="none"/>' +
          S.tc((x0 + x1) / 2, ym + 4, b.t, 'xs b');
      });
      if (d) s += '<path class="' + cls + '" d="' + d + '"/>';
    });
    (o.labels || []).forEach((l) => { s += S.tc(ox + l.x * u, oy + l.y * rowH + (l.dy || 0), l.t, l.cls || 'xs b'); });
    if (o.title) s += S.t(4, 12, o.title, 'xs b');
    return S.svg(W, H, s, o.title || 'timing diagram');
  };

  /* ---------- state diagram ----------
     o = {w,h, r:26, states:[{id,x,y,l,o(out text), acc, init:'left'|'top'}], edges:[{f,t,l,bend,loop:'top'|'bottom'|'left'|'right', cls, lo:[dx,dy]}]} */
  S.fsm = function (o) {
    const R = o.r || 26;
    const st = {}; o.states.forEach((q) => (st[q.id] = q));
    let s = '';
    o.edges.forEach((e) => {
      const A = st[e.f], B = st[e.t], cls = 'arr ' + (e.cls || '');
      const hc = e.cls && /amber/.test(e.cls) ? 'ah-hl' : '';
      if (e.f === e.t || e.loop) {
        const dir = e.loop || 'top';
        const ang = { top: -90, bottom: 90, left: 180, right: 0 }[dir] * Math.PI / 180;
        const a1 = ang - 0.45, a2 = ang + 0.45;
        const p1 = [A.x + R * Math.cos(a1), A.y + R * Math.sin(a1)], p2 = [A.x + R * Math.cos(a2), A.y + R * Math.sin(a2)];
        const k = R * 2.3;
        const c1 = [A.x + k * Math.cos(a1 - 0.25), A.y + k * Math.sin(a1 - 0.25)], c2 = [A.x + k * Math.cos(a2 + 0.25), A.y + k * Math.sin(a2 + 0.25)];
        s += '<path class="' + cls + '" d="M' + r1(p1[0]) + ',' + r1(p1[1]) + ' C' + r1(c1[0]) + ',' + r1(c1[1]) + ' ' + r1(c2[0]) + ',' + r1(c2[1]) + ' ' + r1(p2[0]) + ',' + r1(p2[1]) + '"/>';
        s += S.head(c2, p2, hc, 8);
        const lp = [A.x + (R * 2.05) * Math.cos(ang), A.y + (R * 2.05) * Math.sin(ang)];
        const off = e.lo || [0, 0];
        s += S.tc(lp[0] + off[0] + (dir === 'left' ? -14 : dir === 'right' ? 14 : 0), lp[1] + off[1] + (dir === 'top' ? -4 : dir === 'bottom' ? 12 : 4), e.l, 'sm b mono');
        return;
      }
      const dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy);
      const nx = -dy / L, ny = dx / L, bend = e.bend == null ? 0 : e.bend;
      const cx = (A.x + B.x) / 2 + nx * bend * L, cy = (A.y + B.y) / 2 + ny * bend * L;
      const sA = Math.hypot(cx - A.x, cy - A.y), sB = Math.hypot(B.x - cx, B.y - cy);
      const pA = [A.x + (cx - A.x) / sA * R, A.y + (cy - A.y) / sA * R];
      const pB = [B.x - (B.x - cx) / sB * R, B.y - (B.y - cy) / sB * R];
      s += '<path class="' + cls + '" d="M' + r1(pA[0]) + ',' + r1(pA[1]) + ' Q' + r1(cx) + ',' + r1(cy) + ' ' + r1(pB[0]) + ',' + r1(pB[1]) + '"/>';
      s += S.head([cx, cy], pB, hc, 8);
      const mx = 0.25 * pA[0] + 0.5 * cx + 0.25 * pB[0], my = 0.25 * pA[1] + 0.5 * cy + 0.25 * pB[1];
      const off = e.lo || [nx * 12, ny * 12];
      s += S.tc(mx + off[0], my + off[1] + 4, e.l, 'sm b mono');
    });
    o.states.forEach((q) => {
      s += '<circle class="st' + (q.acc ? ' acc' : '') + '" cx="' + q.x + '" cy="' + q.y + '" r="' + R + '"/>';
      if (q.acc) s += '<circle class="st acc" cx="' + q.x + '" cy="' + q.y + '" r="' + (R - 4) + '" fill="none"/>';
      if (q.o != null) { s += S.tc(q.x, q.y - 2, q.l, 'sm b') + S.tc(q.x, q.y + 12, q.o, 'xs mono'); }
      else s += S.tc(q.x, q.y + 5, q.l, 'sm b');
      if (q.init) {
        const d = { left: [-1, 0], top: [0, -1], bottom: [0, 1], right: [1, 0] }[q.init];
        s += S.a([[q.x + d[0] * (R + 30), q.y + d[1] * (R + 30)], [q.x + d[0] * R, q.y + d[1] * R]], 'arr');
        s += S.tc(q.x + d[0] * (R + 38), q.y + d[1] * (R + 38) + 4, q.initLabel || 'reset', 'xs muted');
      }
    });
    if (o.title) s += S.t(6, 14, o.title, 'sm b');
    return S.svg(o.w, o.h, s, o.title || 'state diagram');
  };

  /* ---------- instruction / bit fields ----------
     f = [{n:'opcode', b:6, v:'000000', note:'R-type'}], o = {title, total:32} */
  S.fields = function (f, o) {
    o = o || {};
    const total = o.total || f.reduce((a, q) => a + q.b, 0);
    const W = 760, ox = 10, bw = (W - 20) / total, y = 30, h = 46;
    let s = '', x = ox, hi = total - 1;
    f.forEach((q, i) => {
      const w = q.b * bw;
      s += '<rect class="' + (q.cls || (i % 2 ? 'box2' : 'box')) + '" x="' + r1(x) + '" y="' + y + '" width="' + r1(w) + '" height="' + h + '" rx="2"/>';
      s += S.tc(x + w / 2, y + 19, q.n, 'b sm');
      if (q.v != null) s += S.tc(x + w / 2, y + 36, q.v, 'mono sm');
      const lo = hi - q.b + 1;
      s += S.t(x + 3, y - 6, String(hi), 'xs muted') + (q.b > 1 ? S.t(x + w - 3, y - 6, String(lo), 'xs muted', 'end') : '');
      s += S.tc(x + w / 2, y + h + 15, q.b + ' bit' + (q.b > 1 ? 's' : ''), 'xs muted');
      if (q.note) s += S.tc(x + w / 2, y + h + 30, q.note, 'xs b');
      x += w; hi = lo - 1;
    });
    if (o.title) s += S.t(10, 12, o.title, 'sm b');
    return S.svg(W, y + h + (f.some((q) => q.note) ? 40 : 24), s, o.title || 'instruction fields');
  };

  /* ---------- pipeline diagram ----------
     o = {rows:[{l:'lw $t0,0($t1)', c:{1:'IF',2:'ID',...}}], n: cycles, fwd:[[r1,c1,r2,c2]], title} */
  S.pipe = function (o) {
    const cw = o.cw || 52, rh = 34, ox = o.ox || 170, oy = 36;
    const n = o.n || Math.max(...o.rows.map((r) => Math.max(...Object.keys(r.c).map(Number))));
    const W = ox + n * cw + 14, H = oy + o.rows.length * rh + 12;
    let s = '';
    for (let c = 1; c <= n; c++) s += S.tc(ox + (c - 1) * cw + cw / 2, oy - 10, 'CC' + c, 'xs b muted');
    o.rows.forEach((r, i) => {
      const y = oy + i * rh;
      s += S.t(ox - 10, y + rh / 2 + 4, r.l, 'sm mono', 'end');
      Object.keys(r.c).forEach((k) => {
        const c = Number(k), lab = r.c[k];
        const x = ox + (c - 1) * cw;
        const st = /^(IF|ID|EX|MEM|WB)$/.test(lab) ? lab : 'ST';
        s += '<rect class="stage-' + st + '" x="' + (x + 2) + '" y="' + (y + 3) + '" width="' + (cw - 4) + '" height="' + (rh - 6) + '" rx="5" stroke="currentColor" stroke-opacity=".35"/>';
        s += S.tc(x + cw / 2, y + rh / 2 + 4, lab, 'xs b pyrtxt');
      });
    });
    (o.fwd || []).forEach((f) => {
      const x1 = ox + (f[1] - 1) * cw + cw - 6, y1 = oy + f[0] * rh + rh - 6;
      const x2 = ox + (f[3] - 1) * cw + 8, y2 = oy + f[2] * rh + 6;
      s += S.a([[x1, y1], [x2, y2]], 'hl', 7);
    });
    if (o.title) s += S.t(6, 14, o.title, 'sm b');
    return S.svg(W, H, s, o.title || 'pipeline diagram');
  };

  /* ---------- the single-cycle MIPS datapath (Patterson & Hennessy Fig. 4.17 style) ----------
     o = {path:'R'|'lw'|'sw'|'beq'|'addi'|'j'|null, ctl:{RegDst:'1',...}, jump:bool, title, note} */
  const SEG = {
    pc_im: [[82, 340], [120, 340]],
    pc_add: [[100, 340], [100, 73], [150, 73]],
    four: [[124, 127], [150, 127]],
    pc4: [[200, 100], [670, 100]],
    pc4_mux: [[670, 100], [670, 40], [810, 40], [810, 78], [830, 78]],
    pc4_badd: [[670, 78], [700, 78]],
    badd_mux: [[750, 105], [790, 105], [790, 122], [830, 122]],
    pcnext: [[852, 100], [880, 100], [880, 18], [18, 18], [18, 340], [40, 340]],
    instr: [[260, 360], [290, 360]],
    op: [[290, 360], [290, 200], [333, 200]],
    rs: [[290, 330], [410, 330]],
    rt: [[290, 360], [410, 360]],
    rt_dst: [[290, 360], [310, 360], [310, 395], [340, 395]],
    rd_dst: [[290, 360], [290, 430], [340, 430]],
    wr: [[360, 412], [410, 412]],
    imm: [[290, 360], [290, 520], [434, 520]],
    sext_mux: [[506, 520], [590, 520], [590, 445], [610, 445]],
    sext_j: [[506, 520], [590, 520], [590, 445]],
    sext_sl2: [[590, 445], [590, 132], [606, 132]],
    sl2_badd: [[674, 132], [700, 132]],
    rd1: [[560, 340], [660, 340]],
    rd2_mux: [[560, 415], [610, 415]],
    rd2_mem: [[560, 415], [580, 415], [580, 480], [780, 480]],
    mux_alu: [[630, 430], [660, 430]],
    zero: [[730, 355], [760, 355], [760, 176], [780, 176]],
    alu_addr: [[730, 405], [780, 405]],
    alu_wb: [[730, 405], [745, 405], [745, 540], [940, 540], [940, 410], [950, 410]],
    memrd: [[920, 365], [950, 365]],
    wb: [[972, 387], [1000, 387], [1000, 625], [380, 625], [380, 445], [410, 445]],
    funct: [[290, 360], [290, 610], [700, 610], [700, 600]],
    jtap: [[290, 200], [290, 62], [404, 62]],
    jsl2: [[476, 62], [520, 62], [520, 48], [890, 48], [890, 72], [900, 72]],
    jpc4: [[640, 100], [640, 48]],
    jmux_out: [[922, 95], [945, 95], [945, 18], [18, 18], [18, 340], [40, 340]],
    pcsrc_to_j: [[852, 100], [875, 100], [875, 118], [900, 118]]
  };
  const PATHS = {
    R: ['pc_im', 'pc_add', 'four', 'pc4', 'pc4_mux', 'pcnext', 'instr', 'op', 'rs', 'rt', 'rd_dst', 'wr', 'rd1', 'rd2_mux', 'mux_alu', 'alu_wb', 'wb', 'funct'],
    lw: ['pc_im', 'pc_add', 'four', 'pc4', 'pc4_mux', 'pcnext', 'instr', 'op', 'rs', 'rt_dst', 'wr', 'imm', 'sext_mux', 'rd1', 'mux_alu', 'alu_addr', 'memrd', 'wb'],
    sw: ['pc_im', 'pc_add', 'four', 'pc4', 'pc4_mux', 'pcnext', 'instr', 'op', 'rs', 'rt', 'imm', 'sext_mux', 'rd1', 'mux_alu', 'alu_addr', 'rd2_mem'],
    beq: ['pc_im', 'pc_add', 'four', 'pc4', 'pc4_badd', 'instr', 'op', 'rs', 'rt', 'rd1', 'rd2_mux', 'mux_alu', 'zero', 'imm', 'sext_j', 'sext_sl2', 'sl2_badd', 'badd_mux', 'pcnext'],
    addi: ['pc_im', 'pc_add', 'four', 'pc4', 'pc4_mux', 'pcnext', 'instr', 'op', 'rs', 'rt_dst', 'wr', 'imm', 'sext_mux', 'rd1', 'mux_alu', 'alu_wb', 'wb'],
    j: ['pc_im', 'pc_add', 'four', 'pc4', 'instr', 'op', 'jtap', 'jsl2', 'jpc4', 'jmux_out']
  };
  S.DP_PATHS = PATHS;
  S.CONTROL = {
    R: { RegDst: '1', ALUSrc: '0', MemtoReg: '0', RegWrite: '1', MemRead: '0', MemWrite: '0', Branch: '0', ALUOp: '10', Jump: '0' },
    lw: { RegDst: '0', ALUSrc: '1', MemtoReg: '1', RegWrite: '1', MemRead: '1', MemWrite: '0', Branch: '0', ALUOp: '00', Jump: '0' },
    sw: { RegDst: 'X', ALUSrc: '1', MemtoReg: 'X', RegWrite: '0', MemRead: '0', MemWrite: '1', Branch: '0', ALUOp: '00', Jump: '0' },
    beq: { RegDst: 'X', ALUSrc: '0', MemtoReg: 'X', RegWrite: '0', MemRead: '0', MemWrite: '0', Branch: '1', ALUOp: '01', Jump: '0' },
    addi: { RegDst: '0', ALUSrc: '1', MemtoReg: '0', RegWrite: '1', MemRead: '0', MemWrite: '0', Branch: '0', ALUOp: '00', Jump: '0' },
    j: { RegDst: 'X', ALUSrc: 'X', MemtoReg: 'X', RegWrite: '0', MemRead: '0', MemWrite: '0', Branch: 'X', ALUOp: 'XX', Jump: '1' }
  };

  S.datapath = function (o) {
    o = o || {};
    const jump = !!o.jump || o.path === 'j';
    const hl = new Set(o.path ? PATHS[o.path] : []);
    const alt = new Set(o.alt || []);
    const ctl = o.ctl || (o.path && o.showCtl !== false ? S.CONTROL[o.path] : null);
    let s = '';
    // base wires
    Object.keys(SEG).forEach((k) => {
      if (!jump && /^(jtap|jsl2|jpc4|jmux_out|pcsrc_to_j)$/.test(k)) return;
      if (jump && k === 'pcnext') return;
      const pts = SEG[k];
      const arrow = !/^(pc4|instr|op_bus)$/.test(k);
      s += arrow ? S.a(pts, 'w', 6) : S.p(pts, 'w');
    });
    if (!jump) s += S.p([[290, 200], [290, 610]], 'w');
    else s += S.p([[290, 62], [290, 610]], 'w');
    // junction dots
    [[100, 340], [670, 100], [670, 78], [310, 360], [290, 330], [290, 360], [290, 430], [290, 520], [590, 445], [580, 415], [745, 405], [290, 200]].forEach((d) => (s += S.dot(d[0], d[1])));
    if (jump) s += S.dot(640, 100) + S.dot(640, 48) + S.dot(290, 62);
    // highlighted path on top
    const hlDraw = (set, cls) => set.forEach((k) => { if (SEG[k] && !(jump && k === 'pcnext') && !(!jump && /^j/.test(k))) s += S.a(SEG[k], cls, 7); });
    hlDraw([...alt], 'hl2');
    hlDraw([...hl], 'hl');
    if (o.path === 'j' && jump) s += S.a(SEG.jmux_out, 'hl', 7);
    // components
    s += S.box(40, 300, 42, 80, 'PC', 'box');
    s += S.alu(150, 55, 50, 90, 'Add');
    s += S.t(112, 131, '4', 'b');
    s += S.t(214, 94, 'PC + 4', 'sm b');
    s += S.rect(120, 280, 140, 140, 'box');
    s += S.t(126, 338, 'Read', 'sm') + S.t(126, 352, 'address', 'sm');
    s += S.t(254, 356, 'Instruction', 'sm', 'end') + S.t(254, 370, '[31-0]', 'sm', 'end');
    s += S.tc(190, 396, 'Instruction', 'b') + S.tc(190, 411, 'memory', 'b');
    // control
    s += S.ell(370, 215, 40, 75, 'Control', 'box');
    // field labels on the bus
    [['[31-26]', 195], ['[25-21]', 325], ['[20-16]', 355], ['[15-11]', 425], ['[15-0]', 515], ['[5-0]', 605]].forEach((l) => (s += S.t(296, l[1], l[0], 'xs b')));
    // RegDst mux
    s += S.muxS(340, 380, 20, 65, '0', '1');
    // registers
    s += S.rect(410, 310, 150, 150, 'box');
    s += S.t(415, 334, 'Read reg 1', 'xs') + S.t(415, 364, 'Read reg 2', 'xs') + S.t(415, 416, 'Write reg', 'xs') + S.t(415, 449, 'Write data', 'xs');
    s += S.t(555, 344, 'Read data 1', 'xs', 'end') + S.t(555, 419, 'Read data 2', 'xs', 'end');
    s += S.tc(485, 392, 'Registers', 'b');
    // sign extend + shift left 2
    s += S.ell(470, 520, 36, 22, 'Sign\nextend', 'box', 'xs b');
    s += S.slash(385, 520, 16) + S.slash(548, 520, 32);
    s += S.ell(640, 132, 34, 15, 'Shift left 2', 'box', 'xs b');
    // ALUSrc mux, ALU, ALU control
    s += S.muxS(610, 400, 20, 60, '0', '1');
    s += S.alu(660, 310, 70, 150, 'ALU');
    s += S.t(736, 351, 'Zero', 'xs') + S.t(736, 399, 'ALU', 'xs') + S.t(736, 422, 'result', 'xs');
    s += S.ell(700, 580, 42, 20, 'ALU\ncontrol', 'box', 'xs b');
    // branch adder, AND, PCSrc mux
    s += S.alu(700, 60, 50, 90, 'Add');
    s += '<path class="g" d="M780,155 h14 a13,13 0 0 1 0,26 h-14 z"/>';
    s += S.p([[807, 168], [841, 168], [841, 140]], 'ctl') + S.head([841, 150], [841, 140], 'ah-ctl', 6) + S.t(846, 160, 'PCSrc', 'xs ctltxt');
    s += S.muxS(830, 60, 22, 80, '0', '1');
    // data memory + MemtoReg mux
    s += S.rect(780, 330, 140, 170, 'box');
    s += S.t(785, 409, 'Address', 'xs') + S.t(785, 484, 'Write data', 'xs') + S.t(915, 369, 'Read data', 'xs', 'end');
    s += S.tc(850, 432, 'Data', 'b') + S.tc(850, 447, 'memory', 'b');
    s += S.muxS(950, 345, 22, 80, '1', '0');
    if (jump) {
      s += S.ell(440, 62, 36, 14, 'Shift left 2', 'box', 'xs b');
      s += S.t(296, 58, '[25-0]', 'xs b') + S.t(700, 44, 'Jump address [31-0]', 'xs b') + S.t(645, 66, 'PC+4 [31-28]', 'xs');
      s += S.slash(340, 62, 26) + S.slash(500, 62, 28);
      s += S.muxS(900, 55, 22, 80, '1', '0');
    }
    // control signal lines (dashed) with labels and optional values
    const val = (k) => (ctl && ctl[k] != null ? ' = ' + ctl[k] : '');
    const vcls = ctl ? 'xs ctltxt' : 'xs ctltxt';
    const C = [
      ['Branch', 160, [[405, 160], [770, 160], [770, 162], [780, 162]]],
      ['MemRead', 175, [[407, 175], [928, 175], [928, 515], [850, 515], [850, 500]]],
      ['MemtoReg', 190, [[409, 190], [961, 190], [961, 345]]],
      ['ALUOp', 205, [[410, 205], [645, 205], [645, 575], [658, 575]]],
      ['MemWrite', 220, [[410, 220], [850, 220], [850, 330]]],
      ['ALUSrc', 235, [[409, 235], [620, 235], [620, 400]]],
      ['RegWrite', 250, [[407, 250], [485, 250], [485, 310]]]
    ];
    C.forEach((c) => { s += S.a(c[2], 'ctl', 6) + S.t(414, c[1] - 3, c[0] + val(c[0]), vcls); });
    s += S.a([[350, 281], [350, 380]], 'ctl', 6) + S.t(318, 300, 'RegDst' + val('RegDst'), vcls, 'end');
    if (jump) { s += S.a([[370, 140], [370, 8], [911, 8], [911, 55]], 'ctl', 6) + S.t(376, 36, 'Jump' + val('Jump'), vcls); }
    if (o.title) s += S.t(8, 638, o.title, 'sm b');
    if (o.note) s += S.t(1020, 638, o.note, 'xs b', 'end');
    return S.svg(1030, 648, s, o.title || 'single-cycle MIPS datapath', 'big');
  };

  /* simple left-to-right block chain: items = ['A','B'], o={w,h,gap,title} */
  S.chain = function (items, o) {
    o = o || {};
    const bw = o.bw || 120, bh = o.bh || 50, gap = o.gap || 34, y0 = o.y || 20, per = o.perRow || items.length, rg = 40;
    const rows = Math.ceil(items.length / per);
    const W = 10 + Math.min(per, items.length) * bw + (Math.min(per, items.length) - 1) * gap + 10, H = y0 + rows * bh + (rows - 1) * rg + (o.foot ? 30 : 14);
    let s = '';
    items.forEach((it, i) => {
      const r = Math.floor(i / per), c = i % per;
      const x = 10 + c * (bw + gap), y = y0 + r * (bh + rg);
      s += S.box(x, y, bw, bh, it, o.cls ? o.cls[i] || 'box' : 'box', 'sm b');
      if (i < items.length - 1) {
        if (c < per - 1) s += S.a([[x + bw, y + bh / 2], [x + bw + gap, y + bh / 2]], 'arr');
        else s += S.a([[x + bw / 2, y + bh], [x + bw / 2, y + bh + rg / 2], [10 + bw / 2, y + bh + rg / 2], [10 + bw / 2, y + bh + rg]], 'arr');
      }
    });
    if (o.foot) s += S.tc(W / 2, H - 8, o.foot, 'xs muted');
    return S.svg(W, H, s, o.title || 'flow');
  };

  /* table drawn as SVG: rows = [[header...],[...]], o = {cw:[widths], rh, title, hl:[[r,c]]} */
  S.grid = function (rows, o) {
    o = o || {};
    const nc = Math.max(...rows.map((r) => r.length));
    const cw = o.cw || new Array(nc).fill(o.w || 60), rh = o.rh || 26, ox = 6, oy = o.title ? 24 : 6;
    const W = ox * 2 + cw.reduce((a, b) => a + b, 0), H = oy + rows.length * rh + 6;
    let s = o.title ? S.t(6, 15, o.title, 'sm b') : '';
    const hl = new Set((o.hl || []).map((x) => x[0] + ',' + x[1]));
    rows.forEach((r, i) => {
      let x = ox;
      r.forEach((c, j) => {
        const cls = i === 0 && o.head !== false ? 'box2' : (hl.has(i + ',' + j) ? 'boxa' : 'box');
        s += '<rect class="' + cls + '" x="' + x + '" y="' + (oy + i * rh) + '" width="' + cw[j] + '" height="' + rh + '" rx="0"/>';
        s += S.tc(x + cw[j] / 2, oy + i * rh + rh / 2 + 4, String(c), (i === 0 ? 'sm b' : 'sm mono'));
        x += cw[j];
      });
    });
    return S.svg(W, H, s, o.title || 'table');
  };

  window.S = S;
})();

/* Question builders used by the data files (kept here so they load before data/*.js). */
(function () {
  'use strict';
  window.UNITS = window.UNITS || [];
  window.QH = {
    mcq: (q, options, answer, explain, why, tag) => ({ type: 'mcq', q: q, options: options, answer: answer, explain: explain, why: why, tag: tag || 'GATE-style' }),
    msq: (q, options, answer, explain, why, tag) => ({ type: 'msq', q: q, options: options, answer: answer, explain: explain, why: why, tag: tag || 'GATE-style' }),
    nat: (q, answer, tol, explain, tag, unitHint) => ({ type: 'nat', q: q, answer: answer, tol: tol || 0, explain: explain, tag: tag || 'GATE-style', unitHint: unitHint }),
    txt: (q, answer, explain, tag) => ({ type: 'text', q: q, answer: answer, explain: explain, tag: tag || 'Practice' }),
    match: (q, left, right, answer, explain, tag) => ({ type: 'match', q: q, left: left, right: right, answer: answer, explain: explain, tag: tag || 'Practice' }),
    sub: (q, model, marks, scheme, refs, tag) => ({ type: 'sub', q: q, model: model, marks: marks || 5, scheme: scheme, refs: refs, tag: tag || 'University-style' })
  };
})();
