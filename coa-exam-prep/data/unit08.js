/* Unit 8 – Memory: SRAM vs DRAM & the Memory Hierarchy */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* simple NMOS symbols: horizontal (leads left/right, gate up) */
  function nmosH(cx, cy, label) {
    let s = S.p([[cx - 25, cy], [cx - 12, cy], [cx - 12, cy - 6]]) + S.p([[cx + 12, cy - 6], [cx + 12, cy], [cx + 25, cy]]);
    s += S.p([[cx - 14, cy - 6], [cx + 14, cy - 6]], 'w') + S.p([[cx - 12, cy - 13], [cx + 12, cy - 13]], 'w');
    if (label) s += S.tc(cx, cy + 16, label, 'xs b');
    return { svg: s, l: [cx - 25, cy], r: [cx + 25, cy], g: [cx, cy - 13] };
  }
  function invR(x, y) { return '<path class="g" d="M' + x + ',' + (y - 15) + ' L' + (x + 32) + ',' + y + ' L' + x + ',' + (y + 15) + ' z"/><circle class="g" cx="' + (x + 36) + '" cy="' + y + '" r="4"/>'; }
  function invL(x, y) { return '<path class="g" d="M' + x + ',' + (y - 15) + ' L' + (x - 32) + ',' + y + ' L' + x + ',' + (y + 15) + ' z"/><circle class="g" cx="' + (x - 36) + '" cy="' + y + '" r="4"/>'; }

  /* D8.2a 6T SRAM cell */
  const sram6t = (function () {
    let s = '';
    s += S.p([[60, 30], [60, 250]]) + S.tc(60, 22, 'BL', 'sm b') + S.p([[520, 30], [520, 250]]) + S.tc(520, 22, 'BL\'', 'sm b');
    s += S.p([[30, 60], [550, 60]], 'hl') + S.t(34, 54, 'WL (word line)', 'xs hltxt');
    const m5 = nmosH(115, 150, 'M5 (access)'), m6 = nmosH(465, 150, 'M6 (access)');
    s += m5.svg + m6.svg + S.p([[60, 150], m5.l]) + S.dot(60, 150) + S.p([m6.r, [520, 150]]) + S.dot(520, 150);
    s += S.p([m5.g, [115, 60]], 'hl') + S.dot(115, 60) + S.p([m6.g, [465, 60]], 'hl') + S.dot(465, 60);
    // inverter loop
    s += S.rect(185, 85, 210, 140, 'boxa');
    s += invR(250, 120) + invL(330, 185);
    s += S.p([[140, 150], [210, 150]]) + S.p([[210, 120], [210, 185], [290, 185]]) + S.p([[210, 120], [250, 120]]) + S.dot(210, 150);
    s += S.p([[286, 120], [370, 120], [370, 185], [330, 185]]) + S.p([[370, 150], [440, 150]]) + S.dot(370, 150);
    s += S.t(196, 144, 'Q', 'sm b') + S.t(376, 144, 'Q\'', 'sm b');
    s += S.tc(290, 216, '2 cross-coupled inverters = 4T', 'xs b');
    s += S.t(10, 276, '4 transistors (2 inverters, each 1 PMOS + 1 NMOS) store the bit actively; WL = 1 connects Q to BL and Q\' to BL\'.', 'xs');
    s += S.t(10, 292, 'Total 6T per bit. Reads are non-destructive; the latch holds the value as long as power is on (static).', 'xs b');
    return S.svg(580, 300, s, '6T SRAM cell');
  })();

  /* D8.3a 1T1C DRAM cell */
  const dram1t = (function () {
    let s = S.p([[100, 20], [100, 250]]) + S.tc(100, 14, 'BL (bit line)', 'sm b');
    s += S.p([[60, 60], [330, 60]], 'hl') + S.t(200, 52, 'WL (word line)', 'xs hltxt');
    const m = nmosH(180, 130, 'access transistor');
    s += m.svg + S.p([[100, 130], m.l]) + S.dot(100, 130) + S.p([m.g, [180, 60]], 'hl') + S.dot(180, 60);
    s += S.p([m.r, [260, 130], [260, 160]]) + S.p([[240, 160], [280, 160]], 'w') + S.p([[240, 170], [280, 170]], 'w') + S.p([[260, 170], [260, 200]]);
    s += S.p([[244, 200], [276, 200]]) + S.p([[250, 206], [270, 206]]) + S.p([[256, 212], [264, 212]]);
    s += S.t(290, 168, 'storage capacitor', 'xs b') + S.t(290, 182, 'charged = 1, empty = 0', 'xs') + S.t(282, 218, 'ground', 'xs muted');
    s += S.t(10, 262, 'WL = 1 opens the transistor and connects the capacitor to the bit line (write: charge/drain it; read: share its charge).', 'xs');
    s += S.t(10, 278, '1 transistor + 1 capacitor per bit → about 6× denser than SRAM, but the charge leaks (needs refresh).', 'xs b');
    return S.svg(560, 286, s, '1T1C DRAM cell');
  })();

  /* D8.3b leak / refresh */
  const refresh = (function () {
    const ox = 60, oy = 200, W = 440, H = 150;
    let s = S.a([[ox, oy], [ox + W + 10, oy]], 'arr') + S.a([[ox, oy], [ox, oy - H - 10]], 'arr');
    s += S.t(ox + W + 14, oy + 4, 't (ms)', 'xs b') + S.t(ox - 6, oy - H - 14, 'charge', 'xs b');
    const X = (ms) => ox + ms / 128 * W;
    const Y = (v) => oy - v * H;
    // decay without refresh (dashed via class edge)
    let d = 'M' + X(0) + ',' + Y(1);
    for (let t = 2; t <= 128; t += 2) d += ' L' + X(t).toFixed(1) + ',' + Y(Math.exp(-t / 70)).toFixed(1);
    s += '<path class="edge" d="' + d + '" fill="none"/>';
    // sawtooth with refresh every 64 ms (draw two periods)
    let r = '';
    [0, 64].forEach((t0) => { r += 'M' + X(t0) + ',' + Y(1); for (let t = 2; t <= 64; t += 2) r += ' L' + X(t0 + t).toFixed(1) + ',' + Y(Math.exp(-t / 70)).toFixed(1); r += ' L' + X(t0 + 64) + ',' + Y(1); });
    s += '<path class="wave" d="' + r + '" fill="none"/>';
    s += S.p([[ox, Y(0.35)], [ox + W, Y(0.35)]], 'ctl') + S.t(ox + W - 4, Y(0.35) - 5, 'sense threshold', 'xs ctltxt', 'end');
    [0, 20, 50, 64, 128].forEach((t) => { s += S.tc(X(t), oy + 14, String(t), 'xs'); });
    s += S.t(X(64) + 4, Y(1) - 4, 'refresh: read + rewrite', 'xs b');
    s += S.t(X(80), Y(0.17), 'no refresh → below threshold → lost', 'xs muted');
    s += S.t(10, 240, 'Charge fades within milliseconds: every row is read and rewritten about every 64 ms.', 'xs b');
    return S.svg(560, 248, s, 'DRAM charge leak and refresh');
  })();

  /* D8.5a hierarchy pyramid */
  const pyramid = (function () {
    const lv = [['Registers', '< 1 ns', 'bytes (≈ 128 B to 1 KB)'], ['L1 cache (SRAM)', '≈ 1 ns', '32–64 KB per core'], ['L2 cache (SRAM)', '≈ 3–10 ns', '256 KB – 2 MB'], ['L3 cache (SRAM)', '≈ 10–40 ns', '8 – 64 MB shared'], ['Main memory (DRAM)', '≈ 50–100 ns', '8 – 64 GB'], ['SSD / HDD', '≈ 100 µs / 10 ms', 'TBs']];
    const top = 20, h = 38, cx = 200, w0 = 60, dw = 52;
    let s = '';
    lv.forEach((L, i) => {
      const y = top + i * h, wt = w0 + i * dw, wb = w0 + (i + 1) * dw;
      s += '<polygon class="pyr' + i + '" points="' + (cx - wt / 2) + ',' + y + ' ' + (cx + wt / 2) + ',' + y + ' ' + (cx + wb / 2) + ',' + (y + h) + ' ' + (cx - wb / 2) + ',' + (y + h) + '" stroke="currentColor" stroke-opacity=".3"/>';
      s += S.tc(cx, y + h / 2 + 4, L[0], 'xs b pyrtxt');
      s += S.t(380, y + h / 2 + 4, L[1], 'xs b') + S.t(480, y + h / 2 + 4, L[2], 'xs');
    });
    s += S.t(380, 14, 'latency', 'xs muted') + S.t(480, 14, 'typical size', 'xs muted');
    s += S.a([[16, 30], [16, 240]], 'arr') + S.t(10, 262, '↓ bigger, slower, cheaper per bit', 'xs b');
    s += S.t(10, 284, 'Locality (temporal + spatial) lets the small fast levels serve most accesses — the system looks as fast as the top and as big as the bottom.', 'xs');
    return S.svg(680, 292, s, 'memory hierarchy pyramid');
  })();

  /* D8.5b processor-memory gap */
  const gap = (function () {
    const ox = 60, oy = 220, W = 420, H = 190;
    let s = S.a([[ox, oy], [ox + W + 10, oy]], 'arr') + S.a([[ox, oy], [ox, oy - H - 10]], 'arr');
    s += S.t(ox - 6, oy - H - 14, 'relative performance (log scale)', 'xs b');
    const X = (yr) => ox + (yr - 1980) / 30 * W;
    const Y = (lg) => oy - lg / 4.2 * H; // lg = log10(perf)
    // CPU: ~1.25x/yr to 1986, ~1.52x/yr to 2004, then ~1.2x/yr; DRAM latency-perf ~1.07x/yr
    let cpu = '', mem = '', pc = 0, pm = 0;
    for (let yr = 1980; yr <= 2010; yr++) {
      if (yr > 1980) { pc += Math.log10(yr <= 1986 ? 1.25 : yr <= 2004 ? 1.52 : 1.2); pm += Math.log10(1.07); }
      cpu += (yr === 1980 ? 'M' : ' L') + X(yr).toFixed(1) + ',' + Y(pc).toFixed(1);
      mem += (yr === 1980 ? 'M' : ' L') + X(yr).toFixed(1) + ',' + Y(pm).toFixed(1);
    }
    s += '<path class="wave" d="' + cpu + '" fill="none"/><path class="wave3" d="' + mem + '" fill="none"/>';
    s += S.t(X(1990), Y(2.6), 'Processor', 'sm b') + S.t(X(2001), Y(0.55), 'DRAM', 'sm b');
    s += S.a([[X(2006), Y(1.0)], [X(2006), Y(3.6)]], 'hl') + S.a([[X(2006), Y(3.6)], [X(2006), Y(1.0)]], 'hl') + S.t(X(2006) + 6, Y(2.3), 'the gap', 'xs hltxt');
    [1980, 1990, 2000, 2010].forEach((yr) => { s += S.tc(X(yr), oy + 14, String(yr), 'xs'); });
    s += S.t(10, 258, 'CPU speed grew ≈ 50 % per year for two decades; DRAM latency improved only ≈ 7 % per year (Hennessy & Patterson).', 'xs');
    return S.svg(560, 266, s, 'processor-memory performance gap');
  })();

  UNITS.push({
    id: 8, title: 'Memory: SRAM vs DRAM & the Memory Stack', short: 'SRAM, DRAM & Hierarchy',
    intro: 'Why computers have several kinds of memory: the 6T SRAM cell (caches), the 1T1C DRAM cell (main memory), refresh and destructive reads, and how they stack into the memory hierarchy. MCA Lecture 8 (SRAM vs DRAM).',
    subtopics: [
      {
        id: '8.1', title: 'Register Files; the Need for Bigger Memory', badge: 'class', sources: '[MEM] p2-3',
        keywords: 'register file small memory need flip flop transistors per bit',
        explain: '<p><b>Analogy:</b> the register file is the paper on your desk; you also need a bookshelf (cache) and a library (DRAM).</p>' +
          '<ul><li>The register file of Unit 7 holds 32–128 words of flip-flops — blazing fast, right next to the ALU.</li>' +
          '<li>But flip-flops are expensive: <b>20+ transistors per bit</b>. They cannot scale to gigabytes. A photo is millions of bytes; an operating system is billions.</li>' +
          '<li><b>Core tension:</b> fast memory is small and expensive; big memory is slow and cheap. No single memory is fast, big AND cheap — so computers layer several technologies (the memory hierarchy, 8.5).</li></ul>',
        keypoints: ['Flip-flop ≈ 20+ transistors per bit.', 'SRAM 6T, DRAM 1T1C per bit.', 'No memory is fast + big + cheap → hierarchy.'],
        mistakes: ['Assuming registers are made of DRAM.', 'Thinking a bigger register file is free — area, power and access time all grow.'],
        practice: [
          mcq('Why can\'t main memory be built from flip-flops like the register file?', ['Flip-flops are too slow', 'Flip-flops need 20+ transistors per bit — far too much area and cost for gigabytes', 'Flip-flops cannot hold data without a clock', 'Flip-flops are volatile and DRAM is not'], 1, 'Cost per bit.', ['They are the fastest.', 'Correct.', 'They hold data between edges.', 'DRAM is volatile too.'], 'From class slides'),
          mcq('The fundamental trade-off that leads to multiple memory technologies is:', ['fast memory is big and cheap', 'fast memory is small and expensive; big memory is slow and cheap', 'all memory has the same cost per bit', 'slow memory uses more power'], 1, 'Class “core tension”.', ['Opposite.', 'Correct.', 'No.', 'Not the reason.'], 'From class slides'),
          nat('Roughly how many transistors per bit does a 6T SRAM cell use?', 6, 0, 'Six.'),
          txt('Name the memory technology used for CPU caches (one word).', ['SRAM', 'sram', 'static RAM'], 'Caches are SRAM.')
        ],
        subjective: [sub('Why do computers use several kinds of memory instead of one? (3 marks)', '<p>Speed, capacity and cost per bit conflict: flip-flops (20+ T/bit) and SRAM (6T) are fast but bulky/expensive; DRAM (1T1C) is dense and cheap but slower; disks are huge and very slow. Layering them with locality gives near-top speed at near-bottom cost.</p>', 3, ['1 — tension', '1 — technologies', '1 — hierarchy idea'])]
      },
      {
        id: '8.2', title: 'SRAM: 6T Cell Structure and Behaviour', badge: 'class', sources: '[MEM] p4-9',
        keywords: 'sram 6t cell cross coupled inverters access transistor word line bit line sense amplifier static',
        explain: '<p><b>Analogy:</b> SRAM is a bistable see-saw held in place by two people pushing (active storage); DRAM is a leaky bucket (passive storage).</p>' +
          '<ul><li><b>Static RAM</b> holds each bit in a <b>bistable latch</b> — two cross-coupled inverters, exactly the Unit 5 bistable. While powered the loop holds the value indefinitely: no clock, no refresh → “static”.</li>' +
          '<li><b>6T cell:</b> 4 transistors = 2 inverters (store Q and Q\'), 2 <b>access transistors M5, M6</b> connect the cell to the <b>bit lines BL and BL\'</b> when the <b>word line WL</b> is high. Word line = “select this cell”; bit lines = read/write the data and its complement.</li>' +
          '<li><b>Self-reinforcing:</b> if Q = 1, the first inverter drives Q\' = 0, which drives Q back to 1; tiny leakage is instantly corrected from the power supply.</li>' +
          '<li><b>Read:</b> (1) pre-charge both bit lines high; (2) raise WL; (3) the stored 0 side pulls its bit line slightly low; (4) a <b>sense amplifier</b> detects which side dropped. Reads are <b>non-destructive</b>.</li>' +
          '<li><b>Write:</b> (1) drive BL/BL\' to the new value; (2) raise WL; (3) the strong bit-line drivers overpower the cell; (4) the latch flips and holds.</li>' +
          '<li><b>Scorecard:</b> very fast (a few ns), no refresh, but low density (6T/bit), expensive and constant static (leakage) power → used for <b>caches (L1/L2/L3), register files and buffers</b>.</li></ul>',
        keypoints: ['6T = 4T latch (2 inverters) + 2 access transistors.', 'WL selects the cell; BL/BL\' carry data and complement.', 'Read: precharge, WL, sense amp — non-destructive.', 'Write: drive bit lines, overpower the latch.', 'Fast, no refresh, low density → caches.'],
        diagrams: [{ id: 'D8.2a', title: '6T SRAM cell', svg: sram6t, how: 'Two vertical bit lines (BL, BL\'), a word line across the top; in the middle two inverters drawn back-to-back in a loop; an access transistor on each side between the loop node (Q / Q\') and its bit line, gates tied to WL.' }],
        mistakes: ['Saying SRAM needs refresh (that is DRAM).', 'Calling the access transistors part of the inverters — they are separate (M5, M6).', 'Thinking SRAM reads destroy the data.'],
        practice: [
          mcq('In a 6T SRAM cell, how many transistors form the storage latch?', ['2', '4', '6', '1'], 1, 'Two cross-coupled inverters = 4 transistors; the other 2 are access transistors.', ['Those are the access transistors.', 'Correct.', 'Whole cell.', 'DRAM.'], 'From class slides'),
          mcq('What is the role of the word line in an SRAM cell?', ['carries the data bit', 'selects the cell by turning on the access transistors', 'supplies power to the inverters', 'refreshes the cell'], 1, 'WL = select.', ['Bit lines do.', 'Correct.', 'No.', 'No refresh in SRAM.'], 'From class slides'),
          msq('Which statements about SRAM are true? (select all)', ['It is called static because it needs no refresh while powered', 'Its reads are destructive', 'It stores the bit actively in a feedback loop', 'It is used for L1/L2/L3 caches'], [0, 2, 3], 'Reads are non-destructive.', ['True.', 'False — DRAM.', 'True.', 'True.']),
          mcq('During an SRAM read, the bit lines are first:', ['grounded', 'pre-charged high', 'left floating at random', 'driven to the new value'], 1, 'Both precharged high; the 0 side discharges slightly; the sense amp resolves.', ['No.', 'Correct.', 'No.', 'That is a write.'], 'From class slides'),
          mcq('Why does an SRAM cell hold its value without refresh?', ['the capacitor is very large', 'the cross-coupled inverters continuously restore the value from the power supply', 'the word line stays high', 'the sense amplifier rewrites it every cycle'], 1, 'Active, self-reinforcing storage.', ['No capacitor.', 'Correct.', 'WL is low while holding.', 'No.'])
        ],
        subjective: [sub('Draw and explain the 6T SRAM cell. Describe the read and write operations. (5 marks)', '<p>Diagram D8.2a. 4T latch + M5/M6, WL, BL/BL\'. Read: precharge, WL high, one bit line dips, sense amp, non-destructive. Write: drive BLs, WL high, overpower latch.</p>', 5, ['2 — labelled diagram', '1.5 — read', '1.5 — write'], ['D8.2a'])]
      },
      {
        id: '8.3', title: 'DRAM: 1T1C Cell, Refresh, Destructive Read', badge: 'class', sources: '[MEM] p10-16; homework [AI] p22',
        keywords: 'dram 1t1c capacitor refresh 64 ms destructive read sense amplifier write back dynamic',
        explain: '<ul><li><b>Dynamic RAM</b> stores each bit as <b>charge on a tiny capacitor</b> (charged = 1, empty = 0). One transistor acts as a switch: <b>1T1C</b> per bit — the smallest memory cell there is (≈ 6× more bits per mm² than SRAM).</li>' +
          '<li><b>Operation:</b> WL high → transistor opens → capacitor connects to the bit line. Write: drive the bit line to charge or drain the capacitor. Read: sense the tiny charge dumped onto the bit line.</li>' +
          '<li><b>Refresh:</b> capacitors leak; a 1 fades to 0 within milliseconds (class curve: full at 0 ms, fading 20 ms, weak 50 ms, lost by 64 ms). The DRAM controller reads and rewrites <b>every row about every 64 ms</b>. During refresh that part of memory is briefly unavailable — a performance and power cost SRAM never pays. Hence “dynamic”.</li>' +
          '<li><b>Destructive read:</b> (1) access: the capacitor shares its charge with the bit line; (2) tiny signal; (3) a <b>sense amplifier</b> swings it to a full 0/1; (4) <b>write-back</b> — every read is really a read + rewrite.</li>' +
          '<li><b>Latency 50–100 ns</b> (sense time + row activation + precharge) — over 10× slower than SRAM. Used for <b>main memory</b> (8/16/32 GB RAM sticks) and GPU frame buffers (GDDR).</li></ul>' +
          '<p><b>Refresh arithmetic (class homework):</b> 8192 rows refreshed within 64 ms → one row every 64 ms / 8192 = <b>7.8 µs</b>.</p>',
        keypoints: ['1T1C: access transistor + storage capacitor.', 'Refresh every row ≈ every 64 ms.', '64 ms / 8192 rows = 7.8 µs per row.', 'Destructive read → sense amp + write-back.', '50–100 ns, ≈ 6× denser than SRAM.'],
        diagrams: [{ id: 'D8.3a', title: '1T1C DRAM cell', svg: dram1t, how: 'Vertical bit line, horizontal word line; one transistor from the bit line to a capacitor whose other plate goes to ground; gate tied to the word line.' },
          { id: 'D8.3b', title: 'Charge leak and refresh (sawtooth)', svg: refresh, how: 'Axes charge vs time; an exponential decay that would drop below the sense threshold by 64 ms; a sawtooth showing refresh restoring full charge every 64 ms.' }],
        examples: [{ title: 'Refresh overhead', html: '<p>A DRAM bank has 8192 rows, a 64 ms retention window, and each row refresh blocks the bank for 50 ns. Refresh interval per row = 7.8 µs; fraction of time busy = 50 ns / 7.8 µs ≈ <b>0.64 %</b>.</p>' }],
        mistakes: ['Saying the transistor stores the bit (the capacitor does).', 'Forgetting the write-back after a DRAM read.', 'Mixing up refresh interval of the whole chip (64 ms) with the per-row interval (7.8 µs).'],
        practice: [
          mcq('Which memory needs a periodic refresh to keep its data — and why?', ['SRAM — latch leaks', 'DRAM — capacitor leaks', 'Both equally', 'Neither'], 1, 'Charge fades in milliseconds.', ['The latch restores itself.', 'Correct.', 'No.', 'No.'], 'From class slides (quick check)'),
          nat('Class homework: a DRAM with 8192 rows must refresh every row within 64 ms. Interval between row refreshes in µs (1 decimal)?', 7.8, 0.05, '64 ms / 8192 = 7.8125 µs.', 'From class slides', 'µs'),
          mcq('Why is a DRAM read called destructive?', ['it permanently damages the cell', 'reading drains the capacitor onto the bit line, so the value must be written back', 'it erases the whole row', 'the sense amplifier inverts the bit'], 1, 'Charge sharing.', ['No.', 'Correct.', 'The row is rewritten, not erased.', 'No.'], 'From class slides'),
          mcq('Typical DRAM access latency per the class slides:', ['≈ 1 ns', '≈ 5 ns', '50–100 ns', '10 ms'], 2, 'DRAM 50–100 ns; SRAM a few ns.', ['Registers/L1.', 'SRAM.', 'Correct.', 'Disk.'], 'From class slides'),
          nat('A DRAM bank has 4096 rows and a 64 ms retention time. Refresh interval per row in µs (to 1 decimal)?', 15.6, 0.1, '64 ms / 4096 = 15.625 µs.')
        ],
        subjective: [sub('Draw the 1T1C DRAM cell and explain why DRAM needs refresh and why its read is destructive. Compute the per-row refresh interval for 8192 rows and 64 ms. (5 marks)', '<p>D8.3a, D8.3b. Capacitor leaks → refresh every ~64 ms. Read shares charge with the bit line → sense amp → write-back. 64 ms / 8192 = 7.8 µs.</p>', 5, ['2 — diagram', '1 — refresh', '1 — destructive read', '1 — calculation'], ['D8.3a', 'D8.3b'])]
      },
      {
        id: '8.4', title: 'SRAM vs DRAM Comparison', badge: 'class', sources: '[MEM] p17-20',
        keywords: 'sram vs dram comparison density speed refresh cost cache main memory',
        explain: '<div class="table-wrap"><table><tr><th></th><th>SRAM</th><th>DRAM</th></tr><tr><td>Cell</td><td>6 transistors</td><td>1 transistor + 1 capacitor</td></tr><tr><td>Storage</td><td>active (latch)</td><td>passive (charge)</td></tr><tr><td>Density</td><td>low</td><td>high (≈ 6× SRAM)</td></tr><tr><td>Speed</td><td>fast (a few ns)</td><td>slower (50–100 ns)</td></tr><tr><td>Refresh</td><td>not needed</td><td>every few ms (≈ 64 ms per row)</td></tr><tr><td>Read</td><td>non-destructive</td><td>destructive (write-back)</td></tr><tr><td>Cost per bit</td><td>high</td><td>low</td></tr><tr><td>Used for</td><td>caches L1/L2/L3, register files, buffers</td><td>main memory, GPU memory (GDDR)</td></tr></table></div>' +
          '<p><b>One sentence:</b> SRAM trades density for speed; DRAM trades speed for density. Neither is “better”. <b>Three reasons SRAM is faster</b> (exit ticket): its latch actively drives the bit lines (strong signal, quick sensing); no destructive read / write-back and no refresh interruptions; small arrays on the CPU die built in the same logic process (DRAM is off-chip with row activation and precharge).</p>',
        keypoints: ['SRAM: 6T, fast, no refresh, caches.', 'DRAM: 1T1C, dense, refresh, main memory.', 'Active vs passive storage explains every difference.'],
        mistakes: ['Writing “DRAM is non-volatile” — both lose data without power.', 'Swapping the uses (caches are SRAM).'],
        practice: [
          match('Match each property with SRAM or DRAM.', ['Needs refresh', 'Six transistors per bit', 'Used for L1 cache', 'Destructive read', 'Higher density'], ['SRAM', 'DRAM'], [1, 0, 0, 1, 1], 'From the class comparison table.', 'From class slides'),
          mcq('Your 16 GB laptop “RAM” stick is made of:', ['SRAM', 'DRAM', 'flip-flops', 'flash'], 1, 'Main memory = DRAM.', ['Cache.', 'Correct.', 'Registers.', 'SSD.']),
          mcq('Which single design choice explains almost every SRAM/DRAM difference according to the class?', ['clock frequency', 'active (latch) vs passive (capacitor) storage', 'bus width', 'ECC'], 1, 'Active = fast & stable but bulky; passive = tiny & cheap but needs refresh.', ['No.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          nat('If DRAM is about 6× denser than SRAM, roughly how many DRAM bits fit in the area of 100 SRAM bits?', 600, 0, '100 × 6.')
        ],
        subjective: [sub('Compare SRAM and DRAM in a table (at least six points). Where is each used in a computer? (5 marks)', '<p>Table above. SRAM: caches, register files, buffers. DRAM: main memory, GDDR.</p>', 5, ['4 — six-point table', '1 — uses'])]
      },
      {
        id: '8.5', title: 'Memory Hierarchy and the Memory Wall', badge: 'researched', sources: 'only takeaways/homework: [AI] p21-22 (hierarchy & memory wall named; order registers < L1 < L2 < DRAM < SSD); gap chart [VNH] p14',
        sourceLine: 'Source: Hennessy & Patterson, Computer Architecture: A Quantitative Approach, ch. 2; Wulf & McKee, “Hitting the Memory Wall” (1995)',
        keywords: 'memory hierarchy pyramid locality temporal spatial cache memory wall latency gap amat',
        explain: '<p><b>Analogy:</b> desk (registers) → drawer (L1) → shelf (L2/L3) → library (DRAM) → warehouse (disk). You keep what you are using now close at hand.</p>' +
          '<ul><li><b>Hierarchy:</b> registers → L1 → L2 → L3 (SRAM caches) → main memory (DRAM) → SSD/HDD. Going down: bigger, slower, cheaper per bit. Each level holds a subset of the level below.</li>' +
          '<li><b>Why it works — locality:</b> <i>temporal</i> (recently used data is used again soon — loop variables) and <i>spatial</i> (nearby addresses are used soon — arrays, sequential code). Caches exploit both by keeping recent data and fetching whole blocks.</li>' +
          '<li><b>Hit / miss:</b> a hit is served by the fast level; a miss goes to the next level. Average memory access time <b>AMAT = hit time + miss rate × miss penalty</b>.</li>' +
          '<li><b>Memory wall:</b> processor performance grew ~50 %/year (1986–2004) while DRAM latency improved ~7 %/year. The gap became hundreds of cycles per DRAM access, so memory — not the ALU — limits performance (Wulf &amp; McKee 1995). Responses: deep cache hierarchies, prefetching, out-of-order execution, wider/faster DRAM interfaces, 3-D stacked memory (HBM).</li></ul>' +
          '<div class="table-wrap"><table><tr><th>Level</th><th>Technology</th><th>Latency</th><th>Size</th></tr><tr><td>Registers</td><td>flip-flops</td><td>&lt; 1 ns</td><td>≈ 1 KB</td></tr><tr><td>L1</td><td>SRAM</td><td>≈ 1 ns (4 cycles)</td><td>32–64 KB</td></tr><tr><td>L2</td><td>SRAM</td><td>≈ 3–10 ns</td><td>256 KB – 2 MB</td></tr><tr><td>L3</td><td>SRAM</td><td>≈ 10–40 ns</td><td>8 – 64 MB</td></tr><tr><td>Main memory</td><td>DRAM</td><td>≈ 50–100 ns</td><td>GBs</td></tr><tr><td>SSD / HDD</td><td>flash / magnetic</td><td>≈ 100 µs / 10 ms</td><td>TBs</td></tr></table></div>',
        keypoints: ['Order: registers < L1 < L2 < L3 < DRAM < SSD < HDD.', 'Temporal + spatial locality.', 'AMAT = hit time + miss rate × miss penalty.', 'Memory wall: CPU ~50 %/yr vs DRAM ~7 %/yr.'],
        diagrams: [{ id: 'D8.5a', title: 'Memory hierarchy pyramid', svg: pyramid, how: 'Triangle split into six bands (registers at the narrow top, disk at the wide base); write latency and size beside each band; arrow downward “bigger, slower, cheaper”.' },
          { id: 'D8.5b', title: 'Processor–memory performance gap', svg: gap, how: 'Log-scale axes vs year; a steep processor curve and a nearly flat DRAM curve; double-headed arrow labelled “the gap”.' }],
        examples: [{ title: 'AMAT', html: '<p>L1 hit time 1 ns, miss rate 5 %, miss penalty (to DRAM) 80 ns → AMAT = 1 + 0.05 × 80 = <b>5 ns</b>. Halving the miss rate to 2.5 % gives 3 ns — why caches matter.</p>' }],
        mistakes: ['Putting L2 above L1 (smaller number = closer to the CPU).', 'Saying the memory wall means memory capacity stopped growing — it is a LATENCY gap.'],
        practice: [
          txt('Class exit ticket: order L2, DRAM, registers, L1, SSD from fastest to slowest (comma-separated).', ['registers,L1,L2,DRAM,SSD', 'registers, L1, L2, DRAM, SSD', 'Registers, L1, L2, DRAM, SSD'], 'registers < L1 < L2 < DRAM < SSD.', 'From class slides'),
          mcq('A loop that sums an array benefits from spatial locality because:', ['the loop counter is reused', 'consecutive elements sit in the same cache block', 'the result register is reused', 'the instructions are in ROM'], 1, 'Neighbouring addresses come in with the same block.', ['That is temporal.', 'Correct.', 'Temporal.', 'No.']),
          nat('Hit time 2 ns, miss rate 10 %, miss penalty 100 ns. AMAT in ns?', 12, 0, '2 + 0.1 × 100 = 12 ns.'),
          mcq('The “memory wall” refers to:', ['DRAM capacity limits', 'the growing gap between processor speed and memory latency', 'the maximum number of memory chips', 'virtual memory page faults'], 1, 'Latency gap (Wulf & McKee).', ['No.', 'Correct.', 'No.', 'No.']),
          msq('Which techniques reduce the impact of the memory wall? (select all)', ['multi-level caches', 'prefetching', 'removing the register file', 'out-of-order execution'], [0, 1, 3], 'Registers are the fastest level — never removed.', ['Yes.', 'Yes.', 'No.', 'Yes (hides latency).'])
        ],
        subjective: [sub('Draw the memory hierarchy pyramid with typical size and latency at each level. Explain locality and the memory wall. (5 marks)', '<p>D8.5a + table. Temporal and spatial locality. Memory wall D8.5b: CPU ~50 %/yr vs DRAM ~7 %/yr; responses (caches, prefetch, OoO).</p>', 5, ['2 — pyramid', '1.5 — locality', '1.5 — memory wall'], ['D8.5a', 'D8.5b'])]
      }
    ]
  });
})();
