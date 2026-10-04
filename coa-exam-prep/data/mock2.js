/* mock2.js — Mock Paper 2 (Units 1–13, 100 marks, 3 hours). Model pattern built by this site; not the official paper format. */
(function () {
  const { mcq, nat, match, sub } = window.QH;
  window.MOCKS = window.MOCKS || {};
  const id = (sec, n, q, marks, extra) => Object.assign(q, { id: 'm2.' + sec + n, marks: marks }, extra || {});
  const diag = (n, q, model, scheme, refs, draw, svg, unit) => ({ id: 'm2.F' + n, type: 'diag', marks: 5, tag: 'Mock diagram', unitLabel: unit, q: q, model: model, scheme: scheme, refs: refs || [], draw: draw, svg: svg });
  const SG = ['Branch', 'MemtoReg', 'MemRead', 'MemWrite', 'ALUOp', 'ALUSrc', 'RegWrite', 'RegDst'];
  const ctl = (k) => '<div class="table-wrap"><table class="tt"><tr>' + SG.map((c) => '<th>' + c + '</th>').join('') + '</tr><tr>' + SG.map((c) => '<td>' + S.CONTROL[k][c] + '</td>').join('') + '</tr></table></div>';

  const A = [
    mcq('By De Morgan\'s theorem, (A + B)\' equals:', ['A\' + B\'', 'A\'B\'', 'AB', '(AB)\''], 1, 'Break the bar, change the sign.', ['That is (AB)\'.', 'Correct.', 'No.', 'No.'], 'Unit 2'),
    mcq('For variables A, B, C, the maxterm M3 is:', ['A\'BC', 'A + B\' + C\'', 'A + B + C', 'A\' + B + C'], 1, 'M3 = 011 → a 0 gives the plain variable, a 1 its complement.', ['That is minterm m3.', 'Correct.', 'M0.', 'M4.'], 'Unit 2'),
    mcq('A don\'t-care (X) cell in a K-map:', ['must be grouped as 1', 'must be left out', 'may be treated as 1 or 0, whichever gives larger groups', 'forces the function to 0'], 2, 'Use it only if it helps.', ['No.', 'No.', 'Correct.', 'No.'], 'Unit 2'),
    mcq('How many AND gates are inside a 4-to-16 decoder?', ['4', '8', '16', '32'], 2, 'One per output (minterm).', ['No.', 'No.', 'Correct.', 'No.'], 'Unit 3'),
    mcq('The Sum output of a half adder is:', ['A·B', 'A + B', 'A ⊕ B', '(A ⊕ B)\''], 2, 'Carry = AB.', ['Carry.', 'No.', 'Correct.', 'XNOR.'], 'Unit 3'),
    mcq('Sign-extending the 8-bit value 0xF4 to 16 bits gives:', ['0x00F4', '0xFFF4', '0xF400', '0x0F4F'], 1, 'MSB is 1 → fill with 1s.', ['Zero extension.', 'Correct.', 'Shift.', 'No.'], 'Unit 4'),
    mcq('A disadvantage shared by sign-magnitude and one\'s-complement representations is:', ['no negative numbers', 'two representations of zero', 'no sign bit', 'range larger than two\'s complement'], 1, '+0 and −0.', ['No.', 'Correct.', 'No.', 'No.'], 'Unit 4'),
    mcq('A gated D latch is transparent when:', ['EN = 0', 'EN = 1', 'a rising edge arrives', 'D = Q'], 1, 'Q follows D while EN = 1.', ['Holds.', 'Correct.', 'Flip-flop.', 'No.'], 'Unit 5'),
    mcq('The standard way to reduce metastability failures from an asynchronous input is:', ['a faster clock', 'a 2–3 flip-flop synchronizer', 'removing the reset', 'a latch instead of a flip-flop'], 1, 'Gives the first FF a full period to resolve.', ['Worse.', 'Correct.', 'No.', 'No.'], 'Unit 5'),
    mcq('How many distinct states does a 3-bit Johnson counter have?', ['3', '6', '7', '8'], 1, '2n.', ['Ring.', 'Correct.', 'LFSR.', 'Binary.'], 'Unit 6'),
    mcq('Which shift-register type is used in a UART transmitter?', ['SISO', 'SIPO', 'PISO', 'PIPO'], 2, 'Parallel byte → serial line.', ['No.', 'Receiver.', 'Correct.', 'No.'], 'Unit 6'),
    mcq('An FSM has 9 states. How many flip-flops does binary encoding need?', ['3', '4', '9', '5'], 1, '⌈log₂ 9⌉ = 4.', ['Only 8 states.', 'Correct.', 'One-hot.', 'No.'], 'Unit 7'),
    mcq('How many transistors are in one standard SRAM cell?', ['1', '4', '6', '8'], 2, '4 (latch) + 2 (access).', ['DRAM.', 'Latch only.', 'Correct.', 'Dual-port variant.'], 'Unit 8'),
    mcq('Who coined the term “von Neumann bottleneck”?', ['John von Neumann', 'Alan Turing', 'John Backus', 'Gordon Moore'], 2, '1977 Turing lecture.', ['No.', 'No.', 'Correct.', 'No.'], 'Unit 9'),
    mcq('x86 instructions are:', ['fixed 32 bits', 'variable length, 1 to 15 bytes', 'always 2 bytes', 'fixed 64 bits'], 1, 'CISC variable length.', ['RISC.', 'Correct.', 'No.', 'No.'], 'Unit 10'),
    mcq('The funct field of the MIPS sub instruction is:', ['0x20', '0x22', '0x24', '0x2A'], 1, 'add 0x20, sub 0x22, and 0x24, slt 0x2A.', ['add.', 'Correct.', 'and.', 'slt.'], 'Unit 11'),
    mcq('Which of these is a MIPS pseudo-instruction (not a real machine instruction)?', ['addi', 'slt', 'move', 'lw'], 2, 'move → addu rd, $zero, rs.', ['Real.', 'Real.', 'Correct.', 'Real.'], 'Unit 11'),
    mcq('What does jal Label do?', ['saves PC + 4 in $ra and jumps', 'pushes $ra and jumps', 'jumps to $ra', 'saves PC in $sp'], 0, 'Jump and link.', ['Correct.', 'Software does that.', 'That is jr $ra.', 'No.'], 'Unit 12'),
    mcq('For beq on the single-cycle datapath, ALUOp is:', ['00', '01', '10', 'XX'], 1, 'Subtract to compare.', ['lw/sw.', 'Correct.', 'R-type.', 'Never X for beq.'], 'Unit 13'),
    mcq('Which instruction class sets the clock period of the single-cycle datapath?', ['R-type', 'beq', 'lw', 'j'], 2, 'Longest path.', ['No.', 'No.', 'Correct.', 'No.'], 'Unit 13')
  ].map((q, i) => id('A', i + 1, q, 1));

  const passages = [
    { id: 'p1', title: 'Passage 1 — a 4-bit adder–subtractor', unit: '4', html: '<p>A 4-bit adder–subtractor computes A + (B ⊕ M) + M, where M = 1 selects subtraction. It is given A = 0101 and B = 0110 with M = 1. The flags are C (carry out of the MSB, C4) and V = C3 ⊕ C4.</p>' },
    { id: 'p2', title: 'Passage 2 — a MIPS loop', unit: '12', html: '<pre>      li   $t0, 0\n      li   $t1, 0\nLoop: slti $t2, $t0, 5\n      beq  $t2, $zero, End\n      add  $t1, $t1, $t0\n      addi $t0, $t0, 2\n      j    Loop\nEnd:</pre>' }
  ];
  const B = [
    mcq('The 4-bit result is:', ['0001', '1111', '1011', '0111'], 1, '0101 + 1001 + 1 = 1111 = −1.', ['That is B − A.', 'Correct.', 'No.', 'No.']),
    mcq('The overflow flag V is:', ['0, because the true result −1 fits in 4 bits', '1, because the result is negative', '1, because C4 = 0', 'undefined'], 0, 'C3 = 0, C4 = 0.', ['Correct.', 'Negative is fine.', 'C4 alone is the unsigned flag.', 'No.']),
    mcq('Treating A and B as unsigned, what does C4 = 0 indicate for this subtraction?', ['no borrow (A ≥ B)', 'a borrow occurred (A < B)', 'signed overflow', 'the result is zero'], 1, 'In A + B\' + 1, carry = NOT borrow.', ['Opposite.', 'Correct.', 'That is V.', 'No.']),
    mcq('Final value of $t1:', ['6', '10', '4', '0'], 0, 'i = 0, 2, 4 → 0 + 2 + 4.', ['Correct.', 'That would be i = 0 to 4 step 1.', 'No.', 'No.']),
    mcq('How many times does the beq instruction execute?', ['3', '4', '5', '6'], 1, 'Tests at $t0 = 0, 2, 4, 6.', ['Misses the exit test.', 'Correct.', 'No.', 'No.']),
    mcq('Which C code does the fragment implement?', ['for (i = 0; i <= 5; i += 2) sum += i;', 'for (i = 0; i < 5; i += 2) sum += i;', 'while (i != 5) { sum += i; i += 2; }', 'for (i = 0; i < 5; i++) sum += 2 * i;'], 1, 'slti tests i < 5; step 2.', ['<= would need slti with 6.', 'Correct.', 'Infinite loop.', 'No.'])
  ].map((q, i) => id('B', i + 1, q, 2, { passage: i < 3 ? 'p1' : 'p2' }));

  const C = [
    nat('Decimal value of 0x3C?', 60, 0, '3 × 16 + 12.', 'Unit 4'),
    nat('How many minterms are 1 in F(A, B, C) = A + B\'C?', 5, 0, 'A = 1 gives 4; A = 0, B = 0, C = 1 gives 1.', 'Unit 2'),
    nat('A ring oscillator has 7 inverters of 10 ps each. Oscillation frequency in GHz (2 decimals)?', 7.14, 0.01, 'T = 2 × 7 × 10 ps = 140 ps.', 'Unit 5', 'GHz'),
    nat('A 12-bit ripple counter has t_pd = 2 ns per flip-flop. Maximum clock frequency in MHz (2 decimals)?', 41.67, 0.05, '1 / 24 ns.', 'Unit 6', 'MHz'),
    nat('Total number of storage bits in a 64 × 32-bit register file?', 2048, 0, '64 × 32.', 'Unit 7'),
    nat('Cache hit time 1 ns, miss rate 4 %, miss penalty 100 ns. AMAT in ns?', 5, 0, '1 + 0.04 × 100.', 'Unit 8', 'ns'),
    nat('The instruction word 0x2108FFFC is an addi. What immediate value (decimal) does it add?', -4, 0, '0xFFFC sign-extended.', 'Unit 11'),
    nat('A program runs 5 million instructions with CPI 1.2 on a 2 GHz clock. CPU time in ms?', 3, 0, '5e6 × 1.2 × 0.5 ns.', 'Unit 10', 'ms')
  ].map((q, i) => id('C', i + 1, q, 2));

  const D = [
    match('Match each instruction with its MIPS format.', ['add', 'lw', 'j', 'beq', 'jal', 'sll'], ['R-format', 'I-format', 'J-format'], [0, 1, 2, 1, 2, 0], 'Shifts are R-type; branches and memory ops are I-type.', 'Unit 11'),
    match('Match each datapath MUX with what it selects.', ['RegDst', 'ALUSrc', 'MemtoReg', 'PCSrc'], ['memory data or ALU result for write-back', 'rd or rt as the write register', 'branch target or PC + 4', 'sign-extended immediate or Read data 2'], [1, 3, 0, 2], 'Single-cycle datapath MUXes.', 'Unit 13')
  ].map((q, i) => id('D', i + 1, q, 4));

  const E = [
    sub('Design a full adder: truth table, Boolean expressions and its implementation using two half adders. What limits the speed of a 32-bit ripple-carry adder? (6 marks)',
      '<p>Sum = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B). HA1(A, B) → S1 = A ⊕ B, C1 = AB; HA2(S1, Cin) → Sum, C2 = S1·Cin; Cout = C1 + C2 (C1 and C2 are never both 1). In a ripple-carry adder each stage waits for the previous carry, so delay grows linearly (about 2 gate delays per bit, 64 for 32 bits); carry-lookahead (G = AB, P = A ⊕ B) fixes it.</p>',
      6, ['1 — truth table', '1 — expressions', '2 — two-HA circuit', '2 — ripple delay explanation'], ['D3.5a', 'D3.5b', 'D3.5c']),
    sub('Compare SRAM and DRAM (six points). A DRAM chip has 8192 rows refreshed every 64 ms and each row refresh takes 60 ns; what fraction of time is spent refreshing? (6 marks)',
      '<p>Table: 6T vs 1T1C; low vs high density; few ns vs 50–100 ns; no refresh vs refresh; non-destructive vs destructive read; high vs low cost per bit; caches vs main memory.</p><p>Per-row interval = 64 ms / 8192 = 7.8125 µs; busy fraction = 60 ns / 7.8125 µs = <b>0.77 %</b> (equivalently 8192 × 60 ns = 0.49 ms per 64 ms).</p>',
      6, ['4 — six-point comparison', '2 — refresh calculation'], ['D8.2a', 'D8.3a']),
    sub('Write a recursive MIPS function for <code>int sum(int n) { if (n == 0) return 0; return n + sum(n - 1); }</code>. Show what is saved on the stack and why. (6 marks)',
      '<pre>sum:  addi $sp, $sp, -8\n      sw   $ra, 4($sp)        # non-leaf: jal will overwrite $ra\n      sw   $a0, 0($sp)        # n is needed after the call\n      bne  $a0, $zero, rec\n      li   $v0, 0             # base case\n      j    done\nrec:  addi $a0, $a0, -1\n      jal  sum                # $v0 = sum(n - 1)\n      lw   $a0, 0($sp)        # restore n\n      add  $v0, $a0, $v0      # n + sum(n - 1)\ndone: lw   $ra, 4($sp)\n      addi $sp, $sp, 8\n      jr   $ra</pre><p>Each call pushes an 8-byte frame ($ra, n); sum(3) peaks at 4 frames (n = 3, 2, 1, 0) and returns 6.</p>',
      6, ['1 — prologue', '1 — base case', '2 — recursive call and combine', '1 — epilogue', '1 — explanation of saved registers'], ['D12.5a', 'D12.5b']),
    sub('Explain the Von Neumann bottleneck and how the Harvard and modified-Harvard architectures address it. Give one real processor of each kind. (6 marks)',
      '<p>One memory and bus shared by instructions and data → fetch and data access take turns; the CPU outpaces the bus (Backus 1977). Harvard: separate instruction and data memories and buses → both in one cycle (ATmega328, DSPs). Modified Harvard: split L1-I/L1-D caches over unified L2/L3 and DRAM (x86-64, ARM Cortex-M4) — Harvard speed inside, Von Neumann flexibility outside.</p>',
      6, ['2 — bottleneck', '2 — Harvard', '1 — modified Harvard', '1 — examples'], ['D9.3a', 'D9.4a', 'D9.5a'])
  ].map((q, i) => id('E', i + 1, q, 6, { tag: 'Mock subjective' }));

  const moore101 = S.fsm({ w: 560, h: 240, r: 28, title: 'Moore 101 detector (overlap) — output in the circle', states: [{ id: '0', x: 70, y: 130, l: 'S0', o: 'out 0', init: 'left' }, { id: '1', x: 210, y: 130, l: 'S1', o: 'out 0' }, { id: '2', x: 350, y: 130, l: 'S2', o: 'out 0' }, { id: '3', x: 490, y: 130, l: 'S3', o: 'out 1', acc: true }],
    edges: [{ f: '0', t: '0', l: '0', loop: 'top' }, { f: '0', t: '1', l: '1' }, { f: '1', t: '1', l: '1', loop: 'top' }, { f: '1', t: '2', l: '0', bend: 0.15 }, { f: '2', t: '0', l: '0', bend: -0.35 }, { f: '2', t: '3', l: '1', bend: 0.15 }, { f: '3', t: '2', l: '0', bend: 0.15 }, { f: '3', t: '1', l: '1', bend: 0.35, cls: 'amber' }] });

  const F = [
    diag(1, '<b>sub $s0, $s1, $s2</b> — trace the R-type instruction on the single-cycle datapath, fill the control signals and give the 4-bit ALU control input.',
      ctl('R') + '<p>Encoding 000000 10001 10010 10000 00000 100010 = 0x02328022. rs = $s1 and rt = $s2 are read; ALUSrc = 0 sends Read data 2 to the ALU; ALUOp = 10 makes ALU control read funct 100010 → <b>0110 (subtract)</b>; MemtoReg = 0 returns the ALU result; rd = $s0 via RegDst = 1; RegWrite = 1; no memory access, Branch = 0.</p>',
      ['1 — fetch path', '1 — register reads and ALU', '1 — write-back to rd', '1 — control row', '1 — ALU control 0110'], [], '<p>Darken PC → instruction memory, both register reads, the ALU, the MemtoReg input 0 and the rd path through RegDst input 1.</p>', S.datapath({ path: 'R', title: 'sub $s0, $s1, $s2' }), '13'),
    diag(2, 'Draw the internal organisation of a register file with 4 registers of 32 bits, one write port and two read ports. Label the decoder, write enable and MUX select widths.',
      '<p>Write: 2-bit write address → 2-to-4 decoder; each output AND RegWrite → load enable of R0–R3; 32-bit write data to all four. Read: two 4:1 MUXes (32 bits wide) with 2-bit selects Read reg 1 and Read reg 2. Reads combinational, writes on the rising edge (portal register_file problem).</p>',
      ['2 — write port', '2 — read ports', '1 — widths and timing'], ['D7.2a', 'D7.2b', 'D7.2c'], '<p>Same drawing as the 32-register file, with a 2-to-4 decoder and 4:1 MUXes.</p>', null, '7'),
    diag(3, 'Draw a Moore state diagram that outputs 1 when the input sequence <b>101</b> has just been received (overlapping allowed). Give its state table.',
      '<div class="table-wrap"><table class="tt"><tr><th>State</th><th>in = 0</th><th>in = 1</th><th>out</th></tr><tr><td>S0</td><td>S0</td><td>S1</td><td>0</td></tr><tr><td>S1 (“1”)</td><td>S2</td><td>S1</td><td>0</td></tr><tr><td>S2 (“10”)</td><td>S0</td><td>S3</td><td>0</td></tr><tr><td>S3 (“101”)</td><td>S2</td><td>S1</td><td>1</td></tr></table></div><p>Overlap: after 101 the trailing 1 can start a new match → S3 on 1 goes to S1, on 0 (“1010”, suffix “10”) to S2. 4 states → 2 flip-flops.</p>',
      ['2 — four states with outputs', '2 — transitions incl. overlap edges', '1 — table'], [], '<p>Four circles in a row with “out” written inside; S3 is the only output-1 state.</p>', moore101, '7'),
    diag(4, 'Explain the master–slave D flip-flop with a neat diagram and sketch Q for a given CLK and D.',
      '<p>Two D latches in series on opposite clock phases. Master transparent while CLK = 0, slave holds; at the rising edge the master closes and the slave passes its captured value → Q changes only at the edge (positive-edge FF). The class slide enables the master on CLK = 1, giving a falling-edge FF. On the waveform, mark each active edge and copy D\'s value there until the next edge.</p>',
      ['2 — two latches and inverted clock', '1 — operation', '2 — waveform'], ['D5.4c', 'D5.4e'], '<p>Two latch boxes, clock to one through an inverter; three waveform rows with dashed edge lines.</p>', null, '5')
  ];

  window.MOCKS[2] = {
    title: 'Mock Paper 2 — Units 1 to 13',
    minutes: 180,
    instructions: '<div class="card"><p><b>Time: 3 hours · Maximum marks: 100.</b> Section A: 20 × 1 · Section B: 6 × 2 · Section C: 8 × 2 · Section D: 2 × 4 · Section E: 4 × 6 · Section F: 4 × 5. Sections A–D are auto-scored when you press Submit; write E and F on paper, then reveal the model answers and mark yourself with the scheme.</p><p class="hint">This is a model paper built from the course files; the real paper\'s pattern was not in the folder. Scope: Units 1–13 (Units 14–15 are bonus).</p></div>',
    passages: passages,
    sections: { A: A, B: B, C: C, D: D, E: E, F: F }
  };
})();
