/* extras.js — home page, 7-day study plan, last-night revision, bonus Units 14–15. */
(function () {
  const { mcq, nat } = window.QH;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const home = '<div class="card"><p>Everything from the course folder (27 lecture/lab PDFs, the Study Pack and the MIPS guide) turned into 15 units. Each subtopic has: a plain explanation, a ⚡ key-points box, drawable diagrams with “how to draw” tips, worked examples, the lab programs, common mistakes, practice questions (attempt first, then Check) and university-style subjective answers with marking schemes.</p>' +
    '<p><b>Badges:</b> <span class="badge class">From class slides</span> taught in class · <span class="badge extra">Extra (beyond slides)</span> on the slides but beyond the syllabus line · <span class="badge researched">⚠ Not covered in class – researched</span> filled in from standard textbooks (Harris &amp; Harris, Patterson &amp; Hennessy).</p>' +
    '<p><b>How to use it:</b></p><ol><li>Follow the <a href="#/plan">7-Day Study Plan</a>.</li><li>In each unit, read the concept, then do the practice questions <i>before</i> revealing answers; tick “Mark as done”.</li><li>Drill the <a href="#/diagrams">Diagram Questions</a> — all four class samples are “trace an instruction on the datapath and fill the control signals”.</li><li>Sit <a href="#/mock/1">Mock Paper 1</a> and <a href="#/mock/2">Mock Paper 2</a> under the timer.</li><li>The night before: <a href="#/revision">Last-Night Revision</a>.</li></ol>' +
    '<p class="hint">Works offline; progress is stored only in this browser. Use the ◐ button for dark mode and Print for paper copies.</p></div>';

  const days = [
    ['Day 1', 'Units 1–2: Boolean algebra, gates, canonical forms, K-maps, universal gates', [['H', '4-variable K-maps with corners and don\'t-cares'], ['H', 'NAND/NOR-only circuits, De Morgan'], ['M', 'SOP/POS from truth tables']], 'Unit 1 + 2 practice; Top diagram #3, #19'],
    ['Day 2', 'Units 3–4: MUX/DEMUX/decoders, adders, number systems, two\'s complement, overflow', [['H', 'Full adder and 4-bit ripple adder; function with a 4:1 MUX'], ['H', 'Two\'s complement range, negation, overflow V = C3 ⊕ C4'], ['M', 'Decoder + OR implementations; sign extension']], 'Unit 3 + 4 practice; Top diagram #7, #12, #22'],
    ['Day 3', 'Units 5–6: latches, flip-flops, timing, registers, counters, shift registers', [['H', 'SR latch, D latch vs D flip-flop waveforms, master–slave'], ['H', 'Synchronous counter design (T0 = 1, T1 = Q0, T2 = Q0Q1)'], ['M', 'Setup/hold f_max, ripple counter delay, SISO/SIPO/PISO/PIPO']], 'Unit 5 + 6 practice; Top diagram #5, #6, #8'],
    ['Day 4', 'Units 7–8: register files, FSMs, sequence detectors, SRAM/DRAM, hierarchy', [['H', 'Register file write port (decoder + WE) and read ports (MUXes)'], ['H', '1011 detector: Mealy (4 states) and Moore (5 states), overlap edges'], ['M', '6T vs 1T1C, refresh arithmetic, memory hierarchy']], 'Unit 7 + 8 practice; Top diagram #2, #4, #14'],
    ['Day 5', 'Units 9–11: Von Neumann vs Harvard, CISC vs RISC, MIPS registers and formats', [['H', 'Encode/decode R, I, J by hand (use the encoder tool)'], ['M', 'Bottleneck + bandwidth numericals; modified Harvard'], ['M', 'CISC vs RISC table; micro-ops']], 'Unit 9–11 practice; Top diagram #15, #16'],
    ['Day 6', 'Units 12–13: C to MIPS, calling convention, stack frames, single-cycle datapath', [['H', 'Trace R-type, lw, sw, beq, addi, j and fill ALL control signals incl. ALUOp'], ['H', 'if/else and loops with reversed branches; recursive factorial frames'], ['M', 'Critical path and clock period']], 'Diagram Questions page (4 samples + 5 predicted); Unit 12–13 practice'],
    ['Day 7', 'Mocks and revision', [['H', 'Mock Paper 1 under the timer, then self-mark E and F'], ['H', 'Mock Paper 2 the same way'], ['L', 'Bonus Units 14–15 if time allows']], 'Last-Night Revision page; redo every question marked “last try: wrong”']
  ];
  const plan = '<h1>7-Day Study Plan</h1><p class="hint">About 4–5 hours a day. <span class="prio-H">H</span> = must master, <span class="prio-M">M</span> = should know, <span class="prio-L">L</span> = if time allows.</p>' +
    days.map((d) => '<div class="card plan-day"><h3>' + d[0] + ' — ' + esc(d[1]) + '</h3><ul>' + d[2].map((t) => '<li><span class="prio-' + t[0] + '">' + t[0] + '</span> ' + esc(t[1]) + '</li>').join('') + '</ul><div class="hint"><b>Practice:</b> ' + esc(d[3]) + '</div></div>').join('');

  /* Last-night revision is built from the unit data at render time, so it always matches the units. */
  const KEY_DIAGRAMS = ['D2.3d', 'D2.5a', 'D3.2c', 'D3.5b', 'D4.5a', 'D5.2a', 'D5.4c', 'D5.5a', 'D6.4a', 'D6.5c', 'D7.2b', 'D7.5a', 'D7.5c', 'D8.2a', 'D8.3a', 'D9.4a', 'D11.3a', 'D12.5b', 'D13.4b', 'D13.4d'];
  function revision() {
    const U = (window.UNITS || []).slice().sort((a, b) => a.id - b.id);
    const D = window.DIAG || {};
    let h = '<h1>Last-Night Revision</h1><p class="hint">Every ⚡ key point from Units 1–13 on one page, then the 20 diagrams most worth drawing once more. Units 14–15 are on the <a href="#/bonus">bonus page</a>.</p>';
    h += '<div class="card"><b>Datapath control table (memorise):</b><div class="table-wrap"><table class="tt"><tr><th>Instr</th><th>RegDst</th><th>ALUSrc</th><th>MemtoReg</th><th>RegWrite</th><th>MemRead</th><th>MemWrite</th><th>Branch</th><th>ALUOp</th></tr>' +
      [['R-type', 'R'], ['lw', 'lw'], ['sw', 'sw'], ['beq', 'beq'], ['addi', 'addi']].map((r) => '<tr><td>' + r[0] + '</td>' + ['RegDst', 'ALUSrc', 'MemtoReg', 'RegWrite', 'MemRead', 'MemWrite', 'Branch', 'ALUOp'].map((k) => '<td>' + S.CONTROL[r[1]][k] + '</td>').join('') + '</tr>').join('') + '</table></div></div>';
    U.filter((u) => u.id <= 13).forEach((u) => {
      h += '<div class="card"><h3><a href="#/unit/' + u.id + '">Unit ' + u.id + ' — ' + esc(u.title) + '</a></h3><ul>';
      u.subtopics.forEach((st) => (st.keypoints || []).forEach((k) => { h += '<li><span class="pill">' + st.id + '</span> ' + k + '</li>'; }));
      h += '</ul></div>';
    });
    h += '<h2>Draw these once more</h2><div class="grid2">' + KEY_DIAGRAMS.filter((k) => D[k]).map((k) => '<div class="thumb">' + D[k].svg + '<div class="cap"><a href="#/unit/' + D[k].unit + '/' + D[k].sub + '">' + k + '</a> · ' + esc(D[k].title) + '</div></div>').join('') + '</div>';
    return h;
  }

  const bonusQ = [
    nat('A 5-stage pipeline runs 50 independent instructions. How many clock cycles?', 54, 0, '5 + 49.', 'Bonus'),
    mcq('With forwarding, how many stalls does a load followed immediately by an instruction that uses the loaded register need?', ['0', '1', '2', '3'], 1, 'Data is ready only after MEM.', ['Only for ALU → ALU.', 'Correct.', 'Without forwarding.', 'No.'], 'Bonus'),
    nat('Stage delays 200, 100, 200, 200, 100 ps. Speedup of the pipeline over the 800 ps single-cycle design for a long program?', 4, 0, '800 / 200.', 'Bonus'),
    mcq('In the classic in-order 5-stage MIPS pipeline, which data hazard type can occur?', ['RAW only', 'WAR only', 'WAW only', 'all three'], 0, 'Reads in ID, writes in WB, in program order.', ['Correct.', 'No.', 'No.', 'Only out-of-order pipelines.'], 'Bonus'),
    mcq('Forwarding from EX/MEM to EX is used when the producing instruction is:', ['one instruction ahead', 'two instructions ahead', 'three instructions ahead', 'a load one ahead'], 0, 'Distance 1; distance 2 uses MEM/WB.', ['Correct.', 'MEM/WB.', 'Register file.', 'Needs a stall first.'], 'Bonus')
  ].map((q, i) => Object.assign(q, { id: 'bonus.' + (i + 1) }));
  const bonus = {
    html: '<h1>Bonus: Units 14–15 (Pipelining and Hazards)</h1><div class="card"><p><span class="badge researched">⚠ Not covered in class – researched</span> These units had no slides in the folder; they follow Patterson &amp; Hennessy ch. 4. The diagram questions in the exam come from Units 1–13, but pipelining explains why the datapath is built as it is and often appears as a short question.</p>' +
      '<ul><li><a href="#/unit/14">Unit 14 — Pipelining</a>: laundry analogy, IF/ID/EX/MEM/WB, pipeline registers, k + n − 1 cycles, speedup → number of stages (4 with unbalanced P&amp;H stages).</li>' +
      '<li><a href="#/unit/15">Unit 15 — Hazards</a>: structural / data / control; only RAW in-order; 2 stalls without forwarding; EX/MEM → EX and MEM/WB → EX forwarding; load-use = 1 stall; compiler scheduling 13 → 11 cycles.</li></ul>' +
      '<p>Try the <a href="#/tools">pipeline stepper</a> with and without forwarding.</p></div><h2>Quick check</h2>',
    questions: bonusQ
  };
  const bonusPage = function () { return bonus.html + bonusQ.map((q, i) => window.COA.renderQ(q, i + 1, 'practice')).join(''); };
  bonusPage.questions = bonusQ;
  const revisionPage = function () { return revision(); };

  window.EXTRAS = { home: home, plan: { html: plan }, revision: revisionPage, bonus: bonusPage };
})();
