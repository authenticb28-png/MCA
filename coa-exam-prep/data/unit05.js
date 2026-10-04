/* Unit 5 – Latches, Flip-Flops & Timing */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;

  const feedback = (function () {
    let s = S.box(60, 20, 120, 50, 'LOGIC', 'box') + S.a([[10, 45], [60, 45]], 'arr') + S.t(10, 38, 'in', 'xs b') + S.a([[180, 45], [240, 45]], 'arr') + S.t(244, 49, 'out', 'xs b');
    s += S.tc(150, 92, 'combinational: signal flows once, no memory', 'xs muted');
    s += S.box(340, 20, 120, 50, 'LOGIC', 'boxa') + S.a([[290, 35], [340, 35]], 'arr') + S.t(290, 28, 'in', 'xs b') + S.a([[460, 45], [520, 45]], 'arr') + S.t(524, 49, 'out', 'xs b');
    s += S.a([[490, 45], [490, 85], [320, 85], [320, 55], [340, 55]], 'hl') + S.dot(490, 45) + S.tc(405, 102, 'sequential: output fed back → it can hold a value (state)', 'xs b');
    return S.svg(560, 112, s, 'combinational vs feedback');
  })();

  const bistable = (function () {
    const i1 = S.gate('NOT', 130, 40), i2 = S.gate('NOT', 170, 120);
    let s = i1.svg + i2.svg.replace('class="g" d="M170', 'class="g" d="M170');
    // flip second inverter visually by drawing it pointing left
    s = i1.svg + '<path class="g" d="M200,105 L168,120 L200,135 z"/><circle class="g" cx="164" cy="120" r="4"/>';
    s += S.p([[i1.out[0], 40], [260, 40], [260, 120], [200, 120]]) + S.p([[160, 120], [100, 120], [100, 40], [i1.in[0][0], 40]]);
    s += S.dot(260, 40) + S.t(266, 36, 'Q', 'b') + S.dot(100, 120) + S.t(80, 136, 'Q\'', 'b');
    s += S.t(300, 70, 'Two stable states:', 'sm b') + S.t(300, 90, 'Q = 1, Q\' = 0  or  Q = 0, Q\' = 1', 'sm') + S.t(300, 110, 'Holds forever (while powered) —', 'xs muted') + S.t(300, 124, 'but there is no input to change it.', 'xs muted');
    return S.svg(560, 160, s, 'bistable element');
  })();

  function srLatch(type) {
    const nand = type === 'NAND';
    const g1 = S.gate(type, 170, 60), g2 = S.gate(type, 170, 160);
    let s = g1.svg + g2.svg;
    s += S.p([[60, 52], g1.in[0]]) + S.t(54, 56, nand ? 'S\'' : 'R', 'b', 'end');
    s += S.p([[60, 168], g2.in[1]]) + S.t(54, 172, nand ? 'R\'' : 'S', 'b', 'end');
    // cross coupling
    s += S.p([g1.out, [300, 60]]) + S.dot(260, 60) + S.p([[260, 60], [260, 95], [130, 125], [130, 152], g2.in[0]]);
    s += S.p([g2.out, [300, 160]]) + S.dot(260, 160) + S.p([[260, 160], [260, 125], [140, 95], [140, 68], g1.in[1]]);
    s += S.t(306, 64, nand ? 'Q' : 'Q', 'b') + S.t(306, 164, 'Q\'', 'b');
    const rows = nand ? [['S\'', 'R\'', 'Q⁺', 'action'], ['1', '1', 'Q', 'hold'], ['0', '1', '1', 'set'], ['1', '0', '0', 'reset'], ['0', '0', '–', 'forbidden (Q=Q\'=1)']] : [['S', 'R', 'Q⁺', 'action'], ['0', '0', 'Q', 'hold'], ['1', '0', '1', 'set'], ['0', '1', '0', 'reset'], ['1', '1', '–', 'forbidden (Q=Q\'=0)']];
    rows.forEach((r, i) => { s += S.t(360, 40 + i * 22, r[0], 'sm mono' + (i ? '' : ' b')) + S.t(390, 40 + i * 22, r[1], 'sm mono' + (i ? '' : ' b')) + S.t(420, 40 + i * 22, r[2], 'sm mono' + (i ? '' : ' b')) + S.t(455, 40 + i * 22, r[3], 'sm' + (i === 4 ? ' hltxt' : (i ? '' : ' b'))); });
    s += S.t(10, 210, nand ? 'NAND latch: inputs are active-LOW (a 0 sets/resets).' : 'NOR latch: inputs are active-HIGH. Each output feeds the other gate.', 'xs muted');
    return S.svg(640, 218, s, type + ' SR latch');
  }

  const gatedSR = (function () {
    const a1 = S.gate('AND', 120, 50), a2 = S.gate('AND', 120, 150);
    let s = a1.svg + a2.svg + S.rect(260, 30, 120, 140, 'boxa');
    s += S.tc(320, 100, 'SR latch', 'b') + S.t(266, 64, 'S', 'sm b') + S.t(266, 154, 'R', 'sm b') + S.t(374, 64, 'Q', 'sm b', 'end') + S.t(374, 154, 'Q\'', 'sm b', 'end');
    s += S.p([[30, 42], a1.in[0]]) + S.t(24, 46, 'S', 'b', 'end') + S.p([[30, 158], a2.in[1]]) + S.t(24, 162, 'R', 'b', 'end');
    s += S.p([[30, 100], [80, 100], [80, 58], a1.in[1]]) + S.p([[80, 100], [80, 142], a2.in[0]]) + S.dot(80, 100) + S.t(24, 104, 'E', 'b', 'end');
    s += S.a([a1.out, [260, 60]], 'arr') + S.a([a2.out, [260, 150]], 'arr') + S.a([[380, 60], [430, 60]], 'arr') + S.a([[380, 150], [430, 150]], 'arr');
    s += S.t(450, 80, 'E = 1: S/R act normally', 'xs') + S.t(450, 98, 'E = 0: both gated to 0 → hold', 'xs');
    return S.svg(620, 190, s, 'gated SR latch');
  })();

  const dLatch = (function () {
    const n = S.gate('NOT', 60, 150), a1 = S.gate('AND', 150, 50), a2 = S.gate('AND', 150, 150);
    let s = n.svg + a1.svg + a2.svg + S.rect(290, 30, 120, 140, 'boxa');
    s += S.tc(350, 100, 'SR latch', 'b') + S.t(296, 64, 'S', 'sm b') + S.t(296, 154, 'R', 'sm b') + S.t(404, 64, 'Q', 'sm b', 'end') + S.t(404, 154, 'Q\'', 'sm b', 'end');
    s += S.p([[20, 42], a1.in[0]]) + S.p([[40, 42], [40, 150], n.in[0]]) + S.dot(40, 42) + S.t(14, 46, 'D', 'b', 'end');
    s += S.p([n.out, [a2.in[1][0], 158]]) + S.t(100, 172, 'D\'', 'xs b');
    s += S.p([[20, 100], [125, 100], [125, 58], a1.in[1]]) + S.p([[125, 100], [125, 142], a2.in[0]]) + S.dot(125, 100) + S.t(14, 104, 'EN', 'b', 'end');
    s += S.a([a1.out, [290, 60]], 'arr') + S.a([a2.out, [290, 150]], 'arr') + S.a([[410, 60], [450, 60]], 'arr') + S.a([[410, 150], [450, 150]], 'arr');
    s += S.t(470, 70, 'S = D·EN, R = D\'·EN', 'xs b') + S.t(470, 90, 'S and R are never both 1', 'xs') + S.t(470, 110, 'EN = 1: Q = D (transparent)', 'xs') + S.t(470, 130, 'EN = 0: Q holds (opaque)', 'xs');
    return S.svg(650, 190, s, 'D latch');
  })();

  const dLatchWave = S.timing({ signals: [{ n: 'EN', w: '0011110000111100' }, { n: 'D', w: '0001101101100110', cls: 'wave2' }, { n: 'Q', w: '0001100000100111', cls: 'wave3' }], shade: [{ a: 2, b: 6, t: 'transparent', fill: 'rgba(47,158,68,.13)' }, { a: 10, b: 14, t: 'transparent', fill: 'rgba(47,158,68,.13)' }, { a: 6, b: 10, t: 'holding' }], title: 'D latch: Q copies D while EN = 1, holds while EN = 0', extraH: 18 });

  const clockW = S.timing({ signals: [{ n: 'CLK', w: '0101010101010' }], edges: [1, 3, 5, 7, 9, 11], labels: [{ x: 2, y: 1, dy: 4, t: '← one period T →' }], title: 'Clock: f = 1/T (3 GHz → T ≈ 0.33 ns); dashed = rising edges', extraH: 18 });

  const ring = (function () {
    let s = '';
    const g = [S.gate('NOT', 60, 50), S.gate('NOT', 170, 50), S.gate('NOT', 280, 50)];
    g.forEach((x) => (s += x.svg));
    s += S.wire(g[0].out, g[1].in[0]) + S.wire(g[1].out, g[2].in[0]);
    s += S.p([g[2].out, [360, 50], [360, 100], [30, 100], [30, 50], g[0].in[0]]) + S.dot(360, 50) + S.a([[360, 50], [400, 50]], 'arr') + S.t(406, 54, 'CLK', 'b');
    s += S.t(30, 130, 'An odd number of inverters (3, 5 or 7) in a loop never settles → it oscillates.', 'xs');
    s += S.t(30, 148, 'Period T = 2 × N × t_pd (N inverters, each with delay t_pd).', 'xs b');
    return S.svg(470, 158, s, 'ring oscillator');
  })();

  const masterSlave = (function () {
    let s = S.ff(120, 40, 110, 90, 'D latch\n(master)', { l: [['D', 25], ['EN', 70]], r: [['Q', 25]] }, null, 'boxa') + S.ff(330, 40, 110, 90, '', { l: [['D', 25], ['EN', 70]], r: [['Q', 25], ['Q\'', 70]] }, null, 'boxa');
    s += S.tc(175, 90, 'master', 'sm b') + S.tc(385, 90, 'slave', 'sm b');
    s += S.a([[40, 65], [120, 65]], 'arr') + S.t(34, 69, 'D', 'b', 'end');
    s += S.a([[230, 65], [330, 65]], 'arr') + S.tc(280, 58, 'Qm', 'xs b');
    s += S.a([[440, 65], [500, 65]], 'arr') + S.t(506, 69, 'Q', 'b');
    s += S.p([[40, 180], [300, 180], [300, 110], [330, 110]]) + S.t(34, 184, 'CLK', 'b', 'end');
    const n = S.gate('NOT', 70, 145, { stub: 0 });
    s += S.p([[60, 180], [60, 145], [70, 145]]) + S.dot(60, 180) + n.svg + S.p([n.out, [100, 145], [100, 110], [120, 110]]);
    s += S.t(10, 214, 'CLK = 0: master transparent (Qm follows D), slave holds.  CLK 0→1: master closes, slave opens → Q takes D at the RISING edge.', 'xs b');
    s += S.t(10, 230, 'Class slide variant: master enabled on CLK = 1 → the output changes at the FALLING edge (negative-edge FF).', 'xs muted');
    return S.svg(620, 238, s, 'master-slave D flip-flop');
  })();

  const dffSym = (function () {
    let s = S.ff(120, 20, 120, 110, '', { l: [['D', 30]], r: [['Q', 30], ['Q\'', 85]] }, 85, 'box');
    s += S.a([[60, 50], [120, 50]], 'arr') + S.t(54, 54, 'D', 'b', 'end') + S.p([[60, 105], [120, 105]]) + S.t(54, 109, 'CLK', 'b', 'end');
    s += S.a([[240, 50], [300, 50]], 'arr') + S.a([[240, 105], [300, 105]], 'arr');
    s += S.t(320, 50, 'At each rising edge: Q ← D', 'sm b') + S.t(320, 72, 'Between edges Q is frozen', 'sm') + S.t(320, 94, 'Triangle = edge-triggered', 'sm') + S.t(320, 116, 'Q(n+1) = D', 'sm b');
    return S.svg(560, 150, s, 'D flip-flop symbol');
  })();

  const dffWave = S.timing({ signals: [{ n: 'CLK', w: '01010101010' }, { n: 'D', w: '00110000111', cls: 'wave2' }, { n: 'Q', w: '00011000011', cls: 'wave3' }], edges: [1, 3, 5, 7, 9], title: 'Trace Q: sample D only at rising edges (class slide p12)' });

  const latchVsFF = S.timing({ signals: [{ n: 'CLK/EN', w: '0011001100110011' }, { n: 'D', w: '0100110110010110', cls: 'wave2' }, { n: 'Q latch', w: '0000000111011110', cls: 'wave3' }, { n: 'Q FF', w: '0000000000000011', cls: 'wave' }], edges: [2, 6, 10, 14], title: 'Same clock and data: the latch passes every wiggle while EN = 1, the flip-flop samples only at rising edges', unit: 22, ox: 80 });

  const setupHold = S.timing({ signals: [{ n: 'CLK', w: '000001111111' }, { n: 'D', w: 'xxd' + '.'.repeat(6) + 'xxx', vals: ['D stable'], cls: 'wave2' }, { n: 'Q', w: 'xxxxxxd' + '.'.repeat(5), vals: ['new Q'], cls: 'wave3' }], edges: [5], shade: [{ a: 3.5, b: 5, t: 't_setup' }, { a: 5, b: 6, t: 't_hold', fill: 'rgba(28,126,214,.15)' }], labels: [{ x: 5.5, y: 2.75, t: 't_cq →' }], unit: 40, title: 'D must be stable from t_setup before to t_hold after the edge; Q valid t_clk-to-q later', extraH: 22 });

  const meta = (function () {
    let s = '<path class="w" d="M20,150 C60,150 70,150 100,148 C150,140 170,40 210,40 C250,40 270,140 320,148 C350,150 360,150 400,150"/>';
    s += '<circle cx="80" cy="138" r="11" class="good"/><circle cx="340" cy="138" r="11" class="good"/><circle cx="210" cy="28" r="11" class="bad"/>';
    s += S.tc(80, 178, 'stable 0', 'sm b') + S.tc(340, 178, 'stable 1', 'sm b') + S.tc(210, 12, 'metastable: balanced on the peak', 'xs b');
    s += S.a([[196, 46], [150, 110]], 'arr') + S.a([[224, 46], [270, 110]], 'arr') + S.tc(210, 120, 'falls either way,', 'xs') + S.tc(210, 134, 'after an unpredictable time', 'xs');
    return S.svg(420, 190, s, 'metastability ball on a hill');
  })();

  const sync2 = (function () {
    let s = S.ff(120, 30, 90, 80, 'FF1', { l: [['D', 25]], r: [['Q', 25]] }, 60, 'box') + S.ff(280, 30, 90, 80, 'FF2', { l: [['D', 25]], r: [['Q', 25]] }, 60, 'box');
    s += S.a([[30, 55], [120, 55]], 'arr') + S.t(26, 48, 'async in', 'xs b') + S.a([[210, 55], [280, 55]], 'arr') + S.tc(245, 48, 'may be metastable', 'xs hltxt');
    s += S.a([[370, 55], [440, 55]], 'arr') + S.t(446, 59, 'synchronised out', 'xs b');
    s += S.p([[30, 140], [250, 140], [250, 90], [280, 90]]) + S.p([[100, 140], [100, 90], [120, 90]]) + S.dot(100, 140) + S.t(26, 134, 'clk (receiving domain)', 'xs b');
    s += S.t(10, 168, 'FF1 gets a whole clock period to settle before FF2 samples it → failure probability falls exponentially (MTBF of years).', 'xs muted');
    return S.svg(580, 176, s, 'two-flip-flop synchronizer');
  })();

  const jk = (function () {
    const a1 = S.gate('AND', 120, 50, { n: 2 }), a2 = S.gate('AND', 120, 150, { n: 2 });
    let s = a1.svg + a2.svg + S.ff(250, 30, 120, 140, 'SR latch /\nflip-flop', { l: [['S', 30], ['R', 120]], r: [['Q', 30], ['Q\'', 120]] }, 75, 'boxa');
    s += S.p([[40, 42], a1.in[0]]) + S.t(34, 46, 'J', 'b', 'end') + S.p([[40, 158], a2.in[1]]) + S.t(34, 162, 'K', 'b', 'end');
    s += S.a([a1.out, [250, 60]], 'arr') + S.a([a2.out, [250, 150]], 'arr') + S.p([[210, 105], [250, 105]]) + S.t(206, 109, 'CLK', 'xs b', 'end');
    s += S.p([[370, 60], [410, 60]]) + S.p([[370, 150], [430, 150]]);
    s += S.p([[410, 60], [410, 195], [70, 195], [70, 142], a2.in[0]]) + S.dot(410, 60) + S.t(76, 190, 'Q', 'xs b');
    s += S.p([[430, 150], [430, 10], [90, 10], [90, 58], a1.in[1]]) + S.dot(430, 150) + S.t(96, 22, 'Q\'', 'xs b');
    s += S.t(450, 60, 'S = J·Q\', R = K·Q', 'xs b') + S.t(450, 80, 'J K | Q⁺', 'sm mono b') + S.t(450, 98, '0 0 | Q (hold)', 'sm mono') + S.t(450, 116, '0 1 | 0', 'sm mono') + S.t(450, 134, '1 0 | 1', 'sm mono') + S.t(450, 152, '1 1 | Q\' (toggle)', 'sm mono');
    s += S.t(450, 176, 'Q⁺ = JQ\' + K\'Q', 'sm b');
    return S.svg(620, 205, s, 'JK flip-flop');
  })();

  const tff = (function () {
    let s = S.ff(80, 20, 90, 80, 'JK FF', { l: [['J', 20], ['K', 60]], r: [['Q', 20]] }, 40, 'box');
    s += S.p([[20, 70], [50, 70], [50, 40], [80, 40]]) + S.p([[50, 70], [50, 80], [80, 80]]) + S.dot(50, 70) + S.t(14, 74, 'T', 'b', 'end') + S.tc(125, 120, 'J = K = T', 'sm b');
    const x = S.gate('XOR', 300, 50);
    s += x.svg + S.ff(410, 20, 90, 80, 'D FF', { l: [['D', 30]], r: [['Q', 30]] }, 60, 'box');
    s += S.p([[260, 42], x.in[0]]) + S.t(254, 46, 'T', 'b', 'end') + S.a([x.out, [410, 50]], 'arr');
    s += S.p([[500, 50], [540, 50], [540, 130], [280, 130], [280, 58], x.in[1]]) + S.dot(540, 50) + S.t(546, 54, 'Q', 'b');
    s += S.tc(400, 150, 'D = T ⊕ Q', 'sm b') + S.t(10, 175, 'T = 1 toggles, T = 0 holds:  Q⁺ = TQ\' + T\'Q = T ⊕ Q', 'xs b');
    return S.svg(600, 182, s, 'T flip-flop from JK and from D');
  })();

  UNITS.push({
    id: 5, title: 'Latches, Flip-Flops & Timing', short: 'Latches & Flip-Flops',
    intro: 'How a circuit gains memory (feedback) and how a clock keeps it sane: SR latch, D latch, D flip-flop, setup/hold and metastability. Lectures L06–L07 and Lab 6.',
    subtopics: [
      {
        id: '5.1', title: 'Combinational vs Sequential Circuits', badge: 'class', sources: '[L06] p2-7; [LB6] p3-6',
        keywords: 'combinational sequential feedback state memory bistable',
        explain: '<p><b>Analogy:</b> a calculator (combinational: answer depends only on what you type now) versus a TV remote\'s channel up button (sequential: the result depends on the current channel — the history).</p>' +
          '<div class="table-wrap"><table><tr><th>Combinational</th><th>Sequential</th></tr><tr><td>Output = f(inputs now)</td><td>Output = f(inputs, past state)</td></tr><tr><td>No memory, purely reactive</td><td>Has memory — remembers history</td></tr><tr><td>Same inputs → same output</td><td>Same inputs can give different outputs</td></tr><tr><td>Adders, MUXes, decoders</td><td>Registers, counters, FSMs</td></tr><tr><td>Output follows inputs immediately (after delay)</td><td>A clock decides when state updates</td></tr></table></div>' +
          '<p>The difference is one thing: a <b>feedback loop</b>. Two inverters in a loop form a <b>bistable</b> element — two stable states (Q = 1 or Q = 0), the simplest 1-bit memory — but with no way to change it. Adding controllable inputs gives a latch. A CPU needs state: the PC, registers, pipeline contents.</p>',
        keypoints: ['Sequential = combinational logic + memory (feedback).', 'Bistable = 2 cross-coupled inverters (2 stable states).', 'Synchronous sequential circuits update on a clock edge.', 'You cannot build a counter with gates alone — you need state.'],
        diagrams: [{ id: 'D5.1a', title: 'Feedback turns logic into memory', svg: feedback, how: 'Same logic box twice; on the right draw the output looping back into an input.' }, { id: 'D5.1b', title: 'Bistable element (two cross-coupled inverters)', svg: bistable, how: 'Two inverters pointing opposite ways, each output wired to the other\'s input; mark Q and Q\'.' }],
        mistakes: ['Calling a circuit sequential just because it has many gates — it needs feedback/storage.', 'Thinking a combinational circuit has zero delay.'],
        practice: [
          mcq('Which of these is a sequential circuit?', ['Full adder', '4:1 multiplexer', 'Binary counter', '3-to-8 decoder'], 2, 'A counter must remember its current value.', ['Combinational.', 'Combinational.', 'Correct.', 'Combinational.'], 'From class slides'),
          mcq('What single structural feature turns a combinational circuit into one that can store a bit?', ['More inputs', 'A feedback loop', 'An XOR gate', 'A wider bus'], 1, 'Feeding an output back lets the circuit sustain a value.', ['No.', 'Correct.', 'No.', 'No.']),
          nat('How many stable states does a bistable element (two cross-coupled inverters) have?', 2, 0, 'Q = 1/Q\' = 0 or Q = 0/Q\' = 1.'),
          mcq('Why is a clock used in sequential circuits?', ['To supply power', 'To define WHEN state changes, keeping the whole chip consistent', 'To reduce the number of gates', 'To prevent combinational delay'], 1, 'All flip-flops update on the same edge.', ['No.', 'Correct.', 'No.', 'Delay still exists.'], 'From class slides')
        ],
        subjective: [sub('Distinguish between combinational and sequential circuits with block diagrams and two examples of each. (4 marks)', '<p>Table above + D5.1a. Combinational: adder, MUX. Sequential: counter, register (block: combinational logic + memory elements with feedback, clocked).</p>', 4, ['2 — differences', '1 — diagrams', '1 — examples'], ['D5.1a'])]
      },
      {
        id: '5.2', title: 'SR Latch: Structure and Forbidden State', badge: 'class', sources: '[L06] p9-12; [LB6] p6-14; [L08] p7',
        keywords: 'sr latch nor nand forbidden state race gated',
        explain: '<p><b>Analogy:</b> a doorbell with “set” and “reset” buttons — press S to turn the light on, R to turn it off, press neither and it stays as it was. Pressing both is nonsense.</p>' +
          '<ul><li><b>NOR SR latch:</b> two cross-coupled NOR gates. Equations Q = (R + Q\')\', Q\' = (S + Q)\'. S = 1 sets Q = 1; R = 1 resets Q = 0; S = R = 0 holds (memory).</li>' +
          '<li><b>Forbidden S = R = 1:</b> both NOR outputs go to 0, so Q = Q\' = 0 (breaks Q\' = NOT Q). Worse, if S and R return to 0 together, the gates <b>race</b> — the final state depends on tiny delay differences (unpredictable; simulation may oscillate or show X).</li>' +
          '<li><b>NAND SR latch:</b> inputs are <b>active-LOW</b> (S\', R\'): S\' = 0 sets, R\' = 0 resets, S\' = R\' = 1 holds, S\' = R\' = 0 forbidden (Q = Q\' = 1). Common because NAND is the cheap universal gate.</li>' +
          '<li><b>Gated (clocked) SR latch:</b> AND (or NAND) gates let S and R through only while E = 1; E = 0 holds. Characteristic equation: Q⁺ = S + R\'Q (with SR = 0).</li>' +
          '<li>Problems: two control lines (humans assert both), glitches propagate, no notion of “now” → D latch and flip-flop fix these.</li></ul>',
        keypoints: ['NOR: active-high, 11 forbidden (Q = Q\' = 0).', 'NAND: active-low, 00 forbidden (Q = Q\' = 1).', 'Q⁺ = S + R\'Q, constraint SR = 0.', 'Release from forbidden → race (unpredictable).'],
        diagrams: [{ id: 'D5.2a', title: 'NOR SR latch + characteristic table', svg: srLatch('NOR'), how: 'Two NOR gates stacked; draw the output of each crossing to the second input of the other; R on the gate that makes Q.' },
          { id: 'D5.2b', title: 'NAND SR latch (active-low) + table', svg: srLatch('NAND'), how: 'Same shape with NAND gates; S\' enters the gate that produces Q.' },
          { id: 'D5.2c', title: 'Gated SR latch (enable)', svg: gatedSR, how: 'Two AND gates in front of an SR latch box; E feeds both.' }],
        code: [
          { id: 'C5.2a', title: 'sr_latch.v — cross-coupled NORs (Lab 6)', lang: 'verilog', src: '// NOR-based SR latch\nmodule sr_latch (\n    input  wire s,\n    input  wire r,\n    output wire q,\n    output wire qbar\n);\n    // q depends on qbar, qbar depends on q: the mutual reference IS the storage\n    assign q    = ~(r | qbar);\n    assign qbar = ~(s | q);\nendmodule', io: '<pre>Each assign re-evaluates when its inputs change; the pair settles into one of two stable states.</pre>' },
          { id: 'C5.2b', title: 'sr_tb.v — set, hold, reset, hold, forbidden', lang: 'verilog', src: 'module sr_tb;\n    reg s, r; wire q, qbar;\n    sr_latch dut (.s(s), .r(r), .q(q), .qbar(qbar));\n    initial begin\n        $dumpfile("sr.vcd"); $dumpvars(0, sr_tb);\n        $monitor("t=%0t s=%b r=%b q=%b qbar=%b", $time, s, r, q, qbar);\n        s = 0; r = 0; #5;   // initial — unknown (X)\n        s = 1; r = 0; #5;   // SET   -> q = 1\n        s = 0; r = 0; #5;   // HOLD  -> q stays 1\n        s = 0; r = 1; #5;   // RESET -> q = 0\n        s = 0; r = 0; #5;   // HOLD  -> q stays 0\n        s = 1; r = 1; #5;   // FORBIDDEN -> q = qbar = 0\n        s = 0; r = 0; #5;   // released together -> race / X\n        $finish;\n    end\nendmodule', io: '<pre>t=0  s=0 r=0 q=x qbar=x\nt=5  s=1 r=0 q=1 qbar=0\nt=10 s=0 r=0 q=1 qbar=0\nt=15 s=0 r=1 q=0 qbar=1\nt=20 s=0 r=0 q=0 qbar=1\nt=25 s=1 r=1 q=0 qbar=0\nt=30 s=0 r=0 q=x qbar=x   (iverilog may oscillate, then report X)</pre>' }],
        mistakes: ['Mixing up which gate gets S vs R (in the NOR latch, R goes to the gate that outputs Q).', 'Forgetting NAND latch inputs are active-low.', 'Calling 11 an “invalid output” only — the real danger is the race on release.'],
        practice: [
          mcq('In a NOR SR latch, S = R = 1 gives:', ['Q = 1, Q\' = 0', 'Q = 0, Q\' = 1', 'Q = Q\' = 0 (forbidden)', 'Q = Q\' = 1'], 2, 'Both NOR gates see a 1 → both outputs 0.', ['Set.', 'Reset.', 'Correct.', 'That is the NAND latch forbidden case.'], 'From class slides'),
          mcq('For a NAND SR latch (inputs S\', R\'), which input combination holds the previous state?', ['S\' = 0, R\' = 0', 'S\' = 0, R\' = 1', 'S\' = 1, R\' = 0', 'S\' = 1, R\' = 1'], 3, 'Active-low: 1 means “not asserted” → hold.', ['Forbidden.', 'Set.', 'Reset.', 'Correct.']),
          txt('Write the characteristic equation of the SR latch (write it as Q+= followed by the expression).', ['Q+=S+R\'Q', 'Q+ = S + R\'Q', 'Q+=S+QR\'', 'Q+ = S + QR\''], 'From the table: Q⁺ = S + R\'Q with the constraint S·R = 0.'),
          mcq('A NOR SR latch has Q = 1. The inputs then go S = 0, R = 1, then S = 0, R = 0. The final Q is:', ['1', '0', 'unpredictable', 'oscillating'], 1, 'R = 1 resets Q to 0; 00 then holds 0.', ['It was reset.', 'Correct.', 'Only after 11 → 00.', 'No.'])
        ],
        subjective: [sub('Draw an SR latch using NOR gates and explain its operation with the characteristic table. Why is S = R = 1 forbidden? How does the NAND version differ? (5 marks)', '<p>Diagram D5.2a and table. S=1 forces Q\' = 0, so Q = (R + 0)\' = 1 (set); R = 1 forces Q = 0 (reset); 00 holds through feedback. 11 forces Q = Q\' = 0 (complement relation broken) and releasing both together creates a race with unpredictable final state. NAND version (D5.2b): active-low inputs, 11 hold, 00 forbidden (Q = Q\' = 1).</p>', 5, ['2 — diagram', '1 — table/operation', '1 — forbidden explanation', '1 — NAND difference'], ['D5.2a', 'D5.2b'])]
      },
      {
        id: '5.3', title: 'D-Latch (Level-Triggered)', badge: 'class', sources: '[L06] p13-14; [LB6] p14-17; [SP3] D Latch; [SP4] quiz 6',
        keywords: 'd latch transparent enable level triggered',
        explain: '<p><b>Analogy:</b> a window: while it is open (EN = 1) whatever happens outside is visible inside; when it closes (EN = 0) you keep seeing the last picture.</p>' +
          '<p>The D latch ties R to the complement of S: <b>S = D·EN, R = D\'·EN</b> — S and R can never both be 1, so the forbidden state is impossible by construction.</p>' +
          '<ul><li><b>EN = 1 → transparent:</b> Q follows D continuously.</li><li><b>EN = 0 → opaque:</b> Q holds the value D had when EN fell.</li><li><b>Level-triggered</b>: active for the whole time EN is high. Glitches on D during that window pass straight to Q, and in a chain of latches data can race through several stages in one clock phase — why CPUs use edge-triggered flip-flops on critical paths.</li>' +
          '<li>Latches still appear in: SRAM cells (cross-coupled inverters), time-borrowing between pipeline stages, and reset logic.</li></ul>',
        keypoints: ['S = D·EN, R = D\'·EN — no forbidden state.', 'Transparent when EN = 1; holds when EN = 0.', 'Level-triggered → glitches pass through.', 'Verilog latch: always @(*) if (en) q = d; (no else).'],
        diagrams: [{ id: 'D5.3a', title: 'D latch from an SR latch', svg: dLatch, how: 'Inverter on D, two AND gates with EN, feeding S and R of an SR latch box.' }, { id: 'D5.3b', title: 'D latch transparency waveform', svg: dLatchWave, how: 'Draw EN, D, Q rows; shade the EN = 1 windows; inside them Q = D, outside Q is flat.' }],
        code: [
          { id: 'C5.3a', title: 'd_latch.v — built from the sr_latch module (Lab 6)', lang: 'verilog', src: '// Transparent D latch built from an SR latch\nmodule d_latch (\n    input  wire d,\n    input  wire e,\n    output wire q,\n    output wire qbar\n);\n    wire s_int, r_int;\n    assign s_int =  d & e;     // S and R mutually exclusive by construction\n    assign r_int = ~d & e;\n    sr_latch core (.s(s_int), .r(r_int), .q(q), .qbar(qbar));\nendmodule\n// compile: iverilog -o d.vvp sr_latch.v d_latch.v d_tb.v', io: '<pre>e=1: q follows d;  e=0: q holds</pre>' },
          { id: 'C5.3b', title: 'd_latch — behavioural (portal Lab 6)', lang: 'verilog', src: 'module d_latch (\n    input d, input en,\n    output reg q, output q_n\n);\n    always @(*) begin\n        if (en)\n            q = d;     // transparent\n        else\n            q = q;     // hold (no else at all would also infer the latch)\n    end\n    assign q_n = ~q;\nendmodule', io: '<pre>en d | q\n0  x | q_prev (hold)\n1  0 | 0\n1  1 | 1</pre>' }],
        mistakes: ['Calling a D latch edge-triggered.', 'Thinking a D latch “samples once” — it copies D for the whole enable window.'],
        practice: [
          mcq('A D latch is in transparent mode when:', ['EN = 0', 'EN = 1', 'D = Q', 'a clock edge arrives'], 1, 'EN high → Q follows D.', ['Opaque/hold.', 'Correct.', 'Not a mode.', 'That is a flip-flop.'], 'Class quiz (L06 Q1)'),
          mcq('Why is a D latch considered unsafe for CPU pipelines while a D flip-flop is standard?', ['A D latch is more expensive', 'A D latch is transparent for the entire clock-high phase', 'A D flip-flop cannot store 0', 'A D latch needs two clocks'], 1, 'Data (and glitches) can race through during the whole enable window.', ['Latches are cheaper.', 'Correct.', 'False.', 'False.'], 'Class quiz (L06 Q3)'),
          mcq('In a D latch, which combination of internal S, R can never occur?', ['S = 0, R = 0', 'S = 1, R = 0', 'S = 0, R = 1', 'S = 1, R = 1'], 3, 'S = D·EN and R = D\'·EN cannot both be 1.', ['Occurs when EN = 0.', 'D = 1, EN = 1.', 'D = 0, EN = 1.', 'Correct.']),
          mcq('EN = 1 from t = 10 to 20 ns. D changes 0 → 1 at 12 ns and 1 → 0 at 18 ns. Q after 20 ns is:', ['0', '1', 'X', 'toggling'], 0, 'Q tracked D until EN fell at 20 ns; D was 0 then → Q holds 0.', ['Correct.', 'D was 0 when EN fell.', 'No.', 'No.'])
        ],
        subjective: [sub('Draw a gated D latch, explain how it removes the forbidden state of the SR latch, and sketch Q for given EN and D waveforms. (5 marks)', '<p>D5.3a: S = D·EN, R = D\'·EN → never S = R = 1. EN = 1 transparent, EN = 0 hold. Waveform D5.3b.</p>', 5, ['2 — circuit', '1 — explanation', '2 — waveform'], ['D5.3a', 'D5.3b'])]
      },
      {
        id: '5.4', title: 'D Flip-Flop (Edge-Triggered)', badge: 'class', sources: '[L07] p2-5, p12; [LB6] p18-28; [L08] p5-12; [SP3] D FF with Enable, Master-Slave; [SP4] quiz 7',
        keywords: 'd flip flop edge triggered master slave clock ring oscillator posedge',
        explain: '<p><b>Analogy:</b> a camera flash — a photo is taken at one instant (the clock edge); what happens between flashes is not recorded.</p>' +
          '<ul><li><b>Clock:</b> a periodic square wave, f = 1/T (3 GHz → T ≈ 0.33 ns). Every flip-flop updates on the same edge, keeping the whole chip consistent. A clock can be generated by a <b>ring oscillator</b> — an odd number of inverters in a loop.</li>' +
          '<li><b>D flip-flop:</b> at each rising edge Q ← D; between edges Q is frozen. Characteristic equation Q(n+1) = D. The triangle on the clock pin means edge-triggered.</li>' +
          '<li><b>Master–slave construction:</b> two D latches in series on opposite clock phases. Harris &amp; Harris: master transparent while CLK = 0, slave while CLK = 1 → the value present just before the rising edge reaches Q (positive-edge FF). The class slide enables the master on CLK = 1 → Q changes on the falling edge. Either way, the two latches are never transparent together — a two-stage airlock.</li>' +
          '<li>Cost: about twice the gates of a latch, but timing becomes predictable. Every register, PC and pipeline register is a row of D flip-flops.</li>' +
          '<li><b>Latch vs flip-flop:</b> level vs edge; transparent vs opaque; glitches pass vs ignored; Verilog <code>assign/always @(*)</code> vs <code>always @(posedge clk)</code> with <code>&lt;=</code>.</li></ul>',
        keypoints: ['Q(n+1) = D at the active edge.', 'Master-slave = 2 latches, opposite phases.', 'Use non-blocking <= in always @(posedge clk).', 'Ring oscillator: odd number of inverters, T = 2·N·t_pd.', 'Latch: level; flip-flop: edge.'],
        diagrams: [
          { id: 'D5.4a', title: 'Clock waveform', svg: clockW, how: 'Square wave with equal high/low; mark the period T and the rising edges.' },
          { id: 'D5.4b', title: 'Ring oscillator (how a clock is made from gates)', svg: ring, how: 'Three inverters in a row, last output looped to the first input; tap the output as CLK.' },
          { id: 'D5.4c', title: 'Master–slave D flip-flop', svg: masterSlave, how: 'Two D-latch boxes in series; CLK to one enable directly and to the other through an inverter.' },
          { id: 'D5.4d', title: 'D flip-flop symbol', svg: dffSym, how: 'Box with D, CLK (triangle), Q and Q\'.' },
          { id: 'D5.4e', title: 'D flip-flop waveform trace (class slide)', svg: dffWave, how: 'Draw dashed lines at every rising edge; read D there and hold that value until the next edge.' },
          { id: 'D5.4f', title: 'Latch vs flip-flop on the same inputs', svg: latchVsFF, how: 'Four rows: CLK, D, Q(latch) follows D while CLK high, Q(FF) changes only at edges.' }],
        code: [
          { id: 'C5.4a', title: 'd_ff.v — positive-edge D flip-flop (Lab 6)', lang: 'verilog', src: '// Positive-edge-triggered D flip-flop\nmodule d_ff (\n    input  wire clk,\n    input  wire d,\n    output reg  q          // reg: assigned in a procedural block\n);\n    always @(posedge clk) begin\n        q <= d;            // non-blocking: updates at the end of the time step\n    end\nendmodule', io: '<pre>Q changes only at rising edges of clk.</pre>' },
          { id: 'C5.4b', title: 'ff_tb.v — clock + glitchy D', lang: 'verilog', src: 'module ff_tb;\n    reg clk, d; wire q;\n    d_ff dut (.clk(clk), .d(d), .q(q));\n    initial clk = 0;\n    always #5 clk = ~clk;          // period 10 ns, rising edges at 5, 15, 25\n    initial begin\n        $dumpfile("ff.vcd"); $dumpvars(0, ff_tb);\n        d = 0; #3;    // before first edge\n        d = 1; #1;    // glitch up\n        d = 0; #1;    // glitch down — edge at t = 5 sees d = 0\n        d = 1; #6;    // settle to 1\n        d = 1; #10;   // hold across edges\n        d = 0; #10;\n        $finish;\n    end\n    initial $monitor("t=%0t clk=%b d=%b q=%b", $time, clk, d, q);\nendmodule', io: '<pre>Expected: q = x until t=5; at t=5 the class expects q=0 (d also changes at t=5 — a simulation race, so move the change to t=6 to be safe); at t=15 d=1 → q=1; at t=25 d=0 → q=0; $finish at t=31. Glitches between edges (t=3 to 5) are ignored.</pre>' },
          { id: 'C5.4c', title: 'dff_enable — D FF with enable and synchronous reset (portal)', lang: 'verilog', src: 'module dff_enable (clk, rst, en, d, q);\n    input clk, rst, en, d;\n    output reg q;\n    always @(posedge clk) begin\n        if (rst)      q <= 1\'b0;   // synchronous reset has priority\n        else if (en)  q <= d;      // capture only when enabled\n        // else: hold\n    end\nendmodule', io: '<pre>rst=1 at an edge → q=0; en=0 → q holds even on edges; en=1 → q=d.</pre>' },
          { id: 'C5.4d', title: 'Master–slave D flip-flop from two D latches (portal problem, falling-edge spec)', lang: 'verilog', src: 'module d_latch_b (input d, input en, output reg q);\n    always @(*) if (en) q = d;      // transparent while en = 1\nendmodule\n\n// Spec of the portal problem: master transparent while clk = 1,\n// slave transparent while clk = 0 → q changes at the FALLING edge.\nmodule master_slave_dff (input clk, input d, output q, output qbar);\n    wire qm;\n    d_latch_b master (.d(d),  .en(clk),  .q(qm));\n    d_latch_b slave  (.d(qm), .en(~clk), .q(q));\n    assign qbar = ~q;\nendmodule\n// Positive-edge version (Harris & Harris): swap the enables — master en = ~clk, slave en = clk.', io: '<pre>clk=1: qm follows d, q holds\nclk 1→0: master freezes, slave copies qm → q updates at the falling edge</pre>' }],
        mistakes: ['Using blocking = in clocked blocks (cascaded stages get wrong values).', 'Declaring q as wire inside an always block.', 'Forgetting begin/end on multi-line always bodies.', 'Mixing up which edge the master–slave FF responds to — state your convention.'],
        practice: [
          mcq('In the standard master–slave configuration described in class, Q changes:', ['whenever D changes', 'while the clock is high', 'at the falling edge of the clock', 'when both latches are transparent'], 2, 'Class/portal convention: master transparent on CLK = 1, slave on CLK = 0 → output updates when CLK falls. (Swapping the enables gives a rising-edge FF.)', ['That is a latch.', 'That is a latch.', 'Correct (class convention).', 'They never are.'], 'Class quiz (L07 Q1)'),
          mcq('A D flip-flop samples D:', ['continuously while the clock is high', 'only at the active clock edge', 'only when D changes', 'at both edges always'], 1, 'Edge-triggered.', ['Latch behaviour.', 'Correct.', 'No.', 'Only special double-edge FFs.']),
          txt('CLK rising edges at t = 1, 3, 5, 7, 9; D = 0 before t = 2, 1 from 2 to 4, 0 from 4 to 8, 1 after 8. Write Q right after each edge as a 5-bit string.', ['01001', '0 1 0 0 1'], 'Edge 1: D = 0; edge 3: D = 1; edge 5: 0; edge 7: 0; edge 9: 1 → 01001 (class waveform D5.4e).', 'From class slides'),
          nat('A ring oscillator has 5 inverters each with 20 ps delay. Oscillation frequency in GHz?', 5, 0.01, 'T = 2 × 5 × 20 ps = 200 ps → f = 5 GHz.'),
          mcq('A T flip-flop with T = 0 will:', ['toggle every edge', 'reset to 0', 'hold its value', 'set to 1'], 2, 'Q⁺ = T ⊕ Q = Q.', ['T = 1.', 'No.', 'Correct.', 'No.'], 'Class quiz (L06 Q2)')
        ],
        subjective: [sub('Explain the working of a master–slave D flip-flop with a neat diagram. Draw the output waveform for given CLK and D, and compare latch and flip-flop. (5 marks)', '<p>D5.4c: two latches, opposite clock phases; only one transparent at a time, so D is captured at the edge and held for the whole cycle. Waveform D5.4e. Comparison: latch level-triggered/transparent/glitches pass/fewer gates; FF edge-triggered/opaque/glitch-free/~2× gates — used for registers and pipelines.</p>', 5, ['2 — diagram', '1 — operation', '1 — waveform', '1 — comparison'], ['D5.4c', 'D5.4e', 'D5.4f'])]
      },
      {
        id: '5.5', title: 'Setup Time, Hold Time, Metastability', badge: 'class', sources: '[L07] p6-15; [LB6] p29-31; [SP4] quiz 7',
        keywords: 'setup hold clock to q metastability synchronizer mtbf critical path',
        explain: '<p><b>Analogy:</b> photographing a moving object — it must stay still just before and just after the shutter clicks, or the picture blurs.</p>' +
          '<ul><li><b>t<sub>setup</sub>:</b> D must be stable this long <i>before</i> the edge. <b>t<sub>hold</sub>:</b> stable this long <i>after</i> the edge. <b>t<sub>clk→q</sub> (t<sub>pcq</sub>):</b> delay from the edge to a valid Q.</li>' +
          '<li><b>Setup violation:</b> D arrives too late (path too slow). <b>Hold violation:</b> D changes too soon after the edge (path too fast). Either can cause <b>metastability</b>: Q hovers between 0 and 1 for an unpredictable time, then falls either way — like a ball balanced on a hill.</li>' +
          '<li><b>Max clock frequency:</b> T<sub>c</sub> ≥ t<sub>pcq</sub> + t<sub>pd,logic</sub> + t<sub>setup</sub> (critical path). <b>Hold check:</b> t<sub>ccq</sub> + t<sub>cd,logic</sub> ≥ t<sub>hold</sub> (independent of the clock period). Static timing analysis tools (Synopsys PrimeTime) check every path.</li>' +
          '<li><b>Asynchronous inputs</b> (buttons, other clock domains) will eventually violate setup/hold — metastability cannot be eliminated, only made rare: pass the signal through a <b>2–3 flip-flop synchronizer</b>; designs target an MTBF of thousands of years. Overclocking shrinks the margin and eventually causes setup failures.</li></ul>',
        keypoints: ['T_c ≥ t_pcq + t_pd + t_setup → f_max = 1/T_c.', 'Hold: t_ccq + t_cd ≥ t_hold.', 'Class homework: 0.28 ns + 0.05 ns = 0.33 ns → ≈ 3.03 GHz.', 'Metastability: manage with synchronizers; cannot be eliminated for async inputs.'],
        diagrams: [{ id: 'D5.5a', title: 'Setup, hold and clock-to-Q on a timing diagram', svg: setupHold, how: 'One rising edge; shade the window before (setup) and after (hold) where D must be flat; Q changes t_cq after the edge.' },
          { id: 'D5.5b', title: 'Metastability: the ball on the hill', svg: meta, how: 'Two valleys (0 and 1) and a hill; ball on the peak = metastable.' },
          { id: 'D5.5c', title: 'Two flip-flop synchronizer', svg: sync2, how: 'Two D FFs in series clocked by the receiving clock; the async signal enters the first.' }],
        examples: [{ title: 'Class homework: path delay 0.28 ns, setup 0.05 ns', html: '<p>T_c,min = 0.28 + 0.05 = 0.33 ns (assuming the 0.28 ns already includes clock-to-Q) → f_max = 1/0.33 ns ≈ <b>3.03 GHz</b>.</p>' },
          { title: 'Full timing check (H&H style)', html: '<p>t_pcq = 50 ps, logic t_pd = 200 ps, t_setup = 30 ps → T_c ≥ 280 ps → f_max ≈ 3.57 GHz. Hold: t_ccq = 30 ps, logic t_cd = 10 ps, t_hold = 50 ps → 40 &lt; 50 → hold violation; fix by adding buffer delay to the short path (clock speed does not help).</p>' }],
        mistakes: ['Thinking a slower clock fixes hold violations — it does not.', 'Forgetting t_clk-to-q in the period calculation.', 'Calling metastability a design “bug” that can be removed entirely.'],
        practice: [
          mcq('Metastability in a flip-flop can result in:', ['output always settling to 0', 'output always settling to 1', 'output hovering mid-rail or oscillating, then resolving to 0 or 1 after an unpredictable delay', 'automatic reset to Q_prev'], 2, 'That is the definition of metastability.', ['No.', 'No.', 'Correct.', 'No.'], 'Class quiz (L07 Q2)'),
          mcq('A signal from a 100 MHz domain drives a 133 MHz flip-flop directly (no synchronizer). The primary risk:', ['it always arrives too late (hold violation)', 'it may be sampled during a transition, causing metastability', 'its frequency doubles', 'setup is always violated'], 1, 'Unrelated clocks → transitions land inside the setup/hold window sometimes.', ['Not always.', 'Correct.', 'Nonsense.', 'Only sometimes.'], 'Class quiz (L07 Q3)'),
          nat('t_pcq = 40 ps, worst-case logic delay = 250 ps, t_setup = 30 ps. Maximum clock frequency in GHz (2 decimals)?', 3.125, 0.01, 'T = 40 + 250 + 30 = 320 ps → 3.125 GHz.'),
          nat('Class homework: a path has 0.28 ns delay and setup is 0.05 ns. Fastest safe clock in GHz (2 decimals)?', 3.03, 0.02, '1 / 0.33 ns = 3.03 GHz.', 'From class slides'),
          msq('Which statements are true? (select all)', ['Hold violations cannot be fixed by slowing the clock', 'Setup violations can be fixed by slowing the clock', 'A 2-FF synchronizer eliminates metastability completely', 'Overclocking reduces setup-time margin'], [0, 1, 3], 'Hold depends on min delays only; synchronizers reduce probability but never to zero.', ['True.', 'True.', 'False — it reduces MTBF risk.', 'True.'])
        ],
        subjective: [sub('Define setup time, hold time and clock-to-Q delay with a timing diagram. Derive the maximum clock frequency of a register-to-register path. What is metastability and how is it handled? (5 marks)', '<p>Diagram D5.5a. Path: FF1 → combinational logic → FF2. Data launched at an edge appears at FF1.Q after t_pcq, passes logic (t_pd) and must arrive t_setup before the next edge: T_c ≥ t_pcq + t_pd + t_setup, f_max = 1/T_c. Metastability (D5.5b): sampling a changing input leaves Q undefined for an unbounded time; handled with synchronizer chains (D5.5c) and MTBF analysis.</p>', 5, ['2 — definitions + diagram', '2 — f_max derivation', '1 — metastability'], ['D5.5a', 'D5.5c'])]
      },
      {
        id: '5.E1', title: 'Extra from slides: JK and T flip-flops; characteristic & excitation tables', badge: 'extra', sources: '[L08] p5-12 (flip-flop toolkit); excitation tables referenced in [LB7] p19 — researched',
        sourceLine: 'Source: class slides; M. Morris Mano, Digital Design ch. 5 (excitation tables)',
        keywords: 'jk flip flop t flip flop toggle characteristic excitation table',
        explain: '<p><b>JK:</b> like SR but the forbidden row becomes <b>toggle</b>: J K = 00 hold, 01 reset, 10 set, 11 toggle. Q⁺ = JQ\' + K\'Q. <b>T:</b> T = 1 toggles, T = 0 holds; Q⁺ = T ⊕ Q. Build T from JK (J = K = T) or from D (D = T ⊕ Q). A permanently toggling T FF divides the clock by 2 — the basis of counters (Unit 6). Real hardware and FPGAs use D flip-flops almost exclusively; JK/T are design conveniences.</p>' +
          '<div class="table-wrap"><table><tr><th>Type</th><th>Characteristic eq.</th><th>Typical use</th></tr><tr><td>SR</td><td>Q⁺ = S + R\'Q (SR = 0)</td><td>latches, simple control</td></tr><tr><td>D</td><td>Q⁺ = D</td><td>registers, pipelines, state registers</td></tr><tr><td>JK</td><td>Q⁺ = JQ\' + K\'Q</td><td>general sequential design</td></tr><tr><td>T</td><td>Q⁺ = T ⊕ Q</td><td>counters, frequency dividers</td></tr></table></div>' +
          '<p><b>Excitation tables</b> (inputs needed for a desired transition Q → Q⁺ — used to design counters and FSMs):</p>' +
          '<div class="table-wrap"><table class="tt"><tr><th>Q → Q⁺</th><th>D</th><th>T</th><th>J K</th><th>S R</th></tr><tr><td>0 → 0</td><td>0</td><td>0</td><td>0 X</td><td>0 X</td></tr><tr><td>0 → 1</td><td>1</td><td>1</td><td>1 X</td><td>1 0</td></tr><tr><td>1 → 0</td><td>0</td><td>1</td><td>X 1</td><td>0 1</td></tr><tr><td>1 → 1</td><td>1</td><td>0</td><td>X 0</td><td>X 0</td></tr></table></div>',
        keypoints: ['JK 11 = toggle.', 'T = 1 toggles: Q⁺ = T ⊕ Q.', 'Excitation: D = Q⁺; T = Q ⊕ Q⁺.', 'JK excitation: 0→1 needs J = 1 (K = X); 1→0 needs K = 1 (J = X).'],
        diagrams: [{ id: 'D5.E1a', title: 'JK flip-flop (SR core with feedback gating) + table', svg: jk, how: 'Two AND gates: J with Q\', K with Q, feeding S and R of a clocked SR core; draw the feedback wires from the outputs.' }, { id: 'D5.E1b', title: 'T flip-flop from a JK (J = K = T) and from a D (D = T ⊕ Q)', svg: tff, how: 'JK box with J and K joined; D box with an XOR of T and Q in front.' }],
        practice: [
          mcq('A JK flip-flop with J = K = 1 at the clock edge:', ['holds', 'resets', 'sets', 'toggles'], 3, 'The forbidden SR row becomes toggle.', ['00.', '01.', '10.', 'Correct.'], 'From class slides'),
          txt('Excitation table: which T input makes a T flip-flop go from Q = 1 to Q⁺ = 1?', ['0'], 'No change → T = 0.'),
          mcq('To convert a D flip-flop into a T flip-flop, D =', ['T·Q', 'T + Q', 'T ⊕ Q', 'T\''], 2, 'Q⁺ must equal T ⊕ Q.', ['No.', 'No.', 'Correct.', 'No.']),
          mcq('JK excitation for the transition Q = 0 → Q⁺ = 1 is:', ['J = 0, K = X', 'J = 1, K = X', 'J = X, K = 1', 'J = X, K = 0'], 1, 'Either set (10) or toggle (11) works → J = 1, K = don\'t care.', ['That keeps 0.', 'Correct.', 'That is 1 → 0.', 'That is 1 → 1.'])
        ],
        subjective: [sub('Write the characteristic tables and equations of SR, D, JK and T flip-flops, and their excitation tables. Show how to convert a JK flip-flop into a T flip-flop. (5 marks)', '<p>See the tables above. JK → T: tie J and K together as T (D5.E1b). D → T: D = T ⊕ Q.</p>', 5, ['2 — characteristic', '2 — excitation', '1 — conversion'], ['D5.E1a', 'D5.E1b'])]
      }
    ]
  });
})();
