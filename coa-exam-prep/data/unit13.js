/* Unit 13 – The Single-Cycle Datapath */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;
  const SIGS = ['RegDst', 'ALUSrc', 'MemtoReg', 'RegWrite', 'MemRead', 'MemWrite', 'Branch', 'ALUOp'];
  const ctlRow = (k) => '<div class="table-wrap"><table class="tt"><tr>' + SIGS.map((c) => '<th>' + c + '</th>').join('') + '</tr><tr>' + SIGS.map((c) => '<td>' + S.CONTROL[k][c] + '</td>').join('') + '</tr></table></div>';
  const ctlTable = '<div class="table-wrap"><table class="tt"><tr><th>Instr</th>' + SIGS.map((c) => '<th>' + c + '</th>').join('') + '<th>Jump</th></tr>' +
    [['R-type', 'R'], ['lw', 'lw'], ['sw', 'sw'], ['beq', 'beq'], ['addi', 'addi'], ['j', 'j']].map((r) => '<tr><td>' + r[0] + '</td>' + SIGS.concat(['Jump']).map((c) => '<td>' + S.CONTROL[r[1]][c] + '</td>').join('') + '</tr>').join('') + '</table></div>';

  /* D13.2a fetch-decode-execute loop */
  const fde = (function () {
    const st = [['FETCH', 'IR ← Mem[PC]\nPC ← PC + 4'], ['DECODE', 'read rs, rt\ncontrol from opcode'], ['EXECUTE', 'ALU: op / address\n/ compare'], ['MEMORY', 'lw: read\nsw: write'], ['WRITE-BACK', 'rd / rt ← result']];
    let s = '';
    st.forEach((x, i) => {
      const bx = 20 + i * 130;
      s += S.box(bx, 40, 110, 40, x[0], i % 2 ? 'box2' : 'boxa', 'sm b');
      x[1].split('\n').forEach((l, j) => { s += S.tc(bx + 55, 100 + j * 14, l, 'xs'); });
      if (i < 4) s += S.a([[bx + 110, 60], [bx + 130, 60]], 'arr');
    });
    s += S.a([[650, 60], [662, 60], [662, 144], [8, 144], [8, 60], [20, 60]], 'hl') + S.tc(335, 160, 'next instruction (repeat forever)', 'xs hltxt');
    s += S.t(10, 192, 'Single-cycle: all five steps happen within ONE long clock cycle. Pipelined (Unit 14): each step is its own stage.', 'xs muted');
    return S.svg(670, 200, s, 'fetch decode execute cycle');
  })();

  /* D13.3b fetch unit */
  const fetchUnit = (function () {
    let s = S.box(60, 90, 50, 80, 'PC', 'boxa');
    s += S.rect(180, 70, 150, 120, 'box') + S.t(186, 126, 'Read', 'sm') + S.t(186, 140, 'address', 'sm') + S.tc(255, 168, 'Instruction memory', 'xs b') + S.t(324, 134, 'Instruction', 'xs', 'end');
    s += S.alu(190, 0, 50, 60, 'Add');
    s += S.a([[110, 130], [180, 130]], 'arr') + S.p([[140, 130], [140, 14], [190, 14]]) + S.dot(140, 130) + S.a([[160, 46], [190, 46]], 'arr') + S.t(150, 50, '4', 'b', 'end');
    s += S.p([[240, 30], [400, 30], [400, 230], [30, 230], [30, 130], [60, 130]]) + S.head([30, 130], [60, 130], '', 7) + S.t(300, 24, 'PC + 4', 'xs b');
    s += S.a([[330, 130], [420, 130]], 'arr') + S.t(426, 134, 'instruction [31:0] → decode', 'xs b');
    s += S.p([[85, 210], [85, 170]]) + '<path class="w" d="M77,170 l8,-10 l8,10"/>' + S.t(96, 206, 'CLK', 'xs b');
    s += S.t(10, 256, 'Every instruction starts here: PC addresses the instruction memory; an adder computes PC + 4, written into the PC at the next edge.', 'xs muted');
    return S.svg(640, 264, s, 'instruction fetch unit');
  })();

  /* D13.5a critical path bars */
  const critical = (function () {
    const comp = { IM: ['Instr mem', 200, 'pyr0'], RF: ['Reg read', 100, 'pyr1'], ALU: ['ALU', 200, 'pyr2'], DM: ['Data mem', 200, 'pyr3'], WB: ['Reg write', 100, 'pyr4'] };
    const rows = [['lw', ['IM', 'RF', 'ALU', 'DM', 'WB']], ['sw', ['IM', 'RF', 'ALU', 'DM']], ['R-type', ['IM', 'RF', 'ALU', 'WB']], ['beq', ['IM', 'RF', 'ALU']], ['j', ['IM']]];
    const sc = 0.6, ox = 90;
    let s = '';
    rows.forEach((r, i) => {
      let x = ox; const y = 24 + i * 40;
      s += S.t(ox - 10, y + 20, r[0], 'sm b mono', 'end');
      r[1].forEach((k) => { const w = comp[k][1] * sc; s += '<rect class="' + comp[k][2] + '" x="' + x + '" y="' + y + '" width="' + w + '" height="28" stroke="currentColor" stroke-opacity=".35"/>' + S.tc(x + w / 2, y + 18, comp[k][0], 'xs b pyrtxt'); x += w; });
      const tot = r[1].reduce((a, k) => a + comp[k][1], 0);
      s += S.t(x + 8, y + 19, tot + ' ps', 'sm b');
    });
    s += '<line class="edge" x1="' + (ox + 800 * sc) + '" y1="14" x2="' + (ox + 800 * sc) + '" y2="226"/>' + S.t(ox + 800 * sc - 4, 240, 'clock period = 800 ps (set by lw)', 'xs b', 'end');
    s += S.t(10, 262, 'Single-cycle: every instruction gets the full 800 ps, so beq wastes 300 ps and j wastes 600 ps (P&H delays; MUX, sign-extend, PC setup ignored).', 'xs muted');
    return S.svg(680, 270, s, 'critical path per instruction class');
  })();

  UNITS.push({
    id: 13, title: 'The Single-Cycle Datapath', short: 'Single-Cycle Datapath',
    intro: 'Building a MIPS processor that executes one whole instruction per clock cycle: the datapath elements, the control unit, tracing R-type / lw / sw / beq (the exact exam diagram question) and the critical path. Lab 11 F-D-E table and the four class worksheets in Diagrams_class.pdf; the datapath theory follows Patterson &amp; Hennessy ch. 4.',
    subtopics: [
      {
        id: '13.1', title: 'Recap: ISA → Hardware', badge: 'researched', sources: 'no slides (the L16 lecture had no file)',
        sourceLine: 'Source: Patterson & Hennessy, Computer Organization and Design (MIPS ed.), §4.1–4.3; Harris & Harris §7.1–7.3',
        keywords: 'isa to hardware microarchitecture single cycle cpi subset implementation',
        explain: '<p><b>Analogy:</b> the ISA is a restaurant menu (what you can order); the microarchitecture is the kitchen (how dishes are made). Same menu, many possible kitchens.</p>' +
          '<ul><li>Units 1–12 gave us the parts (MUX, adder, ALU, register file, memories) and the contract (R/I/J formats). Now we build hardware that executes the subset <b>add, sub, and, or, slt, lw, sw, beq</b> (plus addi and j as extensions).</li>' +
          '<li><b>Microarchitecture</b> = datapath (the units that move and transform data) + control (which tells the datapath what to do each cycle, from the opcode).</li>' +
          '<li>Three classic designs for the same ISA: <b>single-cycle</b> (each instruction in one long cycle, CPI = 1, slow clock), <b>multicycle</b> (several short cycles per instruction) and <b>pipelined</b> (several instructions overlapped — Units 14–15).</li>' +
          '<li>Performance: execution time = instruction count × CPI × clock period. Single-cycle has CPI = 1 but the clock period must fit the slowest instruction (lw).</li></ul>',
        keypoints: ['Microarchitecture = datapath + control.', 'Single-cycle: CPI = 1, period = slowest instruction.', 'Subset: R-type, lw, sw, beq (+ addi, j).'],
        mistakes: ['Thinking single-cycle means “fast” — it has the longest clock period.', 'Confusing ISA (what) with microarchitecture (how).'],
        practice: [
          mcq('In a single-cycle processor, the CPI is:', ['0.5', '1', '5', 'depends on the instruction'], 1, 'Every instruction takes exactly one (long) cycle.', ['No.', 'Correct.', 'That is a 5-stage latency.', 'No — single-cycle is fixed.']),
          mcq('What determines the clock period of a single-cycle processor?', ['the fastest instruction', 'the slowest instruction (critical path, lw)', 'the number of registers', 'the memory size'], 1, 'All instructions share one period.', ['No.', 'Correct.', 'No.', 'No.']),
          match('Match each term with its meaning.', ['ISA', 'Datapath', 'Control unit'], ['units that move and transform data', 'tells the datapath what to do from the opcode', 'the programmer-visible instruction set (the contract)'], [2, 0, 1], 'Architecture vs microarchitecture.')
        ],
        subjective: [sub('Differentiate ISA and microarchitecture. What are the characteristics of a single-cycle implementation? (3 marks)', '<p>ISA = contract; microarchitecture = datapath + control. Single-cycle: one instruction per cycle, CPI = 1, period set by the slowest instruction, each unit used once per cycle (separate instruction and data memories, extra adders).</p>', 3, ['1 — ISA vs µarch', '2 — single-cycle traits'])]
      },
      {
        id: '13.2', title: 'Fetch–Decode–Execute Cycle', badge: 'class', sources: '[MIPS] p9 (F/D/E/M/WB table per instruction); [LB1] p6 (Intel 4004 F/D/E/W)',
        keywords: 'fetch decode execute memory write back cycle instruction steps',
        explain: '<p>Every instruction goes through the same steps (Lab 11 table):</p>' +
          '<div class="table-wrap"><table><tr><th>Step</th><th>add $t2, $t0, $t1</th><th>lw $t0, 4($t1)</th><th>sw $t0, 4($t1)</th><th>beq $t0, $t1, L</th></tr>' +
          '<tr><td><b>F</b> fetch</td><td>IR ← Mem[PC], PC ← PC + 4</td><td>same</td><td>same</td><td>same</td></tr>' +
          '<tr><td><b>D</b> decode</td><td>read $t0, $t1</td><td>read $t1</td><td>read $t1, $t0</td><td>read $t0, $t1</td></tr>' +
          '<tr><td><b>E</b> execute</td><td>ALU: $t0 + $t1</td><td>ALU: $t1 + 4 (address)</td><td>ALU: $t1 + 4 (address)</td><td>ALU: $t0 − $t1 (compare); target = PC + 4 + off × 4</td></tr>' +
          '<tr><td><b>M</b> memory</td><td>— (skipped)</td><td>read Mem[addr]</td><td>Mem[addr] ← $t0</td><td>—</td></tr>' +
          '<tr><td><b>WB</b> write-back</td><td>$t2 ← sum</td><td>$t0 ← data</td><td>— (skipped)</td><td>may replace PC</td></tr></table></div>' +
          '<p>The Intel 4004 (1971) already overlapped Fetch / Decode / Execute / Write — the seed of pipelining. In the single-cycle datapath all of these steps finish inside one clock period; the next rising edge writes the PC, the register file and memory together.</p>',
        keypoints: ['F: IR ← Mem[PC], PC ← PC + 4.', 'D: read registers, generate control.', 'E: ALU.', 'M: lw/sw only.', 'WB: R-type, lw, addi.'],
        diagrams: [{ id: 'D13.2a', title: 'Fetch–decode–execute–memory–write-back loop', svg: fde, how: 'Five boxes in a row with arrows, and one arrow looping from write-back back to fetch; write what each step does under it.' }],
        mistakes: ['Saying add uses the memory step.', 'Saying sw writes a register.'],
        practice: [
          mcq('Which instruction skips the write-back step?', ['add', 'lw', 'sw', 'addi'], 2, 'sw writes memory, not a register.', ['Writes rd.', 'Writes rt.', 'Correct.', 'Writes rt.'], 'Lab question'),
          mcq('Which instruction is the only one in the subset that both reads data memory and writes a register?', ['add', 'lw', 'sw', 'beq'], 1, 'Load: memory → register.', ['No memory.', 'Correct.', 'No register write.', 'Neither.']),
          txt('During fetch, by how much is the PC incremented (bytes)?', ['4'], 'Each instruction is 4 bytes.'),
          msq('Which steps does add $t2, $t0, $t1 use? (select all)', ['Fetch', 'Decode', 'Execute', 'Memory', 'Write-back'], [0, 1, 2, 4], 'No memory access.', ['Yes.', 'Yes.', 'Yes.', 'No.', 'Yes.'], 'Lab question')
        ],
        subjective: [sub('Explain the fetch–decode–execute cycle with a flowchart and show which steps lw, sw, add and beq use. (4 marks)', '<p>D13.2a + table above.</p>', 4, ['2 — flowchart', '2 — table'], ['D13.2a'])]
      },
      {
        id: '13.3', title: 'Building the Datapath: PC, IMem, RegFile, ALU, DMem', badge: 'class', sources: '[DQ] p1-4 (the printed datapath on every class worksheet); element-by-element construction researched (Patterson & Hennessy §4.3–4.4)',
        keywords: 'single cycle datapath pc instruction memory register file alu data memory sign extend mux control alu control',
        explain: '<p><b>Elements</b> (each used at most once per cycle — hence separate instruction and data memories and extra adders):</p>' +
          '<ul><li><b>PC</b> (32-bit register) and an <b>adder</b> for PC + 4; <b>instruction memory</b> (combinational read).</li>' +
          '<li><b>Register file</b>: Read reg 1 ← [25-21] (rs), Read reg 2 ← [20-16] (rt), Write reg ← RegDst MUX (rt [20-16] or rd [15-11]); RegWrite enables the write.</li>' +
          '<li><b>Sign-extend</b> [15-0] → 32 bits; <b>ALUSrc MUX</b> picks Read data 2 or the immediate; <b>ALU</b> (result + Zero flag) controlled by <b>ALU control</b> (from ALUOp and funct [5-0]).</li>' +
          '<li><b>Data memory</b> (Address, Write data, Read data; MemRead, MemWrite); <b>MemtoReg MUX</b> picks ALU result or memory data for the register write.</li>' +
          '<li><b>Branch hardware</b>: shift-left-2 of the sign-extended offset, a second adder (PC + 4 + offset × 4), AND(Branch, Zero) = PCSrc → <b>PCSrc MUX</b>. Jump extension: shift-left-2 of [25-0] joined with PC+4[31:28] and a Jump MUX.</li>' +
          '<li><b>Control</b>: the main control unit reads the opcode [31-26] and drives RegDst, ALUSrc, MemtoReg, RegWrite, MemRead, MemWrite, Branch, ALUOp (2 bits) (and Jump).</li></ul>' +
          '<p><b>Main control table</b> (X = don\'t care, used only when the MUX output is not consumed):</p>' + ctlTable +
          '<p><b>ALU control (two-level decoding):</b> ALUOp 00 → add (0010) for lw/sw/addi; 01 → subtract (0110) for beq; 10 → look at funct: add 100000 → 0010, sub 100010 → 0110, and 100100 → 0000, or 100101 → 0001, slt 101010 → 0111.</p>',
        keypoints: ['Read reg 1 = [25-21], Read reg 2 = [20-16], rd = [15-11], imm = [15-0], funct = [5-0], opcode = [31-26].', 'MUXes: RegDst, ALUSrc, MemtoReg, PCSrc (+ Jump).', 'PCSrc = Branch · Zero.', 'ALUOp: 00 add, 01 sub, 10 funct.', 'ALU control: add 0010, sub 0110, AND 0000, OR 0001, slt 0111.'],
        diagrams: [{ id: 'D13.3a', title: 'Single-cycle MIPS datapath with control (as printed on the class worksheets)', svg: S.datapath({ title: 'Single-cycle datapath with control (Patterson & Hennessy style) — dashed = control signals' }), how: 'Five big blocks left to right (PC, instruction memory, registers, ALU, data memory); add the PC + 4 adder and loop; insert RegDst, ALUSrc, MemtoReg and PCSrc MUXes; control ellipse above the register file with dashed lines to each MUX, memory and RegWrite; finally sign-extend, shift-left-2, branch adder and AND gate.' },
          { id: 'D13.3b', title: 'Instruction fetch unit', svg: fetchUnit, how: 'PC box feeding the instruction memory address; the same PC into an adder with constant 4; adder output looping back to the PC input.' }],
        mistakes: ['Feeding rd into Read register 2 (it is rt [20-16]).', 'Forgetting the shift-left-2 on the branch offset.', 'Leaving ALUOp out of the control list (it is 2 bits).'],
        practice: [
          mcq('Which instruction bits drive Read register 1?', ['[31-26]', '[25-21]', '[20-16]', '[15-11]'], 1, 'rs field.', ['Opcode → control.', 'Correct.', 'Read register 2.', 'rd → RegDst MUX.'], 'Class sample (Diagrams_class.pdf)'),
          mcq('What does the ALUSrc MUX choose between?', ['rt and rd', 'Read data 2 and the sign-extended immediate', 'ALU result and memory data', 'PC + 4 and the branch target'], 1, 'Second ALU operand.', ['RegDst.', 'Correct.', 'MemtoReg.', 'PCSrc.']),
          txt('Write the 4-bit ALU control input for subtraction.', ['0110'], 'ALU control: sub = 0110.'),
          mcq('PCSrc (select of the branch MUX) is produced by:', ['the main control directly', 'Branch AND Zero', 'ALUOp', 'MemRead OR MemWrite'], 1, 'Taken only if the instruction is beq AND the ALU result is zero.', ['Branch alone is not enough.', 'Correct.', 'No.', 'No.'], 'Class sample (Diagrams_class.pdf)'),
          nat('How many 2:1 MUXes are in the basic single-cycle datapath without the jump extension (RegDst, ALUSrc, MemtoReg, PCSrc)?', 4, 0, 'Four.'),
          mcq('Why does the single-cycle datapath need separate instruction and data memories?', ['to save power', 'each unit can be used only once per cycle, and lw/sw need both an instruction fetch and a data access in the same cycle', 'because MIPS is pure Harvard', 'for security'], 1, 'One cycle per instruction.', ['No.', 'Correct.', 'It is a design consequence.', 'No.'])
        ],
        subjective: [sub('Draw a neat labelled diagram of the single-cycle MIPS datapath with its control unit. State the function of each MUX and give the main control table for R-type, lw, sw and beq. (5 marks)', '<p>D13.3a; MUX table: RegDst (rt/rd), ALUSrc (Read data 2/imm), MemtoReg (ALU/memory), PCSrc (PC + 4/target); control table above.</p>', 5, ['2 — blocks', '1 — MUX functions', '2 — control table'], ['D13.3a'])]
      },
      {
        id: '13.4', title: 'Tracing Different Instruction Types', badge: 'class', sources: '[DQ] p1-4 (beq ×2, sw, lw worksheets: “Trace &lt;instruction&gt; and Fill the Control Signals”)',
        keywords: 'trace datapath control signals r type lw sw beq fill the control signals worksheet',
        tool: 'datapath',
        explain: '<p><b>This is the exam question.</b> All four class worksheets print the datapath and ask “Trace &lt;instruction&gt; and Fill the Control Signals” with the columns Branch, MemtoReg, MemRead, MemWrite, ALUOp, ALUSrc, RegWrite, RegDst. Every sample sheet left <b>ALUOp blank</b> — always fill it.</p>' +
          '<p><b>Method (4 steps):</b> (1) highlight the fetch path (PC → IMem, PC → +4); (2) follow the fields ([25-21], [20-16], [15-11], [15-0], [5-0]); (3) at each MUX darken the input used and write its 0/1; (4) finish at the destination (register, memory or PC) and fill the row, using X where a MUX output is unused.</p>' +
          '<div><div><b>R-type: add $t1, $t2, $t3</b>' + ctlRow('R') + '<p>rs, rt read → ALU (ALUSrc 0, funct → add) → MemtoReg 0 → write rd (RegDst 1).</p></div>' +
          '<div><b>lw $t2, 4($t1)</b>' + ctlRow('lw') + '<p>rs + signext(4) → address → memory read → MemtoReg 1 → write rt (RegDst 0).</p></div>' +
          '<div><b>sw $t2, 4($t1)</b>' + ctlRow('sw') + '<p>rs + 4 → address; Read data 2 ($t2) → Write data; MemWrite 1; no register write → RegDst, MemtoReg X.</p></div>' +
          '<div><b>beq $t1, $t2, L1</b>' + ctlRow('beq') + '<p>ALU subtracts (ALUSrc 0, ALUOp 01); Zero AND Branch → PCSrc; target = PC + 4 + offset × 4.</p></div></div>' +
          '<p><b>X rule:</b> RegDst and MemtoReg are X whenever RegWrite = 0. Never put X on RegWrite, MemRead, MemWrite or Branch.</p>',
        keypoints: ['R: RegDst 1, ALUSrc 0, MemtoReg 0, RegWrite 1, ALUOp 10.', 'lw: 0, 1, 1, 1, MemRead 1, ALUOp 00.', 'sw: X, 1, X, 0, MemWrite 1, ALUOp 00.', 'beq: X, 0, X, 0, Branch 1, ALUOp 01.', 'addi: RegDst 0, ALUSrc 1, MemtoReg 0, RegWrite 1, ALUOp 00.'],
        diagrams: [
          { id: 'D13.4a', title: 'Trace: R-type add $t1, $t2, $t3', svg: S.datapath({ path: 'R', title: 'add $t1, $t2, $t3 — orange = active path', note: '$t1 ← $t2 + $t3' }), how: 'Fetch path; rs and rt into the register file; Read data 1 and 2 into the ALU (ALUSrc 0); ALU result through MemtoReg 0 back to Write data; rd through RegDst 1 to Write reg.' },
          { id: 'D13.4b', title: 'Trace: lw $t2, 4($t1)', svg: S.datapath({ path: 'lw', title: 'lw $t2, 4($t1) — the longest path', note: '$t2 ← Mem[$t1 + 4]' }), how: 'Fetch; rs → Read data 1 → ALU; imm → sign-extend → ALUSrc 1 → ALU; ALU result → data memory address; Read data → MemtoReg 1 → Write data; rt → RegDst 0.' },
          { id: 'D13.4c', title: 'Trace: sw $t2, 4($t1)', svg: S.datapath({ path: 'sw', title: 'sw $t2, 4($t1)', note: 'Mem[$t1 + 4] ← $t2' }), how: 'Fetch; rs → ALU with sign-extended 4 (ALUSrc 1) → address; Read data 2 → data memory Write data; nothing returns to the register file.' },
          { id: 'D13.4d', title: 'Trace: beq $t1, $t2, L1', svg: S.datapath({ path: 'beq', alt: ['pc4_mux'], title: 'beq $t1, $t2, L1 — orange = taken path, blue = PC + 4 if not equal', note: 'Zero AND Branch → PCSrc' }), how: 'Fetch; rs and rt into the ALU (ALUSrc 0) to subtract; offset → sign-extend → shift-left-2 → branch adder with PC + 4; Zero AND Branch selects the PCSrc MUX input.' }],
        examples: [{ title: 'beq follow-up from the class sheet', html: '<p>$t1 = 5, $t2 = 5 → ALU 5 − 5 = 0 → Zero = 1 → PCSrc = 1 → PC ← PC + 4 + offset × 4. $t1 = 5, $t2 = 7 → Zero = 0 → PCSrc = 0 → PC ← PC + 4. beq at 0x00400010 with offset 3 → target 0x00400020.</p>' }],
        mistakes: ['Leaving ALUOp blank (every sample sheet did — free marks lost).', 'RegDst = 1 for lw (the destination of lw is rt → 0).', 'Writing 0 instead of X for RegDst/MemtoReg in sw/beq (accepted by some examiners, but X shows understanding).', 'MemRead = X for R-type — it must be 0.'],
        practice: [
          mcq('For sw $t2, 4($t1), which control signals are don\'t-care (X)?', ['RegWrite and MemWrite', 'RegDst and MemtoReg', 'ALUSrc and ALUOp', 'Branch and MemRead'], 1, 'No register is written, so the two write-back MUXes are irrelevant.', ['Must be 0 and 1.', 'Correct.', 'ALUSrc = 1, ALUOp = 00.', 'Must be 0.'], 'Class sample (Diagrams_class.pdf p2)'),
          txt('What is the 2-bit ALUOp for beq?', ['01'], 'ALU subtracts to compare.', 'Class sample (Diagrams_class.pdf p1)'),
          mcq('For lw $t2, 4($t1), RegDst =', ['0', '1', 'X', '10'], 0, 'The destination of a load is rt [20-16].', ['Correct.', 'That selects rd (R-type).', 'lw writes a register.', 'Not a 2-bit signal.'], 'Class sample (Diagrams_class.pdf p3)'),
          match('Match each instruction with its (RegDst, ALUSrc, MemtoReg) values.', ['add', 'lw', 'sw', 'addi'], ['0, 1, 1', '1, 0, 0', 'X, 1, X', '0, 1, 0'], [1, 0, 2, 3], 'From the main control table.'),
          mcq('For beq $t1, $t2, L1 with $t1 = 5 and $t2 = 7, the next PC is:', ['the branch target', 'PC + 4', 'PC', '$ra'], 1, '5 − 7 ≠ 0 → Zero = 0 → PCSrc = 0.', ['Only if equal.', 'Correct.', 'No.', 'No.'], 'Class sample (Diagrams_class.pdf p4)'),
          msq('Which signals are 1 for lw? (select all)', ['ALUSrc', 'MemtoReg', 'RegWrite', 'MemRead', 'MemWrite', 'RegDst'], [0, 1, 2, 3], 'RegDst = 0, MemWrite = 0.', ['Yes.', 'Yes.', 'Yes.', 'Yes.', 'No.', 'No (0).'])
        ],
        subjective: [sub('Trace the Load Word instruction lw $t2, 4($t1) on the single-cycle datapath and fill the control signals (Branch, MemtoReg, MemRead, MemWrite, ALUOp, ALUSrc, RegWrite, RegDst). (5 marks)', '<p>D13.4b; row: Branch 0, MemtoReg 1, MemRead 1, MemWrite 0, ALUOp 00, ALUSrc 1, RegWrite 1, RegDst 0. Encoding 0x8D2A0004. Steps as in the lw paragraph above.</p>', 5, ['1 — fetch path', '1 — address path', '1 — memory → register path', '2 — control row'], ['D13.4b'])]
      },
      {
        id: '13.5', title: 'Critical Path and Clock Period', badge: 'researched', sources: 'no slides',
        sourceLine: 'Source: Patterson & Hennessy §4.4 (instruction-class timing); Harris & Harris §7.3.4 (single-cycle critical path, 925 ps example)',
        keywords: 'critical path clock period single cycle lw delay performance',
        explain: '<ul><li>The <b>critical path</b> is the longest combinational delay between two clocked elements. In the single-cycle datapath it is <b>lw</b>: PC → instruction memory → register read → (ALUSrc MUX) → ALU → data memory → MemtoReg MUX → register-file setup.</li>' +
          '<li><b>P&amp;H instruction-class timing</b> (instruction memory 200 ps, register read 100, ALU 200, data memory 200, register write 100):</li></ul>' +
          '<div class="table-wrap"><table><tr><th>Class</th><th>IMem</th><th>Reg read</th><th>ALU</th><th>DMem</th><th>Reg write</th><th>Total</th></tr><tr><td>R-type</td><td>200</td><td>100</td><td>200</td><td>—</td><td>100</td><td>600 ps</td></tr><tr><td>lw</td><td>200</td><td>100</td><td>200</td><td>200</td><td>100</td><td><b>800 ps</b></td></tr><tr><td>sw</td><td>200</td><td>100</td><td>200</td><td>200</td><td>—</td><td>700 ps</td></tr><tr><td>beq</td><td>200</td><td>100</td><td>200</td><td>—</td><td>—</td><td>500 ps</td></tr><tr><td>j</td><td>200</td><td>—</td><td>—</td><td>—</td><td>—</td><td>200 ps</td></tr></table></div>' +
          '<ul><li>Single-cycle clock period = 800 ps (1.25 GHz) for <i>every</i> instruction — the time wasted on shorter instructions is the motivation for pipelining.</li>' +
          '<li><b>Harris &amp; Harris formula:</b> T<sub>c</sub> = t<sub>pcq,PC</sub> + t<sub>mem</sub> + t<sub>RFread</sub> + t<sub>ALU</sub> + t<sub>mem</sub> + t<sub>mux</sub> + t<sub>RFsetup</sub>. With 30 + 250 + 150 + 200 + 250 + 25 + 20 = <b>925 ps</b>.</li></ul>',
        keypoints: ['Critical path = lw.', 'P&H: lw 800, sw 700, R 600, beq 500, j 200 ps.', 'Single-cycle period = slowest instruction.', 'H&H: Tc = t_pcq + 2 t_mem + t_RFread + t_ALU + t_mux + t_RFsetup.'],
        diagrams: [{ id: 'D13.5a', title: 'Critical path: delay per instruction class (lw is longest)', svg: critical, how: 'Horizontal stacked bars, one per instruction class, segments for instruction memory, register read, ALU, data memory, register write; a vertical line at the lw total marks the clock period.' }],
        examples: [{ title: 'Time for a program', html: '<p>1,000,000 instructions on the P&amp;H single-cycle machine: 10⁶ × 800 ps = 0.8 ms. If the mix is 25 % lw, 10 % sw, 45 % R-type, 15 % beq, 5 % j, an ideal variable-length clock would average 0.25×800 + 0.10×700 + 0.45×600 + 0.15×500 + 0.05×200 = 625 ps → 1.28× faster. Pipelining (Unit 14) gets most of that gain with a fixed clock.</p>' }],
        mistakes: ['Using R-type delay as the clock period.', 'Adding the data-memory delay for beq or R-type.'],
        practice: [
          nat('Using P&H delays (IMem 200, reg read 100, ALU 200, DMem 200, reg write 100 ps), what is the single-cycle clock period in ps?', 800, 0, 'lw uses all five.'),
          nat('With those delays, how many ps does an R-type instruction actually need?', 600, 0, '200 + 100 + 200 + 100.'),
          nat('Harris & Harris: t_pcq = 30, t_mem = 250, t_RFread = 150, t_ALU = 200, t_mux = 25, t_RFsetup = 20 ps. Single-cycle Tc in ps?', 925, 0, '30 + 250 + 150 + 200 + 250 + 25 + 20.'),
          mcq('Which instruction lies on the critical path of the single-cycle datapath?', ['add', 'beq', 'lw', 'j'], 2, 'Uses every major block in series.', ['Shorter.', 'Shorter.', 'Correct.', 'Shortest.'], 'Class sample (Diagrams_class.pdf p3)'),
          nat('A single-cycle CPU has an 800 ps clock. Maximum clock frequency in GHz?', 1.25, 0.001, '1 / 800 ps.')
        ],
        subjective: [sub('Identify the critical path of the single-cycle datapath and compute the clock period from given component delays. Why is single-cycle design inefficient? (5 marks)', '<p>D13.5a + table; lw = 800 ps; every instruction gets 800 ps, wasting time on R/beq/j; motivates pipelining.</p>', 5, ['2 — path', '2 — calculation', '1 — inefficiency'], ['D13.5a', 'D13.4b'])]
      }
    ]
  });
})();
