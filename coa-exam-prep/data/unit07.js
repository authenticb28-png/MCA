/* Unit 7 – Register Files & Finite State Machines */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* D7.2a register file block */
  const rfBlock = (function () {
    let s = S.rect(200, 40, 220, 200, 'boxa');
    s += S.tc(310, 130, 'Register file', 'b') + S.tc(310, 148, '32 × 32-bit', 'xs muted');
    const L = [['Read register 1', 70, 5], ['Read register 2', 110, 5], ['Write register', 160, 5], ['Write data', 205, 32]];
    L.forEach((p) => { s += S.a([[40, p[1]], [200, p[1]]], 'arr') + S.slash(150, p[1], p[2]) + S.t(206, p[1] + 4, p[0], 'xs'); });
    s += S.t(36, 74, 'rs', 'xs b', 'end') + S.t(36, 114, 'rt', 'xs b', 'end') + S.t(36, 164, 'rd / rt', 'xs b', 'end') + S.t(36, 209, 'result', 'xs b', 'end');
    s += S.a([[420, 90], [560, 90]], 'arr') + S.slash(500, 90, 32) + S.t(414, 94, 'Read data 1', 'xs', 'end');
    s += S.a([[420, 180], [560, 180]], 'arr') + S.slash(500, 180, 32) + S.t(414, 184, 'Read data 2', 'xs', 'end');
    s += S.t(566, 94, '→ ALU input A', 'xs b') + S.t(566, 184, '→ ALU input B / memory', 'xs b');
    s += S.a([[310, 8], [310, 40]], 'ctl') + S.t(318, 20, 'RegWrite (WE)', 'xs ctltxt');
    s += S.p([[310, 270], [310, 240]]) + '<path class="w" d="M302,240 l8,-10 l8,10"/>' + S.tc(310, 284, 'CLK (writes only)', 'xs b');
    s += S.t(10, 304, 'Blue side = 2 read ports (combinational). Write port = address + data + WE, updates one register at the clock edge.', 'xs muted');
    return S.svg(720, 312, s, 'register file block');
  })();

  /* D7.2b write port */
  const rfWrite = (function () {
    let s = S.rect(110, 40, 80, 260, 'box');
    s += S.tc(150, 160, '5-to-32', 'sm b') + S.tc(150, 176, 'decoder', 'sm b');
    s += S.a([[30, 170], [110, 170]], 'arr') + S.slash(70, 170, 5) + S.t(26, 160, 'Write reg', 'xs b');
    const rows = [[70, '0'], [120, '1'], [170, '2'], [270, '31']];
    rows.forEach((r) => {
      const g = S.gate('AND', 250, r[0], { stub: 0 });
      s += g.svg + S.p([[190, r[0] - 10], [250, r[0] - 10]]) + S.t(196, r[0] - 14, 'D' + r[1], 'xs');
      s += S.p([[230, r[0] + 10], [250, r[0] + 10]]) + S.dot(230, r[0] + 10);
      s += S.a([g.out, [380, r[0]]], 'arr') + S.t(330, r[0] - 6, 'en' + r[1], 'xs b');
      s += S.box(380, r[0] - 20, 110, 40, 'R' + r[1] + ' (32 FFs)', 'box', 'xs b');
    });
    s += S.tc(150, 232, '⋮', 'lg') + S.tc(435, 232, '⋮', 'lg') + S.tc(275, 232, '⋮', 'lg');
    s += S.p([[230, 20], [230, 280]], 'ctl') + S.t(236, 26, 'RegWrite', 'xs ctltxt');
    s += S.p([[540, 20], [540, 270]]) + S.t(546, 26, 'Write data (32 bits) to every register', 'xs b');
    rows.forEach((r) => { s += S.a([[540, r[0]], [490, r[0]]], 'arr') + S.dot(540, r[0]); });
    s += S.t(10, 318, 'The decoder picks WHERE (one-hot), RegWrite picks WHETHER. Only the enabled register captures the data at the edge.', 'xs b');
    return S.svg(720, 326, s, 'register file write port');
  })();

  /* D7.2c read ports */
  const rfRead = (function () {
    let s = '';
    const rows = [[60, '0'], [110, '1'], [160, '2'], [250, '31']];
    rows.forEach((r) => { s += S.box(40, r[0] - 18, 110, 36, 'R' + r[1], 'box', 'sm b'); s += S.p([[150, r[0]], [230, r[0]]]) + S.dot(200, r[0]); });
    s += S.tc(95, 210, '⋮', 'lg');
    const m1 = S.muxT(260, 30, 4, { inLabels: ['0', '1', '2', '31'], h: 150, label: '32:1' });
    const m2 = S.muxT(420, 120, 4, { inLabels: ['0', '1', '2', '31'], h: 150, label: '32:1' });
    s += m1.svg + m2.svg;
    rows.forEach((r, i) => {
      s += S.a([[230, r[0]], [245, r[0]], [245, m1.in[i][1]], m1.in[i]], 'arr');
      s += S.a([[200, r[0]], [200, r[0] + 0], [200, 300], [395, 300], [395, m2.in[i][1]], m2.in[i]], 'w');
    });
    s += S.a([m1.out, [600, m1.out[1]]], 'arr') + S.t(606, m1.out[1] + 4, 'Read data 1', 'sm b');
    s += S.a([m2.out, [600, m2.out[1]]], 'arr') + S.t(606, m2.out[1] + 4, 'Read data 2', 'sm b');
    s += S.a([[m1.sel[0], 10], [m1.sel[0], 30]], 'ctl') + S.t(m1.sel[0] + 6, 14, 'Read register 1 (5-bit select)', 'xs ctltxt');
    s += S.a([[m2.sel[0], 300], [m2.sel[0], m2.sel[1] + 6]], 'ctl') + S.t(m2.sel[0] + 8, 296, 'Read register 2 (5-bit select)', 'xs ctltxt');
    s += S.t(10, 330, 'Every register output fans out to BOTH 32:1 MUXes (wide 32-bit buses, drawn as single lines). No clock: data appears after gate delay.', 'xs b');
    return S.svg(760, 338, s, 'register file read ports');
  })();

  /* D7.3a FSM anatomy */
  const anatomy = (function () {
    let s = S.box(120, 50, 140, 70, 'Next-state\nlogic', 'box') + S.box(320, 50, 130, 70, 'State\nregister', 'boxa') + S.box(510, 50, 130, 70, 'Output\nlogic', 'box');
    s += S.a([[20, 85], [120, 85]], 'arr') + S.t(20, 76, 'inputs', 'xs b');
    s += S.a([[260, 85], [320, 85]], 'arr') + S.tc(290, 78, 'next', 'xs');
    s += S.a([[450, 85], [510, 85]], 'arr') + S.tc(480, 78, 'state', 'xs');
    s += S.a([[640, 85], [700, 85]], 'arr') + S.t(646, 76, 'outputs', 'xs b');
    s += S.a([[480, 85], [480, 150], [190, 150], [190, 120]], 'arr') + S.dot(480, 85) + S.tc(335, 164, 'present state fed back', 'xs');
    s += S.a([[70, 85], [70, 30], [575, 30], [575, 50]], 'hl') + S.dot(70, 85) + S.tc(330, 24, 'Mealy only: inputs also reach the output logic', 'xs hltxt');
    s += S.p([[385, 190], [385, 120]]) + '<path class="w" d="M377,120 l8,-10 l8,10"/>' + S.tc(385, 204, 'CLK', 'xs b');
    s += S.t(10, 228, 'Moore: output = λ(state).   Mealy: output = λ(state, input).   Next state = δ(state, input) for both.', 'xs b');
    return S.svg(720, 236, s, 'FSM anatomy');
  })();

  /* D7.3b traffic light (Moore) */
  const traffic = S.fsm({
    w: 560, h: 270, r: 34, title: 'Traffic light (Moore): T = timer expired',
    states: [{ id: 'G', x: 110, y: 150, l: 'GREEN', o: 'Go', init: 'left' }, { id: 'Y', x: 300, y: 70, l: 'YELLOW', o: 'Slow' }, { id: 'R', x: 470, y: 170, l: 'RED', o: 'Stop' }],
    edges: [{ f: 'G', t: 'Y', l: 'T', bend: -0.12 }, { f: 'Y', t: 'R', l: 'T', bend: -0.12 }, { f: 'R', t: 'G', l: 'T', bend: -0.15 },
      { f: 'G', t: 'G', l: 'T\'', loop: 'bottom' }, { f: 'Y', t: 'Y', l: 'T\'', loop: 'top' }, { f: 'R', t: 'R', l: 'T\'', loop: 'right' }]
  });

  /* D7.3c datapath + control */
  const dpCtl = (function () {
    let s = S.box(40, 60, 200, 110, 'CONTROL\n(an FSM)', 'boxa') + S.box(400, 40, 260, 150, 'DATAPATH\nregisters · ALU · MUXes\nmemory', 'box');
    s += S.a([[240, 90], [400, 90]], 'ctl') + S.tc(320, 82, 'control signals', 'xs ctltxt') + S.tc(320, 104, 'RegWrite, ALUSrc, MemWrite', 'xs muted');
    s += S.a([[400, 150], [240, 150]], 'arr') + S.tc(320, 142, 'status flags', 'xs b') + S.tc(320, 164, 'Zero, overflow, opcode', 'xs muted');
    s += S.a([[140, 10], [140, 60]], 'arr') + S.t(148, 20, 'instruction / start', 'xs b');
    s += S.a([[660, 115], [710, 115]], 'arr') + S.t(664, 106, 'data', 'xs b');
    s += S.t(10, 236, 'Control decides WHAT happens each cycle; the datapath does the work and reports back. (Unit 13 builds both.)', 'xs muted');
    return S.svg(730, 244, s, 'datapath and control');
  })();

  /* sequence detector diagrams */
  const mealyStates = [{ id: '0', x: 100, y: 100, l: 'S0', init: 'left' }, { id: '1', x: 340, y: 100, l: 'S1' }, { id: '2', x: 340, y: 270, l: 'S2' }, { id: '3', x: 100, y: 270, l: 'S3' }];
  function mealy(overlap) {
    const e = [{ f: '0', t: '0', l: '0/0', loop: 'top' }, { f: '0', t: '1', l: '1/0' }, { f: '1', t: '1', l: '1/0', loop: 'top' }, { f: '1', t: '2', l: '0/0' },
      { f: '2', t: '3', l: '1/0', bend: 0.15, lo: [70, -2] }, { f: '2', t: '0', l: '0/0', bend: 0.2 }, { f: '3', t: '2', l: '0/0', bend: 0.15 }];
    if (overlap) e.push({ f: '3', t: '1', l: '1/1', bend: 0.2, cls: 'amber' });
    else e.push({ f: '3', t: '0', l: '1/1', cls: 'amber', lo: [-22, 0] });
    return S.fsm({ w: 470, h: 340, r: 26, states: mealyStates, edges: e, title: 'Mealy 1011, ' + (overlap ? 'overlap: S3 —1/1→ S1' : 'no overlap: S3 —1/1→ S0') + ' (input/output on arrows)' });
  }
  function moore(overlap) {
    const st = [{ id: '0', x: 80, y: 110, l: 'S0', o: 'out 0', init: 'left' }, { id: '1', x: 250, y: 110, l: 'S1', o: 'out 0' }, { id: '2', x: 430, y: 110, l: 'S2', o: 'out 0' }, { id: '3', x: 430, y: 280, l: 'S3', o: 'out 0' }, { id: '4', x: 250, y: 280, l: 'S4', o: 'out 1', acc: true }];
    const e = [{ f: '0', t: '0', l: '0', loop: 'top' }, { f: '0', t: '1', l: '1' }, { f: '1', t: '1', l: '1', loop: 'top' }, { f: '1', t: '2', l: '0' },
      { f: '2', t: '3', l: '1', bend: 0.15 }, { f: '2', t: '0', l: '0', bend: -0.28, lo: [-60, 6] }, { f: '3', t: '2', l: '0', bend: 0.15 }, { f: '3', t: '4', l: '1' }];
    if (overlap) { e.push({ f: '4', t: '1', l: '1', lo: [-10, 30] }); e.push({ f: '4', t: '2', l: '0', cls: 'amber', lo: [14, 10] }); }
    else { e.push({ f: '4', t: '1', l: '1', lo: [-10, 30] }); e.push({ f: '4', t: '0', l: '0', cls: 'amber', lo: [-14, 10] }); }
    return S.fsm({ w: 520, h: 340, r: 28, states: st, edges: e, title: 'Moore 1011, ' + (overlap ? 'overlap: S4 —0→ S2, —1→ S1' : 'no overlap: S4 —0→ S0, —1→ S1') + ' (output in the circle)' });
  }

  const tbl = (rows, moore) => '<div class="table-wrap"><table class="tt"><tr><th>State</th><th>in = 0</th><th>in = 1</th>' + (moore ? '<th>out</th>' : '') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table></div>';

  UNITS.push({
    id: 7, title: 'Register Files & Finite State Machines', short: 'Register Files & FSMs',
    intro: 'The CPU\'s fastest storage (a register file with 2 read and 1 write port) and the machine that sequences everything (an FSM). MCA Lecture 7, L08 FSM slides, Lab 8 sequence detectors and the portal register-file problems.',
    subtopics: [
      {
        id: '7.1', title: 'From Registers to Register Files', badge: 'class', sources: '[RF] p12-14',
        keywords: 'register file need two reads one write mips 32 registers',
        explain: '<p><b>Analogy:</b> a register is one locker; a register file is a wall of numbered lockers with two “view windows” and one “drop slot”, all usable in the same instant.</p>' +
          '<ul><li>One instruction like <code>add R1, R2, R3</code> must <b>read two</b> source registers and <b>write one</b> destination — all in <b>one clock cycle</b>.</li>' +
          '<li>A <b>register file</b> is a bank of registers with address-based access: a tiny, ultra-fast memory inside the CPU.</li>' +
          '<li><b>Standard size:</b> MIPS and RISC-V have <b>32 registers × 32 bits</b> with <b>2 read ports + 1 write port</b> — exactly enough for a two-operand, one-result instruction. 5-bit addresses because 2⁵ = 32.</li>' +
          '<li>Storage hierarchy: register file (fraction of a ns) → L1 cache → L2 → RAM. This block feeds the ALU in the datapath (Unit 13).</li></ul>',
        keypoints: ['R-type needs 2 reads + 1 write per cycle.', 'MIPS: 32 × 32-bit, 5-bit register addresses.', 'Address bits = log₂(number of registers).', 'Total storage bits = registers × width.'],
        mistakes: ['Thinking a register file has one port (then add would need 3 cycles).', 'Mixing up number of registers (address width) and register width (data width).'],
        practice: [
          nat('A register file is designed with exactly 64 registers. What is the minimum number of bits required for the write address (WA)?', 6, 0, 'log₂ 64 = 6.', 'Class quiz (L09 Q1)'),
          mcq('A register file has 16 registers, each 8 bits wide. How many flip-flops does it contain in total, and how many bits wide must each read address be?', ['64 flip-flops, 3-bit address', '128 flip-flops, 4-bit address', '128 flip-flops, 3-bit address', '256 flip-flops, 4-bit address'], 1, '16 × 8 = 128 FFs; log₂ 16 = 4.', ['No.', 'Correct.', 'Address is 4 bits.', 'No.'], 'Class quiz (L09 Q4)'),
          mcq('Why does a MIPS register file have exactly two read ports and one write port?', ['To save area', 'An R-type instruction reads two sources and writes one destination per cycle', 'Because memory has two ports', 'To support floating point'], 1, 'Port count matches add rd, rs, rt.', ['Area is a cost, not the reason.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('Total number of storage bits in the MIPS integer register file (32 registers × 32 bits)?', 1024, 0, '32 × 32 = 1024.')
        ],
        subjective: [sub('Why does a CPU need a register file instead of individual registers? State the size and port configuration of the MIPS register file and justify it. (3 marks)', '<p>Instructions name registers by number; a register file gives address-based access to many registers in one cycle. MIPS: 32 × 32-bit, 2 read + 1 write ports, 5-bit addresses — matches add rd, rs, rt (read 2, write 1 per cycle).</p>', 3, ['1 — need', '1 — size/ports', '1 — justification'])]
      },
      {
        id: '7.2', title: 'Register File Architecture (1 Write, 2 Read Ports)', badge: 'class', sources: '[RF] p15-21; [SP3] 4-Register 32-Bit Register File; Register File with Hardwired Zero; [SP4] quiz 9',
        keywords: 'register file write port decoder read port mux combinational synchronous hardwired zero',
        explain: '<p><b>Write port (synchronous):</b> the 5-bit write address goes into a <b>5-to-32 decoder</b>, which raises exactly one enable line (one-hot). Each line is ANDed with <b>RegWrite (WE)</b> and drives one register\'s load enable. Write data goes to all 32 registers, but only the enabled one captures it at the clock edge. <i>The decoder picks WHERE; WE picks WHETHER.</i></p>' +
          '<p><b>Read ports (combinational):</b> every register output is wired to <b>two 32:1 MUXes</b> (32 bits wide each). Read register 1 and 2 are the 5-bit select codes. Data appears after gate delay — no clock.</p>' +
          '<div class="table-wrap"><table><tr><th>READ = combinational</th><th>WRITE = synchronous</th></tr><tr><td>no clock needed</td><td>happens on the clock edge</td></tr><tr><td>data appears after gate delay</td><td>address, data and WE set up early, register updates at the edge</td></tr><tr><td>both ports at once</td><td>prevents races and half-written values</td></tr><tr><td>ALU gets operands immediately</td><td>new value readable in the next cycle</td></tr></table></div>' +
          '<p><b>Read-before-write in one cycle:</b> old values are read at the start of the cycle, the ALU computes, the result is written at the edge. (In the pipeline, Unit 14–15, the file is written in the first half and read in the second half of a cycle.)</p>' +
          '<p><b>Hardwired zero:</b> MIPS $zero / RISC-V x0 always reads 0 and ignores writes — gives a free constant (move = add rd, rs, $zero; nop) and simplifies comparisons.</p>',
        keypoints: ['Write: decoder (one-hot) AND WE → load enables.', 'Read: two 32:1 MUXes, 5-bit selects.', 'Read combinational, write synchronous.', 'Register 0 = constant zero, writes ignored.', 'n registers → log₂ n address bits per port.'],
        diagrams: [{ id: 'D7.2a', title: 'Register file block (MIPS 32 × 32, 2R + 1W)', svg: rfBlock, how: 'One big box; left side: Read reg 1, Read reg 2, Write reg (5 bits each), Write data (32); right side: Read data 1 and 2 (32); RegWrite on top; clock at the bottom.' },
          { id: 'D7.2b', title: 'Write port: 5-to-32 decoder + RegWrite → register enables', svg: rfWrite, how: 'Tall decoder box; each output into an AND gate with RegWrite; AND output = load enable of R0..R31; one Write data bus to all registers.' },
          { id: 'D7.2c', title: 'Read ports: two 32:1 MUXes', svg: rfRead, how: 'Stack of register boxes on the left; every output goes to both MUXes; Read reg 1 / 2 are the MUX selects; outputs Read data 1 / 2.' }],
        code: [
          { id: 'C7.2a', title: 'register_file — 4 × 32-bit, 1 sync write, 2 async reads (portal, Hard)', lang: 'verilog', src: 'module register_file (\n    input         clk,\n    input         we,\n    input  [1:0]  wr_addr,\n    input  [31:0] wr_data,\n    input  [1:0]  rd_addr1,\n    input  [1:0]  rd_addr2,\n    output [31:0] rd_data1,\n    output [31:0] rd_data2\n);\n    reg [31:0] reg_file [0:3];          // 4 registers of 32 bits\n    integer i;\n    initial for (i = 0; i < 4; i = i + 1) reg_file[i] = 32\'b0;\n\n    always @(posedge clk)               // WRITE: synchronous\n        if (we) reg_file[wr_addr] <= wr_data;\n\n    assign rd_data1 = reg_file[rd_addr1]; // READ: combinational\n    assign rd_data2 = reg_file[rd_addr2];\nendmodule', io: '<pre>Time=0  | WE=0 | WR=00 DATA=ffffffff | RD1=00 DATA1=00000000\nTime=20 | WE=1 | WR=00 DATA=12345678 | RD1=00 DATA1=00000000\nTime=25 | WE=1 | WR=00 DATA=12345678 | RD1=00 DATA1=12345678   (written at the edge)\nTime=30 | WE=0 | WR=00 DATA=09999999 | RD1=00 DATA1=12345678   (we=0: ignored)</pre>' },
          { id: 'C7.2b', title: 'regfile — synchronous reset + hardwired-zero R0 (portal, Hard)', lang: 'verilog', src: 'module regfile (\n    input clk, input rst, input we,\n    input  [1:0]  wr_addr, input [31:0] wr_data,\n    input  [1:0]  rd_addr_a, input [1:0] rd_addr_b,\n    output [31:0] rd_data_a, output [31:0] rd_data_b\n);\n    reg [31:0] regs [0:3];\n    integer i;\n    always @(posedge clk) begin\n        if (rst) begin\n            for (i = 0; i < 4; i = i + 1) regs[i] <= 32\'b0;  // reset beats write\n        end else if (we && wr_addr != 2\'b00) begin\n            regs[wr_addr] <= wr_data;                         // writes to R0 dropped\n        end\n    end\n    // address 0 always reads 0, whatever is stored\n    assign rd_data_a = (rd_addr_a == 2\'b00) ? 32\'b0 : regs[rd_addr_a];\n    assign rd_data_b = (rd_addr_b == 2\'b00) ? 32\'b0 : regs[rd_addr_b];\nendmodule', io: '<pre>write DEAD0000 to R0 → ignored;  write 12345678 to R1 → stored\nTime=40 | A_addr=00 A_data=00000000 | B_addr=01 B_data=12345678\nTime=50 | A_addr=01 A_data=12345678 | B_addr=00 B_data=00000000</pre>' }],
        mistakes: ['Clocking the read port — adds a needless cycle of latency.', 'Forgetting write enable — every register would be overwritten every cycle.', 'Tri-state read bus with two drivers enabled → bus contention.', 'Using 32 (not 5) as the select width of a 32:1 MUX.'],
        practice: [
          mcq('A student claims: “Register file reads are slow because they need to wait for a clock edge.” Why is this claim incorrect?', ['Reads actually require two clock cycles', 'Reads are combinational (asynchronous) — no clock edge is needed', 'Reads and writes both happen simultaneously on the same clock edge', 'Register file reads are indeed synchronous in RISC-V'], 1, 'Read ports are MUXes.', ['No.', 'Correct.', 'Only writes are clocked.', 'No.'], 'Class quiz (L09 Q3)'),
          mcq('In the write port of a 32-register file, which component selects WHICH register is written?', ['a 32:1 MUX', 'a 5-to-32 decoder', 'the ALU', 'the sign extender'], 1, 'One-hot enables from the decoder; WE gates them.', ['Read side.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('Class homework: an 8 × 16 register file. How many output lines does the write-address decoder have?', 8, 0, '3-to-8 decoder (3 address bits).', 'From class slides'),
          mcq('In regfile (hardwired zero), the testbench writes FACEFACE to address 00 with we = 1 and then reads address 00. The output is:', ['FACEFACE', '00000000', 'xxxxxxxx', 'DEAD0000'], 1, 'Writes to R0 are dropped and reads of 00 return 0.', ['Write dropped.', 'Correct.', 'No.', 'Also dropped.'], 'Lab question'),
          msq('Which statements about a register file are true? (select all)', ['A write takes effect at the clock edge', 'Two different registers can be read in the same cycle', 'Each read port needs its own MUX', 'Read data is valid only in the next cycle'], [0, 1, 2], 'Reads are combinational — valid in the same cycle.', ['True.', 'True.', 'True.', 'False.']),
          nat('How many 2-input AND gates (one per register) gate the decoder outputs with RegWrite in a 32-register file?', 32, 0, 'One per decoder output.')
        ],
        subjective: [sub('Draw the internal organisation of a 32 × 32 register file with two read ports and one write port. Explain why reads are combinational and writes synchronous. (5 marks)', '<p>D7.2a–c. Write: 5:32 decoder, AND with RegWrite, load enables; data bus to all. Read: two 32:1 MUXes with 5-bit selects. Reasoning from the table: operands ready in the same cycle; synchronous writes avoid races and half-written values; read-before-write in one cycle.</p>', 5, ['2 — write port', '2 — read ports', '1 — timing reason'], ['D7.2a', 'D7.2b', 'D7.2c'])]
      },
      {
        id: '7.3', title: 'Introduction to Finite State Machines', badge: 'class', sources: '[RF] p2-11; [L08] p30-39',
        keywords: 'fsm finite state machine states transitions outputs traffic light next state logic state register',
        explain: '<p><b>Analogy:</b> a vending machine: it remembers how much money is in (state), reacts to coins (inputs), moves to a new state (transition) and drops a drink (output).</p>' +
          '<ul><li><b>FSM ingredients:</b> a finite set of <b>states</b>, <b>inputs</b>, <b>transitions</b> and <b>outputs</b>. Formally (S, I, O, δ, λ): <b>δ = transition (next-state) function</b>, <b>λ = output function</b>.</li>' +
          '<li><b>Hardware anatomy:</b> next-state logic (combinational) → <b>state register</b> (flip-flops, clocked) → output logic (combinational), with the present state fed back.</li>' +
          '<li><b>Number of state flip-flops:</b> binary encoding ⌈log₂ N⌉; one-hot encoding N (one FF per state, simpler next-state logic).</li>' +
          '<li><b>Traffic light example (Moore):</b> GREEN (Go) → YELLOW (Slow) → RED (Stop) → GREEN, each move when the timer T expires; otherwise stay.</li>' +
          '<li><b>Design flow (6 steps):</b> (1) understand the spec; (2) draw the state diagram; (3) state table; (4) encode states; (5) derive next-state and output equations (K-maps); (6) build/simulate.</li>' +
          '<li>FSMs are everywhere: the CPU <b>control unit</b> (fetch → decode → execute → write-back), protocol handlers, elevators, vending machines. <b>Datapath + control</b>: control sends signals, the datapath returns status flags.</li></ul>',
        keypoints: ['FSM = (S, I, O, δ, λ).', 'Next-state logic → state register → output logic.', 'Binary: ⌈log₂ N⌉ FFs; one-hot: N FFs.', 'Always define a reset state.', 'Control unit of a CPU is an FSM.'],
        diagrams: [{ id: 'D7.3a', title: 'FSM anatomy (Moore and Mealy)', svg: anatomy, how: 'Three boxes in a row (next-state logic, state register with clock, output logic), feedback arrow from the register back to next-state logic; for Mealy add an arrow from the inputs to the output logic.' },
          { id: 'D7.3b', title: 'Traffic-light FSM (Moore)', svg: traffic, how: 'Three circles GREEN/YELLOW/RED with outputs Go/Slow/Stop inside; arrows labelled T around the cycle; self-loops labelled T\'.' },
          { id: 'D7.3c', title: 'Datapath + control', svg: dpCtl, how: 'Control box (FSM) on the left, datapath box on the right; dashed control-signal arrow right, status-flag arrow back left.' }],
        examples: [{ title: 'Traffic-light state table (class slide)', html: tbl([['GREEN (Go)', 'GREEN', 'YELLOW'], ['YELLOW (Slow)', 'YELLOW', 'RED'], ['RED (Stop)', 'RED', 'GREEN']]).replace(/in = 0/, 'T = 0').replace(/in = 1/, 'T = 1') + '<p>3 states → 2 flip-flops (binary) or 3 (one-hot).</p>' },
          { title: 'Class exit ticket: “11” detector (Moore, overlap)', html: '<p>States: A (no 1 yet, out 0), B (one 1, out 0), C (seen 11, out 1). A —1→ B, A —0→ A; B —1→ C, B —0→ A; C —1→ C (overlap), C —0→ A.</p>' }],
        mistakes: ['Forgetting the reset/initial state.', 'Unreachable or missing transitions (every state needs an edge for every input value).', 'Using ⌈log₂ N⌉ for one-hot (it is N).'],
        practice: [
          mcq('The 5-component formal definition of an FSM includes states (S), inputs (I), outputs (O), and two functions. What are those two functions?', ['Encode function and decode function', 'Transition function (δ) and output function (λ)', 'Clock function and reset function', 'Next-state function and feedback function'], 1, 'δ computes the next state, λ the output.', ['No.', 'Correct.', 'No.', 'No.'], 'Class quiz (L09 Q2)'),
          nat('An FSM has 6 states. Minimum flip-flops with binary encoding?', 3, 0, '⌈log₂ 6⌉ = 3.'),
          nat('The same 6-state FSM with one-hot encoding needs how many flip-flops?', 6, 0, 'One per state.'),
          mcq('In the FSM hardware model, which block is the only one that contains flip-flops?', ['next-state logic', 'state register', 'output logic', 'all three'], 1, 'The other two are combinational.', ['Combinational.', 'Correct.', 'Combinational.', 'No.']),
          mcq('In the datapath + control model, the Zero flag of the ALU is:', ['a control signal sent to the datapath', 'a status signal sent from the datapath to control', 'a clock', 'an instruction field'], 1, 'Datapath reports status back to control.', ['Opposite direction.', 'Correct.', 'No.', 'No.'], 'From class slides')
        ],
        subjective: [sub('What is a finite state machine? Draw its general hardware block diagram and design the traffic-light controller as a Moore machine (state diagram + state table). (5 marks)', '<p>Definition (S, I, O, δ, λ). Block diagram D7.3a. Traffic light D7.3b with the state table; 2 FFs (binary encoding: G = 00, Y = 01, R = 10).</p>', 5, ['1 — definition', '2 — block diagram', '2 — traffic light'], ['D7.3a', 'D7.3b'])]
      },
      {
        id: '7.4', title: 'Moore vs Mealy Machines', badge: 'class', sources: '[RF] p4; [L08] p32',
        keywords: 'moore mealy output state input glitch one cycle',
        explain: '<div class="table-wrap"><table><tr><th>Moore</th><th>Mealy</th></tr><tr><td>Output depends on the STATE only</td><td>Output depends on STATE + INPUT</td></tr><tr><td>Output written inside each state circle (S1/1)</td><td>Output written on each arrow (in/out)</td></tr><tr><td>Changes only when the state changes</td><td>Can react to an input within the same cycle</td></tr><tr><td>Simpler to reason about, glitch-free</td><td>Output can glitch when the input glitches</td></tr><tr><td>May need more states</td><td>Often needs fewer states</td></tr><tr><td>Output appears one cycle after the input</td><td>Output appears in the same cycle as the input</td></tr></table></div>' +
          '<p><b>Rule of thumb:</b> Moore = “output in the circle”, Mealy = “output on the arrow”. Both compute the same things. Converting Mealy → Moore: split every state that is entered with different outputs into one copy per output value (that is why the 1011 Moore detector has one extra state).</p>',
        keypoints: ['Moore: λ(state). Mealy: λ(state, input).', 'Mealy: fewer states, same-cycle output, can glitch.', 'Moore: output one cycle later, glitch-free.', 'Mealy → Moore: split states by entering output.'],
        mistakes: ['Mixing notations (output in the circle AND on arrows).', 'Claiming Moore and Mealy detect different patterns — only the timing differs.'],
        practice: [
          mcq('Which statement about a Mealy machine is TRUE?', ['Its output depends only on the present state', 'Its output can change in the same cycle the input changes', 'It always needs more states than Moore', 'Its outputs are written inside state circles'], 1, 'Output = f(state, input).', ['Moore.', 'Correct.', 'Usually fewer.', 'Moore notation.'], 'From class slides'),
          match('Match each property with the machine type.', ['Output written on the arrows', 'Glitch-free output', 'Usually one extra state for a detector', 'Output in the same cycle as the input'], ['Moore', 'Mealy'], [1, 0, 0, 1], 'Moore = circle, registered timing; Mealy = arrow, combinational from input.'),
          mcq('A Mealy FSM\'s output is a glitchy pulse when the input bounces. The simplest fix that keeps the same logic is:', ['add more states', 'register the output (making it Moore-like)', 'remove the clock', 'use one-hot encoding'], 1, 'A flip-flop on the output removes glitches at the cost of one cycle delay.', ['Not necessary.', 'Correct.', 'No.', 'Does not fix output glitches.']),
          txt('Moore or Mealy: the output is a function of the present state only. Answer with one word.', ['Moore'], 'Moore.')
        ],
        subjective: [sub('Compare Moore and Mealy machines (any five points) with block diagrams. (5 marks)', '<p>Table above + D7.3a (Mealy arrow from inputs to output logic).</p>', 5, ['3 — five differences', '2 — diagrams'], ['D7.3a'])]
      },
      {
        id: '7.5', title: 'Worked Example: Sequence Detector 1011', badge: 'class', sources: '[FSM] p1-9 (Lab 8: all four builds + testbench); [RF] p22-24; [SP4] quiz 10',
        keywords: 'sequence detector 1011 mealy moore overlap non overlap state diagram verilog',
        explain: '<p><b>Idea:</b> each state remembers the <b>longest suffix of the input that is still a prefix of 1011</b>. S0 = nothing, S1 = “1”, S2 = “10”, S3 = “101”, (Moore S4 = “1011” seen).</p>' +
          '<p><b>Building the fall-back edges:</b> from S1 (“1”) on 1 → “11”: longest prefix suffix is “1” → stay S1. From S2 (“10”) on 0 → “100” → nothing → S0. From S3 (“101”) on 0 → “1010” → suffix “10” → S2. From S3 on 1 → match! With <b>overlap</b> the last “1” can start a new match → S1; <b>non-overlap</b> discards it → S0.</p>' +
          '<div class="grid2"><div><b>Q1 Mealy, overlap</b>' + tbl([['S0', 'S0 / 0', 'S1 / 0'], ['S1', 'S2 / 0', 'S1 / 0'], ['S2', 'S0 / 0', 'S3 / 0'], ['S3', 'S2 / 0', 'S1 / 1']]) + '</div><div><b>Q2 Mealy, non-overlap</b>' + tbl([['S0', 'S0 / 0', 'S1 / 0'], ['S1', 'S2 / 0', 'S1 / 0'], ['S2', 'S0 / 0', 'S3 / 0'], ['S3', 'S2 / 0', 'S0 / 1']]) + '</div>' +
          '<div><b>Q3 Moore, overlap</b>' + tbl([['S0', 'S0', 'S1', '0'], ['S1', 'S2', 'S1', '0'], ['S2', 'S0', 'S3', '0'], ['S3', 'S2', 'S4', '0'], ['S4', 'S2', 'S1', '1']], true) + '</div><div><b>Q4 Moore, non-overlap</b>' + tbl([['S0', 'S0', 'S1', '0'], ['S1', 'S2', 'S1', '0'], ['S2', 'S0', 'S3', '0'], ['S3', 'S2', 'S4', '0'], ['S4', 'S0', 'S1', '1']], true) + '</div></div>' +
          '<p><b>Shared stream 10110110</b> (bit 1 first): with overlap the pattern occurs at bits 1–4 and 4–7 → <b>2 matches</b>; without overlap → <b>1 match</b>. Mealy output pulses during the cycle bit 4 (and 7) is applied; Moore\'s pulse appears one cycle later (when the FSM is in S4). Moore S4\'s edges mirror S1 (overlap) or S0 (non-overlap). Encoding: Mealy 4 states → 2 FFs; Moore 5 states → 3 FFs binary, 5 FFs one-hot.</p>' +
          '<p>Context from the lab: framing patterns in telecom (DS1 uses 001011, SONET uses 11110110) are found by exactly this kind of detector.</p>',
        keypoints: ['Mealy 1011: 4 states; Moore: 5 states.', 'Overlap: S3 —1/1→ S1 (Mealy); S4 —0→ S2, —1→ S1 (Moore).', 'Non-overlap: S3 —1/1→ S0; S4 —0→ S0.', '10110110: overlap 2 matches, non-overlap 1.', 'Never reset to S0 after a match when overlap is allowed.'],
        diagrams: [{ id: 'D7.5a', title: 'Mealy 1011 detector, overlapping', svg: mealy(true), how: 'Four circles S0–S3 in a square; forward edges 1/0, 0/0, 1/0; fall-back edges; the amber S3 → S1 edge labelled 1/1.' },
          { id: 'D7.5b', title: 'Mealy 1011 detector, non-overlapping', svg: mealy(false), how: 'Same as overlap, only the matching edge changes to S3 → S0 (1/1).' },
          { id: 'D7.5c', title: 'Moore 1011 detector, overlapping (5 states)', svg: moore(true), how: 'Five circles; output written inside (S4 = 1); S4 on 1 → S1, on 0 → S2.' },
          { id: 'D7.5d', title: 'Moore 1011 detector, non-overlapping', svg: moore(false), how: 'Same as Moore overlap but S4 on 0 → S0.' }],
        code: [
          { id: 'C7.5a', title: 'mealy_overlap.v (Lab 8 Q1)', lang: 'verilog', src: 'module mealy_overlap (input wire clk, input wire rst, input wire in, output reg out);\n    localparam S0 = 2\'b00, S1 = 2\'b01, S2 = 2\'b10, S3 = 2\'b11;\n    reg [1:0] state, next_state;\n\n    always @(posedge clk or posedge rst)     // state register\n        if (rst) state <= S0;\n        else     state <= next_state;\n\n    always @(*) begin                         // next-state + output logic\n        next_state = S0;\n        out = 1\'b0;\n        case (state)\n            S0: next_state = in ? S1 : S0;\n            S1: next_state = in ? S1 : S2;\n            S2: next_state = in ? S3 : S0;\n            S3: if (in) begin\n                    next_state = S1;          // overlap: reuse the matching 1\n                    out = 1\'b1;               // Mealy: asserted this same cycle\n                end else\n                    next_state = S2;\n        endcase\n    end\nendmodule', io: '<pre>stream 1 0 1 1 0 1 1 0 → out high during bits 4 and 7 (2 matches)</pre>' },
          { id: 'C7.5b', title: 'mealy_nooverlap.v (Lab 8 Q2) — only the S3, in = 1 branch differs', lang: 'verilog', src: 'module mealy_nooverlap (input wire clk, input wire rst, input wire in, output reg out);\n    localparam S0 = 2\'b00, S1 = 2\'b01, S2 = 2\'b10, S3 = 2\'b11;\n    reg [1:0] state, next_state;\n    always @(posedge clk or posedge rst)\n        if (rst) state <= S0; else state <= next_state;\n    always @(*) begin\n        next_state = S0; out = 1\'b0;\n        case (state)\n            S0: next_state = in ? S1 : S0;\n            S1: next_state = in ? S1 : S2;\n            S2: next_state = in ? S3 : S0;\n            S3: if (in) begin next_state = S0; out = 1\'b1; end   // full reset\n                else        next_state = S2;\n        endcase\n    end\nendmodule', io: '<pre>stream 10110110 → out high only during bit 4 (1 match)</pre>' },
          { id: 'C7.5c', title: 'moore_overlap.v (Lab 8 Q3)', lang: 'verilog', src: 'module moore_overlap (input wire clk, input wire rst, input wire in, output wire out);\n    localparam S0 = 3\'d0, S1 = 3\'d1, S2 = 3\'d2, S3 = 3\'d3, S4 = 3\'d4;\n    reg [2:0] state, next_state;\n    always @(posedge clk or posedge rst)\n        if (rst) state <= S0; else state <= next_state;\n    always @(*) begin\n        case (state)\n            S0: next_state = in ? S1 : S0;\n            S1: next_state = in ? S1 : S2;\n            S2: next_state = in ? S3 : S0;\n            S3: next_state = in ? S4 : S2;\n            S4: next_state = in ? S1 : S2;     // mirrors S1\n            default: next_state = S0;\n        endcase\n    end\n    assign out = (state == S4);                 // pure function of state\nendmodule', io: '<pre>same 2 matches, each pulse one clock later than the Mealy version</pre>' },
          { id: 'C7.5d', title: 'moore_nooverlap.v (Lab 8 Q4)', lang: 'verilog', src: 'module moore_nooverlap (input wire clk, input wire rst, input wire in, output wire out);\n    localparam S0 = 3\'d0, S1 = 3\'d1, S2 = 3\'d2, S3 = 3\'d3, S4 = 3\'d4;\n    reg [2:0] state, next_state;\n    always @(posedge clk or posedge rst)\n        if (rst) state <= S0; else state <= next_state;\n    always @(*) begin\n        case (state)\n            S0: next_state = in ? S1 : S0;\n            S1: next_state = in ? S1 : S2;\n            S2: next_state = in ? S3 : S0;\n            S3: next_state = in ? S4 : S2;\n            S4: next_state = in ? S1 : S0;     // mirrors S0\n            default: next_state = S0;\n        endcase\n    end\n    assign out = (state == S4);\nendmodule', io: '<pre>1 match, one cycle after bit 4</pre>' },
          { id: 'C7.5e', title: 'tb_top — shared testbench (stream 10110110)', lang: 'verilog', src: 'module tb_top;\n    reg clk = 0, rst = 1, in;\n    wire out;\n    integer i;\n    reg [7:0] stream = 8\'b10110110;          // bit 1 = MSB, applied first\n    // instantiate one design, for example:\n    mealy_overlap dut (.clk(clk), .rst(rst), .in(in), .out(out));\n    always #5 clk = ~clk;\n    initial begin\n        rst = 1; in = 0;\n        @(negedge clk); rst = 0;\n        for (i = 7; i >= 0; i = i - 1) begin\n            in = stream[i];\n            @(negedge clk);                    // sample just after the clock edge\n            $display("t=%0t bit=%b out=%b", $time, in, out);\n        end\n        $finish;\n    end\nendmodule', io: '<pre>Moore builds: the printed out = 1 on the lines for bit 4 (and bit 7 with overlap), because\nthe state register has just entered S4.\nMealy builds: out is high BEFORE the edge (while bit 4 is applied in S3); by the time this\n$display runs the state has moved on, so view the pulse in GTKWave or print before the edge.</pre>' }],
        mistakes: ['Resetting to S0 after 1011 when overlap is allowed (the trailing 1 can start a new match).', 'Moore with only 4 states — the output needs its own state.', 'From S3 on 0 going to S0: “1010” ends in “10”, so go to S2.'],
        practice: [
          mcq('For the 1011 sequence detector (Moore, 5 states), how many flip-flops are needed under binary encoding versus one-hot encoding?', ['Binary: 2 FFs, One-Hot: 5 FFs', 'Binary: 3 FFs, One-Hot: 5 FFs', 'Binary: 5 FFs, One-Hot: 5 FFs', 'Binary: 3 FFs, One-Hot: 8 FFs'], 1, '⌈log₂ 5⌉ = 3; one FF per state = 5.', ['2 FFs give only 4 states.', 'Correct.', 'No.', 'No.'], 'Class quiz (L09-10 Q1)'),
          nat('How many times does an OVERLAPPING 1011 detector fire on the input 1011011?', 2, 0, 'Bits 1–4 and 4–7.', 'Lab question'),
          nat('How many times does a NON-overlapping 1011 detector fire on 1011011?', 1, 0, 'After the first match it restarts from S0; bits 5–7 are only 011.'),
          nat('Class exit ticket: trace the Mealy 1011 (overlap) detector on 101011. At which input bit (1 = first) does the output pulse?', 6, 0, 'States: S1, S2, S3, (bit 4 = 0) S2, S3, (bit 6 = 1) → 1/1. Only bit 6.', 'From class slides'),
          mcq('In the Mealy overlap detector, from S3 (“101” seen) the input 0 leads to:', ['S0', 'S1', 'S2', 'S3'], 2, '“1010” ends with “10” → S2.', ['Loses the “10”.', 'No.', 'Correct.', 'No.']),
          mcq('In the Moore overlap detector, S4\'s outgoing transitions mirror those of:', ['S0', 'S1', 'S2', 'S3'], 1, 'After a match the position is “just saw a 1”.', ['Non-overlap.', 'Correct.', 'No.', 'No.'], 'Lab question')
        ],
        subjective: [sub('Design a Moore and a Mealy FSM to detect the sequence 1011 (overlapping). Draw both state diagrams and state tables, and state how many flip-flops each needs. (5 marks)', '<p>Tables Q1 and Q3 above, diagrams D7.5a and D7.5c. Mealy 4 states (2 FFs), Moore 5 states (3 FFs binary). Moore output one cycle later.</p>', 5, ['2 — Mealy diagram + table', '2 — Moore diagram + table', '1 — FF count and overlap edge'], ['D7.5a', 'D7.5c'])]
      }
    ]
  });
})();
