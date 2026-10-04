/* Unit 12 – C to MIPS Translation */
(function () {
  const { mcq, msq, nat, txt, match, sub } = window.QH;

  /* flowchart helpers */
  function diamond(cx, cy, w, h, label) {
    return '<polygon class="boxa" points="' + cx + ',' + (cy - h / 2) + ' ' + (cx + w / 2) + ',' + cy + ' ' + cx + ',' + (cy + h / 2) + ' ' + (cx - w / 2) + ',' + cy + '"/>' + S.tc(cx, cy + 4, label, 'sm b');
  }
  const maxFlow = (function () {
    let s = S.ell(200, 28, 50, 18, 'start', 'box', 'sm b');
    s += S.a([[200, 46], [200, 70]], 'arr') + diamond(200, 100, 130, 60, 'a > b ?');
    s += S.a([[135, 100], [90, 100], [90, 150]], 'arr') + S.t(100, 92, 'yes', 'xs b') + S.box(40, 150, 100, 36, 'c = a', 'box', 'sm mono');
    s += S.a([[265, 100], [310, 100], [310, 150]], 'arr') + S.t(272, 92, 'no (beq to Else)', 'xs b') + S.box(260, 150, 100, 36, 'c = b', 'box', 'sm mono');
    s += S.a([[90, 186], [90, 230], [170, 230]], 'arr') + S.tc(70, 214, 'j Done', 'xs b') + S.a([[310, 186], [310, 230], [230, 230]], 'arr') + S.ell(200, 230, 30, 16, 'Done', 'box', 'xs b');
    s += S.t(390, 60, 'slt  $t3, $t1, $t0   # t3 = (b < a)', 'xs mono') + S.t(390, 78, 'beq  $t3, $zero, Else', 'xs mono') + S.t(390, 96, 'move $t2, $t0        # c = a', 'xs mono') + S.t(390, 114, 'j    Done', 'xs mono') + S.t(390, 132, 'Else: move $t2, $t1  # c = b', 'xs mono') + S.t(390, 150, 'Done:', 'xs mono');
    s += S.t(10, 266, 'Every if/else has this shape: a test that splits into two blocks that merge again. Branches are the arrows.', 'xs muted');
    return S.svg(680, 274, s, 'max of two flowchart');
  })();

  const loopFlow = (function () {
    let s = S.box(130, 10, 160, 34, 'init: i = 0', 'box', 'sm mono');
    s += S.a([[210, 44], [210, 64]], 'arr') + S.t(300, 70, 'Loop:', 'sm b mono') + diamond(210, 94, 150, 56, 'i < n ?');
    s += S.a([[210, 122], [210, 146]], 'arr') + S.t(218, 138, 'yes', 'xs b') + S.box(130, 146, 160, 34, 'body: sum += i', 'box', 'sm mono');
    s += S.a([[210, 180], [210, 200]], 'arr') + S.box(130, 200, 160, 34, 'i++', 'box', 'sm mono');
    s += S.a([[130, 217], [70, 217], [70, 94], [135, 94]], 'hl') + S.t(18, 160, 'j Loop', 'xs hltxt');
    s += S.a([[285, 94], [380, 94], [380, 250]], 'arr') + S.t(300, 86, 'no: bge i, n, End', 'xs b') + S.tc(380, 266, 'End:', 'sm b mono');
    s += S.t(440, 40, 'li   $t0, 0', 'xs mono') + S.t(440, 58, 'Loop: bge $t0, $t1, End', 'xs mono') + S.t(440, 76, '      add $s0, $s0, $t0', 'xs mono') + S.t(440, 94, '      addi $t0, $t0, 1', 'xs mono') + S.t(440, 112, '      j Loop', 'xs mono') + S.t(440, 130, 'End:', 'xs mono');
    s += S.t(10, 292, 'Init before the label, test at the top (branch OUT on the reversed condition), body, increment, jump back.', 'xs muted');
    return S.svg(680, 300, s, 'loop skeleton flowchart');
  })();

  const callFlow = (function () {
    let s = S.box(30, 40, 200, 160, '', 'boxa') + S.tc(130, 62, 'CALLER', 'b');
    s += S.t(44, 90, '1. args → $a0–$a3', 'xs') + S.t(44, 110, '2. jal func', 'xs b') + S.t(44, 128, '   ($ra ← PC + 4)', 'xs muted') + S.t(44, 160, '6. result in $v0', 'xs') + S.t(44, 180, '   continue after jal', 'xs muted');
    s += S.box(430, 40, 200, 160, '', 'box') + S.tc(530, 62, 'CALLEE', 'b');
    s += S.t(444, 90, '3. read $a0–$a3', 'xs') + S.t(444, 110, '4. compute; save $s / $ra', 'xs') + S.t(444, 128, '   on the stack if used', 'xs muted') + S.t(444, 160, '5. result → $v0, $v1', 'xs') + S.t(444, 180, '   jr $ra', 'xs b');
    s += S.a([[230, 90], [430, 90]], 'arr') + S.tc(330, 82, '$a0–$a3 (arguments)', 'xs b');
    s += S.a([[230, 115], [430, 115]], 'hl') + S.tc(330, 108, 'jal: jump + link', 'xs hltxt');
    s += S.a([[430, 165], [230, 165]], 'arr') + S.tc(330, 158, '$v0–$v1 (return values)', 'xs b');
    s += S.a([[430, 188], [230, 188]], 'hl') + S.tc(330, 204, 'jr $ra: back to the instruction after jal', 'xs hltxt');
    s += S.t(10, 236, 'More than four arguments → extra ones go on the stack. $t registers may be clobbered by the callee; $s must be preserved.', 'xs muted');
    return S.svg(660, 244, s, 'caller and callee register flow');
  })();

  const stackDown = (function () {
    let s = S.t(80, 20, 'high addresses', 'xs muted');
    const rows = [['older frames', 'box2'], ['saved $ra', 'box'], ['saved $s0', 'box'], ['local variable', 'box']];
    rows.forEach((r, i) => { s += S.box(60, 30 + i * 40, 180, 40, r[0], r[1], 'sm b'); });
    s += S.box(60, 190, 180, 40, '(free)', 'box2', 'xs muted') + S.t(80, 248, 'low addresses', 'xs muted');
    s += S.a([[330, 170], [242, 170]], 'hl') + S.t(336, 174, '$sp (top of stack)', 'sm b');
    s += S.a([[30, 60], [30, 220]], 'arr') + S.t(4, 240, 'grows down', 'xs b');
    s += S.t(300, 60, 'push 8 bytes:  addi $sp, $sp, -8', 'xs mono') + S.t(300, 78, '               sw   $ra, 4($sp)', 'xs mono') + S.t(300, 96, '               sw   $s0, 0($sp)', 'xs mono') + S.t(300, 120, 'pop:  lw $s0, 0($sp) ; lw $ra, 4($sp)', 'xs mono') + S.t(300, 138, '      addi $sp, $sp, 8', 'xs mono');
    s += S.t(10, 270, 'Down to push, up to pop: $sp always points at the last word pushed; the stack must be balanced before jr $ra.', 'xs b');
    return S.svg(640, 278, s, 'stack grows downward');
  })();

  const factFrames = (function () {
    let s = S.tc(150, 18, 'Stack at the deepest point of fact(3)', 'sm b');
    const fr = [['fact(3) frame', '$ra = return into main', 'n = 3', '0x7FFFEFFC', '0x7FFFEFF8'], ['fact(2) frame', '$ra = return into fact(3)', 'n = 2', '0x7FFFEFF4', '0x7FFFEFF0'], ['fact(1) frame', '$ra = return into fact(2)', 'n = 1 (base case)', '0x7FFFEFEC', '0x7FFFEFE8']];
    fr.forEach((f, i) => {
      const y = 30 + i * 80;
      s += S.rect(60, y, 200, 76, i === 2 ? 'boxa' : 'box', 2) + S.t(66, y + 14, f[0], 'xs b');
      s += S.box(70, y + 20, 180, 24, f[1], 'box2', 'xs') + S.box(70, y + 46, 180, 24, f[2], 'box2', 'xs');
      s += S.t(54, y + 36, f[3], 'xs mono', 'end') + S.t(54, y + 62, f[4], 'xs mono', 'end');
    });
    s += S.a([[330, 248], [262, 248]], 'hl') + S.t(336, 252, '$sp = 0x7FFFEFE8 (points at the last word pushed)', 'sm b');
    s += S.t(330, 60, 'Calls push frames downward', 'sm b') + S.t(330, 80, 'each: addi $sp,$sp,-8; sw $ra,4($sp); sw $a0,0($sp)', 'xs mono');
    s += S.t(330, 130, 'The unwind', 'sm b') + S.t(330, 150, '1. fact(1) returns 1 (base case)', 'xs') + S.t(330, 168, '2. fact(2) restores n = 2: 2 × 1 = 2', 'xs') + S.t(330, 186, '3. fact(3) restores n = 3: 3 × 2 = 6', 'xs') + S.t(330, 204, 'each pops 8 bytes and jr $ra', 'xs muted');
    s += S.t(10, 318, '3 calls → 3 frames (24 bytes) at peak, then unwound one by one. Addresses assume $sp = 0x7FFFF000 before the first call.', 'xs muted');
    return S.svg(700, 326, s, 'fact(3) stack frames');
  })();

  /* array program boilerplate */
  const readArr = '.data\narr:  .space 400              # room for 100 words\n.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $s0, $v0             # n\n    la   $s1, arr             # base address\n    li   $t0, 0               # i = 0\nread:\n    beq  $t0, $s0, ready\n    li   $v0, 5\n    syscall\n    sll  $t1, $t0, 2          # byte offset = 4i\n    add  $t2, $s1, $t1        # &arr[i]\n    sw   $v0, 0($t2)\n    addi $t0, $t0, 1\n    j    read\nready:\n';
  const exitSeq = '    li   $v0, 10\n    syscall';

  UNITS.push({
    id: 12, title: 'C to MIPS Translation', short: 'C to MIPS',
    intro: 'Turning C into MIPS by hand: if/else with reversed branches, while and for loops, the calling convention ($a, $v, $ra, jal/jr) and stack frames for leaf and recursive functions. MCA Lecture 12, the portal MIPS problems and the MIPS teaching guide.',
    subtopics: [
      {
        id: '12.1', title: 'Recap of Formats; the Translation Pattern', badge: 'class', sources: '[C2M] p2-4',
        keywords: 'translation mindset variables registers reverse condition labels branches array address',
        explain: '<p><b>Recap:</b> every MIPS instruction is 32 bits — R (register ops), I (immediates, lw/sw, beq/bne), J (j, jal). Now we use them to translate C.</p>' +
          '<p><b>The translation mindset</b> (high-level code is structured; assembly is flat):</p>' +
          '<ul><li><b>Variables → registers:</b> each active C variable lives in a $t or $s register.</li>' +
          '<li><b>Conditions → compare + branch:</b> a test like a &gt; b becomes “set a flag, then branch on it” — slt then beq/bne.</li>' +
          '<li><b>Structure → labels + branches:</b> if, else and loop bodies become labelled blocks.</li>' +
          '<li><b>Reverse the condition:</b> <i>if (cond) do X</i> becomes <i>if NOT cond, skip X</i> — you branch AWAY on the opposite test.</li>' +
          '<li><b>Arrays:</b> address of A[i] = base + 4 × i for word arrays (<code>sll $t1, $t0, 2</code>; <code>add $t1, $t1, $s1</code>; <code>lw $t2, 0($t1)</code>).</li></ul>',
        keypoints: ['Variables → registers; conditions → slt + branch.', 'Branch AWAY on the reversed condition.', 'A[i] address = base + 4i.'],
        mistakes: ['Forgetting to multiply the index by 4.', 'Branching on the original condition and running the body when it is false.'],
        practice: [
          mcq('To translate if (a == b) { body }, the MIPS code usually starts with:', ['beq a, b, Skip', 'bne a, b, Skip', 'slt a, b', 'j Skip'], 1, 'Reverse the condition: skip the body if NOT equal.', ['That would skip the body when equal.', 'Correct.', 'For ordering only.', 'Always skips.'], 'From class slides'),
          nat('Word array A starts at 0x10010000. What is the address of A[5] (decimal offset from the base, in bytes)?', 20, 0, '4 × 5 = 20.'),
          msq('Which C constructs become labels + branches in MIPS? (select all)', ['if/else', 'while loops', 'for loops', 'arithmetic expressions'], [0, 1, 2], 'Expressions become arithmetic instructions.', ['Yes.', 'Yes.', 'Yes.', 'No.'])
        ],
        subjective: [sub('State the four principles used when translating C to MIPS by hand, with a one-line example of each. (4 marks)', '<p>Variables → registers (a in $t0); conditions → slt + branch; structure → labels (Loop:, End:); reverse the condition (if (a==b) → bne a,b,Skip).</p>', 4, ['1 each'])]
      },
      {
        id: '12.2', title: 'If/Else and Conditional Branching', badge: 'class', sources: '[C2M] p5-11; [SP3] Even or Odd in MIPS',
        keywords: 'if else beq bne slt idiom max of two even odd branch',
        explain: '<p><b>The branch toolkit:</b> <code>beq $a,$b,L</code> (branch if equal), <code>bne $a,$b,L</code> (branch if not equal), <code>slt $d,$a,$b</code> ($d = 1 if $a &lt; $b else 0), <code>j L</code>. There is <b>no real “branch if less than”</b>: build it with slt + beq/bne against $zero (blt/bge/bgt/ble are assembler pseudo-instructions that do exactly this using $at).</p>' +
          '<ul><li><b>Simple if:</b> branch past the body on the opposite condition.</li><li><b>if/else:</b> branch to Else on the opposite condition; the if-block ends with <code>j Done</code> — without it the if-block would fall through into the else-block.</li>' +
          '<li><b>Ordering:</b> a &lt; b → <code>slt $t3,$t0,$t1</code>; a &gt; b is b &lt; a → flip the operands: <code>slt $t3,$t1,$t0</code>; a ≥ b is NOT(a &lt; b) → branch on $t3 == 0.</li>' +
          '<li><b>Even/odd (portal):</b> <code>andi $t0, $v0, 1</code> gives 0 for even, 1 for odd (or div by 2 and mfhi).</li></ul>' +
          '<div class="table-wrap"><table><tr><th>C condition (run body when)</th><th>MIPS to SKIP the body</th></tr><tr><td>a == b</td><td>bne a, b, Skip</td></tr><tr><td>a != b</td><td>beq a, b, Skip</td></tr><tr><td>a &lt; b</td><td>slt t, a, b ; beq t, $zero, Skip</td></tr><tr><td>a &gt;= b</td><td>slt t, a, b ; bne t, $zero, Skip</td></tr><tr><td>a &gt; b</td><td>slt t, b, a ; beq t, $zero, Skip</td></tr><tr><td>a &lt;= b</td><td>slt t, b, a ; bne t, $zero, Skip</td></tr></table></div>',
        keypoints: ['Only beq, bne (+ slt) are real conditional branches.', 'if/else needs j Done after the if-block.', 'a > b ≡ b < a: swap slt operands.', 'Parity: andi x, 1.'],
        diagrams: [{ id: 'D12.2a', title: 'Max of two: flowchart and MIPS', svg: maxFlow, how: 'Start oval → diamond “a > b?” → yes box c = a, no box c = b → both arrows merge at Done; write the matching MIPS beside it.' }],
        code: [
          { id: 'C12.2a', title: 'Simple if (class)', lang: 'mips', src: '# if (a == b) c = a + b;     $t0 = a, $t1 = b, $t2 = c\n    bne  $t0, $t1, Skip     # reversed: skip if NOT equal\n    add  $t2, $t0, $t1\nSkip:\n    # continue', io: '<pre>a = 4, b = 4 → c = 8;  a = 4, b = 5 → c unchanged</pre>' },
          { id: 'C12.2b', title: 'if / else (class)', lang: 'mips', src: '# if (a == b) c = 1; else c = 0;\n    bne  $t0, $t1, Else\n    li   $t2, 1             # c = 1\n    j    Done               # essential: skip the else block\nElse:\n    li   $t2, 0             # c = 0\nDone:', io: '<pre>a == b → c = 1;  a != b → c = 0</pre>' },
          { id: 'C12.2c', title: 'The slt idiom: if (a < b) (class)', lang: 'mips', src: '    slt  $t3, $t0, $t1      # t3 = (a < b)\n    beq  $t3, $zero, Skip   # flag 0 (a >= b) → skip\n    # body runs only when a < b\nSkip:', io: '<pre>a = 2, b = 7 → body runs;  a = 7, b = 2 → skipped</pre>' },
          { id: 'C12.2d', title: 'Max of two (class worked example)', lang: 'mips', src: '# if (a > b) c = a; else c = b;    $t0 = a, $t1 = b, $t2 = c\n    slt  $t3, $t1, $t0      # t3 = (b < a) = (a > b)\n    beq  $t3, $zero, Else\n    move $t2, $t0           # c = a\n    j    Done\nElse:\n    move $t2, $t1           # c = b\nDone:', io: '<pre>a = 9, b = 4 → c = 9;  a = 3, b = 8 → c = 8;  a = b = 5 → c = 5 (else branch)</pre>' },
          { id: 'C12.2e', title: 'Even or odd (portal, 23 Sep)', lang: 'mips', src: '.data\neven: .asciiz "Even"\nodd:  .asciiz "Odd"\n.text\n.globl main\nmain:\n    li   $v0, 5            # read integer\n    syscall\n    andi $t0, $v0, 1       # 0 if even, 1 if odd\n    bne  $t0, $zero, print_odd\nprint_even:\n    la   $a0, even\n    li   $v0, 4\n    syscall\n    j    end\nprint_odd:\n    la   $a0, odd\n    li   $v0, 4\n    syscall\nend:\n    li   $v0, 10\n    syscall', io: '<pre>input 2 → Even;  input 7 → Odd;  input −3 → Odd (two\'s complement LSB = 1)</pre>' }],
        mistakes: ['Missing j Done → the if-block falls into the else-block.', 'Using slt $t3,$t0,$t1 for a > b (operands must be swapped).', 'Writing blt as if it were a real instruction in an encoding question.'],
        practice: [
          mcq('Which instruction pair implements “if (a > b) goto L” with a in $t0 and b in $t1?', ['slt $t2, $t0, $t1 ; bne $t2, $zero, L', 'slt $t2, $t1, $t0 ; bne $t2, $zero, L', 'slt $t2, $t1, $t0 ; beq $t2, $zero, L', 'beq $t0, $t1, L'], 1, 'a > b ≡ b < a; branch when the flag is 1.', ['That is a < b.', 'Correct.', 'That branches when a <= b.', 'Equality.'], 'From class slides'),
          mcq('In the class if/else translation, what happens if “j Done” is removed?', ['nothing changes', 'the if-block falls through into the else-block, so c always ends as 0', 'an assembler error', 'the else-block never runs'], 1, 'c = 1 then c = 0.', ['No.', 'Correct.', 'It assembles.', 'It runs after the if-block.'], 'From class slides'),
          txt('Which single instruction tests parity of $v0 into $t0 in the portal solution? (write it)', ['andi $t0, $v0, 1', 'andi $t0,$v0,1'], 'AND with 1 keeps only the LSB.', 'Lab question'),
          nat('After: slt $t3, $t1, $t0 with $t0 = 5, $t1 = 9, what is $t3?', 0, 0, 'Is 9 < 5? No → 0.'),
          mcq('Which real instructions does the pseudo-instruction bge $t0, $t1, L expand to?', ['slt $at, $t0, $t1 ; beq $at, $zero, L', 'slt $at, $t1, $t0 ; bne $at, $zero, L', 'sub $at, $t0, $t1 ; bgez $at, L', 'beq $t0, $t1, L'], 0, 'a >= b ⇔ NOT(a < b).', ['Correct.', 'That is bgt.', 'Not the MARS expansion (and overflow-prone).', 'Equality only.'], 'Lab question')
        ],
        subjective: [sub('Translate into MIPS (a in $t0, b in $t1, c in $t2): if (a > b) c = a; else c = b; Draw the flowchart and explain why j Done is needed. (5 marks)', '<p>C12.2d + D12.2a. j Done prevents falling into the else-block.</p>', 5, ['3 — correct code', '1 — flowchart', '1 — explanation'], ['D12.2a'])]
      },
      {
        id: '12.3', title: 'Loops: while and for', badge: 'class', sources: '[C2M] p12-14; [SP3] Sum 0–9, Factorial, Fibonacci, Array problems; [ART]',
        keywords: 'while loop for loop sum factorial fibonacci array sum max mips',
        explain: '<p><b>Loop skeleton:</b> <code>Loop:</code> label → <b>test at the top</b> (branch OUT to End on the reversed condition) → body → increment → <code>j Loop</code> → <code>End:</code>. A <b>for</b> loop is a while loop with the init before the label and the increment before the jump back.</p>' +
          '<p><b>Slide correction:</b> the class while slide tests <code>blt $t1, $t0, End</code> (exit when n &lt; i), which runs one extra iteration when i == n. The correct exit for <code>while (i &lt; n)</code> is <code>bge $t0, $t1, End</code> (or <code>slt $t2,$t0,$t1</code> ; <code>beq $t2,$zero,End</code>).</p>' +
          '<ul><li><b>Counting down:</b> factorial uses a counter that decrements to 0 — test <code>beq $t1, $zero, done</code> at the top.</li>' +
          '<li><b>Arrays:</b> either keep an index and compute base + 4i each time, or keep a pointer and add 4 per iteration.</li>' +
          '<li><b>mul</b> rd, rs, rt is a real MIPS32 instruction (low 32 bits); <b>subi</b> is a MARS pseudo-instruction for addi with a negative immediate.</li></ul>',
        keypoints: ['Test at top, branch out on the reversed condition.', 'for: init | test | body | increment | j back.', 'while (i < n) → bge $t0, $t1, End.', 'Array step = 4 bytes per word.'],
        diagrams: [{ id: 'D12.3a', title: 'Loop skeleton flowchart', svg: loopFlow, how: 'Init box, then a diamond (condition) under the Loop label; yes → body → increment → arrow back up to the diamond; no → End.' }],
        code: [
          { id: 'C12.3a', title: 'while (i < n) { sum += i; i++; } — corrected exit test', lang: 'mips', src: '# $t0 = i, $t1 = n, $s0 = sum\nLoop:\n    bge  $t0, $t1, End      # exit when i >= n  (class slide: blt $t1,$t0,End — off by one)\n    add  $s0, $s0, $t0      # sum += i\n    addi $t0, $t0, 1        # i++\n    j    Loop\nEnd:', io: '<pre>i = 0, n = 4 → sum = 0 + 1 + 2 + 3 = 6 (slide version would also add 4 → 10)</pre>' },
          { id: 'C12.3b', title: 'for (i = 0; i < 10; i++) sum += i; (class)', lang: 'mips', src: '    li   $t0, 0             # i = 0           (init)\nLoop:\n    slti $t2, $t0, 10       # i < 10 ?        (condition)\n    beq  $t2, $zero, End\n    add  $s0, $s0, $t0      # sum += i        (body)\n    addi $t0, $t0, 1        # i++             (increment)\n    j    Loop\nEnd:', io: '<pre>sum = 45 (if $s0 starts at 0)</pre>' },
          { id: 'C12.3c', title: 'Sum from 0 to 9 (portal, 28 Sep)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $t0, 0             # counter\n    li   $t1, 0             # sum\nloop:\n    beq  $t0, 10, done      # MARS accepts an immediate here (pseudo: li $at,10 ; beq)\n    add  $t1, $t1, $t0\n    addi $t0, $t0, 1\n    j    loop\ndone:\n    move $a0, $t1\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>45</pre>' },
          { id: 'C12.3d', title: 'Iterative factorial of 5 (portal)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $t0, 1             # result = 1\n    li   $t1, 5             # counter = 5\nloop:\n    beq  $t1, $zero, done   # stop when counter = 0\n    mul  $t0, $t0, $t1      # result *= counter\n    subi $t1, $t1, 1        # counter-- (pseudo for addi $t1,$t1,-1)\n    j    loop\ndone:\n    move $a0, $t0\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>120</pre>' },
          { id: 'C12.3e', title: 'Iterative factorial of n (portal)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t1, $v0           # counter = n\n    li   $t0, 1             # result = 1\nloop:\n    ble  $t1, $zero, done   # while counter > 0\n    mul  $t0, $t0, $t1\n    sub  $t1, $t1, 1\n    j    loop\ndone:\n    move $a0, $t0\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>5 → 120;  0 → 1;  10 → 3628800;  13 → wrong (13! overflows 32 bits)</pre>' },
          { id: 'C12.3f', title: 'Fibonacci F(0) to F(n), iterative (portal)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0           # n\n    li   $t1, 0             # prev = F(0)\n    li   $t2, 1             # curr = F(1)\n    li   $t3, 0             # i = 0\nloop:\n    bgt  $t3, $t0, exit     # stop when i > n\n    move $a0, $t1           # print F(i)\n    li   $v0, 1\n    syscall\n    li   $a0, 32            # print a space (ASCII 32)\n    li   $v0, 11\n    syscall\n    add  $t4, $t1, $t2      # next = prev + curr\n    move $t1, $t2\n    move $t2, $t4\n    addi $t3, $t3, 1\n    j    loop\nexit:\n' + exitSeq, io: '<pre>input 5 → 0 1 1 2 3 5</pre>' },
          { id: 'C12.3g', title: 'Print the first element of an array (portal)', lang: 'mips', src: readArr + '    lw   $a0, 0($s1)        # arr[0]: offset 0 from the base\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>5 / 10 20 30 40 50 → 10</pre>' },
          { id: 'C12.3h', title: 'Sum of array elements (portal)', lang: 'mips', src: readArr + '    li   $t0, 0             # i\n    li   $t3, 0             # sum\n    move $t4, $s1           # pointer p = &arr[0]\nsum_loop:\n    beq  $t0, $s0, sum_done\n    lw   $t5, 0($t4)        # *p\n    add  $t3, $t3, $t5\n    addi $t4, $t4, 4        # next word\n    addi $t0, $t0, 1\n    j    sum_loop\nsum_done:\n    move $a0, $t3\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>5 / 10 20 30 40 50 → 150</pre>' },
          { id: 'C12.3i', title: 'Maximum element in an array (portal)', lang: 'mips', src: readArr + '    lw   $t3, 0($s1)        # max = arr[0]\n    li   $t0, 1             # i = 1\nmax_loop:\n    bge  $t0, $s0, max_done\n    sll  $t1, $t0, 2\n    add  $t2, $s1, $t1\n    lw   $t4, 0($t2)        # x = arr[i]\n    slt  $t5, $t3, $t4      # max < x ?\n    beq  $t5, $zero, no_upd\n    move $t3, $t4           # max = x\nno_upd:\n    addi $t0, $t0, 1\n    j    max_loop\nmax_done:\n    move $a0, $t3\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>5 / 10 20 30 40 50 → 50;   4 / −7 3 −1 2 → 3</pre>' },
          { id: 'C12.3j', title: 'Σ k(k + 1) for k = 1 to n (MIPS teaching guide exercise)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $v0, 5\n    syscall\n    move $t0, $v0           # n\n    li   $t1, 1             # k = 1\n    li   $t2, 0             # total\nloop:\n    bgt  $t1, $t0, done\n    addi $t3, $t1, 1        # k + 1\n    mul  $t3, $t3, $t1      # k(k + 1)\n    add  $t2, $t2, $t3\n    addi $t1, $t1, 1\n    j    loop\ndone:\n    move $a0, $t2\n    li   $v0, 1\n    syscall\n' + exitSeq, io: '<pre>n = 5 → 2 + 6 + 12 + 20 + 30 = 70;   n = 3 → 20   (closed form n(n+1)(n+2)/3)</pre>' }],
        mistakes: ['Testing the loop condition at the bottom without an initial check (body runs even when n = 0).', 'Off-by-one exit test (the class slide\'s blt $t1,$t0).', 'Stepping an array pointer by 1 instead of 4.'],
        practice: [
          mcq('For while (i < n) with i in $t0 and n in $t1, the correct loop-exit test at the top is:', ['blt $t1, $t0, End', 'bge $t0, $t1, End', 'beq $t0, $t1, Loop', 'bgt $t0, $t1, End'], 1, 'Exit as soon as i >= n.', ['Off by one (slide version).', 'Correct.', 'Wrong logic.', 'Misses i == n.'], 'From class slides (with correction)'),
          nat('How many times does the body of the class for loop (i = 0; i < 10; i++) execute?', 10, 0, 'i = 0 to 9.', 'From class slides'),
          nat('The Σk(k + 1) program is run with n = 4. Output?', 40, 0, '2 + 6 + 12 + 20 = 40.'),
          nat('The portal Fibonacci program is given n = 7. What is the last number printed?', 13, 0, 'F(7) = 13 (0 1 1 2 3 5 8 13).', 'Lab question'),
          mcq('In the array-sum program using a pointer, why is the pointer incremented by 4?', ['to skip every other element', 'each .word occupies 4 bytes and MIPS addresses bytes', 'because $t4 holds a halfword', 'to align the stack'], 1, 'Byte addressing.', ['No.', 'Correct.', 'No.', 'No.']),
          nat('With the class slide\'s while loop (exit test blt $t1, $t0, End), i = 0, n = 3, sum starts at 0. What is sum at End?', 6, 0, 'It runs for i = 0, 1, 2, 3 (extra iteration when i == n): 0+1+2+3 = 6. The correct loop gives 3.')
        ],
        subjective: [sub('Translate into MIPS: int sum = 0; for (i = 0; i < n; i++) sum = sum + A[i]; (A base in $s1, n in $s0). Explain each part of the loop. (5 marks)', '<p>Init i = 0, sum = 0; Loop: bge i, n, End (or slt + beq); sll t1, i, 2; add t2, s1, t1; lw t3, 0(t2); add sum, sum, t3; addi i, i, 1; j Loop; End. (C12.3h pattern.)</p>', 5, ['1 — init', '1 — test', '2 — body with address calculation', '1 — increment/jump'], ['D12.3a'])]
      },
      {
        id: '12.4', title: 'Calling Convention: $a, $v, $ra', badge: 'class', sources: '[C2M] p15-17; [FMT] p9',
        keywords: 'calling convention arguments a0 a3 return v0 v1 jal jr ra caller callee',
        explain: '<ul><li><b>Arguments</b> go in <b>$a0–$a3</b> (four slots; more go on the stack). <b>Return values</b> come back in <b>$v0–$v1</b> (usually just $v0).</li>' +
          '<li><b>jal Label</b> = jump and link: saves the return address (<b>PC + 4</b>) in <b>$ra</b>, then jumps. <b>jr $ra</b> jumps back to the instruction after the jal. Together = call/return (exam favourite).</li>' +
          '<li><b>Register preservation:</b> $t registers may be clobbered by the callee (caller saves them if it needs them); $s registers must be preserved by the callee.</li>' +
          '<li><b>Five-part function template:</b> (1) prologue — allocate stack, save $ra and any $s used; (2) base case / work; (3) calls; (4) combine; (5) epilogue — restore, deallocate, <code>jr $ra</code>.</li></ul>',
        keypoints: ['$a0–$a3 in, $v0–$v1 out.', 'jal: $ra ← PC + 4, then jump.', 'jr $ra returns.', '$t caller-saved, $s callee-saved.'],
        diagrams: [{ id: 'D12.4a', title: 'Caller / callee register flow', svg: callFlow, how: 'Two boxes (caller, callee); arrows right labelled $a0–$a3 and jal; arrows left labelled $v0 and jr $ra; number the six steps.' }],
        code: [{ id: 'C12.4a', title: 'sum(n): add 1 to n inside a function (class homework)', lang: 'mips', src: '.text\n.globl main\nmain:\n    li   $a0, 10            # argument n = 10\n    jal  sum                # $ra = address of the next instruction\n    move $a0, $v0           # result\n    li   $v0, 1\n    syscall                 # prints 55\n    li   $v0, 10\n    syscall\n\n# int sum(int n) { int s = 0; for (int i = 1; i <= n; i++) s += i; return s; }\nsum:                        # leaf: calls nothing, uses only $t / $v → no stack needed\n    li   $v0, 0             # s = 0\n    li   $t0, 1             # i = 1\nsum_loop:\n    bgt  $t0, $a0, sum_done\n    add  $v0, $v0, $t0\n    addi $t0, $t0, 1\n    j    sum_loop\nsum_done:\n    jr   $ra                # return to main', io: '<pre>55</pre>' }],
        mistakes: ['Returning the result in $a0 instead of $v0.', 'Calling another function without saving $ra first (it gets overwritten).', 'Expecting $t registers to survive a call.'],
        practice: [
          mcq('jal does two things. Which?', ['saves PC + 4 in $ra and jumps to the label', 'pushes $ra on the stack and jumps', 'saves PC in $sp and branches', 'jumps and clears $ra'], 0, 'Link + jump.', ['Correct.', 'The stack is software\'s job.', 'No.', 'No.'], 'From class slides'),
          mcq('Where does a MIPS function put its integer return value?', ['$a0', '$v0', '$ra', '$sp'], 1, 'Return values in $v0 (and $v1).', ['Argument.', 'Correct.', 'Return address.', 'Stack pointer.'], 'From class slides'),
          nat('jal sum is at address 0x00400020. What value is written into $ra?', 4194340, 0, 'PC + 4 = 0x00400024 = 4194340 decimal.'),
          msq('Which registers must a callee preserve (restore before jr $ra) if it changes them? (select all)', ['$s0–$s7', '$sp', '$t0–$t9', '$ra (if it makes its own calls)'], [0, 1, 3], '$t are caller-saved.', ['Yes.', 'Yes — the stack must be balanced.', 'No.', 'Yes.'])
        ],
        subjective: [sub('Explain the MIPS calling convention with a diagram: how are arguments passed, results returned and the return address handled? Write a function sum(n) and a call to it. (5 marks)', '<p>D12.4a; $a0–$a3, $v0–$v1, jal/jr $ra; $t vs $s; code C12.4a.</p>', 5, ['2 — diagram', '1 — conventions', '2 — code'], ['D12.4a'])]
      },
      {
        id: '12.5', title: 'Stack Frames: Leaf vs Non-Leaf', badge: 'class', sources: '[C2M] p18-23 (stack, recursive factorial, fact(3) frames); leaf example researched (Patterson & Hennessy leaf_example)',
        keywords: 'stack frame leaf non leaf recursion factorial fibonacci sp push pop save ra',
        explain: '<ul><li><b>The stack grows downward:</b> pushing DECREASES $sp. <code>addi $sp, $sp, -8</code> makes room for two words; <code>addi $sp, $sp, 8</code> pops them. Down to push, up to pop.</li>' +
          '<li><b>Leaf function:</b> calls no other function. If it uses only $t/$a/$v registers it needs no stack at all; if it uses $s registers it saves and restores them.</li>' +
          '<li><b>Non-leaf function:</b> calls another function (or itself). jal overwrites $ra, so a non-leaf <b>must save $ra</b> — plus any argument or $s value it still needs after the call.</li>' +
          '<li><b>Recursive factorial (class):</b> each call saves its own $ra and $a0 (n) in an 8-byte frame. fact(3) → fact(2) → fact(1): <b>3 frames at peak</b>, then the unwind: fact(1) returns 1, fact(2) = 2 × 1 = 2, fact(3) = 3 × 2 = 6. Each level restores its n and $ra, multiplies, pops, returns.</li>' +
          '<li><b>Common mistakes slide:</b> reverse the condition, save $ra in non-leaf functions, A[i] = base + 4i, no real blt, keep the stack balanced, save $s registers.</li></ul>',
        keypoints: ['Push: addi $sp,$sp,-4k then sw; pop: lw then addi $sp,$sp,4k.', 'Non-leaf must save $ra.', 'fact(n) frame = 8 bytes ($ra + n).', 'fact(3) peak = 3 frames = 24 bytes.'],
        diagrams: [{ id: 'D12.5a', title: 'The stack grows downward', svg: stackDown, how: 'A tall rectangle: high addresses at the top (older frames), then saved $ra, saved $s0, local variable; arrow for $sp pointing at the lowest used word; write the push/pop code.' },
          { id: 'D12.5b', title: 'fact(3): frames at the deepest point and the unwind', svg: factFrames, how: 'Three stacked frames (fact(3), fact(2), fact(1)), each holding saved $ra and n; $sp arrow at the bottom frame; list the three unwind steps.' }],
        code: [
          { id: 'C12.5a', title: 'Leaf function that uses $s0 (Patterson & Hennessy leaf_example)', lang: 'mips', src: '# int leaf(int g, int h, int i, int j) { int f = (g + h) - (i + j); return f; }\nleaf:\n    addi $sp, $sp, -4       # room for one word\n    sw   $s0, 0($sp)        # $s0 is callee-saved: preserve it\n    add  $t0, $a0, $a1      # g + h\n    add  $t1, $a2, $a3      # i + j\n    sub  $s0, $t0, $t1      # f\n    move $v0, $s0           # return f\n    lw   $s0, 0($sp)        # restore\n    addi $sp, $sp, 4\n    jr   $ra                # no jal inside → $ra was never overwritten', io: '<pre>leaf(5, 6, 1, 2) → 8</pre>' },
          { id: 'C12.5b', title: 'Recursive factorial — full program (class slide)', lang: 'mips', src: '# int fact(int n) { if (n <= 1) return 1; return n * fact(n - 1); }\n.text\n.globl main\nmain:\n    li   $v0, 5             # read n\n    syscall\n    move $a0, $v0\n    jal  fact\n    move $s0, $v0           # result (class slide stops here)\n    move $a0, $s0           # print it\n    li   $v0, 1\n    syscall\n    li   $v0, 10\n    syscall\n\nfact:\n    # 1. prologue: allocate frame, save $ra and n\n    addi $sp, $sp, -8\n    sw   $ra, 4($sp)\n    sw   $a0, 0($sp)\n    # 2. base case: n <= 1\n    li   $t0, 1\n    ble  $a0, $t0, base_case\n    # 3. recursive step: fact(n - 1)\n    addi $a0, $a0, -1\n    jal  fact\n    # 4. combine\n    lw   $a0, 0($sp)        # restore this level\'s n\n    mul  $v0, $a0, $v0      # n * fact(n - 1)\n    j    fact_exit\nbase_case:\n    li   $v0, 1\nfact_exit:\n    # 5. epilogue\n    lw   $ra, 4($sp)\n    addi $sp, $sp, 8\n    jr   $ra', io: '<pre>3 → 6;  5 → 120;  1 → 1</pre>' },
          { id: 'C12.5c', title: 'Recursive Fibonacci (two recursive calls → also save $s0)', lang: 'mips', src: '# int fib(int n) { if (n < 2) return n; return fib(n - 1) + fib(n - 2); }\nfib:\n    addi $sp, $sp, -12\n    sw   $ra, 8($sp)\n    sw   $s0, 4($sp)        # will hold fib(n - 1) across the second call\n    sw   $a0, 0($sp)\n    slti $t0, $a0, 2\n    beq  $t0, $zero, fib_rec\n    move $v0, $a0           # base: fib(0) = 0, fib(1) = 1\n    j    fib_exit\nfib_rec:\n    addi $a0, $a0, -1\n    jal  fib                # fib(n - 1)\n    move $s0, $v0\n    lw   $a0, 0($sp)\n    addi $a0, $a0, -2\n    jal  fib                # fib(n - 2)\n    add  $v0, $s0, $v0\nfib_exit:\n    lw   $a0, 0($sp)\n    lw   $s0, 4($sp)\n    lw   $ra, 8($sp)\n    addi $sp, $sp, 12\n    jr   $ra', io: '<pre>fib(6) = 8;  fib(10) = 55</pre>' }],
        mistakes: ['Not saving $ra in a function that calls another (returns to the wrong place / infinite loop).', 'Unbalanced stack: pushing 8 bytes and popping 4.', 'Restoring n from $a0 after the recursive call instead of from the stack (the call changed $a0).'],
        practice: [
          mcq('Why must the recursive fact function save $ra on the stack?', ['jr needs $sp', 'the recursive jal overwrites $ra, losing the return address to its caller', '$ra is caller-saved', 'to pass n'], 1, 'Exit ticket Q3: non-leaf must save $ra.', ['No.', 'Correct.', 'Not the reason.', 'n is in $a0.'], 'From class slides'),
          nat('How many stack frames exist at the deepest point of fact(4) with the class code?', 4, 0, 'fact(4), fact(3), fact(2), fact(1).', 'From class slides'),
          nat('Each fact frame is 8 bytes. How many bytes of stack are used at the peak of fact(5)?', 40, 0, '5 frames × 8.'),
          mcq('Which instruction PUSHES space for 3 words on the MIPS stack?', ['addi $sp, $sp, 12', 'addi $sp, $sp, -12', 'sw $sp, 12($sp)', 'subi $ra, $ra, 12'], 1, 'The stack grows downward.', ['That pops.', 'Correct.', 'No.', 'No.'], 'From class slides'),
          mcq('A leaf function that uses only $t0–$t2 and $v0:', ['must save $ra', 'needs no stack frame at all', 'must save all $t registers', 'cannot return a value'], 1, 'Nothing callee-saved is touched and no jal overwrites $ra.', ['Not a non-leaf.', 'Correct.', 'Caller-saved.', 'Returns in $v0.'])
        ],
        subjective: [sub('Write the recursive factorial function in MIPS and draw the stack frames during fact(3). Explain why $ra and $a0 are saved. (5 marks)', '<p>C12.5b; D12.5b; jal overwrites $ra; the recursive call changes $a0 but n is needed for the multiply.</p>', 5, ['2 — code', '2 — frames', '1 — reason'], ['D12.5a', 'D12.5b'])]
      }
    ]
  });
})();
