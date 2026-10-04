/* Unit 2 – Logic Minimisation & Universal Gates */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;

  const ttMM = S.grid([['m', 'A', 'B', 'C', 'F', 'minterm (if F=1)', 'maxterm (if F=0)'],
    ['0', '0', '0', '0', '0', '', 'M0 = A+B+C'], ['1', '0', '0', '1', '1', 'm1 = A\'B\'C', ''], ['2', '0', '1', '0', '0', '', 'M2 = A+B\'+C'], ['3', '0', '1', '1', '1', 'm3 = A\'BC', ''],
    ['4', '1', '0', '0', '0', '', 'M4 = A\'+B+C'], ['5', '1', '0', '1', '1', 'm5 = AB\'C', ''], ['6', '1', '1', '0', '0', '', 'M6 = A\'+B\'+C'], ['7', '1', '1', '1', '1', 'm7 = ABC', '']],
    { cw: [34, 34, 34, 34, 34, 150, 150], title: 'F = Σm(1,3,5,7) = ΠM(0,2,4,6)', hl: [[2, 5], [4, 5], [6, 5], [8, 5]] });

  /* bubble-pushing pictures */
  function bubbleIn(g, s) { g.in.forEach((p) => { s.push('<circle class="g" cx="' + (p[0] + 8) + '" cy="' + p[1] + '" r="4"/>'); }); }
  const nandEq = (function () {
    const a = S.gate('NAND', 60, 50), b = S.gate('OR', 260, 50, { stub: 16 });
    const parts = [a.svg, b.svg];
    bubbleIn(b, parts);
    let s = parts.join('');
    s += S.t(40, 44, 'A', 'xs b', 'end') + S.t(40, 64, 'B', 'xs b', 'end') + S.t(240, 44, 'A', 'xs b', 'end') + S.t(240, 64, 'B', 'xs b', 'end');
    s += S.tc(90, 100, 'NAND: (A·B)\'', 'sm b') + S.tc(300, 100, 'OR of inverted inputs: A\' + B\'', 'sm b') + S.tc(185, 54, '≡', 'lg');
    return S.svg(420, 115, s, 'NAND equals OR with bubbled inputs');
  })();
  const norEq = (function () {
    const a = S.gate('NOR', 60, 50), b = S.gate('AND', 260, 50, { stub: 16 });
    const parts = [a.svg, b.svg];
    bubbleIn(b, parts);
    let s = parts.join('');
    s += S.t(40, 44, 'A', 'xs b', 'end') + S.t(40, 64, 'B', 'xs b', 'end') + S.t(240, 44, 'A', 'xs b', 'end') + S.t(240, 64, 'B', 'xs b', 'end');
    s += S.tc(90, 100, 'NOR: (A + B)\'', 'sm b') + S.tc(300, 100, 'AND of inverted inputs: A\'·B\'', 'sm b') + S.tc(185, 54, '≡', 'lg');
    return S.svg(420, 115, s, 'NOR equals AND with bubbled inputs');
  })();

  function universal(type) {
    const T = type;
    let s = '';
    // NOT
    let g = S.gate(T, 60, 50);
    s += g.svg + S.p([[30, 50], [36, 50], [36, 42], [g.in[0][0], g.in[0][1]]]) + S.p([[36, 50], [36, 58], [g.in[1][0], g.in[1][1]]]) + S.dot(36, 50) + S.t(26, 54, 'A', 'xs b', 'end') + S.t(g.out[0] + 4, 54, 'A\'', 'xs b') + S.tc(80, 95, 'NOT: ' + T + '(A,A)', 'xs b');
    // AND (NAND) or OR (NOR): gate then inverter-gate
    const g1 = S.gate(T, 200, 50), g2 = S.gate(T, 300, 50);
    s += g1.svg + g2.svg + S.t(g1.in[0][0] - 4, g1.in[0][1] + 4, 'A', 'xs b', 'end') + S.t(g1.in[1][0] - 4, g1.in[1][1] + 4, 'B', 'xs b', 'end');
    s += S.p([g1.out, [g1.out[0] + 10, 50], [g1.out[0] + 10, g2.in[0][1]], g2.in[0]]) + S.p([[g1.out[0] + 10, 50], [g1.out[0] + 10, g2.in[1][1]], g2.in[1]]) + S.dot(g1.out[0] + 10, 50);
    s += S.t(g2.out[0] + 4, 54, T === 'NAND' ? 'A·B' : 'A+B', 'xs b') + S.tc(290, 95, (T === 'NAND' ? 'AND' : 'OR') + ': 2 gates', 'xs b');
    // OR (NAND) / AND (NOR): invert both inputs then gate
    const i1 = S.gate(T, 470, 30, { h: 30 }), i2 = S.gate(T, 470, 90, { h: 30 }), g3 = S.gate(T, 590, 60);
    [i1, i2].forEach((ig, k) => {
      s += ig.svg + S.p([[ig.in[0][0] - 10, ig.y], [ig.in[0][0] - 4, ig.y], [ig.in[0][0] - 4, ig.in[0][1]], ig.in[0]]) + S.p([[ig.in[0][0] - 4, ig.y], [ig.in[0][0] - 4, ig.in[1][1]], ig.in[1]]) + S.dot(ig.in[0][0] - 4, ig.y);
      s += S.t(ig.in[0][0] - 12, ig.y + 4, k ? 'B' : 'A', 'xs b', 'end');
    });
    s += g3.svg + S.wire(i1.out, g3.in[0]) + S.wire(i2.out, g3.in[1]) + S.t(g3.out[0] + 4, 64, T === 'NAND' ? 'A+B' : 'A·B', 'xs b');
    s += S.tc(560, 135, (T === 'NAND' ? 'OR' : 'AND') + ': 3 gates', 'xs b');
    return S.svg(700, 145, s, 'NOT AND OR from ' + T);
  }

  const xor4 = (function () {
    const g4 = S.gate('NAND', 110, 90), g5 = S.gate('NAND', 230, 45), g6 = S.gate('NAND', 230, 135), g7 = S.gate('NAND', 360, 90);
    let s = g4.svg + g5.svg + g6.svg + g7.svg;
    s += S.p([[20, 37], [g5.in[0][0], 37]]) + S.p([[60, 37], [60, g4.in[0][1]], g4.in[0]]) + S.dot(60, 37) + S.t(14, 41, 'A', 'b', 'end');
    s += S.p([[20, 143], [g6.in[1][0], 143]]) + S.p([[75, 143], [75, g4.in[1][1]], g4.in[1]]) + S.dot(75, 143) + S.t(14, 147, 'B', 'b', 'end');
    s += S.p([g4.out, [180, 90], [180, g5.in[1][1]], g5.in[1]]) + S.p([[180, 90], [180, g6.in[0][1]], g6.in[0]]) + S.dot(180, 90);
    s += S.wire(g5.out, g7.in[0]) + S.wire(g6.out, g7.in[1]) + S.t(g7.out[0] + 6, 94, 'A ⊕ B', 'b');
    s += S.tc(135, 125, '(AB)\'', 'xs muted') + S.tc(255, 18, '(A·(AB)\')\'', 'xs muted') + S.tc(255, 175, '(B·(AB)\')\'', 'xs muted');
    return S.svg(480, 185, s, 'XOR from four NAND gates');
  })();

  const abcd6 = (function () {
    const na = S.gate('NAND', 60, 30, { h: 30 }), nb = S.gate('NAND', 60, 90, { h: 30 }), x = S.gate('NAND', 170, 60), y1 = S.gate('NAND', 300, 40), y2 = S.gate('NAND', 300, 130), f = S.gate('NAND', 420, 85);
    let s = [na, nb, x, y1, y2, f].map((g) => g.svg).join('');
    [[na, 'A'], [nb, 'B']].forEach((q) => { const g = q[0]; s += S.p([[g.in[0][0] - 10, g.y], [g.in[0][0] - 4, g.y], [g.in[0][0] - 4, g.in[0][1]], g.in[0]]) + S.p([[g.in[0][0] - 4, g.y], [g.in[0][0] - 4, g.in[1][1]], g.in[1]]) + S.dot(g.in[0][0] - 4, g.y) + S.t(g.in[0][0] - 12, g.y + 4, q[1], 'xs b', 'end'); });
    s += S.wire(na.out, x.in[0]) + S.wire(nb.out, x.in[1]);
    s += S.p([x.out, [250, 60], [250, y1.in[1][1]], y1.in[1]]) + S.p([[250, 60], [250, y2.in[0][1]], y2.in[0]]) + S.dot(250, 60) + S.tc(225, 52, 'A+B', 'xs b');
    s += S.p([[200, 26], [y1.in[0][0], y1.in[0][1]]]) + S.t(196, 30, 'C', 'xs b', 'end') + S.p([[200, 144], [y2.in[1][0], y2.in[1][1]]]) + S.t(196, 148, 'D', 'xs b', 'end');
    s += S.wire(y1.out, f.in[0]) + S.wire(y2.out, f.in[1]) + S.t(f.out[0] + 6, 89, 'F = (A+B)(C+D)', 'b');
    s += S.tc(250, 178, '6 two-input NANDs — minimum (exhaustive search, docs/nand_search.c)', 'xs muted');
    return S.svg(600, 188, s, '(A+B)(C+D) with six NAND gates');
  })();

  const KM = (o) => S.kmap(o);

  UNITS.push({
    id: 2, title: 'Logic Minimisation & Universal Gates', short: 'K-maps & Universal Gates',
    intro: 'Turning truth tables into the smallest circuits: canonical SOP/POS, Karnaugh maps (2–4 variables, don\'t-cares), De Morgan and NAND/NOR-only design. Lecture L02 and Lab 2 (35 worked questions).',
    subtopics: [
      {
        id: '2.1', title: 'Motivation for Minimisation (Cost/Power)', badge: 'class', sources: '[L02] p4-5',
        keywords: 'why minimise area power speed cost synthesis',
        explain: '<p><b>Analogy:</b> two recipes for the same cake — one needs 16 steps, the other 2. Same cake, far less work.</p>' +
          '<p>Every extra gate costs: <b>area</b> (smaller die → more chips per wafer → cheaper), <b>power</b> (less switching → lower dynamic power), <b>speed</b> (shorter gate chains → less propagation delay → higher clock) and <b>cost</b> (less silicon, higher yield). A typical 4-variable function can shrink from about 16 gates to as few as 2 with the same truth table. At billions of gates (Apple M3: 98 billion transistors on TSMC N3E) even a 1% saving is real money — which is why logic-synthesis tools (Synopsys Design Compiler, Cadence Genus) minimise automatically before fabrication.</p>' +
          '<p>Cost measures used in exams: number of gates, number of gate inputs, number of <b>literals</b> (variable appearances), and number of logic levels (delay).</p>',
        keypoints: ['Minimise for area, power, speed, cost.', 'Literal count and gate-input count are the usual cost measures.', 'Two-level SOP = AND-OR = NAND-NAND; POS = OR-AND = NOR-NOR.', 'CMOS NAND = 4 transistors; AND = NAND + inverter = 6.'],
        mistakes: ['Assuming fewer terms always means fewer literals — compare literal counts too.', 'Forgetting that minimising for delay (levels) can need more gates.'],
        practice: [
          mcq('Which is NOT a direct benefit of reducing the gate count of a circuit?', ['Smaller die area', 'Lower dynamic power', 'Shorter propagation delay (usually)', 'More addressable memory'], 3, 'Gate minimisation affects area, power and delay — not the memory address space.', ['Benefit.', 'Benefit.', 'Benefit.', 'Correct — unrelated.']),
          nat('How many transistors does a 2-input CMOS NAND gate need?', 4, 0, '2 PMOS in parallel + 2 NMOS in series = 4. A CMOS AND needs NAND + inverter = 6.', 'From class slides'),
          mcq('F = AB + AB\' + A\'B has how many literals before and after simplification to A + B?', ['6 and 2', '6 and 1', '4 and 2', '5 and 2'], 0, 'AB, AB\', A\'B = 6 literals; A + B = 2 literals.', ['Correct.', 'A + B has 2 literals.', 'There are 6 literals originally.', 'Count again: 2+2+2.']),
          mcq('Logic synthesis tools such as Synopsys Design Compiler mainly:', ['simulate waveforms', 'convert RTL into an optimised gate-level netlist', 'fabricate wafers', 'route PCB traces'], 1, 'Synthesis maps and minimises RTL into standard cells.', ['That is a simulator.', 'Correct.', 'Fabs do that.', 'PCB tools do that.'], 'From class slides')
        ],
        subjective: [sub('Why is logic minimisation important in VLSI design? Discuss with respect to area, power, delay and cost. (5 marks)', '<p>Area: each gate occupies silicon; fewer gates → smaller die → more dies per wafer and higher yield. Power: dynamic power ∝ switched capacitance × V² × f — fewer gates, less capacitance. Delay: fewer levels/shorter paths reduce the critical path, allowing a higher clock. Cost: silicon and yield dominate chip cost; at billions of gates even 1% matters. Example: F = AB + AB\' = A eliminates four gates.</p>', 5, ['1 each for area, power, delay, cost', '1 — example'])]
      },
      {
        id: '2.2', title: 'Canonical Forms: SOP and POS', badge: 'class', sources: '[L02] p6-9; [LB2] Q1-Q7; [SP4] quiz 2',
        keywords: 'sop pos minterm maxterm sigma pi canonical',
        explain: '<p><b>Analogy:</b> SOP lists the situations when the alarm <i>should</i> ring; POS lists the situations when it <i>must stay silent</i>. Both describe the same alarm.</p>' +
          '<ul><li><b>Minterm</b> m<sub>k</sub>: an AND term containing every variable once, true for exactly one row k. Rule: <b>1 → X, 0 → X\'</b>. Row A=1,B=0,C=1 → m5 = AB\'C.</li>' +
          '<li><b>Canonical SOP</b> (sum of minterms): OR the minterms of the rows where F = 1. Notation F = Σm(list of 1-rows).</li>' +
          '<li><b>Maxterm</b> M<sub>k</sub>: an OR term with every variable, false for exactly row k. Rule is inverted: <b>0 → X, 1 → X\'</b>. Row 010 → M2 = (A + B\' + C). <i>This is THE trap.</i></li>' +
          '<li><b>Canonical POS</b>: AND the maxterms of the rows where F = 0. F = ΠM(list of 0-rows).</li>' +
          '<li>Σ and Π lists of the same function are complementary: every index appears in exactly one. Also F\' = Σm(indices of the Π list).</li></ul>',
        keypoints: ['Minterm: 1→X, 0→X\'. Maxterm: 0→X, 1→X\'.', 'SOP from 1-rows, POS from 0-rows.', 'Σm and ΠM index sets are complements of each other.', 'Minterm index = binary value of inputs, MSB = first variable.', 'm_k\' = M_k (De Morgan).'],
        diagrams: [{ id: 'D2.2a', title: 'Truth table with minterms and maxterms', svg: ttMM, how: 'Add two columns to the truth table: write the minterm on 1-rows and the maxterm on 0-rows.' }],
        examples: [{ title: 'Lab 2 Q2/Q3/Q7: F = Σm(1,2,4,7)', html: '<p>SOP: F = A\'B\'C + A\'BC\' + AB\'C\' + ABC. Missing indices 0,3,5,6 → POS: F = (A+B+C)(A+B\'+C\')(A\'+B+C\')(A\'+B\'+C) = ΠM(0,3,5,6). (This F is the 3-input XOR / odd-parity function.)</p>' },
          { title: 'Lab 2 Q5/Q6: identify terms', html: '<p>A=1,B=0,C=1,D=0 → 1010₂ = 10 → m10 = AB\'CD\'. A=0,B=1,C=1 → 011₂ = 3 → M3 = (A + B\' + C\').</p>' }],
        mistakes: ['Applying the SOP rule to maxterms (writing M2 = A\'BC\').', 'Mixing up minterm numbering when the variable order changes — state the order (A is MSB).'],
        practice: [
          mcq('The minterm for the row A = 1, B = 0, C = 1 is:', ['A\'BC', 'AB\'C', 'ABC', 'A\'B\'C'], 1, '1 → uncomplemented, 0 → complemented: A B\' C = m5.', ['Signs inverted.', 'Correct.', 'B should be complemented.', 'A should be true.'], 'Class quiz (L02 Q1)'),
          mcq('In SOP form you write a product term for every row where F equals:', ['0', '1', 'a don\'t-care', 'both 0 and 1'], 1, 'SOP ORs the minterms of the 1-rows; POS uses the 0-rows.', ['That is POS.', 'Correct.', 'Don\'t-cares are optional.', 'No.'], 'Class quiz (L02 Q2)'),
          txt('Convert F(A,B,C) = Σm(0,3,5,6) to ΠM notation (write like ΠM(1,2,4,7)).', ['ΠM(1,2,4,7)', 'PM(1,2,4,7)', 'πM(1,2,4,7)', 'M(1,2,4,7)', 'ΠM(1, 2, 4, 7)'], 'Missing minterms 1, 2, 4, 7 become the maxterms.', 'Lab 2 Q4'),
          mcq('The maxterm for A = 0, B = 1, C = 1 is:', ['A\'BC', 'A + B\' + C\'', 'A\' + B + C', 'A + B + C'], 1, 'Maxterm rule 0 → X, 1 → X\'. Index 3: M3 = A + B\' + C\'.', ['That is a minterm (m3).', 'Correct.', 'Rule inverted.', 'That is M0.'], 'Lab 2 Q6'),
          nat('For a 4-variable function given as Σm(1,4,6,9,11,14), how many terms are in its canonical POS?', 10, 0, '16 − 6 = 10 maxterms.')
        ],
        subjective: [sub('Given F(A,B,C) is 1 for rows 1, 2, 4, 7: write the canonical SOP and POS expressions, and show that F\' in SOP equals the complement of the POS. (5 marks)', '<p>SOP: F = A\'B\'C + A\'BC\' + AB\'C\' + ABC = Σm(1,2,4,7). POS: F = (A+B+C)(A+B\'+C\')(A\'+B+C\')(A\'+B\'+C) = ΠM(0,3,5,6). F\' = Σm(0,3,5,6) = A\'B\'C\' + A\'BC + AB\'C + ABC\'; applying De Morgan to F\' gives (A+B+C)(A+B\'+C\')(A\'+B+C\')(A\'+B\'+C) = POS of F. ✓</p>', 5, ['2 — SOP', '2 — POS', '1 — De Morgan check'])]
      },
      {
        id: '2.3', title: 'Karnaugh Maps: 2, 3, and 4 Variables', badge: 'class', sources: '[L02] p11-17; [LB2] Q14-Q22; [SP4] quiz 2 Q3',
        keywords: 'kmap karnaugh gray code group wrap corners quad octet',
        explain: '<p><b>Analogy:</b> a K-map is the truth table rearranged on a <i>donut</i> so that neighbours differ in exactly one variable; circling neighbours lets that variable cancel (X·Y + X·Y\' = X). Minimisation becomes pattern recognition.</p>' +
          '<ul><li><b>Gray-code order</b> on both axes: 00, 01, 11, 10 — not binary 00, 01, 10, 11 (10 next to 01 differs in two bits).</li>' +
          '<li><b>Group rules:</b> rectangles only; sizes 1, 2, 4, 8, 16 (powers of 2); groups may overlap; wrap around edges; the four corners of a 4-variable map are adjacent; no diagonals.</li>' +
          '<li><b>Reading a group:</b> keep variables that stay constant; drop those that change. Pair cancels 1 variable, quad 2, octet 3; all 8 cells of a 3-var map → F = 1.</li>' +
          '<li><b>Procedure:</b> fill the map → circle the largest groups first (start with 1s that have only one way to be grouped) → cover every 1 with as few, as large groups as possible → write one product per group.</li>' +
          '<li><b>POS from a K-map:</b> group the <b>0s</b> to get F\' in SOP, then apply De Morgan.</li></ul>',
        keypoints: ['Gray order 00 01 11 10 on both axes.', 'Group sizes 2ⁿ; bigger groups → fewer literals.', 'Corners and opposite edges are adjacent.', 'Group of 2^k cells in an n-variable map → term with n − k literals.', 'Group 0s for POS.'],
        diagrams: [
          { id: 'D2.3a', title: '2-variable map: F = B', svg: KM({ vars: ['A', 'B'], ones: [1, 3], groups: [{ cells: [1, 3], label: 'F = B (A cancels)' }] }), how: '2 × 2 grid, A on rows, B on columns; circle the B = 1 column.' },
          { id: 'D2.3b', title: '3-variable map: F = Σm(1,3,5,7) = C', svg: KM({ vars: ['A', 'B', 'C'], ones: [1, 3, 5, 7], groups: [{ cells: [1, 3, 5, 7], label: 'F = C (quad)' }] }), how: 'A on rows (0,1), BC on columns in Gray order; the two middle columns form a quad.' },
          { id: 'D2.3c', title: '4-variable map: F = A\'B + BD + A\'D\' (class example)', svg: KM({ vars: ['A', 'B', 'C', 'D'], ones: [0, 2, 4, 5, 6, 7, 13, 15], groups: [{ cells: [4, 5, 6, 7], label: 'A\'B' }, { cells: [5, 7, 13, 15], label: 'BD' }, { cells: [0, 2, 4, 6], label: 'A\'D\' (wraps)' }] }), how: 'AB rows, CD columns, both Gray-coded; draw the row quad, the centre quad, then the edge-wrapping quad.' },
          { id: 'D2.3d', title: 'Wrap-around: Σm(0,2,5,7,8,10,13,15) = B\'D\' + BD', svg: KM({ vars: ['A', 'B', 'C', 'D'], ones: [0, 2, 5, 7, 8, 10, 13, 15], groups: [{ cells: [0, 2, 8, 10], label: 'B\'D\' (four corners)' }, { cells: [5, 7, 13, 15], label: 'BD' }] }), how: 'Draw four quarter-loops at the corners and label them as one group.' },
          { id: 'D2.3e', title: 'Worked example (L02 p17): octet gives F = C\'', svg: KM({ vars: ['A', 'B', 'C', 'D'], ones: [0, 1, 4, 5, 12, 13, 8, 9], groups: [{ cells: [0, 1, 4, 5, 12, 13, 8, 9], label: 'F = C\' (A, B, D cancel)' }] }), how: 'Fill columns CD = 00 and 01 with 1s; one 8-cell group. (The slide text says B\'; the map gives C\'.)' }],
        tool: 'kmap',
        examples: [
          { title: 'Lab 2 Q16: F(A,B,C) = Σm(0,2,3,5)', html: '<p>Map: m0 and m2 are adjacent by wrap-around → A\'C\'. m2, m3 → A\'B. m5 is isolated (m1, m4, m7 are 0) → AB\'C. <b>F = A\'C\' + A\'B + AB\'C</b>.</p>' },
          { title: 'POS by grouping zeros: F = Σm(1,3,5,7) → zeros 0,2,4,6', html: '<p>Zeros form the quad C = 0 → F\' = C\' → F = C (POS = single literal C).</p>' }],
        mistakes: ['Labelling columns 00, 01, 10, 11 (binary).', 'Grouping three cells or diagonals.', 'Missing corner/edge groups.', 'Circling a group that is already fully covered by others (redundant term).'],
        practice: [
          mcq('F(A,B,C) = Σm(1,3,5,7). After K-map minimisation F =', ['A', 'B', 'C', 'A + C'], 2, 'All four minterms have C = 1 → one quad → C.', ['A changes inside the group.', 'B changes.', 'Correct.', 'A is not needed.'], 'Class quiz (L02 Q3)'),
          mcq('Minimal SOP of F(A,B,C,D) = Σm(0,2,5,7,8,10,13,15):', ['B\'D\' + BD', 'A\'B\' + BD', 'B ⊕ D', 'B\'D + BD\''], 0, 'Corners → B\'D\'; centre quad → BD. (Equivalently B XNOR D.)', ['Correct.', 'A\'B\' misses m8, m10.', 'That is the complement.', 'That is XOR.'], 'Lab 2 Q21 / L02 exit ticket'),
          mcq('On a 3-variable map, a quad covers m0, m2, m4, m6. The term is:', ['A\'', 'B\'', 'C\'', 'A\'C\''], 2, 'Cells 000, 010, 100, 110: C is always 0 → C\'.', ['A changes.', 'B changes.', 'Correct.', 'A changes.'], 'Lab 2 Q18'),
          msq('Which groupings are legal on a 3-variable K-map? (select all)', ['Four corners', 'A 2 × 2 block', 'Three adjacent 1s', 'Two cells differing in two variables'], [0, 1], 'Corners wrap into a valid quad; 2×2 blocks are legal. Groups must be powers of two and adjacent.', ['Legal (wrap).', 'Legal.', 'Size 3 is illegal.', 'Not adjacent.'], 'Lab 2 Q17'),
          mcq('Why must K-map rows/columns follow 00-01-11-10?', ['It is the binary count', 'Adjacent cells must differ in exactly one bit', 'It minimises the number of cells', 'It is required for POS only'], 1, 'Gray code gives single-bit adjacency (including wrap-around), so combining X·Y + X·Y\' = X works visually.', ['Binary order puts 01 next to 10.', 'Correct.', 'Cell count is fixed 2ⁿ.', 'Needed for SOP and POS.'], 'Lab 2 Q14')
        ],
        subjective: [sub('Using a K-map, minimise F(A,B,C,D) = Σm(0,1,2,5,8,9,10) in SOP and POS forms. (5 marks)',
          '<p><b>SOP:</b> corners m0, m2, m8, m10 → B\'D\'; m0, m1, m8, m9 (rows 00 and 10, columns 00, 01) → B\'C\'; m1, m5 → A\'C\'D. F = <b>B\'D\' + B\'C\' + A\'C\'D</b>.</p><p><b>POS:</b> zeros at 3, 4, 6, 7, 11, 12, 13, 14, 15 → F\' = AB + CD + BD\' → F = <b>(A\' + B\')(C\' + D\')(B\' + D)</b>.</p>', 5,
          ['1 — map filled', '2 — SOP groups', '2 — POS from zeros'], ['D2.3d'])]
      },
      {
        id: '2.4', title: 'DeMorgan\'s Theorems and Bubble Pushing', badge: 'class', sources: '[L02] p19-22; [LB2] Q27-Q30',
        keywords: 'de morgan bubble pushing nand nor equivalent',
        explain: '<p><b>Analogy:</b> “Not (tea and coffee)” means you are missing at least one of them; “neither tea nor coffee” means no tea AND no coffee.</p>' +
          '<ul><li><b>Rule 1:</b> (A·B)\' = A\' + B\' — NAND equals OR with inverted inputs.</li><li><b>Rule 2:</b> (A + B)\' = A\'·B\' — NOR equals AND with inverted inputs.</li>' +
          '<li>Generalises to n variables: (ABC)\' = A\' + B\' + C\'.</li><li><b>Memory hook:</b> break the bar, flip the sign.</li>' +
          '<li><b>Bubble pushing:</b> sliding a bubble through a gate changes its type (AND ↔ OR) and puts bubbles on the other side. Two bubbles on one wire cancel. This is how AND-OR circuits become NAND-NAND.</li>' +
          '<li>Apply repeatedly from the outside in and scan for every remaining bar: ~(A·B + C) → ~(AB)·~C → (~A + ~B)·~C.</li></ul>',
        keypoints: ['(AB)\' = A\' + B\'; (A + B)\' = A\'B\'.', 'Complement of a function: replace each literal by its complement and swap · with +.', 'Bubble pushing = De Morgan drawn as pictures.', 'Double bubble = no inversion.'],
        diagrams: [
          { id: 'D2.4a', title: 'Bubble pushing: NAND ≡ OR with inverted inputs', svg: nandEq, how: 'Draw an AND with an output bubble, then an OR with bubbles on both inputs, joined by ≡.' },
          { id: 'D2.4b', title: 'NOR ≡ AND with inverted inputs', svg: norEq, how: 'OR with output bubble ≡ AND with input bubbles.' }],
        examples: [{ title: 'Lab 2 Q30: F = ((A\' + B)\' + (A·C)\')\'', html: '<p>Inner: (A\' + B)\' = AB\'; (AC)\' = A\' + C\'. F = (AB\' + A\' + C\')\' = (AB\')\'·A·C = (A\' + B)·A·C = <b>ABC</b>.</p>' },
          { title: 'Lab 2 Q13: complement of (A + B)(A\' + C)', html: '<p>F\' = (A + B)\' + (A\' + C)\' = <b>A\'B\' + AC\'</b>.</p>' }],
        mistakes: ['(AB)\' = A\'B\' — wrong; the operator must flip.', 'Stopping after the outer bar while inner bars remain.', 'Forgetting to complement constants when complementing a function (0 ↔ 1).'],
        practice: [
          mcq('~(A + B) is equivalent to:', ['~A + ~B', '~A · ~B', 'A · B', 'A + B'], 1, 'De Morgan rule 2: NOT of an OR becomes AND of NOTs.', ['That is ~(A·B).', 'Correct.', 'Not equivalent.', 'That is the uncomplemented OR.'], 'Class quiz (L02 quick check)'),
          mcq('Simplify ~(A·B + C).', ['(~A + ~B)·~C', '~A·~B + ~C', '(~A + ~B) + ~C', '~A + ~B·~C'], 0, 'Outer bar: ~(AB)·~C; inner bar: (~A + ~B)·~C.', ['Correct.', 'Wrong inner/outer operator.', 'Outer AND turned into OR.', 'Precedence error.'], 'From class slides'),
          mcq('An OR gate with bubbles on both inputs and on its output is equivalent to:', ['NAND', 'NOR', 'AND', 'XOR'], 2, 'Bubbled-input OR = NAND; adding an output bubble inverts it → AND.', ['Without the output bubble.', 'No.', 'Correct.', 'No.']),
          mcq('Complement of F = (A + B)(A\' + C):', ['A\'B\' + AC\'', 'A\'B + AC', '(A\' + B\')(A + C\')', 'AB + A\'C'], 0, 'F\' = (A+B)\' + (A\'+C)\' = A\'B\' + AC\'.', ['Correct.', 'Not all literals complemented.', 'Operators not swapped.', 'That is a different function.'], 'Lab 2 Q13'),
          mcq('F = ((A + B)\'·C)\' + (A·B)\' simplifies to:', ['A + B + C\'', 'A\' + B\'', '1', 'C\''], 2, '(A\'B\'C)\' = A + B + C\'; plus A\' + B\' gives A + A\' + B + B\' + C\' = 1.', ['Missed the second term.', 'Missed the first term.', 'Correct.', 'No.'], 'Lab 2 Q27')
        ],
        subjective: [sub('State De Morgan\'s theorems, prove them using truth tables, and show their graphical form (bubble pushing). (5 marks)', '<p>Theorems: (AB)\' = A\' + B\' and (A + B)\' = A\'B\'. Truth table (rows 00, 01, 10, 11): (AB)\' = 1,1,1,0 and A\'+B\' = 1,1,1,0 ✓; (A+B)\' = 1,0,0,0 and A\'B\' = 1,0,0,0 ✓. Graphical: NAND ≡ OR with inverted inputs; NOR ≡ AND with inverted inputs (D2.4a/b).</p>', 5, ['1 — statements', '2 — truth-table proofs', '2 — gate equivalences'], ['D2.4a', 'D2.4b'])]
      },
      {
        id: '2.5', title: 'Universal Gates (NAND/NOR) Demonstration', badge: 'class', sources: '[L01] p25; [L02] p23-28; [LB2] Q31-Q34; [SP4] quiz 3',
        keywords: 'nand nor universal functionally complete gate count',
        explain: '<p><b>Analogy:</b> a LEGO set with one brick shape that can still build anything.</p>' +
          '<p>A gate set is <b>functionally complete</b> if it can implement every Boolean function; {AND, OR, NOT} is. NAND alone (and NOR alone) is complete:</p>' +
          '<div class="table-wrap"><table><tr><th>Build</th><th>NAND-only</th><th>#</th><th>NOR-only</th><th>#</th></tr><tr><td>NOT A</td><td>NAND(A,A)</td><td>1</td><td>NOR(A,A)</td><td>1</td></tr><tr><td>A·B</td><td>NAND(NAND(A,B), NAND(A,B))</td><td>2</td><td>NOR(NOR(A,A), NOR(B,B))</td><td>3</td></tr><tr><td>A + B</td><td>NAND(NAND(A,A), NAND(B,B))</td><td>3</td><td>NOR(NOR(A,B), NOR(A,B))</td><td>2</td></tr><tr><td>A ⊕ B</td><td>4 NANDs (D2.5c)</td><td>4</td><td>5 NORs</td><td>5</td></tr></table></div>' +
          '<p><b>Two-level conversion:</b> SOP (AND-OR) → replace every gate with NAND (bubble pushing) = NAND-NAND. POS (OR-AND) → NOR-NOR. Single literals feeding the second level must be complemented.</p>' +
          '<p><b>Why fabs pick NAND:</b> a CMOS NAND is 4 transistors (2 NMOS in series + 2 PMOS in parallel) and its series NMOS stack is faster than NOR\'s series PMOS stack. NAND/NOR flash memory is named after the cell topology.</p>',
        keypoints: ['NOT = 1, AND = 2, OR = 3 NANDs; NOT = 1, OR = 2, AND = 3 NORs.', 'XOR = 4 NANDs; (A+B)(C+D) = 6 NANDs (minimum, verified).', 'SOP → NAND-NAND; POS → NOR-NOR.', 'AB + C with 2-input NANDs = 3 gates: ((AB)\'·C\')\'.'],
        diagrams: [
          { id: 'D2.5a', title: 'NOT, AND, OR from NAND gates', svg: universal('NAND'), how: 'Tie inputs together for NOT; NAND + NAND-inverter for AND; invert both inputs then NAND for OR.' },
          { id: 'D2.5b', title: 'NOT, OR, AND from NOR gates', svg: universal('NOR'), how: 'Mirror of the NAND picture: NOR + inverter = OR; inverted inputs into NOR = AND.' },
          { id: 'D2.5c', title: 'XOR from four NAND gates', svg: xor4, how: 'First NAND makes (AB)\'; two NANDs combine it with A and with B; a last NAND joins them.' },
          { id: 'D2.5d', title: '(A + B)(C + D) with the minimum six NAND gates', svg: abcd6, how: 'Make A+B with 3 NANDs, then NAND it separately with C and D, and NAND the two results.' }],
        mistakes: ['Thinking NAND is “more powerful” — it is self-sufficient, not stronger.', 'Forgetting that 2-input-only means 3-input terms need extra gates.', 'In NAND-NAND form, a single literal at the second level must be inverted.'],
        practice: [
          nat('Minimum number of 2-input NAND gates needed for A ⊕ B (complements not available).', 4, 0, 'G1 = NAND(A,B); G2 = NAND(A,G1); G3 = NAND(B,G1); G4 = NAND(G2,G3) = A ⊕ B. Exhaustive search confirms 3 are not enough.'),
          nat('How many 2-input NAND gates implement a 2-input AND?', 2, 0, 'NAND then a NAND wired as an inverter.', 'Class quiz (L03 Q5)'),
          mcq('A NOT gate from a single NAND gate is obtained by:', ['connecting A and B to different signals', 'tying both inputs to A', 'feeding the output back to an input', 'inverting one input externally'], 1, 'NAND(A,A) = (A·A)\' = A\'.', ['That is a normal NAND.', 'Correct.', 'That forms a latch/oscillator.', 'Needs another gate.'], 'Class quiz (L03 Q4)'),
          mcq('Minimum number of 2-input NAND gates for F = (A + B)(C + D) (no complemented inputs):', ['3', '4', '5', '6'], 3, 'A+B costs 3 NANDs; then NAND(C, A+B), NAND(D, A+B), NAND of those = (A+B)(C+D): total 6 — confirmed minimal by exhaustive search.', ['Too few: even A+B alone needs 3.', 'Too few.', 'Too few (search found no 5-gate circuit).', 'Correct.'], 'Lab 2 Q34'),
          msq('Which are functionally complete sets? (select all)', ['{NAND}', '{NOR}', '{AND, OR}', '{XOR, AND, 1}'], [0, 1, 3], '{AND, OR} cannot make NOT (monotone). XOR with constant 1 gives NOT, so {XOR, AND, 1} is complete.', ['Complete.', 'Complete.', 'Not complete — no inversion.', 'Complete (A ⊕ 1 = A\').'])
        ],
        subjective: [sub('Implement F = AB + CD using only 2-input NAND gates and F = (A + B)(C + D) using only 2-input NOR gates. Show the bubble-pushing steps. (5 marks)', '<p>AB + CD: AND-OR → add a bubble pair on each internal wire → NAND-NAND: F = ((AB)\'·(CD)\')\' → 3 NANDs. (A+B)(C+D): OR-AND → NOR-NOR: F = ((A+B)\' + (C+D)\')\' → 3 NORs. Steps: draw the 2-level circuit, push the output bubble of the last gate to its inputs, convert AND-with-bubbled-inputs/OR-with-bubbled-inputs into NAND/NOR.</p>', 5, ['2 — NAND circuit', '2 — NOR circuit', '1 — bubble-pushing reasoning'], ['D2.4a', 'D2.5a', 'D2.5b'])]
      },
      {
        id: '2.6', title: 'Don\'t-Cares in K-Maps', badge: 'class', sources: '[L02] p16; [LB2] Q21-Q26, Q35',
        keywords: 'dont care x bcd unused',
        explain: '<p><b>Analogy:</b> a menu item that is never ordered — the chef can pretend it is whatever makes the kitchen simpler.</p>' +
          '<p>A <b>don\'t-care</b> (X or d) is an input combination that never occurs or whose output is never used: BCD codes 10–15 in a digit decoder, unread outputs, sensor combinations that are physically impossible. <b>Rule:</b> treat each X as 1 if it makes a group bigger, otherwise as 0. Never create a group of only X\'s. Notation: F = Σm(1-rows) + d(don\'t-care rows).</p>' +
          '<p>A don\'t-care may be inside a prime implicant, but you never need to <i>cover</i> it.</p>',
        keypoints: ['X = free choice: use it only to enlarge groups.', 'Never group X\'s alone.', 'Notation: F = Σm(1-rows) + d(don\'t-care rows).', 'BCD inputs 1010–1111 are classic don\'t-cares.'],
        diagrams: [{ id: 'D2.6a', title: 'Don\'t-cares enlarge a group (L02 p16): F = A\'D + A\'B\'C\'', svg: KM({ vars: ['A', 'B', 'C', 'D'], ones: [0, 1], dc: [3, 5, 7], groups: [{ cells: [1, 3, 5, 7], label: 'A\'D (X\'s used as 1)' }, { cells: [0, 1], label: 'A\'B\'C\'' }] }), how: 'Fill the 1s and Xs, draw the quad through the Xs, then cover the remaining 1.' }],
        examples: [{ title: 'BCD “digit ≥ 5” detector: F = Σm(5,6,7,8,9) + d(10–15)', html: '<p>Using X\'s: A (rows 10, 11 → m8–m15) + BD (m5, m7, m13, m15) + BC (m6, m7, m14, m15) → <b>F = A + BD + BC</b>. Without don\'t-cares it would be AB\'C\' + A\'BD + A\'BC.</p>' }],
        mistakes: ['Covering a don\'t-care with its own extra group (wastes a term).', 'Forgetting that the final function may output 0 or 1 for an X input — both are acceptable.'],
        practice: [
          mcq('F(A,B,C,D) = Σm(1,3,7,11,15) + d(0,2,5). Which option is a minimal SOP?', ['CD + A\'B\'', 'CD + A\'B\'D', 'A\'B\' + B\'D', 'C + D'], 0, 'CD covers 3, 7, 11, 15; m1 is then covered by the quad m0–m3 (X0, X2 used) = A\'B\'. CD + A\'D (using X5) is equally minimal but is not offered.', ['Correct — 4 literals.', 'Covers the function but uses one extra literal.', 'Misses m7 and m15.', 'Includes m4, m6, m8 which are 0.']),
          msq('Which statements are true? (Lab 2 Q35)', ['Number of PIs always equals number of EPIs', 'A minimal SOP must contain every essential prime implicant', 'Don\'t-care minterms may appear inside a prime implicant', 'Two minimal covers can have different numbers of terms'], [1, 2], 'EPIs are mandatory; X\'s can be inside PIs. Minimal covers have the same (minimum) term count by definition.', ['False (e.g. cyclic maps have PIs but no EPIs).', 'True.', 'True.', 'False.'], 'Lab 2 Q35'),
          mcq('In a BCD-to-7-segment decoder, inputs 1010 to 1111 are treated as:', ['errors that must output 0', 'don\'t-cares', 'maxterms', 'essential prime implicants'], 1, 'They never occur in BCD, so their outputs can be chosen freely.', ['Not required.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('F(A,B,C) = Σm(0,1,6) + d(2,3,7). Minimum number of literals in the minimal SOP?', 2, 0, 'A\' covers 0,1 (with 2,3 as X); B covers 6 (with 2,3,7 as X)? Check: B = m2,m3,m6,m7 — m2,m3,m7 are X → B covers 6. F = A\' + B → 2 literals.')
        ],
        subjective: [sub('Minimise F(A,B,C,D) = Σm(1,3,7,11,15) + d(0,2,5) and explain how the don\'t-cares were used. (5 marks)', '<p>Quad CD (m3, m7, m11, m15). m1 remains: with X0, X2 the quad m0, m1, m2, m3 = A\'B\'; with X5 the quad m1, m3, m5, m7 = A\'D. Both give F = CD + A\'B\' or F = CD + A\'D (4 literals). X\'s were assigned 1 only when they enlarged a group; unused X\'s are 0.</p>', 5, ['1 — map', '3 — groups', '1 — explanation'], ['D2.6a'])]
      },
      {
        id: '2.E1', title: 'Extra from slides: Prime implicants, EPIs and the consensus theorem', badge: 'extra', sources: '[LB2] Q10-Q11, Q23-Q26',
        sourceLine: 'Source: Lab 2 deck (Mano; Roth – Fundamentals of Logic Design)',
        keywords: 'prime implicant essential cyclic consensus quine mccluskey',
        explain: '<p><b>Implicant:</b> any group of 1s (and X\'s). <b>Prime implicant (PI):</b> a group that cannot be enlarged. <b>Essential PI (EPI):</b> a PI that is the only cover of some 1. Minimal cover = all EPIs + the fewest remaining PIs. A <b>cyclic</b> map has PIs but no EPIs (e.g. Σm(0,1,2,5,6,7)).</p>' +
          '<p><b>Consensus theorem:</b> XY + X\'Z + YZ = XY + X\'Z — the term YZ (formed from the two terms that contain X and X\') is redundant. Example (Lab 2 Q11): (A + B)(A\' + C) = AC + A\'B + BC = AC + A\'B.</p>' +
          '<p>The K-map tool on this site uses the Quine–McCluskey method (tabular combining of minterms differing in one bit) plus an exact cover search.</p>',
        keypoints: ['PI = maximal group; EPI = only cover of some 1.', 'Cyclic map: no EPIs; choose PIs by trial.', 'Consensus: XY + X\'Z + YZ = XY + X\'Z.'],
        diagrams: [{ id: 'D2.E1a', title: 'Cyclic map Σm(0,1,2,5,6,7): one minimal cover A\'B\' + BC\' + AC', svg: KM({ vars: ['A', 'B', 'C'], ones: [0, 1, 2, 5, 6, 7], groups: [{ cells: [0, 1], label: 'A\'B\'' }, { cells: [2, 6], label: 'BC\'' }, { cells: [5, 7], label: 'AC' }] }), how: 'Six 1s in a ring; every 1 has two pair options, so pick three pairs that alternate.' }],
        practice: [
          mcq('For F(A,B,C) = Σm(0,1,2,5,6,7), the number of essential prime implicants is:', ['0', '2', '3', '6'], 0, 'Each 1 is covered by two PIs (A\'B\', A\'C\', B\'C, BC\', AC, AB) → cyclic, no EPI.', ['Correct.', 'No single-cover minterm exists.', 'No.', 'That is the number of PIs.'], 'Lab 2 Q23'),
          nat('How many prime implicants does F(A,B,C) = Σm(0,1,2,5,6,7) have?', 6, 0, 'A\'B\', A\'C\', B\'C, BC\', AC, AB.', 'Lab 2 Q23'),
          mcq('Is (A + B)(A\' + C) = AC + A\'B?', ['Yes, after removing the consensus term BC', 'No, the RHS needs BC', 'Only when A = 1', 'Only when B = C'], 0, 'Expand: AC + A\'B + BC; BC is the consensus of AC and A\'B → redundant.', ['Correct.', 'BC is redundant.', 'Holds for all inputs.', 'Holds for all inputs.'], 'Lab 2 Q11'),
          mcq('A function has five PIs of which three are essential and the EPIs cover all 1s. Minimum number of product terms:', ['2', '3', '4', '5'], 1, 'All EPIs are required; they already cover everything → exactly 3.', ['EPIs cannot be dropped.', 'Correct.', 'Extra PIs unnecessary.', 'No.'], 'Lab 2 Q24')
        ],
        subjective: [sub('Define prime implicant and essential prime implicant. Find all PIs and EPIs of F(A,B,C,D) = Σm(0,2,3,4,5,7) and give a minimal SOP. (5 marks)', '<p>PIs: A\'C\'D\' (m0, m4), A\'B\'D\' (m0, m2), A\'B\'C (m2, m3), A\'CD (m3, m7), A\'BD (m5, m7), A\'BC\' (m4, m5). Every 1 is covered by two PIs → cyclic, no EPI. Minimal cover (3 terms): A\'C\'D\' + A\'B\'C + A\'BD (or A\'B\'D\' + A\'CD + A\'BC\').</p>', 5, ['1 — definitions', '3 — PIs/EPIs', '1 — cover'])]
      }
    ]
  });
})();
