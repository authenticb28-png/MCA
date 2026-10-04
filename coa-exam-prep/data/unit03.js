/* Unit 3 – Combinational Building Blocks */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;
  /* gate with text-labelled input stubs */
  function lg(type, x, y, labels, o) {
    const g = S.gate(type, x, y, Object.assign({ n: labels.length, stub: 26 }, o || {}));
    let s = g.svg;
    labels.forEach((l, i) => (s += S.t(g.in[i][0] + 2, g.in[i][1] - 3, l, 'xs')));
    return { svg: s, g: g };
  }

  const mux2sym = (function () {
    const m = S.muxT(120, 20, 2, { label: '2:1', inLabels: ['0', '1'] });
    let s = m.svg + S.a([[60, m.in[0][1]], m.in[0]], 'arr') + S.t(54, m.in[0][1] + 4, 'A (I0)', 'sm b', 'end') + S.a([[60, m.in[1][1]], m.in[1]], 'arr') + S.t(54, m.in[1][1] + 4, 'B (I1)', 'sm b', 'end');
    s += S.a([m.out, [m.out[0] + 50, m.out[1]]], 'arr') + S.t(m.out[0] + 56, m.out[1] + 4, 'Y', 'sm b');
    s += S.a([[m.sel[0], 120], m.sel], 'arr') + S.tc(m.sel[0], 134, 'S', 'sm b');
    s += S.t(260, 40, 'S = 0 → Y = A', 'sm') + S.t(260, 60, 'S = 1 → Y = B', 'sm') + S.t(260, 90, 'Y = S\'A + SB', 'sm b');
    return S.svg(420, 145, s, '2:1 multiplexer symbol');
  })();

  const mux2gates = (function () {
    const n = S.gate('NOT', 90, 150), a1 = S.gate('AND', 200, 40), a2 = S.gate('AND', 200, 120), o = S.gate('OR', 320, 80);
    let s = n.svg + a1.svg + a2.svg + o.svg;
    s += S.p([[20, 32], [a1.in[0][0], 32]]) + S.t(14, 36, 'A', 'b', 'end');
    s += S.p([[20, 128], [a2.in[1][0], 128]]) + S.t(14, 132, 'B', 'b', 'end');
    s += S.p([[20, 150], n.in[0]]) + S.t(14, 154, 'S', 'b', 'end') + S.p([[50, 150], [50, 112], [a2.in[0][0], 112]]) + S.dot(50, 150);
    s += S.p([n.out, [165, 150], [165, 48], [a1.in[1][0], 48]]) + S.t(150, 166, 'S\'', 'xs b');
    s += S.wire(a1.out, o.in[0]) + S.wire(a2.out, o.in[1]) + S.t(o.out[0] + 6, 84, 'Y = S\'A + SB', 'b');
    s += S.tc(225, 15, 'S\'·A', 'xs muted') + S.tc(225, 160, 'S·B', 'xs muted');
    return S.svg(480, 175, s, '2:1 MUX from gates');
  })();

  const mux4gates = (function () {
    let s = '';
    const rows = [['I0', 'S1\'', 'S0\''], ['I1', 'S1\'', 'S0'], ['I2', 'S1', 'S0\''], ['I3', 'S1', 'S0']];
    const outs = [];
    rows.forEach((r, i) => { const q = lg('AND', 90, 40 + i * 62, r); s += q.svg; outs.push(q.g.out); });
    const o = S.gate('OR', 260, 133, { n: 4, h: 70 });
    s += o.svg;
    outs.forEach((p, i) => (s += S.wire(p, o.in[i], 200)));
    s += S.t(o.out[0] + 6, 137, 'Y', 'b');
    s += S.t(400, 40, 'Y = S1\'S0\'·I0 + S1\'S0·I1', 'sm b') + S.t(400, 60, '  + S1S0\'·I2 + S1S0·I3', 'sm b');
    s += S.t(400, 100, 'S1 S0 → Y', 'sm b') + S.t(400, 118, ' 0  0 → I0', 'sm mono') + S.t(400, 134, ' 0  1 → I1', 'sm mono') + S.t(400, 150, ' 1  0 → I2', 'sm mono') + S.t(400, 166, ' 1  1 → I3', 'sm mono');
    s += S.t(10, 262, 'Inverters for S1\', S0\' are shared by all four AND gates (not drawn).', 'xs muted');
    return S.svg(640, 272, s, '4:1 MUX gate level');
  })();

  const mux4tree = (function () {
    const m1 = S.muxT(100, 10, 2), m2 = S.muxT(100, 110, 2), m3 = S.muxT(260, 60, 2);
    let s = m1.svg + m2.svg + m3.svg;
    [['I0', m1.in[0]], ['I1', m1.in[1]], ['I2', m2.in[0]], ['I3', m2.in[1]]].forEach((q) => (s += S.a([[50, q[1][1]], q[1]], 'arr') + S.t(44, q[1][1] + 4, q[0], 'sm b', 'end')));
    s += S.awire(m1.out, m3.in[0]) + S.awire(m2.out, m3.in[1]);
    s += S.a([[m1.sel[0], 92], m1.sel], 'arr') + S.a([[m2.sel[0], 192], m2.sel], 'arr') + S.p([[m1.sel[0], 92], [80, 92], [80, 200], [m2.sel[0], 200], [m2.sel[0], 192]]) + S.t(74, 210, 'S0', 'sm b');
    s += S.a([[m3.sel[0], 160], m3.sel], 'arr') + S.tc(m3.sel[0], 174, 'S1', 'sm b');
    s += S.a([m3.out, [m3.out[0] + 50, m3.out[1]]], 'arr') + S.t(m3.out[0] + 56, m3.out[1] + 4, 'Y', 'sm b');
    return S.svg(420, 220, s, '4:1 MUX from three 2:1 MUXes');
  })();

  const mux8 = (function () {
    const m1 = S.muxT(100, 10, 4, { label: '4:1' }), m2 = S.muxT(100, 140, 4, { label: '4:1' }), m3 = S.muxT(270, 85, 2);
    let s = m1.svg + m2.svg + m3.svg;
    m1.in.forEach((p, i) => (s += S.a([[60, p[1]], p], 'arr') + S.t(54, p[1] + 4, 'I' + i, 'xs b', 'end')));
    m2.in.forEach((p, i) => (s += S.a([[60, p[1]], p], 'arr') + S.t(54, p[1] + 4, 'I' + (i + 4), 'xs b', 'end')));
    s += S.awire(m1.out, m3.in[0]) + S.awire(m2.out, m3.in[1]);
    s += S.t(m1.sel[0] + 6, m1.sel[1] + 18, 'S1 S0', 'xs b') + S.a([[m1.sel[0], m1.sel[1] + 14], m1.sel], 'arr') + S.a([[m2.sel[0], m2.sel[1] + 14], m2.sel], 'arr') + S.t(m2.sel[0] + 6, m2.sel[1] + 18, 'S1 S0', 'xs b');
    s += S.a([[m3.sel[0], m3.sel[1] + 24], m3.sel], 'arr') + S.tc(m3.sel[0], m3.sel[1] + 36, 'S2', 'sm b');
    s += S.a([m3.out, [m3.out[0] + 40, m3.out[1]]], 'arr') + S.t(m3.out[0] + 46, m3.out[1] + 4, 'Y', 'sm b');
    return S.svg(420, 285, s, '8:1 MUX from two 4:1 and one 2:1');
  })();

  const muxXor = (function () {
    const m = S.muxT(140, 20, 4, { label: '4:1' });
    let s = m.svg;
    ['0', '1', '1', '0'].forEach((v, i) => (s += S.a([[80, m.in[i][1]], m.in[i]], 'arr') + S.t(74, m.in[i][1] + 4, 'I' + i + ' = ' + v, 'sm b', 'end')));
    s += S.a([[m.sel[0], m.sel[1] + 22], m.sel], 'arr') + S.tc(m.sel[0], m.sel[1] + 36, 'S1 = A, S0 = B', 'sm b');
    s += S.a([m.out, [m.out[0] + 50, m.out[1]]], 'arr') + S.t(m.out[0] + 56, m.out[1] + 4, 'Y = A ⊕ B', 'sm b');
    s += S.t(300, 40, 'Rule: feed the variables to the', 'xs') + S.t(300, 56, 'select lines, wire each data input', 'xs') + S.t(300, 72, 'to the truth-table output (FPGA LUT).', 'xs');
    return S.svg(520, 175, s, 'XOR built from a 4:1 MUX');
  })();

  const demux12 = (function () {
    const n = S.gate('NOT', 80, 130), a1 = S.gate('AND', 200, 40), a2 = S.gate('AND', 200, 110);
    let s = n.svg + a1.svg + a2.svg;
    s += S.p([[20, 70], [150, 70], [150, 32], [a1.in[0][0], 32]]) + S.p([[150, 70], [150, 102], [a2.in[0][0], 102]]) + S.dot(150, 70) + S.t(14, 74, 'D', 'b', 'end');
    s += S.p([[20, 130], n.in[0]]) + S.t(14, 134, 'S', 'b', 'end') + S.p([[45, 130], [45, 160], [175, 160], [175, 118], [a2.in[1][0], 118]]) + S.dot(45, 130);
    s += S.p([n.out, [160, 130], [160, 48], [a1.in[1][0], 48]]);
    s += S.t(a1.out[0] + 6, 44, 'Y0 = S\'·D', 'b') + S.t(a2.out[0] + 6, 114, 'Y1 = S·D', 'b');
    return S.svg(420, 175, s, '1:2 DEMUX');
  })();

  const demux14 = (function () {
    let s = '<path class="g" d="M120,40 L170,20 L170,190 L120,170 z"/>' + S.tc(145, 110, '1:4', 'sm b');
    s += S.a([[60, 105], [120, 105]], 'arr') + S.t(54, 109, 'D', 'sm b', 'end');
    [0, 1, 2, 3].forEach((k) => { const y = 45 + k * 40; s += S.a([[170, y], [220, y]], 'arr') + S.t(226, y + 4, 'Y' + k, 'sm b'); });
    s += S.a([[145, 220], [145, 182]], 'arr') + S.tc(145, 234, 'S1 S0', 'sm b');
    s += S.t(290, 40, 'S1 S0 | Y0 Y1 Y2 Y3', 'sm mono b') + S.t(290, 62, ' 0  0 |  D  0  0  0', 'sm mono') + S.t(290, 82, ' 0  1 |  0  D  0  0', 'sm mono') + S.t(290, 102, ' 1  0 |  0  0  D  0', 'sm mono') + S.t(290, 122, ' 1  1 |  0  0  0  D', 'sm mono');
    s += S.t(290, 160, 'Y0 = S1\'S0\'D   Y1 = S1\'S0 D', 'xs') + S.t(290, 178, 'Y2 = S1 S0\'D   Y3 = S1 S0 D', 'xs');
    return S.svg(520, 245, s, '1:4 demultiplexer');
  })();

  const dec24 = (function () {
    let s = '';
    const L = [['E', 'A1\'', 'A0\''], ['E', 'A1\'', 'A0'], ['E', 'A1', 'A0\''], ['E', 'A1', 'A0']];
    L.forEach((l, i) => { const q = lg('AND', 120, 40 + i * 62, l); s += q.svg + S.t(q.g.out[0] + 6, q.g.out[1] + 4, 'D' + i, 'b'); });
    s += S.t(260, 40, 'E A1 A0 | D3 D2 D1 D0', 'sm mono b') + S.t(260, 60, '0  X  X |  0  0  0  0', 'sm mono') + S.t(260, 78, '1  0  0 |  0  0  0  1', 'sm mono') + S.t(260, 96, '1  0  1 |  0  0  1  0', 'sm mono') + S.t(260, 114, '1  1  0 |  0  1  0  0', 'sm mono') + S.t(260, 132, '1  1  1 |  1  0  0  0', 'sm mono');
    s += S.t(260, 170, 'Each output = one minterm (one-hot).', 'xs') + S.t(260, 186, 'Inverters for A1\', A0\' are shared.', 'xs muted');
    return S.svg(520, 285, s, '2-to-4 decoder with enable');
  })();

  const dec38 = (function () {
    let s = '';
    const bits = ['000', '001', '010', '011', '100', '101', '110', '111'];
    bits.forEach((b, k) => {
      const l = ['A2' + (b[0] === '1' ? '' : '\''), 'A1' + (b[1] === '1' ? '' : '\''), 'A0' + (b[2] === '1' ? '' : '\'')];
      const q = lg('AND', 150, 30 + k * 46, l, { h: 38 });
      s += q.svg + S.t(q.g.out[0] + 6, q.g.out[1] + 4, 'D' + k + ' = m' + k + ' (' + b + ')', 'sm b');
    });
    ['A2', 'A1', 'A0'].forEach((v, i) => { const n = S.gate('NOT', 50, 60 + i * 60); s += n.svg + S.t(24, 64 + i * 60, v, 'sm b', 'end') + S.t(n.out[0] + 2, 52 + i * 60, v + '\'', 'xs b'); });
    s += S.t(10, 392, '8 three-input AND gates + 3 inverters; inverter outputs and true inputs are bussed to every AND gate.', 'xs muted');
    return S.svg(460, 400, s, '3-to-8 decoder internals');
  })();

  const ha = (function () {
    const x = S.gate('XOR', 140, 40), a = S.gate('AND', 140, 120);
    let s = x.svg + a.svg;
    s += S.p([[20, 32], [x.in[0][0], 32]]) + S.p([[60, 32], [60, 112], [a.in[0][0], 112]]) + S.dot(60, 32) + S.t(14, 36, 'A', 'b', 'end');
    s += S.p([[20, 48], [x.in[1][0], 48]]) + S.p([[80, 48], [80, 128], [a.in[1][0], 128]]) + S.dot(80, 48) + S.t(14, 52, 'B', 'b', 'end');
    s += S.t(x.out[0] + 6, 44, 'Sum = A ⊕ B', 'b') + S.t(a.out[0] + 6, 124, 'Carry = A·B', 'b');
    s += S.t(320, 30, 'A B | C S', 'sm mono b') + S.t(320, 50, '0 0 | 0 0', 'sm mono') + S.t(320, 68, '0 1 | 0 1', 'sm mono') + S.t(320, 86, '1 0 | 0 1', 'sm mono') + S.t(320, 104, '1 1 | 1 0', 'sm mono');
    return S.svg(430, 150, s, 'half adder');
  })();

  const fa = (function () {
    const x1 = S.gate('XOR', 110, 50), x2 = S.gate('XOR', 260, 60), a1 = S.gate('AND', 110, 160), a2 = S.gate('AND', 260, 130), o = S.gate('OR', 380, 145);
    let s = x1.svg + x2.svg + a1.svg + a2.svg + o.svg;
    s += S.p([[20, 42], [x1.in[0][0], 42]]) + S.p([[50, 42], [50, 152], [a1.in[0][0], 152]]) + S.dot(50, 42) + S.t(14, 46, 'A', 'b', 'end');
    s += S.p([[20, 58], [x1.in[1][0], 58]]) + S.p([[70, 58], [70, 168], [a1.in[1][0], 168]]) + S.dot(70, 58) + S.t(14, 62, 'B', 'b', 'end');
    s += S.p([x1.out, [205, 50], [205, 52], [x2.in[0][0], 52]]) + S.p([[205, 52], [205, 122], [a2.in[0][0], 122]]) + S.dot(205, 52) + S.tc(190, 44, 'A⊕B', 'xs b');
    s += S.p([[20, 100], [225, 100], [225, 68], [x2.in[1][0], 68]]) + S.p([[225, 100], [225, 138], [a2.in[1][0], 138]]) + S.dot(225, 100) + S.t(14, 104, 'Cin', 'b', 'end');
    s += S.t(x2.out[0] + 6, 64, 'Sum = A ⊕ B ⊕ Cin', 'b');
    s += S.wire(a2.out, o.in[0]) + S.wire(a1.out, o.in[1]) + S.t(o.out[0] + 6, 149, 'Cout = AB + Cin(A⊕B)', 'b');
    return S.svg(650, 195, '<g transform="translate(28,0)">' + s + '</g>', 'full adder gate level');
  })();

  const fa2ha = (function () {
    let s = S.box(80, 30, 90, 70, 'HA 1', 'boxa') + S.box(240, 60, 90, 70, 'HA 2', 'boxa');
    s += S.a([[20, 50], [80, 50]], 'arr') + S.t(14, 54, 'A', 'b', 'end') + S.a([[20, 80], [80, 80]], 'arr') + S.t(14, 84, 'B', 'b', 'end');
    s += S.a([[170, 50], [205, 50], [205, 80], [240, 80]], 'arr') + S.tc(200, 42, 'S1 = A⊕B', 'xs b');
    s += S.a([[20, 140], [210, 140], [210, 110], [240, 110]], 'arr') + S.t(14, 144, 'Cin', 'b', 'end');
    s += S.a([[330, 80], [460, 80]], 'arr') + S.t(466, 84, 'Sum', 'b');
    const o = S.gate('OR', 390, 165);
    s += o.svg + S.p([[170, 85], [185, 85], [185, 173], o.in[1]]) + S.tc(150, 182, 'C1 = AB', 'xs b') + S.p([[330, 115], [350, 115], [350, 157], o.in[0]]) + S.t(336, 135, 'C2 = S1·Cin', 'xs b');
    s += S.t(o.out[0] + 6, 169, 'Cout = C1 + C2', 'b');
    s += S.t(10, 205, 'C1 and C2 are never 1 together (if A = B = 1 then S1 = 0), so an OR (or XOR) merges them.', 'xs muted');
    return S.svg(590, 215, '<g transform="translate(28,0)">' + s + '</g>', 'full adder from two half adders');
  })();

  const rca = (function () {
    let s = '';
    for (let i = 0; i < 4; i++) {
      const x = 410 - i * 130;
      s += S.box(x, 60, 80, 60, 'FA' + i, 'boxa');
      s += S.a([[x + 20, 20], [x + 20, 60]], 'arr') + S.tc(x + 20, 14, 'A' + i, 'xs b') + S.a([[x + 60, 20], [x + 60, 60]], 'arr') + S.tc(x + 60, 14, 'B' + i, 'xs b');
      s += S.a([[x + 40, 120], [x + 40, 155]], 'arr') + S.tc(x + 40, 168, 'S' + i, 'sm b');
      if (i < 3) s += S.a([[x, 90], [x - 50, 90]], 'arr') + S.tc(x - 25, 82, 'C' + (i + 1), 'xs b');
    }
    s += S.a([[540, 90], [490, 90]], 'arr') + S.t(545, 94, 'Cin = 0', 'xs b');
    s += S.a([[20, 90], [0, 90]], 'arr') + S.t(4, 80, 'Cout', 'xs b');
    s += S.t(10, 190, 'Carry ripples right → left; worst-case delay ≈ n × t(carry). 32-bit → 32 stages.', 'xs muted');
    return S.svg(600, 198, s, '4-bit ripple-carry adder');
  })();

  const alu1 = (function () {
    let s = '';
    const inv = S.muxT(60, 70, 2, { h: 60, w: 34 });
    s += inv.svg + S.t(20, 88, 'b', 'sm b', 'end') + S.a([[24, 84], inv.in[0]], 'arr') + S.t(20, 114, 'b\'', 'sm b', 'end') + S.a([[24, 110], inv.in[1]], 'arr');
    s += S.a([[inv.sel[0], 150], inv.sel], 'arr') + S.tc(inv.sel[0], 162, 'Binvert', 'xs ctltxt');
    const g1 = S.gate('AND', 200, 30), g2 = S.gate('OR', 200, 90);
    s += g1.svg + g2.svg + S.box(190, 150, 70, 60, 'FA', 'boxa');
    s += S.p([[150, 22], [g1.in[0][0], 22]]) + S.p([[150, 82], [g2.in[0][0], 82]]) + S.p([[150, 22], [150, 165], [190, 165]]) + S.dot(150, 82) + S.t(146, 26, 'a', 'sm b', 'end');
    s += S.p([inv.out, [170, 100], [170, 38], [g1.in[1][0], 38]]) + S.p([[170, 98], [g2.in[1][0], 98]]) + S.p([[170, 100], [170, 195], [190, 195]]) + S.dot(170, 98);
    s += S.a([[225, 240], [225, 210]], 'arr') + S.tc(225, 252, 'CarryIn', 'xs b') + S.a([[260, 195], [300, 195], [300, 240]], 'arr') + S.t(306, 240, 'CarryOut', 'xs b');
    const m = S.muxT(360, 20, 3, { h: 170, label: 'MUX' });
    s += m.svg + S.wire(g1.out, m.in[0], 320) + S.wire(g2.out, m.in[1], 330) + S.wire([260, 180], m.in[2], 340);
    s += S.a([[m.sel[0], 220], m.sel], 'arr') + S.tc(m.sel[0], 232, 'Operation (2 bits)', 'xs ctltxt');
    s += S.a([m.out, [m.out[0] + 40, m.out[1]]], 'arr') + S.t(m.out[0] + 44, m.out[1] + 4, 'Result', 'sm b');
    s += S.t(20, 285, 'Op 00 = AND, 01 = OR, 10 = add (subtract with Binvert = 1 and CarryIn = 1). 32 slices chained = 32-bit ALU.', 'xs muted');
    return S.svg(520, 295, s, '1-bit ALU slice');
  })();

  const aluRf = (function () {
    let s = S.box(20, 40, 150, 130, 'Register\nfile\n(32 × 32)', 'box');
    s += S.alu(260, 40, 80, 140, 'ALU');
    s += S.a([[170, 70], [260, 70]], 'arr') + S.tc(215, 62, 'operand A', 'xs b') + S.a([[170, 150], [260, 150]], 'arr') + S.tc(215, 142, 'operand B', 'xs b');
    s += S.a([[340, 110], [420, 110], [420, 200], [95, 200], [95, 170]], 'arr') + S.tc(260, 214, 'result written back (clock edge)', 'xs b');
    s += S.a([[300, 10], [300, 50]], 'ctl') + S.t(306, 20, 'ALU control (e.g. 0010 = add)', 'xs ctltxt');
    s += S.a([[95, 10], [95, 40]], 'ctl') + S.t(101, 20, 'read/write addresses + RegWrite', 'xs ctltxt');
    s += S.t(430, 100, 'Zero flag', 'xs b') + S.a([[340, 95], [425, 95]], 'arr');
    return S.svg(520, 225, s, 'ALU and register file preview');
  })();

  const cla = (function () {
    let s = '';
    for (let i = 0; i < 4; i++) {
      const x = 520 - i * 160;
      s += S.box(x, 20, 90, 50, 'G' + i + ' = A' + i + 'B' + i + '\nP' + i + ' = A' + i + '⊕B' + i, 'box', 'xs b');
      s += S.a([[x + 45, 70], [x + 45, 100]], 'arr');
    }
    s += S.box(20, 100, 640, 60, 'Carry-lookahead logic (two gate levels)\nC1 = G0 + P0C0   C2 = G1 + P1G0 + P1P0C0   C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0', 'boxa', 'xs b');
    s += S.t(30, 186, 'C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0;  Si = Pi ⊕ Ci', 'xs b');
    s += S.t(30, 204, 'All carries are computed in parallel from the inputs: delay no longer grows linearly with n (more gates = more area).', 'xs muted');
    return S.svg(680, 212, s, 'carry-lookahead adder');
  })();

  UNITS.push({
    id: 3, title: 'Combinational Building Blocks', short: 'MUX, Decoders, Adders',
    intro: 'Stop thinking in single gates: multiplexers, demultiplexers, decoders and adders are the reusable parts every CPU is built from. Lectures L03–L04, Labs 3–4.',
    subtopics: [
      {
        id: '3.1', title: 'Motivation – From Gates to Reusable Blocks', badge: 'class', sources: '[L03] p2-4; [LB3] p14',
        keywords: 'reusable blocks abstraction verification datapath',
        explain: '<p><b>Analogy:</b> nobody builds a car by casting every screw — they order standard parts from a catalogue. Chip designers use a catalogue of verified blocks: MUX, decoder, adder, register (about five core types), repeated millions of times.</p>' +
          '<ul><li><b>Abstraction:</b> think “select this input”, not “17 gates wired thus”.</li><li><b>Reuse:</b> one verified MUX dropped everywhere.</li><li><b>Verification:</b> test the block once, trust every copy.</li><li><b>Scale:</b> 2:1 MUX → 4:1 → 8:1 by cascading.</li></ul>' +
          '<p>Where they appear in a CPU (Lab 3 p14): <b>ALU operand select</b> (register vs immediate — the ALUSrc MUX of Unit 13), <b>PC update</b> (PC + 4 vs branch target vs jump target), <b>memory routing</b> (one bus to one of several destinations).</p>',
        keypoints: ['Combinational block: output depends only on current inputs.', 'Core catalogue: MUX, DEMUX, decoder, adder (+ register, Unit 6).', 'Every MUX in the datapath is a control point (RegDst, ALUSrc, MemtoReg, PCSrc).'],
        mistakes: ['Thinking a MUX stores data — it is purely combinational (railway switch, nothing stored).'],
        practice: [
          mcq('Which datapath job is done by a multiplexer?', ['Storing the program counter', 'Choosing between a register value and an immediate as the ALU\'s second operand', 'Adding PC + 4', 'Holding the instruction'], 1, 'Selecting one of several sources is a MUX job (ALUSrc).', ['That is a register.', 'Correct.', 'That is an adder.', 'That is a register/memory.'], 'From class slides'),
          msq('Why do designers build CPUs from reusable blocks? (select all)', ['Each block is verified once and reused', 'Blocks cascade to larger sizes', 'It removes the need for a clock', 'It raises the abstraction level'], [0, 1, 3], 'Reuse, scaling and abstraction are the three reasons; clocks are unrelated.', ['True.', 'True.', 'False.', 'True.']),
          mcq('A circuit whose output depends only on its present inputs is:', ['sequential', 'combinational', 'synchronous', 'asynchronous'], 1, 'No memory → combinational.', ['Has memory.', 'Correct.', 'Clocked sequential.', 'Unclocked sequential.'])
        ],
        subjective: [sub('Explain, with two datapath examples, why multiplexers are called the fundamental routing block of a CPU. (3 marks)', '<p>A MUX selects one of many sources under control. Examples: (1) ALUSrc MUX chooses Read data 2 or the sign-extended immediate for the ALU; (2) PCSrc MUX chooses PC + 4 or the branch target as the next PC; (3) MemtoReg MUX chooses the ALU result or memory data for write-back.</p>', 3, ['1 — definition', '2 — two examples'])]
      },
      {
        id: '3.2', title: 'Multiplexers: 2:1, 4:1, and Cascading', badge: 'class', sources: '[L03] p5-11; [LB3] p15-28; [SP3] Lab 03 (2x1, 4x1 MUX); [SP4] quiz 3',
        keywords: 'mux multiplexer data selector select lines cascade lut',
        explain: '<p><b>Analogy:</b> a railway switch — several tracks merge to one; the lever (select) decides which train passes. Change the lever and a different input flows out instantly; nothing is stored.</p>' +
          '<ul><li>A <b>2ⁿ:1 MUX</b> has 2ⁿ data inputs, <b>n select lines</b>, 1 output.</li><li><b>2:1:</b> Y = S\'·I0 + S·I1 (two ANDs, one NOT, one OR).</li><li><b>4:1:</b> Y = S1\'S0\'I0 + S1\'S0I1 + S1S0\'I2 + S1S0I3 — each select combination is one minterm gating one input.</li>' +
          '<li><b>Cascading:</b> 4:1 = three 2:1 in a tree (S0 to the first level, S1 to the second); 8:1 = two 4:1 + one 2:1 (S2 last). In general a 2ⁿ:1 tree uses 2ⁿ − 1 two-input MUXes.</li>' +
          '<li><b>MUX as any function (LUT):</b> put the variables on the select lines and wire each data input to the truth-table value — a 2ⁿ:1 MUX implements any n-variable function. With the “last variable trick”, a 2ⁿ⁻¹:1 MUX implements an n-variable function by feeding 0, 1, x or x\' to the data inputs. FPGAs are seas of such LUTs.</li></ul>',
        keypoints: ['2ⁿ inputs ↔ n select lines.', 'Y(2:1) = S\'I0 + SI1.', '4:1 needs three 2:1; 2ⁿ:1 needs 2ⁿ − 1 two-input MUXes.', '2ⁿ:1 MUX = any n-var function; 2ⁿ⁻¹:1 with the residue trick.', 'Verilog: assign y = sel ? b : a; or case inside always @(*) with default.'],
        diagrams: [
          { id: 'D3.2a', title: '2:1 MUX symbol and rule', svg: mux2sym, how: 'Trapezoid, wide side with inputs 0 and 1, select at the bottom, output on the narrow side.' },
          { id: 'D3.2b', title: '2:1 MUX from gates', svg: mux2gates, how: 'NOT on S, two ANDs (A with S\', B with S), one OR.' },
          { id: 'D3.2c', title: '4:1 MUX gate level with select table', svg: mux4gates, how: 'Four 3-input ANDs (one per input with its select minterm) into a 4-input OR.' },
          { id: 'D3.2d', title: '4:1 MUX from three 2:1 MUXes', svg: mux4tree, how: 'Two MUXes on S0 feeding a third on S1.' },
          { id: 'D3.2e', title: '8:1 MUX from two 4:1 and one 2:1', svg: mux8, how: 'Two 4:1 MUXes share S1 S0; their outputs go to a 2:1 controlled by S2.' },
          { id: 'D3.2f', title: 'XOR implemented with a 4:1 MUX (LUT idea)', svg: muxXor, how: 'Selects = A, B; data inputs = the XOR output column 0, 1, 1, 0.' }],
        examples: [{ title: 'L04 exit ticket: F(A,B,C) = Σm(1,3,5,6) using a 4:1 MUX', html: '<p>S1 = A, S0 = B; look at C for each AB pair: AB = 00 → rows m0 (0), m1 (1) → F = C; 01 → m2 (0), m3 (1) → C; 10 → m4 (0), m5 (1) → C; 11 → m6 (1), m7 (0) → C\'. So <b>I0 = C, I1 = C, I2 = C, I3 = C\'</b>.</p>' }],
        code: [
          { id: 'C3.2a', title: 'mux2x1 — gate-level primitives (Lab 3 Exercise 1)', lang: 'verilog', src: 'module mux2x1 (\n    input  wire a, b, sel,\n    output wire y\n);\n    wire sel_n, a0, a1;\n    not u0 (sel_n, sel);      // S\'\n    and u1 (a0, a, sel_n);    // S\'·I0\n    and u2 (a1, b, sel);      // S·I1\n    or  u3 (y, a0, a1);       // sum\nendmodule', io: '<pre>sel=0: y follows a;  sel=1: y follows b</pre>' },
          { id: 'C3.2b', title: 'mux2x1 — one-line ternary version', lang: 'verilog', src: 'module mux2x1 (input wire a, b, sel, output wire y);\n    assign y = sel ? b : a;   // a 2:1 MUX in one line\nendmodule', io: '<pre>Same behaviour as C3.2a.</pre>' },
          { id: 'C3.2c', title: 'mux2x1_tb — all 8 (sel, a, b) combinations with $monitor', lang: 'verilog', src: 'module mux2x1_tb;\n    reg a, b, sel;\n    wire y;\n    mux2x1 uut (.a(a), .b(b), .sel(sel), .y(y));\n    initial begin\n        sel = 0; a = 0; b = 0;\n        #10 sel = 0; a = 0; b = 1;\n        #10 sel = 0; a = 1; b = 0;\n        #10 sel = 0; a = 1; b = 1;\n        #10 sel = 1; a = 0; b = 0;\n        #10 sel = 1; a = 0; b = 1;\n        #10 sel = 1; a = 1; b = 0;\n        #10 sel = 1; a = 1; b = 1;\n        #10 $finish;\n    end\n    initial begin\n        $dumpfile("mux2x1_wave.vcd");\n        $dumpvars(0, mux2x1_tb);\n        $monitor("Time = %0t | sel = %b, a = %b, b = %b | y = %b", $time, sel, a, b, y);\n    end\nendmodule', io: '<pre>Time = 0 | sel = 0, a = 0, b = 0 | y = 0\nTime = 10 | sel = 0, a = 0, b = 1 | y = 0\nTime = 20 | sel = 0, a = 1, b = 0 | y = 1\nTime = 30 | sel = 0, a = 1, b = 1 | y = 1\nTime = 40 | sel = 1, a = 0, b = 0 | y = 0\nTime = 50 | sel = 1, a = 0, b = 1 | y = 1\nTime = 60 | sel = 1, a = 1, b = 0 | y = 0\nTime = 70 | sel = 1, a = 1, b = 1 | y = 1</pre>' },
          { id: 'C3.2d', title: 'mux4_1 — behavioural case statement (Lab 3 Exercise 2)', lang: 'verilog', src: 'module mux4_1 (\n    input  wire i0, i1, i2, i3,\n    input  wire s0, s1,\n    output reg  y              // assigned in always → reg\n);\n    always @(*) begin\n        case ({s1, s0})\n            2\'b00: y = i0;\n            2\'b01: y = i1;\n            2\'b10: y = i2;\n            default: y = i3;     // covers 2\'b11 and X/Z; avoids a latch\n        endcase\n    end\nendmodule', io: '<pre>{s1,s0}=00→i0, 01→i1, 10→i2, 11→i3</pre>' },
          { id: 'C3.2e', title: 'mux4_1_tb — sweep every select value with a for loop', lang: 'verilog', src: 'module mux4_1_tb;\n    reg i0, i1, i2, i3, s0, s1;\n    wire y;\n    integer k;\n    mux4_1 dut (.i0(i0), .i1(i1), .i2(i2), .i3(i3), .s0(s0), .s1(s1), .y(y));\n    initial begin\n        $dumpfile("mux4_1_tb.vcd"); $dumpvars(0, mux4_1_tb);\n        i0 = 0; i1 = 1; i2 = 0; i3 = 1;\n        for (k = 0; k < 4; k = k + 1) begin\n            {s1, s0} = k; #10;       // walks 00, 01, 10, 11\n            $display("sel=%b%b y=%b", s1, s0, y);\n        end\n        $finish;\n    end\nendmodule', io: '<pre>sel=00 y=0\nsel=01 y=1\nsel=10 y=0\nsel=11 y=1</pre>' },
          { id: 'C3.2f', title: '8:1 MUX from two 4:1 and one 2:1 (Lab 3 take-home 01)', lang: 'verilog', src: 'module mux8_1 (input wire [7:0] i, input wire [2:0] s, output wire y);\n    wire lo, hi;\n    mux4_1 m0 (.i0(i[0]), .i1(i[1]), .i2(i[2]), .i3(i[3]), .s0(s[0]), .s1(s[1]), .y(lo));\n    mux4_1 m1 (.i0(i[4]), .i1(i[5]), .i2(i[6]), .i3(i[7]), .s0(s[0]), .s1(s[1]), .y(hi));\n    assign y = s[2] ? hi : lo;          // the 2:1 stage on the third select bit\nendmodule', io: '<pre>i = 8\'b1010_0110, s = 3\'d5 → y = i[5] = 1</pre>' }],
        mistakes: ['Wrong select-line count: an 8:1 MUX needs 3 selects, not 8.', 'Confusing MUX (many → one) with DEMUX (one → many).', 'Swapping {s1, s0} order in Verilog.', 'Missing default in the case → latch.'],
        practice: [
          mcq('A 2:1 MUX has A = 1, B = 0 and S = 1. Output Y =', ['1', '0', 'undefined', 'A ⊕ B'], 1, 'Y = S\'A + SB = 0·1 + 1·0 = 0 (S = 1 selects B).', ['That would be S = 0.', 'Correct.', 'MUX output is defined.', 'Not a MUX equation.'], 'Class quiz (L03 Q2)'),
          mcq('In a 4:1 MUX with S1 = 1, S0 = 0, the selected input is:', ['I0', 'I1', 'I2', 'I3'], 2, 'S1S0 = 10₂ = 2 → I2.', ['00.', '01.', 'Correct.', '11.'], 'Class quiz (L03 Q3)'),
          nat('How many 2:1 multiplexers are needed to build a 16:1 multiplexer (tree)?', 15, 0, '8 + 4 + 2 + 1 = 15 (2ⁿ − 1 for 2ⁿ inputs).'),
          nat('Number of select lines of a 32:1 MUX?', 5, 0, '2⁵ = 32.'),
          mcq('With S1 = A, S0 = B, which data inputs make a 4:1 MUX realise F = A + B?', ['0, 1, 1, 1', '0, 0, 0, 1', '1, 0, 0, 0', '0, 1, 1, 0'], 0, 'I_k = F at row k: rows 00, 01, 10, 11 → 0, 1, 1, 1.', ['Correct.', 'That is AND.', 'That is NOR.', 'That is XOR.'])
        ],
        subjective: [sub('Design a 4:1 MUX using basic gates, give its truth table, and show how it can be built from 2:1 MUXes. Use it to implement F(A,B,C) = Σm(1,3,5,6). (5 marks)', '<p>See D3.2c (gate level, Y = S1\'S0\'I0 + S1\'S0I1 + S1S0\'I2 + S1S0I3) and D3.2d (tree). For F: S1 = A, S0 = B, I0 = C, I1 = C, I2 = C, I3 = C\'.</p>', 5, ['2 — gate circuit + table', '1 — tree', '2 — function implementation'], ['D3.2c', 'D3.2d'])]
      },
      {
        id: '3.3', title: 'Demultiplexers and n-to-2ⁿ Decoders', badge: 'class', sources: '[L03] p12-14; [L04] p2-7; [LB3] p29-38; [SP3] Lab 03 DEMUX problems',
        keywords: 'demux demultiplexer decoder one hot 2-to-4 3-to-8 enable',
        explain: '<p><b>Analogy:</b> a DEMUX is a postal sorter — one incoming parcel goes to exactly one of many bins; a decoder is a hotel key panel — dial a room number and exactly one door unlocks.</p>' +
          '<ul><li><b>DEMUX 1:2ⁿ:</b> one data input D, n selects, 2ⁿ outputs; the chosen output = D, all others 0. 1:2: Y0 = S\'D, Y1 = SD. (Course naming: 1:2, 1:4 — “2:1 DEMUX” would read backwards.)</li>' +
          '<li><b>n-to-2ⁿ decoder:</b> n code bits → 2ⁿ outputs, exactly one is 1 (<b>one-hot</b>); output Dk = minterm k. A 3-to-8 decoder = 8 AND gates + 3 inverters; cost grows exponentially with n.</li>' +
          '<li><b>Decoder = DEMUX with its data input tied to 1</b> (the enable). With an enable E, all outputs are 0 when E = 0.</li>' +
          '<li><b>Any function = decoder + OR:</b> OR together the decoder outputs of the function\'s minterms.</li>' +
          '<li><b>Uses:</b> memory address decoding (high address bits pick one chip/bank), register-file write port (5-to-32 decoder picks the register — Unit 7), instruction decoding, chip selects.</li></ul>' +
          '<div class="table-wrap"><table><tr><th></th><th>MUX</th><th>DEMUX</th><th>Decoder</th></tr><tr><td>Inputs</td><td>2ⁿ data + n select</td><td>1 data + n select</td><td>n code bits (+ enable)</td></tr><tr><td>Outputs</td><td>1</td><td>2ⁿ</td><td>2ⁿ (one-hot)</td></tr><tr><td>Does</td><td>selects one input</td><td>routes to one output</td><td>activates one line per code</td></tr></table></div>',
        keypoints: ['Decoder output Dk = mk; exactly one high.', 'Decoder = DEMUX with D = 1.', 'Function = OR of decoder outputs for its minterms.', 'n-to-2ⁿ decoder: 2ⁿ ANDs (n inputs each) + n inverters.'],
        diagrams: [
          { id: 'D3.3a', title: '1:2 DEMUX from gates', svg: demux12, how: 'NOT on S; Y0 = AND(D, S\'), Y1 = AND(D, S).' },
          { id: 'D3.3b', title: '1:4 DEMUX symbol and routing table', svg: demux14, how: 'Reverse trapezoid with one input on the left, four outputs on the right, 2-bit select below.' },
          { id: 'D3.3c', title: '2-to-4 decoder with enable', svg: dec24, how: 'Four 3-input ANDs: E with each combination of A1/A1\' and A0/A0\'.' },
          { id: 'D3.3d', title: '3-to-8 decoder internals', svg: dec38, how: 'Three inverters, eight 3-input ANDs; label each output with its minterm.' }],
        examples: [{ title: 'Full adder with a 3-to-8 decoder and two OR gates', html: '<p>Inputs (A, B, Cin) on the decoder. Sum = Σm(1,2,4,7) → OR(D1, D2, D4, D7). Cout = Σm(3,5,6,7) → OR(D3, D5, D6, D7).</p>' },
          { title: 'Which block? (L04 quick check)', html: '<p>“Select one of 8 sensor readings to send to the CPU” → many inputs to one output → <b>8:1 MUX</b>. A decoder activates a line from a code; it does not pass data.</p>' }],
        code: [
          { id: 'C3.3a', title: 'demux1_2 (Lab 3 Exercise 3) and the portal\'s case version', lang: 'verilog', src: 'module demux1_2 (input wire i, sel, output wire y0, y1);\n    assign y0 = ~sel & i;\n    assign y1 =  sel & i;\nendmodule\n\n// portal solution style (behavioural)\nmodule demux1x2 (i, sel, y0, y1);\n    input i, sel;\n    output reg y0, y1;\n    always @(*) begin\n        y0 = 0; y1 = 0;          // unselected output must be 0\n        case (sel)\n            1\'b0: y0 = i;\n            1\'b1: y1 = i;\n        endcase\n    end\nendmodule', io: '<pre>i=1 sel=0 → y0=1 y1=0\ni=1 sel=1 → y0=0 y1=1\ni=0 sel=1 → y0=0 y1=0</pre>' },
          { id: 'C3.3b', title: 'demux1_4 with a 4-bit output bus (Lab 3 Exercise 4) + gate form', lang: 'verilog', src: 'module demux1_4 (input wire d, input wire [1:0] sel, output reg [3:0] y);\n    always @(*) begin\n        y = 4\'b0000;              // clear all outputs first\n        case (sel)\n            2\'b00: y[0] = d;\n            2\'b01: y[1] = d;\n            2\'b10: y[2] = d;\n            default: y[3] = d;\n        endcase\n    end\nendmodule\n\n// equivalent gate-level form (portal comment)\nmodule demux1x4_gates (input i, input [1:0] sel, output y0, y1, y2, y3);\n    assign y0 = ~sel[1] & ~sel[0] & i;\n    assign y1 = ~sel[1] &  sel[0] & i;\n    assign y2 =  sel[1] & ~sel[0] & i;\n    assign y3 =  sel[1] &  sel[0] & i;\nendmodule', io: '<pre>d=1: sel=00 → y=0001, 01 → 0010, 10 → 0100, 11 → 1000</pre>' },
          { id: 'C3.3c', title: 'demux1_2_tb and demux1_4_tb', lang: 'verilog', src: 'module demux1_2_tb;\n    reg i, sel; wire y0, y1;\n    demux1_2 dut (.i(i), .sel(sel), .y0(y0), .y1(y1));\n    initial begin\n        $dumpfile("demux1_2_tb.vcd"); $dumpvars(0, demux1_2_tb);\n        i = 1; sel = 0; #10;   // expect y0=1, y1=0\n        i = 1; sel = 1; #10;   // expect y0=0, y1=1\n        i = 0; sel = 1; #10;   // expect y0=0, y1=0\n        $finish;\n    end\nendmodule\n\nmodule demux1_4_tb;\n    reg d; reg [1:0] sel; wire [3:0] y; integer k;\n    demux1_4 dut (.d(d), .sel(sel), .y(y));\n    initial begin\n        $dumpfile("demux1_4_tb.vcd"); $dumpvars(0, demux1_4_tb);\n        d = 1;\n        for (k = 0; k < 4; k = k + 1) begin sel = k; #10; $display("sel=%b y=%b", sel, y); end\n        $finish;\n    end\nendmodule', io: '<pre>sel=00 y=0001\nsel=01 y=0010\nsel=10 y=0100\nsel=11 y=1000</pre>' },
          { id: 'C3.3d', title: '2-to-4 decoder with enable', lang: 'verilog', src: 'module dec2to4 (input wire en, input wire [1:0] a, output wire [3:0] d);\n    assign d = en ? (4\'b0001 << a) : 4\'b0000;   // one-hot\nendmodule', io: '<pre>en=1: a=00→0001, 01→0010, 10→0100, 11→1000; en=0 → 0000</pre>' }],
        mistakes: ['Calling a decoder a DEMUX (or vice versa): a decoder has no data input.', 'Forgetting that unselected DEMUX outputs must be 0 (clear them first in Verilog).', 'Counting decoder outputs as n, not 2ⁿ.'],
        practice: [
          nat('How many output lines does a 3-to-8 decoder have?', 8, 0, '2³ = 8.', 'Class quiz (L03 Q1)'),
          mcq('“Select one of 8 sensor readings to send to the CPU.” Which block?', ['8:1 MUX', '1:8 DEMUX', '3-to-8 decoder', 'Full adder'], 0, 'Many inputs → one output = MUX.', ['Correct.', 'One input → many outputs.', 'Activates a line, does not pass data.', 'Arithmetic.'], 'From class slides'),
          nat('How many 2-input AND gates (assume only 2-input gates) are needed in a 2-to-4 decoder without enable?', 4, 0, 'One AND per output: A1\'A0\', A1\'A0, A1A0\', A1A0 (plus 2 inverters).'),
          mcq('A decoder can be viewed as a DEMUX whose data input is:', ['tied to 0', 'tied to 1 (enable)', 'the select lines', 'the clock'], 1, 'With D = 1 the selected output is 1 and the rest 0 → one-hot decoder.', ['Then all outputs are 0.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('To implement F(A,B,C) = Σm(0,3,5,6) with a 3-to-8 decoder, how many inputs does the OR gate need?', 4, 0, 'OR the four decoder outputs D0, D3, D5, D6.')
        ],
        subjective: [sub('Design a 3-to-8 decoder with truth table and logic diagram. Use it to implement a full adder. (5 marks)', '<p>Truth table: input k → only Dk = 1. Circuit D3.3d (8 ANDs + 3 NOTs). Full adder: Sum = D1 + D2 + D4 + D7; Cout = D3 + D5 + D6 + D7.</p>', 5, ['2 — table', '2 — circuit', '1 — full adder'], ['D3.3d'])]
      },
      {
        id: '3.4', title: 'Half Adder Design', badge: 'class', sources: '[L04] p8-9; [LB4] p2-8; [SP3] Lab 4 Half Adder',
        keywords: 'half adder sum carry xor and',
        explain: '<p><b>Analogy:</b> adding two single digits in your head — you get a result digit and maybe a “carry 1”.</p><p>A <b>half adder</b> adds two bits A and B: 0+0 = 00, 0+1 = 01, 1+0 = 01, 1+1 = 10. <b>Sum = A ⊕ B</b> (1 when inputs differ), <b>Carry = A·B</b> (1 only when both are 1). It is “half” because it has <b>no carry-in</b>, so it cannot be chained for multi-bit addition: at bit 1 of 11 + 01 there are three bits to add (A1, B1, carry from bit 0).</p>',
        keypoints: ['Sum = A ⊕ B; Carry = AB.', 'One XOR + one AND.', 'No Cin → cannot be chained.'],
        diagrams: [{ id: 'D3.4a', title: 'Half adder: circuit and truth table', svg: ha, how: 'XOR and AND side by side, both fed by A and B.' }],
        code: [
          { id: 'C3.4a', title: 'half_adder.v (Lab 4)', lang: 'verilog', src: '// 1-bit half adder\nmodule half_adder (\n    input  wire a,\n    input  wire b,\n    output wire sum,\n    output wire cout\n);\n    assign sum  = a ^ b;   // XOR\n    assign cout = a & b;   // AND\nendmodule', io: '<pre>a b | sum cout\n0 0 |  0   0\n0 1 |  1   0\n1 0 |  1   0\n1 1 |  0   1</pre>' },
          { id: 'C3.4b', title: 'ha_tb.v — self-checking testbench using a task', lang: 'verilog', src: 'module ha_tb;\n    reg a, b; wire sum, cout;\n    half_adder dut (.a(a), .b(b), .sum(sum), .cout(cout));\n    task check (input ea, eb, es, ec);\n        begin\n            a = ea; b = eb; #1;\n            $display("%s a=%b b=%b s=%b c=%b",\n                     (sum === es && cout === ec) ? "PASS" : "FAIL", a, b, sum, cout);\n        end\n    endtask\n    initial begin\n        $dumpfile("ha.vcd"); $dumpvars(0, ha_tb);\n        check(0,0,0,0); check(0,1,1,0);\n        check(1,0,1,0); check(1,1,0,1);\n        $finish;\n    end\nendmodule', io: '<pre>PASS a=0 b=0 s=0 c=0\nPASS a=0 b=1 s=1 c=0\nPASS a=1 b=0 s=1 c=0\nPASS a=1 b=1 s=0 c=1</pre>' }],
        mistakes: ['Writing Sum = A + B (OR) — 1 + 1 must give Sum 0.', 'Using a half adder where a carry-in exists.'],
        practice: [
          mcq('The Sum output of a half adder is:', ['A·B', 'A + B', 'A ⊕ B', '(A·B)\''], 2, 'Sum is 1 exactly when one input is 1.', ['That is the carry.', 'OR gives 1 for 1+1.', 'Correct.', 'NAND.'], 'From class slides'),
          mcq('Why can a half adder not be used for bit 1 of a 2-bit addition?', ['It has no carry-in input', 'It is too slow', 'It has no sum output', 'It needs a clock'], 0, 'Bit 1 must add A1, B1 and the carry from bit 0 — three inputs.', ['Correct.', 'Speed is not the issue.', 'It does have Sum.', 'Combinational.']),
          nat('Minimum number of 2-input NAND gates to build a half adder (Sum and Carry)?', 5, 0, 'XOR needs 4 NANDs, and the first NAND (AB)\' is shared: Carry = NAND((AB)\', (AB)\') adds 1 → 5.'),
          txt('Half adder inputs A = 1, B = 1. Write “Carry Sum” as two bits.', ['10', '1 0'], '1 + 1 = 10₂ → Carry 1, Sum 0.')
        ],
        subjective: [sub('Design a half adder: truth table, K-map/expressions and logic diagram. Why is it called “half”? (4 marks)', '<p>Table (D3.4a). Sum = A\'B + AB\' = A ⊕ B; Carry = AB. Circuit: one XOR, one AND. Half: it cannot accept a carry-in, so a full adder (two half adders + OR) is needed for multi-bit addition.</p>', 4, ['1 — table', '1 — expressions', '1 — circuit', '1 — reason'], ['D3.4a'])]
      },
      {
        id: '3.5', title: 'Full Adder Design', badge: 'class', sources: '[L04] p10-13; [LB4] p8-23; [SP3] Lab 4 Full Adder, 4-bit RCA; [SP4] quiz 4',
        keywords: 'full adder ripple carry adder cout sum majority parity',
        explain: '<p><b>Analogy:</b> column addition with a carry from the previous column — three digits per column.</p>' +
          '<ul><li><b>Sum = A ⊕ B ⊕ Cin</b> — 1 when an odd number of inputs are 1 (parity).</li><li><b>Cout = AB + Cin(A ⊕ B)</b> = AB + BCin + ACin — 1 when two or more inputs are 1 (majority).</li>' +
          '<li><b>Two half adders + OR:</b> HA1(A, B) → S1, C1; HA2(S1, Cin) → Sum, C2; Cout = C1 + C2. C1 and C2 are never 1 together, so OR (or XOR) works.</li>' +
          '<li><b>Ripple-carry adder (RCA):</b> chain n full adders, Cout of stage i → Cin of stage i+1, Cin0 = 0 (or 1 for subtraction). Simple, but the last sum is valid only after the carry ripples through every stage: delay ∝ n (≈ 2 gate delays per stage: 8 for 4-bit, 64 bits → 128).</li></ul>',
        keypoints: ['Sum = A⊕B⊕Cin; Cout = AB + Cin(A⊕B).', 'FA = 2 HA + 1 OR.', 'n-bit RCA = n FAs; delay O(n).', 'Worst case: 0111 1111 + 0000 0001 style inputs (carry through all stages).'],
        diagrams: [
          { id: 'D3.5a', title: 'Full adder gate level', svg: fa, how: 'Two XORs in series for Sum; two ANDs (AB and Cin·(A⊕B)) into an OR for Cout.' },
          { id: 'D3.5b', title: 'Full adder from two half adders + OR', svg: fa2ha, how: 'Two HA boxes in series, OR their carries.' },
          { id: 'D3.5c', title: '4-bit ripple-carry adder', svg: rca, how: 'Four FA boxes right to left (FA0 on the right), carry arrows leftward, Cin = 0 at the right.' }],
        examples: [{ title: 'Lab 4 test vectors traced', html: '<div class="table-wrap"><table class="tt"><tr><th>a</th><th>b</th><th>carries</th><th>sum</th><th>cout</th></tr><tr><td>0001</td><td>0001</td><td>bit0→bit1</td><td>0010</td><td>0</td></tr><tr><td>0111</td><td>0001</td><td>bits 0→1→2→3</td><td>1000</td><td>0</td></tr><tr><td>1111</td><td>0001</td><td>through all 4</td><td>0000</td><td>1</td></tr><tr><td>1000</td><td>1000</td><td>only bit 3</td><td>0000</td><td>1</td></tr></table></div>' }],
        code: [
          { id: 'C3.5a', title: 'full_adder.v — structural, two half adders + OR (Lab 4)', lang: 'verilog', src: '// 1-bit full adder: 2 HAs + 1 OR\nmodule full_adder (\n    input  wire a, b, cin,\n    output wire sum,\n    output wire cout\n);\n    wire s1, c1, c2;\n    half_adder ha1 (.a(a),  .b(b),   .sum(s1),  .cout(c1));\n    half_adder ha2 (.a(s1), .b(cin), .sum(sum), .cout(c2));\n    assign cout = c1 | c2;     // OR — never both 1\nendmodule', io: '<pre>Compile: iverilog -o fa.vvp half_adder.v full_adder.v fa_tb.v</pre>' },
          { id: 'C3.5b', title: 'fa_tb.v — all 8 cases', lang: 'verilog', src: 'module fa_tb;\n    reg a, b, cin; wire sum, cout;\n    full_adder dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));\n    integer i;\n    initial begin\n        $dumpfile("fa.vcd"); $dumpvars(0, fa_tb);\n        for (i = 0; i < 8; i = i + 1) begin\n            {a, b, cin} = i[2:0]; #5;\n            $display("a=%b b=%b cin=%b -> sum=%b cout=%b", a, b, cin, sum, cout);\n        end\n        $finish;\n    end\nendmodule', io: '<pre>a=0 b=0 cin=0 -> sum=0 cout=0\na=0 b=0 cin=1 -> sum=1 cout=0\na=0 b=1 cin=0 -> sum=1 cout=0\na=0 b=1 cin=1 -> sum=0 cout=1\na=1 b=0 cin=0 -> sum=1 cout=0\na=1 b=0 cin=1 -> sum=0 cout=1\na=1 b=1 cin=0 -> sum=0 cout=1\na=1 b=1 cin=1 -> sum=1 cout=1</pre>' },
          { id: 'C3.5c', title: 'adder4.v — 4-bit ripple-carry adder', lang: 'verilog', src: 'module adder4 (\n    input  wire [3:0] a, b,\n    input  wire       cin,\n    output wire [3:0] sum,\n    output wire       cout\n);\n    wire c1, c2, c3;   // internal carries\n    full_adder fa0 (.a(a[0]), .b(b[0]), .cin(cin), .sum(sum[0]), .cout(c1));\n    full_adder fa1 (.a(a[1]), .b(b[1]), .cin(c1),  .sum(sum[1]), .cout(c2));\n    full_adder fa2 (.a(a[2]), .b(b[2]), .cin(c2),  .sum(sum[2]), .cout(c3));\n    full_adder fa3 (.a(a[3]), .b(b[3]), .cin(c3),  .sum(sum[3]), .cout(cout));\nendmodule', io: '<pre>See the test vectors table above.</pre>' },
          { id: 'C3.5d', title: 'adder4_tb.v — four carry-stressing vectors', lang: 'verilog', src: 'module adder4_tb;\n    reg [3:0] a, b; reg cin;\n    wire [3:0] sum; wire cout;\n    adder4 dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));\n    initial begin\n        $dumpfile("adder4.vcd"); $dumpvars(0, adder4_tb);\n        cin = 0;\n        a = 4\'b0001; b = 4\'b0001; #10;   // 1 + 1 = 2\n        a = 4\'b0111; b = 4\'b0001; #10;   // 7 + 1 = 8\n        a = 4\'b1111; b = 4\'b0001; #10;   // overflow: cout = 1\n        a = 4\'b1000; b = 4\'b1000; #10;   // 8 + 8 = 16\n        $finish;\n    end\n    initial $monitor("%b + %b = %b cout=%b", a, b, sum, cout);\nendmodule', io: '<pre>0001 + 0001 = 0010 cout=0\n0111 + 0001 = 1000 cout=0\n1111 + 0001 = 0000 cout=1\n1000 + 1000 = 0000 cout=1</pre>' }],
        mistakes: ['Writing cout = c1 & c2 (never fires).', 'Wiring sum[3] to fa0 (bit order reversed).', 'Leaving fa3\'s cin unconnected → X.', 'Calling ripple-carry “fast” — it is simple, not fast.'],
        practice: [
          mcq('Why does the worst-case delay of a ripple-carry adder grow linearly with the number of bits?', ['Each cell needs exponentially more transistors', 'The carry must travel serially from LSB to MSB', 'Boolean operations become nonlinear', 'Voltage degrades with distance'], 1, 'Each stage waits for the previous carry: delay = n × t_carry.', ['No.', 'Correct.', 'No.', 'No.'], 'Class quiz (L04 Q1)'),
          mcq('A 4-bit RCA computes 0111 + 0001. Result?', ['0110, Cout = 0', '1000, Cout = 0', '1000, Cout = 1', '0000, Cout = 1'], 1, '7 + 1 = 8 = 1000, fits in 4 bits → Cout = 0.', ['Wrong sum.', 'Correct.', 'No carry out.', 'That is 15 + 1.'], 'Class quiz (L04 Q2)'),
          mcq('Cout of a full adder equals:', ['A ⊕ B ⊕ Cin', 'AB + BCin + ACin', 'AB + Cin', 'A + B + Cin'], 1, 'Majority function (two or more inputs 1).', ['That is Sum.', 'Correct.', 'AB + Cin gives 1 for A=0, B=0, Cin=1, but Cout must be 0.', 'Too many 1s.']),
          nat('If each full-adder carry path takes 2 gate delays, how many gate delays for the carry to ripple through a 16-bit RCA?', 32, 0, '16 stages × 2 = 32.'),
          nat('How many half adders are needed to build a 4-bit ripple-carry adder (FA = 2 HA + OR, stage 0 also a full adder)?', 8, 0, '4 full adders × 2 half adders = 8 (plus 4 OR gates).')
        ],
        subjective: [sub('Design a full adder (truth table, K-maps for Sum and Cout, circuit) and show its construction from two half adders. Extend to a 4-bit ripple-carry adder and comment on its delay. (5 marks)', '<p>Truth table in C3.5b. K-map Sum: checkerboard → no grouping → A⊕B⊕Cin. K-map Cout: three pairs → AB + BCin + ACin. Circuits D3.5a/b; 4-bit RCA D3.5c; delay ∝ n, fixed by carry-lookahead (3.E1).</p>', 5, ['1 — table', '1 — expressions', '1 — circuit', '1 — two-HA form', '1 — RCA + delay'], ['D3.5a', 'D3.5b', 'D3.5c'])]
      },
      {
        id: '3.6', title: 'CPU Preview – ALU and Register File', badge: 'researched', sources: 'Listed in the L04/L05 lecture titles; no dedicated slides. Register file taught in Unit 7 ([RF] deck).',
        sourceLine: 'Source: Harris & Harris, DDCA §5.2.4 (ALU); Patterson & Hennessy, COD Appendix A.5 (1-bit ALU)',
        keywords: 'alu arithmetic logic unit register file preview binvert operation',
        explain: '<p><b>Analogy:</b> the register file is the CPU\'s desk drawer (a few fast slots), the ALU is its calculator. Every R-type instruction reads two numbers from the drawer, computes on the calculator, and puts the result back.</p>' +
          '<p><b>ALU (Arithmetic Logic Unit):</b> combinational block built from the parts of this unit. A 1-bit ALU slice contains an AND gate, an OR gate and a full adder; a MUX (the <i>Operation</i> select) picks which result appears. A <b>Binvert</b> MUX feeds B or B\' into the adder, and with CarryIn = 1 the adder computes A − B (two\'s complement, Unit 4). Chaining 32 slices (carry out → carry in) gives a 32-bit ALU; a NOR of all result bits produces the <b>Zero</b> flag (used by beq). Typical control codes (P&amp;H): 0000 AND, 0001 OR, 0010 add, 0110 subtract, 0111 set-on-less-than, 1100 NOR.</p>' +
          '<p><b>Register file:</b> 32 registers × 32 bits; two read ports (combinational, MUX-based) and one write port (decoder + write enable, clocked). Detailed in Unit 7.2. Together: register file → ALU → register file is the core loop of the datapath (Unit 13).</p>',
        keypoints: ['1-bit ALU = AND + OR + FA + MUX; subtraction via Binvert + CarryIn = 1.', 'Zero flag = NOR of all result bits.', 'ALU control 0010 add, 0110 sub, 0000 AND, 0001 OR, 0111 slt.', 'Register file: 2 read ports, 1 write port.'],
        diagrams: [
          { id: 'D3.6a', title: '1-bit ALU slice (AND, OR, add/subtract)', svg: alu1, how: 'Binvert MUX on b, then AND, OR and FA in parallel, a 3:1 MUX on Operation picks the result.' },
          { id: 'D3.6b', title: 'Preview: register file feeding the ALU', svg: aluRf, how: 'Register-file box with two outputs into an ALU; the result loops back to the register file.' }],
        code: [{ id: 'C3.6a', title: '4-bit ALU in Verilog (AND, OR, ADD, SUB, SLT) with Zero flag', lang: 'verilog', src: 'module alu4 (\n    input  wire [3:0] a, b,\n    input  wire [3:0] ctl,       // 0000 AND, 0001 OR, 0010 ADD, 0110 SUB, 0111 SLT\n    output reg  [3:0] result,\n    output wire       zero\n);\n    wire [3:0] diff = a - b;\n    always @(*) begin\n        case (ctl)\n            4\'b0000: result = a & b;\n            4\'b0001: result = a | b;\n            4\'b0010: result = a + b;\n            4\'b0110: result = diff;\n            4\'b0111: result = ($signed(a) < $signed(b)) ? 4\'d1 : 4\'d0;\n            default: result = 4\'d0;\n        endcase\n    end\n    assign zero = (result == 4\'d0);\nendmodule', io: '<pre>a=0101 b=0011: AND→0001, OR→0111, ADD→1000, SUB→0010 (zero=0), SLT→0000\na=0011 b=0011 SUB→0000 zero=1</pre>' }],
        mistakes: ['Thinking the ALU stores results — it is combinational; storage is the register file.', 'Forgetting CarryIn = 1 for subtraction (B\' alone gives one\'s complement).'],
        practice: [
          mcq('In a 1-bit ALU, A − B is computed by:', ['inverting A and setting CarryIn = 0', 'inverting B (Binvert = 1) and setting CarryIn = 1', 'using the OR gate', 'shifting B left'], 1, 'A + B\' + 1 = A − B in two\'s complement.', ['Wrong operand.', 'Correct.', 'Logic op only.', 'Shifts multiply.']),
          mcq('The ALU\'s Zero output used by beq is generated by:', ['AND of all result bits', 'NOR of all result bits', 'XOR of the operands', 'the carry out'], 1, 'Zero = 1 iff every result bit is 0 → NOR.', ['That detects all ones.', 'Correct.', 'Not directly.', 'No.']),
          nat('How many 1-bit ALU slices form a 32-bit ALU?', 32, 0, 'One slice per bit, carries chained.'),
          mcq('Which block provides the two operands of an R-type instruction to the ALU?', ['Data memory', 'Register file read ports', 'Instruction memory', 'Sign extender'], 1, 'rs and rt are read from the register file.', ['Only for loads.', 'Correct.', 'Holds instructions.', 'Only for immediates.'])
        ],
        subjective: [sub('Draw a 1-bit ALU that performs AND, OR, addition and subtraction. Explain how 32 such slices form a 32-bit ALU and how the Zero flag is produced. (5 marks)', '<p>See D3.6a. Operation MUX selects AND/OR/sum; Binvert = 1 and CarryIn0 = 1 give subtraction. 32 slices: CarryOut(i) → CarryIn(i+1). Zero = NOR of all 32 result bits (Zero = 1 only when every bit R31 down to R0 is 0), built as a tree of OR gates followed by one inverter.</p>', 5, ['2 — 1-bit diagram', '1 — subtraction', '1 — chaining', '1 — Zero flag'], ['D3.6a'])]
      },
      {
        id: '3.E1', title: 'Extra from slides: Carry-lookahead adder', badge: 'extra', sources: '[L04] p13; [LB4] p21, p24; [LB5] p4 (explore CLA)',
        sourceLine: 'Source: class slides; Harris & Harris DDCA §5.2.1 (CLA)',
        keywords: 'carry lookahead generate propagate cla',
        explain: '<p><b>Idea:</b> instead of waiting for carries to ripple, compute every carry directly from the inputs. For each bit: <b>Generate Gi = AiBi</b> (this bit makes a carry) and <b>Propagate Pi = Ai ⊕ Bi</b> (this bit passes an incoming carry). Then C(i+1) = Gi + Pi·Ci; expanding gives every carry as a two-level SOP of G, P and C0. Sum Si = Pi ⊕ Ci. Trade-off: more gates (area) for far less delay — real CPUs use lookahead/hybrid adders (carry-select, Kogge–Stone, Brent–Kung).</p>',
        keypoints: ['G = AB, P = A ⊕ B; C(i+1) = G + P·C.', 'C2 = G1 + P1G0 + P1P0C0.', 'Delay roughly constant per block; area grows.'],
        diagrams: [{ id: 'D3.E1a', title: 'Carry-lookahead adder: G/P generation and parallel carry logic', svg: cla, how: 'Row of G/P boxes on top, one wide “lookahead” box below producing C1–C4.' }],
        practice: [
          mcq('In a carry-lookahead adder, the propagate signal Pi is:', ['AiBi', 'Ai ⊕ Bi', 'Ai + Bi only', 'Ci ⊕ Ai'], 1, 'The course slide uses P = A ⊕ B (A + B also works for carry but not for the sum).', ['That is generate.', 'Correct (class definition).', 'Works for carries only, not Si = Pi ⊕ Ci.', 'No.']),
          txt('Write C2 in terms of G1, P1, G0, P0, C0 (format: G1+P1G0+P1P0C0).', ['G1+P1G0+P1P0C0', 'G1 + P1G0 + P1P0C0', 'G1+P1·G0+P1·P0·C0'], 'C2 = G1 + P1C1 = G1 + P1(G0 + P0C0).'),
          mcq('The main advantage of CLA over ripple-carry is:', ['fewer gates', 'carries computed in parallel, so less delay', 'no need for full adders', 'lower power always'], 1, 'Area traded for speed.', ['It uses more gates.', 'Correct.', 'Sum logic remains.', 'Not necessarily.'])
        ],
        subjective: [sub('Explain carry generate and propagate and derive the carry-lookahead equations for a 4-bit adder. (5 marks)', '<p>Gi = AiBi, Pi = Ai⊕Bi; Ci+1 = Gi + PiCi. C1 = G0 + P0C0; C2 = G1 + P1G0 + P1P0C0; C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0; C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0. Si = Pi ⊕ Ci. All carries in two gate levels after G/P.</p>', 5, ['1 — G/P definitions', '3 — equations', '1 — trade-off'], ['D3.E1a'])]
      }
    ]
  });
})();
