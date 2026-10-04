/* Unit 15 – Pipeline Hazards (bonus unit: no class slides, researched) */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;
  const SRC = 'Source: Patterson & Hennessy, Computer Organization and Design (MIPS ed.), §4.7–4.8; Harris & Harris §7.5.3';

  /* draw a box around one column of a pipe diagram (default geometry of S.pipe) */
  function markCol(svg, c, rows, label) {
    const ox = 170, cw = 52, oy = 36, rh = 34, x = ox + (c - 1) * cw;
    const add = '<rect class="hl" x="' + (x - 1) + '" y="' + (oy - 2) + '" width="' + (cw + 2) + '" height="' + (rows * rh + 4) + '" rx="6" fill="none"/>' + (label ? S.tc(x + cw / 2, oy + rows * rh + 12, label, 'xs hltxt') : '');
    return svg.replace('</svg>', add + '</svg>').replace(/viewBox="0 0 (\d+) (\d+)"/, (m, w, h) => 'viewBox="0 0 ' + w + ' ' + (Number(h) + 14) + '"');
  }

  const structural = markCol(S.pipe({ title: 'One shared memory: lw\'s MEM and the 4th instruction\'s IF collide in CC4', n: 8, rows: [
    { l: 'lw $t0, 0($t1)', c: { 1: 'IF', 2: 'ID', 3: 'EX', 4: 'MEM', 5: 'WB' } },
    { l: 'add $t2, $t3, $t4', c: { 2: 'IF', 3: 'ID', 4: 'EX', 5: 'MEM', 6: 'WB' } },
    { l: 'sub $t5, $t6, $t7', c: { 3: 'IF', 4: 'ID', 5: 'EX', 6: 'MEM', 7: 'WB' } },
    { l: 'or $s0, $s1, $s2', c: { 4: 'IF', 5: 'ID', 6: 'EX', 7: 'MEM', 8: 'WB' } }] }), 4, 4, 'both need the memory');

  const stalls = S.pipe({ title: 'No forwarding: sub waits until add has written $s0 (WB in CC5) — 2 bubbles', n: 9, rows: [
    { l: 'add $s0, $t0, $t1', c: { 1: 'IF', 2: 'ID', 3: 'EX', 4: 'MEM', 5: 'WB' } },
    { l: 'sub $t2, $s0, $t3', c: { 2: 'IF', 3: 'stall', 4: 'stall', 5: 'ID', 6: 'EX', 7: 'MEM', 8: 'WB' } },
    { l: 'and $t4, $t5, $t6', c: { 3: 'stall', 4: 'stall', 5: 'IF', 6: 'ID', 7: 'EX', 8: 'MEM', 9: 'WB' } }] });

  const fwdPipe = S.pipe({ title: 'Forwarding: EX/MEM → EX (and) and MEM/WB → EX (or); add reads the register file after WB', n: 9, rows: [
    { l: 'sub $2, $1, $3', c: { 1: 'IF', 2: 'ID', 3: 'EX', 4: 'MEM', 5: 'WB' } },
    { l: 'and $12, $2, $5', c: { 2: 'IF', 3: 'ID', 4: 'EX', 5: 'MEM', 6: 'WB' } },
    { l: 'or $13, $6, $2', c: { 3: 'IF', 4: 'ID', 5: 'EX', 6: 'MEM', 7: 'WB' } },
    { l: 'add $14, $2, $2', c: { 4: 'IF', 5: 'ID', 6: 'EX', 7: 'MEM', 8: 'WB' } },
    { l: 'sw $15, 100($2)', c: { 5: 'IF', 6: 'ID', 7: 'EX', 8: 'MEM', 9: 'WB' } }], fwd: [[0, 3, 1, 4], [0, 4, 2, 5]] });
  const fwdHW = (function () {
    let s = S.rect(20, 30, 14, 170, 'boxa', 2) + S.tc(27, 22, 'ID/EX', 'xs b');
    s += S.muxT(90, 40, 3, { inLabels: ['00', '10', '01'], h: 80, w: 38, label: 'A' }).svg + S.muxT(90, 130, 3, { inLabels: ['00', '10', '01'], h: 80, w: 38, label: 'B' }).svg;
    s += S.alu(180, 60, 60, 120, 'ALU');
    s += S.rect(290, 30, 14, 170, 'boxa', 2) + S.tc(297, 22, 'EX/MEM', 'xs b') + S.rect(430, 30, 14, 170, 'boxa', 2) + S.tc(437, 22, 'MEM/WB', 'xs b');
    s += S.box(340, 100, 70, 40, 'Data\nmem', 'box', 'xs b');
    s += S.a([[34, 60], [90, 60]], 'arr') + S.a([[34, 150], [90, 150]], 'arr') + S.t(38, 54, 'RD1', 'xs b') + S.t(38, 144, 'RD2', 'xs b');
    s += S.a([[128, 80], [180, 90]], 'arr') + S.a([[128, 170], [180, 150]], 'arr') + S.a([[240, 120], [290, 120]], 'arr') + S.a([[304, 120], [340, 120]], 'arr') + S.a([[410, 120], [430, 120]], 'arr');
    s += S.a([[318, 120], [318, 225], [70, 225], [70, 80], [90, 80]], 'hl') + S.p([[70, 170], [90, 170]], 'hl') + S.dot(70, 170) + S.dot(318, 120) + S.t(330, 238, 'EX/MEM.ALUresult → input 10', 'xs hltxt');
    s += S.a([[444, 120], [470, 120], [470, 250], [56, 250], [56, 100], [90, 100]], 'hl2') + S.p([[56, 190], [90, 190]], 'hl2') + S.dot(56, 190) + S.t(330, 264, 'MEM/WB result → input 01', 'xs b');
    s += S.box(150, 280, 140, 40, 'Forwarding\nunit', 'box2', 'xs b') + S.a([[200, 280], [109, 212]], 'ctl') + S.a([[220, 280], [109, 122]], 'ctl') + S.t(300, 296, 'compares ID/EX.Rs/Rt with EX/MEM.Rd and MEM/WB.Rd', 'xs ctltxt') + S.t(300, 312, '→ ForwardA, ForwardB', 'xs ctltxt');
    return S.svg(640, 330, s, 'forwarding hardware');
  })();

  const loadUse = S.pipe({ title: 'Load-use: one bubble, then MEM/WB → EX forwarding (cannot forward back in time)', n: 9, rows: [
    { l: 'lw $2, 20($1)', c: { 1: 'IF', 2: 'ID', 3: 'EX', 4: 'MEM', 5: 'WB' } },
    { l: 'and $4, $2, $5', c: { 2: 'IF', 3: 'ID', 4: 'stall', 5: 'EX', 6: 'MEM', 7: 'WB' } },
    { l: 'or $8, $2, $6', c: { 3: 'IF', 4: 'stall', 5: 'ID', 6: 'EX', 7: 'MEM', 8: 'WB' } },
    { l: 'add $9, $4, $2', c: { 5: 'IF', 6: 'ID', 7: 'EX', 8: 'MEM', 9: 'WB' } }], fwd: [[0, 4, 1, 5]] });

  const hazTable = '<div class="table-wrap"><table><tr><th>Hazard</th><th>Cause</th><th>Example</th><th>Fixes</th></tr><tr><td>Structural</td><td>two instructions need the same resource in one cycle</td><td>single memory for IF and MEM</td><td>duplicate the resource (split I/D memory), register file write/read halves, stall</td></tr><tr><td>Data</td><td>operand not yet produced</td><td>add $s0 → sub uses $s0</td><td>forwarding, stall (load-use), compiler scheduling</td></tr><tr><td>Control</td><td>next PC unknown until a branch resolves</td><td>beq</td><td>stall, branch in ID, predict not-taken / dynamic prediction, delayed branch</td></tr></table></div>';

  UNITS.push({
    id: 15, title: 'Pipeline Hazards', short: 'Hazards (bonus)',
    intro: '⚠ Bonus unit — no class slides. Structural, data and control hazards; stalls, forwarding, the load-use stall and compiler scheduling. Researched from Patterson &amp; Hennessy ch. 4. Try every example in the pipeline stepper tool.',
    subtopics: [
      {
        id: '15.1', title: 'Hazard Taxonomy: Structural, Data, Control', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'hazard structural data control branch taxonomy',
        explain: '<p><b>Hazard:</b> the next instruction cannot execute in its planned clock cycle.</p>' + hazTable +
          '<ul><li><b>Structural example:</b> with ONE memory, lw\'s MEM stage (CC4) and the fourth instruction\'s IF (CC4) both need it. The classic MIPS pipeline avoids this with separate instruction and data memories (split L1-I/L1-D — modified Harvard, Unit 9).</li>' +
          '<li><b>Control hazards:</b> in the basic P&amp;H pipeline the branch decision is known in MEM → 3 wrong-path instructions; moving the compare and target adder into ID reduces the penalty to 1 cycle. Options: stall, <b>predict not-taken</b> (flush on taken), <b>dynamic prediction</b> (1-bit / 2-bit counters, branch target buffer), MIPS <b>delayed branch</b> (the instruction after a branch always executes).</li></ul>',
        keypoints: ['Structural = resource conflict; data = operand not ready; control = next PC unknown.', 'Split I/D memory removes the IF–MEM conflict.', 'Branch in ID → 1-cycle penalty.', 'Predict not-taken, 2-bit predictors, delayed branch.'],
        diagrams: [{ id: 'D15.1a', title: 'Structural hazard with a single memory', svg: structural, how: 'Pipeline diagram of four instructions; box the CC4 column where the lw MEM and the 4th instruction\'s IF both need the one memory.' }],
        mistakes: ['Calling a resource conflict a data hazard.', 'Thinking MIPS has the single-memory structural hazard (split caches avoid it).'],
        practice: [
          mcq('With a single unified memory and no split caches, which pair of stages conflicts?', ['ID and WB', 'IF and MEM', 'EX and MEM', 'IF and ID'], 1, 'Both access memory.', ['Register file handles this with halves.', 'Correct.', 'Different units.', 'Different units.']),
          match('Classify each fix with the hazard it addresses.', ['forwarding', 'separate instruction and data memories', 'branch prediction'], ['control', 'data', 'structural'], [1, 2, 0], 'Taxonomy table.'),
          nat('In the basic P&H pipeline where the branch outcome is known in MEM, how many instructions after a taken branch are on the wrong path?', 3, 0, 'IF, ID, EX of the following three instructions.'),
          mcq('The MIPS “delayed branch” means:', ['branches take two cycles', 'the instruction right after a branch is always executed', 'branches are predicted taken', 'branches are moved to WB'], 1, 'The branch delay slot.', ['No.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('Classify pipeline hazards with one example and one solution each. Show a structural hazard on a pipeline diagram. (5 marks)', '<p>Table + D15.1a.</p>', 5, ['3 — three types', '2 — diagram'], ['D15.1a'])]
      },
      {
        id: '15.2', title: 'RAW, WAR, WAW; Why Only RAW In-Order', badge: 'researched', sources: 'no slides', sourceLine: SRC + '; Hennessy & Patterson, Computer Architecture: A Quantitative Approach §3.1',
        keywords: 'raw war waw true dependence anti dependence output dependence in order pipeline',
        explain: '<ul><li><b>RAW (read after write) — true dependence:</b> I2 reads a register that I1 writes. <code>add $s0,$t0,$t1</code> ; <code>sub $t2,$s0,$t3</code>.</li>' +
          '<li><b>WAR (write after read) — anti-dependence:</b> I2 writes a register that I1 reads. <code>sub $t2,$s0,$t3</code> ; <code>add $s0,$t4,$t5</code>.</li>' +
          '<li><b>WAW (write after write) — output dependence:</b> both write the same register. <code>add $s0,..</code> ; <code>sub $s0,..</code>.</li>' +
          '<li><b>Why only RAW causes hazards in the 5-stage in-order MIPS pipeline:</b> every instruction reads registers in the same early stage (ID, stage 2) and writes in the same late stage (WB, stage 5), and instructions stay in program order. So a later instruction can never write before an earlier one reads (no WAR) or writes (no WAW). WAR and WAW become real hazards only in out-of-order or multi-length pipelines — solved there by register renaming.</li></ul>',
        keypoints: ['RAW = true dependence (the only hazard in 5-stage in-order MIPS).', 'WAR = anti, WAW = output dependence (name dependences).', 'Reads in ID, writes in WB, in order → no WAR/WAW.', 'Renaming removes WAR/WAW in out-of-order CPUs.'],
        mistakes: ['Labelling add $s0 → sub uses $s0 as WAR (it is RAW).'],
        practice: [
          mcq('I1: add $s0, $t0, $t1 ; I2: sub $t2, $s0, $t3. The dependence is:', ['RAW', 'WAR', 'WAW', 'none'], 0, 'I2 reads what I1 writes.', ['Correct.', 'No.', 'No.', 'No.']),
          mcq('I1: lw $t0, 0($s1) ; I2: addi $s1, $s1, 4. The dependence on $s1 is:', ['RAW', 'WAR', 'WAW', 'none'], 1, 'I2 writes what I1 reads.', ['No.', 'Correct.', 'No.', 'No.']),
          mcq('Why can WAW not occur in the classic 5-stage MIPS pipeline?', ['MIPS has no duplicate registers', 'all writes happen in WB in program order', 'forwarding removes it', 'the compiler forbids it'], 1, 'Same write stage, in order.', ['No.', 'Correct.', 'Forwarding is for RAW.', 'No.']),
          txt('Which technique removes WAR and WAW (name) dependences in out-of-order processors? (two words)', ['register renaming', 'renaming'], 'Register renaming.')
        ],
        subjective: [sub('Explain RAW, WAR and WAW dependences with MIPS examples. Why does only RAW cause hazards in the classic 5-stage pipeline? (4 marks)', '<p>Definitions + examples above; reads in ID, writes in WB, in order.</p>', 4, ['3 — three types', '1 — reason'])]
      },
      {
        id: '15.3', title: 'Naive Solution: Stalls (Bubbles)', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'stall bubble nop hazard detection unit pipeline interlock',
        tool: 'pipeline',
        explain: '<ul><li>The simplest fix for a RAW hazard: <b>stall</b> the dependent instruction (and everything behind it) until the value is in the register file. Each lost cycle is a <b>bubble</b> — effectively a nop travelling down the pipe.</li>' +
          '<li>With the register file written in the first half and read in the second half of a cycle, a dependent instruction right after an ALU instruction needs <b>2 stall cycles</b> (its ID must line up with the producer\'s WB). One instruction in between → 1 stall; two or more in between → none.</li>' +
          '<li><b>How hardware stalls:</b> a hazard detection unit in ID (1) keeps the PC and IF/ID register unchanged (the instructions are fetched/decoded again) and (2) zeroes the control signals entering ID/EX, creating the bubble. MIPS stands for “Microprocessor without Interlocked Pipeline Stages” — early MIPS left this to the compiler (inserting nops).</li>' +
          '<li>Cost: CPI = 1 + stall cycles per instruction. Stalling every dependence would waste a lot of time — hence forwarding.</li></ul>',
        keypoints: ['Stall = bubble = nop.', 'No forwarding: back-to-back ALU dependence → 2 stalls.', 'Stall: freeze PC and IF/ID, zero ID/EX control.', 'CPI = 1 + stalls per instruction.'],
        diagrams: [{ id: 'D15.3a', title: 'Stalls (bubbles) without forwarding', svg: stalls, how: 'Pipeline diagram: add normal; sub fetched in CC2 but held, with two stall boxes, so its ID lines up with add\'s WB in CC5; every later instruction shifts right too.' }],
        mistakes: ['Counting 3 stalls (forgets the write-first-half / read-second-half register file).', 'Stalling only the dependent instruction while letting later ones overtake it.'],
        practice: [
          nat('No forwarding, register file written in the first half and read in the second half: how many stall cycles between add $s0, .. and the immediately following sub $t2, $s0, ..?', 2, 0, 'sub\'s ID must be in add\'s WB cycle (CC5) instead of CC3.'),
          nat('Same assumptions, but one independent instruction sits between them. Stalls?', 1, 0, 'Distance 2 → one bubble.'),
          nat('Without forwarding, add → sub (dependent) → and (independent): total cycles for the three instructions?', 9, 0, '7 ideal + 2 stalls (D15.3a).'),
          mcq('To insert a bubble, the hazard detection unit:', ['flushes the whole pipeline', 'holds the PC and IF/ID, and zeroes the control signals going into ID/EX', 'reverses the PC', 'doubles the clock'], 1, 'Standard P&H mechanism.', ['Too drastic.', 'Correct.', 'No.', 'No.'])
        ],
        subjective: [sub('What is a pipeline stall? Show with a diagram how many bubbles are needed for add $s0, $t0, $t1 followed by sub $t2, $s0, $t3 without forwarding. (4 marks)', '<p>D15.3a; 2 bubbles; mechanism (hold PC/IF-ID, zero control).</p>', 4, ['1 — definition', '2 — diagram', '1 — mechanism'], ['D15.3a'])]
      },
      {
        id: '15.4', title: 'Forwarding (Bypassing)', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'forwarding bypassing ex/mem mem/wb forwarding unit forwarda forwardb',
        explain: '<ul><li>The result of an ALU instruction exists at the end of its EX stage — two cycles before WB. <b>Forwarding</b> sends it straight from the pipeline registers to the ALU inputs of later instructions, instead of waiting for the register file.</li>' +
          '<li><b>Paths:</b> <b>EX/MEM → EX</b> (producer one instruction ahead) and <b>MEM/WB → EX</b> (producer two ahead). Three instructions ahead: the register-file write/read halves handle it.</li>' +
          '<li><b>Forwarding unit</b> drives two 3-input MUXes in front of the ALU (ForwardA, ForwardB: 00 = register file, 10 = EX/MEM, 01 = MEM/WB). Conditions (for Rs; same for Rt):</li></ul>' +
          '<pre>EX hazard:  if (EX/MEM.RegWrite and EX/MEM.Rd != 0 and EX/MEM.Rd == ID/EX.Rs)  ForwardA = 10\nMEM hazard: if (MEM/WB.RegWrite and MEM/WB.Rd != 0\n               and not (EX hazard for Rs) and MEM/WB.Rd == ID/EX.Rs)       ForwardA = 01</pre>' +
          '<p>The “not EX hazard” clause gives priority to the most recent result (e.g. three adds in a row to the same register). Rd ≠ 0 because $zero must stay 0.</p>' +
          '<p><b>P&amp;H chain:</b> sub $2,$1,$3; and $12,$2,$5 (EX/MEM → EX); or $13,$6,$2 (MEM/WB → EX); add $14,$2,$2 (register file, written and read in CC5); sw $15,100($2) (register file). With forwarding: 9 cycles, 0 stalls; without: 11 cycles.</p>',
        keypoints: ['Forward EX/MEM → EX (distance 1) and MEM/WB → EX (distance 2).', 'ForwardA/B: 00 reg file, 10 EX/MEM, 01 MEM/WB.', 'Check RegWrite and Rd ≠ 0; EX hazard has priority.', 'ALU → ALU dependences need 0 stalls with forwarding.'],
        diagrams: [{ id: 'D15.4a', title: 'Forwarding paths EX/MEM → EX and MEM/WB → EX', svg: fwdPipe + fwdHW, how: 'Pipeline diagram of the sub-and-or-add-sw chain with arrows from the END of sub\'s EX to the START of and\'s EX, and from the end of sub\'s MEM to or\'s EX; below, the ALU with two 3-input MUXes fed by the register file, EX/MEM and MEM/WB, controlled by the forwarding unit.' }],
        mistakes: ['Drawing a forwarding arrow backwards in time.', 'Forgetting the Rd ≠ 0 check.', 'Forwarding from MEM/WB when a newer value is in EX/MEM.'],
        practice: [
          nat('With forwarding, how many stall cycles does add $s0, $t0, $t1 followed immediately by sub $t2, $s0, $t3 need?', 0, 0, 'EX/MEM → EX forwarding.'),
          mcq('and $12, $2, $5 directly follows sub $2, $1, $3. Where does and\'s first ALU operand come from?', ['register file', 'EX/MEM pipeline register', 'MEM/WB pipeline register', 'data memory'], 1, 'Distance 1 → EX/MEM → EX, ForwardA = 10.', ['Not written yet.', 'Correct.', 'Distance 2.', 'No.']),
          txt('What value of ForwardA selects the MEM/WB path? (2 bits)', ['01'], '00 register file, 10 EX/MEM, 01 MEM/WB.'),
          nat('The P&H chain (sub, and, or, add, sw all using $2) with forwarding: total cycles?', 9, 0, '5 + 4, no stalls.'),
          mcq('Why does the forwarding condition include “EX/MEM.Rd ≠ 0”?', ['to save power', 'writes to $zero must not be forwarded — $zero always reads 0', 'because Rd is never 0', 'for branches'], 1, '$zero is hardwired.', ['No.', 'Correct.', 'It can be 0.', 'No.'])
        ],
        subjective: [sub('Explain forwarding with a pipeline diagram and the forwarding hardware. Write the EX-hazard and MEM-hazard conditions. (5 marks)', '<p>D15.4a; conditions above; priority rule.</p>', 5, ['2 — diagram', '1 — hardware', '2 — conditions'], ['D15.4a'])]
      },
      {
        id: '15.5', title: 'Load-Use Hazard: Forwarding + Stall', badge: 'researched', sources: 'no slides', sourceLine: SRC,
        keywords: 'load use hazard stall forwarding lw hazard detection memread',
        explain: '<ul><li>A load\'s data appears only at the end of <b>MEM</b>. An instruction right after the load needs it at the start of its EX — one cycle earlier. Forwarding cannot send data backwards in time, so the pipeline must <b>stall one cycle</b>, then forward MEM/WB → EX.</li>' +
          '<li><b>Detection (in ID):</b> <code>if (ID/EX.MemRead and (ID/EX.Rt == IF/ID.Rs or ID/EX.Rt == IF/ID.Rt)) stall</code> — hold PC and IF/ID, insert a bubble into ID/EX.</li>' +
          '<li>Without forwarding the same load-use pair costs 2 stalls; with forwarding exactly <b>1</b>. If one independent instruction separates them, there is no stall.</li></ul>',
        keypoints: ['Load-use = 1 stall even with forwarding.', 'Then MEM/WB → EX forwarding.', 'Detect: ID/EX.MemRead and ID/EX.Rt matches IF/ID.Rs or Rt.', 'No stall if one instruction separates lw and the use.'],
        diagrams: [{ id: 'D15.5a', title: 'Load-use: 1 stall + forwarding', svg: loadUse, how: 'lw normal; and fetched next with one stall box before its EX; arrow from the end of lw\'s MEM to the start of and\'s EX; later instructions shift right by one.' }],
        mistakes: ['Claiming forwarding removes the load-use stall completely.', 'Drawing the forward from lw\'s EX (the data is not ready until MEM).'],
        practice: [
          nat('With forwarding, how many stall cycles between lw $2, 20($1) and the immediately following and $4, $2, $5?', 1, 0, 'Data ready after MEM; needed at EX.'),
          nat('Same pair WITHOUT forwarding (register file write/read halves): stalls?', 2, 0, 'Wait for WB.'),
          nat('With forwarding: lw $t0, 0($t1) then add $t2, $t0, $t3. Total cycles?', 7, 0, '6 ideal + 1 stall.'),
          mcq('The load-use hazard detection unit checks:', ['EX/MEM.RegWrite', 'ID/EX.MemRead and whether ID/EX.Rt equals IF/ID.Rs or IF/ID.Rt', 'the branch outcome', 'MEM/WB.MemtoReg only'], 1, 'P&H condition.', ['That is forwarding.', 'Correct.', 'Control hazard.', 'No.'])
        ],
        subjective: [sub('Why can\'t forwarding alone resolve a load-use hazard? Show the stall and forwarding on a pipeline diagram and state the detection condition. (5 marks)', '<p>D15.5a; data ready at end of MEM; 1 bubble; condition above.</p>', 5, ['1.5 — reason', '2 — diagram', '1.5 — condition'], ['D15.5a'])]
      },
      {
        id: '15.6', title: 'Compiler Scheduling', badge: 'researched', sources: 'no slides (link: [CR] p34 — compilers sequence simple RISC instructions)', sourceLine: SRC,
        keywords: 'compiler scheduling reorder instructions load delay avoid stalls',
        explain: '<p>The compiler can <b>reorder independent instructions</b> to fill the slot after a load, removing load-use stalls without changing the result.</p>' +
          '<p><b>P&amp;H example</b> (C: a = b + e; c = b + f; b, e, f at 0, 4, 8 off $t0):</p>' +
          '<div class="grid2"><div><b>Original — 13 cycles (2 stalls)</b><pre>lw  $t1, 0($t0)\nlw  $t2, 4($t0)\nadd $t3, $t1, $t2   # stall (needs $t2)\nsw  $t3, 12($t0)\nlw  $t4, 8($t0)\nadd $t5, $t1, $t4   # stall (needs $t4)\nsw  $t5, 16($t0)</pre></div>' +
          '<div><b>Scheduled — 11 cycles (0 stalls)</b><pre>lw  $t1, 0($t0)\nlw  $t2, 4($t0)\nlw  $t4, 8($t0)     # moved up\nadd $t3, $t1, $t2\nsw  $t3, 12($t0)\nadd $t5, $t1, $t4\nsw  $t5, 16($t0)</pre></div></div>' +
          '<p>Moving <code>lw $t4</code> up gives both adds an independent instruction between them and their load. Rules: never move an instruction across one it depends on (RAW, WAR, WAW on registers or memory); this needs more registers — another reason RISC has 32. (Both versions are pre-set in the pipeline tool as “Load-use hazard” vs “Reordered”.)</p>',
        keypoints: ['Fill the slot after each lw with an independent instruction.', 'P&H: 13 → 11 cycles.', 'Must preserve all dependences.', 'Needs spare registers.'],
        mistakes: ['Moving a load above the store it depends on.', 'Reordering instructions that write the same register.'],
        practice: [
          nat('With forwarding, how many cycles does the original 7-instruction P&H sequence take?', 13, 0, '5 + 6 + 2 stalls.'),
          nat('After scheduling (lw $t4 moved up), how many cycles?', 11, 0, '5 + 6, no stalls.'),
          mcq('Which reordering is ILLEGAL for: lw $t1, 0($t0) ; add $t2, $t1, $t3 ; sub $t4, $t5, $t6?', ['move sub between lw and add', 'move sub before lw', 'move add before lw', 'leave as is'], 2, 'add depends on $t1 from lw (RAW).', ['Legal and removes the stall.', 'Legal.', 'Correct — breaks the dependence.', 'Legal.']),
          mcq('Compiler scheduling mainly attacks which hazard?', ['structural', 'load-use data hazards', 'cache misses', 'power'], 1, 'Fills load delay slots.', ['No.', 'Correct.', 'Not directly.', 'No.'])
        ],
        subjective: [sub('Show how compiler scheduling removes load-use stalls for a = b + e; c = b + f. Give cycle counts before and after. (5 marks)', '<p>Code above; 13 → 11 cycles; dependence rules.</p>', 5, ['2 — original + stalls', '2 — scheduled code', '1 — counts'])]
      }
    ]
  });
})();
