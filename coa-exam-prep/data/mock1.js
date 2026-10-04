/* mock1.js — Mock Paper 1 (Units 1–13, 100 marks, 3 hours). Model pattern built by this site; not the official paper format. */
(function () {
  const { mcq, nat, match, sub } = window.QH;
  window.MOCKS = window.MOCKS || {};
  const id = (sec, n, q, marks, extra) => Object.assign(q, { id: 'm1.' + sec + n, marks: marks }, extra || {});
  const diag = (n, q, model, scheme, refs, draw, svg, unit) => ({ id: 'm1.F' + n, type: 'diag', marks: 5, tag: 'Mock diagram', unitLabel: unit, q: q, model: model, scheme: scheme, refs: refs || [], draw: draw, svg: svg });
  const ctl = (k) => '<div class="table-wrap"><table class="tt"><tr>' + ['Branch', 'MemtoReg', 'MemRead', 'MemWrite', 'ALUOp', 'ALUSrc', 'RegWrite', 'RegDst'].map((c) => '<th>' + c + '</th>').join('') + '</tr><tr>' + ['Branch', 'MemtoReg', 'MemRead', 'MemWrite', 'ALUOp', 'ALUSrc', 'RegWrite', 'RegDst'].map((c) => '<td>' + S.CONTROL[k][c] + '</td>').join('') + '</tr></table></div>';

  const A = [
    mcq('Which gate outputs 1 only when its two inputs differ?', ['AND', 'XNOR', 'XOR', 'NOR'], 2, 'XOR = A\'B + AB\'.', ['1 only when both are 1.', 'Outputs 1 when equal.', 'Correct.', '1 only when both are 0.'], 'Unit 1'),
    mcq('A + AB simplifies to:', ['AB', 'A', 'B', 'A + B'], 1, 'Absorption: A(1 + B) = A.', ['No.', 'Correct.', 'No.', 'That is A + A\'B.'], 'Unit 1'),
    mcq('F(A, B, C) = Σm(0, 2, 4, 6) minimises to:', ['A\'', 'B\'', 'C\'', 'A\'C\''], 2, 'All even minterms: C = 0 → quad covering the whole C\' half.', ['No.', 'No.', 'Correct.', 'Too small.'], 'Unit 2'),
    mcq('Minimum number of 2-input NAND gates needed to build a 2-input OR gate:', ['1', '2', '3', '4'], 2, 'OR = NAND(NAND(A,A), NAND(B,B)).', ['No.', 'That is AND.', 'Correct.', 'No.'], 'Unit 2'),
    mcq('How many select lines does an 8:1 multiplexer need?', ['2', '3', '4', '8'], 1, '2³ = 8.', ['4:1.', 'Correct.', '16:1.', 'No.'], 'Unit 3'),
    mcq('The carry-out of a full adder is:', ['A ⊕ B ⊕ Cin', 'AB + Cin(A ⊕ B)', 'A\'B + Cin', '(A + B)Cin\''], 1, 'Majority function; equivalently AB + BCin + ACin.', ['That is Sum.', 'Correct.', 'No.', 'No.'], 'Unit 3'),
    mcq('The 8-bit two\'s-complement representation of −1 is:', ['10000001', '11111110', '11111111', '00000001'], 2, 'Invert 00000001 → 11111110, add 1.', ['Sign-magnitude.', 'One\'s complement.', 'Correct.', '+1.'], 'Unit 4'),
    mcq('The range of a 6-bit two\'s-complement number is:', ['−31 to +31', '−32 to +31', '−64 to +63', '0 to 63'], 1, '−2⁵ to 2⁵ − 1.', ['Sign-magnitude.', 'Correct.', '7 bits.', 'Unsigned.'], 'Unit 4'),
    mcq('Signed overflow in two\'s-complement addition happens when:', ['there is a carry out of the MSB', 'two positive numbers give a negative result', 'a positive and a negative number are added', 'the result is zero'], 1, 'Same signs in, different sign out (V = C3 ⊕ C4).', ['That is unsigned carry.', 'Correct.', 'Never overflows.', 'No.'], 'Unit 4'),
    mcq('In a NOR SR latch, S = 1 and R = 0 gives:', ['Q = 0', 'Q = 1', 'hold', 'forbidden'], 1, 'Set.', ['Reset.', 'Correct.', 'S = R = 0.', 'S = R = 1.'], 'Unit 5'),
    mcq('A hold-time violation is fixed by:', ['slowing the clock', 'adding delay (buffers) to the short path', 'raising the supply voltage', 'removing the flip-flop'], 1, 'Hold depends only on minimum delays.', ['Does not help hold.', 'Correct.', 'No.', 'No.'], 'Unit 5'),
    mcq('A 3-bit ripple counter uses flip-flops with t_pd = 5 ns. Worst-case settling time:', ['5 ns', '10 ns', '15 ns', '40 ns'], 2, 'n × t_pd = 3 × 5.', ['One stage.', 'Two stages.', 'Correct.', 'No.'], 'Unit 6'),
    mcq('The read ports of a register file are built from:', ['decoders', 'multiplexers', 'shift registers', 'counters'], 1, 'One 32:1 MUX per read port.', ['Write port.', 'Correct.', 'No.', 'No.'], 'Unit 7'),
    mcq('In a Mealy machine the output depends on:', ['the present state only', 'the present state and the current input', 'the clock only', 'the next state only'], 1, 'λ(state, input).', ['Moore.', 'Correct.', 'No.', 'No.'], 'Unit 7'),
    mcq('Which statement about DRAM is TRUE?', ['its reads are non-destructive', 'it uses 6 transistors per bit', 'each cell must be refreshed periodically', 'it is used for L1 caches'], 2, 'Capacitor charge leaks.', ['Destructive.', 'SRAM.', 'Correct.', 'SRAM.'], 'Unit 8'),
    mcq('The main advantage of the Harvard architecture is:', ['one memory for code and data', 'simultaneous instruction fetch and data access', 'lower pin count', 'code can be treated as data'], 1, 'Two separate buses.', ['Von Neumann.', 'Correct.', 'More pins.', 'Von Neumann.'], 'Unit 9'),
    mcq('Which is a defining property of a RISC ISA?', ['memory operands in arithmetic instructions', 'variable-length instructions', 'load/store architecture', 'microcoded complex instructions'], 2, 'Only lw/sw touch memory.', ['CISC.', 'CISC.', 'Correct.', 'CISC.'], 'Unit 10'),
    mcq('Which MIPS registers must a called function preserve?', ['$t0–$t9', '$s0–$s7', '$a0–$a3', '$v0–$v1'], 1, 'Callee-saved.', ['Caller-saved.', 'Correct.', 'Arguments.', 'Return values.'], 'Unit 11'),
    mcq('How many bits wide is the address field of a MIPS J-format instruction?', ['16', '24', '26', '32'], 2, '32 − 6 opcode bits.', ['I-format immediate.', 'No.', 'Correct.', 'No.'], 'Unit 11'),
    mcq('In the single-cycle datapath, which control signal chooses between rt and rd as the destination register?', ['ALUSrc', 'RegDst', 'MemtoReg', 'RegWrite'], 1, 'RegDst MUX.', ['Second ALU operand.', 'Correct.', 'Write-back data.', 'Enable only.'], 'Unit 13')
  ].map((q, i) => id('A', i + 1, q, 1));

  const passages = [
    { id: 'p1', title: 'Passage 1 — a SIPO shift register', unit: '6', html: '<p>A 4-bit serial-in parallel-out register shifts on every rising edge: the new bit enters q[0] and each bit moves one place toward q[3] (<code>q &lt;= {q[2:0], d_in}</code>). It starts at 0000 after reset. The bits 1, 1, 0, 1 arrive on four consecutive edges, then a 0 arrives on a fifth edge.</p>' },
    { id: 'p2', title: 'Passage 2 — lw on the single-cycle datapath', unit: '11 + 13', html: '<p>The instruction <code>lw $s0, 8($sp)</code> executes on the single-cycle MIPS datapath. Before it runs, $sp = 0x7FFFEFF8 and the word at address 0x7FFFF000 holds the value 25.</p>' }
  ];
  const B = [
    mcq('After the first four edges, q[3:0] is:', ['1011', '1101', '0111', '1110'], 1, 'q: 0001, 0011, 0110, 1101.', ['Reversed order.', 'Correct.', 'No.', 'No.']),
    mcq('After the fifth edge (input 0), q[3:0] is:', ['1010', '0110', '1101', '0101'], 0, '{101, 0} = 1010; the oldest 1 leaves q[3].', ['Correct.', 'No.', 'Unchanged — no.', 'Shifted the wrong way.']),
    mcq('Which application uses exactly this kind of register?', ['UART transmitter', 'UART receiver', 'ring counter', 'delay-free buffer'], 1, 'Serial line → parallel byte.', ['That is PISO.', 'Correct.', 'No.', 'PIPO.']),
    mcq('What address does the ALU compute?', ['0x7FFFEFF8', '0x7FFFF000', '0x7FFFF008', '0x00000008'], 1, '0x7FFFEFF8 + 8 = 0x7FFFF000.', ['Base only.', 'Correct.', 'Added 16.', 'Offset only.']),
    mcq('Which value is written into $s0, and by which MemtoReg setting?', ['25, MemtoReg = 1', '0x7FFFF000, MemtoReg = 0', '25, MemtoReg = 0', '8, MemtoReg = X'], 0, 'Memory data → register.', ['Correct.', 'That would be the address.', 'Wrong MUX input.', 'No.']),
    mcq('The machine code of lw $s0, 8($sp) is:', ['0x8FB00008', '0x8E1D0008', '0xAFB00008', '0x23B00008'], 0, '100011 11101 10000 0000000000001000.', ['Correct.', 'rs and rt swapped.', 'That is sw.', 'That is addi.'])
  ].map((q, i) => id('B', i + 1, q, 2, { passage: i < 3 ? 'p1' : 'p2' }));

  const C = [
    nat('Decimal value of the 8-bit two\'s-complement number 10110100?', -76, 0, '−128 + 32 + 16 + 4 = −76.', 'Unit 4'),
    nat('Minimum number of 2-input NAND gates needed to build a 2-input XOR?', 4, 0, 'Classic 4-NAND XOR.', 'Unit 2'),
    nat('t_pcq = 50 ps, worst combinational delay 300 ps, t_setup = 50 ps. Maximum clock frequency in GHz?', 2.5, 0.01, 'T = 400 ps.', 'Unit 5', 'GHz'),
    nat('Minimum number of flip-flops for a mod-20 counter?', 5, 0, '⌈log₂ 20⌉ = 5.', 'Unit 6'),
    nat('A DRAM bank has 16384 rows and a 64 ms retention time. Per-row refresh interval in µs (2 decimals)?', 3.91, 0.01, '64 ms / 16384 = 3.906 µs.', 'Unit 8', 'µs'),
    nat('A 2 GHz Von Neumann CPU fetches a 32-bit instruction and a 32-bit data word each cycle. Required bus bandwidth in GB/s?', 16, 0, '64 bits × 2e9 / 8.', 'Unit 9', 'GB/s'),
    nat('A beq at address 0x00400100 branches to 0x004000F0. What is its 16-bit immediate (decimal)?', -5, 0, '(0x004000F0 − 0x00400104) / 4 = −20 / 4.', 'Unit 11'),
    nat('Single-cycle delays: instruction memory 250, register read 150, ALU 200, data memory 250, register write 150 ps. Clock period in ps?', 1000, 0, 'lw uses all five.', 'Unit 13', 'ps')
  ].map((q, i) => id('C', i + 1, q, 2));

  const D = [
    match('Match each MIPS register with its number.', ['$zero', '$a0', '$t0', '$sp', '$ra'], ['31', '29', '8', '4', '0'], [4, 3, 2, 1, 0], '$zero 0, $a0 4, $t0 8, $sp 29, $ra 31.', 'Unit 11'),
    match('Match each property with the memory technology.', ['6-transistor cell', '1 transistor + 1 capacitor', 'needs periodic refresh', 'non-destructive read', 'used for L1 cache'], ['SRAM', 'DRAM'], [0, 1, 1, 0, 0], 'From the SRAM vs DRAM table.', 'Unit 8')
  ].map((q, i) => id('D', i + 1, q, 4));

  const E = [
    sub('Minimise F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10) using a K-map and implement the result using only NAND gates. (6 marks)',
      '<p><b>Groups:</b> four corners m0, m2, m8, m10 → <b>B\'D\'</b>; m0, m1, m8, m9 (B = 0, C = 0) → <b>B\'C\'</b>; m1, m5 (A = 0, C = 0, D = 1) → <b>A\'C\'D</b>.</p><p><b>F = B\'D\' + B\'C\' + A\'C\'D</b> (checked against all 16 rows).</p><p><b>NAND-only:</b> SOP → NAND–NAND: first level three NANDs (B\'·D\'), (B\'·C\'), (A\'·C\'·D) with complemented inputs from NAND inverters (NAND(x, x)); second level one 3-input NAND of their outputs.</p>',
      6, ['1 — K-map filled correctly', '2 — three correct groups incl. corners', '1 — final expression', '2 — NAND–NAND circuit'], ['D2.3d', 'D2.5a']),
    sub('Draw a 4-bit adder–subtractor with overflow detection. Compute 0110 − 1101 (two\'s complement) and state the overflow flag. (6 marks)',
      '<p>Each B<sub>i</sub> passes through an XOR with M; M also drives C<sub>in</sub>. M = 1 → A + B\' + 1 = A − B. Overflow V = C3 ⊕ C4.</p><p>0110 − 1101: B\' = 0010, A + B\' + 1 = 0110 + 0010 + 1 = <b>1001</b>. Interpreted as signed: 6 − (−3) = +9, which does not fit in 4 bits; the result 1001 reads as −7. C3 = 1, C4 = 0 → <b>V = 1 (overflow)</b>.</p>',
      6, ['2 — circuit', '1 — role of M', '2 — calculation', '1 — overflow flag with reason'], ['D4.5a', 'D4.6a']),
    sub('Translate into MIPS (A base in $s0, n in $s1, max in $s2, assume n ≥ 1): <code>max = A[0]; for (i = 1; i &lt; n; i++) if (A[i] &gt; max) max = A[i];</code> Explain how the condition is reversed. (6 marks)',
      '<pre>      lw   $s2, 0($s0)      # max = A[0]\n      li   $t0, 1           # i = 1\nLoop: slt  $t1, $t0, $s1     # i < n ?\n      beq  $t1, $zero, End\n      sll  $t2, $t0, 2       # 4i\n      add  $t2, $t2, $s0     # &A[i]\n      lw   $t3, 0($t2)       # A[i]\n      slt  $t4, $s2, $t3     # max < A[i] ?\n      beq  $t4, $zero, Skip  # reversed: skip if NOT (A[i] > max)\n      move $s2, $t3\nSkip: addi $t0, $t0, 1\n      j    Loop\nEnd:</pre><p>“if (A[i] &gt; max)” becomes slt with swapped operands (max &lt; A[i]) and a branch AWAY on the flag being 0.</p>',
      6, ['1 — init', '1 — loop test', '2 — address calculation and load', '1 — reversed comparison', '1 — increment and jump'], ['D12.3a']),
    sub('Design a 3-bit synchronous up-counter using D flip-flops: state table, next-state equations and circuit. (6 marks)',
      '<p>Next state = present + 1. With D flip-flops D = Q⁺: <b>D0 = Q0\'</b>, <b>D1 = Q1 ⊕ Q0</b>, <b>D2 = Q2 ⊕ (Q1·Q0)</b> (each bit toggles when all lower bits are 1). State table: 000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000.</p><p>Circuit: three D FFs on one clock; an inverter on Q0, an XOR for D1, an AND (Q1Q0) feeding an XOR with Q2 for D2.</p>',
      6, ['2 — state table', '2 — equations', '2 — circuit'], ['D6.4a', 'D6.3b'])
  ].map((q, i) => id('E', i + 1, q, 6, { tag: 'Mock subjective' }));

  const mealy110 = S.fsm({ w: 460, h: 220, r: 26, title: 'Mealy 110 detector (overlap)', states: [{ id: 'a', x: 70, y: 120, l: 'S0', init: 'left' }, { id: 'b', x: 230, y: 120, l: 'S1' }, { id: 'c', x: 390, y: 120, l: 'S2' }],
    edges: [{ f: 'a', t: 'a', l: '0/0', loop: 'top' }, { f: 'a', t: 'b', l: '1/0', bend: -0.15 }, { f: 'b', t: 'a', l: '0/0', bend: -0.15 }, { f: 'b', t: 'c', l: '1/0' }, { f: 'c', t: 'c', l: '1/0', loop: 'top' }, { f: 'c', t: 'a', l: '0/1', bend: 0.3, cls: 'amber' }] });

  const F = [
    diag(1, '<b>addi $t0, $t1, −4</b> — trace the instruction on the single-cycle datapath and fill the control signals (Branch, MemtoReg, MemRead, MemWrite, ALUOp, ALUSrc, RegWrite, RegDst).',
      ctl('addi') + '<p>Encoding 001000 01001 01000 1111111111111100 = 0x2128FFFC. rs = $t1 → Read data 1; the immediate 0xFFFC is sign-extended to −4 and selected by ALUSrc = 1; ALUOp = 00 (add); the ALU result skips memory (MemRead = MemWrite = 0) and passes MemtoReg = 0 to Write data; the destination is rt → RegDst = 0; RegWrite = 1; Branch = 0.</p>',
      ['1 — fetch path', '1 — immediate path through sign-extend and ALUSrc', '1 — write-back path (MemtoReg 0, RegDst 0)', '2 — control row'], [], '<p>Darken the lw path but stop at the ALU result and route it straight to the MemtoReg MUX input 0.</p>', S.datapath({ path: 'addi', title: 'addi $t0, $t1, −4' }), '13'),
    diag(2, 'Draw the state diagram and state table of a Mealy machine that outputs 1 when it detects the sequence <b>110</b> (overlapping allowed).',
      '<div class="table-wrap"><table class="tt"><tr><th>State</th><th>in = 0</th><th>in = 1</th></tr><tr><td>S0 (nothing)</td><td>S0 / 0</td><td>S1 / 0</td></tr><tr><td>S1 (“1”)</td><td>S0 / 0</td><td>S2 / 0</td></tr><tr><td>S2 (“11”)</td><td>S0 / 1</td><td>S2 / 0</td></tr></table></div><p>From S2 a further 1 keeps “11” (self-loop). After a match (“110”) no suffix is a prefix of 110 → back to S0. 3 states → 2 flip-flops.</p>',
      ['2 — states with meanings', '2 — all six transitions with in/out labels', '1 — table and FF count'], [], '<p>Three circles in a row; forward edges 1/0, 1/0; fall-back edges labelled with in/out; the matching edge S2 —0/1→ S0.</p>', mealy110, '7'),
    diag(3, 'Draw the 6T SRAM cell and explain how a stored bit is read. Why is the read non-destructive?',
      '<p>Two cross-coupled inverters (4 transistors) hold Q and Q\'; access transistors M5 and M6, gated by the word line, connect them to BL and BL\'. Read: precharge both bit lines high, raise WL, the side storing 0 pulls its bit line slightly low, a sense amplifier detects the difference. The latch actively drives its nodes, so it keeps its value — non-destructive (unlike DRAM\'s charge sharing).</p>',
      ['2 — labelled cell', '2 — read steps', '1 — non-destructive reason'], ['D8.2a'], '<p>Bit lines left and right, word line across the top, inverter loop in the middle, one access transistor on each side.</p>', null, '8'),
    diag(4, 'Draw a 4:1 multiplexer using gates and use it to implement F(A, B, C) = Σm(0, 3, 5, 6) with A, B on the select lines.',
      '<p>Y = S1\'S0\'I0 + S1\'S0I1 + S1S0\'I2 + S1S0I3. With S1 = A, S0 = B: AB = 00 → m0 only (C = 0) → I0 = C\'; AB = 01 → m3 (C = 1) → I1 = C; AB = 10 → m5 (C = 1) → I2 = C; AB = 11 → m6 (C = 0) → I3 = C\'. (F = A ⊕ B ⊕ C\', the 3-input XNOR.)</p>',
      ['2 — gate-level 4:1 MUX', '2 — four data inputs', '1 — check'], ['D3.2c'], '<p>Four AND gates into one OR; write each select minterm on its AND; data inputs C\' C C C\' on the left.</p>', null, '3')
  ];

  window.MOCKS[1] = {
    title: 'Mock Paper 1 — Units 1 to 13',
    minutes: 180,
    instructions: '<div class="card"><p><b>Time: 3 hours · Maximum marks: 100.</b> Section A: 20 × 1 · Section B: 6 × 2 · Section C: 8 × 2 · Section D: 2 × 4 · Section E: 4 × 6 · Section F: 4 × 5. Sections A–D are auto-scored when you press Submit; write E and F on paper, then reveal the model answers and mark yourself with the scheme.</p><p class="hint">This is a model paper built from the course files; the real paper\'s pattern was not in the folder. Scope: Units 1–13 (Units 14–15 are bonus).</p></div>',
    passages: passages,
    sections: { A: A, B: B, C: C, D: D, E: E, F: F }
  };
})();
