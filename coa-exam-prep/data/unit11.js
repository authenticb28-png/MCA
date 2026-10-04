/* Unit 11 – MIPS Registers & Instruction Formats */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* D11.2a register table */
  const regTable = S.grid([['Name', 'Number', 'Use', 'Saved by'], ['$zero', '0', 'constant 0 (writes ignored)', '—'], ['$at', '1', 'assembler temporary', '—'], ['$v0–$v1', '2–3', 'return values / syscall code', 'caller'], ['$a0–$a3', '4–7', 'function arguments', 'caller'], ['$t0–$t7', '8–15', 'temporaries', 'caller'], ['$s0–$s7', '16–23', 'saved values', 'CALLEE'], ['$t8–$t9', '24–25', 'more temporaries', 'caller'], ['$k0–$k1', '26–27', 'reserved for OS kernel', '—'], ['$gp', '28', 'global pointer', 'callee'], ['$sp', '29', 'stack pointer', 'callee'], ['$fp', '30', 'frame pointer', 'callee'], ['$ra', '31', 'return address (set by jal)', 'callee']], { cw: [100, 80, 230, 90], rh: 24, title: 'MIPS register conventions (PC, HI and LO are separate special registers)', hl: [[1, 0], [6, 3], [10, 0], [12, 0]] });

  /* D11.2b machine model */
  const machine = (function () {
    let s = S.rect(20, 20, 260, 250, 'boxa') + S.tc(150, 42, 'CPU', 'b');
    s += S.box(40, 55, 100, 34, 'PC', 'box', 'sm b') + S.box(160, 55, 100, 34, 'HI · LO', 'box', 'sm b');
    s += S.box(40, 100, 220, 70, '32 registers × 32 bits\n$0 to $31', 'box', 'sm b');
    s += S.alu(100, 180, 90, 80, 'ALU');
    s += S.rect(400, 20, 220, 250, 'box') + S.tc(510, 40, 'Memory: 2³² bytes', 'sm b') + S.tc(510, 56, 'byte-addressable', 'xs muted');
    const seg = [['0x7FFFFFFC  stack ↓ (grows down)', 64, 'box2'], ['free', 104, 'box'], ['heap ↑ (dynamic data)', 144, 'box2'], ['.data  0x10010000', 184, 'box'], ['.text  0x00400000 (code)', 224, 'box2']];
    seg.forEach((g) => { s += S.box(415, g[1], 190, 36, g[0], g[2], 'xs b'); });
    s += S.a([[280, 120], [400, 120]], 'arr') + S.a([[400, 150], [280, 150]], 'arr') + S.tc(340, 112, 'lw / sw', 'xs b') + S.tc(340, 166, 'fetch', 'xs b');
    s += S.t(10, 292, 'Only lw/sw (and lb/sb, lh/sh) move data between registers and memory; everything else works on registers (load/store).', 'xs muted');
    return S.svg(640, 300, s, 'MIPS machine model');
  })();

  const rFmt = S.fields([{ n: 'opcode', b: 6, v: '000000', note: '0 for R-type' }, { n: 'rs', b: 5, v: '01010', note: '$t2 (source 1)' }, { n: 'rt', b: 5, v: '01011', note: '$t3 (source 2)' }, { n: 'rd', b: 5, v: '01001', note: '$t1 (DEST)' }, { n: 'shamt', b: 5, v: '00000', note: 'shift amount' }, { n: 'funct', b: 6, v: '100000', note: 'add = 0x20' }], { title: 'R-format: add $t1, $t2, $t3 = 0x014B4820' });
  const iFmt = S.fields([{ n: 'opcode', b: 6, v: '100011', note: 'lw = 0x23' }, { n: 'rs', b: 5, v: '01001', note: '$t1 (base)' }, { n: 'rt', b: 5, v: '01000', note: '$t0 (DEST for lw)' }, { n: 'immediate', b: 16, v: '0000 0000 0000 0100', note: 'offset 4 (sign-extended)' }], { title: 'I-format: lw $t0, 4($t1) = 0x8D280004' });
  const jFmt = (function () {
    const f = S.fields([{ n: 'opcode', b: 6, v: '000010', note: 'j = 2, jal = 3' }, { n: 'address (word index)', b: 26, v: '26-bit target field', note: 'target[27:2]' }], { title: 'J-format and target address formation' });
    let s = S.box(10, 20, 140, 34, 'PC+4 [31:28]', 'box2', 'sm b') + S.box(150, 20, 420, 34, 'instruction[25:0]  (26 bits)', 'boxa', 'sm b') + S.box(570, 20, 80, 34, '00', 'box2', 'sm b');
    s += S.tc(80, 72, '4 bits', 'xs muted') + S.tc(360, 72, '26 bits', 'xs muted') + S.tc(610, 72, '2 bits (× 4)', 'xs muted');
    s += S.t(10, 96, 'Jump address (32 bits) = PC+4[31:28] ‖ address ‖ 00 → reaches any word in the current 256 MB region.', 'xs b');
    s += S.t(10, 114, 'Example: j 0x00400018 → field = 0x00400018 >> 2 = 0x100006 → word 0x08100006.', 'xs');
    return f + S.svg(660, 122, s, 'jump target formation');
  })();

  const rvExt = (function () {
    let s = S.circ(330, 140, 56, 'boxa') + S.tc(330, 136, 'RV32I', 'b') + S.tc(330, 154, 'base (≈ 40 instr)', 'xs');
    const ex = [['M', 'multiply / divide', 0], ['A', 'atomic ops', 60], ['F', 'single float', 120], ['D', 'double float', 180], ['C', 'compressed 16-bit', 240], ['V', 'vector (SIMD)', 300]];
    ex.forEach((e) => {
      const a = (e[2] - 90) * Math.PI / 180, x = 330 + 115 * Math.cos(a), y = 140 + 92 * Math.sin(a);
      s += S.circ(x, y, 24, 'box2') + S.tc(x, y + 6, e[0], 'lg b') + S.tc(x, y + (y < 140 ? -30 : 40), e[1], 'xs');
      s += S.p([[330 + 56 * Math.cos(a), 140 + 56 * Math.sin(a)], [x - 24 * Math.cos(a), y - 24 * Math.sin(a)]], 'edge');
    });
    s += S.t(10, 296, 'Pick your letters, get your ISA: RV32IMAFD = base + multiply + atomic + float + double.', 'xs b');
    return S.svg(660, 304, s, 'RISC-V base and extensions');
  })();

  const endian = (function () {
    let s = S.t(10, 18, 'Word 0x12345678 stored at address B', 'sm b');
    const big = ['12', '34', '56', '78'], lit = ['78', '56', '34', '12'];
    for (let i = 0; i < 4; i++) {
      s += S.tc(170 + i * 80, 44, 'B+' + i, 'xs muted');
      s += S.box(130 + i * 80, 52, 80, 34, big[i], 'box', 'sm mono') + S.box(130 + i * 80, 100, 80, 34, lit[i], 'box2', 'sm mono');
    }
    s += S.t(120, 74, 'big-endian', 'sm b', 'end') + S.t(120, 122, 'little-endian', 'sm b', 'end');
    s += S.t(10, 160, 'lb $t1, 0($t0) gives 0x12 on big-endian, 0x78 on little-endian. Network order = big; x86 = little; MIPS is bi-endian.', 'xs');
    s += S.t(10, 178, 'Alignment: lw/sw need an address that is a multiple of 4 (lw $t1, 2($t0) → address error); lb/sb have no restriction.', 'xs b');
    return S.svg(640, 186, s, 'endianness');
  })();

  const syscalls = '<div class="table-wrap"><table><tr><th>$v0</th><th>Service</th><th>Arguments</th><th>Result</th></tr><tr><td>1</td><td>print integer</td><td>$a0 = value</td><td>—</td></tr><tr><td>4</td><td>print string</td><td>$a0 = address</td><td>—</td></tr><tr><td>5</td><td>read integer</td><td>—</td><td>$v0</td></tr><tr><td>8</td><td>read string</td><td>$a0 = buffer, $a1 = length</td><td>—</td></tr><tr><td>9</td><td>allocate memory (sbrk)</td><td>$a0 = bytes</td><td>$v0 = address</td></tr><tr><td>10</td><td>exit</td><td>—</td><td>—</td></tr><tr><td>11</td><td>print character</td><td>$a0 = ASCII</td><td>—</td></tr></table></div>';
  const pseudo = '<div class="table-wrap"><table><tr><th>Pseudo-instruction</th><th>Real instruction(s)</th></tr><tr><td>li $t0, 7 (small)</td><td>addiu $t0, $zero, 7 (0x24080007)</td></tr><tr><td>li $t0, 0x12345678</td><td>lui $t0, 0x1234 ; ori $t0, $t0, 0x5678</td></tr><tr><td>la $t0, label</td><td>lui $at, hi(label) ; ori $t0, $at, lo(label)</td></tr><tr><td>lw $t1, label</td><td>lui $at, hi(label) ; lw $t1, lo(label)($at)</td></tr><tr><td>move $t0, $t1</td><td>addu $t0, $zero, $t1</td></tr><tr><td>b label</td><td>beq $zero, $zero, label</td></tr><tr><td>blt $a, $b, L</td><td>slt $at, $a, $b ; bne $at, $zero, L</td></tr><tr><td>bge $a, $b, L</td><td>slt $at, $a, $b ; beq $at, $zero, L</td></tr><tr><td>ble $a, $b, L</td><td>slt $at, $b, $a ; beq $at, $zero, L</td></tr><tr><td>bgt $a, $b, L</td><td>slt $at, $b, $a ; bne $at, $zero, L</td></tr><tr><td>nop</td><td>sll $zero, $zero, 0 (word 0x00000000)</td></tr></table></div>';

  UNITS.push({
    id: 11, title: 'MIPS Registers & Instruction Formats', short: 'MIPS Registers & Formats',
    intro: 'The programmer\'s view of MIPS: 32 registers and their conventions, the three 32-bit instruction formats (R, I, J), encoding/decoding by hand, RISC-V\'s modular alternative, and the assembly toolkit from Lab 11. MCA Lecture 11, MIPS Encoding Reference, Lab 11.',
    subtopics: [
      {
        id: '11.1', title: 'Why MIPS for Teaching', badge: 'class', sources: '[FMT] p2-4; [MIPS] p5-6',
        keywords: 'why mips teaching clean fixed width mars simulator patterson hennessy',
        explain: '<ul><li><b>Clean, fixed-width design:</b> every instruction is 32 bits in one of three formats — small enough to learn completely.</li>' +
          '<li><b>Tooling:</b> the MARS simulator (and SPIM) lets you single-step and watch every register; the portal uses MARS 4.5.</li>' +
          '<li><b>Textbook:</b> Patterson &amp; Hennessy\'s <i>Computer Organization and Design</i> builds its datapath and pipeline on MIPS (Units 13–15 follow it).</li>' +
          '<li><b>Transferable:</b> the register-and-format model carries straight over to RISC-V and ARM; the syntax is the easy part.</li>' +
          '<li><b>History:</b> Stanford, 1984 (John Hennessy); used in SGI workstations, PlayStation 1 (R3000A), Nintendo 64 (VR4300) and PS2 (R5900).</li></ul>',
        keypoints: ['Fixed 32-bit, 3 formats, load/store.', 'MARS simulator; P&H textbook.', 'Skills transfer to RISC-V/ARM.'],
        mistakes: ['Thinking MIPS is only academic — it shipped in millions of consoles and routers.'],
        practice: [
          msq('Reasons the course uses MIPS (select all):', ['clean fixed-width 32-bit encoding', 'MARS simulator for step-by-step tracing', 'it is the ISA of all modern laptops', 'Patterson & Hennessy datapath is built on it'], [0, 1, 3], 'Laptops use x86 or ARM.', ['Yes.', 'Yes.', 'No.', 'Yes.'], 'From class slides'),
          mcq('How many instruction formats does MIPS have?', ['1', '3', '6', 'variable'], 1, 'R, I, J.', ['No.', 'Correct.', 'That is RISC-V.', 'No.']),
          nat('How many bytes long is every MIPS instruction?', 4, 0, '32 bits = 4 bytes → PC + 4.')
        ],
        subjective: [sub('Give four reasons why MIPS is used to teach computer architecture. (2 marks)', '<p>Clean fixed 32-bit, 3 formats; MARS; P&amp;H textbook; transferable to RISC-V/ARM; real-world history.</p>', 2, ['½ each'])]
      },
      {
        id: '11.2', title: 'MIPS Register Set and Conventions', badge: 'class', sources: '[FMT] p5-10; [MIPS] p7, p10; [ART] MIPS teaching guide',
        keywords: 'mips registers zero at v0 a0 t0 s0 sp ra caller saved callee saved pc hi lo',
        explain: '<p>The hardware treats all 32 registers equally (except $zero), but <b>software agrees on a role for each</b> — the calling convention. See the table D11.2a.</p>' +
          '<ul><li><b>$zero ($0):</b> hardwired 0; reads give 0, writes are ignored. Used constantly: <code>move</code> = <code>addu rd, $zero, rs</code>, <code>li</code> = <code>addiu rt, $zero, imm</code>.</li>' +
          '<li><b>$sp ($29)</b> stack pointer; <b>$ra ($31)</b> return address set by <code>jal</code>; <b>$at ($1)</b> reserved for the assembler\'s pseudo-instruction expansions.</li>' +
          '<li><b>$t vs $s — the most-tested rule:</b> $t0–$t9 are <b>caller-saved</b> (not preserved across a call; a called function may clobber them — if the caller needs the value it must save it first). $s0–$s7 are <b>callee-saved</b> (preserved — a function that uses them must restore them before returning). Mnemonic: <i>t = temporary, don\'t trust it; s = saved, it survives</i>.</li>' +
          '<li><b>PC is separate:</b> not one of the 32; updated automatically (PC ← PC + 4) or by a branch/jump. <b>HI and LO</b> are special registers written by mult/div (read with mfhi/mflo).</li>' +
          '<li><b>Machine model (Lab 11):</b> CPU (PC, 32 registers, HI/LO, ALU) + byte-addressable 2³²-byte memory: .text at 0x00400000, .data at 0x10010000, heap growing up, stack growing down from 0x7FFFFFFC.</li></ul>',
        keypoints: ['$zero=0, $at=1, $v0-1=2-3, $a0-3=4-7, $t0-7=8-15, $s0-7=16-23, $t8-9=24-25, $k0-1=26-27, $gp=28, $sp=29, $fp=30, $ra=31.', '$t caller-saved; $s callee-saved.', 'PC, HI, LO are not among the 32.', 'Writes to $zero are ignored.'],
        diagrams: [{ id: 'D11.2a', title: 'MIPS register table', svg: regTable, how: 'Four columns (name, number, use, saved by); memorise the number ranges: 0, 1, 2–3, 4–7, 8–15, 16–23, 24–25, 26–27, 28, 29, 30, 31.' },
          { id: 'D11.2b', title: 'MIPS machine model: CPU + byte-addressable memory', svg: machine, how: 'CPU box with PC, HI/LO, register file and ALU; memory box divided top-to-bottom into stack (down), free, heap (up), .data, .text; arrows lw/sw and fetch.' }],
        mistakes: ['Writing to $zero and expecting a value.', 'Swapping caller/callee-saved roles of $t and $s.', 'Counting the PC as one of the 32 registers.'],
        practice: [
          nat('What is the register number of $sp?', 29, 0, '$gp 28, $sp 29, $fp 30, $ra 31.', 'From class slides'),
          nat('What is the register number of $t0?', 8, 0, '$t0–$t7 = 8–15.', 'From class slides'),
          mcq('A function wants to use $s2. What must it do?', ['nothing — $s registers are temporaries', 'save $s2 on the stack at entry and restore it before returning', 'ask the caller to save it', 'use $zero instead'], 1, '$s registers are callee-saved.', ['That is $t.', 'Correct.', 'That is caller-saved behaviour.', 'No.'], 'From class slides'),
          mcq('Which register receives the return address when jal executes?', ['$sp', '$ra ($31)', '$v0', '$at'], 1, 'jal: $ra ← PC + 4.', ['No.', 'Correct.', 'Return value.', 'Assembler temp.']),
          mcq('After addi $zero, $zero, 5 executes, $zero contains:', ['5', '0', 'undefined', '−5'], 1, 'Writes to $zero are silently ignored.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          match('Match each register group with its role.', ['$a0–$a3', '$v0–$v1', '$t0–$t9', '$s0–$s7'], ['saved across calls', 'function arguments', 'return values', 'temporaries, not preserved'], [1, 2, 3, 0], 'Calling convention.')
        ],
        subjective: [sub('Tabulate the MIPS register conventions and explain the difference between caller-saved and callee-saved registers with an example. (5 marks)', '<p>Table D11.2a. Example: main keeps a loop sum in $s0 across a call to f; f must save/restore $s0 if it uses it. A value in $t0 must be saved by main before calling f.</p>', 5, ['3 — table', '2 — caller vs callee with example'], ['D11.2a'])]
      },
      {
        id: '11.3', title: 'R-Format (Register–Register)', badge: 'class', sources: '[FMT] p11-15, p19; [ENC] p1-4; [MIPS] p12-13',
        keywords: 'r format opcode rs rt rd shamt funct encode decode add sub',
        tool: 'mips',
        explain: '<p><b>Layout:</b> <code>opcode(6) | rs(5) | rt(5) | rd(5) | shamt(5) | funct(6)</code> = 32 bits. Opcode = 0 for every R-type; the <b>funct</b> field picks the operation. <b>rs</b> and <b>rt</b> are the sources (they go to the register file\'s read ports), <b>rd</b> is the destination (write port), <b>shamt</b> is the shift amount (sll/srl/sra; 0 otherwise).</p>' +
          '<p><b>Assembly order ≠ binary order:</b> <code>add rd, rs, rt</code> writes rd first, but in the word the order is rs, rt, rd.</p>' +
          '<div class="table-wrap"><table><tr><th>Instr</th><th>funct (bin)</th><th>hex</th></tr><tr><td>add</td><td>100000</td><td>0x20</td></tr><tr><td>addu</td><td>100001</td><td>0x21</td></tr><tr><td>sub</td><td>100010</td><td>0x22</td></tr><tr><td>and</td><td>100100</td><td>0x24</td></tr><tr><td>or</td><td>100101</td><td>0x25</td></tr><tr><td>xor</td><td>100110</td><td>0x26</td></tr><tr><td>nor</td><td>100111</td><td>0x27</td></tr><tr><td>slt</td><td>101010</td><td>0x2A</td></tr><tr><td>sll / srl / sra</td><td>000000 / 000010 / 000011</td><td>0x00 / 0x02 / 0x03</td></tr><tr><td>jr</td><td>001000</td><td>0x08</td></tr><tr><td>mult / div</td><td>011000 / 011010</td><td>0x18 / 0x1A</td></tr><tr><td>mfhi / mflo</td><td>010000 / 010010</td><td>0x10 / 0x12</td></tr></table></div>' +
          '<p><b>Encoding recipe:</b> (1) look up registers as numbers; (2) place them as rs, rt, rd; (3) write 6+5+5+5+5+6 bits; (4) regroup into nibbles → hex.</p>',
        keypoints: ['R: op 6 | rs 5 | rt 5 | rd 5 | shamt 5 | funct 6.', 'op = 0; funct selects (add 0x20, sub 0x22, and 0x24, or 0x25, slt 0x2A).', 'rd = destination; binary order rs, rt, rd.', 'Shifts: rs = 0, rt = source, shamt = amount.'],
        diagrams: [{ id: 'D11.3a', title: 'R-format fields (add $t1, $t2, $t3)', svg: rFmt, how: 'A 32-bit bar split 6|5|5|5|5|6 with bit numbers 31-26, 25-21, 20-16, 15-11, 10-6, 5-0; write the field names and the binary values inside.' }],
        code: [{ id: 'C11.3a', title: 'Worked encoding: add $t1, $t2, $t3 (class) and add $t2, $t0, $t1 (Lab 11)', lang: 'text', src: 'add $t1, $t2, $t3          rd = $t1 = 9, rs = $t2 = 10, rt = $t3 = 11\nopcode  rs     rt     rd     shamt  funct\n000000  01010  01011  01001  00000  100000\n0000 0001 0100 1011 0100 1000 0010 0000  =  0x014B4820\n\nadd $t2, $t0, $t1          rd = 10, rs = 8, rt = 9\n000000  01000  01001  01010  00000  100000\n0000 0001 0000 1001 0101 0000 0010 0000  =  0x01095020\n\nadd $t1, $s1, $s2  = 000000 10001 10010 01001 00000 100000 = 0x02324820\nsub $s0, $s1, $s2  = 000000 10001 10010 10000 00000 100010 = 0x02328022\nsll $t0, $t1, 2    = 000000 00000 01001 01000 00010 000000 = 0x00094080', io: '<pre>Decode 0x012A4020 (homework): 000000 01001 01010 01000 00000 100000\n→ R-type, funct 0x20 = add, rs = $t1, rt = $t2, rd = $t0 → add $t0, $t1, $t2</pre>' }],
        mistakes: ['Putting rd first in the binary.', 'Using the opcode for the operation of an R-type (it is always 0; funct decides).', 'Shifts: placing the source in rs instead of rt.'],
        practice: [
          txt('Encode add $t0, $t1, $t2 in hex (8 hex digits with the 0x prefix).', ['0x012A4020', '012A4020', '0x012a4020'], '000000 01001 01010 01000 00000 100000.', 'From class slides'),
          txt('Decode 0x02324820 into MIPS assembly.', ['add $t1, $s1, $s2', 'add $t1,$s1,$s2'], 'rs = 17 ($s1), rt = 18 ($s2), rd = 9 ($t1), funct 0x20.', 'From class slides'),
          nat('In R-format, how many bits wide is the funct field?', 6, 0, 'Bits 5–0.'),
          mcq('Which field of add $s0, $s1, $s2 holds 10000 (16)?', ['rs', 'rt', 'rd', 'shamt'], 2, '$s0 = 16 is the destination rd.', ['rs = $s1 = 17.', 'rt = $s2 = 18.', 'Correct.', '0.']),
          txt('Encode sub $t0, $t1, $t2 in hex.', ['0x012A4022', '012A4022', '0x012a4022'], 'Same as add but funct 100010.'),
          mcq('For sll $t0, $t1, 2 which field is 00000?', ['rt', 'rd', 'rs', 'shamt'], 2, 'Shifts use rt as the source; rs is unused (0); shamt = 2.', ['rt = $t1.', 'rd = $t0.', 'Correct.', 'shamt = 00010.'])
        ],
        subjective: [sub('Explain the MIPS R-format with field widths and encode add $t1, $s1, $s2 and sub $s0, $s1, $s2 in binary and hex. (5 marks)', '<p>D11.3a layout; 0x02324820 and 0x02328022 with the binary from C11.3a.</p>', 5, ['2 — format', '1.5 + 1.5 — encodings'], ['D11.3a'])]
      },
      {
        id: '11.4', title: 'I-Format (Immediate, Loads, Stores, Branches)', badge: 'class', sources: '[FMT] p16, p20-21; [MIPS] p14, p16',
        keywords: 'i format immediate addi lw sw beq bne offset sign extension zero extension',
        explain: '<p><b>Layout:</b> <code>opcode(6) | rs(5) | rt(5) | immediate(16)</code>. Used for:</p>' +
          '<ul><li><b>Arithmetic with a constant:</b> <code>addi rt, rs, imm</code> — rt is the DESTINATION. Immediate range −32768 to +32767 (16-bit two\'s complement).</li>' +
          '<li><b>Loads/stores:</b> <code>lw rt, offset(rs)</code> → rt ← Mem[rs + signext(offset)]; <code>sw rt, offset(rs)</code> → Mem[rs + signext(offset)] ← rt. rs = base, rt = data register.</li>' +
          '<li><b>Branches:</b> <code>beq rs, rt, label</code>: imm = (label − (PC + 4)) / 4 — a <b>word offset relative to PC + 4</b>. Target = PC + 4 + signext(imm) × 4.</li>' +
          '<li><b>Sign vs zero extension:</b> addi, lw, sw, beq, slti sign-extend the immediate (0xFFFB = −5, not 65531); the logical immediates <b>andi, ori, xori zero-extend</b>. <code>lui rt, imm</code> puts imm in the upper 16 bits.</li></ul>' +
          '<div class="table-wrap"><table><tr><th>Instr</th><th>opcode</th><th>hex</th></tr><tr><td>addi / addiu</td><td>001000 / 001001</td><td>0x08 / 0x09</td></tr><tr><td>slti</td><td>001010</td><td>0x0A</td></tr><tr><td>andi / ori / xori</td><td>001100 / 001101 / 001110</td><td>0x0C / 0x0D / 0x0E</td></tr><tr><td>lui</td><td>001111</td><td>0x0F</td></tr><tr><td>beq / bne</td><td>000100 / 000101</td><td>0x04 / 0x05</td></tr><tr><td>lb / lw / lbu</td><td>100000 / 100011 / 100100</td><td>0x20 / 0x23 / 0x24</td></tr><tr><td>sb / sw</td><td>101000 / 101011</td><td>0x28 / 0x2B</td></tr></table></div>',
        keypoints: ['I: op 6 | rs 5 | rt 5 | imm 16.', 'rt is the destination for addi/lw; the data source for sw.', 'Effective address = rs + signext(imm).', 'Branch target = PC + 4 + imm × 4.', 'andi/ori/xori zero-extend; others sign-extend.'],
        diagrams: [{ id: 'D11.4a', title: 'I-format fields (lw $t0, 4($t1))', svg: iFmt, how: 'A 32-bit bar split 6|5|5|16; label opcode, rs (base), rt (destination for loads), immediate (offset); write the binary.' }],
        code: [{ id: 'C11.4a', title: 'Decode 0x8D280004 (Lab 11) and other I-format worked examples', lang: 'text', src: '0x8D280004 = 1000 1101 0010 1000 0000 0000 0000 0100\nopcode 100011 = 0x23 = lw | rs 01001 = $t1 | rt 01000 = $t0 | imm 0x0004 = 4\n→ lw $t0, 4($t1)\n\nlw  $t1, 16($sp)   = 100011 11101 01001 0000000000010000 = 0x8FA90010   (homework)\naddi $t0, $zero, 5 = 001000 00000 01000 0000000000000101 = 0x20080005   (class)\naddi $t2, $t3, 5   = 001000 01011 01010 0000000000000101 = 0x216A0005   (Lab 11)\nli $t0, 7 → addiu $t0, $zero, 7                         = 0x24080007   (Lab 11)\nsw  $t2, 4($t1)    = 101011 01001 01010 0000000000000100 = 0xAD2A0004\naddi $sp, $sp, -8  = 001000 11101 11101 1111111111111000 = 0x23BDFFF8\nbeq $t1, $t2, L (L three instructions after PC+4) = 0x112A0003', io: '<pre>Branch example: beq at 0x00400010 with imm = 3 → target = 0x00400014 + 3 × 4 = 0x00400020</pre>' }],
        mistakes: ['Treating rt as a source in lw (it is the destination).', 'Forgetting sign extension: imm 0xFFFB means −5.', 'Computing branch offsets from PC instead of PC + 4, or in bytes instead of words.'],
        practice: [
          txt('Encode lw $t1, 16($sp) in hex.', ['0x8FA90010', '8FA90010', '0x8fa90010'], 'op 0x23, rs 29, rt 9, imm 16.', 'From class slides'),
          txt('Decode 0x8D280004.', ['lw $t0, 4($t1)', 'lw $t0,4($t1)'], 'op 0x23 = lw, rs = $t1, rt = $t0, imm = 4.', 'Lab question'),
          nat('The immediate field of an addi contains 0xFFFB. What value is added (decimal)?', -5, 0, 'Sign-extended: 0xFFFFFFFB = −5.', 'From class slides'),
          nat('beq is at address 0x00400008 and its target label is at 0x00400020. What is the immediate field (decimal)?', 5, 0, '(0x20 − 0x0C) / 4 = 20 / 4 = 5.'),
          mcq('Which of these instructions ZERO-extends its immediate?', ['addi', 'lw', 'ori', 'beq'], 2, 'Logical immediates (andi, ori, xori) zero-extend.', ['Sign.', 'Sign.', 'Correct.', 'Sign.'], 'Lab question'),
          txt('Encode addi $t0, $zero, 5 in hex.', ['0x20080005', '20080005'], 'op 8, rs 0, rt 8, imm 5.', 'From class slides')
        ],
        subjective: [sub('Explain the I-format with field widths. Encode lw $t1, 16($sp) and addi $t0, $zero, 5, and explain how the branch target of beq is computed. (5 marks)', '<p>D11.4a; 0x8FA90010, 0x20080005; target = PC + 4 + signext(imm) × 4 with an example.</p>', 5, ['1.5 — format', '2 — encodings', '1.5 — branch target'], ['D11.4a'])]
      },
      {
        id: '11.5', title: 'J-Format (Jumps)', badge: 'class', sources: '[FMT] p17; [ENC]',
        keywords: 'j format jump jal 26 bit address pseudo direct 256 mb region',
        explain: '<p><b>Layout:</b> <code>opcode(6) | address(26)</code>. Opcodes: <b>j = 000010 (2)</b>, <b>jal = 000011 (3)</b>. (jr is R-type, funct 0x08.)</p>' +
          '<p><b>Target formation (pseudo-direct):</b> the 26-bit field is a <i>word</i> index; shift left 2 → 28 bits; prepend the upper 4 bits of PC + 4 → 32-bit target = <code>PC+4[31:28] ‖ address ‖ 00</code>. A jump reaches anywhere in the current <b>256 MB</b> (2²⁸-byte) region. To jump farther, load the address into a register and use <code>jr</code>.</p>' +
          '<p><b>jal</b> also saves the return address: <code>$ra ← PC + 4</code>, then jumps (Unit 12).</p>' +
          '<p><b>Note on the class reference sheet:</b> the simplified MIPS Encoding Reference describes j as PC-relative (“pc += i &lt;&lt; 2”) and lists teaching opcodes lhi/llo/trap. Real MIPS32 (and the lecture, p17) uses the pseudo-direct rule above and lui. Use the lecture rule in exams unless told otherwise.</p>',
        keypoints: ['J: op 6 | address 26.', 'j = 2, jal = 3.', 'Target = PC+4[31:28] ‖ addr ‖ 00 (256 MB region).', 'jal: $ra ← PC + 4.'],
        diagrams: [{ id: 'D11.5a', title: 'J-format and jump target formation', svg: jFmt, how: 'A 6|26 bar; below it, the 32-bit target built from 4 bits of PC+4, the 26-bit field and two zero bits.' }],
        examples: [{ title: 'Encode j 0x00400018', html: '<p>address field = 0x00400018 &gt;&gt; 2 = 0x0100006 (26 bits) → 000010 | 00 0001 0000 0000 0000 0000 0110 → <b>0x08100006</b>. Check: PC+4[31:28] = 0000, 0x0100006 × 4 = 0x0400018 → target 0x00400018 ✓. jal 0x00400030 → <b>0x0C10000C</b>.</p>' }],
        mistakes: ['Forgetting the << 2 (offsets and jump fields are in words).', 'Thinking j can reach any 32-bit address.', 'Classifying jr as J-format (it is R-format).'],
        practice: [
          nat('How many bits are in the address field of a MIPS J-format instruction?', 26, 0, '32 − 6.', 'From class slides'),
          nat('A j instruction can reach any address within a region of how many MB?', 256, 0, '2²⁸ bytes = 256 MB.', 'From class slides'),
          txt('Encode j 0x00400018 in hex.', ['0x08100006', '08100006'], '0x00400018 >> 2 = 0x100006 with opcode 2.'),
          mcq('Which bits of the jump target come from the current PC?', ['bits 1–0', 'bits 31–28 of PC + 4', 'bits 27–2', 'none'], 1, 'Upper 4 bits of PC + 4.', ['Those are 00.', 'Correct.', 'From the instruction.', 'No.']),
          mcq('jal differs from j because it:', ['is R-format', 'also writes PC + 4 into $ra', 'uses a 16-bit offset', 'jumps relative to $sp'], 1, 'Link = remember the return address.', ['Both J.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Describe the J-format and show how the 32-bit jump address is formed. Encode j 0x00400018. (4 marks)', '<p>D11.5a; target = PC+4[31:28] ‖ addr ‖ 00; 0x08100006.</p>', 4, ['1 — format', '2 — target formation', '1 — encoding'], ['D11.5a'])]
      },
      {
        id: '11.6', title: 'RISC-V\'s Modular ISA', badge: 'class', sources: '[FMT] p22-25',
        keywords: 'risc-v rv32i base extensions m a f d c v formats r i s b u j modular',
        explain: '<ul><li><b>RV32I base:</b> about 40 instructions, 32 registers x0–x31 (x0 = zero, like $zero), fixed 32-bit, load/store — the same RISC DNA as MIPS.</li>' +
          '<li><b>Formats R, I, S, B, U, J</b> — a refinement of MIPS\'s R/I/J with cleaner branch and immediate encodings (register fields always in the same bit positions).</li>' +
          '<li><b>Extension model:</b> pick letters — <b>M</b> multiply/divide, <b>A</b> atomic, <b>F</b> single float, <b>D</b> double float, <b>C</b> compressed 16-bit, <b>V</b> vector. Example RV32IMAFD.</li></ul>' +
          '<div class="table-wrap"><table><tr><th></th><th>MIPS32</th><th>RISC-V (RV32)</th></tr><tr><td>Registers</td><td>32 ($0–$31)</td><td>32 (x0–x31)</td></tr><tr><td>Zero register</td><td>$zero ($0)</td><td>x0</td></tr><tr><td>Instruction width</td><td>fixed 32-bit</td><td>32-bit (+16-bit with C)</td></tr><tr><td>Formats</td><td>R, I, J</td><td>R, I, S, B, U, J</td></tr><tr><td>ISA model</td><td>one fixed set</td><td>modular base + extensions</td></tr><tr><td>Licensing</td><td>proprietary (MIPS Inc.)</td><td>open and royalty-free</td></tr></table></div>' +
          '<p>Learn one and the other is easy — the register-and-format model is the transferable skill, not the syntax.</p>',
        keypoints: ['RV32I ≈ 40 instructions, x0–x31.', 'Formats R, I, S, B, U, J.', 'Extensions M A F D C V.', 'Open, royalty-free, modular.'],
        diagrams: [{ id: 'D11.6a', title: 'RV32I base plus standard extensions', svg: rvExt, how: 'A central circle RV32I with six satellite circles M, A, F, D, C, V, each labelled with its purpose.' }],
        mistakes: ['Saying RISC-V has 3 formats like MIPS (it has 6).', 'Thinking every RISC-V chip supports floating point (only with F/D).'],
        practice: [
          nat('How many basic instruction formats does RISC-V RV32I define?', 6, 0, 'R, I, S, B, U, J.', 'From class slides'),
          match('Match each RISC-V extension letter with its meaning.', ['M', 'A', 'C', 'V'], ['vector / SIMD', 'multiply / divide', 'atomic operations', 'compressed 16-bit instructions'], [1, 2, 3, 0], 'Class extension model.', 'From class slides'),
          mcq('Which statement compares MIPS32 and RISC-V correctly?', ['MIPS is open; RISC-V proprietary', 'both have 32 registers with a hardwired zero register', 'RISC-V has no load/store rule', 'MIPS supports 16-bit compressed instructions'], 1, 'Same register model.', ['Opposite.', 'Correct.', 'Both load/store.', 'That is RISC-V C.'], 'From class slides'),
          txt('What does RV32IMAFD add to the base? (list the four extension names separated by commas)', ['multiply, atomic, float, double', 'multiply atomic float double', 'M A F D'], 'Multiply/divide, atomic, single float, double float.')
        ],
        subjective: [sub('Explain RISC-V\'s modular ISA and compare it with MIPS32 (five points). (4 marks)', '<p>D11.6a; base + extensions; comparison table.</p>', 4, ['2 — modularity', '2 — comparison'], ['D11.6a'])]
      },
      {
        id: '11.E1', title: 'Extra from slides: MIPS assembly toolkit (directives, syscalls, pseudo-ops, HI/LO, shifts, la vs lw, alignment)', badge: 'extra', sources: '[MIPS] p15-38 (Lab 11); [ART] MIPS teaching guide',
        sourceLine: 'Source: Lab 11 slides; MARS 4.5 documentation (syscall table); Patterson & Hennessy Appendix A',
        keywords: 'directives data text asciiz word syscall pseudo instruction li la move mult div hi lo mfhi mflo sll srl sra endianness alignment',
        explain: '<p><b>Directives:</b> <code>.data</code> / <code>.text</code> (segments), <code>.asciiz</code> (string + zero byte), <code>.ascii</code> (no terminator), <code>.word</code> (4-byte values), <code>.byte</code>, <code>.space n</code> (reserve n bytes), <code>.align 2</code> (align to a multiple of 4), <code>.globl main</code>.</p>' +
          '<p><b>syscall — the only window to the outside world.</b> Three-beat pattern: <code>li $v0, service</code> → set <code>$a0</code> → <code>syscall</code>.</p>' + syscalls +
          '<p><b>Pseudo-instructions</b> (the assembler expands them using $at):</p>' + pseudo +
          '<ul><li><b>Arithmetic:</b> <code>add</code> traps on signed overflow, <code>addu</code> wraps. <b>mult rs, rt</b> → 64-bit product in <b>HI:LO</b>; <b>div rs, rt</b> → <b>LO = quotient, HI = remainder</b>; read with <code>mflo</code> / <code>mfhi</code>. 100000 × 100000 = 10¹⁰ → HI = 2, LO = 1410065408. 12! fits in 32 bits, 13! does not. −17 ÷ 5 → LO = −3, HI = −2.</li>' +
          '<li><b>Logic</b> (0xCA with 0x0F): and → 0x0A, or → 0xCF, xor → 0xC5, nor → low byte 0x30 (0xFFFFFF30 in 32 bits).</li>' +
          '<li><b>Shifts</b> on −16 (0xFFFFFFF0) by 2: <code>sll</code> → −64; <code>srl</code> (logical, zeros in) → 0x3FFFFFFC = 1073741820; <code>sra</code> (arithmetic, sign copied) → −4.</li>' +
          '<li><b>la vs lw:</b> <code>la $t0, x</code> loads the ADDRESS of x; <code>lw $t1, x</code> loads its VALUE. Classic bug: <code>la $a0, x</code> then print-integer prints a large address, not 10.</li>' +
          '<li><b>Alignment and endianness:</b> see D11.E1a.</li>' +
          '<li><b>Bug hunt answers (Lab 11):</b> S1 $v0 never set before syscall → add <code>li $v0, 1</code>; S2 la instead of lw → <code>lw $a0, x</code>; S3 mult writes HI/LO, not $t2 → <code>mflo $a0</code>; S4 quotient/remainder swapped → <code>mflo</code> = quotient, <code>mfhi</code> = remainder; S5 <code>lw $t1, 2($t0)</code> unaligned → use offsets 0, 4, 8 or lb.</li></ul>',
        keypoints: ['syscall: 1 print int, 4 print string, 5 read int, 10 exit, 11 print char.', 'div: LO = quotient, HI = remainder.', 'la = address, lw = value.', 'srl fills zeros; sra copies the sign bit.', 'lw/sw need 4-byte-aligned addresses.'],
        diagrams: [{ id: 'D11.E1a', title: 'Endianness and alignment', svg: endian, how: 'Two rows of four byte boxes B+0..B+3: big-endian 12 34 56 78, little-endian 78 56 34 12.' }],
        code: [
          { id: 'C11.E1a', title: 'Program A — add two numbers and print (Lab 11 demo 1)', lang: 'mips', src: '.data\nmsg:    .asciiz "Sum = "\n.text\n.globl main\nmain:\n    li   $t0, 7          # a = 7\n    li   $t1, 5          # b = 5\n    add  $t2, $t0, $t1   # sum = a + b\n    li   $v0, 4          # 4: print string\n    la   $a0, msg        # $a0 = &msg\n    syscall\n    li   $v0, 1          # 1: print int\n    move $a0, $t2        # $a0 = sum\n    syscall\n    li   $v0, 10         # 10: exit\n    syscall', io: '<pre>Sum = 12      (predict: sub gives 2; mult + mflo gives 35)</pre>' },
          { id: 'C11.E1b', title: 'Program D — update a variable, reach the next word (Lab 11 demo 3)', lang: 'mips', src: '.data\nx:  .word 10\ny:  .word 20\n.text\n.globl main\nmain:\n    lw   $t0, x          # $t0 = 10\n    addi $t0, $t0, 5     # $t0 = 15\n    sw   $t0, x          # x = 15\n    la   $t1, x          # $t1 = &x\n    lw   $t2, 4($t1)     # $t2 = y = 20 (the word after x)\n    add  $t2, $t2, $t0   # 35\n    li   $v0, 1\n    move $a0, $t2\n    syscall              # prints 35\n    li   $v0, 10\n    syscall', io: '<pre>35        memory: x 10 → 15, y stays 20</pre>' },
          { id: 'C11.E1c', title: 'Hello, MIPS! (Lab 11 problem 1)', lang: 'mips', src: '.data\nmsg: .asciiz "Hello, MIPS!\\n"\n.text\n.globl main\nmain:\n    li   $v0, 4\n    la   $a0, msg\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>Hello, MIPS!</pre>' },
          { id: 'C11.E1d', title: 'Add two inputs (Lab 11 problem 2)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0        # copy the first value out of $v0 before reading again\n    li   $v0, 5\n    syscall\n    move $t1, $v0\n    add  $t2, $t0, $t1\n    li   $v0, 1\n    move $a0, $t2\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>input 3, 4 → 7;   input −5, 12 → 7</pre>' },
          { id: 'C11.E1e', title: 'Quotient and remainder (Lab 11 problem 3)', lang: 'mips', src: '.data\nnl: .asciiz "\\n"\n.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0        # a\n    li   $v0, 5\n    syscall\n    move $t1, $v0        # b\n    div  $t0, $t1        # LO = a / b, HI = a mod b\n    mflo $t2             # quotient\n    mfhi $t3             # remainder\n    li   $v0, 1\n    move $a0, $t2\n    syscall\n    li   $v0, 4\n    la   $a0, nl\n    syscall\n    li   $v0, 1\n    move $a0, $t3\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>17, 5 → 3 then 2;   100, 7 → 14 then 2;   −17, 5 → −3 then −2</pre>' },
          { id: 'C11.E1f', title: 'Swap two memory variables (Lab 11 problem 4)', lang: 'mips', src: '.data\nx:  .word 10\ny:  .word 20\nnl: .asciiz "\\n"\n.text\n.globl main\nmain:\n    lw   $t0, x          # load BOTH before storing either\n    lw   $t1, y\n    sw   $t1, x\n    sw   $t0, y\n    li   $v0, 1\n    lw   $a0, x\n    syscall              # 20\n    li   $v0, 4\n    la   $a0, nl\n    syscall\n    li   $v0, 1\n    lw   $a0, y\n    syscall              # 10\n    li   $v0, 10\n    syscall', io: '<pre>20\n10</pre>' },
          { id: 'C11.E1g', title: 'Celsius to Fahrenheit: F = C × 9 / 5 + 32 (finisher)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0        # C\n    li   $t1, 9\n    mult $t0, $t1        # multiply first (keeps precision)\n    mflo $t2             # C * 9\n    li   $t3, 5\n    div  $t2, $t3\n    mflo $t2             # C * 9 / 5\n    addi $t2, $t2, 32\n    li   $v0, 1\n    move $a0, $t2\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>100 → 212;   37 → 98;   −40 → −40</pre>' },
          { id: 'C11.E1h', title: 'Multiply by 10 with shifts: 10x = 8x + 2x (finisher)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0\n    sll  $t1, $t0, 3     # 8x\n    sll  $t2, $t0, 1     # 2x\n    add  $t3, $t1, $t2   # 10x\n    li   $v0, 1\n    move $a0, $t3\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>7 → 70;   −3 → −30</pre>' },
          { id: 'C11.E1i', title: '(a + b)(a − b) (finisher)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0        # a\n    li   $v0, 5\n    syscall\n    move $t1, $v0        # b\n    add  $t2, $t0, $t1   # a + b\n    sub  $t3, $t0, $t1   # a - b\n    mult $t2, $t3\n    mflo $t4\n    li   $v0, 1\n    move $a0, $t4\n    syscall\n    li   $v0, 10\n    syscall', io: '<pre>(7, 3) → 40;   (2, 9) → −77</pre>' }],
        mistakes: ['Forgetting li $v0, n before syscall.', 'Reading a second integer before copying the first out of $v0.', 'Swapping mflo/mfhi after div.', 'Unaligned lw.'],
        practice: [
          mcq('After div $t0, $t1 with $t0 = 17 and $t1 = 5, which instruction gets the remainder?', ['mflo', 'mfhi', 'mult', 'move'], 1, 'HI = remainder (2), LO = quotient (3).', ['Quotient.', 'Correct.', 'No.', 'No.'], 'Lab question'),
          nat('Which syscall code (value in $v0) reads an integer?', 5, 0, '1 print int, 4 print string, 5 read int, 10 exit.', 'Lab question'),
          mcq('x is a .word with value 42. Which instruction loads 42 into $a0?', ['la $a0, x', 'lw $a0, x', 'li $a0, x', 'move $a0, x'], 1, 'la gives the address.', ['Address.', 'Correct.', 'Not a valid form for a label value.', 'No.'], 'Lab question (bug hunt S2)'),
          nat('$t0 = −16. What does sra $t1, $t0, 2 leave in $t1?', -4, 0, 'Arithmetic shift keeps the sign.', 'Lab question'),
          txt('The word 0x12345678 is stored at address B on a little-endian machine. What byte (hex, two digits) is at B+0?', ['78', '0x78'], 'Little-endian stores the least significant byte first.', 'Lab question'),
          mcq('Which pseudo-instruction expands to slt $at, $a, $b followed by bne $at, $zero, L?', ['bge $a, $b, L', 'blt $a, $b, L', 'ble $a, $b, L', 'b L'], 1, 'blt: branch if a < b.', ['beq after slt.', 'Correct.', 'slt with swapped operands + beq.', 'beq $zero, $zero.'])
        ],
        subjective: [sub('Write a MIPS program that reads two integers and prints their quotient and remainder on separate lines. Explain the role of HI and LO. (5 marks)', '<p>Program C11.E1e. div puts the quotient in LO and the remainder in HI; mflo/mfhi copy them to general registers. Each print needs $v0 and $a0 set again because syscalls reuse them.</p>', 5, ['3 — program', '1 — HI/LO', '1 — syscall pattern'])]
      }
    ]
  });
})();
