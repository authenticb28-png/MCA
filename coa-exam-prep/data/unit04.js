/* Unit 4 – Number Systems & Two's Complement */
(function () {
  const { mcq, msq, nat, txt, sub } = window.QH;

  const weights = S.grid([['bit', '1', '0', '1', '1', '0', '1', 'value'], ['weight', '32', '16', '8', '4', '2', '1', ''], ['contrib.', '32', '0', '8', '4', '0', '1', '= 45']], { cw: [70, 46, 46, 46, 46, 46, 46, 70], title: 'Positional notation: 101101₂ = 45₁₀', hl: [[1, 1], [1, 3], [1, 4], [1, 6]] });

  const wheel = (function () {
    const cx = 210, cy = 200, R = 150;
    let s = '<circle class="box" cx="' + cx + '" cy="' + cy + '" r="' + R + '"/>' + '<circle class="box2" cx="' + cx + '" cy="' + cy + '" r="' + (R - 52) + '"/>';
    for (let k = 0; k < 16; k++) {
      const a = (-90 + k * 22.5) * Math.PI / 180, x = cx + Math.cos(a) * (R - 22), y = cy + Math.sin(a) * (R - 22);
      const xs = cx + Math.cos(a) * (R + 22), ys = cy + Math.sin(a) * (R + 22), xi = cx + Math.cos(a) * (R - 68), yi = cy + Math.sin(a) * (R - 68);
      const signed = k < 8 ? k : k - 16;
      s += S.tc(x, y + 4, k.toString(2).padStart(4, '0'), 'xs mono b') + S.tc(xs, ys + 4, (signed > 0 ? '+' : '') + signed, 'sm b') + S.tc(xi, yi + 4, String(k), 'xs muted');
    }
    const a1 = (-90 + 7.5 * 22.5) * Math.PI / 180;
    s += '<line class="hl" x1="' + (cx + Math.cos(a1) * (R - 52)) + '" y1="' + (cy + Math.sin(a1) * (R - 52)) + '" x2="' + (cx + Math.cos(a1) * (R + 40)) + '" y2="' + (cy + Math.sin(a1) * (R + 40)) + '"/>';
    s += S.t(cx + 50, cy + R + 50, '+7 → −8: signed overflow boundary', 'xs hltxt');
    s += S.tc(cx, cy - 6, 'outer: signed (2\'s comp.)', 'xs b') + S.tc(cx, cy + 10, 'ring: bit pattern', 'xs b') + S.tc(cx, cy + 26, 'inner: unsigned', 'xs muted');
    s += S.t(10, 14, '1111 → 0000 (−1 → 0): unsigned carry-out', 'xs b');
    return S.svg(430, 420, s, '4-bit two\'s complement number wheel');
  })();

  const sext = (function () {
    let s = '';
    for (let i = 0; i < 4; i++) { const x = 300 + i * 50; s += S.box(x, 20, 40, 30, 'a' + (3 - i), i === 0 ? 'boxa' : 'box', 'sm b'); }
    for (let i = 0; i < 8; i++) { const x = 100 + i * 50; s += S.box(x, 130, 40, 30, 'y' + (7 - i), i <= 4 ? 'boxa' : 'box', 'sm b'); }
    for (let i = 1; i < 4; i++) s += S.a([[320 + i * 50, 50], [320 + i * 50, 130]], 'arr');
    s += S.a([[320, 50], [320, 130]], 'hl');
    [120, 170, 220, 270].forEach((x) => (s += S.a([[320, 90], [x, 90], [x, 130]], 'hl')));
    s += S.t(10, 186, 'y = {{4{a[3]}}, a}: the sign bit a3 is copied into every new upper bit. −5 = 1011 → 1111 1011; +5 = 0101 → 0000 0101.', 'xs b');
    return S.svg(520, 195, s, 'sign extension 4 to 8 bits');
  })();

  const addsub = (function () {
    let s = '';
    for (let i = 0; i < 4; i++) {
      const x = 430 - i * 130;
      const g = S.gate('XOR', x + 10, 70, { h: 30 });
      s += g.svg + S.t(g.in[0][0] - 2, g.in[0][1] - 4, 'B' + i, 'xs b', 'end');
      s += S.p([[g.in[1][0] - 6, g.in[1][1]], g.in[1]]) + S.p([[g.in[1][0] - 6, g.in[1][1]], [g.in[1][0] - 6, 40]]) + S.dot(g.in[1][0] - 6, 40);
      s += S.box(x, 130, 90, 50, 'FA', 'boxa');
      s += S.a([g.out, [g.out[0] + 6, 70], [g.out[0] + 6, 110], [x + 65, 110], [x + 65, 130]], 'arr');
      s += S.a([[x + 25, 20], [x + 25, 130]], 'arr') + S.tc(x + 25, 14, 'A' + i, 'xs b');
      s += S.a([[x + 45, 180], [x + 45, 210]], 'arr') + S.tc(x + 45, 222, 'S' + i, 'sm b');
      if (i < 3) s += S.a([[x, 160], [x - 40, 160]], 'arr') + S.tc(x - 20, 152, 'C' + (i + 1), 'xs b');
    }
    s += S.p([[20, 40], [560, 40]], 'ctl') + S.t(565, 44, 'K', 'sm b');
    s += S.a([[560, 40], [560, 160], [520, 160]], 'ctl') + S.t(540, 176, 'Cin = K', 'xs ctltxt');
    s += S.a([[40, 160], [10, 160]], 'arr') + S.t(4, 150, 'C4', 'xs b');
    s += S.t(10, 245, 'K = 0: B passes, Cin = 0 → A + B.   K = 1: B inverted, Cin = 1 → A + B\' + 1 = A − B.', 'xs b');
    return S.svg(600, 255, s, '4-bit adder-subtractor');
  })();

  const ovf = (function () {
    let s = S.box(240, 60, 110, 70, 'FA3 (MSB)', 'boxa') + S.box(400, 60, 90, 70, 'FA2', 'box');
    s += S.a([[400, 95], [350, 95]], 'arr') + S.tc(375, 88, 'C3', 'xs b');
    s += S.a([[240, 95], [150, 95]], 'arr') + S.tc(195, 88, 'C4', 'xs b');
    s += S.p([[375, 95], [375, 170], [140, 170]]) + S.dot(375, 95) + S.p([[170, 95], [170, 150], [140, 150]]) + S.dot(170, 95);
    const x = S.gate('XOR', 90, 160, { stub: 0 });
    s += x.svg.replace(/stroke/, 'stroke') + S.p([[140, 150], [x.in[1][0] + 20, 150]]) + S.t(84, 164, 'V', 'b', 'end');
    s = S.box(240, 60, 110, 70, 'FA3 (MSB)', 'boxa') + S.box(400, 60, 90, 70, 'FA2', 'box') + S.a([[400, 95], [350, 95]], 'arr') + S.tc(375, 88, 'C3 (into MSB)', 'xs b') + S.a([[240, 95], [120, 95]], 'arr') + S.t(60, 99, 'C4 = CF', 'sm b');
    const g = S.gate('XOR', 160, 170);
    s += g.svg + S.p([[375, 95], [375, 162], g.in[1]]) + S.dot(375, 95) + S.p([[200, 95], [200, 130], [140, 130], [140, g.in[0][1]], g.in[0]]) + S.dot(200, 95);
    s = s.replace(S.p([[375, 95], [375, 162], g.in[1]]), S.p([[375, 95], [375, 178], g.in[1]]));
    s += S.t(g.out[0] - 30, 206, 'V = OF = C3 ⊕ C4 (signed overflow)', 'b');
    s += S.t(10, 228, 'CF (unsigned overflow) = C4 alone.  Same adder, two flags — the instruction decides which one matters.', 'xs muted');
    return S.svg(520, 235, s, 'overflow detection at the MSB');
  })();

  UNITS.push({
    id: 4, title: 'Number Systems & Two\'s Complement', short: 'Numbers & 2\'s Complement',
    intro: 'What the bits in an adder actually mean: binary, hex, signed representations, two\'s complement, sign extension and overflow. Lecture L05 and Lab 5 (adder-subtractor, overflow flags).',
    subtopics: [
      {
        id: '4.1', title: 'Number Systems: Binary, Decimal, Hex Conversions', badge: 'class', sources: '[L05] p4-10',
        keywords: 'binary decimal hexadecimal octal conversion powers of two',
        explain: '<p><b>Analogy:</b> an odometer — each wheel is worth “base” times the wheel to its right. Decimal wheels are worth 1, 10, 100; binary wheels 1, 2, 4, 8; hex wheels 1, 16, 256.</p>' +
          '<ul><li><b>Positional value:</b> digit × base^position. 237₁₀ = 2·100 + 3·10 + 7; 101101₂ = 32 + 8 + 4 + 1 = 45.</li>' +
          '<li><b>Binary → decimal:</b> add the weights of the 1 bits. <b>Decimal → binary:</b> repeated division by 2, read remainders bottom-up (42 → 101010). Fractions: repeated ×2, read the integer parts top-down (0.625 → 0.101).</li>' +
          '<li><b>Hex:</b> one hex digit = exactly 4 bits (a nibble); A=10, B=11, C=12, D=13, E=14, F=15. Group binary from the right in 4s: 1011 0101 = 0xB5 = 181. Two hex digits = one byte (colours #FF8800, addresses). <b>Octal</b> groups 3 bits.</li>' +
          '<li><b>Powers of 2:</b> 2¹⁰ = 1024 (1 Ki), 2²⁰ ≈ 1 M, 2³⁰ ≈ 1 G, 2⁴⁰ ≈ 1 T. An n-bit unsigned number covers 0 to 2ⁿ − 1 (8 bits: 0–255; 32 bits ≈ 4.3 billion — the YouTube counter limit).</li></ul>',
        keypoints: ['Hex ↔ binary: 1 hex digit = 4 bits; octal = 3 bits.', 'Decimal → binary: ÷2, remainders read upward.', 'n bits unsigned: 0 to 2ⁿ − 1.', '0x2A = 0010 1010 = 42; 0xB5 = 181; 0xFF = 255.'],
        diagrams: [{ id: 'D4.1a', title: 'Positional weights', svg: weights, how: 'Write the bits, the powers of 2 underneath, and add the weights where the bit is 1.' }],
        tool: 'numconv',
        examples: [{ title: '42 → binary by repeated division', html: '<pre>42 ÷ 2 = 21 r0\n21 ÷ 2 = 10 r1\n10 ÷ 2 =  5 r0\n 5 ÷ 2 =  2 r1\n 2 ÷ 2 =  1 r0\n 1 ÷ 2 =  0 r1   → read upward: 101010</pre>' },
          { title: '0x2A to binary and decimal', html: '<p>2 → 0010, A → 1010 → 0010 1010₂ = 32 + 8 + 2 = 42.</p>' },
          { title: '(1217)₈ to hex', html: '<p>Octal → binary (3 bits each): 001 010 001 111 → regroup in 4s: 0010 1000 1111 → <b>0x28F</b> (= 655₁₀).</p>' }],
        mistakes: ['Grouping hex nibbles from the left instead of the right when the bit count is not a multiple of 4.', 'Reading remainders top-down.', 'Treating 0x10 as ten (it is 16).'],
        practice: [
          nat('Convert 101101₂ to decimal.', 45, 0, '32 + 8 + 4 + 1 = 45.', 'From class slides'),
          txt('Convert 181₁₀ to hexadecimal (format 0xNN).', ['0xB5', 'B5', '0xb5', 'b5'], '181 = 11 × 16 + 5 → B5.'),
          txt('Convert (1217)₈ to hexadecimal.', ['0x28F', '28F', '0x28f', '28f'], 'Octal → binary 001010001111 → hex 0010 1000 1111 = 28F.'),
          nat('What is the decimal value of 0.101₂?', 0.625, 0.0001, '1/2 + 0/4 + 1/8 = 0.625.'),
          nat('How many bits are needed to represent unsigned numbers up to 1000?', 10, 0, '2⁹ = 512 < 1000 ≤ 1023 = 2¹⁰ − 1 → 10 bits.')
        ],
        subjective: [sub('Convert (a) 157₁₀ to binary, octal and hex, (b) 0x3E8 to decimal, (c) 10110.011₂ to decimal. Show working. (5 marks)', '<p>(a) 157 = 128 + 16 + 8 + 4 + 1 = 1001 1101₂ = 235₈ (010 011 101) = 0x9D. (b) 3·256 + 14·16 + 8 = 768 + 224 + 8 = 1000. (c) 16 + 4 + 2 + 0.25 + 0.125 = 22.375.</p>', 5, ['2 — (a)', '1.5 — (b)', '1.5 — (c)'])]
      },
      {
        id: '4.2', title: 'Signed Representations Overview', badge: 'class', sources: '[L05] p11-13',
        keywords: 'sign magnitude ones complement signed representation two zeros',
        explain: '<p><b>Analogy:</b> three ways to write “owe money”: a minus-sign flag (sign-magnitude), a mirror image (one\'s complement), and the odometer running backwards from 000 (two\'s complement). Only the odometer makes adding just work.</p>' +
          '<ul><li><b>Sign-magnitude:</b> MSB = sign, rest = magnitude. +18 = 0001 0010, −18 = 1001 0010. ✓ easy to read; ✗ two zeros (0000 0000 and 1000 0000); ✗ addition needs sign comparison logic. Used today only for floating-point sign bits. Range −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1).</li>' +
          '<li><b>One\'s complement:</b> negate by inverting every bit: −18 = 1110 1101. ✓ trivial negation; ✗ still two zeros (0000 0000, 1111 1111); ✗ needs an end-around carry when adding. Same range as sign-magnitude.</li>' +
          '<li><b>Two\'s complement (the winner):</b> invert and add 1: −18 = 1110 1110. One zero, ordinary addition works for every sign, subtraction = add the negative. Range −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1.</li></ul>' +
          '<p>The bits themselves have no meaning: 1111 1111 is 255 unsigned or −1 signed — the <i>instruction</i> decides (e.g. add vs addu, lb vs lbu, slt vs sltu).</p>',
        keypoints: ['Sign-mag & 1\'s comp: two zeros, symmetric range ±(2ⁿ⁻¹ − 1).', '2\'s comp: one zero, range −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1.', '1\'s comp of x = (2ⁿ − 1) − x; 2\'s comp = 2ⁿ − x.', 'Same bits, different meaning depending on the instruction.'],
        mistakes: ['Thinking 1000 0000 is −0 in two\'s complement (it is −128).', 'Forgetting end-around carry in one\'s complement addition.'],
        practice: [
          mcq('Which representation(s) have two encodings of zero?', ['Only sign-magnitude', 'Sign-magnitude and one\'s complement', 'Only two\'s complement', 'All three'], 1, 'S-M: 0000/1000; 1\'s: 0000/1111. 2\'s complement has a single zero.', ['1\'s complement also has two.', 'Correct.', '2\'s complement has one.', 'No.']),
          txt('Write −18 in 8-bit one\'s complement.', ['11101101', '1110 1101'], '+18 = 0001 0010 → invert all bits.', 'From class slides'),
          txt('Write −18 in 8-bit sign-magnitude.', ['10010010', '1001 0010'], 'Sign bit 1, magnitude 0010010.', 'From class slides'),
          nat('Largest positive number in 8-bit sign-magnitude?', 127, 0, '0111 1111 = +127.'),
          mcq('The pattern 1111 1111 interpreted in 8-bit one\'s complement is:', ['−1', '−0', '−127', '255'], 1, 'Inverting gives 0000 0000 → negative zero.', ['That is 2\'s complement.', 'Correct.', 'That is 1000 0000 in 1\'s complement.', 'Unsigned reading.'])
        ],
        subjective: [sub('Represent −23 in 8-bit sign-magnitude, one\'s complement and two\'s complement. Compare the three representations. (5 marks)', '<p>+23 = 0001 0111. S-M: 1001 0111. 1\'s: 1110 1000. 2\'s: 1110 1001. Comparison: S-M and 1\'s have two zeros and need special adder logic (sign compare / end-around carry); 2\'s has one zero, asymmetric range −128 to 127, and one adder does add and subtract — hence universal in CPUs.</p>', 5, ['3 — three encodings', '2 — comparison'])]
      },
      {
        id: '4.3', title: 'Two\'s Complement Deep Dive: Negation and Range', badge: 'class', sources: '[L05] p14-18; [LB5] p5; [SP3] 2\'s Complement Negator; [SP4] quiz 5',
        keywords: 'twos complement negation range msb negative weight',
        explain: '<p><b>Analogy:</b> the number wheel — counting up from 0111 (+7) wraps to 1000 (−8). Negative numbers are just the positions “before zero”.</p>' +
          '<ul><li><b>Negate</b> = invert all bits, then add 1 (works both directions). Shortcut: copy bits from the right up to and including the first 1, invert the rest.</li>' +
          '<li><b>Read</b> a value: MSB has weight <b>−2ⁿ⁻¹</b>. 1110 1110 = −128 + 64 + 32 + 8 + 4 + 2 = −18.</li>' +
          '<li><b>Range</b> −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1: 4 bits −8 to 7; 8 bits −128 to 127; 16 bits −32768 to 32767; 32 bits ≈ ±2.1 billion. Asymmetric: the most negative value (−128) has no positive twin; negating it overflows back to itself.</li>' +
          '<li>MSB = 1 ⇔ negative. All ones = −1.</li></ul>',
        keypoints: ['−x = ~x + 1.', 'MSB weight = −2ⁿ⁻¹.', 'Range −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1.', '−1 = all ones; 1000 0000 is the most negative value.', '−45 = 1101 0011; 0xB7 = −73 (signed 8-bit).'],
        diagrams: [{ id: 'D4.3a', title: '4-bit number wheel (unsigned, pattern, signed)', svg: wheel, how: 'Circle with 16 positions; 0000 at the top, increase clockwise; label signed values outside and mark the +7/−8 boundary.' }],
        examples: [{ title: '−45 in 8 bits (exit ticket)', html: '<p>+45 = 0010 1101 → invert 1101 0010 → +1 → <b>1101 0011</b>. Check: −128 + 64 + 16 + 2 + 1 = −45.</p>' }, { title: '0xB7 as signed 8-bit', html: '<p>1011 0111: MSB 1 → negative; invert 0100 1000 + 1 = 0100 1001 = 73 → <b>−73</b> (unsigned 183).</p>' }],
        code: [{ id: 'C4.3a', title: 'twos_complement — 8-bit negator (portal Lab 5)', lang: 'verilog', src: 'module twos_complement (\n    input  [7:0] a,\n    output [7:0] y\n);\n    assign y = ~a + 8\'b00000001;   // invert, then add 1\nendmodule', io: '<pre>a = 0000 0101 (5)  → y = 1111 1011 (−5)\na = 1111 1011 (−5) → y = 0000 0101 (5)\na = 1000 0000 (−128) → y = 1000 0000 (overflow: no +128)</pre>' }],
        mistakes: ['Forgetting the +1 (that is one\'s complement).', 'Assuming the range is symmetric (−127 to 127).', 'Reading 1000 0000 as −0.'],
        practice: [
          mcq('Two\'s complement of −1 in 8 bits is:', ['1000 0001', '1111 1110', '1111 1111', '1000 0000'], 2, 'Invert 0000 0001 → 1111 1110, add 1 → 1111 1111. All ones is always −1.', ['Sign-magnitude −1.', 'One\'s complement −1.', 'Correct.', '−128.'], 'Class quiz (L05 Q1)'),
          mcq('Signed range of an 8-bit two\'s complement integer:', ['0 to 255', '−127 to +127', '−128 to +127', '−128 to +128'], 2, '−2⁷ to 2⁷ − 1.', ['Unsigned.', 'Sign-magnitude / 1\'s complement.', 'Correct.', '+128 does not fit.'], 'Class quiz (L05 Q2)'),
          mcq('8-bit two\'s complement representation of −45:', ['1101 0010', '1101 0011', '1010 1101', '1100 1011'], 1, '0010 1101 → 1101 0010 → +1 = 1101 0011.', ['Missing +1.', 'Correct.', 'Sign-magnitude −45.', 'Wrong.'], 'Class quiz (L05 Q4)'),
          mcq('0xB7 as an 8-bit signed integer:', ['+183', '−73', '−57', '+71'], 1, '1011 0111 → magnitude 0100 1001 = 73 → −73.', ['Unsigned value.', 'Correct.', 'Wrong.', 'Wrong.'], 'Class quiz (L05 Q5)'),
          nat('What decimal value does the 8-bit two\'s complement pattern 1000 0000 represent?', -128, 0, 'MSB weight −128, rest 0.', 'Class quiz (L05 quick check)'),
          nat('Range of 16-bit two\'s complement: what is the most negative value?', -32768, 0, '−2¹⁵.')
        ],
        subjective: [sub('Explain why two\'s complement is preferred for signed integers. Represent +18 and −18 in 8 bits and verify that adding them gives 0. (5 marks)', '<p>Reasons: single zero; one adder for add and subtract; MSB directly gives the sign; no end-around carry. +18 = 0001 0010; −18 = 1110 1110. Sum = 1 0000 0000 → discard the carry → 0000 0000 = 0 ✓.</p>', 5, ['2 — reasons', '2 — encodings', '1 — verification'], ['D4.3a'])]
      },
      {
        id: '4.4', title: 'Sign Extension', badge: 'class', sources: '[L05] p17; [MIPS] p16 (lb vs lbu, addi immediate); [SP3] Sign Extender',
        keywords: 'sign extension zero extension lb lbu immediate',
        explain: '<p><b>Analogy:</b> writing −5 on a wider form — you fill the new boxes with the sign (like filling every new box with 1s for a negative), not with zeros.</p>' +
          '<p>To widen an n-bit two\'s complement number to m bits, <b>copy the MSB</b> into all new upper bits; the value is unchanged. +5 = 0101 → 0000 0101; −5 = 1011 → 1111 1011. Zero-padding −5 would give 0000 1011 = +11 (wrong). <b>Zero extension</b> is correct only for unsigned values.</p>' +
          '<p><b>In MIPS:</b> the 16-bit immediate of addi, lw, sw, slti and branch offsets is sign-extended (the datapath\'s “Sign extend” block, Unit 13); andi/ori/xori zero-extend. lb sign-extends a byte (0xF0 → 0xFFFFFFF0), lbu zero-extends (0x000000F0). addi $t0,$t0,−1 has imm 0xFFFF → 0xFFFFFFFF.</p>',
        keypoints: ['Sign-extend: replicate the MSB.', 'Zero-extend only unsigned data (andi/ori/xori, lbu).', 'Verilog: {{4{a[3]}}, a}.', '16-bit imm −5 = 0xFFFB → 0xFFFFFFFB.'],
        diagrams: [{ id: 'D4.4a', title: 'Sign extension wiring (4 → 8 bits)', svg: sext, how: 'Draw the 4 input bits above the 8 output bits; straight wires for the low 4, fan the MSB to the top 5 output bits.' }],
        code: [{ id: 'C4.4a', title: 'sign_extender — 4-bit to 8-bit (portal Lab 5, 40 pts)', lang: 'verilog', src: 'module sign_extender (a, y);\n    input  [3:0] a;\n    output [7:0] y;\n    assign y = {{4{a[3]}}, a};   // replicate the MSB four times, then append a\nendmodule', io: '<pre>a = 0101 (+5) → y = 0000 0101\na = 1011 (−5) → y = 1111 1011\na = 1000 (−8) → y = 1111 1000</pre>' }],
        mistakes: ['Zero-padding a negative number.', 'Forgetting that MIPS andi/ori zero-extend.', 'Confusing lb and lbu.'],
        practice: [
          txt('Sign-extend the 4-bit value 1010 to 8 bits.', ['11111010', '1111 1010'], 'MSB 1 → fill with 1s. Value −6 preserved.'),
          mcq('lb loads the byte 0xF0 into a 32-bit register. The register holds:', ['0x000000F0', '0xFFFFFFF0', '0xF0000000', '0x0000F0F0'], 1, 'lb sign-extends; MSB of 0xF0 is 1.', ['That is lbu.', 'Correct.', 'Wrong position.', 'No.'], 'Lab 11'),
          mcq('Which MIPS instruction zero-extends its 16-bit immediate?', ['addi', 'slti', 'ori', 'lw'], 2, 'Logical immediates (andi, ori, xori) zero-extend.', ['Sign-extends.', 'Sign-extends.', 'Correct.', 'Offset is sign-extended.']),
          txt('The 16-bit immediate 0xFFFB is sign-extended to 32 bits. Write the result in hex.', ['0xFFFFFFFB', 'FFFFFFFB', '0xfffffffb'], 'MSB 1 → upper 16 bits all 1. Value −5.')
        ],
        subjective: [sub('What is sign extension? Why is it needed in the MIPS datapath? Give examples for a positive and a negative 16-bit immediate. (4 marks)', '<p>Widening a two\'s complement value by copying the sign bit, preserving its value. The ALU is 32-bit but I-format immediates are 16-bit, so lw/sw offsets, addi constants and branch offsets are sign-extended before use. 0x0004 → 0x00000004; 0xFFFC (−4) → 0xFFFFFFFC.</p>', 4, ['1 — definition', '1 — need', '2 — examples'], ['D4.4a'])]
      },
      {
        id: '4.5', title: 'Binary Addition and Subtraction', badge: 'class', sources: '[L05] p19-22; [LB5] p2-3 (adder-subtractor circuit + code); [SP3] Adder-Subtractor',
        keywords: 'binary addition subtraction adder subtractor carry borrow',
        explain: '<p><b>Analogy:</b> grade-school column addition, but you carry at 2 instead of 10.</p>' +
          '<ul><li>Rules: 0+0 = 0; 0+1 = 1; 1+1 = 10 (0 carry 1); 1+1+1 = 11 (1 carry 1). 13 + 11 in 4 bits: 1101 + 1011 = 1 1000 → carry-out means the 4-bit unsigned result overflowed (24 &gt; 15).</li>' +
          '<li><b>Subtraction = adding the negative:</b> A − B = A + (B\' + 1). Feed B through XOR gates controlled by K (K = 1 inverts B) and use K as the carry-in: one adder does both — the <b>adder-subtractor</b>.</li>' +
          '<li>Worked 5 − 3 (4-bit): 0101 + 1101 = 1 0010 → discard the carry → 0010 = +2.</li>' +
          '<li>For unsigned subtraction, carry-out = 1 means “no borrow” (A ≥ B); carry-out = 0 means A &lt; B.</li></ul>',
        keypoints: ['A − B = A + ~B + 1 (Cin = 1).', 'Adder-subtractor: Bi ⊕ K, Cin = K.', 'Signed result: ignore the final carry.', 'Unsigned subtract: Cout = 0 ⇒ borrow.'],
        diagrams: [{ id: 'D4.5a', title: '4-bit adder-subtractor (Lab 5)', svg: addsub, how: 'Four FA boxes; an XOR in front of each B input with the shared control K; K also feeds Cin of FA0.' }],
        tool: 'overflow',
        code: [{ id: 'C4.5a', title: 'adder_subtractor — class version and portal version', lang: 'verilog', src: '// class slide version\nmodule adder_subtractor (\n    input  [3:0] a,\n    input  [3:0] b,\n    input        m,          // 0 = add, 1 = subtract\n    output [3:0] s,\n    output       cout\n);\n    wire [3:0] b_in;\n    assign b_in = b ^ {4{m}};          // XOR each bit of b with m\n    assign {cout, s} = a + b_in + m;   // add a, modified b and m (as Cin)\nendmodule\n\n// portal solution (same behaviour, written with ?:)\nmodule adder_subtractor_v2 (a, b, m, s, cout);\n    input [3:0] a, b; input m;\n    output [3:0] s; output cout;\n    assign {cout, s} = m ? (a + (b ^ {4{m}}) + 1) : (a + b);\nendmodule', io: '<pre>a=0101 b=0011 m=0 → s=1000 cout=0  (5 + 3 = 8)\na=0101 b=0011 m=1 → s=0010 cout=1  (5 − 3 = 2, no borrow)\na=0011 b=0101 m=1 → s=1110 cout=0  (3 − 5 = −2, borrow)</pre>' }],
        mistakes: ['Forgetting Cin = 1 when subtracting.', 'Treating the discarded carry as part of a signed answer.', 'Confusing carry-out with signed overflow (next topic).'],
        practice: [
          mcq('Why is A − B implemented as A + ~B + 1?', ['Subtraction does not exist in hardware', 'Because ~B + 1 = −B in two\'s complement, so one adder does both', 'A subtractor gives wrong results', 'Addition is slower'], 1, 'The +1 enters as Cin; one control bit switches add/subtract.', ['It could exist, but is unnecessary.', 'Correct.', 'No.', 'No.'], 'Class quiz (L05 Q3)'),
          txt('Compute 0110 + 1100 in 4-bit two\'s complement (give the 4-bit result).', ['0010'], '6 + (−4) = 2: 0110 + 1100 = 1 0010 → 0010. Opposite signs → no overflow.', 'From class slides (L05 exit ticket)'),
          nat('In a 4-bit adder-subtractor computing 3 − 5 (K = 1), what is the carry-out C4?', 0, 0, '0011 + 1010 + 1 = 1110, no carry out → C4 = 0 → borrow (3 < 5 unsigned).'),
          txt('Compute 13 + 11 using 4-bit binary addition. Write the 5-bit result (carry included).', ['11000', '1 1000'], '1101 + 1011 = 11000 = 24.')
        ],
        subjective: [sub('Draw a 4-bit adder-subtractor and explain how a single control input selects addition or subtraction. Trace 0101 − 0011. (5 marks)', '<p>Circuit D4.5a. K = 0: Bi ⊕ 0 = Bi, Cin = 0 → A + B. K = 1: Bi ⊕ 1 = Bi\', Cin = 1 → A + B\' + 1 = A − B. Trace: 0101 + 1100 + 1 = 1 0010 → result 0010 (+2), C4 = 1 (no borrow).</p>', 5, ['2 — circuit', '2 — explanation', '1 — trace'], ['D4.5a'])]
      },
      {
        id: '4.6', title: 'Overflow Detection Rules', badge: 'class', sources: '[L05] p23-29; [LB5] p5-12; [SP3] Adder-Subtractor + Overflow Flags',
        keywords: 'overflow carry flag cf of v signed unsigned',
        explain: '<p><b>Analogy:</b> an odometer that rolls past its maximum shows a small number — and does not beep. Overflow is <b>silent</b>; the CPU sets a flag and software must check it.</p>' +
          '<ul><li><b>Signed overflow</b> happens only when both operands have the <b>same sign</b> and the result has the opposite sign: (+)+(+) = (−) or (−)+(−) = (+). Opposite-sign operands never overflow.</li>' +
          '<li><b>Hardware rule:</b> V = C<sub>in,MSB</sub> ⊕ C<sub>out,MSB</sub> (4-bit: V = C3 ⊕ C4) — one extra XOR. Equivalent sign formula: V = A3\'B3\'S3 + A3B3S3\'.</li>' +
          '<li><b>Unsigned overflow</b> (carry flag CF) = carry out of the MSB alone (for addition).</li>' +
          '<li>The ALU always computes both flags (x86: OF and CF); the instruction decides which matters. MIPS add/addi trap on signed overflow; addu/addiu do not.</li>' +
          '<li>Real failures: Ariane 5 (1996, 64-bit float → 16-bit int, ~$370 M), Boeing 787 counter (reboot every 248 days), Gangnam Style views beyond 2³¹ − 1 (2014), Pac-Man level 256.</li></ul>',
        keypoints: ['V = Cin(MSB) ⊕ Cout(MSB).', 'Same signs in, different sign out ⇒ overflow.', 'CF = Cout (unsigned).', 'Opposite signs can never overflow.'],
        diagrams: [{ id: 'D4.6a', title: 'Overflow detection with one XOR at the MSB', svg: ovf, how: 'Draw FA3 with C3 entering and C4 leaving; tap both into an XOR labelled V.' }],
        examples: [{ title: 'Four cases (L05 p27) and the Lab 5 flag table', html: '<div class="table-wrap"><table class="tt"><tr><th>A + B</th><th>bits</th><th>result</th><th>C3</th><th>C4 (CF)</th><th>V</th><th>verdict</th></tr><tr><td>5 + 4</td><td>0101 + 0100</td><td>1001 (−7)</td><td>1</td><td>0</td><td>1</td><td>signed overflow</td></tr><tr><td>−6 + −5</td><td>1010 + 1011</td><td>0101 (+5)</td><td>0</td><td>1</td><td>1</td><td>signed overflow</td></tr><tr><td>5 + −3</td><td>0101 + 1101</td><td>0010 (+2)</td><td>1</td><td>1</td><td>0</td><td>OK</td></tr><tr><td>3 + 2</td><td>0011 + 0010</td><td>0101 (+5)</td><td>0</td><td>0</td><td>0</td><td>OK</td></tr><tr><td>15 + 1 / −1 + 1</td><td>1111 + 0001</td><td>0000</td><td>1</td><td>1</td><td>0</td><td>unsigned overflow only</td></tr><tr><td>7 + 1</td><td>0111 + 0001</td><td>1000</td><td>1</td><td>0</td><td>1</td><td>signed overflow only</td></tr><tr><td>8 + 8 / −8 + −8</td><td>1000 + 1000</td><td>0000</td><td>0</td><td>1</td><td>1</td><td>both</td></tr></table></div>' }],
        code: [
          { id: 'C4.6a', title: '4-bit carry-lookahead adder with CF and OF flags (Lab 5, full version)', lang: 'verilog', src: 'module cla_adder_4bit_ovf (\n    input  wire [3:0] a, b,\n    input  wire       cin,\n    output wire [3:0] sum,\n    output wire       cout, cf, of\n);\n    wire [3:0] g = a & b;          // generate\n    wire [3:0] p = a ^ b;          // propagate\n    wire c1 = g[0] | (p[0] & cin);\n    wire c2 = g[1] | (p[1] & g[0]) | (p[1] & p[0] & cin);\n    wire c3 = g[2] | (p[2] & g[1]) | (p[2] & p[1] & g[0]) | (p[2] & p[1] & p[0] & cin);\n    wire c4 = g[3] | (p[3] & g[2]) | (p[3] & p[2] & g[1]) | (p[3] & p[2] & p[1] & g[0])\n                   | (p[3] & p[2] & p[1] & p[0] & cin);\n    assign sum  = p ^ {c3, c2, c1, cin};\n    assign cout = c4;\n    assign cf   = c4;          // unsigned overflow\n    assign of   = c3 ^ c4;     // signed overflow\nendmodule', io: '<pre>0001+0001 → 0010 cf=0 of=0\n1111+0001 → 0000 cf=1 of=0\n0111+0001 → 1000 cf=0 of=1\n1000+1000 → 0000 cf=1 of=1</pre>' },
          { id: 'C4.6b', title: 'adder_subtractor_overflow (portal) — corrected carry-into-MSB', lang: 'verilog', src: 'module adder_subtractor_overflow (\n    input  [3:0] a, b,\n    input        m,               // 0 = add, 1 = subtract\n    output [3:0] s,\n    output       cf,              // carry flag (unsigned)\n    output       vf               // overflow flag (signed)\n);\n    wire [3:0] b_sub = b ^ {4{m}};\n    wire [4:0] ext   = a + b_sub + m;       // 5-bit sum keeps the carry out\n    wire [3:0] low   = a[2:0] + b_sub[2:0] + m;   // 4-bit: bit 3 is the carry INTO the MSB\n    assign s  = ext[3:0];\n    assign cf = ext[4];\n    assign vf = low[3] ^ ext[4];           // C3 xor C4\nendmodule\n// Trap in the portal code: "wire cin_msb = a[2] + b_sub[2] + (expression);" is a 1-bit result,\n// i.e. the SUM bit of column 2, not the carry into column 3. Compute the carry with a wider sum as above.', io: '<pre>a=0111 b=0001 m=0 → s=1000 cf=0 vf=1 (7+1 overflows signed)\na=1000 b=0001 m=1 → s=0111 cf=1 vf=1 (−8−1 overflows signed)\na=0101 b=0011 m=1 → s=0010 cf=1 vf=0</pre>' }],
        mistakes: ['Using carry-out as the signed overflow flag.', 'Claiming (+)+(−) can overflow.', 'Assuming overflow raises an error by default.'],
        practice: [
          mcq('In 4-bit two\'s complement, 0101 + 0100 gives 1001. This is:', ['correct, −7', 'signed overflow', 'unsigned overflow', 'no overflow of any kind'], 1, '+5 + +4 = +9 > +7; two positives gave a negative → V = 1. Unsigned 5 + 4 = 9 fits, so CF = 0.', ['−7 is the wrong answer.', 'Correct.', '9 fits in 4-bit unsigned.', 'Signed overflow occurred.'], 'From class slides'),
          mcq('Signed overflow in addition is detected by:', ['carry out of the MSB', 'carry into the MSB XOR carry out of the MSB', 'AND of the two MSBs', 'the Zero flag'], 1, 'V = C_in(MSB) ⊕ C_out(MSB).', ['That is the unsigned carry flag.', 'Correct.', 'No.', 'No.']),
          msq('Which 4-bit signed additions overflow? (select all)', ['0111 + 0001', '1000 + 1111', '0101 + 1101', '0011 + 0100'], [0, 1], '7 + 1 = 8 (> 7); −8 + −1 = −9 (< −8). 5 + (−3) and 3 + 4 = 7 fit.', ['Overflow.', 'Overflow.', 'Opposite signs — never.', '7 fits.']),
          nat('For 1111 + 0001 (4-bit), what is the signed overflow flag V?', 0, 0, 'C3 = 1, C4 = 1 → V = 0 (−1 + 1 = 0 fits). CF = 1.', 'Lab 5'),
          mcq('An engineer adds two 8-bit signed numbers A = 0x70, B = 0x20. The result and V are:', ['0x90, V = 1', '0x90, V = 0', '0x50, V = 0', '0x10, V = 1'], 0, '112 + 32 = 144 > 127; 0x90 = −112 signed → overflow.', ['Correct.', 'V must be 1.', 'Wrong sum.', 'Wrong sum.'])
        ],
        subjective: [sub('Explain signed and unsigned overflow with 4-bit examples. Derive the hardware rule V = C3 ⊕ C4 using the MSB column. (5 marks)', '<p>Signed overflow: same-sign inputs, opposite-sign result (0101 + 0100 = 1001). Unsigned overflow: carry out of the MSB (1111 + 0001 = 0000, C4 = 1). MSB column with A3 = B3 = 0: sum bit = C3, carry out = 0 → overflow iff C3 = 1 iff C3 ≠ C4. With A3 = B3 = 1: carry out = 1, sum bit = C3 → overflow iff C3 = 0 iff C3 ≠ C4. With A3 ≠ B3: C4 = C3 always → no overflow. Hence V = C3 ⊕ C4.</p>', 5, ['2 — examples', '2 — derivation', '1 — unsigned flag'], ['D4.6a'])]
      }
    ]
  });
})();
