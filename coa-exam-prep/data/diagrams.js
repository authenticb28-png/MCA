/* diagrams.js — Phase 1: the 4 class diagram-question samples, pattern analysis,
   5 predicted questions and the ranked list of top diagram questions (Units 1–13). */
(function () {
  const SIGS = ['Branch', 'MemtoReg', 'MemRead', 'MemWrite', 'ALUOp', 'ALUSrc', 'RegWrite', 'RegDst'];
  function ctlTable(path, extra) {
    const v = path ? S.CONTROL[path] : null;
    const cols = SIGS.concat(extra || []);
    return '<div class="table-wrap"><table class="tt"><tr>' + cols.map((c) => '<th>' + c + '</th>').join('') + '</tr><tr>' +
      cols.map((c) => '<td>' + (v ? (v[c] === 'X' || v[c] === 'XX' ? 'X (don\'t care)' : v[c]) : '&nbsp;') + '</td>').join('') + '</tr></table></div>';
  }
  const blank = (t) => '<figure class="dg-fig">' + S.datapath({ title: t }) + '</figure>';
  const traceDraw = '<ol><li><b>Fetch path first (always the same):</b> PC → Instruction memory, PC → Add(+4). Highlight these on every trace — they earn the first mark.</li>' +
    '<li><b>Follow the fields:</b> mark which instruction bits feed Read reg 1 [25-21], Read reg 2 [20-16], the RegDst MUX, Sign-extend [15-0] and ALU control [5-0].</li>' +
    '<li><b>Execute:</b> darken the wire chosen by each MUX (write the 0/1 next to the MUX input you used).</li>' +
    '<li><b>Finish at the destination:</b> register write-back, memory, or the PC — then fill the table, writing <b>X (don\'t care)</b> where the MUX output is not used.</li></ol>' +
    '<p>Use a single coloured pen or a darker stroke for the active path; never leave ALUOp blank (it is a 2-bit value).</p>';

  const samples = [
    {
      analysis: '<h3>Sample 1 — page 1 of Diagrams_class.pdf</h3>' +
        '<p><b>Transcription (exact):</b> “<i>beq $t1, $t2, L1</i>” (handwritten at the top) — “<b>Trace Branch (Beq) Instruction and Fill the Control Signals</b>”. Below the printed single-cycle MIPS datapath is an 8-column table: Branch | Memtoreg | Memread | MemWrite | ALUOp | ALUSrc | RegWrite | RegDst.</p>' +
        '<p><b>Topic:</b> Unit 13.3–13.4 (single-cycle datapath, tracing instruction types); uses Unit 11 (I-format) and Unit 3 (MUX). <b>Marks:</b> about 5 (estimate: 2 for the traced path, 3 for the control row). <b>What the examiner wants:</b> <i>trace</i> (highlight the active wires on the printed datapath) and <i>fill</i> 8 control values. <b>Depth:</b> correct values incl. don\'t-cares and the 2-bit ALUOp, plus a one-line justification is topper level.</p>' +
        '<p><b>Check of the handwritten answer on the sheet:</b> Branch 1, MemtoReg don\'t care, MemRead 0, MemWrite 0, ALUSrc 0, RegWrite 0, RegDst don\'t care — all correct. <b>ALUOp was left blank</b>: it must be <b>01</b> (ALU subtracts to compare). That blank costs a mark.</p>',
      q: {
        id: 'dq.s1', type: 'diag', marks: 5, tag: 'Class sample (Diagrams_class.pdf p1)', unitLabel: '13',
        q: '<b>beq $t1, $t2, L1</b> — Trace the Branch (beq) instruction on the datapath and fill the control signals.' + blank('Printed datapath (as on the exam sheet)') + ctlTable(null),
        svg: S.datapath({ path: 'beq', alt: ['pc4_mux'], title: 'beq $t1, $t2, L1 — orange = active path (taken), blue = PC+4 path if not equal', note: 'ALU computes $t1 − $t2; Zero AND Branch → PCSrc' }),
        model: ctlTable('beq') +
          '<p><b>Encoding:</b> beq is I-format: opcode 000100 | rs = $t1 (01001) | rt = $t2 (01010) | 16-bit word offset to L1.</p>' +
          '<ol><li><b>Fetch:</b> PC addresses the instruction memory; the top adder forms PC + 4.</li>' +
          '<li><b>Decode / register read:</b> bits [25-21] select $t1 on Read reg 1, bits [20-16] select $t2 on Read reg 2. Nothing is written, so <b>RegWrite = 0</b> and the RegDst MUX output is unused → <b>RegDst = X</b>.</li>' +
          '<li><b>Execute:</b> <b>ALUSrc = 0</b> sends Read data 2 (not the immediate) to the ALU; <b>ALUOp = 01</b> tells ALU control to <i>subtract</i>. If $t1 = $t2 the result is 0 and <b>Zero = 1</b>.</li>' +
          '<li><b>Branch target in parallel:</b> bits [15-0] are sign-extended to 32 bits, shifted left 2 (word → byte offset) and added to PC + 4 by the second adder.</li>' +
          '<li><b>PC update:</b> <b>Branch = 1</b> AND Zero → PCSrc. Equal → PC = PC + 4 + (offset × 4); not equal → PC = PC + 4.</li>' +
          '<li><b>Memory:</b> not touched → <b>MemRead = 0, MemWrite = 0</b>; nothing is written back so <b>MemtoReg = X</b>.</li></ol>',
        scheme: ['1 mark — fetch path (PC → IMem, PC + 4) highlighted', '1 mark — both register reads + ALU compare path (ALUSrc = 0) highlighted', '1 mark — branch-target path: sign-extend → shift-left-2 → adder → PCSrc MUX', '2 marks — control row: Branch 1, MemtoReg X, MemRead 0, MemWrite 0, ALUOp 01, ALUSrc 0, RegWrite 0, RegDst X (−½ per wrong/blank, ALUOp blank counts as wrong)'],
        draw: traceDraw
      }
    },
    {
      analysis: '<h3>Sample 2 — page 2</h3>' +
        '<p><b>Transcription:</b> “<i>sw $t2, 4($t1)</i>” — “<b>Trace Store Word (SW) Instruction and Fill the Control Signals</b>”. The student annotated “I type”, “Memory-write, Reg → Read →” and “immediate Data = 1” under ALUSrc.</p>' +
        '<p><b>Topic:</b> Unit 13.4 with Unit 11.4 (I-format base + offset). <b>Marks:</b> about 5. <b>Wanted:</b> trace + 8 control values. <b>Check of the sheet:</b> Branch 0, MemtoReg X, MemRead 0, MemWrite 1, ALUSrc 1, RegWrite 0, RegDst X — correct; <b>ALUOp blank → should be 00</b> (add for address).</p>',
      q: {
        id: 'dq.s2', type: 'diag', marks: 5, tag: 'Class sample (Diagrams_class.pdf p2)', unitLabel: '13',
        q: '<b>sw $t2, 4($t1)</b> — Trace the Store Word (SW) instruction and fill the control signals.' + blank('Printed datapath') + ctlTable(null),
        svg: S.datapath({ path: 'sw', title: 'sw $t2, 4($t1) — address = $t1 + 4, data = $t2', note: 'Memory[$t1 + 4] ← $t2' }),
        model: ctlTable('sw') +
          '<p><b>Encoding:</b> 101011 | rs = $t1 (01001) | rt = $t2 (01010) | 0000 0000 0000 0100 → <code>0xAD2A0004</code>.</p>' +
          '<ol><li>Fetch as always (PC → IMem, PC + 4 → PCSrc MUX input 0; <b>Branch = 0</b> so PC = PC + 4).</li>' +
          '<li>[25-21] → Read reg 1 = $t1 (the <i>base</i>); [20-16] → Read reg 2 = $t2 (the <i>data to store</i>).</li>' +
          '<li>[15-0] = 4 is sign-extended; <b>ALUSrc = 1</b> selects it; <b>ALUOp = 00</b> → ALU adds → address $t1 + 4.</li>' +
          '<li>ALU result → Data memory Address; Read data 2 ($t2) → Write data; <b>MemWrite = 1</b>, <b>MemRead = 0</b>.</li>' +
          '<li>No register is written: <b>RegWrite = 0</b>, therefore the RegDst and MemtoReg MUX outputs are irrelevant → <b>RegDst = X, MemtoReg = X</b>.</li></ol>',
        scheme: ['1 mark — fetch + PC + 4 path', '1 mark — base register → ALU and immediate → sign-extend → ALUSrc MUX (input 1) → ALU', '1 mark — ALU result → Address and Read data 2 → Write data of data memory', '2 marks — control row: Branch 0, MemtoReg X, MemRead 0, MemWrite 1, ALUOp 00, ALUSrc 1, RegWrite 0, RegDst X'],
        draw: traceDraw
      }
    },
    {
      analysis: '<h3>Sample 3 — page 3</h3>' +
        '<p><b>Transcription:</b> “<i>lw $t2, 4($t1)</i>” — “<b>Trace Load Word (LW) Instruction and Fill the Control Signals</b>”. Annotations: “Immediate data / offset / Ref”, “Data memory → Read; reg ← write”, “I type → 2 register → Immediate selection”, “Address = offset + Reference”, and next to MemWrite “write, address dono na ho to Don\'t Care”.</p>' +
        '<p><b>Topic:</b> Unit 13.4 (the longest path — also the critical path, Unit 13.5). <b>Marks:</b> about 5. <b>Check of the sheet:</b> Branch 0, MemtoReg 1, MemRead 1, MemWrite 0, ALUSrc 1, RegWrite 1, RegDst 0 — all correct; <b>ALUOp blank → 00</b>. Note the annotation idea “if neither write nor address is used → don\'t care” is the right rule for X.</p>',
      q: {
        id: 'dq.s3', type: 'diag', marks: 5, tag: 'Class sample (Diagrams_class.pdf p3)', unitLabel: '13',
        q: '<b>lw $t2, 4($t1)</b> — Trace the Load Word (LW) instruction and fill the control signals.' + blank('Printed datapath') + ctlTable(null),
        svg: S.datapath({ path: 'lw', title: 'lw $t2, 4($t1) — uses every major block (the critical path)', note: '$t2 ← Memory[$t1 + 4]' }),
        model: ctlTable('lw') +
          '<p><b>Encoding:</b> 100011 | rs = $t1 (01001) | rt = $t2 (01010) | 0000 0000 0000 0100 → <code>0x8D2A0004</code>.</p>' +
          '<ol><li>Fetch, PC + 4 (Branch = 0 → PCSrc = 0).</li><li>[25-21] → Read reg 1 = $t1 (base). [20-16] = $t2 goes to the RegDst MUX input 0 — for loads the destination is <b>rt</b>, so <b>RegDst = 0</b>.</li>' +
          '<li>Offset 4 → sign-extend → <b>ALUSrc = 1</b>; <b>ALUOp = 00</b> (add) → address $t1 + 4.</li><li><b>MemRead = 1</b>, <b>MemWrite = 0</b>; the word read comes out on Read data.</li>' +
          '<li><b>MemtoReg = 1</b> selects memory data (top input of the right-hand MUX on this sheet) → Write data; <b>RegWrite = 1</b> writes it into $t2 at the clock edge.</li></ol>' +
          '<p>Why lw is the slowest: IMem → RegFile → ALU → DMem → MUX → RegFile setup, so it sets the single-cycle clock period.</p>',
        scheme: ['1 mark — fetch + PC + 4', '1 mark — rs → Read reg 1 → ALU; imm → sign-extend → ALUSrc(1) → ALU', '1 mark — ALU result → Address; Read data → MemtoReg(1) → Write data; rt → RegDst(0) → Write reg', '2 marks — control row: Branch 0, MemtoReg 1, MemRead 1, MemWrite 0, ALUOp 00, ALUSrc 1, RegWrite 1, RegDst 0'],
        draw: traceDraw
      }
    },
    {
      analysis: '<h3>Sample 4 — page 4</h3>' +
        '<p><b>Transcription:</b> identical to Sample 1: “<i>beq $t1, $t2, L1</i>” — “<b>Trace Branch (Beq) Instruction and Fill the Control Signals</b>”, same filled values (Branch 1, MemtoReg don\'t care, MemRead 0, MemWrite 0, ALUOp blank, ALUSrc 0, RegWrite 0, RegDst don\'t care).</p>' +
        '<p><b>What it tells us:</b> the same sheet was photographed twice — the examiner reuses this exact template, so beq is the single most practised trace. Use this copy to master the <i>two outcomes</i> of beq and the PCSrc logic, which is where viva/follow-up questions go.</p>',
      q: {
        id: 'dq.s4', type: 'diag', marks: 5, tag: 'Class sample (Diagrams_class.pdf p4)', unitLabel: '13',
        q: '<b>beq $t1, $t2, L1</b> — Trace the Branch (beq) instruction and fill the control signals. (Follow-up: show which input of the PCSrc MUX is used when $t1 = 5, $t2 = 5 and when $t1 = 5, $t2 = 7.)' + blank('Printed datapath') + ctlTable(null),
        svg: S.datapath({ path: 'beq', alt: ['pc4_mux'], title: 'beq: Zero = 1 → MUX input 1 (target); Zero = 0 → input 0 (PC + 4)' }),
        model: ctlTable('beq') +
          '<p><b>Same control row as Sample 1.</b> Follow-up: $t1 = 5, $t2 = 5 → ALU computes 5 − 5 = 0 → Zero = 1 → PCSrc = Branch · Zero = 1 → PC ← PC + 4 + (signext(offset) &lt;&lt; 2). $t1 = 5, $t2 = 7 → 5 − 7 = −2 ≠ 0 → Zero = 0 → PCSrc = 0 → PC ← PC + 4.</p>' +
          '<p><b>Branch target arithmetic example:</b> beq at 0x0040 0010 with offset field 3 → target = 0x00400014 + 3 × 4 = 0x00400020.</p>',
        scheme: ['1 mark — fetch path', '1 mark — compare path (two register reads, ALUSrc = 0, subtract)', '1 mark — target path + AND gate + PCSrc MUX, both outcomes stated', '2 marks — control row incl. ALUOp = 01 and both don\'t-cares'],
        draw: traceDraw
      }
    }
  ];

  const pattern = '<h3>What this examiner asks</h3><ul>' +
    '<li><b>One template, different instruction:</b> all four sheets are the same printed Patterson &amp; Hennessy single-cycle datapath (Fig. 4.17 style) with the heading “<i>Trace &lt;Instruction&gt; and Fill the Control Signals</i>” and the same 8-column table (Branch, MemtoReg, MemRead, MemWrite, ALUOp, ALUSrc, RegWrite, RegDst).</li>' +
    '<li><b>Instructions used:</b> beq (twice), sw, lw — always with $t1/$t2 and offset 4. The missing members of the classic four are <b>R-type</b> (add/sub/and/or/slt), and the common extensions <b>addi</b> and <b>j</b>.</li>' +
    '<li><b>Wording style:</b> imperative and short — “Trace &lt;instruction&gt; and Fill the Control Signals”. No essay; marks come from the highlighted path and a correct row of values.</li>' +
    '<li><b>Depth expected:</b> correct 0/1 values, the 2-bit <b>ALUOp</b> (every student on the sample sheets left it blank — easy marks for you), and <b>don\'t-cares</b> where a MUX output is unused. A one-line reason per signal and the instruction encoding make the answer topper level.</li>' +
    '<li><b>Units they come from:</b> Unit 13 (datapath) directly; it silently tests Unit 11 (field positions rs/rt/rd/imm), Unit 3 (MUX, adder, sign extension), Unit 7 (register file read/write ports) and Unit 4 (sign extension, two\'s-complement offsets).</li>' +
    '<li><b>Other drawable topics</b> the same paper can ask (exam scope: Units 1–13) are ranked below; expect at least one non-datapath diagram (FSM, K-map, counter, latch/flip-flop, memory cell, register file, VN/Harvard).</li></ul>' +
    '<h3>Universal rules for “fill the control signals”</h3><div class="table-wrap"><table><tr><th>Signal</th><th>= 1 means</th><th>When it is X</th></tr>' +
    '<tr><td>RegDst</td><td>write register = rd [15-11] (R-type); 0 = rt [20-16] (lw, addi)</td><td>RegWrite = 0 (sw, beq, j)</td></tr>' +
    '<tr><td>ALUSrc</td><td>ALU B input = sign-extended immediate; 0 = Read data 2</td><td>j (ALU result unused)</td></tr>' +
    '<tr><td>MemtoReg</td><td>write-back data = memory Read data; 0 = ALU result</td><td>RegWrite = 0 (sw, beq, j)</td></tr>' +
    '<tr><td>RegWrite</td><td>write the register file at the clock edge</td><td>never X</td></tr>' +
    '<tr><td>MemRead / MemWrite</td><td>read / write data memory</td><td>never X (must be 0 when not used)</td></tr>' +
    '<tr><td>Branch</td><td>instruction is beq: PCSrc = Branch · Zero</td><td>j (if the jump MUX overrides)</td></tr>' +
    '<tr><td>ALUOp</td><td>00 = add (lw/sw/addi), 01 = subtract (beq), 10 = look at funct (R-type)</td><td>j</td></tr></table></div>' +
    '<p><b>Never put X on</b> RegWrite, MemWrite, MemRead or Branch for the four basic instructions: a stray 1 there would corrupt state.</p>';

  const predicted = [
    {
      why: 'The samples cover lw, sw and beq — the fourth row of the classic P&amp;H control table is R-type, so it is the most likely next sheet.',
      q: {
        id: 'dq.p1', type: 'diag', marks: 5, tag: 'Predicted', unitLabel: '13',
        q: '<b>add $t1, $t2, $t3</b> — Trace the R-type instruction on the single-cycle datapath and fill the control signals. Also give the ALU control input.' + blank('Printed datapath') + ctlTable(null),
        svg: S.datapath({ path: 'R', title: 'add $t1, $t2, $t3 — R-type path', note: '$t1 ← $t2 + $t3' }),
        model: ctlTable('R') + '<p><b>Encoding:</b> 000000 | rs $t2 = 01010 | rt $t3 = 01011 | rd $t1 = 01001 | shamt 00000 | funct 100000 → <code>0x014B4820</code>.</p>' +
          '<ol><li>Fetch; Branch = 0 → PC = PC + 4.</li><li>[25-21] → Read reg 1 = $t2; [20-16] → Read reg 2 = $t3; [15-11] = $t1 → RegDst MUX input 1, <b>RegDst = 1</b>.</li>' +
          '<li><b>ALUSrc = 0</b> (Read data 2 to ALU). <b>ALUOp = 10</b> → ALU control reads funct [5-0] = 100000 → ALU control input <b>0010 (add)</b>.</li>' +
          '<li>Data memory idle: <b>MemRead = MemWrite = 0</b>. <b>MemtoReg = 0</b> passes the ALU result to Write data; <b>RegWrite = 1</b>.</li></ol>',
        scheme: ['1 — fetch path', '1 — rs, rt reads and rd → RegDst(1) → Write reg', '1 — ALU result → MemtoReg(0) → Write data (bypassing memory)', '2 — row R: Branch 0, MemtoReg 0, MemRead 0, MemWrite 0, ALUOp 10, ALUSrc 0, RegWrite 1, RegDst 1 (+ ALU control 0010)'],
        draw: traceDraw
      }
    },
    {
      why: 'addi is the commonest instruction in the C-to-MIPS programs (loop counters) and the basic datapath already supports it — a favourite “can this datapath run X?” question.',
      q: {
        id: 'dq.p2', type: 'diag', marks: 5, tag: 'Predicted', unitLabel: '13',
        q: '<b>addi $t0, $t1, 5</b> — Can the given datapath execute addi without new hardware? Trace it and fill the control signals.' + blank('Printed datapath') + ctlTable(null),
        svg: S.datapath({ path: 'addi', title: 'addi $t0, $t1, 5 — like lw but the ALU result is written back', note: '$t0 ← $t1 + 5' }),
        model: ctlTable('addi') + '<p><b>Yes</b> — only a new row in the main control is needed. Encoding: 001000 | 01001 | 01000 | 0000 0000 0000 0101 → <code>0x21280005</code>.</p>' +
          '<ol><li>rs = $t1 → Read reg 1; rt = $t0 is the destination → <b>RegDst = 0</b>.</li><li>Immediate 5 → sign-extend → <b>ALUSrc = 1</b>; <b>ALUOp = 00</b> (add).</li><li>Memory unused: <b>MemRead = 0, MemWrite = 0</b>; <b>MemtoReg = 0</b> (ALU result), <b>RegWrite = 1</b>; Branch = 0.</li></ol>',
        scheme: ['1 — “yes, only control changes” with reason', '2 — traced path (imm → ALUSrc 1 → ALU → MemtoReg 0 → Write data; rt → RegDst 0)', '2 — correct control row'],
        draw: traceDraw
      }
    },
    {
      why: 'The class datapath has no jump hardware; “extend the datapath for j” is the standard next step in Patterson &amp; Hennessy (Fig. 4.24) and tests J-format (Unit 11.5).',
      q: {
        id: 'dq.p3', type: 'diag', marks: 5, tag: 'Predicted', unitLabel: '13 + 11',
        q: 'Add the hardware needed for <b>j L2</b> to the single-cycle datapath. Draw the additions, trace the instruction and give all control signals including the new <b>Jump</b> signal.',
        svg: S.datapath({ path: 'j', jump: true, title: 'j L2 — jump address = PC+4[31:28] ‖ (instr[25:0] << 2)' }),
        model: ctlTable('j', ['Jump']) + '<p><b>Hardware added:</b> (1) a second “shift left 2” on instruction bits [25-0] (26 → 28 bits); (2) concatenation with the upper 4 bits of PC + 4 → 32-bit jump address; (3) a new <b>Jump MUX</b> after the PCSrc MUX (input 1 = jump address, input 0 = normal next PC); (4) a new control output <b>Jump</b> (1 only for j).</p>' +
          '<p><b>Trace:</b> fetch; opcode 000010 → Control sets Jump = 1; target field × 4 joined with PC+4[31:28] → PC. Nothing is written: RegWrite = MemWrite = 0, MemRead = 0; ALU, RegDst, MemtoReg, ALUSrc, ALUOp are don\'t-care; Branch may be X because the Jump MUX overrides PCSrc (0 is also safe).</p>',
        scheme: ['2 — correct added hardware (shift-left-2 of [25-0], PC+4[31:28] concatenation, Jump MUX, Jump control)', '1 — traced path from instruction to PC', '2 — control values with RegWrite 0, MemWrite 0, MemRead 0, Jump 1, others X'],
        draw: '<p>Draw the class datapath lightly, then add the three new blocks in the top strip: “Shift left 2” beside the instruction bus, a line from PC + 4 labelled [31-28], and a MUX at the far right before the PC loop. Label every new wire width (26, 28, 32).</p>'
      }
    },
    {
      why: 'University papers often flip “trace” into “draw”: reproduce the datapath from memory and label it — it checks you know every block, which the printed sheet hides.',
      q: {
        id: 'dq.p4', type: 'diag', marks: 5, tag: 'Predicted', unitLabel: '13',
        q: 'Draw a neat labelled diagram of the single-cycle MIPS datapath with its control unit. Mark the path used by <b>lw</b> and state the function of each MUX.',
        svg: S.datapath({ path: 'lw', title: 'Single-cycle datapath — lw path marked' }),
        model: '<p><b>Blocks (left to right):</b> PC (32-bit register) · Instruction memory · Adder (PC + 4) · Control unit (opcode [31-26]) · Register file (2 read ports, 1 write port) · Sign-extend (16 → 32) · ALU + ALU control (funct [5-0] and ALUOp) · Data memory · Shift-left-2 + branch adder · AND gate + PCSrc MUX.</p>' +
          '<div class="table-wrap"><table><tr><th>MUX</th><th>Input 0</th><th>Input 1</th><th>Select</th></tr><tr><td>RegDst</td><td>rt [20-16]</td><td>rd [15-11]</td><td>RegDst</td></tr><tr><td>ALUSrc</td><td>Read data 2</td><td>sign-extended imm</td><td>ALUSrc</td></tr><tr><td>MemtoReg</td><td>ALU result</td><td>Memory read data</td><td>MemtoReg</td></tr><tr><td>PCSrc</td><td>PC + 4</td><td>branch target</td><td>Branch · Zero</td></tr></table></div>' +
          '<p><b>lw path:</b> PC → IMem → rs → Read data 1 → ALU (+ sign-extended offset) → DMem address → Read data → MemtoReg = 1 → register rt (RegDst = 0).</p>',
        scheme: ['2 — all blocks present and labelled (PC, IMem, RegFile, sign-extend, ALU, DMem, adders, control)', '1 — four MUXes with correct inputs', '1 — control lines drawn dashed to the right blocks', '1 — lw path marked'],
        draw: '<ol><li>Draw five big boxes in a row first: PC, Instruction memory, Registers, ALU, Data memory.</li><li>Add the PC + 4 adder above and the loop back to PC.</li><li>Insert the four MUXes on the wires they choose between.</li><li>Put Control (ellipse) above the register file and draw dashed lines to each MUX/memory/register file.</li><li>Finally add sign-extend, shift-left-2, the branch adder and the AND gate.</li></ol>'
      }
    },
    {
      why: 'A compact way to test all four traces at once — the full main-control truth table plus ALU control decoding is the classic 5-mark short question.',
      q: {
        id: 'dq.p5', type: 'diag', marks: 5, tag: 'Predicted', unitLabel: '13',
        q: 'Complete the main control unit table for <b>R-format, lw, sw and beq</b>, and show how the ALU control input is produced for <b>sub $s0, $s1, $s2</b>. Draw the two-level control block diagram.',
        svg: (function () {
          let s = S.box(20, 60, 120, 60, 'Main\nControl', 'boxa') + S.box(260, 60, 120, 60, 'ALU\nControl', 'boxa') + S.alu(470, 40, 70, 100, 'ALU');
          s += S.a([[-0, 90], [20, 90]], 'arr') + S.t(4, 80, 'Op[5:0]', 'xs b');
          s += S.a([[140, 90], [260, 90]], 'arr') + S.tc(200, 82, 'ALUOp (2)', 'xs b');
          s += S.a([[320, 170], [320, 120]], 'arr') + S.tc(320, 186, 'funct [5:0]', 'xs b');
          s += S.a([[380, 90], [490, 90], [490, 120]], 'arr') + S.tc(430, 82, '4-bit control', 'xs b');
          s += S.a([[80, 120], [80, 175]], 'ctl') + S.tc(80, 190, 'RegDst, ALUSrc, MemtoReg, RegWrite,', 'xs ctltxt') + S.tc(80, 203, 'MemRead, MemWrite, Branch', 'xs ctltxt');
          return S.svg(560, 215, s, 'two-level control');
        })(),
        model: '<div class="table-wrap"><table class="tt"><tr><th>Instr</th><th>RegDst</th><th>ALUSrc</th><th>MemtoReg</th><th>RegWrite</th><th>MemRead</th><th>MemWrite</th><th>Branch</th><th>ALUOp1</th><th>ALUOp0</th></tr>' +
          '<tr><td>R-format</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>lw</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>' +
          '<tr><td>sw</td><td>X</td><td>1</td><td>X</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>beq</td><td>X</td><td>0</td><td>X</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr></table></div>' +
          '<p><b>ALU control (two-level decoding):</b> ALUOp 00 → add (0010) for lw/sw; 01 → subtract (0110) for beq; 10 → use funct: 100000 add 0010, 100010 sub 0110, 100100 AND 0000, 100101 OR 0001, 101010 slt 0111.</p>' +
          '<p><b>sub $s0, $s1, $s2</b> = 000000 10001 10010 10000 00000 100010 (<code>0x02328022</code>): opcode 0 → ALUOp = 10; funct 100010 → ALU control = <b>0110</b> (subtract).</p>',
        scheme: ['3 — the 4 × 9 table (½ per wrong row-entry, don\'t-cares required)', '1 — ALU control mapping table', '1 — sub decoded to 0110 with the block diagram'],
        draw: '<p>Two boxes and an ALU: Main Control (input opcode) sends ALUOp to ALU Control, which also receives funct and drives the ALU with 4 bits. Write the 7 single-bit outputs under Main Control.</p>'
      }
    }
  ];

  /* ranked top diagram questions (Units 1–13). ref ids point to diagrams defined in the unit files. */
  const T = (id, unit, q, refs, model, scheme, draw) => ({ q: { id: 'dq.t' + id, type: 'diag', marks: 5, tag: 'Top diagram #' + id, unitLabel: unit, q: q, refs: refs, model: model, scheme: scheme, draw: draw } });
  const top = [
    T(1, '13', 'Draw/trace the single-cycle MIPS datapath for an R-type, lw, sw and beq instruction and give the control signals for each.', ['D13.3a', 'D13.4a', 'D13.4b', 'D13.4c', 'D13.4d'],
      '<p>Use the four traces in Unit 13.4 and the control table in Predicted Q5. Key facts: RegDst 1 only for R-type; ALUSrc 1 for lw/sw/addi; MemtoReg 1 only for lw; RegWrite 1 for R/lw/addi; MemRead only lw; MemWrite only sw; Branch only beq; ALUOp 10/00/00/01.</p>',
      ['2 — correct datapath blocks and MUXes', '1 — highlighted paths', '2 — control rows'], traceDraw),
    T(2, '7', 'Design a Moore and a Mealy FSM to detect the sequence 1011 (overlapping). Draw both state diagrams and state tables.', ['D7.5a', 'D7.5c'],
      '<p>Mealy (4 states S0–S3): S0 —1/0→ S1, S0 —0/0→ S0; S1 —1/0→ S1, —0/0→ S2; S2 —1/0→ S3, —0/0→ S0; S3 —1/1→ S1 (overlap reuses the last 1), —0/0→ S2. Moore (5 states, output in the circle): S0..S3 output 0 with the same edges, S3 —1→ S4 (output 1); S4 —1→ S1, —0→ S2. Moore needs one more state and its output appears one cycle later. Binary encoding needs 2 FFs (Mealy) and 3 FFs (Moore).</p>',
      ['2 — Mealy diagram with input/output on arrows', '2 — Moore diagram with output in circles (5 states)', '1 — overlap edge S3→S1 / S4→S1, S4→S2 explained'],
      '<p>Place states in a row S0 → S3 (→ S4), draw forward edges first, then the “fall-back” edges (where does the longest suffix that is still a prefix of 1011 take you?), then self-loops. Mark the reset arrow on S0.</p>'),
    T(3, '2', 'Minimise F(A,B,C,D) = Σm(0,2,5,7,8,10,13,15) using a K-map. Show the groups.', ['D2.3d', 'D2.E1a'],
      '<p>Four corners m0, m2, m8, m10 form a quad (B and D are 0 in all) → <b>B\'D\'</b>. Centre quad m5, m7, m13, m15 (B = D = 1) → <b>BD</b>. F = B\'D\' + BD = (B ⊙ D) = XNOR of B and D.</p>',
      ['1 — Gray-coded map filled correctly', '2 — corner quad and centre quad drawn', '2 — F = B\'D\' + BD'], '<p>Draw a 4 × 4 grid, label rows AB and columns CD as 00 01 11 10, fill 1s, loop the biggest groups first, remember corners wrap.</p>'),
    T(4, '7', 'Draw the internal organisation of a 32 × 32 register file with two read ports and one write port. Explain why reads are combinational and writes synchronous.', ['D7.2a', 'D7.2b', 'D7.2c'],
      '<p><b>Write port:</b> 5-bit write address → 5-to-32 decoder; each decoder output AND RegWrite (WE) drives one register\'s load enable; Write data goes to all 32 registers; only the enabled one captures it on the rising edge. <b>Read ports:</b> each register\'s 32-bit output feeds two 32:1 MUXes; Read register 1 and 2 (5 bits each) are the select inputs → Read data 1 and 2. Reads are combinational so operands are ready within the same cycle; writes are clocked to avoid half-written values and races (read old value, write new at the edge).</p>',
      ['2 — write port (decoder + WE + load enables)', '2 — two read MUXes with 5-bit selects', '1 — read/write timing explanation'], '<p>Draw the registers as a vertical stack, the decoder on the left feeding enables, and two tall MUXes on the right.</p>'),
    T(5, '6', 'Design a 4-bit synchronous up-counter using T (or JK) flip-flops. Draw the circuit and the timing waveforms.', ['D6.4a', 'D6.3b'],
      '<p>T0 = 1, T1 = Q0, T2 = Q0·Q1, T3 = Q0·Q1·Q2 (a bit toggles when all lower bits are 1). All four FFs share the clock; AND chain computes the T inputs. Waveforms: Q0 toggles every clock (÷2), Q1 every 2 (÷4), Q2 every 4 (÷8), Q3 every 8 (÷16); counts 0000 to 1111 and wraps.</p>',
      ['1 — derivation of T equations (state table / rule)', '2 — circuit with common clock and AND gates', '2 — waveforms of Q0–Q3'], '<p>Draw four T FFs in a row with one clock line underneath; put AND gates between them fed by the Q outputs to the left.</p>'),
    T(6, '6', 'Compare asynchronous (ripple) and synchronous counters with neat diagrams of a 3-bit version of each.', ['D6.3a', 'D6.4a', 'D6.3c'],
      '<p>Ripple: only FF0 gets the clock; each next FF is clocked by the previous Q (T = 1) — simple, but the count is valid only after n·t_pd, and transient wrong values appear (7 → 6 → 4 → 0 → 8). Synchronous: one shared clock, T inputs from AND logic — all bits change together; f_max limited by one FF delay + AND delay + setup.</p>',
      ['2 — ripple diagram', '2 — synchronous diagram', '1 — comparison table (clocking, speed, glitches, complexity)'], ''),
    T(7, '3', 'Design a full adder: truth table, Boolean expressions, gate circuit, and its implementation using two half adders. Extend to a 4-bit ripple-carry adder.', ['D3.5a', 'D3.5b', 'D3.5c'],
      '<p>Sum = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B). Two half adders: HA1(A,B) → S1, C1; HA2(S1, Cin) → Sum, C2; Cout = C1 + C2. Chain four FAs: Cout of stage i → Cin of stage i+1, Cin0 = 0. Worst-case delay ≈ n × (carry delay).</p>',
      ['1 — truth table', '1 — expressions', '2 — gate / two-HA circuit', '1 — 4-bit RCA'], ''),
    T(8, '5', 'Explain the master–slave D flip-flop with a diagram and draw Q for a given CLK and D waveform.', ['D5.4c', 'D5.4e'],
      '<p>Two D latches in series with opposite enables. When CLK = 0 the master is transparent (follows D) and the slave holds; when CLK rises, the master closes and the slave opens, passing the captured value → Q changes only at the rising edge (positive-edge FF, Harris &amp; Harris). If the master is enabled on CLK = 1 (class slide), the output changes on the falling edge.</p>',
      ['2 — two latches + inverted clock', '1 — explanation of edge triggering', '2 — Q waveform sampled only at edges'], ''),
    T(9, '5', 'Draw the SR latch using NOR gates and using NAND gates. Give the characteristic tables and explain the forbidden state.', ['D5.2a', 'D5.2b'],
      '<p>NOR: S = 1 sets, R = 1 resets, 00 holds, 11 forbidden (Q = Q\' = 0, race on release). NAND (active-low S\', R\'): 0 activates; S\' = R\' = 0 forbidden (Q = Q\' = 1); 11 holds.</p>', ['2 — NOR circuit + table', '2 — NAND circuit + table', '1 — forbidden-state explanation'], ''),
    T(10, '5', 'Draw a gated D latch and show its transparency on a waveform. Why is it unsafe for pipelines?', ['D5.3a', 'D5.3b'],
      '<p>S = D·EN, R = D\'·EN feed an SR latch, so S and R are never both 1. EN = 1 → Q follows D (transparent); EN = 0 → holds. Glitches on D during EN = 1 pass to Q and data can race through consecutive stages, so pipelines use edge-triggered flip-flops.</p>', ['2 — circuit', '2 — waveform', '1 — reason'], ''),
    T(11, '6', 'Draw SISO, SIPO, PISO and PIPO shift registers (4-bit) and state one use of each.', ['D6.5a', 'D6.5b', 'D6.5c', 'D6.5d'],
      '<p>SISO: Q → D chain, delay line. SIPO: same chain, every Q tapped — serial-to-parallel (UART receive). PISO: 2:1 MUX before each D (Shift/Load\') — parallel-to-serial (UART transmit). PIPO: parallel load register with load enable.</p>', ['1 each for the four diagrams', '1 — uses'], ''),
    T(12, '3', 'Draw a 4:1 multiplexer using basic gates and show how to build it from 2:1 multiplexers. Implement F(A,B,C) = Σm(1,3,5,6) with a 4:1 MUX.', ['D3.2c', 'D3.2d'],
      '<p>Y = S1\'S0\'I0 + S1\'S0 I1 + S1 S0\' I2 + S1 S0 I3. Tree: two 2:1 MUXes on S0 then one on S1. F = Σm(1,3,5,6) with S1 = A, S0 = B: AB = 00 → F = C (m1), 01 → C (m3), 10 → C (m5), 11 → C\' (m6) → I0 = C, I1 = C, I2 = C, I3 = C\'.</p>', ['2 — gate-level 4:1', '1 — tree of 2:1', '2 — Σm(1,3,5,6) implementation'], ''),
    T(13, '3', 'Draw a 3-to-8 decoder (with truth table) and use it to implement a full adder.', ['D3.3d'],
      '<p>Each output Dk = minterm k (8 AND gates + 3 inverters). Full adder with inputs A,B,Cin: Sum = Σm(1,2,4,7) → OR of D1, D2, D4, D7; Cout = Σm(3,5,6,7) → OR of D3, D5, D6, D7.</p>', ['2 — decoder circuit', '1 — truth table', '2 — FA with two OR gates'], ''),
    T(14, '8', 'Draw and explain the 6T SRAM cell and the 1T1C DRAM cell. Why does DRAM need refresh?', ['D8.2a', 'D8.3a', 'D8.3b'],
      '<p>6T: two cross-coupled inverters (4 T) store Q/Q\'; two access transistors connect them to BL and BL\' when the word line is high; reads are non-destructive. 1T1C: access transistor + capacitor; read shares charge with the bit line (destructive) and needs a sense amplifier + write-back; charge leaks in milliseconds so every row is refreshed about every 64 ms.</p>', ['2 — 6T diagram labelled', '2 — 1T1C diagram labelled', '1 — refresh reason'], ''),
    T(15, '9', 'Draw block diagrams of Von Neumann and Harvard architectures and explain the Von Neumann bottleneck. How do modern CPUs combine them?', ['D9.2a', 'D9.4a', 'D9.5a'],
      '<p>VN: one memory and one bus for instructions and data → fetch and data access take turns (bottleneck, Backus 1977). Harvard: separate instruction and data memories and buses → both in one cycle. Modified Harvard: split L1-I / L1-D caches over a unified L2/L3 and DRAM.</p>', ['2 — two block diagrams', '2 — bottleneck explanation', '1 — modified Harvard'], ''),
    T(16, '11', 'Show the R, I and J instruction formats of MIPS with field widths, and encode add $t1, $s1, $s2 and lw $t1, 16($sp).', ['D11.3a', 'D11.4a', 'D11.5a'],
      '<p>R: op 6 | rs 5 | rt 5 | rd 5 | shamt 5 | funct 6; I: op 6 | rs 5 | rt 5 | imm 16; J: op 6 | address 26. add $t1,$s1,$s2 = 000000 10001 10010 01001 00000 100000 = 0x02324820. lw $t1,16($sp) = 100011 11101 01001 0000 0000 0001 0000 = 0x8FA90010.</p>', ['2 — three layouts with widths', '3 — two encodings'], ''),
    T(17, '12', 'Draw the stack frames during fact(3) for the recursive factorial in MIPS and explain why $ra and $a0 are saved.', ['D12.5a', 'D12.5b'],
      '<p>Each call does addi $sp,$sp,-8; sw $ra,4($sp); sw $a0,0($sp). Three frames at peak (n = 3, 2, 1), $sp moving down 8 bytes each time; on return each frame restores n and $ra, multiplies and pops. jal overwrites $ra and the recursive call changes $a0, so both must be saved.</p>', ['2 — frames drawn with $sp', '2 — saved registers labelled', '1 — reason'], ''),
    T(18, '5', 'With a timing diagram, define setup time, hold time and clock-to-Q delay. What happens if they are violated?', ['D5.5a', 'D5.5b'],
      '<p>t_setup: D stable before the edge; t_hold: D stable after the edge; t_cq: edge to valid Q. Violation → metastability (output hovers between 0 and 1 for an unpredictable time). Fix with synchronizer chains; designs target a huge MTBF.</p>', ['2 — timing diagram', '2 — definitions', '1 — consequence'], ''),
    T(19, '2', 'Implement F = AB + CD using only NAND gates and F = (A + B)(C + D) using only NOR gates.', ['D2.5a', 'D2.5b', 'D2.5d'],
      '<p>SOP → NAND-NAND: F = ((AB)\'(CD)\')\' → three 2-input NANDs. POS → NOR-NOR: F = ((A+B)\' + (C+D)\')\' → three 2-input NORs. (With only NANDs, (A+B)(C+D) needs 6 gates — verified by exhaustive search.)</p>', ['2 — NAND circuit', '2 — NOR circuit', '1 — bubble-pushing justification'], ''),
    T(20, '3', 'Design a half adder with truth table and logic diagram.', ['D3.4a'], '<p>Sum = A ⊕ B, Carry = A·B; one XOR + one AND. Cannot accept a carry-in.</p>', ['2 — table', '2 — circuit', '1 — limitation'], ''),
    T(21, '6', 'Draw a 4-bit register with load enable and synchronous reset.', ['D6.2a', 'D6.1a'],
      '<p>Each bit: 2:1 MUX in front of D (LOAD = 1 new data, LOAD = 0 feed back Q); reset gate forces 0 on the clock edge when RST = 1 (priority RST &gt; LOAD &gt; hold). All FFs share the clock.</p>', ['3 — circuit', '2 — behaviour table'], ''),
    T(22, '4', 'Draw a 4-bit adder–subtractor and show how overflow is detected.', ['D4.5a', 'D4.6a'],
      '<p>Each Bi XOR K; K also drives Cin. K = 0: A + B; K = 1: A + B\' + 1 = A − B. V = C3 ⊕ C4 (carry into MSB XOR carry out); unsigned carry/borrow from C4.</p>', ['3 — circuit', '2 — overflow logic'], ''),
    T(23, '8', 'Draw the memory hierarchy pyramid with typical size and latency, and explain the memory wall.', ['D8.5a', 'D8.5b'],
      '<p>Registers (&lt;1 ns, bytes) → L1 (~1 ns, 32–64 KB) → L2 (~3–10 ns, 256 KB–2 MB) → L3 (~10–40 ns, MBs) → DRAM (~50–100 ns, GBs) → SSD (~100 µs) → HDD (~10 ms). Locality lets small fast levels serve most accesses. Memory wall: processor speed improved far faster than DRAM latency, so the gap grows.</p>', ['3 — labelled pyramid', '2 — memory wall'], ''),
    T(24, '13', 'Draw the fetch–decode–execute cycle as a flowchart and relate each step to the datapath.', ['D13.2a'],
      '<p>Fetch: IR ← Mem[PC], PC ← PC + 4. Decode: read rs/rt, sign-extend, generate control. Execute: ALU op / address / compare. Memory: lw/sw. Write-back: register. Loop.</p>', ['3 — flowchart', '2 — mapping'], ''),
    T(25, '7', 'Draw the general block diagram of a Moore and a Mealy machine.', ['D7.3a'],
      '<p>Next-state logic (inputs + present state) → state register (clocked) → output logic. Moore: output logic sees only state; Mealy: output logic also sees inputs.</p>', ['2 + 2 — diagrams', '1 — difference'], ''),
    T(26, '2', 'State De Morgan\'s theorems and show bubble pushing with gate symbols.', ['D2.4a', 'D2.4b'], '<p>(AB)\' = A\' + B\' (NAND ≡ OR with inverted inputs); (A + B)\' = A\'B\' (NOR ≡ AND with inverted inputs).</p>', ['2 — theorems', '3 — symbol equivalences'], ''),
    T(27, '3', 'Draw a 2-to-4 decoder with enable and its truth table.', ['D3.3c'], '<p>D0 = E·A1\'A0\', D1 = E·A1\'A0, D2 = E·A1A0\', D3 = E·A1A0; exactly one output high (one-hot) when E = 1.</p>', ['3 — circuit', '2 — table'], ''),
    T(28, '6', 'Draw a 4-bit ring counter and a 4-bit Johnson counter with their state sequences.', ['D6.E1a', 'D6.E1b'], '<p>Ring: Q3 → D0, preset 0001 → 0001, 0010, 0100, 1000 (4 states). Johnson: Q3\' → D0 → 0000, 0001, 0011, 0111, 1111, 1110, 1100, 1000 (8 = 2n states).</p>', ['2 + 2 — diagrams', '1 — sequences'], ''),
    T(29, '10', 'Show how a modern x86 processor executes a CISC instruction using micro-operations (diagram).', ['D10.5a', 'D10.2b'], '<p>x86 add [mem], reg → decoder splits into µop load, µop add, µop store → RISC-like out-of-order core. CISC outside, RISC inside.</p>', ['3 — diagram', '2 — explanation'], ''),
    T(30, '5', 'Convert a D flip-flop into a T flip-flop and a JK flip-flop into a T flip-flop (diagrams + characteristic equations).', ['D5.E1a', 'D5.E1b'], '<p>T from D: D = T ⊕ Q. T from JK: J = K = T. Q+ = TQ\' + T\'Q.</p>', ['2 + 2 — circuits', '1 — equations'], ''),
    T(31, '1', 'Draw the abstraction stack of a computer system and place the ISA in it.', ['D1.2a', 'D1.2b'], '<p>AI/ML models → applications &amp; languages → OS → ISA → datapath &amp; control → logic gates → transistors. The ISA is the hardware/software contract between OS/compiler and the microarchitecture.</p>', ['3 — labelled stack', '2 — ISA explanation'], ''),
    T(32, '13', 'Identify the critical path of the single-cycle datapath and compute the clock period from given delays.', ['D13.5a'], '<p>lw: t_clk = t_pcq + t_IMem + t_RF-read + t_mux + t_ALU + t_DMem + t_mux + t_RF-setup. Example (P&amp;H numbers): IMem 200, RF read 100, ALU 200, DMem 200, RF write 100 ps → 800 ps for lw (R-type 600, sw 700, beq 500).</p>', ['2 — path drawn', '3 — calculation'], ''),
    T(33, '1', 'Draw the symbols and truth tables of AND, OR, NOT, NAND, NOR, XOR and XNOR gates.', ['D1.3a', 'D1.4a'], '<p>See the seven symbols; NAND and NOR are universal.</p>', ['½ per gate symbol + table', '1 — universal gates note'], ''),
    T(34, '4', 'Draw the 4-bit two\'s-complement number wheel and use it to explain overflow.', ['D4.3a'], '<p>0000 at the top, positive numbers clockwise to 0111 (+7), then 1000 (−8) to 1111 (−1). Adding moves clockwise; crossing the +7/−8 boundary means signed overflow, crossing 1111 → 0000 is unsigned carry.</p>', ['3 — wheel', '2 — overflow explanation'], ''),
    T(35, '12', 'Draw how arguments, return values and the return address flow between caller and callee in MIPS.', ['D12.4a', 'D12.5a'], '<p>Caller puts arguments in $a0–$a3, executes jal (PC + 4 → $ra); callee returns the result in $v0/$v1 and executes jr $ra. $s registers are callee-saved; $t caller-saved.</p>', ['3 — diagram', '2 — conventions'], '')
  ];

  const DRAW = {
    6: 'Draw both 3-bit counters one above the other with the same FF boxes: ripple version with each Q feeding the next clock pin, synchronous version with one clock line underneath and AND gates on the T inputs. Finish with a 4-row comparison table.',
    7: 'Truth table first (8 rows), then the XOR–XOR chain for Sum and AND–AND–OR for Cout; draw the two-HA version as boxes; the RCA as four FA boxes right-to-left with carry arrows.',
    8: 'Two D-latch boxes in a row (Master, Slave), clock to the master through an inverter (or bubble) and straight to the slave; then three waveform rows CLK, D, Q with dashed lines at each active edge.',
    9: 'Two cross-coupled gates drawn as an X between them; label S, R, Q, Q\'; write the 4-row table beside each circuit and circle the forbidden row.',
    10: 'Draw the SR latch first, then put two AND (or NAND) gates in front with EN and D / D\'; below it draw EN, D, Q waveforms and shade the EN = 1 windows.',
    11: 'Four D FFs in a row with a common clock line; change only the D-input wiring between the four sketches (neighbour Q, parallel inputs through a MUX, taps on every Q).',
    12: 'Four AND gates stacked vertically into one OR; write the select minterm on each AND; then three small trapezoids for the 2:1 tree.',
    13: 'Three inverters on the left, eight AND gates in a column, label each output Dk = mk; draw the two OR gates for the full adder on the right.',
    14: '6T: two inverters back to back in the middle, access transistors on each side to BL and BL\', word line across the top. 1T1C: one transistor between the bit line and a capacitor to ground, word line on its gate.',
    15: 'Two block diagrams side by side: one memory and one bus (VN) versus two memories and two buses (Harvard); add a third small sketch of split L1-I/L1-D over a unified L2.',
    16: 'Three long rectangles divided in proportion to field widths with bit numbers above (31, 26, 25, 21, 20, 16, 15, 11, 10, 6, 5, 0); write the binary encoding inside the fields.',
    17: 'A tall rectangle for the stack, high addresses at the top; draw three frames downward (each with saved $ra and $a0) and an arrow for $sp pointing at the lowest one.',
    18: 'CLK waveform with one rising edge, a D waveform that is flat inside a shaded window [edge − t_setup, edge + t_hold], and Q changing t_cq after the edge.',
    19: 'Draw the AND-OR (or OR-AND) version first, then add bubble pairs on internal wires and redraw every gate as NAND (or NOR).',
    20: 'XOR and AND gates fed by the same two inputs; 4-row truth table on the side.',
    21: 'Four D FFs with a 2:1 MUX in front of each D (LOAD selects new data or Q), one clock and a reset line to all.',
    22: 'Four FA boxes; each B input passes through an XOR with K; K also enters as Cin; draw an extra XOR on C3 and C4 for V.',
    23: 'Triangle split into six bands from registers (top) to disk (bottom); write size and latency on each band; add a small CPU-vs-DRAM gap graph.',
    24: 'Five boxes in a loop: Fetch → Decode → Execute → Memory → Write-back → back to Fetch, with PC + 4 written next to Fetch.',
    25: 'Three boxes left to right: next-state logic, state register (with clock), output logic; feedback arrow from register output to next-state logic; for Mealy add an arrow from the inputs to the output logic.',
    26: 'Draw each gate and its bubble-pushed twin side by side joined by ≡.',
    27: 'Four AND gates each fed by E and one combination of A1/A1\' and A0/A0\'; truth table beside.',
    28: 'Four D FFs in a ring; for Johnson take Q3\' back to D0; list the state sequence under each.',
    29: 'One big x86 instruction box → decoder box → three small µop boxes → RISC-like execution core box.',
    30: 'D FF with an XOR in front (inputs T and Q); JK FF with J and K joined into a single T input.',
    31: 'Seven horizontal bars, widest at the bottom; highlight the ISA bar.',
    32: 'Redraw the datapath outline and darken the lw path; write the delay of each block on it and add them up.',
    33: 'Seven symbols in a grid with Y = expression under each, and a combined truth table.',
    34: 'A circle with 16 tick marks: 0000 at the top, numbers clockwise; mark the +7/−8 boundary with a thick line labelled “signed overflow”.',
    35: 'Two boxes (caller, callee) with arrows labelled $a0–$a3 (arguments, down), jal / $ra (call), $v0 (result, up) and jr $ra (return).'
  };
  top.forEach((t, i) => { if (!t.q.draw) t.q.draw = '<p>' + DRAW[i + 1] + '</p>'; });

  window.DIAGQ = {
    intro: '<p class="hint">Exam scope note: diagram questions come from Units 1–13. All four of your class samples are the same question type — <b>trace an instruction on the single-cycle datapath and fill the control signals</b> — so that skill is drilled first, then every other drawable topic is ranked.</p>',
    samples: samples, pattern: pattern, predicted: predicted, top: top,
    topIntro: '<p class="hint">Ranked by likelihood × marks. Each answer shows the full diagram (from the unit pages), a model answer, a marking scheme and drawing tips.</p>',
    ctlTable: ctlTable
  };
})();
