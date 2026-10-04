/* Unit 9 – Von Neumann vs Harvard Architecture */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* D9.1a CPU, memory, I/O, bus */
  const sysBus = (function () {
    let s = S.box(40, 30, 140, 70, 'CPU\n(compute)', 'boxa') + S.box(240, 30, 140, 70, 'MEMORY\n(store)', 'box') + S.box(440, 30, 140, 70, 'I/O\n(talk to world)', 'box');
    s += S.rect(30, 150, 560, 30, 'box2', 4) + S.tc(310, 170, 'BUS (connect): address + data + control', 'sm b');
    [110, 310, 510].forEach((x) => { s += S.a([[x, 100], [x, 150]], 'arr') + S.a([[x + 14, 150], [x + 14, 100]], 'arr'); });
    s += S.t(10, 206, 'Computer organisation asks: how exactly do these connect — and how many buses?', 'xs muted');
    return S.svg(620, 214, s, 'CPU memory I/O bus');
  })();

  /* D9.2a Von Neumann block diagram */
  const vn = (function () {
    let s = S.rect(30, 30, 230, 180, 'boxa') + S.tc(145, 50, 'CPU', 'b');
    s += S.box(50, 62, 190, 40, 'Control unit', 'box', 'sm b') + S.box(50, 110, 90, 40, 'ALU', 'box', 'sm b') + S.box(150, 110, 90, 40, 'Registers', 'box', 'sm b') + S.box(50, 158, 190, 36, 'PC · IR', 'box', 'xs b');
    s += S.rect(440, 30, 170, 180, 'box') + S.tc(525, 60, 'MEMORY', 'b') + S.tc(525, 80, '(one, unified)', 'xs muted');
    s += S.box(460, 95, 130, 40, 'instructions', 'box2', 'sm') + S.box(460, 145, 130, 40, 'data', 'box2', 'sm');
    s += S.a([[260, 110], [440, 110]], 'hl') + S.a([[440, 130], [260, 130]], 'hl') + S.tc(350, 100, 'SINGLE SHARED BUS', 'xs hltxt') + S.tc(350, 150, 'address + data + control', 'xs');
    s += S.box(270, 190, 140, 34, 'I/O', 'box', 'sm b') + S.a([[340, 130], [340, 190]], 'arr');
    s += S.t(10, 246, 'Instructions and data take turns on the one bus — the defining feature and the built-in limit.', 'xs b');
    return S.svg(640, 254, s, 'Von Neumann architecture');
  })();

  /* D9.2b stored-program memory map */
  const memMap = S.grid([['Address', 'Contents', 'Kind'], ['0x00', 'lw r1, 0x40', 'instruction'], ['0x04', 'add r3, r1, r2', 'instruction'], ['0x08', 'sw r3, 0x44', 'instruction'], ['0x40', '0x0000002A', 'data'], ['0x44', '0x00000000', 'data']], { cw: [90, 180, 120], rh: 30, title: 'Stored program: code and data side by side in ONE memory (class slide)', hl: [[1, 1], [2, 1], [3, 1]] });

  /* D9.3a bottleneck */
  const bottleneck = (function () {
    let s = S.box(30, 50, 150, 90, 'CPU\n(fast)', 'boxa') + S.box(460, 50, 150, 90, 'MEMORY\n(code + data)', 'box');
    s += '<path class="hl" d="M180,80 C260,80 280,92 320,92 C360,92 380,80 460,80" fill="none"/><path class="hl" d="M180,110 C260,110 280,98 320,98 C360,98 380,110 460,110" fill="none"/>';
    s += S.tc(320, 70, 'ONE narrow bus', 'xs hltxt') + S.tc(320, 132, 'fetch instruction OR load/store data', 'xs b') + S.tc(320, 148, '— never both in the same cycle', 'xs b');
    s += S.t(10, 186, 'Backus (1977) called this traffic jam the “von Neumann bottleneck”: the CPU computes faster than one bus can feed it.', 'xs muted');
    return S.svg(640, 194, s, 'von Neumann bottleneck');
  })();

  /* D9.4a Harvard */
  const harvard = (function () {
    let s = S.box(40, 30, 160, 70, 'INSTRUCTION\nMEMORY', 'box') + S.box(440, 30, 160, 70, 'DATA\nMEMORY', 'box');
    s += S.rect(220, 150, 200, 90, 'boxa') + S.tc(320, 172, 'CPU', 'b') + S.box(235, 185, 80, 40, 'Control', 'box', 'xs b') + S.box(325, 185, 80, 40, 'ALU', 'box', 'xs b');
    s += S.a([[120, 100], [120, 195], [220, 195]], 'hl') + S.t(126, 140, 'I-bus', 'xs hltxt');
    s += S.a([[520, 100], [520, 195], [420, 195]], 'arr') + S.a([[430, 210], [535, 210], [535, 100]], 'arr') + S.t(540, 140, 'D-bus', 'xs b');
    s += S.t(10, 266, 'Instruction fetch (I-bus) and data access (D-bus) happen in the SAME cycle — no contention.', 'xs b');
    return S.svg(640, 274, s, 'Harvard architecture');
  })();

  /* D9.4b timeline */
  const timeline = (function () {
    let s = S.t(10, 30, 'Von Neumann', 'sm b') + S.box(130, 12, 160, 30, 'FETCH instruction', 'box', 'xs b') + S.box(290, 12, 160, 30, 'ACCESS data', 'box2', 'xs b') + S.t(460, 32, '→ 2 cycles', 'sm b');
    s += S.t(10, 90, 'Harvard', 'sm b') + S.box(130, 62, 160, 30, 'FETCH instruction', 'box', 'xs b') + S.box(130, 94, 160, 30, 'ACCESS data', 'box2', 'xs b') + S.t(300, 98, '→ 1 cycle (both at once)', 'sm b');
    s += S.tc(210, 146, 'cycle 1', 'xs muted') + S.tc(370, 146, 'cycle 2', 'xs muted') + '<line class="edge" x1="290" y1="6" x2="290" y2="136"/>' + '<line class="edge" x1="130" y1="6" x2="130" y2="136"/>' + '<line class="edge" x1="450" y1="6" x2="450" y2="136"/>';
    s += S.t(10, 170, 'Same work, half the time: the two transfers ride separate buses simultaneously.', 'xs b');
    return S.svg(620, 178, s, 'VN vs Harvard timeline');
  })();

  /* D9.5a modified Harvard */
  const modHarvard = (function () {
    let s = S.box(30, 80, 110, 70, 'CPU\nCORE', 'boxa');
    s += S.box(190, 30, 110, 50, 'L1-I\n(instructions)', 'box', 'xs b') + S.box(190, 150, 110, 50, 'L1-D\n(data)', 'box', 'xs b');
    s += S.box(360, 80, 110, 70, 'L2 / L3\n(unified)', 'box2', 'sm b') + S.box(520, 80, 110, 70, 'DRAM\n(unified\ncode + data)', 'box', 'xs b');
    s += S.a([[190, 55], [140, 100]], 'hl') + S.a([[140, 130], [190, 175]], 'arr') + S.a([[190, 165], [140, 120]], 'arr');
    s += S.a([[300, 55], [360, 105]], 'arr') + S.a([[300, 175], [360, 125]], 'arr') + S.a([[470, 115], [520, 115]], 'arr') + S.a([[520, 125], [470, 125]], 'arr');
    s += '<line class="edge" x1="330" y1="10" x2="330" y2="220"/>';
    s += S.tc(165, 222, '← HARVARD ZONE', 'xs b') + S.tc(500, 222, 'VON NEUMANN ZONE →', 'xs b');
    s += S.t(10, 250, 'Split at L1 for parallel fetch; unified from L2 down for simplicity. Modified Harvard in one picture.', 'xs muted');
    return S.svg(650, 258, s, 'modified Harvard');
  })();

  UNITS.push({
    id: 9, title: 'Von Neumann vs Harvard Architecture', short: 'Von Neumann vs Harvard',
    intro: 'How CPU, memory and I/O are wired together: the stored-program Von Neumann machine and its bottleneck, the Harvard split, and the modified Harvard design inside every modern CPU. MCA Lectures 8 (Architecture Intro) and 9.',
    subtopics: [
      {
        id: '9.1', title: 'From Gates to a Complete Machine', badge: 'class', sources: '[VNH] p2-4; [MEM] p21',
        keywords: 'cpu memory io bus organisation computer system',
        explain: '<p><b>Analogy:</b> a city: factories (CPU) compute, warehouses (memory) store, ports (I/O) trade with the world, and roads (buses) connect them. The road layout decides how fast the city runs.</p>' +
          '<ul><li>Units 1–8 built the parts: gates → adders/ALU → flip-flops → registers/register files → SRAM/DRAM.</li>' +
          '<li>A complete computer needs four things: <b>CPU</b> (compute), <b>memory</b> (store), <b>I/O</b> (talk to the world) and a <b>bus</b> (connect). A bus carries address, data and control lines.</li>' +
          '<li>The question of <b>computer organisation</b>: how exactly do these connect, and how many buses? The answer shapes performance, cost and how you program the machine. Two classic blueprints: <b>Von Neumann</b> and <b>Harvard</b>.</li></ul>',
        keypoints: ['Computer = CPU + memory + I/O + bus.', 'Bus = address + data + control lines.', 'Organisation = how the parts are connected.'],
        diagrams: [{ id: 'D9.1a', title: 'CPU – Memory – I/O on a shared bus', svg: sysBus, how: 'Three boxes in a row above one long horizontal bus; two-way arrows from each box to the bus.' }],
        mistakes: ['Thinking a bus carries only data — address and control lines are part of it.'],
        practice: [
          msq('Which are the basic building blocks of a complete computer system per the class? (select all)', ['CPU', 'Memory', 'I/O', 'Bus'], [0, 1, 2, 3], 'All four.', ['Yes.', 'Yes.', 'Yes.', 'Yes.'], 'From class slides'),
          mcq('A system bus carries:', ['only data', 'address, data and control signals', 'only instructions', 'only the clock'], 1, 'Three groups of lines.', ['Incomplete.', 'Correct.', 'No.', 'No.']),
          mcq('The question “how many buses connect the CPU and memory?” belongs to:', ['instruction set architecture', 'computer organisation', 'compiler design', 'operating systems'], 1, 'Organisation = how the hardware is put together.', ['ISA is the programmer-visible contract.', 'Correct.', 'No.', 'No.'], 'From class slides')
        ],
        subjective: [sub('Draw the block diagram of a basic computer system and explain the role of each component. (3 marks)', '<p>D9.1a. CPU computes; memory stores programs and data; I/O communicates; bus (address/data/control) connects them.</p>', 3, ['1 — diagram', '2 — roles'], ['D9.1a'])]
      },
      {
        id: '9.2', title: 'Von Neumann Architecture: Structure and History', badge: 'class', sources: '[VNH] p5-10; [AI] p2-5',
        keywords: 'von neumann stored program edvac 1945 control unit alu memory io single bus',
        explain: '<ul><li><b>Stored-program concept (1945):</b> before, computers were wired for one task — reprogramming meant rewiring. Von Neumann: store the program <b>in the same memory as the data, encoded as numbers</b>. To run a different program, load different numbers. Software was born.</li>' +
          '<li><b>Structure:</b> one memory holding both instructions and data; <b>one shared bus</b> between CPU and memory; CPU = control unit + ALU + registers.</li>' +
          '<li><b>Four classic components:</b> <b>Control unit</b> (fetches and decodes, directs everything — an FSM, Unit 7), <b>Memory</b> (one unified store, uniform addressing), <b>ALU</b> (computation), <b>I/O</b>.</li>' +
          '<li><b>Programs ARE data:</b> compilers and assemblers write programs as data; JIT compilers generate code at run time; the OS loads programs by copying bytes; self-modifying code is possible — and the root of whole classes of security exploits.</li>' +
          '<li><b>History:</b> described by John von Neumann in the <b>“First Draft of a Report on the EDVAC” (1945)</b>, drawing on work by Eckert, Mauchly and Turing. It won because of <b>simplicity</b> (one memory, one bus — cheap) and <b>generality</b> (same hardware runs any program). Nearly every general-purpose computer since follows it.</li></ul>',
        keypoints: ['Stored program: code and data in one memory as numbers.', 'One memory + one bus.', 'Four components: control unit, memory, ALU, I/O.', 'EDVAC First Draft, 1945.'],
        diagrams: [{ id: 'D9.2a', title: 'Von Neumann block diagram', svg: vn, how: 'CPU box (control unit, ALU, registers) on the left, one memory box holding both instructions and data on the right, a single two-way bus between them; I/O on the bus.' },
          { id: 'D9.2b', title: 'Stored-program memory map', svg: memMap, how: 'A two-column table of addresses and contents: three instructions at 0x00–0x08, data words at 0x40 and 0x44.' }],
        mistakes: ['Saying Von Neumann has separate instruction and data memories (that is Harvard).', 'Crediting the stored-program idea to Harvard Mark I.'],
        practice: [
          mcq('The defining feature of the Von Neumann architecture is:', ['separate memories for code and data', 'a single memory and bus shared by instructions and data', 'no control unit', 'microcoded instructions'], 1, 'One memory, one bus.', ['Harvard.', 'Correct.', 'It has one.', 'Unrelated.'], 'From class slides'),
          txt('In which 1945 document did von Neumann describe the stored-program design? (name the machine, one word)', ['EDVAC', 'edvac'], '“First Draft of a Report on the EDVAC”.', 'From class slides'),
          mcq('Why is “programs are data” both a strength and a risk?', ['it makes programs run faster and use less power', 'it enables compilers, loaders and JITs, but also allows code injection / self-modifying exploits', 'it removes the need for an OS', 'it doubles memory bandwidth'], 1, 'Class slide p9.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          match('Match each classic component with its job.', ['Control unit', 'ALU', 'Memory', 'I/O'], ['computes add, compare, AND/OR', 'fetches/decodes and directs everything', 'talks to keyboards, screens, disks', 'holds program and data'], [1, 0, 3, 2], 'Four classic components.', 'From class slides')
        ],
        subjective: [sub('Explain the stored-program concept and draw the Von Neumann architecture, naming its four classic components. (5 marks)', '<p>Stored program (D9.2b). D9.2a with control unit, ALU, memory, I/O, single bus. History: 1945 EDVAC report. Advantages: simplicity, generality.</p>', 5, ['1.5 — stored program', '2 — diagram', '1.5 — components'], ['D9.2a', 'D9.2b'])]
      },
      {
        id: '9.3', title: 'The Von Neumann Bottleneck', badge: 'class', sources: '[VNH] p11-15, p28; [AI] p6-10',
        keywords: 'von neumann bottleneck backus 1977 bus contention ipc bandwidth',
        explain: '<ul><li>Every instruction fetch and every data access share <b>one bus</b>, so they must <b>take turns</b>: fetch an instruction OR load/store data — never both in the same cycle.</li>' +
          '<li>The CPU computes far faster than the bus can feed it → the bus is the limit. Term coined by <b>John Backus in 1977</b>.</li>' +
          '<li><b>Why it limits performance:</b> (1) <b>bus contention</b> — fetch and data compete; (2) <b>caps IPC</b> — instructions per cycle limited by delivery, not by the ALU; (3) <b>idle compute units</b> while waiting; (4) <b>worsens with CPU speed</b> — faster CPUs need data faster but buses do not scale as quickly.</li>' +
          '<li><b>Responses:</b> caches (keep hot code and data on-chip), wider and faster buses, Harvard-style splits.</li></ul>' +
          '<p><b>Worked (class p28):</b> 1 GHz CPU needs a 32-bit instruction + a 32-bit data word every cycle → 64 bits × 10⁹ /s = 64 Gbit/s = <b>8 GB/s</b> on the single VN bus. Harvard splits it into 4 GB/s + 4 GB/s on two buses.</p>',
        keypoints: ['Bottleneck = one bus shared by code and data (Backus 1977).', 'Effects: contention, IPC cap, idle ALU, worsens over time.', 'Fixes: caches, wider buses, Harvard split.', 'Bandwidth = bits per cycle × clock rate ÷ 8 → bytes/s.'],
        diagrams: [{ id: 'D9.3a', title: 'The single-bus bottleneck', svg: bottleneck, how: 'CPU and memory boxes joined by a bus drawn pinched in the middle; label “fetch OR data, never both”.' }],
        examples: [{ title: 'Class homework: 2 GHz, 64-bit instruction + 64-bit data per cycle', html: '<p>128 bits × 2 × 10⁹ = 256 Gbit/s = <b>32 GB/s</b> on the single Von Neumann bus. Harvard: 16 GB/s on the I-bus + 16 GB/s on the D-bus.</p>' }],
        mistakes: ['Blaming the ALU — the bottleneck is the shared path.', 'Forgetting to divide bits by 8 when asked for bytes per second.'],
        practice: [
          mcq('The Von Neumann bottleneck exists because:', ['The ALU is too slow', 'One bus is shared by code & data', 'Memory is too small', 'There are too many registers'], 1, 'They take turns on one path.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides (quick check)'),
          nat('A 1 GHz CPU must fetch a 32-bit instruction and access a 32-bit data word every cycle. Required single-bus bandwidth in GB/s?', 8, 0, '64 bits × 1e9 = 64 Gbit/s = 8 GB/s.', 'From class slides', 'GB/s'),
          nat('Class homework: 2 GHz, 64-bit instruction + 64-bit data per cycle. Required Von Neumann bus bandwidth in GB/s?', 32, 0, '128 × 2e9 / 8 = 32 GB/s.', 'From class slides', 'GB/s'),
          txt('Who coined the term “von Neumann bottleneck” (surname)?', ['Backus', 'John Backus'], 'John Backus, 1977 Turing Award lecture.', 'From class slides'),
          msq('Which are responses architects used against the bottleneck? (select all)', ['caches', 'wider/faster buses', 'Harvard-style split paths', 'removing the program counter'], [0, 1, 2], 'Class slide p15.', ['Yes.', 'Yes.', 'Yes.', 'No.'])
        ],
        subjective: [sub('What is the Von Neumann bottleneck? Explain four ways it limits performance and how modern systems reduce it. Include a bandwidth calculation. (5 marks)', '<p>D9.3a; contention, IPC cap, idle ALU, worsens with speed; caches, wider buses, Harvard split / split L1. Example 1 GHz × 64 bits = 8 GB/s.</p>', 5, ['1 — definition', '2 — four effects', '1 — remedies', '1 — calculation'], ['D9.3a'])]
      },
      {
        id: '9.4', title: 'Harvard Architecture: Separate I and D Memories', badge: 'class', sources: '[VNH] p16-22; [AI] p11-16',
        keywords: 'harvard architecture separate instruction data memory two buses mark i dsp microcontroller atmega',
        explain: '<ul><li><b>Two memories, two buses:</b> an instruction memory on the I-bus and a data memory on the D-bus. Fetch and data access happen <b>in the same cycle</b> — no contention, up to <b>2× memory throughput</b>.</li>' +
          '<li><b>Cost:</b> two memories and two bus systems — more wires, more pins, more silicon; less flexibility (code and data live in separate address spaces, so a program cannot simply treat code as data).</li>' +
          '<li><b>Name:</b> the <b>Harvard Mark I (1944)</b> kept instructions on punched paper tape and data in electro-mechanical relay counters — separate by physical necessity. Today separation is a design choice (split on-chip memories/caches).</li>' +
          '<li><b>Where it shines:</b> DSPs (streaming filters/FFTs), real-time systems (deterministic timing), microcontrollers — <b>ATmega328 (Arduino Uno) is true Harvard</b> (flash for code, SRAM for data) — embedded/IoT.</li></ul>' +
          '<div class="table-wrap"><table><tr><th></th><th>Von Neumann</th><th>Harvard</th></tr><tr><td>Memory</td><td>one (unified)</td><td>two (separate I and D)</td></tr><tr><td>Buses</td><td>one shared</td><td>two independent</td></tr><tr><td>Fetch + data</td><td>sequential (2 cycles)</td><td>simultaneous (1 cycle)</td></tr><tr><td>Throughput</td><td>bottlenecked</td><td>up to 2× higher</td></tr><tr><td>Cost / complexity</td><td>lower</td><td>higher (more wires/pins)</td></tr><tr><td>Flexibility</td><td>high (code = data)</td><td>lower (separate spaces)</td></tr><tr><td>Typical use</td><td>general-purpose CPUs</td><td>DSPs, microcontrollers</td></tr></table></div>',
        keypoints: ['Harvard = separate I-memory + D-memory + two buses.', 'Fetch + data in one cycle → up to 2× throughput.', 'Harvard Mark I (1944): tape + relays.', 'ATmega328 = true Harvard.', 'Cost: more pins, less flexibility.'],
        diagrams: [{ id: 'D9.4a', title: 'Harvard block diagram', svg: harvard, how: 'Instruction memory top-left, data memory top-right, CPU in the middle below; a one-way I-bus from instruction memory to CPU and a two-way D-bus between CPU and data memory.' },
          { id: 'D9.4b', title: 'Timeline: Von Neumann 2 cycles vs Harvard 1 cycle', svg: timeline, how: 'Two rows: VN shows FETCH then ACCESS in consecutive cycles; Harvard shows FETCH and ACCESS stacked in the same cycle.' }],
        mistakes: ['Saying Harvard means two CPUs.', 'Thinking Harvard always doubles program speed — only memory-transfer throughput up to 2×.'],
        practice: [
          mcq('In a Harvard architecture, an instruction fetch and a data load:', ['must take turns on one bus', 'can happen in the same cycle on separate buses', 'use the same memory', 'require two CPUs'], 1, 'Separate I-bus and D-bus.', ['VN.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          mcq('The Arduino Uno\'s ATmega328 microcontroller is:', ['pure Von Neumann', 'true Harvard', 'modified Harvard with split L1 caches', 'a dataflow machine'], 1, 'Class activity: flash for code, SRAM for data.', ['No.', 'Correct.', 'That is ARM Cortex-M4 / x86.', 'No.'], 'From class slides'),
          mcq('The Harvard Mark I (1944) stored instructions on:', ['magnetic core', 'punched paper tape', 'DRAM', 'vacuum-tube registers'], 1, 'Data in relay counters.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('A 1 GHz Harvard CPU fetches a 32-bit instruction and a 32-bit data word per cycle. Bandwidth needed on EACH bus in GB/s?', 4, 0, '32 bits × 1e9 / 8 = 4 GB/s per bus.', 'From class slides', 'GB/s'),
          msq('Disadvantages of a pure Harvard design compared with Von Neumann: (select all)', ['more pins and wiring', 'code cannot easily be treated as data', 'lower memory throughput', 'two memory systems to build'], [0, 1, 3], 'Throughput is HIGHER in Harvard.', ['Yes.', 'Yes.', 'No — higher.', 'Yes.'])
        ],
        subjective: [sub('Draw block diagrams of Von Neumann and Harvard architectures and compare them (six points). Where is each used? (5 marks)', '<p>D9.2a, D9.4a, D9.4b and the comparison table. VN: general-purpose CPUs; Harvard: DSPs, microcontrollers (ATmega328).</p>', 5, ['2 — two diagrams', '2 — comparison', '1 — uses'], ['D9.2a', 'D9.4a'])]
      },
      {
        id: '9.5', title: 'Modified Harvard in Modern CPUs', badge: 'class', sources: '[VNH] p23-27; [AI] p17-20',
        keywords: 'modified harvard split l1 cache instruction cache data cache unified l2 coherence',
        explain: '<ul><li><b>Von Neumann on the outside, Harvard on the inside.</b> Off-chip, one unified DRAM holds code and data (simple, flexible, cheap). On-chip, the L1 cache is <b>split into L1-I (instructions) and L1-D (data)</b>, Harvard-style.</li>' +
          '<li>The pipeline fetches an instruction and a data word <b>every cycle</b> from the two L1 caches — no contention — while everything still lives in one memory underneath. L2/L3 are unified.</li>' +
          '<li><b>Why the hybrid wins:</b> parallel L1 access (Harvard speed where it counts), unified main memory (one address space — easy loading, linking, programming), hardware cache coherence keeps the split caches consistent so software sees one memory, and it scales to real workloads.</li>' +
          '<li><b>Class activity:</b> ATmega328 = true Harvard; ARM Cortex-M4 = modified Harvard; x86-64 desktop = modified Harvard.</li>' +
          '<li>This split L1 is also what removes the structural hazard between IF and MEM in the 5-stage pipeline (Unit 15).</li></ul>',
        keypoints: ['Modified Harvard = split L1-I/L1-D + unified L2/L3/DRAM.', 'VN outside, Harvard inside.', 'Cortex-M4 and x86-64 are modified Harvard.', 'Split L1 lets IF and MEM run in the same cycle.'],
        diagrams: [{ id: 'D9.5a', title: 'Split L1-I / L1-D over unified L2/L3 and DRAM', svg: modHarvard, how: 'CPU core box with two small caches L1-I and L1-D beside it; both feed one unified L2/L3 box, then DRAM; mark the Harvard zone (L1) and the Von Neumann zone (L2 down).' }],
        mistakes: ['Calling a modern x86 “pure Von Neumann” — its L1 is split.', 'Claiming programs on a modern CPU see two address spaces.'],
        practice: [
          mcq('A modern desktop x86-64 processor is best described as:', ['pure Von Neumann', 'true Harvard', 'modified Harvard', 'neither'], 2, 'Split L1, unified memory.', ['Its L1 is split.', 'Main memory is unified.', 'Correct.', 'No.'], 'From class slides'),
          mcq('In a modified Harvard CPU, the split occurs at:', ['main memory', 'the L1 cache level', 'the register file', 'the disk'], 1, 'L1-I and L1-D.', ['DRAM is unified.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          match('Classify each processor (class activity).', ['ATmega328 (Arduino Uno)', 'ARM Cortex-M4', 'x86-64 desktop'], ['true Harvard', 'modified Harvard', 'pure Von Neumann'], [0, 1, 1], 'Class slide p27.', 'From class slides'),
          mcq('What keeps the split L1 caches consistent with the single main memory so software sees one memory?', ['the compiler', 'hardware cache coherence', 'the programmer', 'refresh logic'], 1, 'Class slide p27.', ['No.', 'Correct.', 'No.', 'DRAM refresh is unrelated.'])
        ],
        subjective: [sub('Explain modified Harvard architecture with a diagram. Why do almost all modern CPUs use it? (4 marks)', '<p>D9.5a. Split L1 for parallel fetch + data, unified L2/L3 and DRAM for flexibility; coherence hardware; best of both.</p>', 4, ['2 — diagram', '2 — reasons'], ['D9.5a'])]
      }
    ]
  });
})();
