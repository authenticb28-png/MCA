/* Unit 10 – CISC vs RISC */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* D10.2a ISA as the hardware/software contract */
  const contract = (function () {
    let s = S.box(80, 20, 420, 60, 'SOFTWARE\ncompilers · OS · your programs', 'box');
    s += S.rect(40, 100, 500, 44, 'boxa', 4) + S.tc(290, 127, 'THE ISA — the instruction set (the contract)', 'b');
    s += S.box(80, 164, 420, 60, 'HARDWARE\nthe CPU that implements it (microarchitecture)', 'box');
    s += S.a([[290, 80], [290, 100]], 'arr') + S.t(300, 94, 'compiles TO the ISA', 'xs b');
    s += S.a([[290, 164], [290, 144]], 'arr') + S.t(300, 160, 'EXECUTES the ISA', 'xs b');
    s += S.t(10, 248, 'Both sides honour the ISA → hardware and software evolve independently (old programs run on new chips).', 'xs muted');
    return S.svg(580, 256, s, 'ISA contract');
  })();

  /* D10.2b fixed vs variable encoding */
  const encoding = (function () {
    let s = S.t(10, 18, 'RISC — FIXED 32-bit: every instruction the same width', 'sm b');
    const rowR = [[6, 'opcode'], [5, 'rs'], [5, 'rt'], [5, 'rd'], [5, 'shamt'], [6, 'funct']];
    let x = 10; const bw = 18;
    for (let k = 0; k < 3; k++) {
      rowR.forEach((f, i) => { s += S.box(x, 28, f[0] * bw / 2.8, 30, k === 0 ? f[1] : '', i % 2 ? 'box2' : 'box', 'xs'); x += f[0] * bw / 2.8; });
      x += 6;
    }
    s += S.t(10, 76, 'next instruction always starts 4 bytes later → trivial to fetch and decode in parallel', 'xs');
    s += S.t(10, 110, 'CISC (x86) — VARIABLE length: 1 to 15 bytes', 'sm b');
    const ins = [[['op', 1]], [['prefix', 1], ['op', 1], ['modRM', 1]], [['op', 1], ['modRM', 1], ['disp', 2], ['imm', 4]], [['prefix', 1], ['op', 2]]];
    x = 10;
    ins.forEach((I, k) => {
      I.forEach((f, i) => { s += S.box(x, 120, f[1] * 34, 30, f[0], (k % 2) ? 'box2' : 'box', 'xs'); x += f[1] * 34; });
      s += '<line class="edge" x1="' + x + '" y1="114" x2="' + x + '" y2="156"/>'; x += 4;
    });
    s += S.t(10, 170, 'the CPU must decode one instruction before it knows where the next begins → harder to pipeline', 'xs');
    return S.svg(700, 180, s, 'fixed vs variable instruction encoding');
  })();

  /* D10.3a ISA family tree */
  const tree = (function () {
    let s = S.tc(160, 20, 'CISC', 'b') + S.tc(500, 20, 'RISC', 'b');
    s += S.box(90, 40, 140, 34, 'VAX (1977)', 'box', 'sm b') + S.box(90, 90, 140, 34, '68000 (1979)', 'box', 'sm b') + S.box(90, 140, 140, 34, 'x86 (1978)', 'box', 'sm b') + S.box(90, 200, 140, 34, 'x86-64 (2003)', 'box', 'sm b');
    s += S.a([[160, 174], [160, 200]], 'arr');
    s += S.box(420, 40, 160, 34, 'IBM 801 (1980)', 'box2', 'sm b');
    s += S.box(330, 110, 100, 34, 'MIPS', 'box2', 'sm b') + S.box(440, 110, 100, 34, 'SPARC', 'box2', 'sm b') + S.box(550, 110, 110, 34, 'ARM (1985)', 'box2', 'sm b');
    s += S.box(430, 200, 140, 34, 'RISC-V (2010)', 'boxa', 'sm b');
    s += S.a([[480, 74], [380, 110]], 'arr') + S.a([[500, 74], [490, 110]], 'arr') + S.a([[520, 74], [600, 110]], 'arr');
    s += S.a([[380, 144], [470, 200]], 'arr') + S.tc(380, 190, 'Berkeley / Stanford lineage', 'xs muted');
    s += '<line class="edge" x1="290" y1="10" x2="290" y2="240"/>';
    s += S.t(10, 262, 'Two lineages defined 40 years of chips — and have since converged (x86 runs RISC-like µops inside).', 'xs muted');
    return S.svg(680, 270, s, 'ISA family tree');
  })();

  /* D10.5a x86 micro-op decode */
  const uops = (function () {
    let s = S.box(20, 70, 160, 60, 'CISC instruction\nadd [mem], eax', 'box', 'sm b');
    s += S.box(230, 60, 120, 80, 'DECODER\n(splitter)', 'boxa');
    s += S.box(400, 20, 130, 36, 'µop: load', 'box2', 'sm b') + S.box(400, 82, 130, 36, 'µop: add', 'box2', 'sm b') + S.box(400, 144, 130, 36, 'µop: store', 'box2', 'sm b');
    s += S.box(580, 60, 120, 80, 'RISC-like\ncore', 'box');
    s += S.a([[180, 100], [230, 100]], 'arr') + S.a([[350, 85], [400, 38]], 'arr') + S.a([[350, 100], [400, 100]], 'arr') + S.a([[350, 115], [400, 162]], 'arr');
    s += S.a([[530, 38], [580, 85]], 'arr') + S.a([[530, 100], [580, 100]], 'arr') + S.a([[530, 162], [580, 115]], 'arr');
    s += S.t(10, 212, 'Front end: complex x86 instruction → several simple µops. Back end: pipelines, renames and reorders µops like a RISC machine.', 'xs b');
    return S.svg(720, 220, s, 'x86 micro-op decode');
  })();

  UNITS.push({
    id: 10, title: 'CISC vs RISC', short: 'CISC vs RISC',
    intro: 'Two philosophies of instruction-set design: pack power into each instruction (CISC) or keep every instruction simple (RISC) — and how modern chips merged them. MCA Lecture 10.',
    subtopics: [
      {
        id: '10.1', title: 'Recap of Von Neumann / Harvard and Setup', badge: 'class', sources: '[CR] p2-22 (recap slides identical to [VNH])',
        keywords: 'recap von neumann harvard modified harvard isa setup',
        explain: '<p>Lecture 10 opens with a full recap of Unit 9: the stored-program idea, the single-bus Von Neumann bottleneck, the Harvard split and the modified-Harvard design with split L1 caches. The bridge to this unit: once we know <i>how</i> the CPU reaches memory, the next question is <b>what instructions it understands</b> — the <b>instruction set architecture (ISA)</b>.</p>' +
          '<ul><li>Von Neumann: one memory + one bus → fetch and data take turns.</li><li>Harvard: separate I and D memories/buses → both in one cycle.</li><li>Modified Harvard: split L1-I / L1-D over unified L2/L3 + DRAM.</li>' +
          '<li>The ISA decides how many memory accesses each instruction makes — a CISC instruction like <code>add [mem1], [mem2]</code> needs several data accesses on that bus, a RISC instruction at most one. That link is why the recap comes first.</li></ul>',
        keypoints: ['Organisation (Unit 9) = how parts connect; ISA (Unit 10) = what the CPU understands.', 'Memory-operand instructions put more traffic on the bus.'],
        mistakes: ['Confusing architecture (ISA, the “what”) with organisation (the “how”).'],
        practice: [
          mcq('Which design lets an instruction fetch and a data access happen in the same cycle?', ['Von Neumann', 'Harvard', 'single-bus CISC', 'none'], 1, 'Separate buses.', ['Shared bus.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          mcq('In a modified Harvard CPU, which level is split into instruction and data parts?', ['DRAM', 'L1 cache', 'L3 cache', 'disk'], 1, 'Split L1.', ['Unified.', 'Correct.', 'Unified.', 'No.']),
          mcq('Why does a memory-to-memory CISC instruction stress a Von Neumann bus more than a RISC add?', ['it is longer to decode', 'it needs several data transfers on the same bus as instruction fetch', 'it uses more registers', 'it runs at a lower clock'], 1, 'Each memory operand is another bus transaction.', ['Decode is internal.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Briefly recap Von Neumann, Harvard and modified Harvard architectures, and explain how the choice of ISA affects memory traffic. (3 marks)', '<p>See Unit 9 summaries; CISC memory operands add data transfers per instruction, RISC load/store limits memory access to lw/sw.</p>', 3, ['2 — recap', '1 — ISA link'])]
      },
      {
        id: '10.2', title: 'RISC vs CISC: Definitions and Design Goals', badge: 'class', sources: '[CR] p23-29',
        keywords: 'risc cisc definition fixed length variable length load store microcode decoder isa contract',
        explain: '<p><b>The ISA</b> is the hardware/software contract: everything above compiles <i>to</i> it, everything below <i>executes</i> it. As long as both honour it, Intel can redesign a chip and your old programs still run.</p>' +
          '<p><b>CISC (Complex Instruction Set Computer):</b> make each instruction do a lot. Hundreds of instructions, <b>variable length (1–15 bytes on x86)</b>, instructions can <b>touch memory directly</b> (<code>add [mem1], [mem2]</code>), complex decoder (often <b>microcode</b>: a mini-program per instruction), fewer lines of assembly. Born when memory was scarce and expensive. Examples: x86, VAX, 68000.</p>' +
          '<p><b>RISC (Reduced Instruction Set Computer):</b> each instruction does ONE simple thing, ideally in one cycle. Few simple instructions, <b>fixed length (32 bits)</b>, <b>load/store architecture</b> (only lw/sw touch memory; everything else works on registers), simple fast decoder, more instructions per task. Examples: MIPS, ARM, RISC-V, SPARC.</p>' +
          '<div class="table-wrap"><table><tr><th></th><th>CISC decoder</th><th>RISC decoder</th></tr><tr><td>Complexity lives in</td><td>HARDWARE</td><td>the COMPILER</td></tr><tr><td>Length</td><td>variable — must decode to find the next instruction</td><td>fixed — decode almost trivial</td></tr><tr><td>Implementation</td><td>often microcoded</td><td>one instruction = one simple action</td></tr><tr><td>Cost</td><td>large, power-hungry, hard to pipeline</td><td>small, fast, easy to pipeline and replicate</td></tr><tr><td>But</td><td>shorter programs, denser code</td><td>compiler sequences more instructions</td></tr></table></div>' +
          '<p><i>The trade never disappears — it just moves.</i></p>',
        keypoints: ['ISA = hardware/software contract.', 'CISC: many, variable-length, memory operands, microcode.', 'RISC: few, fixed 32-bit, load/store only, simple decoder.', 'RISC hallmarks: fixed length + load/store.', 'Complexity moves between hardware (CISC) and compiler (RISC).'],
        diagrams: [{ id: 'D10.2a', title: 'The ISA as the hardware/software contract', svg: contract, how: 'Three stacked bars: software on top, the ISA in the middle (highlighted), hardware at the bottom; arrows “compiles to” and “executes”.' },
          { id: 'D10.2b', title: 'Fixed (RISC) vs variable (CISC) instruction encoding', svg: encoding, how: 'Top row: three equal-width 32-bit boxes with fields; bottom row: boxes of different lengths (prefix, op, modRM, disp, imm) with boundaries that must be found by decoding.' }],
        code: [{ id: 'C10.2a', title: 'Class activity: C = A + B; D = C × 2 in CISC and RISC style', lang: 'asm', src: '; CISC style (x86-like): about 5 instructions, memory operands allowed\nmov  ax, [A]        ; ax = A\nadd  ax, [B]        ; ax = A + B   (memory operand)\nmov  [C], ax        ; C = A + B\nshl  ax, 1          ; ax = C * 2\nmov  [D], ax        ; D = C * 2\n\n# RISC style (MIPS-like): 6 instructions, load/store only\nlw   r1, A          # r1 = A\nlw   r2, B          # r2 = B\nadd  r3, r1, r2     # C = A + B\nsw   r3, C\nadd  r4, r3, r3     # D = C * 2\nsw   r4, D', io: '<pre>CISC: 5 instructions, variable length, 2 memory operands\nRISC: 6 instructions, each fixed 32 bits, memory only via lw/sw</pre>' }],
        mistakes: ['“RISC = fewer instructions run” — RISC has fewer instruction TYPES but often runs MORE instructions per task.', 'Forgetting the load/store rule — RISC\'s defining feature.', 'Mixing up length rules: RISC fixed, CISC variable.'],
        practice: [
          mcq('Name the two hallmarks of RISC (class exit ticket):', ['variable length and memory operands', 'fixed instruction length and load/store-only memory access', 'microcode and many addressing modes', 'stack-based and accumulator'], 1, 'Fixed length + load/store.', ['CISC.', 'Correct.', 'CISC.', 'No.'], 'From class slides'),
          mcq('An x86 instruction can be how many bytes long?', ['always 4', '1 to 15', '2 or 4 only', '8'], 1, 'Variable length 1–15 bytes.', ['That is RISC.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          mcq('In a RISC (load/store) ISA, which instructions may access data memory?', ['all arithmetic instructions', 'only load and store', 'only branches', 'any instruction with an immediate'], 1, 'Load/store architecture.', ['CISC.', 'Correct.', 'No.', 'No.']),
          nat('In the class activity (C = A + B; D = C × 2), how many instructions did the RISC version use?', 6, 0, 'lw, lw, add, sw, add, sw.', 'From class slides'),
          msq('Which are CISC characteristics? (select all)', ['hundreds of instructions', 'microcoded control', 'fixed 32-bit encoding', 'instructions with memory operands'], [0, 1, 3], 'Fixed 32-bit encoding is RISC.', ['Yes.', 'Yes.', 'No.', 'Yes.']),
          mcq('Where does a RISC design move the complexity that CISC keeps in the decoder?', ['into the cache', 'into the compiler', 'into the OS', 'into the DRAM controller'], 1, 'Class slide: complexity in the compiler.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides')
        ],
        subjective: [sub('Compare CISC and RISC architectures (at least six points) with examples. Write C = A + B; D = 2C in both styles. (5 marks)', '<p>Definitions, decoder table, D10.2b; code C10.2a; examples x86/VAX vs MIPS/ARM/RISC-V.</p>', 5, ['3 — six-point comparison', '1 — examples', '1 — code'], ['D10.2b'])]
      },
      {
        id: '10.3', title: 'Historical Context: VAX, x86, MIPS, ARM, RISC-V', badge: 'class', sources: '[CR] p30-31; [MIPS] p5-6',
        keywords: 'history vax x86 mips arm risc-v ibm 801 stanford hennessy playstation family tree',
        explain: '<ul><li><b>CISC lineage:</b> VAX (DEC, 1977), Motorola 68000 (1979), <b>x86 (Intel 8086, 1978)</b> → <b>x86-64 (AMD, 2003)</b>.</li>' +
          '<li><b>RISC lineage:</b> IBM 801 (first RISC research machine) → <b>MIPS</b> (Stanford, John Hennessy, 1984), SPARC (Sun, from Berkeley RISC), <b>ARM (1985)</b>, <b>RISC-V (Berkeley, 2010)</b>.</li>' +
          '<li><b>1990s–2000s, two empires:</b> ARM (RISC) won mobile — simple = low power = long battery life; licensable design → everyone builds ARM chips; now in Apple Silicon laptops. x86 (CISC) held the desktop — backward compatibility, decades of software, Intel/AMD R&amp;D, the PC and server ecosystem.</li>' +
          '<li><b>MIPS story (Lab 11):</b> Stanford 1984 (Hennessy); used by SGI workstations, the original PlayStation (R3000A, 33.8688 MHz), Nintendo 64 (VR4300, 93.75 MHz) and PlayStation 2 (R5900). Hennessy and Patterson won the 2017 Turing Award for RISC. In 2021 MIPS Technologies moved to RISC-V.</li>' +
          '<li><b>Lesson:</b> the “best ISA” rarely decides the winner — ecosystems, power budgets and compatibility do.</li></ul>',
        keypoints: ['x86 1978, x86-64 2003, ARM 1985, RISC-V 2010.', 'MIPS: Stanford 1984 (Hennessy); PlayStation, N64.', 'ARM won mobile (power); x86 holds desktop (compatibility).', 'H&P: 2017 Turing Award.'],
        diagrams: [{ id: 'D10.3a', title: 'ISA family tree', svg: tree, how: 'Two columns: CISC (VAX, 68000, x86 → x86-64) and RISC (IBM 801 → MIPS, SPARC, ARM, then RISC-V); a dashed line between the camps.' }],
        mistakes: ['Dating RISC-V to the 1980s (it is 2010).', 'Calling ARM a CISC ISA.'],
        practice: [
          match('Match each ISA with its family.', ['VAX', 'x86-64', 'ARM', 'RISC-V', 'MIPS'], ['CISC', 'RISC'], [0, 0, 1, 1, 1], 'Class family tree.', 'From class slides'),
          mcq('Why did ARM dominate mobile devices?', ['backward compatibility with DOS', 'simple design → low power → long battery life, plus licensable cores', 'it uses variable-length instructions', 'it was the first 64-bit ISA'], 1, 'Class slide p30.', ['That is x86.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('In which year was RISC-V created at Berkeley?', 2010, 0, 'Class slide.'),
          mcq('Which game console used a MIPS R3000A processor (Lab 11)?', ['Original PlayStation', 'Xbox', 'Nintendo Switch', 'Sega Genesis'], 0, 'PS1 at 33.8688 MHz.', ['Correct.', 'x86.', 'ARM.', '68000.'], 'Lab question')
        ],
        subjective: [sub('Trace the history of CISC and RISC ISAs with a family tree, and explain why ARM won mobile while x86 kept the desktop. (4 marks)', '<p>D10.3a; ARM: power, licensing; x86: compatibility, ecosystem, R&amp;D. Lesson: ecosystems decide.</p>', 4, ['2 — tree', '2 — explanation'], ['D10.3a'])]
      },
      {
        id: '10.4', title: 'Compiler Implications and Code Density', badge: 'class', sources: '[CR] p32-35',
        keywords: 'code density compiler pipelining thumb compressed risc-v c instruction cache iron law',
        explain: '<ul><li><b>Code density — CISC\'s edge:</b> fewer, richer instructions → smaller programs in bytes → fewer bytes to fetch and less pressure on the L1 instruction cache. Real advantage in memory-constrained or cache-sensitive settings.</li>' +
          '<li>RISC\'s fixed 32-bit instructions waste some space, but compressed RISC ISAs — <b>ARM Thumb</b> and <b>RISC-V “C”</b> (16-bit encodings) — close much of the gap.</li>' +
          '<li><b>Pipelining — RISC\'s edge (remember for Unit 14):</b> (1) <b>fixed length = easy fetch</b> (next instruction always 4 bytes on); (2) <b>uniform format = simple decode</b> in one stage; (3) <b>one cycle each = smooth flow</b>; (4) <b>load/store = predictable memory</b> — only two instructions touch memory, so hazards are easier to detect.</li>' +
          '<li><b>Compiler implications:</b> a RISC compiler must allocate registers well and schedule more, simpler instructions (it can reorder to hide load latency — Unit 15.6); a CISC compiler can use rich addressing modes but much of the instruction set goes unused.</li></ul>' +
          '<div class="table-wrap"><table><tr><th>CISC strengths</th><th>RISC strengths</th></tr><tr><td>denser code</td><td>simple, fast, cheap decoder</td></tr><tr><td>fewer instructions per task</td><td>easy, efficient pipelining</td></tr><tr><td>less instruction-fetch bandwidth</td><td>higher clock speeds possible</td></tr><tr><td>rich, expressive operations</td><td>simpler to design and verify</td></tr></table></div>' +
          '<p><b>Iron law (Patterson &amp; Hennessy):</b> CPU time = instruction count × CPI × clock period. CISC lowers instruction count; RISC lowers CPI and the clock period. Neither term alone decides speed.</p>',
        keypoints: ['CISC: denser code, less I-cache pressure.', 'RISC: pipeline-friendly (fixed length, uniform decode, 1 cycle, load/store).', 'Thumb / RISC-V C narrow the density gap.', 'CPU time = IC × CPI × T.'],
        examples: [{ title: 'Class homework: 3-element vector add C[i] = A[i] + B[i]', html: '<p><b>CISC (x86-style):</b> for each i: <code>mov eax, [A+4i]; add eax, [B+4i]; mov [C+4i], eax</code> → 3 × 3 = <b>9 instructions</b>. <b>RISC (RISC-V/MIPS style):</b> for each i: <code>lw; lw; add; sw</code> → 3 × 4 = <b>12 instructions</b> (straight-line). More instructions, but each is simple and pipelines at about one per cycle.</p>' },
          { title: 'Iron law comparison', html: '<p>Program on CISC: IC = 1.0 M, CPI = 2.0, 2 GHz → time = 1e6 × 2 × 0.5 ns = 1.0 ms. Same program on RISC: IC = 1.4 M, CPI = 1.1, 2 GHz → 1.4e6 × 1.1 × 0.5 ns = 0.77 ms. More instructions, yet faster.</p>' }],
        mistakes: ['“RISC is always faster” — speed depends on the whole microarchitecture.', '“The ISA determines speed” — implementation matters more.'],
        practice: [
          mcq('Which is a genuine advantage of CISC over RISC?', ['simpler decoder', 'denser code (smaller programs in bytes)', 'easier pipelining', 'fewer transistors'], 1, 'Class slide p33.', ['RISC.', 'Correct.', 'RISC.', 'RISC.'], 'From class slides'),
          msq('Class homework: which instruction properties make RISC friendlier to pipelining? (select all)', ['fixed instruction length', 'uniform decode format', 'only load/store access memory', 'microcoded complex instructions'], [0, 1, 2], 'Microcode makes pipelining harder.', ['Yes.', 'Yes.', 'Yes.', 'No.'], 'From class slides'),
          txt('Name one compressed RISC instruction-set extension that improves code density.', ['Thumb', 'ARM Thumb', 'RISC-V C', 'C extension', 'RVC'], 'ARM Thumb or RISC-V C.'),
          nat('Iron law: 2 million instructions, CPI 1.5, clock 1 GHz. CPU time in ms?', 3, 0, '2e6 × 1.5 × 1 ns = 3 ms.'),
          nat('Class homework: number of instructions for a straight-line 3-element vector add in RISC (lw, lw, add, sw each)?', 12, 0, '3 × 4.', 'From class slides')
        ],
        subjective: [sub('Discuss code density and pipelining as the key trade-offs between CISC and RISC. Give three reasons RISC is friendlier to pipelining. (5 marks)', '<p>Density: CISC smaller programs, I-cache; Thumb/RV-C. Pipelining: fixed length, uniform decode, single-cycle ops, load/store predictability. Strength table; iron law.</p>', 5, ['2 — density', '2 — pipelining reasons', '1 — conclusion'])]
      },
      {
        id: '10.5', title: 'Modern Reality: Micro-Ops in x86', badge: 'class', sources: '[CR] p36-39',
        keywords: 'micro ops uops x86 decoder risc core boundary blurred who won',
        explain: '<ul><li><b>The secret inside x86:</b> CISC on the outside, RISC on the inside. The front-end decoder splits each complex x86 instruction into several simple <b>micro-operations (µops)</b> — e.g. <code>add [mem], eax</code> → µop load, µop add, µop store. The back end pipelines, renames and reorders those µops exactly like a RISC machine.</li>' +
          '<li><b>Why x86 uses µops</b> (exit ticket): to keep binary compatibility with decades of software while gaining RISC-style pipelining, out-of-order execution and high clock rates.</li>' +
          '<li><b>The boundary has blurred:</b> CISC went RISC inside (µops); RISC added complexity (modern ARM/RISC-V have hundreds of instructions, SIMD and vector extensions); compressed RISC instructions chase density (a CISC concern). What matters now is the <b>microarchitecture</b> — caches, pipelines, predictors.</li>' +
          '<li><b>Who won?</b> Both and neither. Consensus: a clean, pipelineable RISC-like core, with whatever instruction “skin” the market needs on the front. x86 keeps its CISC skin for compatibility; ARM is RISC through and through (efficiency king — and why Apple can use it in laptops: low power per performance and Apple controls its whole software stack, recompiling apps and translating old ones with Rosetta 2); RISC-V is clean, open and modular.</li></ul>',
        keypoints: ['x86 decodes CISC → RISC-like µops.', 'Front end = compatibility skin; back end = RISC core.', 'Modern consensus: RISC-like core.', 'Microarchitecture matters more than the ISA label.'],
        diagrams: [{ id: 'D10.5a', title: 'x86 micro-op decode: CISC skin, RISC core', svg: uops, how: 'One x86 instruction box → a decoder box → three small µop boxes (load, add, store) → a RISC-like execution core box.' }],
        mistakes: ['“CISC is obsolete” — x86 still dominates desktops and servers.', 'Thinking µops are visible to programmers (they are internal).'],
        practice: [
          mcq('x86 decodes its instructions into:', ['VLIW bundles', 'micro-operations (µops)', 'Java bytecode', 'microcode ROM addresses only'], 1, 'Rapid-fire recap Q3.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          txt('How many µops does the class example add [mem], eax decode into?', ['3', 'three'], 'load, add, store.', 'From class slides'),
          mcq('Why does modern x86 translate instructions into µops?', ['to save memory', 'to keep compatibility while executing on a pipelined, RISC-like out-of-order core', 'because µops are shorter to store on disk', 'to support virtual memory'], 1, 'Exit ticket Q2.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          msq('Which statements reflect the modern “blurred boundary”? (select all)', ['x86 runs RISC-like µops internally', 'ARM and RISC-V added SIMD/vector extensions', 'RISC ISAs added 16-bit compressed instructions', 'CISC chips no longer exist'], [0, 1, 2], 'x86 is alive and well.', ['Yes.', 'Yes.', 'Yes.', 'No.'])
        ],
        subjective: [sub('Explain with a diagram how a modern x86 processor executes CISC instructions using micro-operations. Why is it said that “CISC and RISC have merged”? (5 marks)', '<p>D10.5a; µops pipelined/renamed/reordered; blurred boundary points; consensus RISC-like core with a compatibility skin.</p>', 5, ['2 — diagram', '1.5 — µop explanation', '1.5 — merging'], ['D10.5a', 'D10.2b'])]
      },
      {
        id: '10.6', title: 'Trends: RISC-V Open ISA and AI Accelerators', badge: 'class', sources: '[CR] p40-42',
        keywords: 'risc-v open royalty free modular domain specific tpu gpu ptx accelerator',
        explain: '<ul><li><b>RISC-V — the open ISA:</b> open and <b>royalty-free</b> (anyone can design a RISC-V chip without paying licence fees), <b>modular</b> (small base ISA + optional extensions: M multiply, A atomic, F/D float, C compressed, V vector — take only what you need), born at <b>Berkeley in 2010</b>, adoption exploding from teaching to microcontrollers to data-centre and AI chips.</li>' +
          '<li><b>Domain-specific ISAs:</b> GPU ISAs (<b>NVIDIA PTX</b>) — thousands of simple cores built for massive parallelism; <b>Google TPU</b> — an ISA centred on <b>matrix multiply</b>, the core operation of neural networks.</li>' +
          '<li><b>Why specialise?</b> A fixed workload lets you strip away generality and win huge efficiency — the opposite of general-purpose design. Multicore, GPUs and AI accelerators are where architecture is heading (Module 6).</li></ul>',
        keypoints: ['RISC-V: open, royalty-free, modular, Berkeley 2010.', 'NVIDIA PTX = GPU ISA; Google TPU = matrix-multiply ISA.', 'Specialisation trades generality for efficiency.'],
        mistakes: ['Saying RISC-V is owned/licensed by one company.', 'Treating accelerators as general-purpose CPUs.'],
        practice: [
          msq('Which describe RISC-V? (select all)', ['open and royalty-free', 'modular base + extensions', 'created at Berkeley in 2010', 'variable-length CISC'], [0, 1, 2], 'It is a clean RISC.', ['Yes.', 'Yes.', 'Yes.', 'No.'], 'From class slides'),
          mcq('Google\'s TPU instruction set is centred on:', ['string processing', 'matrix multiplication', 'branch prediction', 'floating-point division'], 1, 'Core of neural networks.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          mcq('The main reason to design a domain-specific ISA is:', ['to run every program faster', 'a fixed workload allows stripping generality for large efficiency gains', 'to reduce compiler work', 'to remove memory'], 1, 'Class slide p42.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides')
        ],
        subjective: [sub('Write short notes on (a) RISC-V and (b) domain-specific ISAs for AI. (4 marks)', '<p>(a) open, royalty-free, modular, Berkeley 2010, broad adoption. (b) GPU PTX, TPU matrix multiply; specialisation for efficiency.</p>', 4, ['2 — RISC-V', '2 — DSAs'])]
      }
    ]
  });
})();
