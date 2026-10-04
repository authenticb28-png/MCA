# Modern Computer Architecture — MCQs

## Lectures

### Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ... - Revision — your score 12/16

**Q1.** What is the primary conceptual purpose of the "abstraction stack" in computer architecture?
- **A.** It forces programmers to write code using binary 1s and 0s to improve CPU execution speed.
- **B.** It directly translates hardware transistors into high-level algorithms in a single step.
- **C.** It hides lower-level complexities, allowing engineers to design systems at specific layers without managing every detail below them.
- **D.** It ensures that the compiler bypasses the datapath to run applications directly on the transistors.

**Answer:** C. It hides lower-level complexities, allowing engineers to design systems at specific layers without managing every detail below them. (you chose C ✓)

**Why:** Abstraction isolates complexity, enabling software developers to write high-level code without needing to manually wire or understand the underlying physical transistors.

**Q2.** Simplify: `AB'C + A'BC + ABC + AB'C'`
- **A.** AB + BC
- **B.** AB' + BC
- **C.** B'C + AB
- **D.** AB' + C

**Answer:** B. AB' + BC (you chose B ✓)

**Why:** **Step 1:** Group AB'C + AB'C' = AB'(C + C') = AB' · 1 = AB' (Distributive + Complement + Identity)

**Step 2:** Group A'BC + ABC = BC(A' + A) = BC · 1 = BC (Distributive + Complement + Identity)

**Step 3:** Combine → **AB' + BC**

**Q3.** Based on the intuitive introduction to DeMorgan's theorems (which relate ANDs and ORs through inversion), hypothesize what the inverse of the entire expression ~(A \* B) would equal if distributed.
- **A.** ~A + ~B
- **B.** ~A \* ~B
- **C.** A + B
- **D.** ~(A + B)

**Answer:** A. ~A + ~B (you chose A ✓)

**Why:** DeMorgan's theorem intuitively states that the inverse of an AND operation is equivalent to the OR of the individually inverted inputs. Negating that both are true means at least one must be false.

**Q4.** Simplify: `(A' + B)(A' + B')(A + B)`
- **A.** A'
- **B.** A'B
- **C.** AB'
- **D.** A' + B

**Answer:** B. A'B (you chose A ✗)

**Why:** **Step 1:** Simplify (A'+B)(A'+B') first → A' + (B·B') = A' + 0 = A' (Distributive + Complement + Identity)

**Step 2:** Now: A'(A + B) = A'A + A'B = 0 + A'B (Distributive + Complement: A'A=0)

**Step 3:** 0 + A'B = **A'B** (Identity)

**Q5.** Simplify: `(AB' + A'B)(AB + A'B')`
- **A.** A'B + AB'
- **B.** AB
- **C.** 0
- **D.** A + B

**Answer:** C. 0 (you chose C ✓)

**Why:** **Step 1:** Expand using Distributive: AB·AB' + AB·A'B' + A'B·AB + A'B·A'B'

**Step 2:** Apply Complement to each term → AB·AB' = A·(BB') = 0, AB·A'B' = (AA')(BB') = 0, A'B·AB = (A'A)·B² = 0, A'B·A'B' = A'·(BB') = 0

**Step 3:** 0 + 0 + 0 + 0 = **0**

### Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical For ... - Revision — your score 5/5

**Q1.** A minterm for a 3-variable function F(A, B, C) at the row where A = 1, B = 0, C = 1 is:
- **A.** A'BC
- **B.** AB'C
- **C.** ABC
- **D.** A'B'C

**Answer:** B. AB'C (you chose B ✓)

**Why:** A minterm is a product term where each variable appears exactly once — uncomplemented if the variable is 1, complemented if it is 0. Since A = 1 → A, B = 0 → B', C = 1 → C, the minterm is AB'C (m5).

**Q2.** In Sum of Products (SOP) form, you generate a product term for every row where F equals:
- **A.** 0
- **B.** 1
- **C.** A don't-care (X)
- **D.** Both 0 and 1

**Answer:** B. 1 (you chose B ✓)

**Why:** SOP builds a minterm for every row where the output is 1, then ORs them together. POS does the mirror image — it builds a maxterm from every row where F = 0.

**Q3.** F(A, B, C) = Σm(1, 3, 5, 7). After K-map minimization, F simplifies to:
- **A.** A
- **B.** B
- **C.** C
- **D.** A+C

**Answer:** C. C (you chose C ✓)

**Why:** Minterms 1, 3, 5, 7 in binary are 001, 011, 101, 111 respectively. Every single one has C = 1. In the K-map, they form a four-cell column (quad) where A and B both vary — those variables cancel. Only C remains constant (= 1), so F = C.

### DeMorgan's Theorems, Universal Gates, Combinational Building Blocks, Reusable Bl ... - Revision — your score 9/9

**Q1.** How many output lines does a **3-to-8 decoder** have?
- **A.** 3
- **B.** 6
- **C.** 8
- **D.** 16

**Answer:** C. 8 (you chose C ✓)

**Why:** A 3-to-8 decoder has 3 input lines and `2³ = 8` output lines. At any given time, exactly one output line is asserted HIGH (active), determined by the 3-bit binary input value.

**Q2.** A 2-to-1 MUX has inputs `A=1`, `B=0`, and select line `S=1`. What is the output Y?
- **A.** 1
- **B.** 0
- **C.** Undefined
- **D.** Depends on A⊕B

**Answer:** B. 0 (you chose B ✓)

**Why:** The 2-to-1 MUX equation is: `Y = S'·A + S·B`. With `S=1`: `Y = 0·1 + 1·0 = 0`. When `S=1`, input B is selected. When `S=0`, input A is selected. The select line acts as a programmable switch.

**Q3.** A 4-to-1 MUX has select lines `S1` (MSB) and `S0` (LSB), and inputs I0, I1, I2, I3. Which input is selected when `S1=1`, `S0=0`?
- **A.** 10
- **B.** 11
- **C.** 12
- **D.** 13

**Answer:** C. 12 (you chose C ✓)

**Why:** The select lines form a 2-bit binary address: `S1S0 = 10₂ = 2`. The mapping is: `S1S0 = 00 → I0`, `01 → I1`, `10 → I2`, `11 → I3`. Therefore **I2** is selected. This is directly analogous to using the select bits as an address into an array of inputs.

**Q4.** A NOT gate is built from a single NAND gate by:
- **A.** Connecting input A to one port and input B to the other
- **B.** Tying both inputs together to the same signal A
- **C.** Connecting the output back to one input
- **D.** Inverting one input externally before feeding it in

**Answer:** B. Tying both inputs together to the same signal A (you chose B ✓)

**Why:** NAND(A, A) = ~(A · A) = ~A. Tying both inputs together forces the NAND to act as an inverter with zero extra hardware. This is the simplest universal gate construction.

**Q5.** How many 2-input NAND gates are needed to implement a 2-input AND gate?
- **A.** 1
- **B.** 2
- **C.** 3
- **D.** 4

**Answer:** B. 2 (you chose B ✓)

**Why:** Gate 1: G1 = NAND(A, B) = ~(A·B). Gate 2: G2 = NAND(G1, G1) = ~(G1·G1) = ~G1 = A·B. The second NAND acts as an inverter, cancelling the inversion from the first. Two NANDs total.

### n-to-2^n Decoders, Adders, Half Adder, Full Adder - Revision — your score 6/6

**Q1.** In a **ripple carry adder**, why does the worst-case propagation delay increase linearly with the number of bits?
- **A.** Each cell requires exponentially more transistors
- **B.** The carry must travel serially from the LSB through every stage to the MSB
- **C.** Boolean operations become nonlinear for large bit widths
- **D.** The voltage degrades over distance on the chip

**Answer:** B. The carry must travel serially from the LSB through every stage to the MSB (you chose B ✓)

**Why:** Each full adder stage must wait for the carry-out of the previous stage before it can compute its final Sum and Carry-out. In the worst case (e.g., adding `0111...1 + 0000...1`), a carry generated at bit 0 must propagate through all *n* stages. Delay = `n × t_FA`, making it `O(n)`.

**Q2.** A 4-bit ripple carry adder computes A=0111 + B=0001. What is the correct result?
- **A.** 0110, Cout=0
- **B.** 1000, Cout=0
- **C.** 1000, Cout=1
- **D.** 0000, Cout=1

**Answer:** B. 1000, Cout=0 (you chose B ✓)

**Why:** `0111 (7) + 0001 (1) = 1000 (8)`. No carry escapes the 4-bit range since `8 ≤ 15`. The carry ripples internally from bit 0 → 1 → 2 → 3, but Cout from bit 3 = 0. The result is simply `1000`.

### ALU and Register File, Number Systems & Two's Complement, Number Systems, Binary ... - Revision — your score 11/11

**Q1.** What is the **two's complement representation** of `−1` in 8-bit binary?
- **A.** 10000001
- **B.** 11111110
- **C.** 11111111
- **D.** 10000000

**Answer:** C. 11111111 (you chose C ✓)

**Why:** `−1` in two's complement is obtained by flipping all bits of `00000001` (which gives `11111110`) and adding 1, resulting in `11111111`. This is a key pattern — all ones always equals `−1` in any N-bit two's complement system.

**Q2.** Which of the following is the **signed range** for an 8-bit two's complement integer?
- **A.** 0 to 255
- **B.** −127 to +127
- **C.** −128 to +127
- **D.** −128 to +128

**Answer:** C. −128 to +127 (you chose C ✓)

**Why:** The formula is `−2^(N−1)` to `+2^(N−1) − 1`. For N = 8: `−2^7 = −128` and `+2^7 − 1 = +127`. The range is asymmetric — there is always one extra negative number, which is a famous trap.

**Q3.** Why is subtraction A − B implemented as A + (~B) + 1 rather than building a separate subtractor circuit?
- **A.** Subtraction doesn't exist in hardware
- **B.** Because ~B + 1 equals −B in two's complement, so A + (−B) = A − B; one adder handles both operations
- **C.** Because a separate subtractor would give wrong results
- **D.** Because addition is slower than subtraction

**Answer:** B. Because ~B + 1 equals −B in two's complement, so A + (−B) = A − B; one adder handles both operations (you chose B ✓)

**Why:** In two's complement, negation is flip + add 1. So −B = ~B + 1. Therefore A − B = A + ~B + 1. The "+1" is injected by forcing the carry-in (Cin) of the adder to 1. This elegance means a single hardware adder, with one control bit M, can perform both addition and subtraction — this is the adder/subtractor you saw in L3.

**Q4.** What is the 8-bit two's complement representation of −45?
- **A.** 11010010
- **B.** 11010011
- **C.** 10101101
- **D.** 11001011

**Answer:** B. 11010011 (you chose B ✓)

**Why:** Step 1 — Write +45 in binary: 00101101
Step 2 — Flip all bits: 11010010
Step 3 — Add 1: 11010011
So −45 = 11010011 in 8-bit two's complement. Verify: 128+64+16+2+1 = 211 → 211−256 = −45 ✓

**Q5.** Convert hex 0xB7 to its signed decimal value treating it as an 8-bit two's complement number.
- **A.** +183
- **B.** −73
- **C.** −57
- **D.** +71

**Answer:** B. −73 (you chose B ✓)

**Why:** 0xB7 → B=1011, 7=0111 → Binary: 10110111. MSB = 1, so it's negative. Apply two's complement to find the magnitude: Flip: 01001000 → Add 1: 01001001 = 64+8+1 = 73. So 0xB7 = −73 in 8-bit signed. (As unsigned, 0xB7 = 11×16 + 7 = 176+7 = 183.)

### Overflow Detection, Latches, Flip-Flops & Timing, Combinational vs Sequential Ci ... - Revision — your score None/5

**Q1.** A D-Latch is said to be in **"transparent mode"** when:
- **A.** Enable (E) = LOW
- **B.** Enable (E) = HIGH
- **C.** D = Q
- **D.** The clock edge arrives

**Answer:** _not shown by Newton_

**Q2.** A T flip-flop with `T = 0` will:
- **A.** Toggle its output on every clock edge
- **B.** Reset its output to 0
- **C.** Hold its current value
- **D.** Set its output to 1

**Answer:** _not shown by Newton_

**Q3.** Why is a D-Latch considered **"unsafe"** for use in CPU pipelines, while a D Flip-Flop is the standard choice?
- **A.** A D-Latch is more expensive to manufacture than a D Flip-Flop
- **B.** A D-Latch is transparent for the entire clock-high phase
- **C.** A D Flip-Flop cannot store a 0, making it unsuitable for latches
- **D.** A D-Latch requires two clock signals whereas a D Flip-Flop uses one

**Answer:** _not shown by Newton_

### Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metasta ... - Revision — your score None/9

**Q1.** In a **Master-Slave D Flip-Flop**, when does the output Q change?
- **A.** Whenever D changes
- **B.** When the clock is HIGH
- **C.** At the falling edge of the clock (in the standard configuration)
- **D.** When both master and slave are simultaneously transparent

**Answer:** _not shown by Newton_

**Q2.** **Metastability** in a flip-flop can result in which of the following outcomes?
- **A.** The output always settles to 0
- **B.** The output always settles to 1
- **C.** The output may oscillate, settle at mid-rail voltage, or randomly resolve to 0 or 1 after an unpredictable delay
- **D.** The flip-flop resets itself automatically and outputs Q\_prev

**Answer:** _not shown by Newton_

**Q3.** An engineer is crossing a signal from a **100 MHz** clock domain to a **133 MHz** clock domain. They connect the output of the 100 MHz flip-flop directly to the D input of the 133 MHz flip-flop (no synchronizer). What is the primary risk?
- **A.** The signal will always arrive too late, causing a hold violation
- **B.** The asynchronous input may be sampled during its transition, triggering metastability in the receiving domain
- **C.** The signal frequency will double to 233 MHz
- **D.** The receiving flip-flop's setup time will always be violated

**Answer:** _not shown by Newton_

### Registers, Counters & Shift Registers, Load Enable and Reset, Counters, Asynchro ... - Revision — your score None/17

**Q1.** Which shift register mode is used in a **UART transmitter** to send data one bit at a time over a single wire?
- **A.** SISO
- **B.** SIPO
- **C.** PISO
- **D.** PIPO

**Answer:** _not shown by Newton_

**Q2.** What is the key advantage of a synchronous counter over a ripple counter?
- **A.** It uses fewer flip-flops
- **B.** It requires no clock signal
- **C.** All flip-flops update simultaneously, eliminating cumulative propagation delay
- **D.** It can only count up, which simplifies design

**Answer:** _not shown by Newton_

**Q3.** A 12-bit ripple counter uses flip-flops with a propagation delay of 0.6 ns each. What is the maximum frequency at which this counter can safely operate?
- **A.** 600 MHz
- **B.** 139 MHz
- **C.** 83.3 MHz
- **D.** 12 MHz

**Answer:** _not shown by Newton_

**Q4.** A mod-N counter using the Parallel Load approach (rather than Decode & Reset) is preferred in production designs because:
- **A.** It requires more flip-flops
- **B.** It is harder to implement but runs at lower frequency
- **C.** It avoids a glitch state that would briefly appear when using decode & reset
- **D.** It does not need a clock

**Answer:** _not shown by Newton_

**Q5.** A new LFSR-based pseudo-random number generator uses 8 flip-flops with a proper primitive polynomial. How many unique non-zero states does it cycle through before repeating?
- **A.** 8
- **B.** 64
- **C.** 255
- **D.** 256

**Answer:** _not shown by Newton_

### CPU Registers Preview (PC, IR, GPR), From Registers to Register Files, Register  ... - Revision — your score None/8

**Q1.** A register file is designed with exactly 64 registers.  
  
What is the minimum number of bits required for the write address (WA)?

**Answer:** _not shown by Newton_

**Q2.** The 5-component formal definition of an FSM includes states (S), inputs (I), outputs (O), and two functions. What are those two functions?
- **A.** Encode function and decode function
- **B.** Transition function (δ) and output function (λ)
- **C.** Clock function and reset function
- **D.** Next-state function and feedback function

**Answer:** _not shown by Newton_

**Q3.** A student claims: *"Register file reads are slow because they need to wait for a clock edge."* Why is this claim incorrect?
- **A.** Reads actually require two clock cycles
- **B.** Reads are combinational (asynchronous) — no clock edge is needed
- **C.** Reads and writes both happen simultaneously on the same clock edge
- **D.** Register file reads are indeed synchronous in RISC-V

**Answer:** _not shown by Newton_

**Q4.** A register file has **16 registers, each 8 bits wide**. How many flip-flops does it contain in total, and how many bits wide must each read address be?
- **A.** 64 flip-flops, 3-bit address
- **B.** 128 flip-flops, 4-bit address
- **C.** 128 flip-flops, 3-bit address
- **D.** 256 flip-flops, 4-bit address

**Answer:** _not shown by Newton_

### Register Files & Finite State Machines, Sequence Detector, SRAM vs DRAM & Memory ... - Revision — your score 3/3

**Q1.** For the 1011 sequence detector (Moore, 5 states), how many flip-flops are needed under binary encoding versus one-hot encoding?
- **A.** Binary: 2 FFs, One-Hot: 5 FFs
- **B.** Binary: 3 FFs, One-Hot: 5 FFs
- **C.** Binary: 5 FFs, One-Hot: 5 FFs
- **D.** Binary: 3 FFs, One-Hot: 8 FFs

**Answer:** B. Binary: 3 FFs, One-Hot: 5 FFs (you chose B ✓)

**Why:** The detector has 5 states. Binary encoding needs ⌈log₂(5)⌉ = 3 flip-flops (since 2³ = 8 ≥ 5). One-hot encoding assigns one flip-flop per state = 5 flip-flops. One-hot uses more hardware but produces simpler next-state equations, each D input reduces to: "source state's flip-flop is 1 AND the triggering input is received."
