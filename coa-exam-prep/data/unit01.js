/* Unit 1 – Digital Foundations I: Boolean Algebra */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;

  /* --- diagrams --- */
  const modules = (function () {
    const M = [['M1', 'Wk 1–2', 'Digital Foundations', 'gates, Boolean algebra,\ncombinational blocks, numbers'], ['M2', 'Wk 3–4', 'Sequential & Memory', 'flip-flops, registers,\ncounters, FSMs, reg files'], ['M3', 'Wk 5–6', 'Organisation & ISA', 'instruction sets, assembly,\nC → machine code'],
      ['M4', 'Wk 7–8', 'Datapath & Pipelining', 'build a CPU,\nmake it fast'], ['M5', 'Wk 9–10', 'Memory Hierarchy', 'why memory is slow,\nhow caches hide it'], ['M6', 'Wk 11–12', 'Parallelism & Modern', 'multicore, GPUs, TPUs']];
    let s = '';
    M.forEach((m, i) => {
      const x = 10 + (i % 3) * 230, y = 10 + Math.floor(i / 3) * 110;
      s += S.rect(x, y, 210, 92, i < 3 ? 'box' : 'box2');
      s += S.t(x + 10, y + 22, m[0] + ' · ' + m[2], 'sm b') + S.t(x + 200, y + 22, m[1], 'xs muted', 'end');
      m[3].split('\n').forEach((ln, k) => (s += S.t(x + 10, y + 48 + k * 16, ln, 'xs')));
      if (i % 3 < 2) s += S.a([[x + 210, y + 46], [x + 230, y + 46]], 'arr');
    });
    s += S.a([[680, 102], [680, 110], [125, 110], [125, 120]], 'arr');
    return S.svg(710, 225, s, 'six-module course roadmap');
  })();

  const stack = (function () {
    const L = [['AI / ML models', 'neural nets, training'], ['Applications & languages', 'Python, your programs'], ['Operating system', 'processes, memory management'], ['Instruction set (ISA)', 'the CPU\'s vocabulary — HW/SW contract'], ['Datapath & control', 'registers, ALU, MUXes, FSMs'], ['Logic gates', 'AND, OR, NOT'], ['Transistors', 'silicon switches']];
    let s = '';
    L.forEach((l, i) => {
      const w = 400 + i * 32, x = 360 - w / 2, y = 10 + i * 42;
      s += S.rect(x, y, w, 36, i === 3 ? 'boxa' : (i >= 4 ? 'box2' : 'box'), 4);
      s += S.t(x + 12, y + 23, l[0], 'sm b') + S.t(x + w - 12, y + 23, l[1], 'xs muted', 'end');
    });
    s += S.a([[24, 300], [24, 20]], 'arr') + S.t(32, 160, 'more abstract ↑', 'xs muted', 'start', -90);
    s += S.tc(360, 316, 'This course climbs the middle: logic gates → datapath & control → ISA', 'xs b');
    return S.svg(700, 326, s, 'abstraction stack');
  })();

  const layers = (function () {
    const R = [['Python / C', 'A[i] = B[i] + C[i]', 'you write one obvious line'], ['Machine code', 'lw · lw · add · sw', 'compiler emits ISA instructions'], ['Datapath', 'regfile → ALU → regfile', 'registers feed an adder, result written back'], ['Gates & transistors', 'XOR, AND, carry logic', 'the adder is gates; gates are transistors']];
    let s = '';
    R.forEach((r, i) => {
      const y = 10 + i * 64;
      s += S.box(10, y, 150, 44, r[0], 'boxa', 'sm b') + S.rect(175, y, 230, 44, 'box', 4) + S.tc(290, y + 27, r[1], 'mono sm b') + S.t(420, y + 27, r[2], 'xs');
      if (i < 3) s += S.a([[85, y + 44], [85, y + 64]], 'arr');
    });
    return S.svg(700, 270, s, 'one line of code through every layer');
  })();

  const vlsi = S.chain(['Specification', 'RTL / Verilog', 'Simulation', 'Synthesis', 'Gate netlist', 'Place & Route', 'Phys. verify\n(DRC/LVS/STA)', 'Fabrication', 'Post-silicon\nvalidation'], { bw: 150, bh: 56, gap: 28, perRow: 5, foot: 'Lab 1 lives in RTL + Simulation (iverilog → vvp → GTKWave); synthesis tools: Synopsys DC, Cadence Genus', title: 'From assign y = a & b; to silicon' });

  const gates7 = (function () {
    const G = [['NOT', 'Y = A\''], ['AND', 'Y = A·B'], ['OR', 'Y = A + B'], ['NAND', 'Y = (A·B)\''], ['NOR', 'Y = (A + B)\''], ['XOR', 'Y = A ⊕ B = A\'B + AB\''], ['XNOR', 'Y = (A ⊕ B)\' = A\'B\' + AB']];
    let s = '';
    G.forEach((g, i) => {
      const x = 40 + (i % 4) * 190, y = 50 + Math.floor(i / 4) * 120;
      const gg = S.gate(g[0], x, y);
      s += gg.svg;
      gg.in.forEach((p, k) => (s += S.t(p[0] - 4, p[1] + 4, g[0] === 'NOT' ? 'A' : 'AB'[k], 'xs b', 'end')));
      s += S.t(gg.out[0] + 4, gg.out[1] + 4, 'Y', 'xs b');
      s += S.tc(x + 30, y + 40, g[0], 'sm b') + S.tc(x + 30, y + 56, g[1], 'xs mono');
    });
    return S.svg(780, 260, s, 'seven logic gate symbols');
  })();

  const glance = S.grid([['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR'], ['0', '0', '0', '0', '1', '1', '0', '1'], ['0', '1', '0', '1', '1', '0', '1', '0'], ['1', '0', '0', '1', '1', '0', '1', '0'], ['1', '1', '1', '1', '0', '0', '0', '1']], { cw: [44, 44, 64, 64, 64, 64, 64, 64], title: 'Truth tables of the two-input gates' });

  const yabc = (function () {
    const g1 = S.gate('AND', 120, 110), g2 = S.gate('OR', 260, 80);
    let s = g1.svg + g2.svg;
    s += S.wire([20, 100], g1.in[0]) + S.t(14, 104, 'B', 'b', 'end') + S.wire([20, 120], g1.in[1]) + S.t(14, 124, 'C', 'b', 'end');
    s += S.wire(g1.out, g2.in[1]) + S.wire([20, 70], g2.in[0]) + S.t(14, 74, 'A', 'b', 'end');
    s += S.t(g2.out[0] + 6, g2.out[1] + 4, 'Y = A + BC', 'b');
    s += S.tc(145, 145, 'BC', 'xs muted');
    return S.svg(420, 160, s, 'Y = A + BC');
  })();

  const simsyn = (function () {
    let s = S.box(10, 50, 130, 50, 'Verilog RTL\n(.v files)', 'boxa');
    s += S.box(220, 10, 170, 50, 'Simulator\n(iverilog / vvp)', 'box') + S.box(220, 90, 170, 50, 'Synthesis tool\n(DC / Genus)', 'box');
    s += S.box(470, 10, 170, 50, 'Waveforms (VCD)\n→ GTKWave', 'box2') + S.box(470, 90, 170, 50, 'Gate-level netlist\n→ real silicon', 'box2');
    s += S.a([[140, 70], [180, 70], [180, 35], [220, 35]], 'arr') + S.a([[180, 75], [180, 115], [220, 115]], 'arr');
    s += S.a([[390, 35], [470, 35]], 'arr') + S.a([[390, 115], [470, 115]], 'arr');
    s += S.tc(325, 160, 'same language, two audiences: one pretends to be hardware, one builds it', 'xs muted');
    return S.svg(660, 170, s, 'simulation vs synthesis');
  })();

  UNITS.push({
    id: 1, title: 'Digital Foundations I: Boolean Algebra', short: 'Boolean Algebra & Gates',
    intro: 'Where everything starts: what architecture means, the abstraction stack, the seven gates, truth tables and the Boolean laws. Lecture L01 and Lab 1 (Verilog gates).',
    subtopics: [
      {
        id: '1.1', title: 'Course Introduction and Roadmap', badge: 'class', sources: '[L01] p1-10 (Course Intro & Boolean Algebra); [LB1] p15-16',
        keywords: 'architecture organisation grading modules',
        explain: '<p><b>Analogy:</b> a building\'s <i>architecture</i> is the plan the residents see (which rooms, doors, switches exist); its <i>organisation</i> is the hidden wiring and plumbing that makes them work. Two buildings can share a plan but be built very differently.</p>' +
          '<p><b>Computer architecture</b> is the design of how hardware is organised to run software — the bridge between the two. The course separates two views:</p>' +
          '<ul><li><b>Architecture (the “what”, the interface):</b> what instructions the CPU offers, how registers and memory appear to the programmer — the programmer\'s contract. Example: “this CPU has an ADD instruction”.</li>' +
          '<li><b>Organisation (the “how”, the implementation):</b> how ADD is actually built — pipelines, caches, clock speed — hidden from the programmer. Example: “ADD takes 1 cycle using this adder”.</li></ul>' +
          '<p>The course (CSA222) climbs from gates to an AI accelerator in <b>six modules</b> over 12 weeks (24 lectures, 2 lectures + 2 labs a week): M1 Digital Foundations, M2 Sequential Circuits &amp; Memory, M3 Computer Organisation &amp; ISA, M4 CPU Datapath &amp; Pipelining, M5 Memory Hierarchy &amp; Cache, M6 Parallelism &amp; Modern (multicore, GPUs, TPUs). Grading: end-sem 40%, mid-sem 20%, contests 20%, projects 10%, assignments 10%. Tools: Verilog + simulation (Modules 1–2), MIPS assembler/simulator MARS (Module 3), hardware boards.</p>' +
          '<p><b>Why care:</b> performance (caches and pipelines explain 100× speed differences), systems depth (OS, compilers, databases rest on this model), AI/ML (GPUs/TPUs are architecture) and interviews.</p>',
        keypoints: ['Architecture = <b>what</b> the programmer sees (ISA, registers, memory model). Organisation = <b>how</b> it is implemented (pipeline, cache, clock).', 'Same ISA, different organisations: e.g. many x86 chips run identical programs at very different speeds.', 'Course path: gates → datapath → ISA (the middle of the abstraction stack).', 'Six modules × 2 weeks; mid-sem 20%, end-sem 40%.'],
        diagrams: [{ id: 'D1.1a', title: 'Six-module journey', svg: modules, how: 'Two rows of three boxes M1–M6 with arrows; write one line of content under each.' }],
        mistakes: ['Calling cache size or pipeline depth “architecture” — they are organisation (invisible to correct programs).', 'Thinking architecture and organisation must change together: one ISA can have many implementations.'],
        practice: [
          mcq('“This processor provides a MULT instruction that leaves the 64-bit product in HI and LO.” This statement describes the processor\'s:', ['Organisation', 'Architecture (ISA)', 'Microarchitecture', 'Fabrication technology'], 1, 'It is visible to and relied upon by the programmer, so it is part of the ISA (architecture).', ['Organisation is how it is built, not what is offered.', 'Correct — instruction set and its visible results.', 'Microarchitecture is another name for organisation.', 'Fabrication (e.g. 3 nm) is invisible to programs.']),
          mcq('Which statement is about <b>organisation</b>, not architecture?', ['The ISA has 32 general-purpose registers', 'The add instruction has a 6-bit opcode field', 'The L1 data cache is 48 KB and 12-way set associative', 'Memory is byte-addressable'], 2, 'Cache size/associativity changes performance only; programs run the same — organisation.', ['Register count is visible to the programmer.', 'Instruction encoding is part of the ISA.', 'Correct.', 'Addressing model is architectural.']),
          msq('Select ALL items that are part of an instruction set architecture.', ['Instruction formats and opcodes', 'Number of programmer-visible registers', 'Number of pipeline stages', 'Clock frequency'], [0, 1], 'Formats/opcodes and visible registers form the contract; pipeline depth and clock speed are implementation choices.', ['Part of ISA.', 'Part of ISA.', 'Organisation.', 'Organisation / technology.']),
          mcq('In the course plan, which module builds a working CPU and makes it fast with pipelining?', ['M2', 'M3', 'M4', 'M5'], 2, 'M4 (weeks 7–8) is CPU Datapath & Pipelining.', ['M2 is sequential circuits & memory.', 'M3 is organisation & ISA.', 'Correct.', 'M5 is memory hierarchy & cache.'], 'From class slides')
        ],
        subjective: [sub('Differentiate between computer architecture and computer organisation with two examples of each. (5 marks)',
          '<div class="table-wrap"><table><tr><th></th><th>Architecture</th><th>Organisation</th></tr><tr><td>Meaning</td><td>Attributes visible to the programmer; the HW/SW contract (ISA)</td><td>Operational units and their interconnection that realise the architecture</td></tr><tr><td>Question answered</td><td>What does the machine do?</td><td>How does it do it?</td></tr><tr><td>Examples</td><td>Instruction set, instruction formats, number of registers, addressing modes, data types</td><td>Pipelining, cache size, clock rate, control signals, adder type (ripple vs lookahead)</td></tr><tr><td>Change impact</td><td>Breaks software compatibility</td><td>Same programs run, only speed/cost changes</td></tr></table></div><p>Example: Intel and AMD x86-64 chips share the architecture but differ in organisation.</p>', 5,
          ['1 — definitions', '2 — two architecture examples', '2 — two organisation examples / comparison'])]
      },
      {
        id: '1.2', title: 'Why Architecture Matters – The Abstraction Stack', badge: 'class', sources: '[L01] p2-4, p11-14; [LB1] p3-14 (history slides, VLSI flow)',
        keywords: 'abstraction stack transistor moore law ISA vlsi',
        explain: '<p><b>Analogy:</b> driving a car you use the steering wheel (an interface) without knowing the engine\'s combustion details — each layer hides the one below.</p>' +
          '<p>The <b>abstraction stack</b> (top = most abstract): AI/ML models → applications &amp; languages → operating system → <b>instruction set architecture (ISA)</b> → datapath &amp; control → logic gates → transistors. You can work at one level trusting the rest. This course climbs the middle: gates → datapath → ISA.</p>' +
          '<p><b>One line, every layer:</b> <code>A[i] = B[i] + C[i]</code> becomes machine code <code>lw, lw, add, sw</code>; the datapath reads two registers, the ALU adds, the result is written back; the adder is XOR/AND carry logic; gates are transistors (switches: on = 1, off = 0).</p>' +
          '<p><b>History from the Lab 1 slides:</b> 1847 Boole (algebra of logic) + 1937 Shannon (switching circuits obey Boolean algebra); 1947 point-contact transistor replaced the vacuum tube (ENIAC: ~18,000 tubes, 30 tons); 1958 Kilby\'s first integrated circuit; 1971 Intel 4004 — first single-chip CPU (~2,300 transistors, ~740 kHz, 4-bit, 10 µm PMOS); Moore\'s law: transistor count doubles about every two years; a 3 nm transistor vs a 75,000 nm hair. Gate counts grew from 10²–10³ (ENIAC ~1,500 gates, 1945) to 10⁹–10¹¹ (Apple M2 ~20 billion transistors, 2022).</p>' +
          '<p><b>VLSI flow:</b> specification → RTL (Verilog) → simulation → synthesis → gate-level netlist → place &amp; route → physical verification (DRC, LVS, STA) → fabrication → post-silicon validation.</p>',
        keypoints: ['Stack: AI/ML → apps → OS → <b>ISA</b> → datapath/control → gates → transistors.', 'ISA sits between software (compilers, OS) and hardware (datapath).', 'A[i]=B[i]+C[i] → lw, lw, add, sw (4 MIPS instructions).', 'Intel 4004 (1971): ~2,300 transistors, 740 kHz, 4-bit.', 'Moore\'s law: transistor count ×2 every ~2 years.'],
        diagrams: [
          { id: 'D1.2a', title: 'The abstraction stack', svg: stack, how: 'Seven stacked bars, widest at the bottom (transistors); highlight the ISA bar and write “HW/SW contract”.' },
          { id: 'D1.2b', title: 'A[i] = B[i] + C[i] through the layers', svg: layers, how: 'Four boxes down the page: source line → lw/lw/add/sw → regfile→ALU→regfile → XOR/AND carry gates.' },
          { id: 'D1.2c', title: 'VLSI implementation flow (RTL → silicon)', svg: vlsi, how: 'Chain of nine boxes; bracket “Lab 1” over RTL + Simulation.' }],
        mistakes: ['Placing the OS below the ISA — the OS runs on the ISA.', 'Thinking Moore\'s law is about clock speed; it is about transistor count.'],
        practice: [
          mcq('In the abstraction stack, the ISA lies directly between:', ['Applications and the operating system', 'Operating system and datapath & control', 'Logic gates and transistors', 'Datapath and logic gates'], 1, 'Software layers (OS and above) are compiled to the ISA; the datapath implements it.', ['Both are software layers above the ISA.', 'Correct.', 'Gates are built from transistors — far below.', 'Datapath sits below the ISA, gates below the datapath.'], 'From class slides'),
          nat('How many MIPS instructions does the class slide use to implement A[i] = B[i] + C[i] (address already in registers)?', 4, 0, 'lw B[i], lw C[i], add, sw A[i] = 4 instructions (load/store architecture: ALU works only on registers).', 'From class slides'),
          mcq('Moore\'s law predicts that, roughly every two years, the:', ['clock frequency doubles', 'number of transistors on a chip doubles', 'power consumption halves', 'memory latency halves'], 1, 'Gordon Moore\'s observation (1965, revised 1975) is about transistor count per chip.', ['Clock speed stalled around 2005 (power wall).', 'Correct.', 'Not part of the law.', 'Memory latency improved slowly — the memory wall.']),
          mcq('Which 1971 chip is called the first single-chip microprocessor?', ['Intel 8086', 'Intel 4004', 'MIPS R2000', 'Motorola 68000'], 1, 'Intel 4004: ~2,300 transistors, 4-bit, ~740 kHz.', ['8086 is 1978.', 'Correct.', 'R2000 is 1985–86.', '68000 is 1979.'], 'From class slides')
        ],
        subjective: [sub('Explain the abstraction stack of a computer system using the statement A[i] = B[i] + C[i]. Why is the ISA called the hardware/software contract? (5 marks)',
          '<p>Draw the seven-layer stack (D1.2a). Trace the statement: the compiler maps it to <code>lw $t0, B[i]; lw $t1, C[i]; add $t2, $t0, $t1; sw $t2, A[i]</code>; the control unit sets up the datapath so the register file feeds two operands to the ALU and writes the sum back; the ALU adder is built from XOR/AND gates (full adders); gates are made of CMOS transistors acting as switches.</p><p>The ISA is the contract because everything above it (compilers, OS, applications) is written to it and everything below (microarchitecture) must implement it; as long as both honour it, hardware and software evolve independently (old programs run on new chips).</p>', 5,
          ['2 — labelled stack', '2 — trace of the statement through layers', '1 — contract explanation'], ['D1.2a', 'D1.2b'])]
      },
      {
        id: '1.3', title: 'Boolean Logic Basics: AND, OR, NOT, XOR Gates', badge: 'class', sources: '[L01] p15-25; [LB1] p16-34 (Lab 1 gates in Verilog); [SP3] Lab 01 portal problems',
        keywords: 'and or not xor nand nor xnor gate symbol verilog',
        explain: '<p><b>Analogy:</b> two light switches in <b>series</b> light the bulb only if both are on (AND); in <b>parallel</b> either one lights it (OR); an inverter is a switch that is on when you are not pressing it (NOT).</p>' +
          '<p>Digital signals have two values: <b>1</b> = TRUE = HIGH (≈3.3 V or 5 V) and <b>0</b> = FALSE = LOW (≈0 V). Reliability comes from only distinguishing voltage from no voltage.</p>' +
          '<ul><li><b>NOT</b> (inverter): Y = A\' — flips the input.</li><li><b>AND</b>: Y = A·B — 1 only when all inputs are 1.</li><li><b>OR</b>: Y = A + B — 1 when at least one input is 1 (“+” means OR, not arithmetic: A + 1 = 1).</li>' +
          '<li><b>NAND</b> = AND then NOT, <b>NOR</b> = OR then NOT — the <i>universal gates</i>: NOT A = A NAND A.</li>' +
          '<li><b>XOR</b>: Y = A ⊕ B = A\'B + AB\' — 1 when inputs <i>differ</i>; an n-input XOR is 1 for an odd number of 1s (parity) — the heart of the adder.</li><li><b>XNOR</b>: Y = (A ⊕ B)\' = A\'B\' + AB — 1 when inputs are equal (equality detector).</li></ul>' +
          '<p>In Lab 1 each gate is one Verilog module with a continuous assignment, e.g. <code>assign y = a &amp; b;</code> (bitwise operators: <code>&amp; | ~ ^ ~^</code>).</p>',
        keypoints: ['AND = series, OR = parallel, NOT = invert.', 'XOR = A\'B + AB\' (inputs differ); XNOR = A\'B\' + AB (inputs equal).', 'NAND/NOR are universal (functionally complete).', 'Verilog: <code>&amp;</code> AND, <code>|</code> OR, <code>~</code> NOT, <code>^</code> XOR, <code>~^</code> XNOR.', 'A bubble on a symbol = inversion.'],
        diagrams: [{ id: 'D1.3a', title: 'Symbols of the seven gates with expressions', svg: gates7, how: 'AND = D-shape, OR = shield/curved back, XOR = OR with a second back curve; add a small bubble for NOT/NAND/NOR/XNOR.' }],
        code: [
          { id: 'C1.3a', title: 'and_gate.v (Lab 1, Exercise 1)', lang: 'verilog', src: '// 2-input AND gate\nmodule and_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = a & b;   // continuous: y updates whenever a or b changes\nendmodule', io: '<pre>a=0 b=0 → y=0\na=0 b=1 → y=0\na=1 b=0 → y=0\na=1 b=1 → y=1</pre>' },
          { id: 'C1.3b', title: 'and_tb.v — testbench that drives all four input pairs and records a waveform', lang: 'verilog', src: 'module and_tb;\n    reg  a, b;          // driven from a procedural block → reg\n    wire y;\n    and_gate dut (.a(a), .b(b), .y(y));\n    initial begin\n        $dumpfile("and.vcd");          // waveform file\n        $dumpvars(0, and_tb);          // record every signal under and_tb\n        $monitor("t=%0t a=%b b=%b y=%b", $time, a, b, y);\n        a = 0; b = 0; #10;\n        a = 0; b = 1; #10;\n        a = 1; b = 0; #10;\n        a = 1; b = 1; #10;\n        $finish;\n    end\nendmodule', io: '<pre>$ iverilog -o and.vvp and_gate.v and_tb.v\n$ vvp and.vvp\nt=0 a=0 b=0 y=0\nt=10 a=0 b=1 y=0\nt=20 a=1 b=0 y=0\nt=30 a=1 b=1 y=1\n$ gtkwave and.vcd</pre>' },
          { id: 'C1.3c', title: 'or_gate.v, not_gate.v, xor_gate.v (Lab 1, Exercise 2 + portal solutions)', lang: 'verilog', src: 'module or_gate (input a, input b, output y);\n    assign y = a | b;\nendmodule\n\nmodule not_gate (input a, output y);\n    assign y = ~a;\nendmodule\n\nmodule xor_gate (input a, input b, output y);\n    assign y = a ^ b;                  // operator form\n    // equivalent SOP form used in the portal solution:\n    // assign y = (~a & b) | (a & ~b);\nendmodule', io: '<pre>OR : 00→0 01→1 10→1 11→1\nNOT: 0→1 1→0\nXOR: 00→0 01→1 10→1 11→0</pre>' },
          { id: 'C1.3d', title: 'nand_gate.v and nor_gate.v (portal Lab 01)', lang: 'verilog', src: 'module nand_gate (a, b, y);\n    input a, b;\n    output y;\n    assign y = ~(a & b);\nendmodule\n\nmodule nor_gate (input a, input b, output y);\n    assign y = ~(a | b);\nendmodule', io: '<pre>NAND: 00→1 01→1 10→1 11→0\nNOR : 00→1 01→0 10→0 11→0</pre>' },
          { id: 'C1.3e', title: 'xnor_gate.v and NAND built from AND + NOT (Lab 1 take-home)', lang: 'verilog', src: 'module xnor_gate (input a, input b, output y);\n    assign y = ~(a ^ b);          // 1 when a == b\nendmodule\n\n// Take-home 01: NAND using only the and_gate and not_gate modules\nmodule nand_from_prims (input a, input b, output y);\n    wire w;\n    and_gate u1 (.a(a), .b(b), .y(w));\n    not_gate u2 (.a(w), .y(y));\nendmodule', io: '<pre>XNOR: 00→1 01→0 10→0 11→1\nnand_from_prims: 00→1 01→1 10→1 11→0</pre>' }],
        mistakes: ['Reading “+” as addition: A + 1 = 1, not 2.', 'Confusing OR with XOR — only the last row (1,1) differs.', 'Forgetting the bubble: NAND ≠ AND.', 'In Verilog, a missing <code>$dumpvars</code> gives an empty VCD; an undriven input shows X (red) in GTKWave.'],
        practice: [
          mcq('For inputs A = 1, B = 0, which gate(s) output 1?', ['Only AND', 'Only OR', 'Both AND and OR', 'Neither'], 1, 'AND needs both inputs 1 → 0. OR needs at least one → 1. (XOR would also give 1.)', ['AND(1,0) = 0.', 'Correct.', 'AND gives 0.', 'OR gives 1.'], 'Class quiz (L01 quick check)'),
          msq('With A = B = 0, which gates output 1? (select all)', ['NAND', 'NOR', 'XOR', 'XNOR'], [0, 1, 3], 'NAND(0,0)=1, NOR(0,0)=1, XOR(0,0)=0, XNOR(0,0)=1.', ['NOT(0·0)=1 ✓', 'NOT(0+0)=1 ✓', 'Inputs equal → 0 ✗', 'Inputs equal → 1 ✓']),
          mcq('A 3-input XOR gate with inputs 1, 1, 1 outputs:', ['0', '1', 'undefined', 'depends on order'], 1, 'XOR is 1 for an odd number of 1s; three 1s is odd → 1.', ['That would be the even-count result.', 'Correct.', 'XOR is fully defined.', 'XOR is associative and commutative.']),
          mcq('Which expression equals A XNOR B?', ['A\'B + AB\'', 'A\'B\' + AB', '(A + B)\'', 'A·B'], 1, 'XNOR = 1 when inputs are equal: both 0 (A\'B\') or both 1 (AB).', ['That is XOR.', 'Correct.', 'That is NOR (only 00 → 1).', 'That is AND.']),
          mcq('In Verilog, <code>assign y = ~(a ^ b);</code> implements:', ['NAND', 'NOR', 'XOR', 'XNOR'], 3, 'NOT of XOR = XNOR.', ['NAND is ~(a & b).', 'NOR is ~(a | b).', 'XOR has no ~.', 'Correct.'], 'Lab question')
        ],
        subjective: [sub('Draw the symbols and truth tables of AND, OR, NOT, NAND, NOR, XOR and XNOR. Why are NAND and NOR called universal gates? (5 marks)',
          '<p>See D1.3a (symbols) and D1.4a (tables). NAND and NOR are universal because NOT, AND and OR — a functionally complete set — can each be built from only NANDs (or only NORs): NOT A = NAND(A,A); A·B = NAND(NAND(A,B), NAND(A,B)); A + B = NAND(NAND(A,A), NAND(B,B)). CMOS NAND needs only 4 transistors, so fabs build everything from it.</p>', 5,
          ['3 — seven symbols + tables', '2 — universality with constructions'], ['D1.3a', 'D1.4a'])]
      },
      {
        id: '1.4', title: 'Truth Tables', badge: 'class', sources: '[L01] p17-24, p26; [SP4] quiz 1',
        keywords: 'truth table rows 2^n boolean functions',
        explain: '<p><b>Analogy:</b> a truth table is the complete “price list” of a circuit — every possible input combination with its output, nothing left out.</p>' +
          '<p>For <b>n</b> inputs there are <b>2ⁿ rows</b>; list them in binary counting order (000, 001, 010, 011 up to 111) so row number = minterm index. The output column fully specifies a combinational function. Because each of the 2ⁿ rows can be 0 or 1, there are <b>2^(2ⁿ) distinct Boolean functions</b> of n variables (16 for n = 2, 256 for n = 3).</p>' +
          '<p><b>Building a table from an expression:</b> add intermediate columns (e.g. BC) then combine. <b>From a table to hardware:</b> read the 1-rows (SOP, Unit 2). In Verilog, an exhaustive testbench enumerates all rows with a <code>for</code> loop.</p>',
        keypoints: ['Rows = 2ⁿ; order rows by binary count (MSB = first variable).', 'Number of distinct n-variable functions = 2^(2ⁿ).', 'Use helper columns for sub-expressions.', 'Two expressions are equal iff their truth tables are identical.'],
        diagrams: [{ id: 'D1.4a', title: 'All two-input gates at a glance', svg: glance, how: 'Write A,B columns 00/01/10/11 once, then one output column per gate.' }],
        tool: 'truthtable',
        examples: [{ title: 'Truth table of Y = A + BC (homework from L01)', html: '<div class="table-wrap"><table class="tt"><tr><th>A</th><th>B</th><th>C</th><th>BC</th><th>Y</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></table></div><p>Y = Σm(3,4,5,6,7). The circuit is D1.6a.</p>' }],
        code: [{ id: 'C1.4a', title: 'Exhaustive testbench with a for loop (prints the truth table of Y = A + BC)', lang: 'verilog', src: 'module y_abc (input a, b, c, output y);\n    assign y = a | (b & c);\nendmodule\n\nmodule y_abc_tb;\n    reg a, b, c;\n    wire y;\n    integer i;\n    y_abc dut (.a(a), .b(b), .c(c), .y(y));\n    initial begin\n        for (i = 0; i < 8; i = i + 1) begin\n            {a, b, c} = i[2:0];   // concatenation splits i into the three inputs\n            #5 $display("%b %b %b | %b", a, b, c, y);\n        end\n        $finish;\n    end\nendmodule', io: '<pre>0 0 0 | 0\n0 0 1 | 0\n0 1 0 | 0\n0 1 1 | 1\n1 0 0 | 1\n1 0 1 | 1\n1 1 0 | 1\n1 1 1 | 1</pre>' }],
        mistakes: ['Writing rows in a random order — then minterm numbers are wrong.', 'Forgetting rows: a 4-input table has 16 rows, not 8.'],
        practice: [
          nat('How many distinct Boolean functions of 2 variables exist?', 16, 0, 'Each of the 2² = 4 rows can be 0 or 1 → 2⁴ = 16 functions (constants 0 and 1, A, B, A\', B\', AND, OR, NAND, NOR, XOR, XNOR and four implication-style functions).'),
          nat('How many rows does the truth table of a 5-input circuit have?', 32, 0, '2⁵ = 32.'),
          mcq('A two-input gate has output column (rows 00, 01, 10, 11) = 0, 1, 1, 0. It is:', ['OR', 'XOR', 'NAND', 'XNOR'], 1, 'Output 1 only when inputs differ → XOR.', ['OR gives 1 for 11.', 'Correct.', 'NAND column is 1,1,1,0.', 'XNOR column is 1,0,0,1.']),
          txt('Write the output column (rows 000 to 111, as one 8-bit string) of F = A\'B + C.', ['01110101', '0111 0101'], 'Rows ABC: 000→0, 001→1, 010→1, 011→1, 100→0, 101→1, 110→0, 111→1 → 01110101.'),
          nat('How many distinct Boolean functions of 3 variables are there?', 256, 0, '2^(2³) = 2⁸ = 256.')
        ],
        subjective: [sub('Construct the truth table for F = AB\' + A\'C + BC\' and express F in Σm form. (5 marks)',
          '<div class="table-wrap"><table class="tt"><tr><th>A B C</th><th>AB\'</th><th>A\'C</th><th>BC\'</th><th>F</th></tr><tr><td>000</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>001</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>010</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>011</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>100</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>101</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>110</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>111</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></table></div><p>F = Σm(1,2,3,4,5,6) — F is 0 only when A = B = C, i.e. F = (A ⊕ B) + (B ⊕ C).</p>', 5,
          ['3 — complete table with helper columns', '2 — Σm form'])]
      },
      {
        id: '1.5', title: 'Boolean Laws & Simplification', badge: 'class', sources: '[L01] p27-31; [L02] p10 (core laws table)',
        keywords: 'identity null idempotent complement absorption distributive de morgan consensus duality',
        explain: '<p><b>Analogy:</b> laws are like “multiply by 1, add 0” in ordinary algebra — rules that let you rewrite an expression into a smaller circuit without changing its truth table. Fewer gates = less area, less power, often faster.</p>' +
          '<div class="table-wrap"><table><tr><th>Law</th><th>OR form</th><th>AND form (dual)</th></tr>' +
          '<tr><td>Identity</td><td>A + 0 = A</td><td>A · 1 = A</td></tr><tr><td>Null (dominance)</td><td>A + 1 = 1</td><td>A · 0 = 0</td></tr><tr><td>Idempotent</td><td>A + A = A</td><td>A · A = A</td></tr><tr><td>Complement</td><td>A + A\' = 1</td><td>A · A\' = 0</td></tr><tr><td>Involution</td><td colspan="2">(A\')\' = A</td></tr>' +
          '<tr><td>Commutative / associative</td><td>A + B = B + A</td><td>A(BC) = (AB)C</td></tr><tr><td>Distributive</td><td>A + BC = (A + B)(A + C)</td><td>A(B + C) = AB + AC</td></tr><tr><td>Absorption</td><td>A + AB = A</td><td>A(A + B) = A</td></tr><tr><td>Redundant literal</td><td>A + A\'B = A + B</td><td>A(A\' + B) = AB</td></tr>' +
          '<tr><td>De Morgan</td><td>(A + B)\' = A\'B\'</td><td>(AB)\' = A\' + B\'</td></tr><tr><td>Consensus</td><td>AB + A\'C + BC = AB + A\'C</td><td>(A+B)(A\'+C)(B+C) = (A+B)(A\'+C)</td></tr></table></div>' +
          '<p><b>Duality:</b> swap + ↔ · and 0 ↔ 1 (leave variables alone) and a valid identity stays valid. <b>De Morgan rule of thumb:</b> “break the bar, flip the sign”. Note that OR distributes over AND too — unlike ordinary algebra.</p>',
        keypoints: ['A + AB = A; A(A + B) = A (absorption).', 'A + A\'B = A + B.', 'A + BC = (A + B)(A + C).', '(AB)\' = A\' + B\'; (A + B)\' = A\'B\'.', 'Consensus: AB + A\'C + BC = AB + A\'C.', 'Dual: swap +/· and 0/1.'],
        mistakes: ['Applying ordinary algebra: A + A = 2A is wrong (= A).', 'Writing (AB)\' = A\'B\' — De Morgan flips AND to OR.', 'Forgetting that A + 1 = 1 kills the whole term.'],
        practice: [
          mcq('Which law justifies X + X·Y = X?', ['Distributive', 'Absorption', 'Idempotent', 'De Morgan'], 1, 'X + XY = X(1 + Y) = X·1 = X — absorption.', ['Distributive is used inside the proof but the law is absorption.', 'Correct.', 'Idempotent is X + X = X.', 'De Morgan concerns complements.'], 'Lab 2 Q8'),
          mcq('A + A\'B simplifies to:', ['A', 'B', 'A + B', 'AB'], 2, '(A + A\')(A + B) = 1·(A + B) = A + B (distributive OR-over-AND).', ['Loses the case A = 0, B = 1.', 'Loses the case A = 1, B = 0.', 'Correct.', 'Too small.'], 'Lab 2 Q9'),
          msq('Which of these are valid Boolean identities? (select all)', ['A + BC = (A + B)(A + C)', 'A(A + B) = A', 'A · A\' = 1', '(A + B)\' = A\' + B\''], [0, 1], 'Distributive and absorption hold; A·A\' = 0; (A + B)\' = A\'B\'.', ['Valid (OR distributes over AND).', 'Valid (absorption).', 'Wrong: = 0.', 'Wrong: De Morgan gives A\'B\'.']),
          mcq('The dual of A + 0 = A is:', ['A · 0 = 0', 'A · 1 = A', 'A + 1 = 1', 'A\' + 1 = A'], 1, 'Swap + → ·, 0 → 1: A · 1 = A.', ['That is the dual of A + 1 = 1.', 'Correct.', 'Not the dual (keeps +).', 'Not valid.']),
          mcq('Using the consensus theorem, XY + X\'Z + YZ equals:', ['XY + X\'Z', 'XY + YZ', 'X\'Z + YZ', 'XY + X\'Z + Z'], 0, 'YZ is the consensus of XY and X\'Z (the variable X appears both ways) → redundant.', ['Correct.', 'Drops a needed term.', 'Drops a needed term.', 'Adds a wrong term.'], 'Lab 2 Q10')
        ],
        subjective: [sub('State and prove (i) the absorption law A + AB = A and (ii) A + A\'B = A + B, using the basic laws (name each law). (5 marks)',
          '<p>(i) A + AB = A·1 + A·B (identity) = A(1 + B) (distributive) = A·1 (null) = A (identity).</p><p>(ii) A + A\'B = (A + A\')(A + B) (distributive, OR over AND) = 1·(A + B) (complement) = A + B (identity).</p><p>Verification by truth table: both sides are 0 only for A = B = 0.</p>', 5,
          ['2 — proof (i) with named laws', '2 — proof (ii) with named laws', '1 — truth-table check'])]
      },
      {
        id: '1.6', title: 'Worked Simplification Examples', badge: 'class', sources: '[L01] p32, p35; [LB2] Q8-Q13; [SP4] quiz 1 (Q2, Q4, Q5)',
        keywords: 'simplify boolean expression worked',
        explain: '<p><b>Strategy:</b> (1) look for a common factor and complement pairs (X + X\' = 1); (2) apply absorption and A + A\'B = A + B; (3) use De Morgan to remove bars over groups; (4) remove consensus terms; (5) verify by truth table or K-map.</p>' +
          '<p><b>Payoff (L01):</b> Y = AB + AB\' = A(B + B\') = A·1 = A — two ANDs, an OR and a NOT become a single wire.</p>',
        keypoints: ['Factor → complement → identity is the most common 3-step pattern.', 'Product of sums: simplify pairs first, e.g. (A\'+B)(A\'+B\') = A\'.', 'Always state the law used for each step in written answers.'],
        diagrams: [{ id: 'D1.6a', title: 'Gate circuit for Y = A + BC (L01 homework)', svg: yabc, how: 'AND gate for B·C first, then an OR gate combining A with the AND output.' }],
        examples: [
          { title: 'AB\'C + A\'BC + ABC + AB\'C\' (class quiz Q2)', html: '<p>Group AB\'C + AB\'C\' = AB\'(C + C\') = AB\'. Group A\'BC + ABC = BC(A\' + A) = BC. Result <b>F = AB\' + BC</b>.</p>' },
          { title: '(A\' + B)(A\' + B\')(A + B) (class quiz Q4)', html: '<p>(A\' + B)(A\' + B\') = A\' + BB\' = A\' (distributive). Then A\'(A + B) = A\'A + A\'B = A\'B. <b>F = A\'B</b>.</p>' },
          { title: '(AB\' + A\'B)(AB + A\'B\') (class quiz Q5)', html: '<p>This is XOR · XNOR of the same pair. Expanding, every product contains X·X\' → 0. <b>F = 0</b>.</p>' },
          { title: 'A\'B\'C + A\'BC + AB\'C + ABC + A\'B (Lab 2 Q12)', html: '<p>A\'B\'C + A\'BC = A\'C; AB\'C + ABC = AC; A\'C + AC = C; remaining A\'B → <b>F = C + A\'B</b>.</p>' },
          { title: 'Homework: A(A + B) and A + A\'B', html: '<p>A(A + B) = A (absorption). A + A\'B = A + B.</p>' }],
        mistakes: ['Stopping early: after grouping, check again for absorption.', 'Losing a term when factoring — expand back to check.'],
        practice: [
          mcq('Simplify AB\'C + A\'BC + ABC + AB\'C\'.', ['AB + BC', 'AB\' + BC', 'B\'C + AB', 'AB\' + C'], 1, 'AB\'(C + C\') + BC(A\' + A) = AB\' + BC.', ['AB is not covered by the minterms.', 'Correct.', 'Wrong grouping.', 'C alone would include A\'B\'C.'], 'Class quiz (L01 revision Q2)'),
          mcq('Simplify (A\' + B)(A\' + B\')(A + B).', ['A\'', 'A\'B', 'AB\'', 'A\' + B'], 1, '(A\'+B)(A\'+B\') = A\'; A\'(A + B) = A\'B.', ['Missed the last factor.', 'Correct.', 'Sign error.', 'This is only the first factor.'], 'Class quiz (L01 revision Q4)'),
          mcq('Simplify (AB\' + A\'B)(AB + A\'B\').', ['A\'B + AB\'', 'AB', '0', 'A + B'], 2, 'XOR · XNOR = 0; every cross product contains a complement pair.', ['That is just the first factor.', 'Not possible.', 'Correct.', 'No.'], 'Class quiz (L01 revision Q5)'),
          mcq('F = A\'B\'C + A\'BC + AB\'C + ABC + A\'B simplifies to:', ['C', 'C + A\'B', 'A\'B + AB', 'A\'C + B'], 1, 'First four terms = C; then + A\'B.', ['Drops A\'B (e.g. A=0,B=1,C=0 gives 1).', 'Correct.', 'Wrong.', 'Wrong.'], 'Lab 2 Q12'),
          nat('Y = AB + AB\' was originally built with 2 AND gates, 1 OR gate and 1 NOT gate. How many gates does the simplified Y need?', 0, 0, 'Y = A — just a wire, 0 gates. Four gates eliminated.', 'From class slides')
        ],
        subjective: [sub('Simplify F = ((A + B)\'·C)\' + (A·B)\' and draw the resulting circuit. (5 marks)',
          '<p>(A + B)\' = A\'B\'; (AB)\' = A\' + B\'. F = (A\'B\'C)\' + A\' + B\' = (A + B + C\') + A\' + B\' = A + A\' + B + B\' + C\' = 1. The circuit is a constant 1 (tie output to V<sub>DD</sub>) — no gates needed. (Lab 2 Q27: the trap is stopping after the first De Morgan.)</p>', 5,
          ['3 — correct De Morgan steps', '1 — final F = 1', '1 — circuit / explanation'])]
      },
      {
        id: '1.E1', title: 'Extra from slides: Verilog & HDL fundamentals', badge: 'extra', sources: '[LB1] p17-35; [LB3] p4-13 (behavioural modelling, testbench theory)',
        sourceLine: 'Source: class lab decks; IEEE 1364 Verilog; Harris & Harris ch. 4',
        keywords: 'verilog module wire reg assign always initial testbench dumpvars',
        explain: '<p><b>Mental-model shift:</b> software runs line by line (a program counter); hardware is <i>concurrent</i> — every gate reacts at once. Read Verilog as a <b>wiring diagram</b>, not a to-do list.</p>' +
          '<ul><li><b>Simulation vs synthesis:</b> the same .v file is simulated (iverilog/vvp, waveforms in GTKWave) or synthesised into a gate netlist (Synopsys Design Compiler, Cadence Genus).</li>' +
          '<li><b>HDLs:</b> Verilog (1984, IEEE 1364, C-like — used in this course), VHDL (1987, Ada-like), SystemVerilog (2005, IEEE 1800 superset).</li>' +
          '<li><b>module / endmodule</b> with a port list = a hardware “function signature”. Case-sensitive; comments // and /* */.</li>' +
          '<li><b>Nets vs variables:</b> <code>wire</code> continuously reflects its driver (use with <code>assign</code>); <code>reg</code> holds a value between procedural assignments (left side inside <code>always</code>/<code>initial</code>) — it does not always mean a flip-flop.</li>' +
          '<li><b>Vectors:</b> <code>wire [7:0] data;</code> — bit 7 MSB; <code>data[0]</code> bit-select, <code>data[7:4]</code> part-select.</li>' +
          '<li><b>Operators:</b> arithmetic + − * / %; relational &lt; &gt; return 1 bit; logical <code>&amp;&amp; || !</code> return 1 bit (whole operand true/false); bitwise <code>&amp; | ^ ~ ~^</code> work per bit.</li>' +
          '<li><b>Blocks:</b> <code>assign</code> = continuous; <code>always @(*)</code> combinational (needs a complete <code>case</code>/<code>default</code> or it infers a latch); <code>always @(posedge clk)</code> sequential with non-blocking <code>&lt;=</code>; <code>initial</code> runs once (testbenches).</li>' +
          '<li><b>Testbench:</b> no ports; instantiates the DUT; drives stimulus with <code>#delay</code>; <code>$dumpfile</code>+<code>$dumpvars</code> record a VCD; <code>$monitor/$display</code> print; <code>$finish</code> ends; <code>`timescale 1ns/1ps</code> sets units.</li></ul>',
        keypoints: ['wire ↔ assign; reg ↔ always/initial.', 'always @(*) needs every branch assigned (default) — else a latch.', 'Use &lt;= in clocked blocks, = in combinational blocks.', '$dumpfile + $dumpvars both needed for a waveform.', 'Compile all files together: iverilog -o x.vvp a.v b.v tb.v'],
        diagrams: [{ id: 'D1.E1a', title: 'Simulation vs synthesis', svg: simsyn, how: 'One RTL box splitting into two paths: simulator → waveforms, synthesis → netlist → silicon.' }],
        code: [
          { id: 'C1.E1a', title: 'Module skeleton with ANSI ports and a vector', lang: 'verilog', src: '`timescale 1ns/1ps\nmodule nibble_swap (\n    input  wire [7:0] din,      // [MSB:LSB]\n    output wire [7:0] dout\n);\n    assign dout = {din[3:0], din[7:4]};   // concatenation swaps the nibbles\nendmodule', io: '<pre>din = 8\'hA5 → dout = 8\'h5A</pre>' },
          { id: 'C1.E1b', title: 'wire with assign vs reg with always @(*) (same AND gate twice)', lang: 'verilog', src: 'module and_two_ways (input a, input b, output wire y1, output reg y2);\n    assign y1 = a & b;            // net driven continuously\n    always @(*) y2 = a & b;       // variable assigned in a procedural block\nendmodule', io: '<pre>Both outputs are identical for all four input pairs.</pre>' },
          { id: 'C1.E1c', title: 'initial vs always — clock generator and stimulus', lang: 'verilog', src: 'module clk_demo;\n    reg clk, d;\n    initial clk = 0;\n    always #5 clk = ~clk;          // period 10 time units, forever\n    initial begin\n        d = 0; #12 d = 1; #20 d = 0;\n        #10 $finish;               // stops the forever-running always block\n    end\n    initial $monitor("t=%0t clk=%b d=%b", $time, clk, d);\nendmodule', io: '<pre>t=0 clk=0 d=0\nt=5 clk=1 d=0\nt=10 clk=0 d=0\nt=12 clk=0 d=1\nt=15 clk=1 d=1\n(clock keeps toggling every 5 units until $finish at t=42)</pre>' }],
        mistakes: ['Assigning a <code>wire</code> inside <code>always</code> (compile error) or a <code>reg</code> with <code>assign</code>.', 'Missing semicolon — the error points at the next line.', 'Forgetting to compile a sub-module file: “undefined identifier”.', 'Incomplete <code>case</code> in <code>always @(*)</code> → unintended latch.'],
        practice: [
          mcq('A signal assigned inside <code>always @(*)</code> must be declared as:', ['wire', 'reg', 'parameter', 'supply0'], 1, 'Procedural assignments need a variable (reg).', ['wire is for continuous assignment.', 'Correct.', 'Parameters are constants.', 'Supply nets are constants.'], 'Lab question'),
          mcq('If a = 4\'b0101 and b = 4\'b0010, what is <code>a &amp;&amp; b</code>?', ['4\'b0000', '1\'b1', '1\'b0', '4\'b0111'], 1, '&& is logical: both operands are non-zero → true → 1 (single bit). Bitwise a & b would be 0000.', ['That is bitwise AND.', 'Correct.', 'Both are non-zero.', 'That is bitwise OR.']),
          mcq('An <code>always @(*)</code> block with a <code>case</code> that does not cover every select value and has no <code>default</code> synthesises:', ['a MUX', 'a latch', 'a flip-flop', 'nothing'], 1, 'For uncovered cases the output must keep its old value → storage → latch.', ['Only with full coverage.', 'Correct.', 'Flip-flops need a clock edge.', 'Hardware is still generated.'], 'Lab 3'),
          mcq('Which pair is required to get a non-empty waveform file?', ['$display and $finish', '$dumpfile and $dumpvars', '$monitor and $time', '`timescale and `define'], 1, '$dumpfile names the VCD; $dumpvars records the signals.', ['These print text only.', 'Correct.', 'Text output.', 'Directives, not dumping.'], 'Lab 1')
        ],
        subjective: [sub('Explain the difference between simulation and synthesis, and between wire and reg, with a small Verilog example. (5 marks)',
          '<p><b>Simulation</b> runs the HDL on a CPU over simulated time to check behaviour (waveforms); nothing is built. <b>Synthesis</b> converts the same RTL into a gate-level netlist for fabrication/FPGA. <b>wire</b> is a net driven continuously (assign, module outputs); <b>reg</b> is a variable written in procedural blocks. Example: C1.E1b shows the same AND written both ways; both synthesise to one AND gate.</p>', 5,
          ['2 — simulation vs synthesis', '2 — wire vs reg', '1 — code example'], ['D1.E1a'])]
      }
    ]
  });
})();
