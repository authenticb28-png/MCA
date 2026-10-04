/* Unit 6 – Registers, Counters & Shift Registers */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;

  /* ---------- helpers ---------- */
  // binary count waveform: half-clock units, rising edges at odd indices
  function countWave(bits, cycles, start) {
    const n = cycles * 2 + 1;
    let clk = '';
    for (let k = 0; k < n; k++) clk += k % 2 ? '1' : '0';
    const sig = [];
    for (let b = 0; b < bits; b++) {
      let w = '';
      for (let k = 0; k < n; k++) { const c = ((start || 0) + Math.floor((k + 1) / 2)) % (1 << bits); w += (c >> b) & 1 ? '1' : '0'; }
      sig.push(w);
    }
    const edges = []; for (let k = 1; k < n; k += 2) edges.push(k);
    return { clk: clk, q: sig, edges: edges };
  }
  // D (or T) flip-flop box: returns svg + pin coordinates
  function ffBox(x, y, inName, title, cls) {
    const s = S.ff(x, y, 80, 80, title || '', { l: [[inName || 'D', 25]], r: [['Q', 25]] }, 60, cls || 'box');
    return { svg: s, d: [x, y + 25], clk: [x, y + 60], q: [x + 80, y + 25] };
  }

  /* D6.1a 4-bit register */
  // n-bit parallel register row: D from the top, Q tapped upward
  function regRow(title, note) {
    let s = '';
    for (let i = 0; i < 4; i++) {
      const x = 50 + i * 150, f = ffBox(x, 60, 'D', 'FF' + (3 - i));
      s += f.svg + S.a([[x - 22, 26], [x - 22, 85], [x, 85]], 'arr') + S.tc(x - 22, 18, 'D' + (3 - i), 'sm b');
      s += S.a([[x + 80, 85], [x + 100, 85], [x + 100, 26]], 'arr') + S.tc(x + 100, 18, 'Q' + (3 - i), 'sm b');
      s += S.p([[x - 10, 170], [x - 10, 120], [x, 120]]) + S.dot(x - 10, 170);
    }
    s += S.p([[20, 170], [560, 170]]) + S.t(20, 186, 'CLK (shared by all four flip-flops)', 'xs b');
    s += S.t(10, 210, note, 'xs muted');
    return S.svg(640, 218, s, title);
  }
  const reg4 = regRow('4-bit register', 'A register = n D flip-flops sharing one clock; all n bits are captured at the same rising edge.');

  /* D6.2a load-enable MUX per bit */
  const loadMux = (function () {
    const m = S.muxT(120, 40, 2, { inLabels: ['0', '1'], h: 80 });
    let s = m.svg;
    const f = ffBox(250, 50, 'D', 'D FF');
    s += f.svg;
    s += S.a([m.out, f.d], 'arr');
    s += S.a([[40, m.in[1][1]], m.in[1]], 'arr') + S.t(36, m.in[1][1] + 4, 'D_in', 'sm b', 'end');
    s += S.a([[m.sel[0], 150], m.sel], 'ctl') + S.tc(m.sel[0], 164, 'LOAD', 'xs ctltxt');
    s += S.p([[330, 75], [380, 75]]) + S.dot(360, 75) + S.t(386, 79, 'Q', 'b');
    s += S.a([[360, 75], [360, 20], [90, 20], [90, m.in[0][1]], m.in[0]], 'hl');
    s += S.tc(220, 14, 'hold path: Q fed back', 'xs hltxt');
    s += S.p([[200, 150], [230, 150], [230, 110], [250, 110]]) + S.t(196, 154, 'CLK', 'xs b', 'end');
    s += S.t(420, 60, 'LOAD = 1: Q⁺ = D_in', 'sm b') + S.t(420, 80, 'LOAD = 0: Q⁺ = Q (hold)', 'sm') + S.t(420, 100, 'Q⁺ = LOAD·D_in + LOAD\'·Q', 'sm b');
    s += S.t(420, 130, 'Never gate the clock with LOAD:', 'xs muted') + S.t(420, 144, 'it causes skew and glitches.', 'xs muted');
    return S.svg(640, 176, s, 'load enable with a 2:1 MUX');
  })();

  /* D6.2b 8-bit register block */
  const reg8 = (function () {
    let s = S.box(170, 40, 200, 110, '', 'boxa');
    s += S.tc(270, 90, '8-bit register', 'b') + S.tc(270, 108, '(8 D FFs)', 'xs muted');
    s += S.a([[60, 70], [170, 70]], 'arr') + S.slash(110, 70, 8) + S.t(56, 74, 'D[7:0]', 'sm b', 'end');
    s += S.a([[370, 70], [480, 70]], 'arr') + S.slash(430, 70, 8) + S.t(486, 74, 'Q[7:0]', 'sm b');
    s += S.a([[60, 100], [170, 100]], 'ctl') + S.t(56, 104, 'LOAD', 'sm ctltxt', 'end');
    s += S.a([[60, 125], [170, 125]], 'ctl') + S.t(56, 129, 'RST', 'sm ctltxt', 'end');
    s += S.p([[270, 190], [270, 150]]) + '<path class="w" d="M262,150 l8,-10 l8,10"/>' + S.tc(270, 204, 'CLK', 'sm b');
    s += S.t(500, 110, 'PC, IR, every general-purpose', 'xs') + S.t(500, 124, 'register and pipeline register', 'xs') + S.t(500, 138, 'is this block.', 'xs');
    s += S.t(10, 228, 'Priority on each rising edge: RST (clear to 0) > LOAD (capture D) > hold.', 'xs b');
    return S.svg(680, 236, s, '8-bit register block');
  })();

  /* D6.3a 3-bit ripple counter */
  const ripple3 = (function () {
    let s = '';
    const xs = [80, 260, 440];
    xs.forEach((x, i) => {
      const f = ffBox(x, 50, 'T', 'FF' + i);
      s += f.svg + S.p([[x - 28, 75], [x, 75]]) + S.t(x - 32, 79, '1', 'sm b', 'end');
      s += '<circle class="g" cx="' + (x - 4) + '" cy="110" r="4"/>';
      s += S.p([[x + 80, 75], [x + 120, 75]]) + S.dot(x + 110, 75);
      s += S.a([[x + 110, 75], [x + 110, 20]], 'arr') + S.tc(x + 110, 14, 'Q' + i, 'sm b');
      if (i < 2) s += S.p([[x + 110, 75], [x + 110, 110], [xs[i + 1] - 8, 110]]);
    });
    s += S.p([[20, 110], [72, 110]]) + S.t(20, 102, 'CLK', 'xs b');
    s += S.t(10, 160, 'Only FF0 sees the clock. Each next FF is clocked by the previous Q (bubble = falling-edge trigger),', 'xs');
    s += S.t(10, 176, 'so FF1 toggles when Q0 falls 1→0. Bits change one after another: settle time = n × t_pd.', 'xs b');
    return S.svg(620, 186, s, '3-bit ripple counter');
  })();

  /* D6.3b counter waveforms */
  const cw = countWave(3, 8, 0);
  const counterWave = S.timing({ signals: [{ n: 'CLK', w: cw.clk }, { n: 'Q0', w: cw.q[0], cls: 'wave2' }, { n: 'Q1', w: cw.q[1], cls: 'wave3' }, { n: 'Q2', w: cw.q[2], cls: 'wave' }], edges: cw.edges, unit: 26, title: '3-bit up count 0 → 7 → 0: Q0 = clk ÷ 2, Q1 = clk ÷ 4, Q2 = clk ÷ 8 (synchronous view)' });

  /* D6.3c 7 → 8 ripple glitch */
  const rippleGlitch = S.timing({
    signals: [{ n: 'CLK', w: '11000000000' }, { n: 'Q0', w: '11100000000', cls: 'wave2' }, { n: 'Q1', w: '11110000000', cls: 'wave3' }, { n: 'Q2', w: '11111000000', cls: 'wave2' }, { n: 'Q3', w: '00000011111', cls: 'wave3' },
      { n: 'count', w: 'd' + '.'.repeat(2) + 'dddd' + '.'.repeat(4), vals: ['7', '6', '4', '0', '8'], cls: 'wave' }],
    shade: [{ a: 3, b: 6, t: 'false values 6, 4, 0 (each lasts t_pd)' }], edges: [2], unit: 40, ox: 64, rowH: 38, extraH: 20,
    title: 'Ripple counter 0111 → 1000: each bit waits for the one before it'
  });

  /* D6.4a 4-bit synchronous counter */
  const sync4 = (function () {
    let s = '';
    const xs = [60, 240, 420, 600];
    xs.forEach((x, i) => {
      const f = ffBox(x, 60, 'T', 'FF' + i);
      s += f.svg;
      s += S.p([[x + 80, 85], [x + 100, 85], [x + 100, 30]]) + S.dot(x + 100, 85) + S.tc(x + 100, 24, 'Q' + i, 'sm b');
      s += S.p([[x - 12, 175], [x - 12, 120], [x, 120]]) + S.dot(x - 12, 175);
    });
    s += S.p([[20, 175], [690, 175]]) + S.t(20, 192, 'CLK — one shared clock line: every bit updates on the same edge', 'xs b');
    s += S.p([[24, 85], [60, 85]]) + S.t(20, 80, 'EN', 'xs b', 'end');
    // T1 = Q0
    s += S.p([[160, 85], [160, 85], [240, 85]]);
    // AND1: Q0·Q1 → T2
    const a1 = S.gate('AND', 352, 85, { stub: 8 });
    s += a1.svg + S.p([[160, 85], [160, 45], [330, 45], [330, a1.in[0][1]], a1.in[0]]) + S.dot(160, 85);
    s += S.p([[340, 85], [340, a1.in[1][1]], a1.in[1]]) + S.p([[a1.out[0], 85], [420, 85]]);
    // AND2: (Q0·Q1)·Q2 → T3
    const a2 = S.gate('AND', 532, 85, { stub: 8 });
    s += a2.svg + S.p([[410, 85], [410, 40], [512, 40], [512, a2.in[0][1]], a2.in[0]]) + S.dot(410, 85);
    s += S.p([[520, 85], [520, a2.in[1][1]], a2.in[1]]) + S.p([[a2.out[0], 85], [600, 85]]);
    s += S.t(10, 222, 'T0 = EN (1), T1 = Q0, T2 = Q0·Q1, T3 = Q0·Q1·Q2 — a bit toggles when all lower bits are 1.', 'xs b');
    return S.svg(720, 230, s, '4-bit synchronous counter');
  })();

  /* shift registers */
  function chain(title, opt) {
    let s = '';
    const xs = [70, 210, 350, 490];
    xs.forEach((x, i) => {
      const f = ffBox(x, 60, 'D', 'FF' + (opt.rev ? 3 - i : i));
      s += f.svg + S.p([[x - 12, 175], [x - 12, 120], [x, 120]]) + S.dot(x - 12, 175);
      if (i < 3 && !opt.mux) s += S.a([[x + 80, 85], [xs[i + 1], 85]], 'arr');
      if (opt.taps) s += S.p([[x + 80, 85], [x + 95, 85], [x + 95, 30]]) + S.dot(x + 95, 85) + S.tc(x + 95, 22, 'Q' + i, 'sm b');
      if (opt.par) s += S.a([[x + 30, 20], [x + 30, 60]], 'arr') + S.tc(x + 30, 14, 'D' + (3 - i), 'sm b') + S.a([[x + 80, 85], [x + 110, 85]], 'arr') + S.t(x + 112, 89, 'Q' + (3 - i), 'xs b');
    });
    s += S.p([[24, 175], [580, 175]]) + S.t(24, 192, 'CLK', 'xs b');
    if (opt.sin) s += S.a([[20, 85], [70, 85]], 'arr') + S.t(16, 78, 'serial in', 'xs b');
    if (opt.sout) s += S.a([[570, 85], [620, 85]], 'arr') + S.t(574, 78, 'serial out', 'xs b');
    if (opt.note) s += S.t(10, 212, opt.note, 'xs b');
    return S.svg(640, 222, s, title);
  }
  const siso = chain('SISO shift register', { sin: true, sout: true, note: 'SISO: Q of each FF drives D of the next. A bit entering now appears at serial out 4 clocks later (delay line).' });
  const sipo = chain('SIPO shift register', { sin: true, taps: true, note: 'SIPO: same chain, every Q tapped. After 4 clocks the whole word is on Q0–Q3 at once (UART receiver).' });
  const pipo = regRow('PIPO register', 'PIPO: no chain at all — D3..D0 loaded in parallel on one edge, Q3..Q0 read in parallel (buffer / register).');
  const piso = (function () {
    let s = '';
    const xs = [130, 340, 550];
    xs.forEach((x, i) => {
      const m = S.muxT(x - 70, 45, 2, { inLabels: ['L', 'S'], h: 72, w: 36 });
      const f = ffBox(x, 44, 'D', 'FF' + (2 - i));
      s += m.svg + f.svg + S.a([m.out, f.d], 'arr');
      s += S.a([[x - 88, 18], [x - 88, m.in[0][1]], m.in[0]], 'arr') + S.tc(x - 88, 12, 'D' + (2 - i), 'sm b');
      s += S.p([[m.sel[0], 150], m.sel], 'ctl');
      s += S.p([[x - 10, 175], [x - 10, 104], [x, 104]]) + S.dot(x - 10, 175);
      if (i > 0) s += S.a([[xs[i - 1] + 80, 69], [x - 104, 69], [x - 104, m.in[1][1]], m.in[1]], 'arr');
      else s += S.a([[x - 120, m.in[1][1]], m.in[1]], 'arr') + S.t(x - 124, m.in[1][1] + 4, '0', 'sm b', 'end');
    });
    s += S.a([[630, 69], [660, 69]], 'arr') + S.t(632, 60, 'serial out', 'xs b');
    s += S.p([[20, 150], [530, 150]], 'ctl') + S.t(20, 144, 'Shift/Load\'', 'xs ctltxt');
    s += S.p([[20, 175], [545, 175]]) + S.t(20, 190, 'CLK', 'xs b');
    s += S.t(10, 214, 'PISO (3 of 4 bits shown): a 2:1 MUX before each D picks the parallel bit (L = load) or the neighbour\'s Q (S = shift).', 'xs b');
    return S.svg(700, 222, s, 'PISO shift register with load MUX');
  })();

  /* ring and Johnson counters */
  function ringDiag(johnson) {
    let s = '';
    const xs = [70, 210, 350, 490];
    xs.forEach((x, i) => {
      const f = ffBox(x, 50, 'D', 'FF' + i);
      s += f.svg + S.p([[x - 12, 160], [x - 12, 110], [x, 110]]) + S.dot(x - 12, 160);
      if (i < 3) s += S.a([[x + 80, 75], [xs[i + 1], 75]], 'arr');
      s += S.tc(x + 40, 44, 'Q' + i, 'xs b');
    });
    s += S.p([[570, 75], [600, 75], [600, 20], [40, 20], [40, 75], [70, 75]], johnson ? 'hl' : 'w') + S.head([40, 75], [70, 75], johnson ? 'ah-hl' : '', 7);
    s += S.tc(320, 14, johnson ? 'feedback = Q3\' (complemented) — twisted ring' : 'feedback = Q3 straight back to D0', 'xs b');
    if (johnson) s += '<circle class="g" cx="586" cy="75" r="4"/>';
    s += S.p([[24, 160], [560, 160]]) + S.t(24, 176, 'CLK', 'xs b');
    s += S.t(10, 198, johnson ? 'Johnson: 0000 → 0001 → 0011 → 0111 → 1111 → 1110 → 1100 → 1000 → 0000 (2n = 8 states).' : 'Ring (preset 0001): 0001 → 0010 → 0100 → 1000 → 0001 (n = 4 states, one-hot).', 'xs b');
    return S.svg(640, 206, s, johnson ? 'Johnson counter' : 'ring counter');
  }

  UNITS.push({
    id: 6, title: 'Registers, Counters & Shift Registers', short: 'Registers & Counters',
    intro: 'Rows of flip-flops become registers; add feedback logic and they count; chain them and they shift. Lectures L08 (Registers, Counters &amp; State Machines), MCA Lecture 6 (Counters), Labs 7–8 and the portal register/counter problems.',
    subtopics: [
      {
        id: '6.1', title: 'Scaling from Flip-Flops to Registers', badge: 'class', sources: '[L08] p14-16; [LB7] p4',
        keywords: 'register n-bit flip flops shared clock word',
        explain: '<p><b>Analogy:</b> one flip-flop is one light switch with memory; a register is a row of switches flipped together by the same hand (the clock).</p>' +
          '<ul><li>A <b>register</b> is <b>n D flip-flops sharing one clock</b>. On every rising edge all n bits are captured at once, so a whole word (8, 32 or 64 bits) is stored as one unit.</li>' +
          '<li>Every named storage in a CPU is a register: <b>PC</b> (address of the next instruction), <b>IR</b> (the fetched instruction), the <b>general-purpose registers</b> (32 × 32-bit in MIPS) and the <b>pipeline registers</b> (Unit 14).</li>' +
          '<li>Cost grows linearly: a 32-bit register = 32 flip-flops (≈ 20+ transistors each). That is why registers are few and why bulk storage uses SRAM/DRAM cells instead (Unit 8).</li>' +
          '<li>A plain register reloads on <i>every</i> edge — useless for holding a value. Real registers add <b>load enable</b> and <b>reset</b> (6.2).</li></ul>',
        keypoints: ['Register = n D FFs + common clock.', 'n-bit register → n flip-flops.', 'PC, IR, GPRs and pipeline registers are all registers.', 'Without load enable a register overwrites itself every edge.'],
        diagrams: [{ id: 'D6.1a', title: '4-bit register (4 D flip-flops, one clock)', svg: reg4, how: 'Four D-FF boxes in a row, D inputs above/left, Q outputs right, one horizontal clock line underneath tapping each clock pin.' }],
        mistakes: ['Drawing a separate clock for each bit — one shared clock is the point.', 'Confusing a register (stores a word) with a register file (an array of registers, Unit 7).'],
        practice: [
          nat('How many D flip-flops are needed to build a 32-bit register?', 32, 0, 'One flip-flop per bit.', 'From class slides'),
          mcq('What makes four D flip-flops a 4-bit register rather than four unrelated bits?', ['They all use the same D input', 'They share a common clock and are loaded together', 'They are connected in a chain Q → D', 'They use T flip-flops'], 1, 'Same clock, captured as one word.', ['Each bit has its own D.', 'Correct.', 'That is a shift register.', 'Registers use D FFs.']),
          msq('Which of these CPU elements are registers? (select all)', ['Program counter (PC)', 'Instruction register (IR)', 'ALU', 'Pipeline register between IF and ID'], [0, 1, 3], 'The ALU is combinational.', ['Register.', 'Register.', 'Combinational, stores nothing.', 'Register.']),
          mcq('A register without load enable, clocked continuously, will:', ['hold its first value forever', 'capture whatever is on D at every rising edge', 'count up', 'shift its contents'], 1, 'Nothing stops it reloading.', ['Needs a load enable.', 'Correct.', 'Needs adder logic.', 'Needs a chain.'])
        ],
        subjective: [sub('What is a register? Draw a 4-bit register using D flip-flops and name four registers found in a CPU. (4 marks)', '<p>A register is a group of n D flip-flops sharing one clock that stores an n-bit word, updated on the active clock edge (D6.1a). CPU examples: PC, IR, general-purpose registers ($t0, $s0), pipeline registers (IF/ID), MAR/MDR, HI/LO.</p>', 4, ['1 — definition', '2 — diagram', '1 — examples'], ['D6.1a'])]
      },
      {
        id: '6.2', title: 'Registers: Load Enable, Reset, CPU Preview', badge: 'class', sources: '[L08] p13, p16-17; [LB7] p4, p12; [LB8] Q1-Q2; [SP3] 8-bit Register with Load Enable / Synchronous Reset',
        keywords: 'load enable reset synchronous asynchronous register mux hold',
        explain: '<p><b>Analogy:</b> a locker: LOAD is opening the door to put something new in; with the door shut, the contents stay no matter how many times the bell (clock) rings. RESET empties it.</p>' +
          '<ul><li><b>Load enable</b> is a <b>2:1 MUX in front of every D</b>: LOAD = 1 selects the new data, LOAD = 0 selects the flip-flop\'s own Q (feedback) — so the register re-captures its old value and holds. Q⁺ = LOAD·D + LOAD\'·Q. This is exactly the register-file write enable (Unit 7).</li>' +
          '<li><b>Do not gate the clock</b> with an AND gate to “disable” a register: clock gating adds skew and glitches; the MUX approach keeps one clean clock.</li>' +
          '<li><b>Reset</b> forces a known state (all zeros). <b>Synchronous reset</b> acts only at the clock edge (glitch-free; used for mod-N counters and FSM restart). <b>Asynchronous reset</b> acts immediately without the clock (used for power-on reset), but its release must still meet timing (recovery/removal).</li>' +
          '<li>Priority used in the labs: <b>reset &gt; load &gt; hold</b>.</li></ul>' +
          '<div class="table-wrap"><table><tr><th></th><th>Synchronous reset</th><th>Asynchronous reset</th></tr><tr><td>Acts</td><td>at the next active clock edge</td><td>immediately</td></tr><tr><td>Needs clock?</td><td>yes</td><td>no</td></tr><tr><td>Verilog</td><td><code>always @(posedge clk) if (rst)</code></td><td><code>always @(posedge clk or posedge rst) if (rst)</code></td></tr><tr><td>Typical use</td><td>mod-N counters, FSM restart</td><td>power-on reset</td></tr></table></div>',
        keypoints: ['Load enable = 2:1 MUX per bit (LOAD ? D : Q).', 'Q⁺ = LOAD·D + LOAD\'·Q.', 'Sync reset waits for the edge; async acts at once.', 'Lab priority: rst > ld > hold.', 'Never AND the clock with an enable.'],
        diagrams: [{ id: 'D6.2a', title: 'Load enable: 2:1 MUX in front of each D', svg: loadMux, how: 'Trapezoid MUX feeding a D FF; input 1 = new data, input 0 = wire looped back from Q; LOAD on the MUX select.' },
          { id: 'D6.2b', title: '8-bit register block with LOAD and RST', svg: reg8, how: 'One box labelled 8-bit register; 8-bit buses (slash 8) in and out; LOAD and RST control lines; clock triangle at the bottom.' }],
        code: [
          { id: 'C6.2a', title: 'register_8bit — load enable (portal / Lab 8 Q1)', lang: 'verilog', src: 'module register_8bit (clk, ld, d, q);\n    input clk, ld;\n    input [7:0] d;\n    output reg [7:0] q;\n    always @(posedge clk) begin\n        if (ld)\n            q <= d;        // load\n        // no else: q keeps its value (synthesises to the feedback MUX)\n    end\nendmodule', io: '<pre>Time = 0  | clk = 0, ld = 1, d = 10101010 | q = xxxxxxxx\nTime = 5  | clk = 1, ld = 1, d = 10101010 | q = 10101010\nTime = 15 | clk = 1, ld = 1, d = 11001100 | q = 11001100\nTime = 25 | clk = 1, ld = 0, d = 11111111 | q = 11001100   (hold)\nTime = 35 | clk = 1, ld = 1, d = 00001111 | q = 00001111</pre>' },
          { id: 'C6.2b', title: 'register_8bit_rst — synchronous reset has priority (portal / Lab 8 Q2)', lang: 'verilog', src: 'module register_8bit_rst (clk, rst, ld, d, q);\n    input clk, rst, ld;\n    input [7:0] d;\n    output reg [7:0] q;\n    always @(posedge clk) begin\n        if (rst)\n            q <= 8\'b00000000;  // 1. reset first\n        else if (ld)\n            q <= d;            // 2. then load\n        // 3. otherwise hold\n    end\nendmodule', io: '<pre>Time = 5  | rst = 0, ld = 1, d = 10101010 | q = 10101010\nTime = 15 | rst = 0, ld = 1, d = 11001100 | q = 11001100\nTime = 25 | rst = 0, ld = 0, d = 11111111 | q = 11001100\nTime = 30 | rst = 1, ld = 1, d = 11111111 | q = 11001100   (no edge yet: sync reset waits)\nTime = 35 | rst = 1, ld = 1, d = 11111111 | q = 00000000</pre>' }],
        mistakes: ['Putting load before reset in the if-else chain (reset must win).', 'Thinking a synchronous reset clears the register the instant rst goes high — it waits for the edge (t = 30 vs 35 above).', 'Using blocking = in the clocked block.'],
        practice: [
          mcq('In a register with load enable built from a 2:1 MUX per bit, what does the MUX select when LOAD = 0?', ['the new data input', 'constant 0', 'the flip-flop\'s own Q output', 'the clock'], 2, 'Feeding Q back makes the register hold.', ['That is LOAD = 1.', 'That would be reset.', 'Correct.', 'Never mux the clock.'], 'From class slides'),
          mcq('rst = 1 and ld = 1 at the same rising edge in register_8bit_rst. q becomes:', ['d', '00000000', 'unchanged', 'xxxxxxxx'], 1, 'Reset has the highest priority.', ['Load loses to reset.', 'Correct.', 'No.', 'No.'], 'Lab question'),
          mcq('Which reset style takes effect immediately without waiting for a clock edge?', ['synchronous reset', 'asynchronous reset', 'load enable', 'clock enable'], 1, 'Asynchronous reset is in the sensitivity list.', ['Waits for edge.', 'Correct.', 'Not a reset.', 'Not a reset.'], 'From class slides'),
          txt('Write the next-state equation of one bit of a load-enable register in terms of LOAD (L), D and Q (form: Q+= followed by the expression).', ['Q+=LD+L\'Q', 'Q+ = LD + L\'Q', 'Q+=L\'Q+LD', 'Q+=LD+QL\''], '2:1 MUX: Q⁺ = L·D + L\'·Q.'),
          mcq('Why is “AND the clock with LOAD” a bad way to build load enable?', ['It uses more flip-flops', 'It introduces clock skew and glitches', 'It cannot hold data', 'It makes the register asynchronous reset'], 1, 'Gated clocks are delayed and can glitch, breaking synchronous timing.', ['Same FF count.', 'Correct.', 'It can hold, unsafely.', 'Unrelated.'])
        ],
        subjective: [sub('Explain load enable and reset in a register. Draw one bit with a 2:1 MUX and write Verilog for an 8-bit register with synchronous reset and load. (5 marks)', '<p>D6.2a: LOAD selects D or Q; D6.2b block. Verilog C6.2b with priority rst &gt; ld &gt; hold. Sync vs async reset table.</p>', 5, ['2 — MUX diagram', '1 — reset types', '2 — Verilog'], ['D6.2a', 'D6.2b'])]
      },
      {
        id: '6.3', title: 'Asynchronous (Ripple) vs Synchronous Counters', badge: 'class', sources: '[L08] p21-27; [CNT] p2-8; [LB7] p14-17, p25; [SP4] quiz 8',
        keywords: 'ripple counter asynchronous synchronous propagation delay glitch divide by 2',
        explain: '<p><b>Analogy:</b> ripple counter = a row of dominoes (each falls only after the previous one); synchronous counter = soldiers who all step when the drum beats.</p>' +
          '<ul><li><b>Counting rule:</b> in binary, bit k flips exactly when all lower bits are 1 (x0111 → x1000). So Q0 toggles every clock (÷2), Q1 every 2 clocks (÷4), Q2 every 4 (÷8). Bit k = clock ÷ 2<sup>k+1</sup>.</li>' +
          '<li><b>Ripple (asynchronous) counter:</b> T flip-flops with T = 1; only FF0 gets the clock, each later FF is clocked by the previous Q (falling-edge triggered, so FF k toggles when Q<sub>k−1</sub> goes 1 → 0). Very cheap, but the change <i>ripples</i>: the final value is valid only after <b>n × t<sub>pd</sub></b>.</li>' +
          '<li><b>Transient wrong values:</b> going 0111 → 1000 the outputs pass through 0110, 0100, 0000 before 1000 (7 → 6 → 4 → 0 → 8). A decoder watching for “0” would glitch.</li>' +
          '<li><b>Speed:</b> f<sub>max</sub> ≈ 1 / (n · t<sub>pd</sub>). With t<sub>pd</sub> = 10 ns: 4-bit → 40 ns → 25 MHz; 16-bit → 160 ns → ≈ 6 MHz.</li>' +
          '<li><b>Synchronous counter:</b> every FF shares the clock; AND logic computes which bits toggle (6.4). All bits change together — no ripple, no false states; f<sub>max</sub> is set by one FF delay + the AND chain + setup.</li></ul>' +
          '<div class="table-wrap"><table><tr><th></th><th>Ripple (async)</th><th>Synchronous</th></tr><tr><td>Clock</td><td>FF0 only; others clocked by previous Q</td><td>all FFs share one clock</td></tr><tr><td>Delay to valid count</td><td>n × t_pd (grows with n)</td><td>t_pcq (+ logic) — constant</td></tr><tr><td>Glitches</td><td>yes (7 → 6 → 4 → 0 → 8)</td><td>no</td></tr><tr><td>Hardware</td><td>minimal (no gates)</td><td>extra AND gates</td></tr><tr><td>Use</td><td>slow dividers (32,768 Hz watch crystal → 1 Hz)</td><td>CPUs, PC, timers, anything fast</td></tr></table></div>',
        keypoints: ['Bit k toggles when all lower bits are 1.', 'Ripple settle time = n × t_pd; f_max = 1/(n·t_pd).', '7→8 ripple shows 6, 4, 0 transiently.', 'Bit k frequency = f_clk / 2^(k+1).', 'Sync counter: common clock, AND chain, no glitches.'],
        diagrams: [{ id: 'D6.3a', title: '3-bit ripple counter (T flip-flops, T = 1)', svg: ripple3, how: 'Three T-FF boxes, T tied to 1; clock only into FF0; draw each Q both upward (output) and into the next FF\'s clock with a bubble.' },
          { id: 'D6.3b', title: 'Counter waveforms Q0, Q1, Q2', svg: counterWave, how: 'Clock on top; Q0 toggles at every active edge, Q1 at every second, Q2 at every fourth; read the column values to check 0..7.' },
          { id: 'D6.3c', title: 'Ripple counter 7 → 8 transition timeline', svg: rippleGlitch, how: 'Stagger each falling Q by one t_pd to the right; write the momentary counts 7, 6, 4, 0, 8 underneath.' }],
        code: [{ id: 'C6.3a', title: '3-bit ripple counter from toggle flip-flops (structural)', lang: 'verilog', src: '// toggle flip-flop, falling-edge triggered, async reset\nmodule tff (input clk, input rst, output reg q);\n    always @(negedge clk or posedge rst)\n        if (rst) q <= 1\'b0;\n        else     q <= ~q;          // T = 1: toggle\nendmodule\n\n// each stage is clocked by the previous Q  -> up counter\nmodule ripple3 (input clk, input rst, output [2:0] q);\n    tff f0 (.clk(clk),  .rst(rst), .q(q[0]));\n    tff f1 (.clk(q[0]), .rst(rst), .q(q[1]));   // toggles when q0 falls\n    tff f2 (.clk(q[1]), .rst(rst), .q(q[2]));   // toggles when q1 falls\nendmodule', io: '<pre>falling clk edges: q = 000, 001, 010, 011, 100, 101, 110, 111, 000\n(with gate delays added, 011 → 100 briefly shows 010 and 000)</pre>' }],
        mistakes: ['Saying a ripple counter is “synchronous because it has a clock” — only FF0 sees it.', 'Forgetting that the ripple delay is cumulative (n × t_pd, not t_pd).', 'Clocking the next FF with Q on a rising-edge FF — that makes a DOWN counter (use Q\' or falling-edge FFs for up).'],
        practice: [
          mcq('What is the key advantage of a synchronous counter over a ripple counter?', ['It uses fewer flip-flops', 'It requires no clock signal', 'All flip-flops update simultaneously, eliminating cumulative propagation delay', 'It can only count up, which simplifies design'], 2, 'Common clock → no ripple.', ['Same number of FFs.', 'It needs a clock.', 'Correct.', 'Sync counters can count both ways.'], 'Class quiz (L08 Q2)'),
          mcq('A 12-bit ripple counter uses flip-flops with a propagation delay of 0.6 ns each. Maximum safe operating frequency?', ['600 MHz', '139 MHz', '83.3 MHz', '12 MHz'], 1, '12 × 0.6 = 7.2 ns → 1/7.2 ns ≈ 139 MHz.', ['That ignores the ripple.', 'Correct.', 'Wrong arithmetic.', 'No.'], 'Class quiz (L08 Q3)'),
          nat('A 4-bit ripple counter has t_pd = 10 ns per flip-flop. Maximum clock frequency in MHz?', 25, 0.5, '4 × 10 = 40 ns → 25 MHz (class slide).', 'From class slides', 'MHz'),
          txt('A 4-bit ripple up-counter goes from 0111 to 1000. List the decimal values seen on the outputs, in order, separated by commas (start with 7, end with 8).', ['7,6,4,0,8', '7, 6, 4, 0, 8'], 'Q0 falls (0110 = 6), then Q1 (0100 = 4), then Q2 (0000 = 0), then Q3 rises (1000 = 8).', 'From class slides'),
          nat('In a binary counter driven by a 16 MHz clock, what is the frequency (MHz) of output bit Q2?', 2, 0, 'Q2 = f / 2³ = 2 MHz.'),
          nat('A 32,768 Hz watch crystal must be divided down to 1 Hz with T flip-flops. How many flip-flops?', 15, 0, '32,768 = 2¹⁵ → 15 divide-by-2 stages (class slide).', 'From class slides')
        ],
        subjective: [sub('Compare asynchronous (ripple) and synchronous counters with neat diagrams of a 3-bit version of each. Explain why the ripple counter produces glitches. (5 marks)', '<p>Diagrams D6.3a and D6.4a (3 bits). Ripple: clocking chain, delay n·t_pd, false states 7 → 6 → 4 → 0 → 8 (D6.3c) because each bit waits for the previous one. Synchronous: shared clock, T1 = Q0, T2 = Q0Q1, all bits change together. Table of clock, delay, glitches, hardware, use.</p>', 5, ['2 — ripple diagram', '2 — synchronous diagram', '1 — glitch explanation / table'], ['D6.3a', 'D6.4a', 'D6.3c'])]
      },
      {
        id: '6.4', title: '4-bit Synchronous Up-Counter Design', badge: 'class', sources: '[L08] p23, p26; [CNT] p4, p7; [LB7] p18-22; [LB8] Q5-Q6; [SP3] 4-bit Synchronous Up Counter',
        keywords: 'synchronous counter design t flip flop and chain excitation up down terminal count',
        explain: '<p><b>Design steps (class flow):</b> (1) write the count sequence; (2) present-state / next-state table; (3) use the flip-flop <b>excitation table</b> (T = Q ⊕ Q⁺, or JK, or D = Q⁺); (4) minimise each input with a K-map; (5) wire it.</p>' +
          '<p><b>2-bit up counter:</b> 00 → 01 → 10 → 11 → 00. Q0 toggles every time → T0 = 1. Q1 toggles when Q0 = 1 → T1 = Q0.</p>' +
          '<div class="table-wrap"><table class="tt"><tr><th>Q2 Q1 Q0</th><th>Q2⁺ Q1⁺ Q0⁺</th><th>T2</th><th>T1</th><th>T0</th></tr><tr><td>000</td><td>001</td><td>0</td><td>0</td><td>1</td></tr><tr><td>001</td><td>010</td><td>0</td><td>1</td><td>1</td></tr><tr><td>010</td><td>011</td><td>0</td><td>0</td><td>1</td></tr><tr><td>011</td><td>100</td><td>1</td><td>1</td><td>1</td></tr><tr><td>100</td><td>101</td><td>0</td><td>0</td><td>1</td></tr><tr><td>101</td><td>110</td><td>0</td><td>1</td><td>1</td></tr><tr><td>110</td><td>111</td><td>0</td><td>0</td><td>1</td></tr><tr><td>111</td><td>000</td><td>1</td><td>1</td><td>1</td></tr></table></div>' +
          '<p>K-maps give <b>T0 = 1, T1 = Q0, T2 = Q0·Q1</b>, and for 4 bits <b>T3 = Q0·Q1·Q2</b>. With a count enable every T input is ANDed with EN: T0 = EN, T1 = EN·Q0, T2 = EN·Q0·Q1. With D flip-flops the same counter is D = Q ⊕ T, i.e. <code>q &lt;= q + 1</code> in Verilog.</p>' +
          '<ul><li><b>Down counter:</b> a bit toggles when all lower bits are 0 → T1 = Q0\', T2 = Q0\'Q1\'. <b>Up/down:</b> T1 = UP·Q0 + UP\'·Q0\'.</li>' +
          '<li><b>Terminal count</b> tc = Q3Q2Q1Q0 (1 at 1111) — used to cascade counters (tc of one enables the next).</li>' +
          '<li>Number of flip-flops for N states: <b>⌈log₂ N⌉</b> (mod-12 → 4, mod-1000 → 10).</li></ul>',
        keypoints: ['T0 = 1, T1 = Q0, T2 = Q0Q1, T3 = Q0Q1Q2.', 'Down: T1 = Q0\', T2 = Q0\'Q1\'.', 'T excitation: T = Q ⊕ Q⁺.', 'tc = 1 when count = 1111.', 'FFs for mod-N = ⌈log₂ N⌉.'],
        diagrams: [{ id: 'D6.4a', title: '4-bit synchronous up-counter (T flip-flops + AND chain)', svg: sync4, how: 'Four T FFs in a row on one clock line; T0 = EN; T1 from Q0; an AND gate (Q0, Q1) feeds T2; a second AND (previous AND, Q2) feeds T3.' }],
        examples: [{ title: 'Design a 3-bit synchronous DOWN counter with T flip-flops', html: '<p>Sequence 7, 6, 5, 4, 3, 2, 1, 0, 7. A bit toggles when all lower bits are 0: <b>T0 = 1, T1 = Q0\', T2 = Q0\'·Q1\'</b>. Check 100 → 011: T0 = 1, T1 = 1, T2 = 1 → all toggle → 011 ✓.</p>' },
          { title: 'Class homework: 1 MHz → 1 kHz', html: '<p>Divide by 1000 → a mod-1000 counter. Flip-flops needed = ⌈log₂ 1000⌉ = <b>10</b> (2¹⁰ = 1024). Reset (or reload) at 999 and take the output from the terminal count.</p>' }],
        code: [
          { id: 'C6.4a', title: 'up2 — 2-bit synchronous counter from the T equations (Lab 7)', lang: 'verilog', src: 'module up2 (input clk, input rst, output reg [1:0] q);\n    always @(posedge clk) begin\n        if (rst) q <= 2\'b00;\n        else begin\n            q[0] <= ~q[0];          // T0 = 1  (toggle every clock)\n            q[1] <= q[1] ^ q[0];    // T1 = Q0 (toggle when Q0 = 1)\n        end\n    end\nendmodule', io: '<pre>q: 00 → 01 → 10 → 11 → 00</pre>' },
          { id: 'C6.4b', title: 'up3 — 3-bit counter, behavioural (Lab 7)', lang: 'verilog', src: 'module up3 (input clk, input rst, output reg [2:0] q);\n    always @(posedge clk)\n        if (rst) q <= 3\'b000;\n        else     q <= q + 1\'b1;    // synthesis builds the T0=1, T1=Q0, T2=Q0Q1 logic\nendmodule', io: '<pre>0 1 2 3 4 5 6 7 0 1 (wraps naturally: 3-bit arithmetic)</pre>' },
          { id: 'C6.4c', title: 'updown4 — 4-bit up/down counter (Lab 7)', lang: 'verilog', src: 'module updown4 (input clk, input rst, input up, output reg [3:0] q);\n    always @(posedge clk) begin\n        if (rst)      q <= 4\'b0000;\n        else if (up)  q <= q + 1\'b1;   // count up\n        else          q <= q - 1\'b1;   // count down (0000 → 1111 wraps)\n    end\nendmodule', io: '<pre>up = 1: 0000 0001 0010 0011    up = 0 from 0010: 0001 0000 1111 1110</pre>' },
          { id: 'C6.4d', title: 'up_counter4 — reset + enable, wraps (Lab 8 Q5)', lang: 'verilog', src: 'module up_counter4 (input clk, input rst, input en, output reg [3:0] q);\n    always @(posedge clk) begin\n        if (rst)      q <= 4\'b0000;\n        else if (en)  q <= q + 1\'b1;\n        // en = 0: hold\n    end\nendmodule', io: '<pre>en = 1: 0 → 15 → 0; en = 0: frozen</pre>' },
          { id: 'C6.4e', title: 'down_counter4 — reset to 1111, enable, wraps (Lab 8 Q6)', lang: 'verilog', src: 'module down_counter4 (input clk, input rst, input en, output reg [3:0] q);\n    always @(posedge clk) begin\n        if (rst)      q <= 4\'b1111;    // a down counter resets to its top value\n        else if (en)  q <= q - 1\'b1;   // 0000 - 1 = 1111 (wrap)\n    end\nendmodule', io: '<pre>15 14 13 12 (down to) 1 0 15 14</pre>' },
          { id: 'C6.4f', title: 'sync_counter_4bit — with terminal count tc (portal, 07 Sep)', lang: 'verilog', src: 'module sync_counter_4bit (clk, rst, en, q, tc);\n    input clk, rst, en;\n    output reg [3:0] q;\n    output wire tc;\n    assign tc = (q == 4\'b1111);      // combinational: high while q = 15\n    always @(posedge clk) begin\n        if (rst)      q <= 4\'b0000;\n        else if (en)  q <= q + 1;\n    end\nendmodule', io: '<pre>Time = 5   | rst = 1, en = 0 | q = 0000, tc = 0\nTime = 15  | rst = 0, en = 1 | q = 0001, tc = 0\nTime = 155 | rst = 0, en = 1 | q = 1111, tc = 1\nTime = 165 | rst = 0, en = 1 | q = 0000, tc = 0   (wrap)\nTime = 175 | rst = 1, en = 1 | q = 0000, tc = 0\nTime = 185 | rst = 0, en = 0 | q = 0000, tc = 0   (hold)</pre>' }],
        mistakes: ['Writing T2 = Q1 (it is Q0·Q1 — ALL lower bits).', 'Making tc a registered output (it would assert one cycle late).', 'Down counter reset to 0000 when the spec says 1111.'],
        practice: [
          mcq('In a 3-bit synchronous up-counter built from T flip-flops, T2 =', ['1', 'Q0', 'Q1', 'Q0·Q1'], 3, 'Q2 toggles only when Q1 = Q0 = 1 (011 → 100, 111 → 000).', ['That is T0.', 'That is T1.', 'Missing Q0.', 'Correct.'], 'From class slides'),
          txt('Write T3 for a 4-bit synchronous up-counter with T flip-flops (use Q0, Q1, Q2 and · or juxtaposition).', ['Q0Q1Q2', 'Q0·Q1·Q2', 'Q2Q1Q0', 'Q0.Q1.Q2'], 'All three lower bits must be 1.'),
          mcq('For a synchronous DOWN counter using T flip-flops, T1 =', ['Q0', 'Q0\'', 'Q1', '1'], 1, 'A bit toggles in a down count when all lower bits are 0.', ['Up counter.', 'Correct.', 'No.', 'That is T0.']),
          nat('Minimum number of flip-flops for a mod-12 counter?', 4, 0, '⌈log₂ 12⌉ = 4.', 'From class slides'),
          nat('sync_counter_4bit starts at 0000 with en = 1. How many rising edges until tc first becomes 1?', 15, 0, 'q = 1111 after 15 increments.', 'Lab question'),
          mcq('Using T flip-flop excitation, which T value takes Q from 1 to 0?', ['0', '1', 'X', 'Q'], 1, 'T = Q ⊕ Q⁺ = 1 ⊕ 0 = 1.', ['Holds.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Design a 4-bit synchronous up-counter using T flip-flops: state table, excitation, minimised equations, circuit and timing diagram. (5 marks)', '<p>State table (3-bit version shown above, extended to 16 rows), T = Q ⊕ Q⁺, K-maps → T0 = 1, T1 = Q0, T2 = Q0Q1, T3 = Q0Q1Q2. Circuit D6.4a, waveforms D6.3b (Q3 = f/16).</p>', 5, ['1 — state/excitation table', '1 — equations', '2 — circuit', '1 — waveforms'], ['D6.4a', 'D6.3b'])]
      },
      {
        id: '6.5', title: 'Shift Registers: SISO, SIPO, PISO, PIPO', badge: 'class', sources: '[L08] p18-20; [LB7] p5-13; [LB8] Q3-Q4; [SP3] SIPO / PISO Shift Register; [SP4] quiz 8',
        keywords: 'shift register siso sipo piso pipo uart serial parallel',
        explain: '<p><b>Analogy:</b> a bucket brigade: on each whistle (clock) every person passes their bucket to the next.</p>' +
          '<ul><li>A <b>shift register</b> chains D flip-flops: Q of one drives D of the next, all on one clock. Each edge moves every bit one place.</li>' +
          '<li><b>SISO</b> (serial in, serial out): delay line — a bit appears at the output n clocks later.</li>' +
          '<li><b>SIPO</b> (serial in, parallel out): every Q tapped; after n clocks a serial stream becomes a parallel word — <b>UART receiver</b>.</li>' +
          '<li><b>PISO</b> (parallel in, serial out): a 2:1 MUX before each D chooses parallel load or shift (Shift/Load\' control) — <b>UART transmitter</b>.</li>' +
          '<li><b>PIPO</b> (parallel in, parallel out): a plain register with load — buffer/temporary storage.</li>' +
          '<li>Other uses: shift left = × 2, shift right = ÷ 2 (logical), serial ↔ parallel conversion, delay lines, <b>LFSR</b> pseudo-random generators (6.E1).</li></ul>' +
          '<div class="table-wrap"><table><tr><th>Type</th><th>Input</th><th>Output</th><th>Clocks to load n bits</th><th>Use</th></tr><tr><td>SISO</td><td>1 bit</td><td>1 bit</td><td>n</td><td>delay line</td></tr><tr><td>SIPO</td><td>1 bit</td><td>n bits</td><td>n</td><td>UART RX, serial-to-parallel</td></tr><tr><td>PISO</td><td>n bits</td><td>1 bit</td><td>1 (load) then n shifts</td><td>UART TX, parallel-to-serial</td></tr><tr><td>PIPO</td><td>n bits</td><td>n bits</td><td>1</td><td>buffer / register</td></tr></table></div>' +
          '<p><b>SIPO trace</b> (portal; new bit enters q[0]): stream 1, 0, 1, 1 → q = 0001, 0010, 0101, <b>1011</b>. <b>PISO trace</b> (load 1011, shift right, d_out = q[0]): d_out = 1, 1, 0, 1 — the LSB leaves first.</p>',
        keypoints: ['SISO delay line; SIPO = UART RX; PISO = UART TX; PIPO = buffer.', 'PISO needs a 2:1 MUX per bit (Shift/Load\').', 'n-bit SIPO: n clocks to receive a word.', 'Verilog shift: q <= {q[2:0], sin}.'],
        diagrams: [{ id: 'D6.5a', title: 'SISO (4-bit)', svg: siso, how: 'Four D FFs in a row, Q → D arrows between them, serial in on the left, serial out on the right, shared clock below.' },
          { id: 'D6.5b', title: 'SIPO (4-bit)', svg: sipo, how: 'Same as SISO, then draw a vertical tap from every Q up to labelled outputs Q0–Q3.' },
          { id: 'D6.5c', title: 'PISO with a load/shift MUX before each D', svg: piso, how: 'Put a 2:1 MUX in front of each D: input L from the parallel bit above, input S from the previous FF\'s Q; one Shift/Load\' line to every select.' },
          { id: 'D6.5d', title: 'PIPO (4-bit)', svg: pipo, how: 'Four independent D FFs: parallel inputs from the top, parallel outputs on the right, one clock.' }],
        code: [
          { id: 'C6.5a', title: 'siso — 4-bit serial in, serial out (Lab 7)', lang: 'verilog', src: 'module siso (input clk, input rst, input serial_in, output serial_out);\n    reg [3:0] q;\n    always @(posedge clk)\n        if (rst) q <= 4\'b0000;\n        else     q <= {q[2:0], serial_in};   // shift left, new bit at q[0]\n    assign serial_out = q[3];                   // appears 4 clocks later\nendmodule', io: '<pre>serial_in 1,0,1,1,0,0,0,0 → serial_out 0,0,0,1,0,1,1,0 (first 1 out on the 4th edge)</pre>' },
          { id: 'C6.5b', title: 'sipo — 4-bit SIPO with sync reset (portal, Hard)', lang: 'verilog', src: 'module sipo (clk, rst, d_in, q);\n    input clk, rst, d_in;\n    output reg [3:0] q;\n    always @(posedge clk) begin\n        if (rst)\n            q <= 4\'b0000;\n        else begin\n            q[0] <= d_in;   // non-blocking: all four use the OLD values\n            q[1] <= q[0];\n            q[2] <= q[1];\n            q[3] <= q[2];\n        end\n    end\nendmodule', io: '<pre>Time = 15 | d_in = 1 | q = 0001\nTime = 25 | d_in = 0 | q = 0010\nTime = 35 | d_in = 1 | q = 0101\nTime = 45 | d_in = 1 | q = 1011\nTime = 55 | rst = 1   | q = 0000</pre>' },
          { id: 'C6.5c', title: 'piso — 4-bit PISO, sh_ld = 0 load / 1 shift right (portal)', lang: 'verilog', src: 'module piso (clk, rst, sh_ld, d, q, d_out);\n    input clk, rst, sh_ld;\n    input [3:0] d;\n    output reg [3:0] q;\n    output wire d_out;\n    assign d_out = q[0];               // LSB leaves first\n    always @(posedge clk) begin\n        if (rst)            q <= 4\'b0000;\n        else if (!sh_ld)    q <= d;    // parallel load\n        else                q <= {1\'b0, q[3:1]};   // shift right, 0 enters q[3]\n    end\nendmodule', io: '<pre>Time = 15 | sh_ld = 0, d = 1011 | q = 1011, d_out = 1\nTime = 25 | sh_ld = 1           | q = 0101, d_out = 1\nTime = 35 |                     | q = 0010, d_out = 0\nTime = 45 |                     | q = 0001, d_out = 1\nTime = 55 |                     | q = 0000, d_out = 0</pre>' },
          { id: 'C6.5d', title: 'pipo — 4-bit parallel load register (Lab 7)', lang: 'verilog', src: 'module pipo (input clk, input load, input [3:0] d, output reg [3:0] q);\n    always @(posedge clk)\n        if (load) q <= d;      // all four bits in one edge\nendmodule', io: '<pre>load = 1, d = 1010 → q = 1010 after one edge</pre>' }],
        mistakes: ['Using blocking = in the SIPO: q[1] = q[0] would copy the NEW q[0] and every bit becomes d_in.', 'Calling PISO output “MSB first” when d_out = q[0] (the portal trace is LSB first).', 'Forgetting that PISO needs the load MUX — a plain chain cannot accept parallel data.'],
        practice: [
          mcq('Which shift register mode is used in a UART transmitter to send data one bit at a time over a single wire?', ['SISO', 'SIPO', 'PISO', 'PIPO'], 2, 'Parallel byte from the CPU → serial wire.', ['Delay line.', 'Receiver.', 'Correct.', 'Buffer.'], 'Class quiz (L08 Q1)'),
          txt('A 4-bit SIPO (new bit enters q[0], shifts toward q[3]) starts at 0000. Bits 1, 1, 0, 1 arrive on four edges. Write q[3:0].', ['1101'], 'q: 0001, 0011, 0110, 1101 (portal second test).', 'Lab question'),
          nat('How many clock edges does a 8-bit SIPO need to receive one full byte?', 8, 0, 'One bit per edge.'),
          mcq('A PISO register loads 1100 and then shifts right with d_out = q[0]. The first four d_out values after the load edge (including the load) are:', ['0, 0, 1, 1', '1, 1, 0, 0', '0, 1, 1, 0', '1, 0, 0, 1'], 0, 'q = 1100 (d_out 0), 0110 (0), 0011 (1), 0001 (1).', ['Correct.', 'That is MSB first.', 'No.', 'No.'], 'Lab question'),
          mcq('In Verilog, which statement implements one shift-left step with serial input sin on a 4-bit reg q?', ['q <= {sin, q[3:1]};', 'q <= {q[2:0], sin};', 'q <= q << sin;', 'q = q + sin;'], 1, 'Concatenate the lower 3 bits with the new bit.', ['That shifts right.', 'Correct.', 'Shifts by sin places.', 'Adds.'])
        ],
        subjective: [sub('Draw SISO, SIPO, PISO and PIPO shift registers (4-bit) and state one application of each. Show the SIPO contents for the input stream 1011. (5 marks)', '<p>D6.5a–d; uses: delay line, UART RX, UART TX, buffer. SIPO trace 0001, 0010, 0101, 1011.</p>', 5, ['1 each — four diagrams', '1 — uses + trace'], ['D6.5a', 'D6.5b', 'D6.5c', 'D6.5d'])]
      },
      {
        id: '6.E1', title: 'Extra from slides: Ring, Johnson, Mod-N, Divide-by-N, LFSR', badge: 'extra', sources: '[LB7] p23-25; [L08] p11, p20, p28; [SP4] quiz 8 Q4-Q5',
        sourceLine: 'Source: class slides; Harris & Harris §3.4; LFSR maximal-length property from Mano, Digital Design ch. 6',
        keywords: 'ring counter johnson twisted ring mod n divide by lfsr pseudo random',
        explain: '<ul><li><b>Ring counter:</b> SISO with Q3 → D0, preset to 0001. One hot bit circulates: <b>n states for n FFs</b>. Output is already decoded (one-hot), useful for sequencing.</li>' +
          '<li><b>Johnson (twisted-ring) counter:</b> feed back <b>Q3\'</b>. Sequence 0000 → 0001 → 0011 → 0111 → 1111 → 1110 → 1100 → 1000: <b>2n states</b>; only one bit changes per step (glitch-free decoding with 2-input gates). A 4-bit Johnson counter leaves 16 − 8 = 8 unused states — it needs self-correction logic.</li>' +
          '<li><b>Mod-N counter:</b> counts 0 to N−1. <i>Decode &amp; reset</i>: detect N and clear (with an async clear the state N appears briefly as a glitch); <i>parallel load / synchronous reset at N−1</i>: preferred in production because no glitch state appears.</li>' +
          '<li><b>Divide-by-N:</b> bit k of a binary counter = f / 2<sup>k+1</sup>; a mod-N counter\'s terminal count gives f / N.</li>' +
          '<li><b>LFSR:</b> a shift register whose input is the XOR of some taps. With a primitive polynomial an n-bit LFSR cycles through <b>2<sup>n</sup> − 1</b> non-zero states (all-zero locks up). Used for pseudo-random numbers, CRC, BIST and scramblers. Example 4-bit (x⁴ + x³ + 1, feedback Q3 ⊕ Q2): 0001 0010 0100 1001 0011 0110 1101 1010 0101 1011 0111 1111 1110 1100 1000 → 15 states.</li></ul>' +
          '<div class="table-wrap"><table><tr><th>Counter</th><th>States with n FFs</th><th>Feedback</th></tr><tr><td>Binary (ripple / sync)</td><td>2ⁿ</td><td>adder / AND logic</td></tr><tr><td>Ring</td><td>n</td><td>Q(n−1) → D0</td></tr><tr><td>Johnson</td><td>2n</td><td>Q(n−1)\' → D0</td></tr><tr><td>LFSR (maximal)</td><td>2ⁿ − 1</td><td>XOR of taps</td></tr></table></div>',
        keypoints: ['Ring: n states; Johnson: 2n states.', 'Johnson unused states = 2ⁿ − 2n.', 'Maximal LFSR: 2ⁿ − 1 states.', 'Mod-N by parallel load avoids the glitch state.', 'f(bit k) = f_clk / 2^(k+1).'],
        diagrams: [{ id: 'D6.E1a', title: '4-bit ring counter', svg: ringDiag(false), how: 'Four D FFs in a SISO chain; wire Q3 back to D0 over the top; write the preset 0001 and the 4-state sequence.' },
          { id: 'D6.E1b', title: '4-bit Johnson (twisted-ring) counter', svg: ringDiag(true), how: 'Same chain, but the feedback comes from Q3\' (draw a bubble); list the 8 states.' }],
        code: [
          { id: 'C6.E1a', title: 'ring counter (Lab 7)', lang: 'verilog', src: 'module ring4 (input clk, input rst, output reg [3:0] q);\n    always @(posedge clk)\n        if (rst) q <= 4\'b0001;            // preset: exactly one 1\n        else     q <= {q[2:0], q[3]};     // rotate left\nendmodule', io: '<pre>0001 0010 0100 1000 0001</pre>' },
          { id: 'C6.E1b', title: 'Johnson counter', lang: 'verilog', src: 'module johnson4 (input clk, input rst, output reg [3:0] q);\n    always @(posedge clk)\n        if (rst) q <= 4\'b0000;\n        else     q <= {q[2:0], ~q[3]};    // complemented feedback\nendmodule', io: '<pre>0000 0001 0011 0111 1111 1110 1100 1000 0000</pre>' },
          { id: 'C6.E1c', title: 'mod-6 counter (class: resets at 6)', lang: 'verilog', src: 'module mod6 (input clk, input rst, output reg [2:0] q);\n    always @(posedge clk)\n        if (rst || q == 3\'d5) q <= 3\'d0;   // synchronous: 5 → 0, state 6 never appears\n        else                   q <= q + 1\'b1;\nendmodule', io: '<pre>0 1 2 3 4 5 0 1 (divide-by-6 at q[2] / terminal count)</pre>' }],
        mistakes: ['Forgetting to preset a ring counter (all zeros stays all zeros).', 'Saying a Johnson counter has 2ⁿ states.', 'Counting 2ⁿ states for an LFSR — the all-zero state is excluded.'],
        practice: [
          mcq('A new LFSR-based pseudo-random number generator uses 8 flip-flops with a proper primitive polynomial. How many unique non-zero states does it cycle through before repeating?', ['8', '64', '255', '256'], 2, '2⁸ − 1 = 255.', ['That is a ring counter.', 'No.', 'Correct.', 'All-zero excluded.'], 'Class quiz (L08 Q5)'),
          mcq('A mod-N counter using the Parallel Load approach (rather than Decode & Reset) is preferred in production designs because:', ['It requires more flip-flops', 'It is harder to implement but runs at lower frequency', 'It avoids a glitch state that would briefly appear when using decode & reset', 'It does not need a clock'], 2, 'Decode & async reset shows state N momentarily.', ['No.', 'No.', 'Correct.', 'No.'], 'Class quiz (L08 Q4)'),
          nat('How many states does a 5-bit Johnson counter cycle through?', 10, 0, '2n = 10.'),
          nat('How many unused (invalid) states does a 4-bit Johnson counter have?', 8, 0, '16 − 8 = 8.'),
          mcq('A 4-bit ring counter preset to 1000 that rotates left ({q[2:0], q[3]}) goes next to:', ['0100', '0001', '1001', '0000'], 1, 'Q3 wraps into Q0.', ['That is rotate right.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Draw a 4-bit ring counter and a 4-bit Johnson counter, give their state sequences, and compare the number of states with a binary counter. (5 marks)', '<p>D6.E1a: 4 states (one-hot). D6.E1b: 8 states. Binary: 16. Johnson needs only 2-input decoding gates; ring is self-decoding; binary is the most efficient in states per FF.</p>', 5, ['2 + 2 — diagrams with sequences', '1 — comparison'], ['D6.E1a', 'D6.E1b'])]
      }
    ]
  });
})();
