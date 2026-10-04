/* Unit 14 – Pipelining (bonus unit: no class slides, researched) */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;
  const SRC = 'Source: Patterson & Hennessy, Computer Organization and Design (MIPS ed.), §4.5–4.6; Harris & Harris §7.5';

  /* D14.2a laundry */
  const laundry = (function () {
    const stg = [['Wash', 'pyr0'], ['Dry', 'pyr1'], ['Fold', 'pyr2'], ['Stash', 'pyr3']];
    const u = 22, ox = 90; // one 30-minute slot = u px
    let s = S.t(10, 18, 'Sequential: 4 loads × 4 stages × 30 min = 8 hours', 'sm b');
    for (let L = 0; L < 4; L++) stg.forEach((g, k) => { const x = ox + (L * 4 + k) * u, y = 26 + L * 20; s += '<rect class="' + g[1] + '" x="' + x + '" y="' + y + '" width="' + u + '" height="18" stroke="currentColor" stroke-opacity=".35"/>'; });
    for (let L = 0; L < 4; L++) s += S.t(ox - 8, 39 + L * 20, 'load ' + 'ABCD'[L], 'xs b', 'end');
    const y0 = 140;
    s += S.t(10, y0 - 8, 'Pipelined: a new load starts every 30 min → 7 slots = 3.5 hours', 'sm b');
    for (let L = 0; L < 4; L++) stg.forEach((g, k) => { const x = ox + (L + k) * u, y = y0 + L * 20; s += '<rect class="' + g[1] + '" x="' + x + '" y="' + y + '" width="' + u + '" height="18" stroke="currentColor" stroke-opacity=".35"/>'; });
    for (let L = 0; L < 4; L++) s += S.t(ox - 8, y0 + 13 + L * 20, 'load ' + 'ABCD'[L], 'xs b', 'end');
    for (let t = 0; t <= 16; t += 2) s += S.tc(ox + t * u, 236, (t / 2) + 'h', 'xs muted') + '<line class="edge" x1="' + (ox + t * u) + '" y1="24" x2="' + (ox + t * u) + '" y2="226"/>';
    stg.forEach((g, k) => { s += '<rect class="' + g[1] + '" x="' + (480 + k * 46) + '" y="150" width="14" height="12"/>' + S.t(498 + k * 46, 160, g[0], 'xs'); });
    s += S.t(10, 258, 'Each load still takes 2 h (latency unchanged); throughput rises from 1 load per 2 h to 1 load per 30 min. Speedup 8 / 3.5 ≈ 2.3 → 4 for many loads.', 'xs');
    return S.svg(700, 266, s, 'laundry analogy');
  })();

  /* D14.3a pipelined datapath (block level) */
  const pipeDP = (function () {
    let s = '';
    const stg = [['IF', 20, 'Instruction fetch'], ['ID', 170, 'Decode / reg read'], ['EX', 320, 'Execute / address'], ['MEM', 470, 'Memory access'], ['WB', 590, 'Write back']];
    stg.forEach((g) => { s += S.tc(g[1] + 60, 18, g[0], 'b') + S.tc(g[1] + 60, 32, g[2], 'xs muted'); });
    s += S.box(30, 90, 40, 60, 'PC', 'box', 'sm b') + S.rect(80, 70, 70, 100, 'box') + S.tc(115, 116, 'Instr', 'xs b') + S.tc(115, 130, 'memory', 'xs b');
    s += S.rect(185, 70, 95, 110, 'box') + S.tc(232, 120, 'Register', 'xs b') + S.tc(232, 134, 'file', 'xs b') + S.ell(232, 210, 38, 14, 'Sign ext', 'box', 'xs b');
    s += S.alu(345, 70, 60, 110, 'ALU') + S.muxS(320, 120, 16, 50);
    s += S.rect(490, 70, 80, 110, 'box') + S.tc(530, 120, 'Data', 'xs b') + S.tc(530, 134, 'memory', 'xs b');
    s += S.muxS(640, 90, 18, 60);
    const regs = [[160, 'IF/ID'], [305, 'ID/EX'], [455, 'EX/MEM'], [605, 'MEM/WB']];
    regs.forEach((r) => { s += S.rect(r[0], 54, 14, 176, 'boxa', 2) + S.tc(r[0] + 7, 48, r[1], 'xs b'); });
    s += S.a([[70, 120], [80, 120]], 'arr') + S.a([[150, 120], [160, 120]], 'arr') + S.a([[174, 120], [185, 120]], 'arr');
    s += S.a([[280, 100], [305, 100]], 'arr') + S.a([[280, 150], [305, 150]], 'arr') + S.a([[270, 210], [305, 210]], 'arr');
    s += S.a([[319, 100], [345, 100]], 'arr') + S.a([[319, 150], [320, 150]], 'arr') + S.a([[336, 145], [345, 145]], 'arr') + S.p([[319, 210], [328, 210], [328, 170]]);
    s += S.a([[405, 125], [455, 125]], 'arr') + S.a([[469, 125], [490, 125]], 'arr');
    s += S.a([[570, 110], [605, 110]], 'arr') + S.a([[619, 110], [640, 110]], 'arr') + S.p([[469, 160], [480, 160], [480, 195], [590, 195], [590, 135], [605, 135]]) + S.a([[619, 135], [640, 135]], 'arr');
    s += S.a([[658, 120], [680, 120], [680, 268], [176, 268], [176, 165], [185, 165]], 'hl') + S.t(250, 282, 'write-back goes back LEFT to the register file (destination register number carried along)', 'xs hltxt');
    s += S.t(24, 300, 'Pipeline registers (blue bars) hold everything a stage produces — data, register numbers and control — for the next stage.', 'xs muted');
    return S.svg(700, 308, s, 'pipelined datapath');
  })();

  /* D14.4a pipeline diagram */
  const pdiag = S.pipe({ title: 'Five independent instructions: 5 + (5 − 1) = 9 cycles', n: 9, rows: [
    { l: 'lw $10, 20($1)', c: { 1: 'IF', 2: 'ID', 3: 'EX', 4: 'MEM', 5: 'WB' } },
    { l: 'sub $11, $2, $3', c: { 2: 'IF', 3: 'ID', 4: 'EX', 5: 'MEM', 6: 'WB' } },
    { l: 'add $12, $3, $4', c: { 3: 'IF', 4: 'ID', 5: 'EX', 6: 'MEM', 7: 'WB' } },
    { l: 'lw $13, 24($1)', c: { 4: 'IF', 5: 'ID', 6: 'EX', 7: 'MEM', 8: 'WB' } },
    { l: 'add $14, $5, $6', c: { 5: 'IF', 6: 'ID', 7: 'EX', 8: 'MEM', 9: 'WB' } }] });

  UNITS.push({
    id: 14, title: 'Pipelining', short: 'Pipelining (bonus)',
    intro: '⚠ Bonus unit — no class slides (only foreshadowed: Intel 4004 F/D/E/W in Lab 1, the five stages in Lab 11, “RISC is easy to pipeline” in Lecture 10). Content researched from Patterson &amp; Hennessy ch. 4. Exam scope for diagrams is Units 1–13, but these ideas explain why the datapath is built the way it is.',
    subtopics: [
      {
        id: '14.1', title: 'Recap of Single-Cycle; the Problem', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'single cycle problem wasted time clock period motivation pipelining',
        explain: '<ul><li>The single-cycle datapath (Unit 13) completes one instruction per cycle, but the cycle must fit <b>lw</b> (800 ps with P&amp;H delays). R-type needs 600 ps, beq 500, j 200 — the remaining time in each period is wasted.</li>' +
          '<li>Each hardware unit is busy for only part of the cycle: while the ALU computes, the instruction memory sits idle, waiting for the next cycle.</li>' +
          '<li><b>Idea:</b> split the datapath into stages separated by registers and let different instructions occupy different stages at the same time. The clock period becomes the delay of ONE stage (≈ 200 ps) and, once the pipeline is full, one instruction completes every cycle.</li></ul>',
        keypoints: ['Single-cycle period = slowest instruction (lw).', 'Units sit idle most of the cycle.', 'Pipelining overlaps instructions to reuse idle units.'],
        mistakes: ['Thinking pipelining makes each instruction finish faster — it improves throughput, not latency.'],
        practice: [
          mcq('What is the main inefficiency of the single-cycle design that pipelining addresses?', ['too many registers', 'every instruction takes the slowest instruction\'s time and most units sit idle', 'the ALU is too wide', 'memory is too small'], 1, 'Wasted time and idle hardware.', ['No.', 'Correct.', 'No.', 'No.']),
          nat('With P&H delays, how many ps of each cycle does a beq waste in the single-cycle design (800 ps clock, beq needs 500 ps)?', 300, 0, '800 − 500.'),
          mcq('Pipelining primarily improves:', ['latency of one instruction', 'throughput (instructions completed per unit time)', 'code density', 'register count'], 1, 'Throughput.', ['Latency stays the same or grows.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Why is a single-cycle processor inefficient, and how does pipelining help? (3 marks)', '<p>Period fixed by lw; time wasted on shorter instructions; idle units. Pipelining divides work into stages, overlaps instructions, period = one stage, CPI → 1 at a much shorter clock.</p>', 3, ['1.5 — problem', '1.5 — idea'])]
      },
      {
        id: '14.2', title: 'Pipelining Intuition: the Laundry Analogy', badge: 'researched', sources: 'no slides (preview: [LB1] p6 Intel 4004 overlapped fetch/decode/execute/write)', sourceLine: SRC,
        keywords: 'laundry analogy pipelining throughput latency stages',
        explain: '<p><b>Laundry (P&amp;H):</b> four loads, four stages (wash, dry, fold, stash), 30 minutes each.</p>' +
          '<ul><li><b>Sequential:</b> finish one load completely before starting the next → 4 × 2 h = <b>8 hours</b>.</li>' +
          '<li><b>Pipelined:</b> as soon as load A leaves the washer, load B goes in → the last load finishes after (4 + 4 − 1) × 30 min = <b>3.5 hours</b>.</li>' +
          '<li>Each load still takes 2 hours (latency unchanged); what improves is <b>throughput</b>. Speedup = 8 / 3.5 ≈ 2.3; with many loads it approaches the number of stages (4).</li>' +
          '<li>Rules that carry over to CPUs: all stages must take the same time (the slowest stage sets the pace); there must be a place to hold work between stages (pipeline registers); trouble starts when a load needs something another load has not finished yet (hazards).</li></ul>',
        keypoints: ['Sequential 8 h vs pipelined 3.5 h (4 loads, 4 stages).', 'Time = (stages + n − 1) × stage time.', 'Latency same, throughput higher.', 'Slowest stage sets the pace.'],
        diagrams: [{ id: 'D14.2a', title: 'Laundry: sequential vs pipelined', svg: laundry, how: 'Two Gantt charts on the same time axis: top one staircase of 16 boxes end-to-end; bottom one each load shifted by one slot, overlapping.' }],
        mistakes: ['Computing pipelined time as n × stage time (forgets the fill time k − 1).'],
        practice: [
          nat('Laundry with 4 stages of 30 min each. How many hours do 6 loads take when pipelined?', 4.5, 0.01, '(4 + 6 − 1) × 0.5 h = 4.5 h.'),
          nat('Same laundry, 6 loads done sequentially (hours)?', 12, 0, '6 × 2 h.'),
          mcq('In the laundry analogy, what does pipelining NOT change?', ['throughput', 'the time for one load to go from dirty to stashed', 'total time for many loads', 'utilisation of the washer'], 1, 'Latency of a single load is unchanged.', ['Improves.', 'Correct.', 'Improves.', 'Improves.']),
          nat('If the dryer takes 60 min and the other three stages take 30 min, how often (minutes) does a pipelined load finish once the pipeline is full?', 60, 0, 'The slowest stage sets the pace.')
        ],
        subjective: [sub('Explain pipelining using the laundry analogy with a diagram. Distinguish latency and throughput. (4 marks)', '<p>D14.2a; 8 h vs 3.5 h; latency 2 h per load in both; throughput 1 per 30 min pipelined.</p>', 4, ['2 — diagram', '2 — latency vs throughput'], ['D14.2a'])]
      },
      {
        id: '14.3', title: '5-Stage MIPS Pipeline and Pipeline Registers', badge: 'researched', sources: 'no slides ([MIPS] p9 lists the five steps F/D/E/M/WB)', sourceLine: SRC,
        keywords: 'five stage pipeline if id ex mem wb pipeline registers if/id id/ex ex/mem mem/wb',
        explain: '<div class="table-wrap"><table><tr><th>Stage</th><th>Work</th><th>Hardware used</th></tr><tr><td><b>IF</b> instruction fetch</td><td>IR ← IMem[PC], PC ← PC + 4</td><td>PC, instruction memory, adder</td></tr><tr><td><b>ID</b> decode / register read</td><td>read rs, rt; sign-extend; generate control</td><td>register file (read), control</td></tr><tr><td><b>EX</b> execute</td><td>ALU operation, address calculation, branch compare/target</td><td>ALU, ALUSrc MUX, branch adder</td></tr><tr><td><b>MEM</b> memory access</td><td>lw reads / sw writes data memory</td><td>data memory</td></tr><tr><td><b>WB</b> write back</td><td>write result into rd/rt</td><td>MemtoReg MUX, register file (write)</td></tr></table></div>' +
          '<ul><li><b>Pipeline registers</b> sit between stages and are named after the stages they separate: <b>IF/ID, ID/EX, EX/MEM, MEM/WB</b>. On every clock edge each stage hands its results — data, the destination register number and the remaining control signals — to the next.</li>' +
          '<li>Control signals are generated in ID and travel with the instruction: EX signals (RegDst, ALUOp, ALUSrc) are used in EX; M signals (Branch, MemRead, MemWrite) in MEM; WB signals (MemtoReg, RegWrite) in WB.</li>' +
          '<li>The register file is <b>written in the first half and read in the second half</b> of a cycle, so an instruction in ID can read a value written by WB in the same cycle.</li>' +
          '<li>Why MIPS pipelines well (Lecture 10): fixed 32-bit length (fetch without decoding), few formats with rs/rt in fixed positions (read registers while decoding), memory operands only in lw/sw (address in EX, access in MEM), aligned memory accesses.</li></ul>',
        keypoints: ['IF, ID, EX, MEM, WB.', 'Pipeline registers: IF/ID, ID/EX, EX/MEM, MEM/WB.', 'Control generated in ID, carried along.', 'Register file: write first half, read second half.'],
        diagrams: [{ id: 'D14.3a', title: 'Pipelined datapath with IF/ID, ID/EX, EX/MEM, MEM/WB registers', svg: pipeDP, how: 'Draw the single-cycle blocks in a row (PC + IMem, register file, ALU, data memory, write-back MUX) and insert a tall thin register between each pair; label them IF/ID, ID/EX, EX/MEM, MEM/WB; show the write-back wire returning to the register file.' }],
        mistakes: ['Naming pipeline registers after one stage (it is IF/ID, not “ID register”).', 'Forgetting that the destination register number must be carried to WB.'],
        practice: [
          match('Match each stage with its main hardware.', ['IF', 'ID', 'EX', 'MEM', 'WB'], ['data memory', 'ALU', 'instruction memory', 'register file write', 'register file read + control'], [2, 4, 1, 0, 3], 'Five stages.'),
          nat('How many pipeline registers does the classic 5-stage MIPS pipeline have?', 4, 0, 'IF/ID, ID/EX, EX/MEM, MEM/WB.'),
          mcq('In which stage does lw compute its memory address?', ['IF', 'ID', 'EX', 'MEM'], 2, 'ALU adds base + offset in EX; memory is read in MEM.', ['No.', 'No.', 'Correct.', 'Access, not address.']),
          mcq('Why must the destination register number travel through ID/EX, EX/MEM and MEM/WB?', ['to compute the branch target', 'because by WB the IF/ID register already holds a different instruction', 'to sign-extend the immediate', 'to select the ALU operation'], 1, 'Each pipeline register holds a different instruction.', ['No.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Draw the 5-stage MIPS pipeline with its pipeline registers and explain the work done in each stage. (5 marks)', '<p>D14.3a + stage table; control carried along; register file write/read halves.</p>', 5, ['2 — diagram', '2.5 — stages', '0.5 — registers named'], ['D14.3a'])]
      },
      {
        id: '14.4', title: 'Pipeline Diagrams', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'pipeline diagram multi cycle clock cycle chart stages instructions',
        tool: 'pipeline',
        explain: '<ul><li>A <b>multi-cycle pipeline diagram</b> has instructions as rows and clock cycles (CC1, CC2) as columns; each cell names the stage the instruction is in.</li>' +
          '<li>Ideal pipeline: instruction i enters IF in cycle i; it is in stage s in cycle i + s − 1. Reading a column shows which five instructions are in flight at once.</li>' +
          '<li>Total cycles for n instructions in a k-stage pipeline (no stalls) = <b>k + (n − 1)</b>: k cycles to fill the pipe for the first instruction, then one more per instruction.</li>' +
          '<li>Stalls appear as repeated or empty (bubble) cells, shifting every later instruction right (Unit 15).</li></ul>',
        keypoints: ['Rows = instructions, columns = cycles.', 'n instructions, k stages: k + n − 1 cycles.', 'In cycle 5 of a full pipe, five instructions are in five different stages.'],
        diagrams: [{ id: 'D14.4a', title: 'Multi-cycle pipeline diagram (no hazards)', svg: pdiag, how: 'Grid with instructions down the left and CC1–CC9 across the top; write IF ID EX MEM WB along a diagonal staircase, each row shifted one column right.' }],
        mistakes: ['Starting the second instruction in cycle 1.', 'Counting cycles as 5n.'],
        practice: [
          nat('How many cycles do 5 independent instructions take in a 5-stage pipeline?', 9, 0, '5 + 4.'),
          nat('How many cycles do 100 independent instructions take in a 5-stage pipeline?', 104, 0, '5 + 99.'),
          txt('In the D14.4a diagram, which stage is the third instruction (add $12) in during CC5?', ['EX'], 'It entered IF in CC3 → CC5 is its third stage.'),
          nat('In a full 5-stage pipeline, how many instructions are in flight in one cycle?', 5, 0, 'One per stage.')
        ],
        subjective: [sub('Draw a pipeline diagram for lw, sub, add, lw, add (independent) and state the total number of cycles. (3 marks)', '<p>D14.4a; 9 cycles.</p>', 3, ['2 — diagram', '1 — count'], ['D14.4a'])]
      },
      {
        id: '14.5', title: 'Throughput, Latency, Ideal Speedup', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'throughput latency speedup ideal stages balanced pipeline register overhead',
        explain: '<ul><li><b>Latency</b> = time for one instruction from IF to WB. <b>Throughput</b> = instructions completed per unit time.</li>' +
          '<li><b>Ideal speedup</b> with k perfectly balanced stages and no hazards: time per instruction (pipelined) = time per instruction (non-pipelined) / k → speedup → <b>k</b> for many instructions. Exact: speedup = n·k / (k + n − 1).</li>' +
          '<li><b>Real pipelines fall short:</b> stages are unbalanced (the clock = the slowest stage), pipeline registers add overhead (setup + clock-to-Q), and hazards add stalls. Pipelined latency can be <i>longer</i> than single-cycle.</li></ul>' +
          '<p><b>P&amp;H example:</b> stage delays 200 (IF), 100 (reg read), 200 (ALU), 200 (MEM), 100 (WB). Single-cycle clock = 800 ps; pipelined clock = 200 ps (slowest stage). Three lw instructions: 3 × 800 = 2400 ps single-cycle vs (5 + 2) × 200 = 1400 ps pipelined. For a very long program the speedup → 800 / 200 = <b>4</b>, not 5, because the stages are unbalanced. One lw now takes 5 × 200 = 1000 ps latency (longer than 800!), but one finishes every 200 ps.</p>',
        keypoints: ['Speedup_ideal = k (balanced stages, many instructions).', 'Exact: n·k / (k + n − 1).', 'Clock = slowest stage + register overhead.', 'P&H: 800 ps → 200 ps, speedup 4.'],
        examples: [{ title: 'With pipeline-register overhead', html: '<p>Stage delays 250, 350, 150, 300, 200 ps; register overhead 20 ps. Non-pipelined time = 1250 ps. Pipelined clock = 350 + 20 = 370 ps. Speedup for many instructions = 1250 / 370 ≈ <b>3.38</b>. Latency = 5 × 370 = 1850 ps.</p>' }],
        mistakes: ['Using the average stage delay as the clock (it is the maximum).', 'Claiming latency improves.'],
        practice: [
          nat('Stage delays 200, 100, 200, 200, 100 ps. What is the pipelined clock period (ps)?', 200, 0, 'Slowest stage.'),
          nat('Same delays: speedup over the 800 ps single-cycle design for a very long program?', 4, 0, '800 / 200.'),
          nat('Same delays: latency of one instruction in the pipeline (ps)?', 1000, 0, '5 stages × 200 ps.'),
          nat('Exact speedup of a 5-stage balanced pipeline for n = 20 instructions (2 decimals)?', 4.17, 0.01, '20 × 5 / (5 + 19) = 100 / 24 = 4.17.'),
          nat('Stage delays 250, 350, 150, 300, 200 ps with 20 ps register overhead. Pipelined clock period (ps)?', 370, 0, '350 + 20.')
        ],
        subjective: [sub('Define latency, throughput and speedup for a pipeline. Compute the speedup of a 5-stage pipeline with stage delays 200, 100, 200, 200, 100 ps over a single-cycle design. Why is it not 5? (5 marks)', '<p>Definitions; single-cycle 800 ps vs pipelined 200 ps → 4; unbalanced stages, register overhead, hazards.</p>', 5, ['1.5 — definitions', '2 — calculation', '1.5 — why not 5'])]
      },
      {
        id: '14.6', title: 'Hazards Preview', badge: 'researched', sources: 'no slides ([CR] p34: load/store keeps hazards predictable)', sourceLine: SRC,
        keywords: 'hazards preview structural data control stall',
        explain: '<p>A <b>hazard</b> is a situation where the next instruction cannot execute in the following clock cycle. Three kinds (detailed in Unit 15):</p>' +
          '<ul><li><b>Structural:</b> two instructions need the same hardware in the same cycle (e.g. one memory for IF and MEM). MIPS avoids it with separate instruction and data memories (split L1, Unit 9) and a register file written/read in different halves.</li>' +
          '<li><b>Data:</b> an instruction needs a result that a previous instruction has not written yet (<code>add $s0,..</code> then <code>sub $t2, $s0, $t3</code>). Fixed by forwarding and, for loads, one stall.</li>' +
          '<li><b>Control:</b> the next PC depends on a branch that has not been resolved yet. Fixed by stalling, predicting, or (MIPS) the delayed branch.</li></ul>' +
          '<p>Lecture 10\'s point: RISC\'s load/store rule makes data hazards easy to detect — only lw/sw touch memory, and every instruction reads registers in ID and writes in WB.</p>',
        keypoints: ['Structural, data, control.', 'Split I/D memory removes the IF–MEM structural hazard.', 'Forwarding fixes most data hazards.'],
        mistakes: ['Calling a branch misprediction a data hazard.'],
        practice: [
          match('Match each situation with its hazard type.', ['IF and MEM need the single memory in the same cycle', 'sub needs $s0 that add has not written back', 'the next PC depends on beq'], ['control', 'structural', 'data'], [1, 2, 0], 'Three hazard types.'),
          mcq('How does MIPS avoid the structural hazard between instruction fetch and data access?', ['by stalling every lw', 'separate instruction and data memories (split L1 caches)', 'by forwarding', 'by a delayed branch'], 1, 'Harvard-style split.', ['Not needed.', 'Correct.', 'Data hazards.', 'Control hazards.']),
          mcq('Which hazard does forwarding address?', ['structural', 'data', 'control', 'none'], 1, 'Forwarding bypasses results to dependent instructions.', ['No.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Name and briefly explain the three types of pipeline hazards with one example each. (3 marks)', '<p>Structural (single memory), data (add → sub on $s0), control (beq).</p>', 3, ['1 each'])]
      }
    ]
  });
})();
