# Modern Computer Architecture — Study Pack

_Generated 02 Oct 2026 23:05 by Newton Notes Agent. 32 lectures · 36 assignment questions · 36 MCQs from 10 quizzes._


---

# Modern Computer Architecture — Syllabus

## Lectures

- **L01** (11 Aug) Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ...
  - Topics: Truth Table, Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basics, Boolean Laws & Simplification, Worked Simplification Examples, AND, OR, NOT, XOR Gates
- **L02** (13 Aug) Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical For ...
  - Topics: Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical Forms, Karnaugh Maps, SOP Form (Minterms), POS Form (Maxterms), 2-Variable K-Map, 3-Variable K-Map, 4-Variable K-Map, Don't-Cares
- **L03** (18 Aug) DeMorgan's Theorems, Universal Gates, Combinational Building Blocks, Reusable Bl ...
  - Topics: Universal Gates, DeMorgan's Theorems, Combinational Building Blocks, Reusable Blocks, Multiplexers, 2:1 MUX, 4:1 and n:1 MUX Cascading, Demultiplexers and Decoders, DEMUX
- **L04** (20 Aug) n-to-2^n Decoders, Adders, Half Adder, Full Adder
  - Topics: Adders, n-to-2^n Decoders, Half Adder, Full Adder
- **L05** (25 Aug) ALU and Register File, Number Systems & Two's Complement, Number Systems, Binary ...
  - Topics: Negation, Binary to Decimal Conversion, Binary Addition, Binary Subtraction, 1's Complement, Hexadecimal Number System, Number Systems, ALU and Register File, Signed Representations, Number Systems & Two's Complement, Two's Complement, Sign-Magnitude, Range, Sign Extension
- **L06** (27 Aug) Overflow Detection, Latches, Flip-Flops & Timing, Combinational vs Sequential Ci ...
  - Topics: Overflow Detection, Latches, Flip-Flops & Timing, SR Latch, Combinational vs Sequential Circuits, D-Latch, NAND/NOR Structure, Forbidden State
- **L07** (01 Sep) Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metasta ...
  - Topics: Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metastability and MTBF, Scaling from Flip-Flops to Registers, Registers
- **L08** (03 Sep) Registers, Counters & Shift Registers, Load Enable and Reset, Counters, Asynchro ...
  - Topics: Registers, Counters & Shift Registers, Counters, Shift Registers, 4-bit Synchronous Up-Counter Design, Load Enable and Reset, Synchronous Counters, Asynchronous (Ripple) Counters, SISO, SIPO, PISO, PIPO
  - Files: MCA_Lecture_6_Counters.pdf
- **L09** (08 Sep) CPU Registers Preview (PC, IR, GPR), From Registers to Register Files, Register  ...
  - Topics: CPU Registers Preview (PC, IR, GPR), Register File Architecture, From Registers to Register Files, Finite State Machines Introduction, Moore vs Mealy Machines, Write Port with Address Decoder, Dual Read Ports with MUXes
  - Files: MCA_Lecture_7_Register_Files_and_FSMs.pdf
- **L10** (10 Sep) Register Files & Finite State Machines, Sequence Detector, SRAM vs DRAM & Memory ...
  - Topics: Register Files & Finite State Machines, SRAM, DRAM, SRAM vs DRAM Comparison, SRAM vs DRAM & Memory Stack, Sequence Detector, Beyond Register Files, 6T Cell Structure, Stability and Speed, 1T1C Cell Structure, Refresh and Destructive Read
  - Files: MCA_Lecture_8_SRAM_vs_DRAM_Memory_Stack.pdf
- **L11** (15 Sep) Memory Hierarchy, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann  ...
  - Topics: Memory Hierarchy, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann vs Harvard Architectures, Von Neumann Architecture, Harvard Architecture, From Gates to a Complete Machine, Stored-Program Concept, Single Bus and Memory, Von Neumann Bottleneck
  - Files: MCA_Lecture_8_Architecture_Intro.pdf, MCA_Lecture_9_Von_Neumann_vs_Harvard.pdf
- **L12** (17 Sep) Modified Harvard in Modern CPUs, CISC vs RISC, CISC vs RISC Core Ideas, CISC Cha ...
  - Topics: Modified Harvard in Modern CPUs, CISC vs RISC, CISC vs RISC Core Ideas, Historical Context, CISC Characteristics, RISC Load-Store Model, VAX and Early CISC, MIPS, SPARC, IBM 801, ARM, x86, RISC-V Emergence
  - Files: MCA_Lecture_10_CISC_vs_RISC.pdf
- **L13** (22 Sep) Compiler Implications and Code Density, Instruction Formats
  - Topics: Compiler Implications and Code Density, Instruction Formats
  - Files: MCA_Lecture_11_Registers_and_Instruction_Formats_.pdf, MIPS Encoding Reference.pdf
- **L14** (24 Sep) Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, MIPS32 / RISC-V  ...
  - Topics: Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, MIPS32 / RISC-V ISA, MIPS Register Set and Conventions, R-Format
  - Files: MCA_Lecture_12_C_to_MIPS_Translation_.pdf
- **L15** (29 Sep) I-Format, J-Format, RISC-V Modular ISA, Base RV32I and Extensions (M, A, F, D, C ...
  - Topics: Loops, For Loop, while Loops, Conditional Branching, RISC-V Modular ISA, J-Format, Base RV32I and Extensions (M, A, F, D, C, V), C-to-MIPS Translation, MIPS Calling Convention, I-Format
- **L16** (01 Oct) Argument and Return Registers, Caller-Saved vs Callee-Saved, Stack Frames, Leaf  ...
  - Topics: Single-Cycle MIPS Datapath, Stack Frames, Leaf Functions, Non-Leaf Functions and Recursion, Argument and Return Registers, Caller-Saved vs Callee-Saved, Fetch-Decode-Execute Cycle, Building the Single-Cycle Datapath, PC, Instruction Memory, Adder


**Quizzes (Lectures)**

- Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ... - Revision
- Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical For ... - Revision
- DeMorgan's Theorems, Universal Gates, Combinational Building Blocks, Reusable Bl ... - Revision
- n-to-2^n Decoders, Adders, Half Adder, Full Adder - Revision
- ALU and Register File, Number Systems & Two's Complement, Number Systems, Binary ... - Revision
- Overflow Detection, Latches, Flip-Flops & Timing, Combinational vs Sequential Ci ... - Revision _(not attempted)_
- Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metasta ... - Revision _(not attempted)_
- Registers, Counters & Shift Registers, Load Enable and Reset, Counters, Asynchro ... - Revision _(not attempted)_
- CPU Registers Preview (PC, IR, GPR), From Registers to Register Files, Register  ... - Revision _(not attempted)_
- Register Files & Finite State Machines, Sequence Detector, SRAM vs DRAM & Memory ... - Revision

## Labs

- **L01** (10 Aug) Lab - 0
- **L02** (12 Aug) Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ...
  - Topics: Truth Table, Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basics, Boolean Laws & Simplification, AND, OR, NOT, XOR Gates
- **L03** (17 Aug) Logic Minimisation & Universal Gates, Worked Simplification Examples, Motivation ...
  - Topics: Worked Simplification Examples, Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical Forms, Karnaugh Maps, SOP Form (Minterms), POS Form (Maxterms), 2-Variable K-Map, 3-Variable K-Map, 4-Variable K-Map, Don't-Cares
- **L04** (19 Aug) Combinational Building Blocks, DeMorgan's Theorems, Universal Gates, Reusable Bl ...
  - Topics: Universal Gates, DeMorgan's Theorems, Combinational Building Blocks, Reusable Blocks, Multiplexers, 2:1 MUX, 4:1 and n:1 MUX Cascading, Demultiplexers and Decoders, DEMUX, n-to-2^n Decoders
- **L05** (24 Aug) Adders, Half Adder, Full Adder, ALU and Register File
  - Topics: Adders, Half Adder, Full Adder, ALU and Register File
- **L06** (26 Aug) Number Systems & Two's Complement, Number Systems, Binary to Decimal Conversion, ...
  - Topics: Negation, Binary to Decimal Conversion, Binary Addition, 1's Complement, Hexadecimal Number System, Number Systems, Signed Representations, Number Systems & Two's Complement, Two's Complement, Sign-Magnitude, Range, Sign Extension
- **L07** (31 Aug) Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, Combinatio ...
  - Topics: Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, SR Latch, Combinational vs Sequential Circuits, D-Latch, D Flip-Flop, Timing Parameters, NAND/NOR Structure, Forbidden State, Setup and Hold Time, Metastability and MTBF, Registers, Counters & Shift Registers, Scaling from Flip-Flops to Registers
- **L08** (02 Sep) Registers, Load Enable and Reset
  - Topics: Registers, Load Enable and Reset
- **L09** (07 Sep) Counters, 4-bit Synchronous Up-Counter Design, Synchronous Counters, Asynchronou ...
  - Topics: Counters, Shift Registers, 4-bit Synchronous Up-Counter Design, Synchronous Counters, Asynchronous (Ripple) Counters, SISO, SIPO, PISO, PIPO
- **L10** (09 Sep) CPU Registers Preview (PC, IR, GPR), Register Files & Finite State Machines, Fro ...
  - Topics: CPU Registers Preview (PC, IR, GPR), Register Files & Finite State Machines, Register File Architecture, From Registers to Register Files, Finite State Machines Introduction, Moore vs Mealy Machines, Write Port with Address Decoder, Dual Read Ports with MUXes
- **L11** (14 Sep) Sequence Detector, SRAM vs DRAM & Memory Stack, Beyond Register Files, SRAM, 6T  ...
  - Files: Lab8_Sequence_Detector_FSMs.pdf
- **L12** (16 Sep) Sequence Detector, SRAM vs DRAM & Memory Stack, Beyond Register Files, SRAM, 6T  ...
  - Topics: SRAM, DRAM, SRAM vs DRAM & Memory Stack, Sequence Detector, Beyond Register Files, 6T Cell Structure, Stability and Speed, 1T1C Cell Structure, Refresh and Destructive Read
- **L13** (21 Sep) SRAM vs DRAM Comparison, Memory Hierarchy, Latency and Capacity Trade-offs, The  ...
  - Topics: Memory Hierarchy, SRAM vs DRAM Comparison, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann vs Harvard Architectures, Von Neumann Architecture, Harvard Architecture, Modified Harvard in Modern CPUs, From Gates to a Complete Machine, Stored-Program Concept, Single Bus and Memory, CISC vs RISC, CISC vs RISC Core Ideas, Historical Context, Compiler Implications and Code Density, Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, CISC Characteristics, RISC Load-Store Model, VAX and Early CISC, MIPS, SPARC, IBM 801, ARM, x86, RISC-V Emergence, MIPS32 / RISC-V ISA, MIPS Register Set and Conventions, Instruction Formats, RISC-V Modular ISA, R-Format, J-Format, Base RV32I and Extensions (M, A, F, D, C, V), I-Format, Von Neumann Bottleneck
  - Files: Lab11_MIPS_Assembly.pdf
- **L14** (23 Sep) C-to-MIPS Translation, Conditional Branching, Loops
  - Topics: Loops, Conditional Branching, C-to-MIPS Translation
- **L15** (28 Sep) while Loops, For Loop, MIPS Calling Convention, Argument and Return Registers, C ...
- **L16** (30 Sep) while Loops, For Loop, MIPS Calling Convention, Argument and Return Registers, C ...

**Assignments (Labs)**

- Lab 01 - In Class (6 questions)
- LAB 03 - In Class (3 questions)
- Combinational Building Blocks, DeMorgan's Theorems, Universal Gates, Reusable Bl ... - Post Class (1 questions)
- Lab 4 - In Class (3 questions)
- Lab 5 - In Class (4 questions)
- Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, Combinatio ... - In Class (3 questions)
- Registers, Load Enable and Reset, CPU Registers Preview (PC, IR, GPR), Counters, ... - In Class (2 questions)
- CPU Registers Preview (PC, IR, GPR), Counters, Asynchronous (Ripple) Counters, S ... - In Class (3 questions)
- CPU Registers Preview (PC, IR, GPR), Register Files & Finite State Machines, Fro ... - In Class (2 questions)
- C-to-MIPS Translation, Conditional Branching, Loops, while Loops, For Loop, MIPS ... - In Class (2 questions)
- while Loops, For Loop, MIPS Calling Convention, Argument and Return Registers, C ... - In Class (4 questions)
- Factorial / Fibonacci | In Class | Batch D (3 questions)



---

# Modern Computer Architecture — Lecture & Lab Notes

## Lectures

### L01 · Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ... (11 Aug 2026)
_Topics: Truth Table, Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basics, Boolean Laws & Simplification, Worked Simplification Examples, AND, OR, NOT, XOR Gates_

#### Whiteboard

<!-- page 1 -->
Lecture: 0001 
Course Intro &
Boolean Algebra
CSA222: Modern Computer Architecture
The journey from a single transistor to the GPUs that train 
modern AI — starting with 1s and 0s.
Where It All Begins

<!-- page 2 -->
L01 · MODERN COMPUTER ARCHITECTURE
02 / 34
Welcome to Computer Architecture
The course that reveals what's happening beneath every line of code you've ever written.
THE PROMISE
By the end, you'll understand — from the ground up 
— how a computer actually runs a program.
Not 'a CPU executes instructions' hand-waving. The real 
thing: transistors → gates → adders → registers → 
datapath → instructions → your Python.
You'll be able to trace  A[i] = B[i] + C[i]  through every single 
layer.
WHY IT MATTERS TO YOU
Performance: why some code is 100× faster.
AI/ML engineering: GPUs and TPUs are architecture — 
you can't optimise what you don't understand.
Interviews & systems work: this is the layer that separates 
people who use computers from people who understand 
them.

<!-- page 3 -->
L01 · MODERN COMPUTER ARCHITECTURE
03 / 34
What Is Computer Architecture?
The design of how hardware is organised to run software — the bridge between the two.
ARCHITECTURE
The 'what' — the interface
What instructions a CPU oﬀers.
How registers & memory are seen.
The programmer's contract.
e.g. 'this CPU has an ADD instruction'.
ORGANISATION
The 'how' — the implementation
How the ADD is actually built.
Pipelines, caches, clock speed.
Hidden from the programmer.
e.g. 'ADD takes 1 cycle via this adder'.
This course covers both — starting from the gates up, so 'how' and 'what' make sense together.

<!-- page 4 -->
L01 · MODERN COMPUTER ARCHITECTURE
04 / 34
Why Should You Care?
Four concrete reasons this is one of the most useful courses you'll take.
⚡
PERFORMANCE
Understanding caches & pipelines is why one 
loop runs 100× faster than another.
◆
AI / ML
GPUs, TPUs, and tensor cores ARE architecture. 
Module 6 connects directly to modern AI.
▤
SYSTEMS DEPTH
OS, compilers, databases — every systems ﬁeld 
rests on the hardware model you learn here.
★
INTERVIEWS
Architecture questions separate candidates. 
This is signal that you understand computing 
deeply.

<!-- page 5 -->
1. Course Logistics
How this course runs: 12 weeks, six modules, labs and contests — and how 
you'll be graded.

<!-- page 6 -->
L01 · MODERN COMPUTER ARCHITECTURE
06 / 34
How the Course Runs
12 weeks · 24 lectures · 2 lectures + 2 labs each week.
▤
24 lectures
Two 60-minute lectures per week across 12 weeks.
⚙
Hands-on labs
Two labs weekly: build real circuits in Verilog, 
simulat, write assembly in MIPS .
◆
6 modules
From digital logic up to multicore & AI 
accelerators — each 2 weeks, 4 lectures.
★
Contests & project
Regular contests keep skills sharp; a project ties 
concepts into something you build.

<!-- page 7 -->
L01 · MODERN COMPUTER ARCHITECTURE
07 / 34
The Six-Module Journey
Each module builds on the last — from a single gate to an AI accelerator.
M1
Wk 1–2
Digital Foundations
Gates, Boolean algebra, combinational 
blocks, number systems.
M2
Wk 3–4
Sequential Circuits & Memory
Flip-ﬂops, registers, counters, FSMs, register 
ﬁles.
M3
Wk 5–6
Computer Organization & ISA
Instruction sets, assembly, how programs 
become machine code.
M4
Wk 7–8
CPU Datapath & Pipelining
Build a working CPU; make it fast with 
pipelining.
M5
Wk 9–10
Memory Hierarchy & Cache
Why memory is slow, and how caches hide 
it.
M6
Wk 11–12
Parallelism & Modern
Multicore, GPUs, TPUs — the hardware 
behind modern AI.

<!-- page 8 -->
L01 · MODERN COMPUTER ARCHITECTURE
08 / 34
How You're Graded
Weighted to reward consistent eﬀort, not just exam-cramming.
40%
20%
20%
10%
10%
100% total — spread across the semester
40%
End-sem exam
Comprehensive ﬁnal.
20%
Contests
Regular skill checks — keep 
pace.
20%
Mid-sem exam
Halfway checkpoint.
10%
Projects
Build something real.
10%
Assignments
Weekly practice.

<!-- page 9 -->
L01 · MODERN COMPUTER ARCHITECTURE
09 / 34
Tools We'll Use
Real industry-adjacent tools — you'll build and simulate, not just read.
⧗
Verilog + Simulation
Describe hardware in a real HDL and watch signals 
in a waveform viewer. Modules 1–2.
⚙
MIPS
A MIPS assembler & simulator — write and run 
assembly by hand. Module 3.
▣
Hardware  boards
Real hardware to see logic and timing in the 
physical world.

<!-- page 10 -->
L01 · MODERN COMPUTER ARCHITECTURE
10 / 34
How to Succeed Here
This course rewards building intuition, not memorising facts.
1
Draw everything
Circuits, truth tables, timing — get it on paper. 
Architecture is a visual subject.
2
Do the labs seriously
You truly learn this by building and simulating, not just 
watching slides.
3
Connect the layers
Always ask: how does this connect up to code, and down to 
transistors?
4
Ask in lectures
Cold-calls and questions are normal here — confusion 
voiced early saves hours later.
5
Keep pace with contests
They're spaced so you can't cram. Steady eﬀort beats a 
panic before ﬁnals.
6
Think in trade-offs
There's rarely one 'right' design — area vs speed vs power. 
That mindset is the goal.

<!-- page 11 -->
2. The Abstraction Stack
From a switch made of silicon to a neural network — every layer built on the 
one below it.

<!-- page 12 -->
L01 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Abstraction Stack
Each layer hides the one below it — you can work at one level trusting the rest.
AI / ML models
neural nets, training
Applications & languages
Python, your programs
Operating system
processes, memory mgmt
Instruction set (ISA)
the CPU's vocabulary
Datapath & control
registers, ALU, FSMs
Logic gates
AND, OR, NOT
Transistors
silicon switches
↑ higher = more abstract
This course climbs the middle: gates → datapath → ISA — the heart of the stack.

<!-- page 13 -->
L01 · MODERN COMPUTER ARCHITECTURE
13 / 34
One Line of Code, Every Layer
Watch  A[i] = B[i] + C[i]  descend from Python to silicon.
Python
A[i] = B[i] + C[i]
You write one obvious line.
↓
Machine code
lw · lw · add · sw
Compiler turns it into CPU instructions.
↓
Datapath
regfile → ALU → regfile
Registers feed an adder; result written back.
↓
Gates & 
transistors
XOR, AND, carry logic
The adder is gates; gates are transistors.
Same computation, four languages of description. By this course's end, you'll speak all four.

<!-- page 14 -->
L01 · MODERN COMPUTER ARCHITECTURE
14 / 34
Where We Start: The Bottom
Today we begin at the very foundation — the logic of 1s and 0s.
EVERYTHING RESTS ON THIS
A transistor is just a switch: on or oﬀ. 1 or 0.
Combine switches and you get logic gates. Combine gates 
and you get arithmetic, memory, and eventually a CPU.
The mathematics that governs how 1s and 0s combine is 
Boolean algebra — and that's exactly where we start today.
TODAY'S DESTINATION
1
Boolean values
what 1 and 0 really mean
2
The core gates
AND, OR, NOT, XOR
3
Truth tables
the complete behaviour of a gate
4
Boolean laws
the rules for simplifying logic

<!-- page 15 -->
3. Boolean Basics
The algebra of true and false — invented by George Boole in 1847, and the 
language every computer speaks.

<!-- page 16 -->
L01 · MODERN COMPUTER ARCHITECTURE
16 / 34
Boolean Values: Just 1 and 0
Two values, inﬁnite possibility. Everything digital is built from this binary choice.
1
TRUE · HIGH · ON
voltage present (~3.3V or 5V)
0
FALSE · LOW · OFF
no voltage (~0V, ground)
The big idea:  represent everything — numbers, text, images, instructions — as patterns of these two values. 
Reliability comes from only needing to tell 'voltage' from 'no voltage'.

<!-- page 17 -->
L01 · MODERN COMPUTER ARCHITECTURE
19 / 34
The NOT Gate (Inverter)
One input, one output — it simply ﬂips the value. 1 becomes 0, 0 becomes 1.
Y = A'     (also written NOT A, or Ā)
TRUTH TABLE
A
Y
0
1
1
0
The simplest gate — but essential. Inversion is what lets logic 
express 'not this'.

<!-- page 18 -->
L01 · MODERN COMPUTER ARCHITECTURE
17 / 34
The AND Gate
Output is 1 only when BOTH inputs are 1. Think: a series of two switches.
Y = A · B     (also written A AND B)
TRUTH TABLE
A
B
Y
0
0
0
0
1
0
1
0
0
1
1
1
Only the last row — both 1 — gives output 1. 'All conditions 
must hold.'

<!-- page 19 -->
L01 · MODERN COMPUTER ARCHITECTURE
18 / 34
The OR Gate
Output is 1 when AT LEAST ONE input is 1. Think: two switches in parallel.
Y = A + B     (also written A OR B)
TRUTH TABLE
A
B
Y
0
0
0
0
1
1
1
0
1
1
1
1
Only the ﬁrst row — both 0 — gives 0. 'Any one condition is 
enough.'

<!-- page 20 -->
L01 · MODERN COMPUTER ARCHITECTURE
20 / 34
The NAND Gate
Output is 0 when both the inputs are 1. 
TRUTH TABLE
A
B
Y
0
0
1
0
1
1
1
0
1
1
1
0

<!-- page 21 -->
L01 · MODERN COMPUTER ARCHITECTURE
20 / 34
The NOR Gate
TRUTH TABLE
A
B
Y
0
0
1
0
1
0
1
0
0
1
1
0
Output is 1 when both the inputs are 0.

<!-- page 22 -->
L01 · MODERN COMPUTER ARCHITECTURE
20 / 34
The XOR Gate
Output is 1 when the inputs DIFFER. The 'exclusive or' — one or the other, not both.
TRUTH TABLE
A
B
Y
0
0
0
0
1
1
1
0
1
1
1
0
Same inputs → 0, diﬀerent → 1. XOR is the heart of the adder 
you'll build in L3.

<!-- page 23 -->
L01 · MODERN COMPUTER ARCHITECTURE
20 / 34
The XNOR Gate
Output is 1 when the inputs are same.
TRUTH TABLE
A
B
Y
0
0
1
0
1
0
1
0
0
1
1
1
Same inputs then output is → 1, diﬀerent → 0.

<!-- page 24 -->
L01 · MODERN COMPUTER ARCHITECTURE
21 / 34
The Four Gates at a Glance
Same two inputs A, B — four diﬀerent rules for the output.
AND
A·B
A
B
Y
0
0
0
0
1
0
1
0
0
1
1
1
OR
A+B
A
B
Y
0
0
0
0
1
1
1
0
1
1
1
1
XOR
A⊕B
A
B
Y
0
0
0
0
1
1
1
0
1
1
1
0
NAND
(A·B)'
A
B
Y
0
0
1
0
1
1
1
0
1
1
1
0
Notice: NAND is just AND with the output ﬂipped. That tiny change makes it something special — next slide.

<!-- page 25 -->
L01 · MODERN COMPUTER ARCHITECTURE
22 / 34
NAND & NOR: The Universal Gates
A teaser for L2 — from just one gate type, you can build everything.
ONE GATE TO RULE THEM ALL
NAND = NOT-AND.  NOR = NOT-OR.
Remarkable fact: using ONLY NAND gates, you can build 
AND, OR, NOT — and therefore ANY logic circuit at all.
NAND is called 'functionally complete' or universal. NOR is 
too.
e.g.  NOT A  =  A NAND A
Feed A into both inputs of a NAND → you get NOT A.
WHY IT'S HUGE
Chip factories can optimise for making ONE gate type 
extremely well.
NAND is cheap, fast, and dense in silicon — so real chips 
use enormous numbers of them.
We'll prove NAND's universality properly in L2, then use it 
to minimise real circuits.

<!-- page 26 -->
L01 · MODERN COMPUTER ARCHITECTURE
23 / 34
Quick Check
Show of hands — no notes.
Q.   For inputs A = 1, B = 0 — which gate outputs 1: AND, OR, or both?
A
Only AND
Only OR
✓ OR needs just one 1
C
Both
D
Neither
AND needs BOTH inputs 1 → gives 0 here. OR needs at least one 1 → gives 1. Diﬀerent inputs, so XOR would also be 1.
B

<!-- page 27 -->
4. Boolean Laws
The algebra: simple rules that let us simplify logic — fewer gates, cheaper and 
faster circuits.

<!-- page 28 -->
L01 · MODERN COMPUTER ARCHITECTURE
25 / 34
Identity & Null Laws
What happens when you combine a variable with a constant 0 or 1.
IDENTITY LAWS
combining with the 'do-nothing' value
A + 0 = A
OR with 0 changes nothing
A · 1 = A
AND with 1 changes nothing
NULL (DOMINANCE) LAWS
combining with the 'dominant' value
A + 1 = 1
OR with 1 is always 1
A · 0 = 0
AND with 0 is always 0
These four are the 'multiply by 1, add 0' of Boolean algebra — obvious once you see them.

<!-- page 29 -->
L01 · MODERN COMPUTER ARCHITECTURE
26 / 34
Idempotent & Complement Laws
Combining a variable with itself, or with its own inverse.
IDEMPOTENT LAWS
a variable combined with itself
A + A = A
OR-ing A with itself is just A
A · A = A
AND-ing A with itself is just A
COMPLEMENT LAWS
a variable and its inverse A'
A + A' = 1
something OR not-itself is always true
A · A' = 0
something AND not-itself is always false
Complement laws are the workhorses of simpliﬁcation — they make whole terms vanish to 0 or 1.

<!-- page 30 -->
L01 · MODERN COMPUTER ARCHITECTURE
27 / 34
The Absorption Law
A tidier rule that 'absorbs' a redundant term — a preview of real simpliﬁcation.
THE LAW
A + A·B = A
Read it: once you already have A, adding 'A AND anything' 
tells you nothing new.
If A is true, the whole expression is true regardless of B. If A 
is false, A·B is false too. Either way, it's just A.
Its partner:  A · (1 + B) = A.
WHY SIMPLIFY?
Fewer terms = fewer gates.
Fewer gates = smaller chip area, less power, and often 
faster circuits.
This is the entire economic reason Boolean algebra 
matters in hardware — and it's what L2's K-maps 
automate.

<!-- page 31 -->
L01 · MODERN COMPUTER ARCHITECTURE
28 / 34
De Morgan's Laws (Intuitive Preview)
How to push a NOT through an AND or an OR — the most-used identity in all of logic.
(A · B)' = A' + B'
NOT(A AND B) = (NOT A) OR (NOT B)
"Not both" means "at least one is missing."
(A + B)' = A' · B'
NOT(A OR B) = (NOT A) AND (NOT B)
"Neither" means "this oﬀ AND that oﬀ."
The rule of thumb:  break the bar, ﬂip the sign. A NOT over the whole expression ﬂips AND↔OR and inverts each 
variable. We'll prove it in L2.

<!-- page 32 -->
L01 · MODERN COMPUTER ARCHITECTURE
29 / 34
Worked Example: Simplify
Put the laws to work — turn a messy expression into a tiny one.
SIMPLIFY:   Y = A·B + A·B'
1
Y = A·B + A·B'
the starting expression
2
Y = A·(B + B')
factor out A (distributive law)
3
Y = A·(1)
because B + B' = 1 (complement 
law)
4
Y = A
because A·1 = A (identity law)
THE PAYOFF
Started with 2 AND gates + 1 OR gate + a 
NOT.
Ended with just a wire — Y = A.
Four gates eliminated. That's real silicon 
saved, from four lines of algebra. This is the 
power you're learning.

<!-- page 33 -->
L01 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
Trip-ups that catch nearly everyone at ﬁrst.
✕
Reading '+' as addition
In Boolean algebra + means OR, not arithmetic add. A + 1 = 
1, not 2.
✕
Confusing OR with XOR
OR is 1 for '1,1' too. XOR is 0 for '1,1'. Watch that last row.
✕
Forgetting NAND ≠ AND
NAND is AND with the output INVERTED. The bubble on the 
symbol matters.
✕
Over-trusting intuition
Always verify a simpliﬁcation with a truth table until the 
laws are second nature.
✕
1 and 0 aren't 'true/false only'
They're also HIGH/LOW voltages, ON/OFF switches — same 
idea, physical meaning.

<!-- page 34 -->
L01 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — the foundation the whole course is built on.
01
Computer architecture is the bridge from software down to transistors — this course climbs the middle of that stack.
02
Everything digital reduces to two values, 1 and 0, physically just voltage present or absent.
03
Four core gates — AND (·), OR (+), NOT ('), XOR (⊕) — are fully described by their truth tables.
04
NAND and NOR are universal: from one gate type you can build any circuit — the reason real chips use them.
05
Boolean laws (identity, null, complement, absorption, De Morgan) let us simplify logic into fewer, cheaper gates.

<!-- page 35 -->
L01 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Build the habits: truth tables, simpliﬁcation, and drawing.
01
Truth Table Drill
Write the full truth tables for XOR, 
NAND, and NOR from memory. Verify 
against the gate deﬁnitions.
02
Simplify
Simplify Y = A·(A + B) and Y = A + A'·B 
using the laws. Name each law you 
use.
03
Draw It
Draw the gate-level circuit for Y = A + 
B·C. Then build its truth table.
EXIT TICKET
1.  What is the output of an XOR gate when both inputs are 1?
2.  Simplify A·(A + B) and name the law.
3.  Where in the abstraction stack does 'the ISA' sit relative to logic gates and Python?

<!-- page 36 -->
L01 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
AND(1, 0) equals…
0
Q2
XOR outputs 1 when the inputs are…
different
Q3
A + 1 equals…
1
All three instant? You've got the foundation — L2 dives into truth tables, K-maps, and universal gates.

<!-- page 37 -->
END OF L01  ·  WELCOME ABOARD
From two values,
everything.
NEXT — L02
Logic Minimisation & Universal Gates — truth tables to circuits, K-maps for 
simpliﬁcation, and proving NAND can build anything.

<!-- page 38 -->
Thanks for 
attending!

### L02 · Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical For ... (13 Aug 2026)
_Topics: Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical Forms, Karnaugh Maps, SOP Form (Minterms), POS Form (Maxterms), 2-Variable K-Map, 3-Variable K-Map, 4-Variable K-Map, Don't-Cares_

#### Whiteboard

<!-- page 1 -->
Lecture: 0010 
Logic Minimisation & 
Universal Gates
CSA222: Modern Computer Architecture
How engineers take 16 gates and leave only 2 — the art of doing less.

<!-- page 2 -->
L02 · MODERN COMPUTER ARCHITECTURE
02 / 34
Where We Left Off — Recap of L1
Four gates, a handful of laws. Today we turn them into minimal circuits.
&
AND · OR · NOT · XOR
The four core gates and 
their truth tables — the 
vocabulary of all digital 
logic.
01
Boolean values 1 / 0
Every signal is a voltage 
that means TRUE or FALSE 
— nothing in between.
=
Identity · Null · 
Idempotent
A+0=A, A·1=A, A+1=1, 
A+A=A — the algebra that 
simpliﬁes expressions.
!
NAND / NOR 
previewed
We hinted these are 
'universal'. Today we 
prove it and build with 
them.
Prereq check: if truth tables for AND/OR/NOT/XOR feel automatic, you're ready.

<!-- page 3 -->
L02 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Three stops, one destination: fewer gates, same truth table.
1
Truth Tables → 
Expressions
SOP & POS: two mirror-image 
recipes for turning any truth table 
into algebra.
→
2
Karnaugh Maps
Minimisation becomes a visual 
grouping game — no messy 
algebra required.
→
3
Universal Gates
DeMorgan's theorems prove one 
gate — NAND — can build every 
circuit that exists.

<!-- page 4 -->
L02 · MODERN COMPUTER ARCHITECTURE
04 / 34
Why Shrink a Circuit?
Every extra gate is silicon area, power burned, and picoseconds lost.
16 → 2
A typical 4-variable function
can collapse from 16 gates
to as few as 2 — same
truth table, 8× less silicon.
▢
AREA
Fewer gates → smaller die → 
more chips per wafer → 
cheaper.
⚡
POWER
Less switching → lower dynamic 
power → longer battery life.
⏱
SPEED
Shorter gate chains → faster 
propagation → higher clock.
₹
COST
Less silicon + higher yield = 
more proﬁt at fab scale.

<!-- page 5 -->
VLSI Design Flow (Logic Synthesis)
L02 · MODERN COMPUTER ARCHITECTURE
●
This is our Goal to understand !!
●
Apple's M3 packs 98 billion 
transistors on TSMC's 
second-generation 3nm process 
(N3E) — at that density, a 1% 
gate-count reduction, multiplied 
across billions of gates, is real die 
area and real dollars. 
●
This is exactly why chip 
companies run logic synthesis 
tools (Synopsys Design Compiler, 
Cadence Genus) before 
fabrication.

<!-- page 6 -->
L02 · MODERN COMPUTER ARCHITECTURE
05 / 34
From Truth Table to Expression
You can't minimise a table. First turn it into algebra — two canonical ways.
A
B
C
F
0
0
0
0
0
0
1
1
0
1
0
0
0
1
1
1
1
0
0
0
1
0
1
1
1
1
0
0
1
1
1
1
Highlighted rows are where F = 1
SOP — Sum of Products
OR together the rows where F = 1. Each such row → one AND term (a minterm).
F = A'B'C + A'BC + AB'C + ABC
POS — Product of Sums
AND together the rows where F = 0. Each such row → one OR term (a maxterm).
F = (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C)
Same function, two equivalent descriptions — pick whichever gives fewer terms.

<!-- page 7 -->
L02 · MODERN COMPUTER ARCHITECTURE
06 / 34
Sum of Products (SOP)
For every row where F = 1, write a minterm. Then OR them together.
1
Find every row where F = 1
These are the only rows that contribute to an SOP expression.
2
Write one minterm per row
A single AND term true for exactly that one input combination.
3
Variable = 1 → X   ·   Variable = 0 → X'
Keep it if it's 1; invert it if it's 0.
4
OR all minterms together
The ﬁnished canonical SOP expression.
WORKED EXAMPLE
Row 5:  A=1, B=0, C=1,  F=1
A = 1
→  A
B = 0
→  B'
C = 1
→  C
minterm  m5  =  A · B' · C

<!-- page 8 -->
L02 · MODERN COMPUTER ARCHITECTURE
07 / 34
Product of Sums (POS)
The mirror image — for every 0-row write a maxterm, then AND them.
1
Find every row where F = 0
The 0-rows are the ones that build a POS expression.
2
Write one maxterm per row
A single OR term that is 0 for exactly that one combination.
3
Variable = 1 → X'   ·   Variable = 0 → X
Inverted relative to SOP — this is THE trap. Flip it.
4
AND all maxterms together
The ﬁnished canonical POS expression.
WORKED EXAMPLE
Row 2:  A=0, B=1, C=0,  F=0
A = 0
→  A
B = 1
→  B'
C = 0
→  C
maxterm  M2  =  (A + B' + C)

<!-- page 9 -->
L02 · MODERN COMPUTER ARCHITECTURE
08 / 34
Minterm & Maxterm Shorthand
Textbooks and exams write canonical forms in one compact line — read it instantly.
Σ  NOTATION
Sigma means SOP — OR together the listed minterm 
numbers.
F = Σm(1, 3, 5, 7)
Π  NOTATION
Pi means POS — AND together the listed maxterm 
numbers.
F = ΠM(0, 2, 4, 6)
WHY IT MATTERS
•
The number in Σm(...) is the decimal value of that 
row's input bits.
•
Row A=1,B=0,C=1 → binary 101 → 5, so it appears as 
m5.
•
Σ and Π over the SAME function are 
complementary: every index is in exactly one.

<!-- page 10 -->
L02 · MODERN COMPUTER ARCHITECTURE
09 / 34
Boolean Algebra: Core Laws
The algebraic toolkit K-maps are about to make visual — no grid required.
LAW FAMILY
KEY IDENTITIES
WHY IT MATTERS
Identity & Null
A+0=A   ·   A·1=A
A+1=1   ·   A·0=0
A single wire or a constant wins — no gate needed.
Idempotent & Complement
A+A=A   ·   A·A=A
A+A'=1  ·   A·A'=0
No duplicate gates; a signal and its inverse cancel.
Absorption
A+A·B=A
A·(A+B)=A
The bigger term swallows the smaller one whole.
Distributive
A(B+C)=AB+AC
A+BC=(A+B)(A+C)
Yes — OR distributes over AND too, unlike ordinary 
algebra.
Every K-map grouping you draw next is one of these laws applied visually instead of algebraically.

<!-- page 11 -->
10 / 34
Karnaugh Maps
Minimisation as pattern recognition — group adjacent 1s and watch variables cancel.

<!-- page 12 -->
L02 · MODERN COMPUTER ARCHITECTURE
11 / 34
Enter Karnaugh Maps a’ b’ edit
A truth table re-organised so neighbours diﬀer by exactly ONE bit.
A\B
0
1
0
1
0
1
0
1
Group the B=1 column →  F = B
A cancels: both A=0 and A=1 give 1.
THE KEY INSIGHT
Each cell = one minterm.
The grid is just the truth table, rearranged.
Adjacent 1-cells differ by one variable.
So grouping them makes that variable cancel.
Grouping = simplification.
Bigger groups → more variables cancel → shorter expression.
It's pattern recognition, not algebra.
Your eye does the work the Boolean laws would.

<!-- page 13 -->
L02 · MODERN COMPUTER ARCHITECTURE
12 / 34
3-Variable K-Map
8 minterms in Gray-code order — every horizontal step ﬂips exactly one bit.
A\BC
00
01
11
10
0
1
0
1
1
0
0
1
1
0
Group of 4  →  F = C
4 minterms collapse into a single variable.
GRAY-CODE ORDERING
Columns run 00 → 01 → 11 → 10, not binary count. This guarantees 
every step ﬂips just one variable, keeping adjacency meaningful.
LEGAL GROUP SIZES
1 cell  → full 3-variable minterm
2 cells
 → 2-variable term
4 cells
 → 1-variable term
8 cells
 → constant 1

<!-- page 14 -->
L02 · MODERN COMPUTER ARCHITECTURE
13 / 34
4-Variable K-Map
16 cells, both axes Gray-coded. Bigger groups = bigger savings.
AB\CD
00
01
11
10
00
01
11
10
1
0
0
1
1
1
1
1
0
1
1
0
0
0
0
0
GROUP ANATOMY
OCTET
8 cells
3 variables cancel
QUAD
4 cells
2 variables cancel
PAIR
2 cells
1 variable cancels
SINGLE
1 cell
nothing cancels
Each doubling of group size cancels exactly one more variable.
F = A’B + BD + A’D’

<!-- page 15 -->
L02 · MODERN COMPUTER ARCHITECTURE
14 / 34
The Wrap-Around Trick
A K-map is a torus (donut) — opposite edges and all four corners are neighbours.
AB\CD
00
01
11
10
00
01
11
10
1
0
0
1
0
0
0
0
0
0
0
0
1
0
0
1
THINK: DONUT
What looks far apart on ﬂat paper is actually adjacent. Opposite edges 
are glued together.
• Left column  ↔  right column
• Top row  ↔  bottom row
• All four corners = one group
4 corners → one quad → F = B'D'

<!-- page 16 -->
L02 · MODERN COMPUTER ARCHITECTURE
15 / 34
The Don't-Care (X)
Some input combinations never happen — treat their output as whatever helps.
AB\CD
00
01
11
10
00
01
11
10
1
1
X
0
0
X
X
0
0
0
0
0
0
0
0
0
WHERE DO X's COME FROM?
Impossible inputs
A BCD digit decoder never sees codes 10–15.
Unconnected outputs
A result bit nobody reads downstream.
Guaranteed by system
A sensor that physically can't produce that combo.
RULE   Assign each X to 0 or 1 — whichever makes your groups BIGGER.
Here the X's become 1 → one big green quad.

<!-- page 17 -->
L02 · MODERN COMPUTER ARCHITECTURE
17 / 34
Full Worked Example: Table → Circuit
One function, start to ﬁnish — and it beats the 16→2 promise.
AB\CD
00
01
11
10
00
01
11
10
1
1
0
0
1
1
0
0
1
1
0
0
1
1
0
0
F = C'
NAIVE SOP
9 gates
8 four-input ANDs + one big eight-input OR
MINIMISED
1 gate
F = B' — a single NOT gate does it all
CANCELLED
3 of 4 vars
A, C, and D all vanish from the answer
CALLBACK
Beats 16→2
Slide 4's opening promise — beaten
This is exactly what a logic-synthesis tool (Synopsys, Cadence) does — automatically, at 
billion-gate scale, in seconds.

<!-- page 18 -->
19 / 34
DeMorgan & Universal Gates
One gate, wired to itself, builds every Boolean function — and every chip you own.

<!-- page 19 -->
L02 · MODERN COMPUTER ARCHITECTURE
20 / 34
DeMorgan's Theorems
Two rules that let you swap freely between AND-world and OR-world.
RULE 1
~(A · B)  =  ~A + ~B
NOT ( A AND B )  =  ( NOT A ) OR ( NOT B )
RULE 2
~(A + B)  =  ~A · ~B
NOT ( A OR B )  =  ( NOT A ) AND ( NOT B )
The one-line memory hook:   “Break the bar, flip the sign.”

<!-- page 20 -->
L02 · MODERN COMPUTER ARCHITECTURE
21 / 34
Bubble Pushing
DeMorgan as a physical motion — slide a bubble through a gate and it ﬂips type.
BEFORE
AND
A
B
~(A·B)
AND gate with an output bubble = NAND.
→
AFTER
OR
A
B
~A + ~B
OR gate with input bubbles — same function!
Bubble pushing IS DeMorgan — just drawn instead of written. Same theorem, no new rule.

<!-- page 21 -->
L02 · MODERN COMPUTER ARCHITECTURE
22 / 34
DeMorgan in Practice
Apply it repeatedly, one bar at a time, from the outside in.
GOAL
Simplify:   ~(A · B + C)
STEP 1
Break the outer NOT over the OR:   ~(A·B) · ~C
STEP 2
Break the remaining bar on ~(A·B):   (~A + ~B) · ~C
DONE
(~A + ~B) · ~C
Scan for EVERY remaining bar after each step — students stop after one and miss the nested NOT.

<!-- page 22 -->
L02 · MODERN COMPUTER ARCHITECTURE
18 / 34
Quick Check
Show of hands — no wrong answers, only data points.
Q.   ~(A + B)  is equivalent to…
A
~A + ~B
B
~A · ~B
✓ DeMorgan's Rule 2
C
A · B
D
A + B
NOT of an OR becomes an AND of NOTs — the theorem we prove on the next slide.

<!-- page 23 -->
L02 · MODERN COMPUTER ARCHITECTURE
24 / 34
NAND Is Everything
One gate type, wired to itself the right way, builds every Boolean function.
ONLY
NAND
is needed to build every gate — and 
therefore every CPU.
THE PROOF, IN THREE STEPS
NOT
= NAND(A, A)
Tie both inputs together.
AND
= NAND then NOT
Invert the NAND's output.
OR
= NAND of inverted inputs
DeMorgan, realised in silicon.

<!-- page 24 -->
L02 · MODERN COMPUTER ARCHITECTURE
25 / 34
Build #1 — NOT from NAND
Tie both inputs of a NAND together. Done.
NAND
A
~A
A
~A
0
1
1
0
RESULT
NOT(A) =
NAND(A, A)
With both inputs equal, NAND is 1 when 
A=0 and 0 when A=1 — precisely the 
NOT truth table. One gate, zero extra 
parts.

<!-- page 25 -->
L02 · MODERN COMPUTER ARCHITECTURE
26 / 34
Build #2 — AND from NAND
A NAND, followed by another NAND wired as a NOT. Two gates.
NAND
A
B
NOT
A·B
~(A·B)
RESULT
AND(A, B) =
NAND( NAND(A,B),
           NAND(A,B) )
The ﬁrst NAND gives ~(A·B); the second 
— wired as a NOT — inverts it back to 
A·B. This is why a 'real' AND cell costs 
extra transistors.

<!-- page 26 -->
L02 · MODERN COMPUTER ARCHITECTURE
27 / 34
Build #3 — OR from NAND
Invert each input, then NAND the results. DeMorgan in silicon.
NOT
NOT
A
B
NAND
A+B
~A
~B
RESULT
OR(A, B) =
NAND( NAND(A,A),
           NAND(B,B) )
NAND(~A, ~B) = ~(~A·~B) = A+B by 
DeMorgan. This is Slide 20's Rule 1 
turned into a working circuit — algebra 
becoming hardware.

<!-- page 27 -->
L02 · MODERN COMPUTER ARCHITECTURE
28 / 34
NOR Is Universal Too
Every NAND trick has a NOR mirror — swap AND ↔ OR and the inversion positions.
BUILD
NAND-ONLY
NOR-ONLY
NOT
NAND(A, A)
NOR(A, A)
AND
NAND(NAND(A,B), NAND(A,B))
NOR(NOR(A,A), NOR(B,B))
OR
NAND(NAND(A,A), NAND(B,B))
NOR(NOR(A,B), NOR(A,B))
Both are universal — but NAND maps more naturally to CMOS transistor layouts. That's why it wins (next slide).
Bonus: NAND ﬂash vs NOR ﬂash are named after which gate topology their memory cells resemble.

<!-- page 28 -->
L02 · MODERN COMPUTER ARCHITECTURE
29 / 34
Why Chip Fabs Pick NAND
At the transistor level, a CMOS NAND needs fewer transistors than an AND.
CMOS NAND
4
TRANSISTORS
2 NMOS + 2 PMOS — a direct, natural mapping.
CMOS AND
6
TRANSISTORS
NAND + an inverter (adds 2 more transistors).
Multiply by billions of gates per chip.  Apple's M4 packs 28 billion transistors on TSMC's 3nm — that 2-transistor 
delta becomes a city block of silicon.

<!-- page 29 -->
L02 · MODERN COMPUTER ARCHITECTURE
31 / 34
Common Mistakes to Avoid
The exact slips that cost marks in exams and interviews.
✕
Flipping the SOP/POS inversion rule
SOP: 1→X, 0→X'.  POS is the opposite. Say it out loud 
each time.
✕
Reading K-map columns as binary
They're Gray code (00,01,11,10). Binary order breaks 
single-bit adjacency.
✕
Grouping diagonally
Diagonal cells diﬀer by two bits — never adjacent. Only 
rectangles of size 2ⁿ.
✕
Forgetting wrap-around & corners
Always check edges and all four corners before ﬁnalising 
groups.
✕
Stopping DeMorgan after one bar
Scan for every remaining NOT bar — nested ones need 
another pass.
✕
Thinking NAND is 'more powerful'
It's self-suﬃcient, not stronger. AND+OR+NOT together 
are equally universal.

<!-- page 30 -->
L02 · MODERN COMPUTER ARCHITECTURE
32 / 34
Key Takeaways
Five sentences. Pin them up — everything else in this course builds from here.
01
Any truth table → canonical SOP (from the 1-rows) or POS (from the 0-rows).
02
K-maps turn minimisation into a visual pattern-ﬁnding game with Gray-code adjacency.
03
Bigger legal groups cancel more variables; the grid wraps like a torus, and don't-cares are free wildcards.
04
DeMorgan: break the bar, ﬂip the sign — the bridge between AND-world and OR-world.
05
NAND (or NOR) alone can implement every Boolean function — and fewer CMOS transistors is why fabs choose it.

<!-- page 31 -->
L02 · MODERN COMPUTER ARCHITECTURE
33 / 34
Practice & Homework
Three activities plus exit problems — pair up on the whiteboard.
01
Truth Table → SOP
3-input table with 1s at rows {1,3,5,7}. 
Write the canonical SOP, then 
minimise on a K-map.
02
K-Map Race
In pairs, minimise three 4-variable 
K-maps under a timer. Compare who 
found the largest groups.
03
NAND-Only Challenge
Implement AND, OR, NOT — then XOR 
— using only 2-input NAND gates. 
Verify with a truth table.
EXIT TICKET
1.  Minimise  F(A,B,C,D) = Σm(0,2,5,7,8,10,13,15)  using a K-map.
2.  Apply DeMorgan to  ~(A·B + C).
3.  Build a 2-input OR gate using only NAND gates — sketch and verify.

<!-- page 32 -->
END OF L02
One gate,
every circuit.
NEXT — L03
Combinational Building Blocks: MUX, DEMUX, Decoders & Adders — the actual guts 
of a CPU's ALU, built from everything you minimised today.

<!-- page 33 -->
Thanks 
for 
watching!

### L03 · DeMorgan's Theorems, Universal Gates, Combinational Building Blocks, Reusable Bl ... (18 Aug 2026)
_Topics: Universal Gates, DeMorgan's Theorems, Combinational Building Blocks, Reusable Blocks, Multiplexers, 2:1 MUX, 4:1 and n:1 MUX Cascading, Demultiplexers and Decoders, DEMUX_

#### Whiteboard

<!-- page 1 -->
Lecture: 0011 
Combinational Building 
Blocks
CSA222: Modern Computer Architecture
Two Philosophies for a CPU's Language
The instruction set is the contract between hardware and software — 
and there are two great ways to write it.

<!-- page 2 -->
L03 · MODERN COMPUTER ARCHITECTURE
02 / 34
Where We Left Off
From single gates to reusable blocks — L1 & L2 gave us the raw materials.
&
Gates & truth tables
AND, OR, NOT, XOR — and 
how any behaviour 
becomes a truth table 
(L1).
Σ
SOP / POS forms
Any truth table → a 
Boolean expression we 
can build in hardware 
(L2).
▦
K-map 
minimisation
Fewest gates for a given 
function — area, power, 
delay all matter (L2).
⊼
NAND is universal
One gate builds 
everything. Today we 
build USEFUL things from 
gates.
Today: stop thinking in individual gates. Start thinking in blocks you reuse everywhere.

<!-- page 3 -->
L03 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Four building blocks — then we snap them together into a CPU's core.
1
Multiplexer/Selectors
Multiplexers pick one of many 
inputs; demultiplexers route one 
input to many outputs.
→
2
Decoders
Turn an n-bit code into one active 
line out of 2ⁿ — the heart of 
addressing.
→
3
Adders
Half and full adders — the 
arithmetic every ALU is built on.
Then — the payoﬀ:  we show exactly where MUXes, decoders, and adders live inside an ALU and a register 
ﬁle.

<!-- page 4 -->
L03 · MODERN COMPUTER ARCHITECTURE
04 / 34
Why Reusable Blocks?
Nobody designs a CPU one gate at a time — they use a parts catalogue.
~5
core block types
MUX, decoder, adder, register,
and a few more — repeated 
millions
of times — build an entire 
processor.
▣
ABSTRACTION
Think 'select this input', not '17 
gates wired thus'.
⟳
REUSE
One veriﬁed MUX design, 
dropped in everywhere it's 
needed.
✓
VERIFICATION
Test the block once; trust 
every copy of it.
⇗
SCALE
Small blocks cascade into big 
ones — 2:1 MUX → 4:1 → 8:1.

<!-- page 5 -->
05 / 34
1. Multiplexers
A data selector: many inputs go in, a select code picks exactly one to come out.

<!-- page 6 -->
L03 · MODERN COMPUTER ARCHITECTURE
05 / 34
1. Multiplexers
The fundamental routing block of digital computer systems.
CORE DEFINITION
A Data Selector
A multiplexer acts as a digital traﬃc controller for 
processing signals.
Many inputs go in, but a dynamic select code picks 
exactly one to come out.
IN
Many Inputs
Multiple source channels arrive carrying unique parallel data 
streams.
SEL
The Select Code
Control signals act as the selector, dynamically determining the 
routing path.
OUT
Exactly One Output
Only the chosen input line is connected and successfully passes 
outward.

<!-- page 7 -->
L03 · MODERN COMPUTER ARCHITECTURE
06 / 34
The 2:1 Multiplexer
One select line chooses between two inputs — the simplest selector.
2:1
MUX
A
B
S
Y
S = 0 → Y = A      S = 1 → Y = B
BOOLEAN EQUATION
Y = S'·A + S·B
THINK: RAILWAY SWITCH
Two tracks (A, B) converge to one line (Y). The select signal S is 
the switch lever deciding which train passes through. Change S, 
and a completely diﬀerent input ﬂows out — instantly, no data is 
stored.

<!-- page 8 -->
L03 · MODERN COMPUTER ARCHITECTURE
07 / 34
Building a 2:1 MUX from Gates
Y = S'·A + S·B — two ANDs, one NOT, one OR.
READING IT
• The top AND passes A only when 
S'=1 (i.e. S=0).
• The bottom AND passes B only when 
S=1.
• At any moment exactly one AND is 
'open'; the OR merges them into Y.

<!-- page 9 -->
L03 · MODERN COMPUTER ARCHITECTURE
08 / 34
The 4:1 Multiplexer
Two select lines address four inputs — 2 select bits choose 1 of 2² = 4.
4:1
MUX
I0
I1
I2
I3
S1
S0
Y
SELECT → OUTPUT
S1
S0
Y
0
0
I0
0
1
I1
1
0
I2
1
1
I3
Y = S1'S0'·I0 + S1'S0·I1 + S1S0'·I2 + S1S0·I3
Each select combination = one minterm that gates exactly one input through.

<!-- page 10 -->
L03 · MODERN COMPUTER ARCHITECTURE
09 / 34
Cascading: Build Big MUXes from Small Ones
A 4:1 MUX is just three 2:1 MUXes in a tree.
WHY IT MATTERS
One small, veriﬁed block scales to any 
size.
Need an 8:1? Two 4:1s feeding a 2:1. 
Need 16:1? Keep tree-ing.
This 'compose small proven parts into 
big ones' is exactly how real chips — 
and good software — are built.

<!-- page 11 -->
L03 · MODERN COMPUTER ARCHITECTURE
10 / 34
A MUX Can Be Any Logic Function
Wire the inputs to constants, and a 4:1 MUX implements ANY 2-variable function.
THE TRICK
Feed the input variables into the SELECT lines. Then wire 
each data input Iₖ to the 0 or 1 that the truth table 
demands for that row.
Example — implement XOR(A,B):
S1=A, S0=B   (selects)
I0 = 0   (A=0,B=0 → XOR=0)
I1 = 1   (A=0,B=1 → XOR=1)
I2 = 1   (A=1,B=0 → XOR=1)
I3 = 0   (A=1,B=1 → XOR=0)
WHY THIS IS A BIG DEAL
A 2ⁿ:1 MUX implements ANY n-variable function — 
no minimisation needed.
This is the principle behind the Lookup Tables (LUTs) 
inside every FPGA.
An FPGA is, at its core, a sea of tiny MUX-based LUTs 
you reprogram by changing what the data inputs 
are wired to — which is why an FPGA can 'become' 
any circuit.

<!-- page 12 -->
11 / 34
2. Demultiplexers & Decoders
The reverse of a MUX — route one input to many outputs, or light up one line 
from a code.

<!-- page 13 -->
L03 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Demultiplexer (DEMUX)
One input, many outputs — the select code decides which output it reaches.
1:4
DEMUX
D
O0
O1
O2
O3
S1
S0
MUX RUN BACKWARDS
A MUX has many inputs → one output. A DEMUX ﬂips it: one 
input → many outputs. The select bits choose the single 
destination; all other outputs stay at 0.
REAL USE
A single data line fanned out to one of many destinations — e.g. 
a CPU writing a result to one chosen register, or a network 
switch routing a packet to one output port.

<!-- page 14 -->
L03 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Demultiplexer (DEMUX)
One input, many outputs — the select code decides which output it reaches.
ROUTING TABLE
A
B
Y0
Y1
Y2
Y3
0
0
D
0
0
0
0
1
0
D
0
0
1
0
0
0
D
0
1
1
0
0
0
D

### L04 · n-to-2^n Decoders, Adders, Half Adder, Full Adder (20 Aug 2026)
_Topics: Adders, n-to-2^n Decoders, Half Adder, Full Adder_

#### Whiteboard

<!-- page 1 -->
Lecture: 0011 
Combinational Building 
Blocks - II
CSA222: Modern Computer Architecture
Two Philosophies for a CPU's Language
The instruction set is the contract between hardware and software — 
and there are two great ways to write it.

<!-- page 2 -->
L03 · MODERN COMPUTER ARCHITECTURE
13 / 34
The n-to-2ⁿ Decoder
Turn an n-bit binary code into exactly one active output line.
2-to-4
DECODER
A1
A0
D0
D1
D2
D3
INPUT CODE → ONE HOT OUTPUT
A1
A0
D3 D2 D1 D0
0
0
0 0 0 1
0
1
0 0 1 0
1
0
0 1 0 0
1
1
1 0 0 0
Exactly one output is 1 at a time — this is called 'one-hot' encoding. Each output 
is a single minterm of the input code.

<!-- page 3 -->
L03 · MODERN COMPUTER ARCHITECTURE
14b / 34
Block Diagram: 3-to-8 Decoder
Routing a 3-bit binary input code to exactly one of eight unique active-high output lines.
3-to-8
DECODER
A2
A1
A0
D0
D1
D2
D3
D4
D5
D6
D7
THE SCHEMATIC MODEL
Converts an n-bit coded input into 
a 2ⁿ one-hot output selection.
Perfect spatial mapping: any single 
binary combination forces exactly 
one output line high.
Specifications
Inputs: 3 address bits
Outputs: 8 distinct minterms

<!-- page 4 -->
L03 · MODERN COMPUTER ARCHITECTURE
14a / 34
Truth Table: 3-to-8 Decoder
The 3-bit binary input code activates exactly one of the eight minterm output lines (one-hot).
A2
A1
A0
D0
D1
D2
D3
D4
D5
D6
D7
0
0
0
1
0
0
0
0
0
0
0
0
0
1
0
1
0
0
0
0
0
0
0
1
0
0
0
1
0
0
0
0
0
0
1
1
0
0
0
1
0
0
0
0
1
0
0
0
0
0
0
1
0
0
0
1
0
1
0
0
0
0
0
1
0
0
1
1
0
0
0
0
0
0
0
1
0
1
1
1
0
0
0
0
0
0
0
1
THE DECISION MATRIX
Every 3-bit input pattern generates a 
unique minterm value.
Only one output line "ﬁres" (equals 1) at 
any given time.
This is the mathematical deﬁnition of a 
one-hot representation.
Inputs = 3 bits (A2, A1, A0)
Outputs = 8 lines (D0 to D7)

<!-- page 5 -->
L03 · MODERN COMPUTER ARCHITECTURE
14 / 34
Inside a 3-to-8 Decoder
Each output is one AND gate computing a single minterm of the 3-bit input.
THE PATTERN
A 3-to-8 decoder uses 8 AND gates + 3 
inverters.
Output Dₖ ﬁres only for the one input 
code equal to k.
Generalises: an n-to-2ⁿ decoder needs 2ⁿ 
AND gates — the cost grows 
exponentially with address width.
A2
A1
A0
D0 (000)
D1 (001)
D2 (010)
D3 (011)
D4 (100)
D5 (101)
D6 (110)
D7 (111)

<!-- page 6 -->
L03 · MODERN COMPUTER ARCHITECTURE
16 / 34
MUX vs DEMUX vs Decoder
Three cousins — know which one a problem is asking for.
MULTIPLEXER
DEMULTIPLEXER
DECODER
Inputs
2ⁿ data + n select
1 data + n select
n code bits (+enable)
Outputs
1
2ⁿ
2ⁿ (one-hot)
Does what
Selects one input
Routes to one output
Activates one line per code
One-liner
Many → one
One → many
Code → one-hot
Memory hook:  a MUX and a DEMUX are mirror images; a decoder is a DEMUX whose 'data' input is just a constant 1 (an enable).

<!-- page 7 -->
L03 · MODERN COMPUTER ARCHITECTURE
17 / 34
Quick Check
Show of hands — which block does the job?
Q.   "Select one of 8 sensor readings to send to the CPU."  Which block?
B
1:8 DEMUX
C
3-to-8 Decoder
D
Full Adder
Trap: a decoder activates a line from a CODE — it doesn't pass data through. This is a MUX job.
✓ many inputs → one output
A
8:1 MUX

<!-- page 8 -->
L03 · MODERN COMPUTER ARCHITECTURE
18 / 34
03
Adders
The arithmetic core — from adding two bits to adding 
two 32-bit numbers.
STAGE 1: TWO BITS (HALF / FULL ADDER)
Inputs: A, B➔Sum, Carry
The basic building blocks of binary addition. Handles single-digit 
inputs.
STAGE 2: Multi-bit (32-BIT ADDER)
Inputs: A[31:0], B[31:0]➔Sum[31:0]
Chaining adders together to compute complex, multi-word 
arithmetic.

<!-- page 9 -->
L03 · MODERN COMPUTER ARCHITECTURE
19 / 34
The Half Adder
Adds two single bits. Produces a Sum and a Carry — but can't accept a carry in.
TRUTH TABLE
A
B
Carry
Sum
0
0
0
0
0
1
0
1
1
0
0
1
1
1
1
0
Sum = A ⊕ B
Carry = A · B
"Half" because it can't take a carry-IN from a previous stage.

<!-- page 10 -->
L03 · MODERN COMPUTER ARCHITECTURE
20 / 34
The Full Adder
Adds THREE bits: A, B, and a carry-in. This is the real workhorse.
FULL
ADDER
A
B
Cin
Sum
Cout
TRUTH TABLE
A
B
Cin
Sum
Cout
0
0
0
0
0
0
0
1
1
0
0
1
0
1
0
0
1
1
0
1
1
0
0
1
0
1
0
1
0
1
1
1
0
0
1
1
1
1
1
1
EQUATIONS
Sum = A ⊕ B ⊕ Cin
Cout = AB + Cin(A⊕B)

<!-- page 11 -->
L03 · MODERN COMPUTER ARCHITECTURE
21 / 34
Full Adder = Two Half Adders + an OR
Compose the block you already have to build the bigger one.
THE IDEA
HA1 adds A + B.
HA2 adds that partial sum + Cin.
Either half can generate a carry, so an 
OR merges them into Cout.
Same lesson as MUX cascading: reuse a 
proven block.

<!-- page 12 -->
L03 · MODERN COMPUTER ARCHITECTURE
22 / 34
Ripple-Carry Adder
Chain full adders — each one's carry-out feeds the next one's carry-in.
FA0
     A0   B0
S0
FA1
     A1  B1
S1
FA2
      A2   B2
S2
FA3
    A3   B3
S3
Cin=0
C1
C2
C3
Cout
The Carry Ripple Effect
Carry ripples right → left, one full adder at a time.
Just like adding by hand, carrying the 1. Each block's carry-out feeds 
directly into the next stage's carry-in.
Scaling & Complexity
A 4-bit adder = 4 full adders. A 32-bit adder = 32 chained.
Simple and straightforward to build — but look out for carry 
propagation delay (watch the timing on next slide).

<!-- page 13 -->
L03 · MODERN COMPUTER ARCHITECTURE
23 / 34
The Catch: Carry Propagation Delay
The last bit can't settle until the carry has rippled through every stage.
THE BOTTLENECK
Each full adder must wait for the carry from the one 
before it. For a 32-bit ripple adder, the worst-case delay is 
~32 gate-delays stacked end to end.
Delay grows linearly with width:
4-bit
4Δ
8-bit
8Δ
16-bit
16Δ
32-bit
32Δ
THE FIX (PREVIEW)
Carry-Lookahead Adders
compute all carries in parallel from the inputs directly — instead 
of waiting for them to ripple.
This trades more gates (area) for far less delay (speed) — the 
classic area-vs-speed tradeoff from L2, now real.
Every GHz CPU uses lookahead or hybrid adders — ripple-carry is 
far too slow at modern clock speeds.

<!-- page 14 -->
L03 · MODERN COMPUTER ARCHITECTURE
29 / 34
Common Mistakes to Avoid
The slips that cost marks in exams and interviews.
✕
Confusing MUX and DEMUX
MUX = many→one (select an input). DEMUX = 
one→many (route to an output). Opposite directions.
✕
Mixing up DEMUX and decoder
A decoder is a DEMUX with its data input tied to 1 — it 
activates a line, it doesn't pass data.
✕
Wrong select-line count
2ⁿ inputs need n select lines. An 8:1 MUX needs 3 selects, 
not 8. Count carefully.
✕
Forgetting the carry-in
A half adder can't chain — it has no Cin. Multi-bit 
addition needs FULL adders.
✕
Ripple adder is 'fast'
It's simple, not fast. Delay grows linearly with width — 
real CPUs use carry-lookahead.
✕
MUX method: too many selects
A 4:1 MUX handles a 3-variable function (2 selects + data 
tricks) — don't use 3 selects.

<!-- page 15 -->
L03 · MODERN COMPUTER ARCHITECTURE
30 / 34
Key Takeaways
Five sentences. These blocks are the alphabet of every processor.
01
A MUX selects one of many inputs (Y = S'A + SB for 2:1); a DEMUX does the reverse — one input to one of many outputs.
02
A decoder turns an n-bit code into one active line out of 2ⁿ — the foundation of all addressing.
03
Any function can be built from a decoder + OR, or from a single MUX with cleverly wired data inputs (the FPGA principle).
04
A half adder adds two bits; a full adder adds three (with carry-in) and chains into multi-bit ripple adders.
05
Ripple-carry is simple but slow — carry propagation delay grows with width, which is why real CPUs use 
carry-lookahead.

<!-- page 16 -->
L03 · MODERN COMPUTER ARCHITECTURE
31 / 34
Practice & Homework
Build and verify — the only way this material sticks.
01
MUX from Gates
Build a 2:1 MUX using AND, OR, NOT 
gates. Verify with a truth table for all 
S, A, B.
02
Decoder Decode
Fill the full output table of a 3-to-8 
decoder for all 8 input codes.
03
HA → FA
Build a half adder, then extend to a full 
adder. Identify the extra signal it needs 
and why.
EXIT TICKET
1.  Implement a 4:1 MUX using only 2:1 MUXes.
2.  Use a 4:1 MUX to implement F(A,B,C) = Σm(1,3,5,6).
3.  A 3-to-8 decoder: how many AND gates does it use, and what does each compute?

<!-- page 17 -->
L03 · MODERN COMPUTER ARCHITECTURE
32 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
A 2:1 MUX selects…
one of two inputs
Q2
The Sum output of a half adder is…
A XOR B
Q3
A 3-to-8 decoder activates…
exactly one of 8 outputs
If all three were instant, you're ready for Lab work and L4 (Number Systems & Two's Complement).

<!-- page 18 -->
L03 · MODERN COMPUTER ARCHITECTURE
33 / 34
Go Deeper
References and where to practise before the next lab.
Harris & Harris
Digital Design and Computer Architecture — Chapter 2 (Combinational Logic Design). The primary text for this module.
Patterson & Hennessy
Computer Organization and Design — Appendix on logic; connects these blocks to the datapath in Module 4.
Simulate it
Build every block in Logisim or on the Verilog/GTKWave ﬂow from the labs. Seeing a carry ripple in a waveform makes Slide 23 
click.

<!-- page 19 -->
END OF L03
From blocks,
a processor.
NEXT — L04
Number Systems, Two's Complement & Overﬂow — how the adders you just built 
actually represent negative numbers, and when they silently go wrong.

<!-- page 20 -->
Thanks 
for 
watching!

### L05 · ALU and Register File, Number Systems & Two's Complement, Number Systems, Binary ... (25 Aug 2026)
_Topics: Negation, Binary to Decimal Conversion, Binary Addition, Binary Subtraction, 1's Complement, Hexadecimal Number System, Number Systems, ALU and Register File, Signed Representations, Number Systems & Two's Complement, Two's Complement, Sign-Magnitude, Range, Sign Extension_

#### Whiteboard

<!-- page 1 -->
Lecture: 0100 
Number Systems &
Two's Complement
CSA222: Modern Computer Architecture
Binary · Hex · Signed Integers · Overflow
How the adders you just built actually represent numbers — and when 
they silently go wrong.

<!-- page 2 -->
L04 · MODERN COMPUTER ARCHITECTURE
02 / 34
Where We Left Off
We built adders in L3 — but what do those bits actually mean?
＋
Full adders & ripple 
chains
We can add two multi-bit 
binary numbers, carry 
and all (L3).
▣
MUX, decoder, 
register
The block library that 
builds a datapath (L3).
?
But… what IS a 
number?
An adder just moves bits. 
Today: what those bit 
patterns represent.
±
…and negatives?
How does 8 bits store −5? 
And when does 127 + 1 
become −128?
An adder is 'dumb' — it ﬂips bits by rules. The MEANING of those bits is a design decision. Today we make it.

<!-- page 3 -->
L04 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Four steps: represent, sign, compute, and catch the errors.
1
Number Systems
Binary, decimal, hex — 
and ﬂuent conversion 
between all three.
2
Signed Integers
Sign-magnitude, 1's 
complement, and the 
winner: two's 
complement.
3
Binary Arithmetic
Addition, and subtraction 
done as addition of a 
negative.
4
Overflow
When results silently wrap 
around — and how 
hardware detects it.
The punchline:  two's complement lets ONE adder circuit do both addition and subtraction — no separate 
hardware.

<!-- page 4 -->
L04 · MODERN COMPUTER ARCHITECTURE
04 / 34
Why Representation Matters
The same 8 bits can mean 255, or −1, depending on the rules you pick.
11111111
one byte, two readings
unsigned  =  255
signed (2's comp) = −1
Same bits. The CPU only knows which you 
meant by which instruction you use.
§
It's a convention
Bits carry no inherent 
meaning — representation 
is a rulebook humans 
agreed on.
!
Bugs live here
The Ariane 5 rocket, 
Gangnam Style's view 
counter — real failures 
from bad number 
handling.
⚙
Hardware cares
The right representation 
lets one circuit add AND 
subtract — huge silicon 
savings.
λ
You'll hit this in 
code
Every int overﬂow, every 
signed/unsigned cast bug 
traces back to today.

<!-- page 5 -->
1. Number Systems
Binary is how the machine counts. Hex is how humans read binary without 
going insane.

<!-- page 6 -->
L04 · MODERN COMPUTER ARCHITECTURE
06 / 34
Positional Notation
Every digit's value = the digit × the base raised to its position.
Decimal (base 10) — you already do this:
2
3
7
10²=100
10¹=10
10⁰=1
=  2×100 + 3×10 + 7×1  =  237
Binary (base 2) — same idea, base 2:
1
0
1
1
0
1
32
16
8
4
2
1
=  32 + 8 + 4 + 1  =  45
The only diﬀerence between bases:  which powers you use as place values. Base 2 → powers of 2. Base 16 → powers 
of 16.

<!-- page 7 -->
L04 · MODERN COMPUTER ARCHITECTURE
07 / 34
Binary ↔ Decimal Conversion
Two directions, two methods — both worth having automatic.
BINARY → DECIMAL
Add up the place values where there's a 1.
1
0
1
0
1
0
32
16
8
4
2
1
32 + 8 + 2  =  42
Just read oﬀ the 1-columns and sum their weights.
DECIMAL → BINARY
Repeatedly divide by 2; read remainders bottom-up.
42 ÷ 2 = 21  r 0
21 ÷ 2 = 10  r 1
10 ÷ 2 =  5  r 0
 5 ÷ 2 =  2  r 1
 2 ÷ 2 =  1  r 0
 1 ÷ 2 =  0  r 1
read up ↑  =  101010

<!-- page 8 -->
L04 · MODERN COMPUTER ARCHITECTURE
08 / 34
Hexadecimal: Binary for Humans
One hex digit = exactly 4 bits. That's the whole reason it exists.
Group binary into nibbles of 4 — each becomes one hex digit:
1
0
1
1
0
1
0
1
↓
↓
B
5
10110101₂  =  0xB5  =  181₁₀
HEX DIGITS BEYOND 9
Hex
Dec
Binary
A
10
1010
B
11
1011
C
12
1100
D
13
1101
E
14
1110
F
15
1111
Two hex digits = one byte. That's why colors (#FF8800), memory addresses, and 
MAC addresses all use hex.

<!-- page 9 -->
L04 · MODERN COMPUTER ARCHITECTURE
09 / 34
Worked Example: 0x2A
Convert one hex value to binary and decimal, step by step.
STEP 1 — Hex to binary (nibble each digit)
2
→ 0010
A
→ 1010
0x2A  =  0010 1010₂
STEP 2 — Binary to decimal (sum the 1-weights)
0
0
1
0
1
0
1
0
128
64
32
16
8
4
2
1
32 + 8 + 2  =  4210
ANSWER
0x2A
=
0010 1010₂
=
4210

<!-- page 10 -->
L04 · MODERN COMPUTER ARCHITECTURE
10 / 34
Powers of 2 — Memorise These
The multiplication table of computer architecture.
2⁰
1
2¹
2
2²
4
2³
8
2⁴
16
2⁵
32
2⁶
64
2⁷
128
2⁸
256
THE BIG MILESTONES
Power
Value
Name
2¹⁰
1,024
1 KB
2²⁰
1,048,576
1 MB
2³⁰
~1 billion
1 GB
2⁴⁰
~1 trillion
1 TB
WHY IT PAYS OFF
Instantly know an n-bit range.
8 bits → 2⁸ = 256 values (0–255).
16 bits → 65,536.  32 bits → ~4.3 billion.
This is why a 32-bit counter overﬂows at ~4.3 billion — the 
exact bug that broke YouTube's view counter.

<!-- page 11 -->
2. Signed Integers
Binary is naturally unsigned. Representing negatives took three tries to get 
right.

<!-- page 12 -->
L04 · MODERN COMPUTER ARCHITECTURE
13 / 34
Attempt 1: Sign-Magnitude
The obvious idea: use the top bit as a sign ﬂag. Intuitive — but ﬂawed.
Leftmost bit = sign (0 = +, 1 = −). Remaining 7 bits = magnitude.
0
0
0
1
0
0
1
0
= +18
1
0
0
1
0
0
1
0
= −18
Only the sign bit ﬂips between +18 and −18.
PROBLEM
00000000 = +0  and  10000000 = −0.  Two zeros! And addition needs special 
sign-checking logic — extra hardware.
VERDICT
✓  Easy for humans to read.
✗  Two representations of zero.
✗  Addition doesn't 'just work' — the 
hardware must inspect signs and decide 
whether to add or subtract.
Used today only for ﬂoating-point sign bits — 
never for integers.

<!-- page 13 -->
L04 · MODERN COMPUTER ARCHITECTURE
14 / 34
Attempt 2: One's Complement
To negate, ﬂip every bit. Closer — but zero is still doubled.
Negate by inverting ALL bits (NOT each one).
0
0
0
1
0
0
1
0
= +18
ﬂip every bit ↓
1
1
1
0
1
1
0
1
= −18
STILL A PROBLEM
00000000 = +0  and  11111111 = −0.  Two zeros again. Also needs an 
'end-around carry' ﬁx for addition.
PROGRESS
✓  Negation is trivial: just NOT.
✓  Addition nearly works…
✗  …but needs the carry-out added back in 
('end-around carry').
✗  STILL two zeros.
So close. One tiny tweak ﬁxes everything →

<!-- page 14 -->
L04 · MODERN COMPUTER ARCHITECTURE
15 / 34
Attempt 3: Two's Complement ✓
Flip all bits, then add 1. This one tweak ﬁxes everything.
Negate:  invert every bit, then add 1.
0
0
0
1
0
0
1
0
+18
invert ↓
1
1
1
0
1
1
0
1
(1's comp)
add 1 ↓
1
1
1
0
1
1
1
0
= −18
WHY IT WINS
✓  Exactly ONE zero (00000000).
✓  Ordinary binary addition just works — 
for positives AND negatives, no special 
cases.
✓  Subtraction = add the negative. ONE 
adder circuit does everything.
This is why every modern CPU uses two's 
complement for signed integers. Universal.
The trick: negation and addition use the SAME hardware. That's the entire payoﬀ.

<!-- page 15 -->
L04 · MODERN COMPUTER ARCHITECTURE
16 / 34
Reading a Two's Complement Number
The top bit has NEGATIVE weight. That's the whole secret.
The most-significant bit's place value is negative:
1
1
1
0
1
1
1
0
−128
64
32
16
8
4
2
1
−128 + 64 + 32 + 8 + 4 + 2  =  −18
The −128 weight (red) is what makes the number negative; the rest add back positive value.
NEGATE = INVERT + 1  (works both ways)
To go from +x to −x OR from −x to +x, the operation is 
identical: ﬂip all bits, add 1. Symmetric and simple.
QUICK SIGN CHECK
The MSB alone tells you the sign: 0 = non-negative, 1 = 
negative. No need to decode the whole number to know 
if it's below zero.

<!-- page 16 -->
L04 · MODERN COMPUTER ARCHITECTURE
17 / 34
Range & the Number Wheel
For n bits: −2ⁿ⁻¹ to +2ⁿ⁻¹−1. And the numbers wrap in a circle.
SIGNED RANGE BY WIDTH
Bits
Min
Max
4
−8
+7
8
−128
+127
16
−32,768
+32,767
32
−2.1 billion
+2.1 billion
Note the asymmetry: one more negative value than positive 
(because 0 takes a 'positive' slot). That lone extra negative — like 
−128 in 8 bits — has no positive twin.

<!-- page 17 -->
L04 · MODERN COMPUTER ARCHITECTURE
18 / 34
Sign Extension
Widening a number? Copy the sign bit — don't just pad with zeros.
To widen 4-bit → 8-bit, repeat the sign bit into the new positions:
+5:
0
1
0
1
→
0
0
0
0
0
1
0
1
−5:
1
0
1
1
→
1
1
1
1
1
0
1
1
The copied sign bits (highlighted) preserve the value. Both still equal ±5.
Padding −5 with ZEROS would give 00001011 = +11. Wrong! Always extend 
the sign.
WHERE YOU HIT THIS
Every time a CPU loads a byte into a 32-bit 
register.
MIPS & RISC-V have distinct load 
instructions: 'load byte' (sign-extends) vs 
'load byte unsigned' (zero-pads).
Picking the wrong one is a classic bug — 
you'll meet it again in Module 3.

<!-- page 18 -->
L04 · MODERN COMPUTER ARCHITECTURE
19 / 34
Quick Check
Show of hands — decode this byte.
Q.   In 8-bit two's complement, what decimal value is  10000000 ?
A
0
−128
C
+128
D
−0
Trap: it looks like −0 (sign bit set, magnitude 0) — but in two's complement there's no −0. It's the most negative value.
B
✓ MSB weight = −128, rest = 0

<!-- page 19 -->
3. Binary Arithmetic
Addition works exactly like grade-school carrying. Subtraction is just addition 
in disguise.

<!-- page 20 -->
L04 · MODERN COMPUTER ARCHITECTURE
21 / 34
Binary Addition
Four rules, column by column, carrying the 1 — just like decimal.
THE FOUR RULES
0 + 0 = 0
0 + 1 = 1
1 + 1 = 10   (0, carry 1)
1 + 1 + 1 = 11   (1, carry 1)
WORKED:  13 + 11  (4-bit)
carries
1
1
1
1
A = 13
1
1
0
1
B = 11
1
0
1
1
= 24
1
1
0
0
0
carry-out (5th bit) means the 4-bit result overﬂowed — more on that soon.

<!-- page 21 -->
L04 · MODERN COMPUTER ARCHITECTURE
22 / 34
Subtraction = Adding the Negative
No subtractor circuit needed. Negate the second operand and add.
A − B   becomes   A + (−B)   = A + (invert B, add 1)
1
Take B
The number you're 
subtracting.
2
Two's-complement it
Invert all bits, add 1 → that's 
−B.
3
Add to A
Feed A and −B into the SAME 
adder you already built.
4
Discard final carry
The carry-out beyond the 
width is ignored for signed 
results.

<!-- page 22 -->
L04 · MODERN COMPUTER ARCHITECTURE
23 / 34
Worked: 5 − 3 in 4-Bit
Watch subtraction happen entirely through addition.
STEP 1 — Encode +3, then negate to get −3
+3 =
0
0
1
1
invert+1 →  −3 =
1
1
0
1
STEP 2 — Add  5 + (−3)
+5 =
0
1
0
1
−3 =
1
1
0
1
= 1
0
0
1
0
discard the 5th-bit carry → 0010 = 
+2 ✓
THE MAGIC
5 − 3 = 2.  Correct!
We never subtracted. We negated 3 and 
added.
The carry-out past bit 4 is simply thrown 
away — and the signed answer is right.
One adder. Add and subtract. This is the entire 
reason two's complement won.

<!-- page 23 -->
4. Overflow
When the true answer won't ﬁt in the bits you have — and the result silently 
lies.

<!-- page 24 -->
L04 · MODERN COMPUTER ARCHITECTURE
25 / 34
What Is Overflow?
When a correct sum lands outside the representable range, it wraps — silently.
EXAMPLE — 4-bit signed (range −8 to +7)
Add  +5 + +4  — both positive, answer should be +9…
+5 =
0
1
0
1
+4 =
0
1
0
0
=
1
0
0
1
= −7 ?!
Two positives gave a NEGATIVE. +9 doesn't ﬁt in 4-bit signed (max +7), so it 
wrapped past the top of the wheel into negative territory. The hardware 
didn't crash — it just gave a wrong answer.
THE DANGER
Overﬂow is SILENT.
No error, no exception by default — just a 
wrong number that ﬂows on into the next 
computation.
That's what makes it dangerous. The CPU ﬂags 
it (next slide) — but only if your code checks 
the ﬂag.

<!-- page 25 -->
L04 · MODERN COMPUTER ARCHITECTURE
26 / 34
How Hardware Detects Overflow
One elegant rule: compare the carry INTO and OUT of the sign bit.
THE RULE (signed)
Overflow  =  Cin(MSB) ⊕ Cout(MSB)
If the carry INTO the sign-bit column diﬀers from the 
carry OUT of it, overﬂow occurred.
Just ONE extra XOR gate on your adder detects every signed 
overﬂow. That's the whole cost.
Cin=1, Cout=0  →  1 ⊕ 0 = 1  →  OVERFLOW
THE INTUITIVE VERSION
(+) + (+) = (−)
Two positives can't sum to a negative → OVERFLOW
(−) + (−) = (+)
Two negatives can't sum to a positive → OVERFLOW
(+) + (−)
Opposite signs can NEVER overﬂow → always safe

<!-- page 26 -->
L04 · MODERN COMPUTER ARCHITECTURE
27 / 34
Signed vs Unsigned Overflow
Same bits, diﬀerent overﬂow rules — the CPU computes both ﬂags every time.
SIGNED overflow
Detected by:  Cin ⊕ Cout at the sign bit.
Means: the true result fell outside −2ⁿ⁻¹ … +2ⁿ⁻¹−1.
Flag name (x86): OF (Overﬂow Flag).
Your code reads OF if it cares about signed overﬂow.
UNSIGNED overflow
Detected by:  the carry-out of the MSB alone.
Means: the true result exceeded 2ⁿ−1 (didn't ﬁt).
Flag name (x86): CF (Carry Flag).
Your code reads CF if the numbers are unsigned.
Key insight:  the ALU doesn't know if YOU meant signed or unsigned. It computes both ﬂags; your instructions 
decide which matters.

<!-- page 27 -->
L04 · MODERN COMPUTER ARCHITECTURE
28 / 34
Overflow: Four Cases
4-bit signed. Watch which combinations overﬂow and which don't.
+5 + (+4)
0101 + 0100
= 1001 = −7
✕
OVERFLOW
(+)+(+)=(−)
−6 + (−5)
1010 + 1011
= 0101 = +5
✕
OVERFLOW
(−)+(−)=(+)
+5 + (−3)
0101 + 1101
= 0010 = +2
✓
OK
opposite signs
+3 + (+2)
0011 + 0010
= 0101 = +5
✓
OK
ﬁts in range
The pattern is unmistakable: overﬂow happens ONLY when both inputs share a sign and the result ﬂips it.

<!-- page 28 -->
L04 · MODERN COMPUTER ARCHITECTURE
29 / 34
When Overflow Broke the Real World
These aren't textbook hypotheticals — they're famous, expensive failures.
🚀
Ariane 5 (1996)
A 64-bit ﬂoat converted to 16-bit signed int 
overﬂowed. The rocket self-destructed 37s after 
launch. Cost: ~$370 million.
▶
Gangnam Style (2014)
YouTube's view counter was a 32-bit signed int, max 
~2.1 billion. The video blew past it — forcing a switch 
to 64-bit.
✈
Boeing 787 (2015)
A counter overﬂowing after 248 days of continuous 
power could shut down all generators. Fix: reboot 
every 248 days.
▮
Pac-Man level 256
An 8-bit level counter overﬂowed at 256, corrupting 
the level into the infamous unplayable 'kill screen'.

<!-- page 29 -->
L04 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and cause real bugs.
✕
Zero-padding a negative
Widening −5 as 0000_1011 gives +11. Always SIGN-extend, 
not zero-pad.
✕
Forgetting the +1
Two's complement negate is invert AND add 1. One's 
complement (invert only) is a diﬀerent, obsolete scheme.
✕
Misreading the MSB as −0
10000000 isn't −0 — there's no −0 in two's complement. It's 
the most negative value.
✕
Confusing the two overflows
Signed overﬂow ≠ carry-out. Carry-out ﬂags UNSIGNED 
overﬂow; sign-bit carry mismatch ﬂags SIGNED.
✕
Assuming symmetric range
8-bit is −128 to +127, not −127 to +127. One extra negative, 
no positive twin.
✕
Thinking overflow throws an error
By default it's silent — the wrong number just ﬂows 
onward. You must check the ﬂag.

<!-- page 30 -->
L04 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences that underpin every integer a computer touches.
01
Bits carry no inherent meaning — a number system is a convention you apply (base 2 for machines, base 16 for readable 
binary).
02
One hex digit maps to exactly 4 bits; two hex digits = one byte — that's the entire reason hex exists.
03
Two's complement (invert + 1) is the winner: one zero, and one adder handles both addition and subtraction.
04
In two's complement the MSB carries a NEGATIVE weight, and widening a value means sign-extending, not zero-padding.
05
Overﬂow is silent: it happens when two same-signed numbers produce the wrong sign, detected by Cin ⊕ Cout at the sign bit.

<!-- page 31 -->
L04 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Convert, encode, and hunt for overﬂow.
01
Base Triathlon
Convert 0xB7 to binary and to signed 
decimal (8-bit). Then −45 to 8-bit two's 
complement.
02
Two's Complement Lab
Encode +18 and −18 in 8 bits. Verify 
that negating −18 gives back +18.
03
Overflow Drill
Add several pairs of 4-bit signed 
numbers; mark which overﬂow and 
justify with the sign rule.
EXIT TICKET
1.  Convert −45 to 8-bit two's complement.
2.  Compute 0110 + 1100 in 4-bit two's complement — did overﬂow occur?
3.  Convert 0xB7 to binary and to a signed 8-bit decimal value.

<!-- page 32 -->
L04 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
The 8-bit two's complement of +18 is…
11101110
Q2
Signed overflow occurs when the result…
has the wrong sign
Q3
0xFF as an 8-bit SIGNED integer is…
−1
All three instant? You're ready for the labs and L5 (Sequential Circuits — latches & ﬂip-ﬂops).

<!-- page 33 -->
END OF L04
One adder,
every integer.
NEXT — L05
From Combinational to Sequential — latches, ﬂip-ﬂops, and the clock. How circuits 
gain MEMORY and start to remember what they computed.

<!-- page 34 -->
Thanks 
for 
watching!

### L06 · Overflow Detection, Latches, Flip-Flops & Timing, Combinational vs Sequential Ci ... (27 Aug 2026)
_Topics: Overflow Detection, Latches, Flip-Flops & Timing, SR Latch, Combinational vs Sequential Circuits, D-Latch, NAND/NOR Structure, Forbidden State_

#### Whiteboard

<!-- page 1 -->
Lecture: 0101 
Latches, Flip-Flops
& Timing
CSA222: Modern Computer Architecture
From Combinational to Sequential
How a circuit gains memory — and how a clock keeps that memory sane.

<!-- page 2 -->
L05 · MODERN COMPUTER ARCHITECTURE
02 / 34
Everything So Far Had No Memory
L1–L4 built powerful circuits — but they forget everything instantly.
&
Gates & 
minimisation
AND/OR/NOT, K-maps, 
universal NAND (L1–L2).
▣
MUX, decoder, 
adder
Reusable blocks that build 
a datapath (L3).
±
Number 
representation
Two's complement, 
arithmetic, overﬂow (L4).
∅
All 'stateless'
Output = f(inputs NOW). 
Change inputs → output 
forgets the past.
A CPU needs to REMEMBER — the program counter, registers, state. Today: how circuits learn to hold a value.

<!-- page 3 -->
L05 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Feedback creates memory; a clock makes memory trustworthy.
1
Feedback = 
Memory
Loop a circuit's output 
back to its input, and it 
can hold a bit.
2
Latches
SR and D latches — the 
ﬁrst storage elements, 
and their dangers.
3
Flip-Flops
Edge-triggered storage — 
the reliable building block 
of every register.
4
Timing
Setup, hold, and 
metastability — the rules 
that keep it all working.
The big shift:  from 'output depends on inputs now' to 'output depends on inputs AND history'. That's the 
birth of state.

<!-- page 4 -->
L05 · MODERN COMPUTER ARCHITECTURE
04 / 34
Combinational vs Sequential
The single most important distinction in digital design.
COMBINATIONAL
Output = f(inputs now)
No memory — purely reactive.
Same inputs always give same output.
Examples: adders, MUXes, decoders.
The instant inputs change, output follows.
SEQUENTIAL
Output = f(inputs, past state)
Has memory — remembers history.
Same inputs can give diﬀerent outputs.
Examples: registers, counters, FSMs.
A clock decides WHEN state updates.
The diﬀerence is one thing: a feedback loop. Add it, and a circuit can remember.

<!-- page 5 -->
05 / 34
1. Feedback = Memory
Route a circuit's output back into its own input, and something remarkable 
happens: it remembers.

<!-- page 6 -->
L05 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Idea of Feedback
Without a loop, signals ﬂow one way and vanish. With a loop, they persist.
NO FEEDBACK (combinational)
LOGIC
in
out
Signal ﬂows left → right, once. Remove the input and the output is 
gone.
WITH FEEDBACK (sequential)
LOGIC
↺ output feeds back
THE INSIGHT
A feedback loop lets the output 'hold itself up'.
The circuit's current output becomes part of its own 
next input — so it can sustain a value even after the 
original input is gone.
That self-sustaining value IS a stored bit. Memory, from 
nothing but a loop.

<!-- page 7 -->
L05 · MODERN COMPUTER ARCHITECTURE
07 / 34
The Bistable Element
Two inverters in a loop = the simplest 1-bit memory. It has two stable states.
If Q = 1, the loop keeps Q = 1.  If Q = 0, it keeps Q = 0.  Both are 
stable — hence 'bi-stable'.
TWO STABLE STATES
This holds a bit forever (while powered) — but 
there's a catch:
there's no way to CHANGE it. It's sealed.
To make it useful, we need controlled inputs to set 
and reset the stored value. That's exactly what a 
latch adds.

<!-- page 8 -->
08 / 34
2. Latches
Add controllable inputs to the feedback loop — now you can set, reset, and 
hold a bit on demand.

<!-- page 9 -->
L05 · MODERN COMPUTER ARCHITECTURE
09 / 34
The SR Latch (NOR-based)
Two cross-coupled NOR gates: Set makes Q=1, Reset makes Q=0.
HOW IT BEHAVES
S = 1  →  Set:   Q becomes 1
R = 1  →  Reset: Q becomes 0
S = R = 0  →  Hold: Q keeps its value
The 'hold' state is the memory — the latch 
remembers whatever it was last set to.
Each gate's output feeds the OTHER gate's input — that's the cross-coupling 
that holds state.

<!-- page 10 -->
L05 · MODERN COMPUTER ARCHITECTURE
10 / 34
SR Latch: The Four States
Every combination of S and R, and what the latch does.
S
R
Action
Result
0
0
Hold
Q unchanged — remembers last value
1
0
Set
Q = 1
0
1
Reset
Q = 0
1
1
Forbidden
Q and Q' both 0 — invalid!
Three useful states — Set, Reset, Hold — plus one you must never allow. That forbidden state is next.

<!-- page 11 -->
L05 · MODERN COMPUTER ARCHITECTURE
11 / 34
The Forbidden State
S = R = 1 breaks the latch's fundamental promise: Q and Q' are supposed to be opposites.
WHAT GOES WRONG
With S = R = 1, BOTH NOR gates output 0.
So Q = 0 AND Q' = 0 — but Q' is supposed to be NOT Q. The 
invariant is broken.
Worse: if S and R drop to 0 at the same instant, the latch 
enters a RACE — its ﬁnal state is unpredictable, decided 
by tiny gate-delay diﬀerences.
WHY YOU CARE
This is a real design hazard.
It's why raw SR latches are rarely used directly — 
designers add logic to make S = R = 1 impossible.
The D latch (two slides away) solves this elegantly: it 
makes S and R always opposite, so the forbidden state 
simply can't occur.

<!-- page 12 -->
L05 · MODERN COMPUTER ARCHITECTURE
12 / 34
SR Latch, NAND Version
Same idea, built from NAND gates — but the inputs are active-LOW.
Note the primes: S' and R' are active-LOW — a 0 triggers the action, not a 1.
NOR vs NAND LATCH
NOR latch: active-HIGH (1 = act).
NAND latch: active-LOW (0 = act).
Forbidden state ﬂips too: for the NAND latch, S' = 
R' = 0 is the illegal one.
NAND latches are common in practice because NAND 
is the cheap, universal gate (recall L2).

<!-- page 13 -->
L05 · MODERN COMPUTER ARCHITECTURE
14 / 34
The D Latch
One data input, no forbidden state. The forbidden combination is engineered away.
D drives S directly, and NOT-D drives R — so S and R are ALWAYS opposite. 
Forbidden state: impossible.
BEHAVIOUR
EN = 1  →  Q follows D.
(transparent — Q = D)
EN = 0  →  Q holds its last value.
(opaque — ignores D)
One clean data input, one enable, zero forbidden 
states. This is genuinely useful memory.

<!-- page 14 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
14 / 30
D Latch · Transparency
While E is high, Q tracks D step-for-step. While E is low, whatever D was at the falling edge of E is what Q holds.
D
E
Q
D
E
Q
← transparent →
← holding →
← transparent →
During the green windows, Q is a copy of D. During the amber window, Q remembers the last D from before E fell.

<!-- page 15 -->
L05 · MODERN COMPUTER ARCHITECTURE
16 / 34
The Clock: The System Heartbeat
One periodic signal synchronises every ﬂip-ﬂop in the chip.
WHY ONE CLOCK
Every ﬂip-ﬂop updates on the same edge.
That shared instant is what keeps a 
whole chip's state consistent — everyone 
steps together.
The clock is the drummer the entire 
orchestra follows. Lose sync, lose 
everything.

### L07 · Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metasta ... (01 Sep 2026)
_Topics: Overflow Detection, D Flip-Flop, Timing Parameters, Setup and Hold Time, Metastability and MTBF, Scaling from Flip-Flops to Registers, Registers_

#### Whiteboard

<!-- page 1 -->
Lecture: 0101 
Latches, Flip-Flops
& Timing - II
CSA222: Modern Computer Architecture
From Combinational to Sequential
How a circuit gains memory — and how a clock keeps that memory sane.

<!-- page 2 -->
16 / 34
3. Flip-Flops
Sample the data at one precise instant — the clock edge — instead of a whole 
window. This is the reliable memory a CPU is built from.

<!-- page 3 -->
L05 · MODERN COMPUTER ARCHITECTURE
17 / 34
Level-Triggered vs Edge-Triggered
The diﬀerence between 'listen the whole time' and 'listen for one instant'.
LEVEL-TRIGGERED (latch)
Active during an entire clock LEVEL (high or low).
Transparent — output tracks input the whole window.
Simpler, fewer gates.
Risky: data can slip through unintentionally.
EDGE-TRIGGERED (flip-flop)
Active only at the clock EDGE (rising or falling).
Samples input at one instant, then locks.
More gates, but predictable.
The safe choice for pipelines & registers.
↑ rising edge
An edge is a MOMENT (0→1 transition), not a duration. That's why edge-triggering 
samples cleanly.

<!-- page 4 -->
L05 · MODERN COMPUTER ARCHITECTURE
19 / 34
How Edge-Triggering Works: Master-Slave
Two latches in series on opposite clock phases — data can only advance one step per cycle.
Master captures D while CLK is high; slave passes it on the falling edge. Result: one clean 
update per cycle.
THE HAND-OFF
The two latches are NEVER transparent 
at the same time.
When the master listens, the slave is 
locked — and vice versa.
So data can't race straight through. It's a 
two-stage airlock for one bit.

<!-- page 5 -->
L05 · MODERN COMPUTER ARCHITECTURE
20 / 34
Latch vs Flip-Flop
Same job — store a bit — but timing behaviour is completely diﬀerent.
LATCH
FLIP-FLOP
Triggered by
Clock LEVEL (high/low)
Clock EDGE (rising/falling)
Transparent?
Yes — while enabled
No — samples one instant
Gate count
Fewer (cheaper)
More (≈2× a latch)
Data races?
Possible — risky
Blocked — safe
Used for
Simple buﬀering
Registers, PC, pipelines
Rule of thumb: if a clock edge triggers it, it's a ﬂip-ﬂop. If a level does, it's a latch.

<!-- page 6 -->
22 / 34
4. Timing
Flip-ﬂops only work if data is stable around the clock edge. Break that rule 
and the bit becomes undeﬁned.

<!-- page 7 -->
L05 · MODERN COMPUTER ARCHITECTURE
24 / 34
Setup Time & Hold Time
Data must be STABLE in a window around the clock edge — before and after.
THE ANALOGY
Taking a photo of a moving object.
The subject must hold still just before 
AND just after the shutter clicks, or the 
picture blurs.
Same for a ﬂip-ﬂop: change D inside the 
setup/hold window and the captured bit is a 
blur — undeﬁned.

<!-- page 8 -->
L05 · MODERN COMPUTER ARCHITECTURE
25 / 34
Timing Violations
Break setup or hold, and the ﬂip-ﬂop's output is genuinely unpredictable.
SETUP VIOLATION
D changes too LATE — still moving when the edge 
arrives.
The new value didn't have time to settle before sampling.
HOLD VIOLATION
D changes too SOON — moves right after the edge.
The old value wasn't held long enough to be captured 
cleanly.
THE CONSEQUENCE
The output may settle to 0, settle to 1, or hover in between for a while — a condition called METASTABILITY. This is the 
deepest hazard in synchronous design, and it's next.

<!-- page 9 -->
L05 · MODERN COMPUTER ARCHITECTURE
26 / 34
Metastability
A ﬂip-ﬂop caught between 0 and 1 — balanced on a knife's edge.
THE BALL-ON-A-HILL PICTURE
balanced!
0
1
A valid bit is a ball resting in a valley (0 or 1). A timing violation 
places it on the peak — where it lingers, then falls to a side 
unpredictably, and after an unknown delay.
WHY IT'S DANGEROUS
The output is neither 0 nor 1 for an unpredictable time.
Downstream logic may read it as 0, another part as 1 — 
and the whole system's state diverges.
It's most common when crossing between two unrelated 
clocks (asynchronous inputs — buttons, other chips).

<!-- page 10 -->
L05 · MODERN COMPUTER ARCHITECTURE
27 / 34
Living With Metastability
You can't eliminate it — but you can make it astronomically unlikely.
∞
Can't be banned
For truly asynchronous inputs, 
metastability is physically 
unavoidable — no circuit prevents it 
100%.
⇉
Synchronizer chains
Feed the signal through 2–3 ﬂip-ﬂops 
in series. Each gives the previous one 
time to settle before the next 
samples.
τ
MTBF, not 'never'
Design targets a Mean Time Between 
Failures of thousands of years — 
practically never, but never truly 
zero.
The pro's mindset:  you don't defeat metastability, you push its probability so low the chip will be obsolete before it 
ever happens.

<!-- page 11 -->
L05 · MODERN COMPUTER ARCHITECTURE
28 / 34
Timing in the Real World
Setup, hold, and the clock aren't theory — they set the speed limit of every chip.
⏱
Clock speed = the spec
'3.5 GHz' means the clock period is ~0.29 ns. All logic 
between two ﬂip-ﬂops must ﬁnish inside that 
window.
→
Critical path sets the max
The slowest logic path between ﬂip-ﬂops decides the 
fastest safe clock. Shorten it → clock faster.
▤
Static Timing Analysis (STA)
EDA tools (Synopsys PrimeTime) check every path 
for setup/hold violations before a chip is ever built.
⚡
Overclocking = risking it
Pushing the clock past its rated speed shrinks timing 
margins — eventually setup violations corrupt data.

<!-- page 12 -->
L05 · MODERN COMPUTER ARCHITECTURE
29 / 34
Reading a D Flip-Flop Waveform
Given CLK and D, trace Q — the classic exam and interview question.

<!-- page 13 -->
L05 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and cause real timing bugs.
✕
Latch vs flip-flop mix-up
A latch is level-triggered (transparent); a ﬂip-ﬂop is 
edge-triggered. The clock-input triangle marks a ﬂip-ﬂop.
✕
Allowing SR = 1,1
The forbidden state breaks Q ≠ Q'. Real designs use a D 
latch to make it impossible.
✕
Ignoring the transparency window
A D latch copies D the whole time EN is high — not one 
clean value. Use a ﬂip-ﬂop for pipelines.
✕
Forgetting hold time
Setup gets the attention, but violating HOLD (D changes 
too soon after the edge) is just as fatal.
✕
Thinking metastability is a 'bug'
It's a physical certainty for async inputs — you manage its 
probability, you don't 'ﬁx' it.
✕
Zero-margin clocking
Running the clock right at the critical-path limit leaves no 
safety margin — temperature or voltage drift breaks it.

<!-- page 14 -->
L05 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — the birth of memory in a machine.
01
Feedback turns a stateless circuit into memory: an output routed back to its input can sustain a value.
02
An SR latch sets, resets, and holds a bit — but S = R = 1 is forbidden; the D latch engineers that danger away.
03
A latch is level-triggered (transparent while enabled); a ﬂip-ﬂop is edge-triggered (samples one instant).
04
The D ﬂip-ﬂop — built as master-slave — captures D on the clock edge and holds it, solving the transparency problem.
05
Data must be stable within the setup/hold window around the edge; violate it and you risk metastability, managed via 
synchronizer chains.

<!-- page 15 -->
L05 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Trace, build, and reason about timing.
01
Latch Truth Tables
Complete the state tables for a NOR 
SR latch and a NAND SR latch. Mark 
the forbidden state in each.
02
Waveform Trace
Given a CLK and a D waveform, draw 
Q for both a D latch AND a D ﬂip-ﬂop. 
Explain the diﬀerence.
03
Timing Reasoning
A path has 0.28 ns delay; setup is 0.05 
ns. What's the fastest safe clock 
frequency? Show your work.
EXIT TICKET
1.  Why is S = R = 1 forbidden in an SR latch? What does the D latch do about it?
2.  In one sentence, the diﬀerence between a latch and a ﬂip-ﬂop.
3.  What is metastability, and why can't it be fully eliminated for asynchronous inputs?

<!-- page 16 -->
L05 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
A latch is triggered by a clock… 
LEVEL
Q2
A flip-flop is triggered by a clock…
EDGE
Q3
Data unstable at the edge risks…
metastability
All three instant? You're ready for the labs and L6 (Registers, Counters & Finite State Machines).

<!-- page 17 -->
END OF L05
A loop, and
a heartbeat.
NEXT — L06
Registers, Counters & Finite State Machines — chain ﬂip-ﬂops together and a circuit 
can count, remember words, and follow a plan.

### L08 · Registers, Counters & Shift Registers, Load Enable and Reset, Counters, Asynchro ... (03 Sep 2026)
_Topics: Registers, Counters & Shift Registers, Counters, Shift Registers, 4-bit Synchronous Up-Counter Design, Load Enable and Reset, Synchronous Counters, Asynchronous (Ripple) Counters, SISO, SIPO, PISO, PIPO_

#### Whiteboard

<!-- page 1 -->
Lecture: 0110 
Registers, Counters
& State Machines
CSA222: Modern Computer Architecture
Building Memory That Does Something
Chain ﬂip-ﬂops together and a circuit can store words, count, and follow a plan.

<!-- page 2 -->
L06 · MODERN COMPUTER ARCHITECTURE
02 / 34
One Flip-Flop = One Bit
L5 gave us a reliable 1-bit memory. Today we build things worth remembering.
↺
The D flip-flop
Captures one bit on the 
clock edge, holds it for the 
cycle (L5).
⧗
Edge-triggered & 
safe
Master-slave design 
blocks data races — 
predictable updates.
⧖
Timing rules
Setup, hold, metastability 
— the constraints that 
keep it working (L5).
»
But just ONE bit…
A CPU needs 32-bit words, 
counters, and control. So 
we chain them.
The jump from 'store a bit' to 'store a word, count events, run a program' is what today is about.

<!-- page 3 -->
L06 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Three structures, each more capable than the last.
1
Registers
n ﬂip-ﬂops in parallel = an n-bit 
word store. Add shifting for data 
movement.
→
2
Counters
Flip-ﬂops that count clock pulses 
— the basis of timers and 
addresses.
→
3
State Machines
The general model of any 
sequential circuit: states, 
transitions, outputs.
The big idea:  an FSM is the universal blueprint — registers and counters are just special cases of it. It's how 
a CPU 'thinks'.

<!-- page 5 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
04  /  67
0
The Flip-Flop
Toolkit
Four ﬂip-ﬂops, four truth tables — and the one 
reverse-lookup table that makes design possible.
PRIMARY DEFINITION
A ﬂip-ﬂop is a one-bit memory that updates only on a clock 
edge. Change what feeds its input and you change what it does.
SR
Set / Reset — the original latch
D
Delay — copies its input, one cycle later
JK
The universal one — SR with toggle
T
Toggle — ﬂips on command. Counters live here.

<!-- page 6 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
05  /  67
Latch vs Flip-Flop
Both remember a bit. The diﬀerence is WHEN they are allowed to change.
CLK / EN
D
Q  latch
Q  flip-flop
Same clock, same data — two very diﬀerent outputs. The latch copies D the whole time EN is high; the ﬂip-ﬂop looks once, at the edge.
LEVEL-TRIGGERED  —  LATCH
Transparent: while the enable is high, Q follows D continuously. Any 
wobble on D passes straight through.
EDGE-TRIGGERED  —  FLIP-FLOP
Q samples D at one instant only, then holds for the whole cycle. This 
is why we can reason about timing at all.
Everything from here on uses edge-triggered ﬂip-ﬂops. When this lecture says 'ﬂip-ﬂop', assume the rising clock edge.

<!-- page 7 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
06  /  67
The SR Latch — Where Memory Starts
Two NOR gates feeding each other. The simplest circuit that can remember.
CHARACTERISTIC TABLE
S
R
Q⁺
MEANING
0
0
Q
Hold — remembers the last value
0
1
0
Reset the bit to 0
1
0
1
Set the bit to 1
1
1
–
Forbidden — both outputs go 0
THE FLAW
S = R = 1 breaks the promise that Q and Q' are opposites — and 
when both inputs drop together the result is unpredictable.
Fixing that forbidden row is exactly what the JK ﬂip-ﬂop is for — and the ﬁx turns out to give us the toggle we need for counters.

<!-- page 8 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
07  /  67
The D Flip-Flop — One Input, No Surprises
Tie S and R together through an inverter and the forbidden state becomes unreachable.
SYMBOL & PIN NAMES
CHARACTERISTIC TABLE
Q
D
Q(n+1)
WHAT HAPPENED
0
0
0
stayed at 0
0
1
1
loaded a 1
1
0
0
loaded a 0
1
1
1
stayed at 1
CHARACTERISTIC EQUATION
Q(n+1)  =  D          — the next state is simply whatever D 
was at the edge.
WHY IT IS THE DEFAULT
One data input means one thing can go wrong instead of four. Every 
register, pipeline stage and state register in a modern CPU is built from 
D ﬂip-ﬂops.
THE COST
A D ﬂip-ﬂop cannot toggle by itself — it only copies. To make it ﬂip, you 
must feed it the opposite of its own output. Hold that thought.

<!-- page 9 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
08  /  67
The JK Latch — Reclaiming the Fourth Row
Same four input combinations as SR, but the illegal one is redeﬁned as 'toggle'.
CHARACTERISTIC TABLE
J
K
Q⁺
MEANING
0
0
Q
Hold — no change
0
1
0
Reset to 0
1
0
1
Set to 1
1
1
Q'
TOGGLE — ﬂip to the opposite
CHARACTERISTIC EQUATION
Q(n+1) = JQ̅(n) + QK̅(n)
WHY THIS MATTERS TODAY
The JK ﬂip-ﬂop can do everything SR and D can do, plus one new trick: toggle. Toggling is counting. Tie J and K together and you get the 
ﬂip-ﬂop the rest of this lecture depends on.

<!-- page 10 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
09  /  67
The T Flip-Flop — The One Counters Are Made Of
A single input with a single job: T = 1 means 'ﬂip', T = 0 means 'stay'.
SYMBOL
CHARACTERISTIC TABLE
T
Q
Q⁺
ACTION
0
0
0
hold
0
1
1
hold
1
0
1
ﬂip
1
1
0
ﬂip
CHARACTERISTIC EQUATION
Q(n+1) = TQn’ + T’Qn = T XOR Qn
TWO WAYS TO BUILD ONE
1 · From a JK flip-flop
Tie J and K to the same 
wire.
2 · From a D flip-flop
Remember this device. Every counter in the 
next two sections is a row of T ﬂip-ﬂops with 
diﬀerent logic deciding when each one ﬂips.

<!-- page 11 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
10  /  67
Hold T at 1 and You Get a Divide-by-2
A permanently toggling ﬂip-ﬂop halves the clock frequency. Chain them and you have a counter.
CLK
Q0   (÷2)
Q1   (÷4)
Q0 completes one cycle for every two clock cycles. Q1 is clocked by Q0, so it completes one cycle for every four. Each extra ﬂip-ﬂop halves the 
frequency again — and the bits you are looking at spell out 0, 1, 2, 3 in binary.
AS A DIVIDER
n stages divide the clock by 2ⁿ. This is how a 32 
768 Hz watch crystal becomes a 1 Hz tick.
AS A COUNTER
Read the stages as bits and the same circuit is 
counting up in binary — same wires, diﬀerent 
reading.
THE LINK
Counting and dividing are the same operation. 
That is why one circuit serves timers, PWM 
and program counters.

<!-- page 12 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
11  /  67
The Four Flip-Flops at a Glance
One table to keep. Everything else in this lecture is built from these four rows.
TYPE
INPUTS
WHAT IT DOES
CHARACTERISTIC EQ.
TYPICALLY USED FOR
SR
S, R
Set, reset or hold — but S = R = 1 is illegal
Q⁺ = S + R'·Q
Latches, simple control
D
D
Copies its input to the output on the edge
Q⁺ = D
Registers, pipeline stages, state registers
JK
J, K
Set, reset, hold — and toggle when both are 
1
Q⁺ = J·Q' + K'·Q
General-purpose sequential design
T
T
Flips when T = 1, holds when T = 0
Q⁺ = T XOR Q
Counters and frequency dividers
THEY ARE ALL THE SAME DEVICE
Every one of these is an SR latch pair with diﬀerent logic bolted onto 
the front. Choosing a ﬂip-ﬂop type is really choosing how much of 
the next-state logic you want built in already.
WHAT REAL HARDWARE USES
Modern chips and every FPGA use D ﬂip-ﬂops almost exclusively — 
they are the smallest and fastest. JK and T are design conveniences: 
you reason in T, the synthesis tool builds it out of D and an XOR.

<!-- page 13 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
13  /  67
Preset, Clear and Reset
Every real ﬂip-ﬂop has a back door that ignores the clock. Counters and state machines both need it.
THE EXTRA PINS
ASYNCHRONOUS
SYNCHRONOUS
When it acts
Immediately
On the next clock edge
Needs the clock?
No
Yes
Timing risk
Can violate setup/hold
None — it is ordinary 
logic
Typical use
Power-on reset
Mod-N counter wrap, 
FSM restart
Rule of thumb: one asynchronous reset for power-on, synchronous 
resets for everything the design does while it is running.
WITHOUT A RESET
Flip-ﬂops power up in a random state. A counter might start at 173, and 
a state machine might start in a state that has no way out. The circuit 
works perfectly in simulation and hangs on the bench.
WITH A RESET
One known starting point, guaranteed. Every FSM you draw from now 
on gets a reset arrow pointing at its initial state — no exceptions.

<!-- page 14 -->
L06 · MODERN COMPUTER ARCHITECTURE
05 / 34
1
Registers
The foundational building blocks of CPU 
storage.
PRIMARY DEFINITION
A register is just a row of ﬂip-ﬂops 
sharing a clock — the fastest, closest 
memory a CPU has.

Flip-Flop Row
Multi-bit storage

Shared Clock
Atomic updates

Fastest Speed
Closest to CPU

<!-- page 15 -->
L06 · MODERN COMPUTER ARCHITECTURE
04 / 34
From One Bit to Many
Put ﬂip-ﬂops side by side, share a clock, and you store a whole word at once.
Atomic Multi-Bit Storage
All four bits are captured on the SAME clock edge — 
the word updates atomically, as one single unit.
THE SYSTEM SECRET
What is a CPU register?
This is literally what a CPU register is: 32 or 
64 D-ﬂip-ﬂops sharing a single, synchronous 
clock. That is the entire secret.

<!-- page 16 -->
L06 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Register
Store, hold, and read back an n-bit value — the CPU's working scratchpad.
BLOCK DIAGRAM
8-BIT REGISTER
D7 … D0
in (8 bits)
out
CLK
WHERE REGISTERS LIVE
The register ﬁle — 32 registers in MIPS/RISC-V — is a 
CPU's fastest storage.
It serves as the immediate staging area for active 
operations, feeding data directly to execution units.
Also: the program counter (PC), instruction register, and 
pipeline stage registers are all just registers.
Faster than cache, faster than RAM — because it's 
ﬂip-ﬂops right next to the ALU.

<!-- page 17 -->
L06 · MODERN COMPUTER ARCHITECTURE
07 / 34
The Load Enable
A register must HOLD its value across clock edges until you choose to update it.
THE PROBLEM
A plain ﬂip-ﬂop grabs D on EVERY clock edge. But a 
register should keep its value for many cycles, updating 
only when told.
THE FIX — a load-enable MUX per bit:
LOAD = 1 → feed new data in.
LOAD = 0 → feed the ﬂip-ﬂop's OWN output back in (hold).
A 2:1 MUX on each bit's D input chooses between 'new value' and 
'keep current'.
ONE BIT'S PATH
The MUX + feedback loop = a register that remembers until LOAD says 
otherwise.

<!-- page 18 -->
L06 · MODERN COMPUTER ARCHITECTURE
08 / 34
The Shift Register
Chain ﬂip-ﬂops output-to-input: each clock edge, every bit shifts one place.
BLOCK DIAGRAM
HOW IT SHIFTS
Each ﬂip-ﬂop's output feeds the NEXT one's 
input. A bit entered at 'in' walks right, one FF 
per clock.
It's a conveyor belt for bits — the basis of serial 
data transfer and multiply/divide-by-2 operations.

<!-- page 19 -->
L06 · MODERN COMPUTER ARCHITECTURE
09 / 34
Four Shift Register Types
Named by how data goes IN and comes OUT: serial or parallel.
SISO
Serial In, Serial Out
One bit in, one bit out per 
clock — a pure delay line.
SIPO
Serial In, Parallel Out
Bits enter one at a time, 
read out all at once — 
serial→parallel 
converter.
PISO
Parallel In, Serial Out
Load a whole word, shift 
it out bit by bit — 
parallel→serial 
converter.
PIPO
Parallel In, Parallel 
Out
Load and read a full word 
— this is just a normal 
register with load.
SIPO and PISO are the workhorses: they convert between serial links (few wires) and parallel buses (fast).

<!-- page 20 -->
L06 · MODERN COMPUTER ARCHITECTURE
10 / 34
What Shift Registers Do
Small circuit, surprisingly many jobs.
⇄
Serial ↔ parallel
UART, SPI, USB all send data one bit at a time over 
few wires; shift registers reassemble it into bytes.
×2
Multiply / divide by 2
Shifting binary left multiplies by 2; shifting right 
divides by 2. Free arithmetic, no adder.
⧗
Delay lines & buffers
A SISO register delays a signal by exactly N clock 
cycles — used in DSP and pipelines.
⚁
Pseudo-random (LFSR)
Add feedback via XOR and a shift register generates 
long pseudo-random sequences — used in crypto & 
test.

<!-- page 21 -->
L06 · MODERN COMPUTER ARCHITECTURE
11 / 34
SECTION 02
2. Counters
The Beating Clock of Digital Systems
Flip-ﬂops conﬁgured to count clock pulses, serving as the essential 
foundation for timing, addressing, and control ﬂow.
CORE APPLICATIONS

Timers & Clock Dividers
Measuring precise time intervals and scaling frequencies.

Address Generation
Stepping through memory locations sequentially.

The Program Counter (PC)
The engine driving instruction fetch and CPU execution ﬂow.
VISUALIZING CLOCK & COUNT
How a Counter Advances
Each rising edge of the clock trigger increments the register state.
▲
▲
▲
CLK
000
→
001
→
010
...
STATE TRANSITION (N-BIT OVERFLOW)

<!-- page 22 -->
L06 · MODERN COMPUTER ARCHITECTURE
12 / 34
What Is a Counter?
A register whose value advances by 1 on every clock pulse — it counts.
A 3-BIT COUNTER CYCLES THROUGH 0 → 7 → 0…
000
→001
→010
→011
→100
→101
→110
→111
↺ wraps back to 000
Each clock pulse = +1.
After the max value (111 = 7), it rolls over to 000 — exactly like an 
odometer, or 8-bit overﬂow from L4.
An n-bit counter counts 0 to 2ⁿ−1, then wraps. It's a register + an incrementer 
+ feedback.
WHY COUNTERS MATTER
The Program Counter (PC) is a counter — it 
holds the address of the next instruction 
and increments each cycle.
Also: timers, clock dividers, memory-refresh 
logic, event counters — all built on this.

<!-- page 23 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
Reading the Count as Waveforms
Look at the bits over time and the pattern that makes counters buildable jumps out.
CLK
Q0
Q1
Q2
0
1
2
3
4
5
6
7
value
Q0 changes every clock. Q1 changes every second clock. Q2 changes every fourth.
THE RULE BEHIND IT
A bit ﬂips exactly when every bit below it is 1.
Q0 ﬂips always. Q1 ﬂips when Q0 = 1. Q2 ﬂips 
when Q1·Q0 = 1.
IN T FLIP-FLOP TERMS
T0 = 1
T1 = Q0
T2 = Q0·Q1
THAT IS THE WHOLE DESIGN
Nothing else is needed for a plain binary 
up-counter. Two diﬀerent circuits implement 
it — and choosing between them is the next 
four slides.
13 / 34

<!-- page 24 -->
L06 · MODERN COMPUTER ARCHITECTURE
13 / 34
Ripple (Asynchronous) Counter
Each ﬂip-ﬂop's output clocks the next — simple, but the carry ripples.
Only FF0 sees the real clock; each next FF is clocked by the previous output — the change 'ripples' along.
⚠ The ripple delay means the count is brieﬂy WRONG while it propagates — a 
problem at high speed.

<!-- page 25 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
32  /  67
Why Ripple Counters Break at Speed
Follow the count from 7 to 8 one gate delay at a time, and watch three wrong numbers appear on the pins.
TIME AFTER EDGE
Q3
Q2
Q1
Q0
VALUE ON PINS
before
0
1
1
1
7  —  correct
1 × tpd
0
1
1
0
6  —  wrong
2 × tpd
0
1
0
0
4  —  wrong
3 × tpd
0
0
0
0
0  —  wrong
4 × tpd
1
0
0
0
8  —  correct at 
last
Anything reading those pins during the ripple — a comparator, a decoder, a memory address bus — 
sees 6, then 4, then 0.
THE SPEED LIMIT
The count is only valid after ALL n stages 
have settled:
t_settle  =  n × t_pd
f_max  =  1 / (n × t_pd)
PUT NUMBERS ON IT
At t_pd = 10 ns, a 4-bit ripple counter tops out near 
25 MHz — and a 16-bit one near 6 MHz. A modern 
CPU clock is 3 GHz.
THE WAY OUT
Give every ﬂip-ﬂop the same clock, and compute in 
advance which ones should ﬂip.

<!-- page 26 -->
L06 · MODERN COMPUTER ARCHITECTURE
14 / 34
Synchronous Counter
All ﬂip-ﬂops share ONE clock — they all update at the exact same instant.
How It Works
Combinational logic (the & gates) computes each FF's next bit; 
the shared clock updates them all together.
Key Advantage
✓ No ripple delay — the whole count is correct the instant 
after the edge. This is what real designs use.

<!-- page 27 -->
L06 · MODERN COMPUTER ARCHITECTURE
15 / 34
Ripple vs Synchronous
Same count sequence, very diﬀerent timing behaviour.
RIPPLE (async)
SYNCHRONOUS
Clocking
Each FF clocks the next
All FFs share one clock
Speed
Slow — carry ripples through
Fast — all update at once
Glitches
Yes — transient wrong counts
No — clean output
Complexity
Simple, fewer gates
Needs next-state logic
Real use
Toy / low-speed dividers
Everything performance-critical
Trade-oﬀ in one line: ripple is cheaper to build; synchronous is the only one safe at real clock speeds.

<!-- page 28 -->
L06 · MODERN COMPUTER ARCHITECTURE
16 / 34
Mod-N & Divide-by Counters
Reset early to count any range — or use a counter to slow a clock down.
MOD-N: STOP EARLY
A 3-bit counter naturally counts mod-8 (0–7). To count 
mod-6 (0–5), detect the value 6 and reset to 0.
0
→
1
→
2
→
3
→
4
→
5
↺ reset at 6
Used for: clock dividers, digital clocks (mod-60 for 
seconds!), any custom cycle length.
DIVIDE-BY: SLOW THE CLOCK
Each ﬂip-ﬂop in a counter toggles at HALF the rate of the 
one before it.
So bit 0 = clock ÷ 2, bit 1 = clock ÷ 4, bit 2 = clock ÷ 8…
A counter is a frequency divider for free. This is how a 32 
kHz crystal becomes a 1 Hz tick in a watch.

<!-- page 29 -->
L06 · MODERN COMPUTER ARCHITECTURE
17 / 34
Counters in the Wild
Once you see them, they're everywhere.
PC
Program Counter
Holds the address of the next instruction; 
increments each cycle, or jumps on a branch. The 
heart of instruction ﬂow.
⧗
Timers & delays
Count clock ticks to measure time — every 
microcontroller timer, watchdog, and PWM 
generator is a counter.
÷
Frequency division
Turn a fast crystal oscillator into slower usable 
clocks — watches, UART baud rates, display refresh.
▤
Memory addressing
Sequentially step through addresses in DMA 
transfers, refresh cycles, and scan-out logic.

<!-- page 30 -->
19 / 34
3. Finite State Machines
The universal model of sequential logic: a set of states, rules to move 
between them, and outputs. This is how a CPU 'thinks'.

<!-- page 31 -->
L06 · MODERN COMPUTER ARCHITECTURE
20 / 34
What Is a Finite State Machine?
A circuit that is always in exactly ONE of a ﬁnite set of states, and moves between them on rules.
THREE INGREDIENTS
1
States
A ﬁnite list of situations the machine can be in (e.g. 
IDLE, RUNNING, DONE).
2
Transitions
Rules for moving between states, based on current 
state + inputs.
3
Outputs
What the machine produces in each state (or during 
each transition).
EVERYDAY EXAMPLE
A traﬃc light is an FSM.
States: GREEN, YELLOW, RED.
Transitions: timed (green→yellow→red→green).
Outputs: which lamp is lit.
A vending machine, an elevator, a game character's AI, a 
network protocol — all FSMs. This model is everywhere.

<!-- page 32 -->
L06 · MODERN COMPUTER ARCHITECTURE
21 / 34
Two Flavours: Moore vs Mealy
The diﬀerence is simply WHERE the output comes from.
Rule of thumb: Moore = 'output in the circle', Mealy = 'output on the arrow'. Both compute the same things.
MOORE MACHINE
MEALY MACHINE
Output depends on the STATE only
The output is written inside each state circle
It changes only when the state changes
Simpler to reason about, and glitch-free
May need more states to do the same job
Output appears one cycle after the input
Output depends on STATE + INPUT
The output is written on each transition arrow
It can react to an input within the same cycle
Often needs fewer states
Output can glitch when the input glitches
Output appears in the same cycle as the input

<!-- page 33 -->
L06 · MODERN COMPUTER ARCHITECTURE
22 / 34
The Anatomy of Any FSM
Every sequential circuit is this same three-part structure.

<!-- page 34 -->
L06 · MODERN COMPUTER ARCHITECTURE
23 / 34
The State Diagram
The picture that captures an FSM: circles are states, arrows are transitions.
HOW TO READ IT
Each circle = one state.
Each arrow = a transition, labelled with the 
input/condition that triggers it.
Follow the arrows and you can trace exactly 
what the machine does for any input 
sequence.
This diagram IS the design — everything else is 
just translating it to gates.

<!-- page 35 -->
L06 · MODERN COMPUTER ARCHITECTURE
23 / 34
The State Diagram
The picture that captures an FSM: circles are states, arrows are transitions.
HOW TO READ IT
Each circle = one state.
Each arrow = a transition, labelled with the 
input/condition that triggers it.
Follow the arrows and you can trace exactly 
what the machine does for any input 
sequence.
This diagram IS the design — everything else is 
just translating it to gates.
GREEN
YELLOW
RED
timer
timer
timer
TRAFFIC LIGHT  —  A THREE-STATE MOORE MACHINE

<!-- page 36 -->
L06 · MODERN COMPUTER ARCHITECTURE
24 / 34
The State Table
The same FSM, written as a table — the bridge from diagram to hardware.
Current State
Input
Next State
Output
GREEN
expired
YELLOW
Go
YELLOW
expired
RED
Slow
RED
expired
GREEN
Stop
any
not expired
(same)
(hold)
Why a table?  It lists every (state, input) → (next state, output). Encode the states as bits, and each column becomes a 
truth table you minimise with K-maps (L2) into gates.

<!-- page 37 -->
L06 · MODERN COMPUTER ARCHITECTURE
25 / 34
FSM Design Flow
Six steps from a word problem to a working circuit — always the same recipe.
1
Understand
List the states and what 
triggers each transition.
2
State diagram
Draw circles and arrows 
— the visual spec.
3
State table
Tabulate every 
state/input → 
next-state/output.
4
Encode states
Assign a bit pattern to 
each state (00, 01, 10…).
5
Derive logic
K-map each next-state & 
output bit into gates.
6
Build
Flip-ﬂops for the state 
register + that logic.

<!-- page 38 -->
L06 · MODERN COMPUTER ARCHITECTURE
27 / 34
FSMs Run the World
Once you know the pattern, you'll see state machines in everything you build.
⚙
The CPU control unit
Fetch → Decode → Execute → Writeback is literally 
an FSM. It sequences every instruction (Module 4).
⇄
Communication protocols
TCP connection states, USB handshakes, traﬃc-light 
controllers — all speciﬁed as FSMs.
◆
Software & games
UI ﬂows, game AI ('patrol → chase → attack'), regex 
engines, parsers — FSMs in code, not gates.
▣
Embedded control
Washing machines, elevators, vending machines, 
engine controllers — physical FSMs everywhere.

<!-- page 39 -->
L06 · MODERN COMPUTER ARCHITECTURE
29 / 34
The Big Picture: Datapath + Control
Everything in this course so far now snaps together into a computer.
The control unit is an FSM (today). The datapath is registers + ALU + MUXes (L3–L6). Together they're a CPU.
This is exactly where Module 3 & 4 pick up — you now have every building block a processor needs.
CONTROL
(FSM)
today
DATAPATH
registers · ALU · MUXes · adders
L3 – L6
control signals
status flags

<!-- page 40 -->
L06 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and cause real design bugs.
✕
Register without load enable
A plain register overwrites every clock. Real ones need a 
load/hold control, or they can't keep a value.
✕
Ripple counter at high speed
The carry ripple makes intermediate counts brieﬂy wrong. 
Use synchronous counters for anything fast.
✕
Wrong select/state-bit count
N states need ⌈log₂N⌉ ﬂip-ﬂops (binary). Miscounting 
breaks the whole encoding.
✕
Moore/Mealy confusion
Moore output = state only (in the circle). Mealy = state + 
input (on the arrow). Know which you're drawing.
✕
Forgetting the reset state
Every FSM needs a deﬁned power-on state, or it starts in a 
random, possibly illegal state.
✕
Unreachable / dead states
After encoding, unused bit patterns can trap the FSM. 
Handle them (usually route to reset).

<!-- page 41 -->
L06 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — from a stored bit to a thinking machine.
01
A register is n ﬂip-ﬂops sharing a clock — the CPU's fastest storage; add a load-enable MUX so it holds until told to update.
02
A shift register moves bits along a chain each clock — enabling serial↔parallel conversion and free multiply/divide-by-2.
03
A counter advances by 1 each clock; synchronous (shared clock) beats ripple (chained) for speed and glitch-free counts.
04
A ﬁnite state machine — states, transitions, outputs — is the universal model; registers and counters are special cases of it.
05
FSM design is a ﬁxed recipe: diagram → table → encode states → K-map the logic → build with a state register + gates.

<!-- page 42 -->
L06 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Design, trace, and build state machines.
01
Shift & Count
Trace a 4-bit shift register loading 
1011 over 4 clocks. Then draw a 3-bit 
synchronous counter's Q outputs.
02
FSM from Words
Design a '110' sequence detector: 
state diagram, state table, and binary 
encoding.
03
Divide the Clock
How many ﬂip-ﬂops divide a 1 MHz 
clock down to 1 kHz? Show the 
divide-by math.
EXIT TICKET
1.  How many ﬂip-ﬂops does a mod-12 counter need, and why?
2.  In one line: the diﬀerence between a Moore and a Mealy machine.
3.  Draw the state diagram for a circuit that detects the input sequence '11'.

<!-- page 43 -->
L06 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
A register is built from…
flip-flops
Q2
Synchronous counters share one…
clock
Q3
A Moore output depends only on…
the state
All three instant? You've completed the digital-logic foundation — Module 3 builds the datapath on top of it.

<!-- page 44 -->
END OF L06  ·  MODULE 2 COMPLETE
States, and a
machine that runs.
NEXT — MODULE 3
The Datapath & Instruction Set — assemble registers, ALU, and control into a 
processor that actually executes machine instructions.

<!-- page 45 -->
Thanks 
for 
watching!

#### MCA_Lecture_6_Counters.pdf

<!-- page 1 -->
Lecture: 0110 
Counters
CSA222: Modern Computer Architecture

<!-- page 2 -->
L06 · MODERN COMPUTER ARCHITECTURE
11 / 34
SECTION 02
2. Counters
The Beating Clock of Digital Systems
Flip-ﬂops conﬁgured to count clock pulses, serving as the essential 
foundation for timing, addressing, and control ﬂow.
CORE APPLICATIONS

Timers & Clock Dividers
Measuring precise time intervals and scaling frequencies.

Address Generation
Stepping through memory locations sequentially.

The Program Counter (PC)
The engine driving instruction fetch and CPU execution ﬂow.
VISUALIZING CLOCK & COUNT
How a Counter Advances
Each rising edge of the clock trigger increments the register state.
▲
▲
▲
CLK
000
→
001
→
010
...
STATE TRANSITION (N-BIT OVERFLOW)

<!-- page 3 -->
L06 · MODERN COMPUTER ARCHITECTURE
12 / 34
What Is a Counter?
A register whose value advances by 1 on every clock pulse — it counts.
A 3-BIT COUNTER CYCLES THROUGH 0 → 7 → 0…
000
→001
→010
→011
→100
→101
→110
→111
↺ wraps back to 000
Each clock pulse = +1.
After the max value (111 = 7), it rolls over to 000 — exactly like an 
odometer, or 8-bit overﬂow from L4.
An n-bit counter counts 0 to 2ⁿ−1, then wraps. It's a register + an incrementer 
+ feedback.
WHY COUNTERS MATTER
The Program Counter (PC) is a counter — it 
holds the address of the next instruction 
and increments each cycle.
Also: timers, clock dividers, memory-refresh 
logic, event counters — all built on this.

<!-- page 4 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
Reading the Count as Waveforms
Look at the bits over time and the pattern that makes counters buildable jumps out.
CLK
Q0
Q1
Q2
0
1
2
3
4
5
6
7
value
Q0 changes every clock. Q1 changes every second clock. Q2 changes every fourth.
THE RULE BEHIND IT
A bit ﬂips exactly when every bit below it is 1.
Q0 ﬂips always. Q1 ﬂips when Q0 = 1. Q2 ﬂips 
when Q1·Q0 = 1.
IN T FLIP-FLOP TERMS
T0 = 1
T1 = Q0
T2 = Q0·Q1
THAT IS THE WHOLE DESIGN
Nothing else is needed for a plain binary 
up-counter. Two diﬀerent circuits implement 
it — and choosing between them is the next 
four slides.
13 / 34

<!-- page 5 -->
L06 · MODERN COMPUTER ARCHITECTURE
13 / 34
Ripple (Asynchronous) Counter
Each ﬂip-ﬂop's output clocks the next — simple, but the carry ripples.
Only FF0 sees the real clock; each next FF is clocked by the previous output — the change 'ripples' along.
⚠ The ripple delay means the count is brieﬂy WRONG while it propagates — a 
problem at high speed.

<!-- page 6 -->
L06  ·  MODERN COMPUTER ARCHITECTURE
32  /  67
Why Ripple Counters Break at Speed
Follow the count from 7 to 8 one gate delay at a time, and watch three wrong numbers appear on the pins.
TIME AFTER EDGE
Q3
Q2
Q1
Q0
VALUE ON PINS
before
0
1
1
1
7  —  correct
1 × tpd
0
1
1
0
6  —  wrong
2 × tpd
0
1
0
0
4  —  wrong
3 × tpd
0
0
0
0
0  —  wrong
4 × tpd
1
0
0
0
8  —  correct at 
last
Anything reading those pins during the ripple — a comparator, a decoder, a memory address bus — 
sees 6, then 4, then 0.
THE SPEED LIMIT
The count is only valid after ALL n stages 
have settled:
t_settle  =  n × t_pd
f_max  =  1 / (n × t_pd)
PUT NUMBERS ON IT
At t_pd = 10 ns, a 4-bit ripple counter tops out near 
25 MHz — and a 16-bit one near 6 MHz. A modern 
CPU clock is 3 GHz.
THE WAY OUT
Give every ﬂip-ﬂop the same clock, and compute in 
advance which ones should ﬂip.

<!-- page 7 -->
L06 · MODERN COMPUTER ARCHITECTURE
14 / 34
Synchronous Counter
All ﬂip-ﬂops share ONE clock — they all update at the exact same instant.
How It Works
Combinational logic (the & gates) computes each FF's next bit; 
the shared clock updates them all together.
Key Advantage
✓ No ripple delay — the whole count is correct the instant 
after the edge. This is what real designs use.

<!-- page 8 -->
L06 · MODERN COMPUTER ARCHITECTURE
15 / 34
Ripple vs Synchronous
Same count sequence, very diﬀerent timing behaviour.
RIPPLE (async)
SYNCHRONOUS
Clocking
Each FF clocks the next
All FFs share one clock
Speed
Slow — carry ripples through
Fast — all update at once
Glitches
Yes — transient wrong counts
No — clean output
Complexity
Simple, fewer gates
Needs next-state logic
Real use
Toy / low-speed dividers
Everything performance-critical
Trade-oﬀ in one line: ripple is cheaper to build; synchronous is the only one safe at real clock speeds.

<!-- page 9 -->
L06 · MODERN COMPUTER ARCHITECTURE
16 / 34
Mod-N & Divide-by Counters
Reset early to count any range — or use a counter to slow a clock down.
MOD-N: STOP EARLY
A 3-bit counter naturally counts mod-8 (0–7). To count 
mod-6 (0–5), detect the value 6 and reset to 0.
0
→
1
→
2
→
3
→
4
→
5
↺ reset at 6
Used for: clock dividers, digital clocks (mod-60 for 
seconds!), any custom cycle length.
DIVIDE-BY: SLOW THE CLOCK
Each ﬂip-ﬂop in a counter toggles at HALF the rate of the 
one before it.
So bit 0 = clock ÷ 2, bit 1 = clock ÷ 4, bit 2 = clock ÷ 8…
A counter is a frequency divider for free. This is how a 32 
kHz crystal becomes a 1 Hz tick in a watch.

<!-- page 10 -->
L06 · MODERN COMPUTER ARCHITECTURE
17 / 34
Counters in the Wild
Once you see them, they're everywhere.
PC
Program Counter
Holds the address of the next instruction; 
increments each cycle, or jumps on a branch. The 
heart of instruction ﬂow.
⧗
Timers & delays
Count clock ticks to measure time — every 
microcontroller timer, watchdog, and PWM 
generator is a counter.
÷
Frequency division
Turn a fast crystal oscillator into slower usable 
clocks — watches, UART baud rates, display refresh.
▤
Memory addressing
Sequentially step through addresses in DMA 
transfers, refresh cycles, and scan-out logic.

<!-- page 11 -->
Thanks 
for 
watching!

### L09 · CPU Registers Preview (PC, IR, GPR), From Registers to Register Files, Register  ... (08 Sep 2026)
_Topics: CPU Registers Preview (PC, IR, GPR), Register File Architecture, From Registers to Register Files, Finite State Machines Introduction, Moore vs Mealy Machines, Write Port with Address Decoder, Dual Read Ports with MUXes_

#### MCA_Lecture_7_Register_Files_and_FSMs.pdf

<!-- page 1 -->
Lecture: 0111
Register Files &
State Machines
CSA222: Modern Computer Architecture
How a CPU reads two operands and writes one result every cycle — and 
how FSMs control it all.
The Storage at the Heart of a CPU

<!-- page 2 -->
19 / 34
1. Finite State Machines
The universal model of sequential logic: a set of states, rules to move 
between them, and outputs. This is how a CPU 'thinks'.

<!-- page 3 -->
L06 · MODERN COMPUTER ARCHITECTURE
20 / 34
What Is a Finite State Machine?
A circuit that is always in exactly ONE of a ﬁnite set of states, and moves between them on rules.
THREE INGREDIENTS
1
States
A ﬁnite list of situations the machine can be in (e.g. 
IDLE, RUNNING, DONE).
2
Transitions
Rules for moving between states, based on current 
state + inputs.
3
Outputs
What the machine produces in each state (or during 
each transition).
EVERYDAY EXAMPLE
A traﬃc light is an FSM.
States: GREEN, YELLOW, RED.
Transitions: timed (green→yellow→red→green).
Outputs: which lamp is lit.
A vending machine, an elevator, a game character's AI, a 
network protocol — all FSMs. This model is everywhere.

<!-- page 4 -->
L06 · MODERN COMPUTER ARCHITECTURE
21 / 34
Two Flavours: Moore vs Mealy
The diﬀerence is simply WHERE the output comes from.
Rule of thumb: Moore = 'output in the circle', Mealy = 'output on the arrow'. Both compute the same things.
MOORE MACHINE
MEALY MACHINE
Output depends on the STATE only
The output is written inside each state circle
It changes only when the state changes
Simpler to reason about, and glitch-free
May need more states to do the same job
Output appears one cycle after the input
Output depends on STATE + INPUT
The output is written on each transition arrow
It can react to an input within the same cycle
Often needs fewer states
Output can glitch when the input glitches
Output appears in the same cycle as the input

<!-- page 5 -->
L06 · MODERN COMPUTER ARCHITECTURE
22 / 34
The Anatomy of Any FSM
Every sequential circuit is this same three-part structure.

<!-- page 6 -->
L06 · MODERN COMPUTER ARCHITECTURE
23 / 34
The State Diagram
The picture that captures an FSM: circles are states, arrows are transitions.
HOW TO READ IT
Each circle = one state.
Each arrow = a transition, labelled with the 
input/condition that triggers it.
Follow the arrows and you can trace exactly 
what the machine does for any input 
sequence.
This diagram IS the design — everything else is 
just translating it to gates.

<!-- page 7 -->
L06 · MODERN COMPUTER ARCHITECTURE
23 / 34
The State Diagram
The picture that captures an FSM: circles are states, arrows are transitions.
HOW TO READ IT
Each circle = one state.
Each arrow = a transition, labelled with the 
input/condition that triggers it.
Follow the arrows and you can trace exactly 
what the machine does for any input 
sequence.
This diagram IS the design — everything else is 
just translating it to gates.
GREEN
YELLOW
RED
timer
timer
timer
TRAFFIC LIGHT  —  A THREE-STATE MOORE MACHINE

<!-- page 8 -->
L06 · MODERN COMPUTER ARCHITECTURE
24 / 34
The State Table
The same FSM, written as a table — the bridge from diagram to hardware.
Current State
Input
Next State
Output
GREEN
expired
YELLOW
Go
YELLOW
expired
RED
Slow
RED
expired
GREEN
Stop
any
not expired
(same)
(hold)
Why a table?  It lists every (state, input) → (next state, output). Encode the states as bits, and each column becomes a 
truth table you minimise with K-maps (L2) into gates.

<!-- page 9 -->
L06 · MODERN COMPUTER ARCHITECTURE
25 / 34
FSM Design Flow
Six steps from a word problem to a working circuit — always the same recipe.
1
Understand
List the states and what 
triggers each transition.
2
State diagram
Draw circles and arrows 
— the visual spec.
3
State table
Tabulate every 
state/input → 
next-state/output.
4
Encode states
Assign a bit pattern to 
each state (00, 01, 10…).
5
Derive logic
K-map each next-state & 
output bit into gates.
6
Build
Flip-ﬂops for the state 
register + that logic.

<!-- page 10 -->
L06 · MODERN COMPUTER ARCHITECTURE
27 / 34
FSMs Run the World
Once you know the pattern, you'll see state machines in everything you build.
⚙
The CPU control unit
Fetch → Decode → Execute → Writeback is literally 
an FSM. It sequences every instruction (Module 4).
⇄
Communication protocols
TCP connection states, USB handshakes, traﬃc-light 
controllers — all speciﬁed as FSMs.
◆
Software & games
UI ﬂows, game AI ('patrol → chase → attack'), regex 
engines, parsers — FSMs in code, not gates.
▣
Embedded control
Washing machines, elevators, vending machines, 
engine controllers — physical FSMs everywhere.

<!-- page 11 -->
L06 · MODERN COMPUTER ARCHITECTURE
29 / 34
The Big Picture: Datapath + Control
Everything in this course so far now snaps together into a computer.
The control unit is an FSM (today). The datapath is registers + ALU + MUXes (L3–L6). Together they're a CPU.
This is exactly where Module 3 & 4 pick up — you now have every building block a processor needs.
CONTROL
(FSM)
today
DATAPATH
registers · ALU · MUXes · adders
L3 – L6
control signals
status flags

<!-- page 12 -->
L07 · MODERN COMPUTER ARCHITECTURE
02 / 34
Where We Left Off
L5–L6 gave us ﬂip-ﬂops, registers, and counters. Now we organise them.
↺
Flip-flops
Edge-triggered 1-bit 
memory, safe under a 
clock (L5).
▣
Registers
n ﬂip-ﬂops sharing a clock 
= an n-bit word store (L6).
⟳
Counters & FSMs
Structures that count and 
follow state-based rules 
(L6).
»
Today: organise 
them
Pack 32 registers into a 
ﬁle; formalise FSM 
control.
A CPU has dozens of registers accessed constantly. How do you read two and write one, all in one cycle?

<!-- page 13 -->
L07 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
The CPU's fastest storage, and the machines that control it.
1
Register Files
32 registers as one block: 1 write 
port, 2 read ports — the RISC 
standard.
→
2
Finite State Machines
The formal model of controlled 
sequential behaviour.
→
3
Moore vs Mealy
Two ways to build an FSM — and a 
'1011' detector in both.
Why it matters:  the register ﬁle is the structure a CPU touches on nearly every instruction — and an FSM is 
what tells it when.

<!-- page 14 -->
L07 · MODERN COMPUTER ARCHITECTURE
04 / 34
From Registers to a Register File
A CPU needs many registers, accessed together — so we pack them into one addressable block.
THE NEED
A single instruction like  add R1, R2, R3  must:
•  READ two source registers (R2, R3)
•  WRITE one destination register (R1)
•  …all in ONE clock cycle.
A register ﬁle is a bank of registers with address-based 
access — like a tiny, ultra-fast memory that lives inside 
the CPU.
THE STANDARD
MIPS & RISC-V: 32 registers, each 32 bits wide.
Ports: 2 read + 1 write, every cycle. That's exactly 
enough for a two-operand, one-result instruction.
This exact structure feeds the ALU you'll wire up in Module 
4 (L13–L14).

<!-- page 15 -->
05 / 34
2. Register Files
A bank of registers with addressed access: a decoder picks where to write, 
MUXes pick what to read.

<!-- page 16 -->
L07 · MODERN COMPUTER ARCHITECTURE
06 / 34
Anatomy of a Register File
Three ports in, addresses select which registers each port touches.
THREE PORTS
2 READ ports (blue):
each takes an address, outputs that 
register's value.
1 WRITE port (amber):
address + data + write-enable, updates 
one register on the clock edge.
Reads are instant (combinational); writes 
wait for the clock. That asymmetry is key — 
next slides.

<!-- page 17 -->
L07 · MODERN COMPUTER ARCHITECTURE
07 / 34
The Write Port: Decoder + Enable
An address decoder activates exactly one register's clock-enable.
HOW A WRITE WORKS
1.  The write address goes into a 5-to-32 
decoder.
2.  The decoder raises exactly ONE 
register's enable line (one-hot).
3.  If WE = 1, that one register captures 
wdata on the clock edge.
All other registers ignore the bus — their 
enables are 0.

<!-- page 18 -->
L07 · MODERN COMPUTER ARCHITECTURE
08 / 34
The Read Ports: One Big MUX Each
Each read address drives a 32:1 MUX that selects one register onto the output.
WHY A MUX
Every register's output is wired to BOTH 
read MUXes at once.
The read address is the select code — it 
picks which of the 32 register outputs 
ﬂows to that port.
Two independent MUXes = two independent 
reads, simultaneously. Recall the MUX from 
L3.

<!-- page 19 -->
L07 · MODERN COMPUTER ARCHITECTURE
09 / 34
Two Reads + One Write, Every Cycle
The full picture: one instruction's worth of register access in a single diagram.

<!-- page 20 -->
L07 · MODERN COMPUTER ARCHITECTURE
10 / 34
Reads Are Instant, Writes Wait for the Clock
This asymmetry is the single most important fact about a register ﬁle.
READ = COMBINATIONAL
No clock needed
Put an address on a read port…
…the data appears after just gate delay.
Both read ports work this way, at once.
So the ALU gets its operands immediately.
WRITE = SYNCHRONOUS
Happens on the clock edge
Address + data + WE are set up early…
…the register updates only at the edge.
This prevents races and half-written values.
The new value is readable next cycle.
Why it works:  read the old values combinationally at the start of a cycle, compute, then write the result at the edge — 
read-before-write, safely, in one cycle.

<!-- page 21 -->
L07 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Register File in a Real CPU
This isn't theory — it's the exact structure inside RISC-V and MIPS chips.
▤
RISC-V: 32 registers
x0–x31, each 32 or 64 bits. x0 is hardwired to zero — 
reads always give 0, writes are ignored.
⇄
Always 2 read + 1 write
Matches R-type instructions (add rd, rs1, rs2): read 
two sources, write one destination per cycle.
⚡
Fastest storage tier
Register ﬁle → L1 cache → L2 → RAM. Registers are a 
fraction of a nanosecond away from the ALU.
→
Feeds the datapath
In Module 4, the read ports drive the ALU and the 
write port catches its result — the core loop.

<!-- page 22 -->
L07 · MODERN COMPUTER ARCHITECTURE
31 / 34
Common Mistakes to Avoid
The slips that cost marks — and cause real bugs.
✕
Clocking the read port
Register-ﬁle reads are combinational. Clocking them adds 
a needless cycle of latency.
✕
Forgetting write-enable
Without WE, a register is overwritten every cycle. The 
decoder picks WHERE; WE picks WHETHER.
✕
Resetting a detector on match
After '1011', the trailing '1' may start a new match. Go to 
the right preﬁx state, not S0.
✕
Mixing Moore & Mealy notation
Moore: output in the circle (S1/1). Mealy: output on the 
arrow (in/out). Don't blend them.
✕
Miscounting detector states
Moore needs a state per output value → often one more 
than the Mealy version. Count carefully.
✕
Tri-state with two drivers
On a tri-state read bus, enabling two buﬀers at once 
causes bus contention — a hardware fault.

<!-- page 23 -->
L07 · MODERN COMPUTER ARCHITECTURE
32 / 34
Key Takeaways
Five sentences — the CPU's storage and its controller.
01
A register ﬁle packs many registers (RISC: 32 × 32-bit) into one block with 2 read ports and 1 write port.
02
The write port uses a decoder + write-enable to update exactly one register on the clock edge (synchronous).
03
The read ports are MUX-based and combinational — two operands appear instantly, no clock needed.
04
An FSM = states + inputs + transitions + outputs, built as next-state logic → state register → output logic.
05
Moore output = f(state) (in the circle); Mealy output = f(state, input) (on the arrow) — Mealy often uses fewer states.

<!-- page 24 -->
L07 · MODERN COMPUTER ARCHITECTURE
33 / 34
Practice & Homework
Design register ﬁles and state machines.
01
8×16 Register File
Design a register ﬁle with 8 registers 
of 16 bits. Show the write-port 
decoder logic (3→8).
02
Mealy '10' Detector
Draw the state diagram for a Mealy 
FSM that outputs 1 whenever it sees 
the pattern '10'.
03
Mealy → Moore
Convert a given 3-state Mealy FSM 
into an equivalent Moore FSM. How 
many states now?
EXIT TICKET
1.  In a register ﬁle, why is the read combinational but the write synchronous?
2.  How many states does a Moore '1011' detector need, and why one more than Mealy?
3.  Trace the Mealy detector on input '101011' — when does the output pulse?

<!-- page 25 -->
END OF L07
Storage, and
the machine to run it.
NEXT — L08
Memory & the Memory Hierarchy — SRAM vs DRAM, how RAM is organised, and 
why your CPU waits on memory more than anything else.

### L10 · Register Files & Finite State Machines, Sequence Detector, SRAM vs DRAM & Memory ... (10 Sep 2026)
_Topics: Register Files & Finite State Machines, SRAM, DRAM, SRAM vs DRAM Comparison, SRAM vs DRAM & Memory Stack, Sequence Detector, Beyond Register Files, 6T Cell Structure, Stability and Speed, 1T1C Cell Structure, Refresh and Destructive Read_

#### MCA_Lecture_8_SRAM_vs_DRAM_Memory_Stack.pdf

<!-- page 1 -->
Lecture: 1000 
SRAM vs DRAM &
Architectures
CSA222: Modern Computer Architecture
From a 6-transistor cell to the memory wall — the trade-oﬀs that shape 
every computer.
Why Computers Have So Many Kinds of 
Memory

<!-- page 2 -->
L08 · MODERN COMPUTER ARCHITECTURE
02 / 34
Register Files Are Tiny
L7's register ﬁle holds 32 words. Real programs need billions. We need new memory.
▤
Register file
32–128 words of ﬂip-ﬂops 
— blazing fast, right by 
the ALU (L7).
⚠
But it's small
Flip-ﬂops are expensive: 
20+ transistors per bit. 
Can't scale to GBs.
∞
Programs need more
A photo is millions of 
bytes; an OS is billions. 
Registers can't hold that.
»
Different jobs, 
different memory
So we use several memory 
technologies, each tuned 
for its role.
The core tension: fast memory is small and expensive; big memory is slow and cheap. Today we see why.

<!-- page 3 -->
L08 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Two memory technologies, then how they stack into a hierarchy.
1
SRAM
Static RAM — 6 transistors per bit, 
fast, no refresh. The stuﬀ of 
caches.
→
2
DRAM
Dynamic RAM — 1 transistor + 1 
capacitor, dense, needs refresh. 
Main memory.
→
3
The Hierarchy
Registers → caches → DRAM → 
disk, and why 'the memory wall' 
exists.
The punchline:  no single memory is fast, big, AND cheap. Computers cheat by layering them — the memory 
hierarchy.

<!-- page 4 -->
05 / 34
1. SRAM
Static RAM: a bit stored in cross-coupled inverters. Fast and stable — but it 
costs six transistors per bit.

<!-- page 5 -->
L08 · MODERN COMPUTER ARCHITECTURE
06 / 34
What Is SRAM?
'Static' because it holds its value with no refresh — as long as the power stays on.
THE IDEA
SRAM stores each bit in a bistable latch — two 
cross-coupled inverters, exactly like the one from L5.
Once set, the feedback loop holds the value indeﬁnitely. 
No clock, no refresh — the bit just stays.
That stability is why it's called STATIC RAM.
AT A GLANCE
6 transistors
per bit cell
A few ns
access time — very fast
No refresh
holds while powered
Expensive
large area per bit

<!-- page 6 -->
L08 · MODERN COMPUTER ARCHITECTURE
07 / 34
The 6T SRAM Cell
Four transistors form two cross-coupled inverters; two more are access gates.
4 transistors (2 inverters) + 2 access = 6T
THE PARTS
Cross-coupled inverters (4T): store the bit, 
exactly the L5 bistable.
Access transistors M5, M6 (2T): connect the 
cell to the bit lines when the word line is 
high.
Word line = 'select this cell'. Bit lines = 
read/write the data (and its complement).

<!-- page 7 -->
L08 · MODERN COMPUTER ARCHITECTURE
08 / 34
How SRAM Holds a Bit
The feedback loop reinforces itself — the bit is 'self-healing' while powered.
SELF-REINFORCING
If Q = 1, the ﬁrst inverter drives Q' = 0, and the second 
inverter drives Q back to 1.
The loop constantly 'refreshes itself' from its own power 
supply. Tiny leakage is instantly corrected.
So the value is rock-solid — no external refresh circuit 
needed, ever.
Trade-oﬀ: this stability costs 6 transistors per bit — a lot of 
silicon for one bit.
VS A CAPACITOR
SRAM stores the bit ACTIVELY — powered transistors 
constantly hold it.
DRAM (next section) stores it PASSIVELY — as charge on a 
capacitor that slowly leaks away.
Active storage = fast & stable but bulky. Passive storage = 
tiny & cheap but needs constant refreshing. That single 
choice explains almost every diﬀerence between them.

<!-- page 8 -->
L08 · MODERN COMPUTER ARCHITECTURE
09 / 34
Reading & Writing SRAM
Raise the word line to connect the cell; the bit lines do the rest.
READ
1
Pre-charge both bit lines high.
2
Raise the word line → cell connects.
3
The stored bit pulls one bit line low.
4
A sense ampliﬁer detects which side dropped.
WRITE
1
Drive the bit lines to the desired value.
2
Raise the word line → cell connects.
3
The strong bit-line drivers overpower the cell.
4
The latch ﬂips to the new value and holds it.
Reads are non-destructive — the cell keeps its value. That's another SRAM advantage over DRAM.

<!-- page 9 -->
L08 · MODERN COMPUTER ARCHITECTURE
10 / 34
SRAM: The Scorecard
Fast and simple to use — but the six transistors cost you.
⚡
Very fast
Access in a few nanoseconds — no refresh delay, 
non-destructive reads.
✓
No refresh
The latch holds itself. Simpler controller, lower 
access latency.
▽
Low density
6 transistors per bit → far fewer bits per mm² than 
DRAM.
$
Expensive & power-hungry
More silicon per bit and constant static power. 
Costly at scale.
Perfect for small, speed-critical memory → this is exactly why caches (L1/L2/L3) are built from SRAM.

<!-- page 10 -->
11 / 34
2. DRAM
Dynamic RAM: one transistor, one capacitor. Tiny and cheap — but the charge 
leaks, so it must be refreshed.

<!-- page 11 -->
L08 · MODERN COMPUTER ARCHITECTURE
12 / 34
What Is DRAM?
'Dynamic' because the stored charge leaks away and must be constantly refreshed.
THE IDEA
DRAM stores each bit as CHARGE on a tiny capacitor: 
charged = 1, empty = 0.
One transistor acts as a switch to access that capacitor. 
That's it — just 1T + 1C per bit.
But capacitors leak. Within milliseconds the charge fades — 
so DRAM must be refreshed thousands of times a second. 
Hence 'DYNAMIC'.
AT A GLANCE
1T + 1C
per bit cell — tiny
50–100 ns
access — slower than SRAM
Needs refresh
every few milliseconds
Very dense
cheap per bit at scale

<!-- page 12 -->
L08 · MODERN COMPUTER ARCHITECTURE
13 / 34
The 1T1C DRAM Cell
One access transistor, one storage capacitor — the smallest memory cell there is.
Just 1 transistor + 1 capacitor = 1T1C
HOW IT WORKS
Word line high → transistor opens → 
capacitor connects to the bit line.
Write: drive the bit line to charge or drain the 
capacitor.
Read: sense the tiny charge the capacitor 
dumps onto the bit line.
One capacitor vs six transistors is why DRAM 
packs ~6× more bits into the same area.

<!-- page 13 -->
L08 · MODERN COMPUTER ARCHITECTURE
14 / 34
Why DRAM Needs Refresh
The capacitor leaks. Left alone, a 1 fades to 0 within milliseconds.
THE LEAK
Charge on the capacitor over time:
0 ms
full
20 ms
fading
50 ms
weak
64 ms
lost!
So DRAM controllers read and rewrite every row every ~64 ms — 
that's REFRESH.
THE COST OF REFRESH
A dedicated refresh controller cycles through every row, 
thousands of times per second.
During refresh, that part of memory is brieﬂy unavailable 
— a small performance and power cost.
SRAM never pays this cost — its latch refreshes itself from 
power. This is the single biggest practical diﬀerence between 
the two.

<!-- page 14 -->
L08 · MODERN COMPUTER ARCHITECTURE
15 / 34
Destructive Read & Sense Amplifiers
Reading a DRAM cell drains its capacitor — so the value must be written straight back.
1
Access
Word line opens the transistor; the capacitor 
shares its charge with the bit line.
2
Tiny signal
The charge is minuscule — it barely nudges the bit 
line's voltage.
3
Sense amp
A sense ampliﬁer detects that tiny nudge and 
swings it to a full 0 or 1.
4
Write-back
The read drained the cell — so the ampliﬁer 
immediately rewrites the value back.
WHY IT'S SLOWER
Every read is really a read + a rewrite.
The sense ampliﬁer needs time to resolve a 
tiny charge into a clean bit.
Add row activation and precharge, and you get 
DRAM's ~50–100 ns latency — over 10× slower 
than SRAM.

<!-- page 15 -->
L08 · MODERN COMPUTER ARCHITECTURE
16 / 34
DRAM: The Scorecard
Dense and cheap — the reasons it's used for gigabytes of main memory.
△
Very dense
1T1C packs ~6× more bits per mm² than SRAM. 
Gigabytes ﬁt on one chip.
$
Cheap per bit
Fewer components → far lower cost at scale. Ideal 
for bulk memory.
▽
Slower
50–100 ns access, destructive reads, row 
activation overhead.
↻
Needs refresh
Constant refresh circuitry costs power and brieﬂy 
stalls access.
Perfect for large, cost-sensitive memory → this is exactly why main memory (your 8/16/32 GB RAM) is DRAM.

<!-- page 16 -->
L08 · MODERN COMPUTER ARCHITECTURE
17 / 34
Quick Check
Show of hands — the deﬁning diﬀerence.
Q.   Which memory needs a periodic refresh to keep its data — and why?
A
SRAM — latch leaks
DRAM — capacitor 
leaks
✓ charge fades in ms
C
Both equally
D
Neither
DRAM's capacitor loses charge and must be refreshed. SRAM's cross-coupled latch holds itself from power — no refresh.
B

<!-- page 17 -->
18 / 34
3. SRAM vs DRAM
Same job — store bits — but opposite trade-oﬀs. Each wins in a diﬀerent role.

<!-- page 18 -->
L08 · MODERN COMPUTER ARCHITECTURE
19 / 34
SRAM vs DRAM: Side by Side
The comparison you need cold for exams and interviews.
SRAM
DRAM
Cell
6 transistors
1 transistor + 1 capacitor
Density
Low
High (~6× SRAM)
Speed
Fast (a few ns)
Slower (50–100 ns)
Refresh
Not needed
Every few ms
Read
Non-destructive
Destructive (write-back)
Cost / bit
High
Low
Used for
Caches (L1/L2/L3)
Main memory (RAM)
One sentence: SRAM trades density for speed; DRAM trades speed for density. Neither is 'better' — they're diﬀerent tools.

<!-- page 19 -->
L08 · MODERN COMPUTER ARCHITECTURE
20 / 34
Why DRAM Wins on Density
Same silicon area, very diﬀerent bit counts — it's a transistor-count story.
SRAM — 1 BIT
6 transistors → 1 bit
bulky, but fast & stable
DRAM — 1 BIT
1 transistor + 1 capacitor → 1 bit
tiny → ~6× more bits per mm²

<!-- page 20 -->
L08 · MODERN COMPUTER ARCHITECTURE
21 / 34
Where Each One Lives
The trade-oﬀs decide the role: SRAM close and fast, DRAM far and big.
⚡
SRAM → Caches
L1, L2, L3 caches sit on the CPU die, holding KBs–MBs 
of the hottest data. Speed is everything here.
▦
DRAM → Main memory
The 8/16/32 GB 'RAM' sticks on your motherboard. 
Capacity and cost per bit matter most.
▤
SRAM → Register files & buffers
Tiny, ultra-fast on-chip structures — like the register 
ﬁle from L7 — use SRAM-style cells.
◆
DRAM → Frame buffers, GPUs
Graphics memory (GDDR) and bulk buﬀers are DRAM 
variants — huge capacity at reasonable cost.

<!-- page 21 -->
L09 · MODERN COMPUTER ARCHITECTURE
04 / 34
From Gates to a Complete Machine
A computer is more than an ALU — it needs memory, I/O, and a way to wire them together.
CPU
(compute)
MEMORY
(store)
I / O
(talk to world)
BUS
(connect)
The question of computer organisation: how exactly do these connect — and how many buses?
The answer shapes everything: performance, cost, and how you program the machine. Two classic blueprints follow.

<!-- page 22 -->
L09 · MODERN COMPUTER ARCHITECTURE
09 / 34
The Key Insight: Programs ARE Data
Because code lives in memory as numbers, it can be treated like any other data.
λ
Compilers & assemblers
A program that writes another program — it 
outputs instructions as data into memory.
▤
Loading & the OS
The OS loads a program by copying its 
instruction-bytes into memory, then jumps to 
them.
⚡
Just-in-time compilation
JITs (JVM, browsers) generate machine code at 
runtime and then execute it — data becomes 
code.
⚠
Self-modifying code
Programs can, in principle, rewrite their own 
instructions — powerful, and a security mineﬁeld.
This blurring of code and data is von Neumann's superpower — and the root of whole classes of security exploits.

### L11 · Memory Hierarchy, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann  ... (15 Sep 2026)
_Topics: Memory Hierarchy, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann vs Harvard Architectures, Von Neumann Architecture, Harvard Architecture, From Gates to a Complete Machine, Stored-Program Concept, Single Bus and Memory, Von Neumann Bottleneck_

#### MCA_Lecture_8_Architecture_Intro.pdf

<!-- page 1 -->
Lecture: 1000 
SRAM vs DRAM &
Architectures
CSA222: Modern Computer Architecture
From a 6-transistor cell to the memory wall — the trade-oﬀs that shape 
every computer.
Why Computers Have So Many Kinds of 
Memory

<!-- page 2 -->
05 / 34
4. Von Neumann
One memory holds both instructions and data, reached by a single bus. The 
stored-program idea that started it all (1945).

<!-- page 3 -->
L09 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Stored-Program Concept
The radical 1945 idea: keep the program IN memory, as numbers, right alongside the data.
BEFORE vs AFTER
Before: computers were 'wired' for one task — 
reprogramming meant rewiring by hand.
After (von Neumann): the program is stored in the same 
memory as data, encoded as numbers.
To run a diﬀerent program, you just load diﬀerent numbers. 
Software as we know it was born.
ONE MEMORY, TWO ROLES
0x00
lw  r1, 0x40
instr
0x04
add r3, r1, r2
instr
0x08
sw  r3, 0x44
instr
0x40
0x0000002A
data
0x44
0x00000000
data
Same memory, same address space — instructions and data live side 
by side.

<!-- page 4 -->
L09 · MODERN COMPUTER ARCHITECTURE
07 / 34
Von Neumann Architecture
One memory, one bus — everything shares a single path between CPU and memory.
CPU
Control
ALU
Registers
MEMORY
instructions
+
data
SINGLE SHARED BUS
(address + data + control)
Instructions and data take turns on the ONE bus — the deﬁning feature, and the built-in limit.

<!-- page 5 -->
L09 · MODERN COMPUTER ARCHITECTURE
09 / 34
The Key Insight: Programs ARE Data
Because code lives in memory as numbers, it can be treated like any other data.
λ
Compilers & assemblers
A program that writes another program — it 
outputs instructions as data into memory.
▤
Loading & the OS
The OS loads a program by copying its 
instruction-bytes into memory, then jumps to 
them.
⚡
Just-in-time compilation
JITs (JVM, browsers) generate machine code at 
runtime and then execute it — data becomes 
code.
⚠
Self-modifying code
Programs can, in principle, rewrite their own 
instructions — powerful, and a security mineﬁeld.
This blurring of code and data is von Neumann's superpower — and the root of whole classes of security exploits.

<!-- page 6 -->
11 / 34
5. The Von Neumann 
Bottleneck
One bus, two jobs: instructions and data can't both cross at once. This single 
limit shapes modern architecture.

<!-- page 7 -->
L09 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Von Neumann Bottleneck
Every instruction fetch and every data access share ONE bus — so they must take turns.
CPU
MEMORY
(code + data)
ONE BUS
fetch instruction  OR  load/store data
— never both in the same cycle
⇄
The CPU can compute far faster than the single bus can feed it — so the bus becomes the limit.
This traﬃc jam on the memory bus is 'the Von Neumann bottleneck' — the term coined by John Backus in 1977.

<!-- page 8 -->
L09 · MODERN COMPUTER ARCHITECTURE
13 / 34
Why It Limits Performance
A fast CPU stalls whenever the bus is busy — computation waits on communication.
⇄
Bus contention
Instruction fetch and data access compete for the 
same wires. One must wait for the other.
◷
Idle compute units
While the ALU waits for the bus, it does nothing. 
Raw compute power sits unused.
▽
Caps achievable IPC
Instructions-per-cycle is limited not by the ALU 
but by how fast the bus delivers work.
↗
Worsens with CPU speed
Faster CPUs need data faster — but the bus 
doesn't scale as quickly. The gap grows.
The bottleneck is why caches, wider buses, and Harvard-style splits exist — all attempts to widen this pinch.

<!-- page 9 -->
L09 · MODERN COMPUTER ARCHITECTURE
15 / 34
Why It Gets Worse Over Time
CPU speed raced ahead of memory bandwidth for decades — the bottleneck tightened.
THE RESPONSE
Architects fought back with:
• Caches — keep hot code & data on-chip (Module 5).
• Wider & faster buses — move more bits per cycle.
• Harvard-style splits — separate paths for code and 
data.
The rest of today — and much of this course — is about 
that last idea.

<!-- page 10 -->
L09 · MODERN COMPUTER ARCHITECTURE
16 / 34
Quick Check
Show of hands — no notes.
Q.   The Von Neumann bottleneck exists because…
A
The ALU is too 
slow
One bus is shared 
by code & data
✓ they take turns on one path
C
Memory is too 
small
D
There are too many 
registers
The single shared bus means an instruction fetch and a data access can't happen simultaneously — that's the bottleneck.
B

<!-- page 11 -->
17 / 34
3. Harvard Architecture
Separate memories and buses for instructions and data — so the CPU can 
fetch and load at the same time.

<!-- page 12 -->
L09 · MODERN COMPUTER ARCHITECTURE
18 / 34
Harvard Architecture
Two memories, two buses — instructions and data never compete for the same path.
INSTRUCTION
MEMORY
DATA
MEMORY
CPU
Control
ALU
I-BUS
D-BUS
Instruction fetch (I-bus) and data access (D-bus) happen in the SAME cycle — no contention.

<!-- page 13 -->
L09 · MODERN COMPUTER ARCHITECTURE
19 / 34
Two Buses, Twice the Throughput
The whole point: parallel access. What took two cycles now takes one.
VON NEUMANN
one bus, take turns
Cycle 1: fetch instruction.
Cycle 2: access data.
Two cycles for fetch + data.
Bus is the bottleneck.
HARVARD
two buses, in parallel
Cycle 1: fetch instruction AND access data.
Both buses active at once.
One cycle for fetch + data.
Up to 2× memory throughput.
The cost: two memories and two bus systems — more wires, more pins, more silicon. Nothing is free.

<!-- page 14 -->
L09 · MODERN COMPUTER ARCHITECTURE
21 / 34
One Cycle, Two Transfers
A timeline makes the advantage obvious — Harvard overlaps what Von Neumann serialises.
VON NEUMANN
FETCH instruction
ACCESS data
cycle 1
cycle 2
→ 2 cycles
HARVARD
FETCH instruction
ACCESS data
cycle 1 (both at once)
→ 1 cycle
Same work, half the time — because the two transfers ride separate buses simultaneously.

<!-- page 15 -->
L09 · MODERN COMPUTER ARCHITECTURE
22 / 34
Where Harvard Shines
When predictable, high-throughput access matters more than ﬂexibility.
∿
Digital Signal Processors
DSPs stream data through ﬁxed algorithms 
(ﬁlters, FFTs). Parallel code+data fetch keeps the 
pipeline fed.
⚙
Microcontrollers
The ATmega328 (Arduino Uno) is true Harvard — 
ﬂash for code, SRAM for data, separate buses.
◷
Real-time systems
Deterministic timing matters. No bus contention 
means predictable, repeatable cycle counts.
▣
Embedded & IoT
Small, ﬁxed programs in ﬂash + small data in RAM 
map naturally onto the Harvard split.

<!-- page 16 -->
L09 · MODERN COMPUTER ARCHITECTURE
23 / 34
Von Neumann vs Harvard
The trade-oﬀ in one table: simplicity & ﬂexibility vs throughput & predictability.
VON NEUMANN
HARVARD
Memory
One (uniﬁed)
Two (separate I & D)
Buses
One shared
Two independent
Fetch + data
Sequential (2 cycles)
Simultaneous (1 cycle)
Throughput
Bottlenecked
Up to 2× higher
Cost / complexity
Lower
Higher (more wires/pins)
Flexibility
High (code = data)
Lower (separate spaces)
Typical use
General-purpose CPUs
DSPs, microcontrollers
Neither is 'better' — general CPUs pick ﬂexibility, embedded/DSP picks throughput. Modern chips blend both…

<!-- page 17 -->
24 / 34
6. Modified Harvard
What your laptop actually is: Von Neumann at main memory, Harvard inside 
the chip. The best of both.

<!-- page 18 -->
L09 · MODERN COMPUTER ARCHITECTURE
25 / 34
The Real World: Modified Harvard
Modern CPUs are Von Neumann on the outside, Harvard on the inside.
TWO LEVELS, TWO ANSWERS
Outside the chip: one uniﬁed DRAM holds code and data — 
pure Von Neumann. Simple, ﬂexible, cheap.
Inside the chip: the L1 cache is SPLIT into a separate 
instruction cache (L1-I) and data cache (L1-D) — 
Harvard-style.
So the CPU fetches code and data in parallel from L1, but 
everything still lives in one memory underneath.
BEST OF BOTH
Flexibility of Von Neumann:
one address space, code = data, easy to program & load.
Speed of Harvard:
split L1 caches feed the pipeline code + data every cycle, 
no contention.
This hybrid is why the split L1 exists — a direct preview of 
Module 5.

<!-- page 19 -->
L09 · MODERN COMPUTER ARCHITECTURE
26 / 34
Split L1-I and L1-D Caches
Where the two worlds meet: uniﬁed memory below, split caches above.
CPU
CORE
L1-I
(instructions)
L1-D
(data)
L2 / L3
(unified)
DRAM
(unified
code+data)
← HARVARD ZONE →
← VON NEUMANN ZONE →
Split at L1 for parallel fetch; uniﬁed from L2 down for simplicity. Modiﬁed Harvard in one picture.

<!-- page 20 -->
L09 · MODERN COMPUTER ARCHITECTURE
27 / 34
Why This Hybrid Wins
It captures each architecture's strength exactly where that strength matters most.
⇉
Parallel L1 access
Split L1-I/L1-D lets the pipeline fetch an instruction 
and a data word every cycle — Harvard speed where 
it counts.
▤
Unified main memory
One DRAM address space keeps loading, linking, and 
programming simple — Von Neumann ﬂexibility.
⚖
Cache coherence handled
Hardware keeps the split caches consistent with 
uniﬁed memory, so software sees one memory.
★
Scales to real workloads
General-purpose speed AND generality — which is 
why essentially every modern CPU does this.

<!-- page 21 -->
L08 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — and Module 2 is complete.
01
SRAM stores a bit in a 6-transistor latch: fast, non-destructive, no refresh — but bulky and expensive.
02
DRAM stores a bit as charge on a capacitor (1T1C): tiny and cheap and dense — but slow, destructive, and needs refresh.
03
SRAM builds caches (L1/L2/L3); DRAM builds main memory — each chosen for its trade-oﬀ, not because one is 'better'.
04
The memory hierarchy layers small-fast over big-slow, and locality lets a small cache catch most accesses.
05
The memory wall — CPUs outpacing DRAM for decades — is the problem the whole memory hierarchy exists to ﬁght.

<!-- page 22 -->
L08 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Draw the cells, place the caches, and reason about the numbers.
01
Cell Sketch
Draw a 6T SRAM cell and a 1T1C DRAM 
cell. Label transistors, capacitor, bit 
lines, word line.
02
Refresh Math
A DRAM row refreshes every 64 ms 
with 8192 rows. On average, how 
often must one row be refreshed?
03
Plot It
Plot access time vs capacity (log-log) 
for registers, L1, L2, L3, DRAM, SSD, 
HDD.
EXIT TICKET
1.  List three reasons SRAM is faster than DRAM.
2.  Why must DRAM be refreshed but SRAM need not be?
3.  Order these by latency: L2, DRAM, registers, L1, SSD.

<!-- page 23 -->
L08 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
An SRAM cell uses how many transistors?
6
Q2
DRAM needs periodic…
refresh
Q3
Caches are built from…
SRAM
All three instant? You've completed Module 2 — Module 3 turns to the instruction set: the CPU's vocabulary.

<!-- page 24 -->
END OF L08  ·  MODULE 2 COMPLETE
Fast, big, cheap —
pick two.
NEXT — MODULE 3, L09
Computer Organization & the Instruction Set — how a program becomes machine 
instructions, and the vocabulary a CPU actually understands.

#### MCA_Lecture_9_Von_Neumann_vs_Harvard.pdf

<!-- page 1 -->
Lecture: 1001 
Von Neumann vs Harvard
CSA222: Modern Computer Architecture
How We Organise a Whole Computer
Two foundational blueprints for wiring a CPU to its memory — and the 
bottleneck that shapes them both.

<!-- page 2 -->
L09 · MODERN COMPUTER ARCHITECTURE
02 / 34
We Have All the Pieces
Modules 1–2 gave us computation and memory. Now: how do they ﬁt together?
∑
Logic & arithmetic
Gates, adders, the ALU — 
the CPU can compute 
(Module 1).
▤
Storage
Flip-ﬂops, registers, 
register ﬁles, SRAM/DRAM 
(Module 2).
?
But no blueprint yet
How do CPU, memory, 
and I/O connect into a 
working machine?
»
Today: the 
organisation
Two classic answers — 
Von Neumann and 
Harvard.
Module 3 zooms out from circuits to the whole machine: organisation, then the instruction set it runs.

<!-- page 3 -->
L09 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Two blueprints, one famous bottleneck, and what real chips actually do.
1
Von Neumann
One memory for code AND data, 
one bus. Simple, universal — but 
bottlenecked.
→
2
Harvard
Separate instruction & data 
memories and buses. Faster, used 
in DSPs & MCUs.
→
3
Modified Harvard
What modern CPUs really do: 
uniﬁed DRAM, but split L1 caches.
The thread:  every design is a response to one question — how fast can you move instructions and data 
between CPU and memory?

<!-- page 4 -->
L09 · MODERN COMPUTER ARCHITECTURE
04 / 34
From Gates to a Complete Machine
A computer is more than an ALU — it needs memory, I/O, and a way to wire them together.
CPU
(compute)
MEMORY
(store)
I / O
(talk to world)
BUS
(connect)
The question of computer organisation: how exactly do these connect — and how many buses?
The answer shapes everything: performance, cost, and how you program the machine. Two classic blueprints follow.

<!-- page 5 -->
05 / 34
1. Von Neumann
One memory holds both instructions and data, reached by a single bus. The 
stored-program idea that started it all (1945).

<!-- page 6 -->
L09 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Stored-Program Concept
The radical 1945 idea: keep the program IN memory, as numbers, right alongside the data.
BEFORE vs AFTER
Before: computers were 'wired' for one task — 
reprogramming meant rewiring by hand.
After (von Neumann): the program is stored in the same 
memory as data, encoded as numbers.
To run a diﬀerent program, you just load diﬀerent numbers. 
Software as we know it was born.
ONE MEMORY, TWO ROLES
0x00
lw  r1, 0x40
instr
0x04
add r3, r1, r2
instr
0x08
sw  r3, 0x44
instr
0x40
0x0000002A
data
0x44
0x00000000
data
Same memory, same address space — instructions and data live side 
by side.

<!-- page 7 -->
L09 · MODERN COMPUTER ARCHITECTURE
07 / 34
Von Neumann Architecture
One memory, one bus — everything shares a single path between CPU and memory.
CPU
Control
ALU
Registers
MEMORY
instructions
+
data
SINGLE SHARED BUS
(address + data + control)
Instructions and data take turns on the ONE bus — the deﬁning feature, and the built-in limit.

<!-- page 8 -->
L09 · MODERN COMPUTER ARCHITECTURE
08 / 34
The Four Classic Components
Every von Neumann machine is built from these — the model still taught worldwide.
⚙
Control Unit
Fetches and decodes instructions, then directs 
everything else. The 'conductor' (an FSM, from L7).
∑
ALU
The Arithmetic Logic Unit — does the actual 
computation: add, subtract, compare, AND/OR 
(Module 1).
▤
Memory
One uniﬁed store holding both program 
instructions and data, addressed uniformly.
⇄
I/O
Input/output — keyboards, screens, disks; how 
the machine communicates with the world.

<!-- page 9 -->
L09 · MODERN COMPUTER ARCHITECTURE
09 / 34
The Key Insight: Programs ARE Data
Because code lives in memory as numbers, it can be treated like any other data.
λ
Compilers & assemblers
A program that writes another program — it 
outputs instructions as data into memory.
▤
Loading & the OS
The OS loads a program by copying its 
instruction-bytes into memory, then jumps to 
them.
⚡
Just-in-time compilation
JITs (JVM, browsers) generate machine code at 
runtime and then execute it — data becomes 
code.
⚠
Self-modifying code
Programs can, in principle, rewrite their own 
instructions — powerful, and a security mineﬁeld.
This blurring of code and data is von Neumann's superpower — and the root of whole classes of security exploits.

<!-- page 10 -->
L09 · MODERN COMPUTER ARCHITECTURE
10 / 34
A Bit of History
The idea that named an era — and the people who really built it.
1945, PRINCETON
John von Neumann described the stored-program design 
in the 'First Draft of a Report on the EDVAC' (1945).
The concept drew on work by Eckert, Mauchly, and Turing 
— von Neumann wrote it up, and the name stuck.
Nearly every general-purpose computer since — from the 
1950s to your laptop — follows this basic model.
WHY IT WON
Simplicity: one memory, one bus — cheap and ﬂexible.
Generality: the same hardware runs any program you 
load.
It was 'good enough' and easy to build — so it became the 
default, and the bottleneck it carries became the problem 
the next 70 years of architecture would attack.

<!-- page 11 -->
11 / 34
2. The Von Neumann 
Bottleneck
One bus, two jobs: instructions and data can't both cross at once. This single 
limit shapes modern architecture.

<!-- page 12 -->
L09 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Von Neumann Bottleneck
Every instruction fetch and every data access share ONE bus — so they must take turns.
CPU
MEMORY
(code + data)
ONE BUS
fetch instruction  OR  load/store data
— never both in the same cycle
⇄
The CPU can compute far faster than the single bus can feed it — so the bus becomes the limit.
This traﬃc jam on the memory bus is 'the Von Neumann bottleneck' — the term coined by John Backus in 1977.

<!-- page 13 -->
L09 · MODERN COMPUTER ARCHITECTURE
13 / 34
Why It Limits Performance
A fast CPU stalls whenever the bus is busy — computation waits on communication.
⇄
Bus contention
Instruction fetch and data access compete for the 
same wires. One must wait for the other.
◷
Idle compute units
While the ALU waits for the bus, it does nothing. 
Raw compute power sits unused.
▽
Caps achievable IPC
Instructions-per-cycle is limited not by the ALU 
but by how fast the bus delivers work.
↗
Worsens with CPU speed
Faster CPUs need data faster — but the bus 
doesn't scale as quickly. The gap grows.
The bottleneck is why caches, wider buses, and Harvard-style splits exist — all attempts to widen this pinch.

<!-- page 14 -->
L09 · MODERN COMPUTER ARCHITECTURE
15 / 34
Why It Gets Worse Over Time
CPU speed raced ahead of memory bandwidth for decades — the bottleneck tightened.
time →
demand →
CPU demand
bus bandwidth
← widening
gap
A faster CPU just spends more cycles waiting on the same bus.
THE RESPONSE
Architects fought back with:
• Caches — keep hot code & data on-chip (Module 5).
• Wider & faster buses — move more bits per cycle.
• Harvard-style splits — separate paths for code and 
data.
The rest of today — and much of this course — is about 
that last idea.

<!-- page 15 -->
L09 · MODERN COMPUTER ARCHITECTURE
16 / 34
Quick Check
Show of hands — no notes.
Q.   The Von Neumann bottleneck exists because…
A
The ALU is too 
slow
One bus is shared 
by code & data
✓ they take turns on one path
C
Memory is too 
small
D
There are too many 
registers
The single shared bus means an instruction fetch and a data access can't happen simultaneously — that's the bottleneck.
B

<!-- page 16 -->
17 / 34
3. Harvard Architecture
Separate memories and buses for instructions and data — so the CPU can 
fetch and load at the same time.

<!-- page 17 -->
L09 · MODERN COMPUTER ARCHITECTURE
18 / 34
Harvard Architecture
Two memories, two buses — instructions and data never compete for the same path.
INSTRUCTION
MEMORY
DATA
MEMORY
CPU
Control
ALU
I-BUS
D-BUS
Instruction fetch (I-bus) and data access (D-bus) happen in the SAME cycle — no contention.

<!-- page 18 -->
L09 · MODERN COMPUTER ARCHITECTURE
19 / 34
Two Buses, Twice the Throughput
The whole point: parallel access. What took two cycles now takes one.
VON NEUMANN
one bus, take turns
Cycle 1: fetch instruction.
Cycle 2: access data.
Two cycles for fetch + data.
Bus is the bottleneck.
HARVARD
two buses, in parallel
Cycle 1: fetch instruction AND access data.
Both buses active at once.
One cycle for fetch + data.
Up to 2× memory throughput.
The cost: two memories and two bus systems — more wires, more pins, more silicon. Nothing is free.

<!-- page 19 -->
L09 · MODERN COMPUTER ARCHITECTURE
20 / 34
Where the Name Comes From
The Harvard Mark I (1944) kept instructions on punched tape, data in relays — physically separate.
THE HARVARD MARK I
Built at Harvard in 1944, it stored instructions on 
punched paper tape and data in electro-mechanical relay 
counters.
Because instructions and data lived in physically 
diﬀerent places, the machine could read the next 
instruction while working on data.
That separation gave the architecture its name — even 
though today it means split buses, not tape and relays.
THEN vs NOW
1944: instructions on tape, data in relays — separate by 
physical necessity.
Today: separate on-chip memories/caches with 
separate buses — separate by design choice.
Same core idea across 80 years: give code and data their 
own path, and they stop ﬁghting.

<!-- page 20 -->
L09 · MODERN COMPUTER ARCHITECTURE
21 / 34
One Cycle, Two Transfers
A timeline makes the advantage obvious — Harvard overlaps what Von Neumann serialises.
VON NEUMANN
FETCH instruction
ACCESS data
cycle 1
cycle 2
→ 2 cycles
HARVARD
FETCH instruction
ACCESS data
cycle 1 (both at once)
→ 1 cycle
Same work, half the time — because the two transfers ride separate buses simultaneously.

<!-- page 21 -->
L09 · MODERN COMPUTER ARCHITECTURE
22 / 34
Where Harvard Shines
When predictable, high-throughput access matters more than ﬂexibility.
∿
Digital Signal Processors
DSPs stream data through ﬁxed algorithms 
(ﬁlters, FFTs). Parallel code+data fetch keeps the 
pipeline fed.
⚙
Microcontrollers
The ATmega328 (Arduino Uno) is true Harvard — 
ﬂash for code, SRAM for data, separate buses.
◷
Real-time systems
Deterministic timing matters. No bus contention 
means predictable, repeatable cycle counts.
▣
Embedded & IoT
Small, ﬁxed programs in ﬂash + small data in RAM 
map naturally onto the Harvard split.

<!-- page 22 -->
L09 · MODERN COMPUTER ARCHITECTURE
23 / 34
Von Neumann vs Harvard
The trade-oﬀ in one table: simplicity & ﬂexibility vs throughput & predictability.
VON NEUMANN
HARVARD
Memory
One (uniﬁed)
Two (separate I & D)
Buses
One shared
Two independent
Fetch + data
Sequential (2 cycles)
Simultaneous (1 cycle)
Throughput
Bottlenecked
Up to 2× higher
Cost / complexity
Lower
Higher (more wires/pins)
Flexibility
High (code = data)
Lower (separate spaces)
Typical use
General-purpose CPUs
DSPs, microcontrollers
Neither is 'better' — general CPUs pick ﬂexibility, embedded/DSP picks throughput. Modern chips blend both…

<!-- page 23 -->
24 / 34
4. Modified Harvard
What your laptop actually is: Von Neumann at main memory, Harvard inside 
the chip. The best of both.

<!-- page 24 -->
L09 · MODERN COMPUTER ARCHITECTURE
25 / 34
The Real World: Modified Harvard
Modern CPUs are Von Neumann on the outside, Harvard on the inside.
TWO LEVELS, TWO ANSWERS
Outside the chip: one uniﬁed DRAM holds code and data — 
pure Von Neumann. Simple, ﬂexible, cheap.
Inside the chip: the L1 cache is SPLIT into a separate 
instruction cache (L1-I) and data cache (L1-D) — 
Harvard-style.
So the CPU fetches code and data in parallel from L1, but 
everything still lives in one memory underneath.
BEST OF BOTH
Flexibility of Von Neumann:
one address space, code = data, easy to program & load.
Speed of Harvard:
split L1 caches feed the pipeline code + data every cycle, 
no contention.
This hybrid is why the split L1 exists — a direct preview of 
Module 5.

<!-- page 25 -->
L09 · MODERN COMPUTER ARCHITECTURE
26 / 34
Split L1-I and L1-D Caches
Where the two worlds meet: uniﬁed memory below, split caches above.
CPU
CORE
L1-I
(instructions)
L1-D
(data)
L2 / L3
(unified)
DRAM
(unified
code+data)
← HARVARD ZONE →
← VON NEUMANN ZONE →
Split at L1 for parallel fetch; uniﬁed from L2 down for simplicity. Modiﬁed Harvard in one picture.

<!-- page 26 -->
L09 · MODERN COMPUTER ARCHITECTURE
27 / 34
Why This Hybrid Wins
It captures each architecture's strength exactly where that strength matters most.
⇉
Parallel L1 access
Split L1-I/L1-D lets the pipeline fetch an instruction 
and a data word every cycle — Harvard speed where 
it counts.
▤
Unified main memory
One DRAM address space keeps loading, linking, and 
programming simple — Von Neumann ﬂexibility.
⚖
Cache coherence handled
Hardware keeps the split caches consistent with 
uniﬁed memory, so software sees one memory.
★
Scales to real workloads
General-purpose speed AND generality — which is 
why essentially every modern CPU does this.

<!-- page 27 -->
L09 · MODERN COMPUTER ARCHITECTURE
28 / 34
Spot the Architecture (Activity 3)
Match each real system to its nearest architectural model.
ATmega328 (Arduino Uno)
True Harvard
Flash for code, SRAM for data, separate buses — 
textbook Harvard.
ARM Cortex-M4
Modified Harvard
Separate I/D buses on-chip (Harvard-ish) over a uniﬁed 
address space.
x86-64 desktop (Intel/AMD)
Modified Harvard
Uniﬁed DRAM (Von Neumann) with split L1-I / L1-D 
caches inside.
Rule of thumb: small embedded = true Harvard; anything with caches = modiﬁed Harvard; pure Von Neumann is now rare.

<!-- page 28 -->
L09 · MODERN COMPUTER ARCHITECTURE
29 / 34
Worked Example: Peak Bandwidth
The Activity-1 calculation, fully worked — the numbers behind the bottleneck.
GIVEN:  1 GHz CPU · fetches one 32-bit instruction + one 32-bit data word every cycle
1
Per cycle
32 bits (instr) + 32 bits (data) = 64 bits total must move
2
Per second
64 bits × 1×10⁹ cycles/s = 64 Gbit/s = 8 GB/s total
3
Von Neumann
ONE bus must carry all 8 GB/s → it saturates first (the bottleneck)
4
Harvard
I-bus 4 GB/s + D-bus 4 GB/s, in parallel → no single-bus saturation
Takeaway:  same 8 GB/s of work, but Harvard splits it across two parallel buses so neither becomes the single choke 
point. That's the whole argument for splitting.

<!-- page 29 -->
L09 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and reveal shaky understanding.
✕
'Harvard has no bottleneck'
It eases the fetch-vs-data one, but memory bandwidth 
limits still exist — it's not magic.
✕
Confusing the two names
Von Neumann = ONE memory/bus. Harvard = TWO. Don't 
swap them under exam pressure.
✕
'Modern PCs are pure Harvard'
They're MODIFIED Harvard: uniﬁed DRAM, split L1 caches. 
Both models at once.
✕
Forgetting 'programs are data'
That's the stored-program idea — the heart of Von 
Neumann, not a footnote.
✕
Ignoring cost of Harvard
Two buses/memories mean more pins, wires, and area. 
Throughput isn't free.
✕
Bus width ≠ address space
Splitting buses (Harvard) is separate from how big memory 
is. Don't conﬂate them.

<!-- page 30 -->
L09 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — the organisation of every computer.
01
Von Neumann uses ONE memory and ONE bus for both instructions and data — the stored-program model (1945).
02
The Von Neumann bottleneck: instructions and data share one bus, so they take turns — capping performance.
03
Harvard uses SEPARATE instruction and data memories/buses, enabling simultaneous fetch and data access.
04
Harvard suits DSPs, microcontrollers, and real-time systems, where throughput and predictability matter most.
05
Modern CPUs are MODIFIED Harvard: uniﬁed DRAM (Von Neumann) with split L1-I / L1-D caches (Harvard) — the best of both.

<!-- page 31 -->
L09 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Diagram, calculate, and classify.
01
Diagram Both
Draw Von Neumann and Harvard block 
diagrams side by side. Label CPU, 
memories, and every bus.
02
Bandwidth
A 2 GHz CPU fetches a 64-bit instruction 
+ 64-bit data per cycle. Find the bus 
bandwidth for each architecture.
03
Classify
For an ATmega328, ARM Cortex-M4, and 
x86-64 desktop, name the nearest 
architecture and justify it.
EXIT TICKET
1.  In one sentence, state the Von Neumann bottleneck.
2.  Why can a Harvard machine fetch an instruction and a data word in the same cycle?
3.  How does an x86 chip's split L1 cache reﬂect Harvard thinking?

<!-- page 32 -->
L09 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
Von Neumann uses how many buses?
one
Q2
Harvard separates instructions from…
data
Q3
Modern CPUs split which cache?
L1
All three instant? You understand how a computer is organised — next we look at its instruction set.

<!-- page 33 -->
END OF L09
One memory or two?
Now you decide.
NEXT — L10
The Instruction Set Architecture — the CPU's vocabulary: what an instruction is, 
how it's encoded, and RISC vs CISC.

### L12 · Modified Harvard in Modern CPUs, CISC vs RISC, CISC vs RISC Core Ideas, CISC Cha ... (17 Sep 2026)
_Topics: Modified Harvard in Modern CPUs, CISC vs RISC, CISC vs RISC Core Ideas, Historical Context, CISC Characteristics, RISC Load-Store Model, VAX and Early CISC, MIPS, SPARC, IBM 801, ARM, x86, RISC-V Emergence_

#### MCA_Lecture_10_CISC_vs_RISC.pdf

<!-- page 1 -->
Lecture: 1010 
CISC vs RISC
CSA222: Modern Computer Architecture
MUX · DEMUX · Decoders · Adders
The small library of parts every CPU is assembled from.

<!-- page 2 -->
L10 · MODERN COMPUTER ARCHITECTURE
02 / 34
We Have the Machine — Now the Language
L9 organised CPU + memory. But what commands can the CPU actually understand?
⇄
The organisation
Von Neumann / Harvard — 
how CPU, memory & buses 
connect (L9).
?
The missing piece
What set of commands 
does the hardware accept? 
That's the ISA.
▤
The ISA
Instruction Set Architecture 
— the CPU's vocabulary and 
the HW/SW contract.
⚖
Two philosophies
CISC (rich instructions) vs 
RISC (simple instructions). 
Today's battle.
Every program you write ends up as ISA instructions. The ISA's design shapes compilers, chips, and speed.

<!-- page 3 -->
L10 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Two philosophies, their history, and the surprising truth about modern chips.
1
The Two Ideas
CISC: rich, variable instructions. RISC: 
simple, ﬁxed ones. The core 
trade-oﬀ.
→
2
History & Compilers
VAX → MIPS → ARM → RISC-V, and 
what each choice costs the compiler.
→
3
Modern Reality
x86 secretly runs RISC-like 
micro-ops; RISC-V opens the ISA to 
everyone.
The big reveal:  the RISC-vs-CISC 'war' ended in a truce — modern CPUs borrow from both. But the ideas still 
shape every design.

<!-- page 4 -->
L09 · MODERN COMPUTER ARCHITECTURE
04 / 34
From Gates to a Complete Machine
A computer is more than an ALU — it needs memory, I/O, and a way to wire them together.
CPU
(compute)
MEMORY
(store)
I / O
(talk to world)
BUS
(connect)
The question of computer organisation: how exactly do these connect — and how many buses?
The answer shapes everything: performance, cost, and how you program the machine. Two classic blueprints follow.

<!-- page 5 -->
05 / 34
4. Von Neumann
One memory holds both instructions and data, reached by a single bus. The 
stored-program idea that started it all (1945).

<!-- page 6 -->
L09 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Stored-Program Concept
The radical 1945 idea: keep the program IN memory, as numbers, right alongside the data.
BEFORE vs AFTER
Before: computers were 'wired' for one task — 
reprogramming meant rewiring by hand.
After (von Neumann): the program is stored in the same 
memory as data, encoded as numbers.
To run a diﬀerent program, you just load diﬀerent numbers. 
Software as we know it was born.
ONE MEMORY, TWO ROLES
0x00
lw  r1, 0x40
instr
0x04
add r3, r1, r2
instr
0x08
sw  r3, 0x44
instr
0x40
0x0000002A
data
0x44
0x00000000
data
Same memory, same address space — instructions and data live side 
by side.

<!-- page 7 -->
L09 · MODERN COMPUTER ARCHITECTURE
07 / 34
Von Neumann Architecture
One memory, one bus — everything shares a single path between CPU and memory.
CPU
Control
ALU
Registers
MEMORY
instructions
+
data
SINGLE SHARED BUS
(address + data + control)
Instructions and data take turns on the ONE bus — the deﬁning feature, and the built-in limit.

<!-- page 8 -->
L09 · MODERN COMPUTER ARCHITECTURE
09 / 34
The Key Insight: Programs ARE Data
Because code lives in memory as numbers, it can be treated like any other data.
λ
Compilers & assemblers
A program that writes another program — it 
outputs instructions as data into memory.
▤
Loading & the OS
The OS loads a program by copying its 
instruction-bytes into memory, then jumps to 
them.
⚡
Just-in-time compilation
JITs (JVM, browsers) generate machine code at 
runtime and then execute it — data becomes 
code.
⚠
Self-modifying code
Programs can, in principle, rewrite their own 
instructions — powerful, and a security mineﬁeld.
This blurring of code and data is von Neumann's superpower — and the root of whole classes of security exploits.

<!-- page 9 -->
11 / 34
5. The Von Neumann 
Bottleneck
One bus, two jobs: instructions and data can't both cross at once. This single 
limit shapes modern architecture.

<!-- page 10 -->
L09 · MODERN COMPUTER ARCHITECTURE
12 / 34
The Von Neumann Bottleneck
Every instruction fetch and every data access share ONE bus — so they must take turns.
CPU
MEMORY
(code + data)
ONE BUS
fetch instruction  OR  load/store data
— never both in the same cycle
⇄
The CPU can compute far faster than the single bus can feed it — so the bus becomes the limit.
This traﬃc jam on the memory bus is 'the Von Neumann bottleneck' — the term coined by John Backus in 1977.

<!-- page 11 -->
L09 · MODERN COMPUTER ARCHITECTURE
13 / 34
Why It Limits Performance
A fast CPU stalls whenever the bus is busy — computation waits on communication.
⇄
Bus contention
Instruction fetch and data access compete for the 
same wires. One must wait for the other.
◷
Idle compute units
While the ALU waits for the bus, it does nothing. 
Raw compute power sits unused.
▽
Caps achievable IPC
Instructions-per-cycle is limited not by the ALU 
but by how fast the bus delivers work.
↗
Worsens with CPU speed
Faster CPUs need data faster — but the bus 
doesn't scale as quickly. The gap grows.
The bottleneck is why caches, wider buses, and Harvard-style splits exist — all attempts to widen this pinch.

<!-- page 12 -->
L09 · MODERN COMPUTER ARCHITECTURE
15 / 34
Why It Gets Worse Over Time
CPU speed raced ahead of memory bandwidth for decades — the bottleneck tightened.
THE RESPONSE
Architects fought back with:
• Caches — keep hot code & data on-chip (Module 5).
• Wider & faster buses — move more bits per cycle.
• Harvard-style splits — separate paths for code and 
data.
The rest of today — and much of this course — is about 
that last idea.

<!-- page 13 -->
17 / 34
3. Harvard Architecture
Separate memories and buses for instructions and data — so the CPU can 
fetch and load at the same time.

<!-- page 14 -->
L09 · MODERN COMPUTER ARCHITECTURE
18 / 34
Harvard Architecture
Two memories, two buses — instructions and data never compete for the same path.
INSTRUCTION
MEMORY
DATA
MEMORY
CPU
Control
ALU
I-BUS
D-BUS
Instruction fetch (I-bus) and data access (D-bus) happen in the SAME cycle — no contention.

<!-- page 15 -->
L09 · MODERN COMPUTER ARCHITECTURE
19 / 34
Two Buses, Twice the Throughput
The whole point: parallel access. What took two cycles now takes one.
VON NEUMANN
one bus, take turns
Cycle 1: fetch instruction.
Cycle 2: access data.
Two cycles for fetch + data.
Bus is the bottleneck.
HARVARD
two buses, in parallel
Cycle 1: fetch instruction AND access data.
Both buses active at once.
One cycle for fetch + data.
Up to 2× memory throughput.
The cost: two memories and two bus systems — more wires, more pins, more silicon. Nothing is free.

<!-- page 16 -->
L09 · MODERN COMPUTER ARCHITECTURE
21 / 34
One Cycle, Two Transfers
A timeline makes the advantage obvious — Harvard overlaps what Von Neumann serialises.
VON NEUMANN
FETCH instruction
ACCESS data
cycle 1
cycle 2
→ 2 cycles
HARVARD
FETCH instruction
ACCESS data
cycle 1 (both at once)
→ 1 cycle
Same work, half the time — because the two transfers ride separate buses simultaneously.

<!-- page 17 -->
L09 · MODERN COMPUTER ARCHITECTURE
22 / 34
Where Harvard Shines
When predictable, high-throughput access matters more than ﬂexibility.
∿
Digital Signal Processors
DSPs stream data through ﬁxed algorithms 
(ﬁlters, FFTs). Parallel code+data fetch keeps the 
pipeline fed.
⚙
Microcontrollers
The ATmega328 (Arduino Uno) is true Harvard — 
ﬂash for code, SRAM for data, separate buses.
◷
Real-time systems
Deterministic timing matters. No bus contention 
means predictable, repeatable cycle counts.
▣
Embedded & IoT
Small, ﬁxed programs in ﬂash + small data in RAM 
map naturally onto the Harvard split.

<!-- page 18 -->
L09 · MODERN COMPUTER ARCHITECTURE
23 / 34
Von Neumann vs Harvard
The trade-oﬀ in one table: simplicity & ﬂexibility vs throughput & predictability.
VON NEUMANN
HARVARD
Memory
One (uniﬁed)
Two (separate I & D)
Buses
One shared
Two independent
Fetch + data
Sequential (2 cycles)
Simultaneous (1 cycle)
Throughput
Bottlenecked
Up to 2× higher
Cost / complexity
Lower
Higher (more wires/pins)
Flexibility
High (code = data)
Lower (separate spaces)
Typical use
General-purpose CPUs
DSPs, microcontrollers
Neither is 'better' — general CPUs pick ﬂexibility, embedded/DSP picks throughput. Modern chips blend both…

<!-- page 19 -->
24 / 34
6. Modified Harvard
What your laptop actually is: Von Neumann at main memory, Harvard inside 
the chip. The best of both.

<!-- page 20 -->
L09 · MODERN COMPUTER ARCHITECTURE
25 / 34
The Real World: Modified Harvard
Modern CPUs are Von Neumann on the outside, Harvard on the inside.
TWO LEVELS, TWO ANSWERS
Outside the chip: one uniﬁed DRAM holds code and data — 
pure Von Neumann. Simple, ﬂexible, cheap.
Inside the chip: the L1 cache is SPLIT into a separate 
instruction cache (L1-I) and data cache (L1-D) — 
Harvard-style.
So the CPU fetches code and data in parallel from L1, but 
everything still lives in one memory underneath.
BEST OF BOTH
Flexibility of Von Neumann:
one address space, code = data, easy to program & load.
Speed of Harvard:
split L1 caches feed the pipeline code + data every cycle, 
no contention.
This hybrid is why the split L1 exists — a direct preview of 
Module 5.

<!-- page 21 -->
L09 · MODERN COMPUTER ARCHITECTURE
26 / 34
Split L1-I and L1-D Caches
Where the two worlds meet: uniﬁed memory below, split caches above.
CPU
CORE
L1-I
(instructions)
L1-D
(data)
L2 / L3
(unified)
DRAM
(unified
code+data)
← HARVARD ZONE →
← VON NEUMANN ZONE →
Split at L1 for parallel fetch; uniﬁed from L2 down for simplicity. Modiﬁed Harvard in one picture.

<!-- page 22 -->
L09 · MODERN COMPUTER ARCHITECTURE
27 / 34
Why This Hybrid Wins
It captures each architecture's strength exactly where that strength matters most.
⇉
Parallel L1 access
Split L1-I/L1-D lets the pipeline fetch an instruction 
and a data word every cycle — Harvard speed where 
it counts.
▤
Unified main memory
One DRAM address space keeps loading, linking, and 
programming simple — Von Neumann ﬂexibility.
⚖
Cache coherence handled
Hardware keeps the split caches consistent with 
uniﬁed memory, so software sees one memory.
★
Scales to real workloads
General-purpose speed AND generality — which is 
why essentially every modern CPU does this.

<!-- page 23 -->
L10 · MODERN COMPUTER ARCHITECTURE
04 / 34
The ISA: Hardware/Software Contract
The Instruction Set Architecture is the agreed interface — the boundary the whole industry builds around.
SOFTWARE  ·  compilers, OS, your programs
◆  THE ISA — the instruction set  ◆
HARDWARE  ·  the CPU that implements it
everything above
compiles TO the ISA
everything below
EXECUTES the ISA
Why it's powerful:  as long as both sides honour the ISA, hardware and software teams can innovate independently. Intel 
can redesign a chip and your old programs still run. The ISA is the promise that makes that possible.

<!-- page 24 -->
PART 1  ·  L10
05 / 34
1
1. Two Philosophies
CISC packs power into each instruction; RISC keeps every instruction simple. One 
trades hardware complexity for the other's compiler complexity.

<!-- page 25 -->
L10 · MODERN COMPUTER ARCHITECTURE
06 / 34
CISC: Complex Instruction Set
Make each instruction do a lot — fewer lines of assembly, richer operations.
THE PHILOSOPHY
One instruction can do a whole task — even 
memory-to-memory arithmetic in a single line.
Instructions are variable-length: simple ones are short, 
complex ones are long.
Born when memory was scarce and expensive — fewer, denser 
instructions saved precious space.
One CISC instruction:
add [mem1], [mem2]
CHARACTER
Hundreds of instructions
Variable length (1–15 bytes on x86)
Instructions can touch memory directly
Complex hardware decoder
Fewer lines of assembly
e.g. x86, VAX, 68000

<!-- page 26 -->
L10 · MODERN COMPUTER ARCHITECTURE
07 / 34
RISC: Reduced Instruction Set
Keep every instruction simple and uniform — let the compiler combine them.
THE PHILOSOPHY
Each instruction does ONE simple thing, in one cycle 
where possible.
All instructions are the same ﬁxed length — easy to fetch, 
decode, and pipeline.
Only load and store touch memory — everything else works on 
registers (load/store architecture).
Same work, RISC style:
lw r1,m1 · lw r2,m2 · add r1,r1,r2 · sw r1,m1
CHARACTER
Few, simple instructions
Fixed length (e.g. 32 bits)
Only load/store touch memory
Simple, fast hardware decoder
More instructions per task
e.g. MIPS, ARM, RISC-V, SPARC

<!-- page 27 -->
L10 · MODERN COMPUTER ARCHITECTURE
09 / 34
One Task, Two Styles (Activity 1)
Compute C = A + B; D = C × 2  — count the instructions each way.
CISC STYLE
mov  ax, [A]
add  ax, [B]      ; ax = A + B
mov  [C], ax
shl  ax, 1        ; ax = C * 2
mov  [D], ax
~5 instructions · richer ops · direct memory operands
RISC STYLE
lw   r1, A
lw   r2, B
add  r3, r1, r2   # C = A + B
sw   r3, C
add  r4, r3, r3   # D = C * 2
sw   r4, D
~6 instructions · each simple & 1 cycle · load/store only

<!-- page 28 -->
L10 · MODERN COMPUTER ARCHITECTURE
10 / 34
Instruction Encoding
Fixed-width vs variable-width — the choice that ripples through the whole chip.
RISC — FIXED 32-BIT (every instruction identical width)
opcode
rd
rs1
rs2
funct
opcode
rd
rs1
immediate
Same length every time → trivial to ﬁnd where the next instruction starts.
CISC — VARIABLE LENGTH (1 to 15 bytes on x86)
op
prefix
op
modRM
prefix
op
modRM
disp
imm
Diﬀerent lengths → the CPU must decode one instruction before it knows where the next begins.
This single diﬀerence is why RISC pipelines so much more easily — predictable fetch and decode.

<!-- page 29 -->
L10 · MODERN COMPUTER ARCHITECTURE
11 / 34
The Decoder Tells the Story
Where the complexity lives is the whole diﬀerence — hardware vs compiler.
CISC DECODER
complexity in HARDWARE
Must handle variable-length instructions.
Often uses microcode — a mini-program per instruction.
Large, power-hungry, hard to pipeline.
But: shorter programs, denser code.
RISC DECODER
complexity in the COMPILER
Fixed length → decode is almost trivial.
One instruction = one simple action.
Small, fast, easy to pipeline & replicate.
But: the compiler works harder to sequence more 
instructions.
The trade never disappears — it just moves. CISC asks more of the chip; RISC asks more of the compiler.

<!-- page 30 -->
L10 · MODERN COMPUTER ARCHITECTURE
16 / 34
1990s–2000s: Two Empires
RISC conquered mobile; CISC held the desktop. Both thrived — for diﬀerent reasons.
ARM — RISC wins mobile
Simple = low power = long battery life.
Licensable design → everyone builds ARM chips.
Billions of phones, tablets, embedded devices.
Now in Apple Silicon laptops too.
x86 — CISC holds desktop
Backward compatibility: decades of software.
Intel & AMD poured R&D into raw speed.
The whole PC & server ecosystem locked in.
Still dominant in desktops & data centres.
The lesson: 'best ISA' rarely decides the winner — ecosystems, power budgets, and compatibility do.

<!-- page 31 -->
L10 · MODERN COMPUTER ARCHITECTURE
17 / 34
The ISA Family Tree
A rough map of who came from where — and which philosophy they follow.
CISC
x86 (1978)
x86-64 (2003)
VAX
68000
RISC
IBM 801 → MIPS
SPARC
ARM (1985)
RISC-V (2010)
Two lineages, one lesson: the split deﬁned 40 years of chips — but the next slides show how they've converged.

<!-- page 32 -->
PART 3  ·  L10
18 / 34
3
3. Compilers & Code Density
The philosophy choice lands hardest on two things: how compact your code is, and 
how easily the chip can pipeline it.

<!-- page 33 -->
L10 · MODERN COMPUTER ARCHITECTURE
19 / 34
Code Density: CISC's Edge
Fewer, richer instructions mean smaller programs — which eases pressure on the instruction cache.
WHY DENSITY MATTERS
CISC programs are often smaller in bytes — one 
instruction does more work.
Smaller code = fewer bytes to fetch, and less pressure on the 
L1 instruction cache (recall L8).
In memory-constrained or cache-sensitive settings, density is a 
real, measurable advantage.
PROGRAM SIZE (illustrative)
CISC
smaller
RISC
more instrs
But it's not the whole story:
RISC's fixed 32-bit instructions can waste some space, yet uniformity 
buys huge pipelining gains. Compressed RISC ISAs (ARM Thumb, RISC-V 
C) close much of the density gap.

<!-- page 34 -->
L10 · MODERN COMPUTER ARCHITECTURE
20 / 34
Pipelining: RISC's Edge
Uniform instructions ﬂow through a pipeline like clockwork — the reason RISC dominates performance-per-watt.
▤
Fixed length = easy fetch
The CPU always knows where the next instruction is 
— no decode needed ﬁrst. Perfect for a pipeline.
⚙
Uniform format = simple decode
Every instruction decodes the same way, in one stage, 
at one speed.
⇉
One cycle each = smooth flow
Simple ops rarely stall the pipeline, so stages stay full 
and throughput stays high.
◷
Load/store = predictable memory
Only two instructions touch memory, so hazards are 
easier to detect and handle (Module 4).
Pipelining is the heart of Module 4 — and RISC's uniformity is exactly what makes it clean. Remember this slide.

<!-- page 35 -->
L10 · MODERN COMPUTER ARCHITECTURE
21 / 34
The Trade-Off in One View
Every RISC strength has a matching CISC strength — it's genuinely a balance.
CISC STRENGTHS
✓
Denser code (smaller programs)
✓
Fewer instructions per task
✓
Less instruction-fetch bandwidth
✓
Rich, expressive operations
RISC STRENGTHS
✓
Simple, fast, cheap decoder
✓
Easy, eﬃcient pipelining
✓
Higher clock speeds possible
✓
Simpler to design & verify
Because both lists are real, the industry didn't pick a winner — it learned to combine them. That's next.

<!-- page 36 -->
PART 4  ·  L10
23 / 34
4
4. The Modern Truth
The war is over. Inside every modern x86 chip beats a RISC-like heart — the two 
philosophies have merged.

<!-- page 37 -->
L10 · MODERN COMPUTER ARCHITECTURE
24 / 34
The Secret Inside x86: Micro-Ops
Modern x86 chips are CISC on the outside, RISC on the inside.
CISC instruction
(e.g. x86 add mem)
DECODER
(splitter)
µop: load
µop: add
µop: store
RISC-like
core
The front-end decodes each complex x86 instruction into several simple micro-ops (µops)…
…then the back-end pipelines and renames those µops exactly like a RISC machine. Best of both, in one chip.

<!-- page 38 -->
L10 · MODERN COMPUTER ARCHITECTURE
25 / 34
The Boundary Has Blurred
Both camps borrowed each other's best ideas until the labels stopped meaning much.
→
CISC went RISC inside
x86 decodes to RISC-like µops, then pipelines and 
reorders them. The CISC is just a compatibility skin.
←
RISC added complexity
Modern ARM/RISC-V have hundreds of instructions, 
SIMD, and vector extensions — not so 'reduced' 
anymore.
⇄
Compressed instructions
ARM Thumb and RISC-V 'C' add 16-bit encodings for 
density — a very CISC-like concern.
◆
It's about implementation now
What matters today is the microarchitecture — caches, 
pipelines, predictors — more than the ISA label.

<!-- page 39 -->
L10 · MODERN COMPUTER ARCHITECTURE
26 / 34
So Who Won?
Both — and neither. The pragmatic answer is what every modern high-performance chip does.
The modern consensus:  a RISC-like execution core is the way to go for performance — so keep a 
clean, pipelineable core, and put whatever instruction 'skin' the market needs on the front.
x86
keeps CISC skin for compatibility, RISC core 
inside
ARM
RISC through and through — eﬃciency king
RISC-V
clean RISC, open to all, modular extensions

<!-- page 40 -->
PART 5  ·  L10
27 / 34
5
5. Where It's Heading
Open ISAs and domain-speciﬁc accelerators are rewriting the rules — a preview of 
Module 6.

<!-- page 41 -->
L10 · MODERN COMPUTER ARCHITECTURE
28 / 34
RISC-V: The Open ISA
For the ﬁrst time, a serious instruction set that anyone can use, free — no license, no royalties.
◆
Open & royalty-free
Anyone — students, startups, giants — can design a 
RISC-V chip without paying anyone. Unprecedented.
⚙
Modular by design
A small base ISA plus optional extensions (multiply, ﬂoat, 
vector, atomic). Take only what you need.
↗
Exploding adoption
From university teaching to microcontrollers to 
data-centre and AI chips — growth is rapid.
★
Born at Berkeley
Created in 2010 by the same research lineage that gave 
us RISC in the ﬁrst place.
We'll use RISC-V assembly in the coming lectures — its clean design makes it the perfect teaching ISA.

<!-- page 42 -->
L10 · MODERN COMPUTER ARCHITECTURE
29 / 34
Beyond CPUs: Domain-Specific ISAs
The newest frontier — instruction sets built for one job, especially AI.
▦
GPU ISAs (NVIDIA PTX)
Thousands of simple cores with their own instruction 
set, built for massive parallelism.
◆
TPU / AI accelerators
Google's TPU has an ISA centred on matrix multiply — 
the core operation of neural networks.
⚡
Why specialise?
A ﬁxed workload lets you strip away generality and win 
huge eﬃciency — the opposite of general-purpose.
→
The Module 6 preview
Multicore, GPUs, and AI accelerators are where 
architecture is headed. This is the door to it.

<!-- page 43 -->
L10 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and reveal shaky understanding.
✕
'RISC is always faster'
Not inherently. RISC eases pipelining, but real speed depends 
on the whole microarchitecture.
✕
'CISC is obsolete'
x86 still dominates desktops & servers. It just runs RISC-like 
µops inside.
✕
'RISC = fewer instructions run'
RISC has fewer instruction TYPES, but often runs MORE 
instructions per task.
✕
Forgetting load/store
The load/store rule is RISC's deﬁning feature — only load & 
store touch memory.
✕
'The ISA determines speed'
The implementation (pipeline, caches, predictors) matters far 
more than the ISA label.
✕
Mixing up length rules
RISC = ﬁxed length. CISC = variable length. This drives decoder 
complexity.

<!-- page 44 -->
L10 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — the two philosophies and their truce.
01
The ISA is the hardware/software contract — the instruction set both compilers and chips agree to.
02
CISC uses rich, variable-length instructions (x86, VAX): dense code, complex decoder, harder to pipeline.
03
RISC uses simple, ﬁxed-length, load/store instructions (MIPS, ARM, RISC-V): easy to pipeline, simpler chips.
04
The trade-oﬀ just moves complexity between hardware and compiler — neither philosophy escapes it.
05
Modern x86 decodes CISC into RISC-like micro-ops; RISC-V opens the ISA to all — the two worlds have merged.

<!-- page 45 -->
L10 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Write assembly, compare ISAs, and debate.
01
Vector Add
Write a 3-element vector add in (a) 
x86-style CISC and (b) RISC-V style. Count 
instructions.
02
Why Pipeline?
List 3 reasons RISC is friendlier to 
pipelining. Tie each to a concrete 
instruction property.
03
Mini Debate
Two teams: 'RISC won' vs 'CISC won'. 5 
minutes of arguments each — then we 
debrief.
EXIT TICKET
1.  Name the two hallmarks of RISC (hint: instruction length + memory access).
2.  What are micro-ops, and why does x86 use them?
3.  Why is Apple able to use ARM (RISC) for laptops while x86 still thrives on the desktop?

<!-- page 46 -->
L10 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
RISC instructions are what length?
fixed
Q2
In RISC, only these touch memory:
load / store
Q3
x86 decodes instructions into…
micro-ops
All three instant? You understand the ISA landscape — next we get concrete with instruction formats & assembly.

<!-- page 47 -->
⚖
END OF L10
Simple or rich?
The answer is: both.
NEXT — L11
Instruction Formats & Addressing Modes — how an instruction is actually encoded in bits, 
and the ways it can name its operands.
Modern Computer Architecture  ·  Anuj Kumar Jha  ·  Questions?

### L13 · Compiler Implications and Code Density, Instruction Formats (22 Sep 2026)
_Topics: Compiler Implications and Code Density, Instruction Formats_

#### MCA_Lecture_11_Registers_and_Instruction_Formats_.pdf

<!-- page 1 -->
Lecture: 1011 
Registers &
Instruction Formats
CSA222: Modern Computer Architecture
MIPS32 & RISC-V: R, I, and J
Inside a 32-bit instruction: the registers it names, the ﬁelds it packs, and how to 
read the raw bits.

<!-- page 2 -->
L11 · MODERN COMPUTER ARCHITECTURE
02 / 34
From Philosophy to Practice
L10 gave us RISC vs CISC in the abstract. Now we get concrete with a real RISC ISA.
⚖
RISC principles
Fixed-length, load/store, 
simple ops — the ideas 
from L10.
▤
A real example
MIPS32: the cleanest 
teaching ISA, used in 
textbooks worldwide.
▦
The register set
32 general-purpose 
registers, each with a 
conventional job.
01
The bit layouts
Three instruction formats 
— R, I, J — and how to 
decode them.
By the end you'll read a raw 32-bit hex instruction and write out the assembly it represents — by hand.

<!-- page 3 -->
L11 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Registers, then formats, then reading real machine code.
1
The Registers
MIPS's 32 registers and the 
conventions that give each one a 
job.
→
2
The Three Formats
R, I, and J — how every 32-bit 
instruction is laid out in ﬁelds.
→
3
Read & Write Bits
Decode a hex word to assembly, 
and hand-assemble the other 
way.
The goal:  demystify machine code. A 32-bit instruction isn't magic — it's a handful of labelled bit-ﬁelds you 
can read.

<!-- page 4 -->
L11 · MODERN COMPUTER ARCHITECTURE
04 / 34
Why MIPS for Teaching?
It's the ISA textbooks reach for — clean, regular, and free of real-world clutter.
▤
Clean & fixed-width
Every instruction is exactly 32 bits, in one of just 
three formats. No exceptions to memorise.
◆
Well-documented
Decades of textbooks (Patterson & Hennessy) use 
it. Endless references and worked examples.
⚙
MARS simulator
Write, run, and single-step MIPS assembly with 
instant feedback — no toolchain pain.
→
Ideas transfer
Learn MIPS and RISC-V, ARM, and others feel 
familiar — the concepts are the same.
We'll write MIPS in the MARS simulator this module — then map it onto RISC-V, which shares the same DNA.

<!-- page 5 -->
1. The Register Set
32 general-purpose registers, each 32 bits wide — and a set of conventions 
that give every one a job.

<!-- page 6 -->
L11 · MODERN COMPUTER ARCHITECTURE
06 / 34
32 Registers, 32 Bits Each
MIPS gives the programmer a bank of 32 fast registers, numbered $0–$31.
$0
$1
$2
$3
$4
$5
$6
$7
$8
$9
$10
$11
$12
$13
$14
$15
$16
$17
$18
$19
$20
$21
$22
$23
$24
$25
$26
$27
$28
$29
$30
$31
Each cell is one 32-bit register. Colours preview their conventional roles — the next slides give them names.
Registers are the fastest storage a program has — the register ﬁle from L7, now with a naming convention.

<!-- page 7 -->
L11 · MODERN COMPUTER ARCHITECTURE
07 / 34
Register Conventions
The hardware treats them equally — but software agrees on a role for each. That's the calling convention.
$zero
$0
always 0
$at
$1
assembler temp
$v0–$v1
$2–$3
return values
$a0–$a3
$4–$7
function arguments
$t0–$t7
$8–$15
temporaries (caller-saved)
$s0–$s7
$16–$23
saved (callee-saved)
$t8–$t9
$24–$25
more temporaries
$k0–$k1
$26–$27
kernel / OS use
$gp / $sp / 
$fp
$28–$30
global / stack / frame ptr
$ra
$31
return address

<!-- page 8 -->
L11 · MODERN COMPUTER ARCHITECTURE
08 / 34
The Special Registers
A few registers carry meanings you must never forget — starting with the most useful one of all.
0
$zero ($0)
Hardwired to 0. Reads always give 0; writes are 
ignored. Used constantly — e.g. move = add with 
$zero.
↩
$ra ($31)
The return address. jal stores 'where to come back 
to' here so a function can return.
▤
$sp ($29)
The stack pointer — tracks the top of the call stack 
for local variables and saved registers.
→
PC (separate)
The Program Counter isn't one of the 32 — it's a 
dedicated register holding the next instruction's 
address.
$zero is the quiet hero: no separate 'load constant 0' or 'move' needed — just use $zero as a source.

<!-- page 9 -->
L11 · MODERN COMPUTER ARCHITECTURE
09 / 34
$t vs $s: The Saving Rules
The single most-tested convention: who is responsible for preserving a register across a function call.
$t0–$t9  ·  TEMPORARIES
caller-saved
NOT preserved across a call.
A called function may freely clobber them.
If the caller needs the value, IT must save it ﬁrst.
Use for short-lived scratch values.
$s0–$s7  ·  SAVED
callee-saved
Preserved across a call.
A called function MUST restore them before returning.
The caller can trust they survive.
Use for values needed after a call.
Mnemonic: t = 'temporary, don't trust it'; s = 'saved, it survives'. This shows up in every exam.

<!-- page 10 -->
L11 · MODERN COMPUTER ARCHITECTURE
10 / 34
The Program Counter Is Separate
The PC isn't one of the 32 GP registers — it's special-purpose, and you don't write it directly.
32 GP REGISTERS
$0 … $31
(you read & write these)
PC
holds address of
next instruction
MEMORY
(fetch)
Updated automatically: PC ← PC + 4 each 
instruction, or set by a branch/jump.
You change the PC indirectly — through branches (beq), jumps (j), and calls (jal) — never by writing to it like $t0.
MIPS is 32-bit → each instruction is 4 bytes → PC advances by 4, not 1. Remember that '4'.

<!-- page 11 -->
2. The Three Formats
Every MIPS instruction is 32 bits, arranged as one of just three ﬁeld layouts: R, 
I, and J.

<!-- page 12 -->
L11 · MODERN COMPUTER ARCHITECTURE
13 / 34
One Width, Three Layouts
Fixed 32-bit instructions are RISC's gift — but those 32 bits get divided up three diﬀerent ways.
ALL INSTRUCTIONS ARE 32 BITS WIDE
31 ─────────────── the 32 bits ─────────────── 0
32 bits
The opcode (ﬁrst 6 bits) tells the CPU which format to expect — then it knows how to slice the rest.
R
register ↔ register ALU ops
I
immediates, loads, stores, branches
J
jumps

<!-- page 13 -->
L11 · MODERN COMPUTER ARCHITECTURE
14 / 34
The Three Formats Side by Side
Same 32 bits, three ways to carve them up. Notice all three share a 6-bit opcode.
R-FORMAT
opcode
6 bits
rs
5 bits
rt
5 bits
rd
5 bits
shamt
5 bits
funct
6 bits
I-FORMAT
opcode
6 bits
rs
5 bits
rt
5 bits
immediate
16 bits
J-FORMAT
opcode
6 bits
address
26 bits
The ﬁrst 6 bits are always the opcode — the CPU reads them ﬁrst to know which layout follows.

<!-- page 14 -->
L11 · MODERN COMPUTER ARCHITECTURE
15 / 34
R-Format: Register-to-Register
For ALU ops on registers: add, sub, and, or, slt. Six ﬁelds, no memory address.
opcode
6 bits
always 0
rs
5 bits
src 1
rt
5 bits
src 2
rd
5 bits
dest
shamt
5 bits
shift amt
funct
6 bits
which op
HOW TO READ IT
opcode = 0  → it's an R-type.
funct    → the actual operation (add=0x20, sub=0x22).
rs, rt   → the two source registers.
rd       → the destination register.
shamt  → shift amount (0 unless it's a shift).
EXAMPLE
add $t0, $t1, $t2
means:  $t0 = $t1 + $t2
rd=$t0, rs=$t1, rt=$t2, funct=add.

<!-- page 15 -->
L11 · MODERN COMPUTER ARCHITECTURE
16 / 34
Worked Decode: add $t1, $t2, $t3
Watch the ﬁelds ﬁll in — this is exactly the skill Activity 2 tests.
0
6 bits
opcode
$t2=10
5 bits
rs
$t3=11
5 bits
rt
$t1=9
5 bits
rd
0
5 bits
shamt
0x20
6 bits
funct=add
FIELD BY FIELD
opcode = 000000  → R-type.        funct = 100000 (0x20) → add.
rs = 01010 = 10 = $t2      rt = 01011 = 11 = $t3      rd = 01001 = 9 = $t1
Put together:  add $t1, $t2, $t3   →   $t1 = $t2 + $t3.

<!-- page 16 -->
L11 · MODERN COMPUTER ARCHITECTURE
17 / 34
I-Format: Immediates & Memory
For a constant, a load/store oﬀset, or a branch distance — the last 16 bits hold a value, not a register.
opcode
6 bits
which op
rs
5 bits
base/src
rt
5 bits
dest/src
immediate
16 bits
16-bit constant
THE 16-BIT IMMEDIATE
Only 3 ﬁelds — the immediate replaces rd, shamt & funct.
It's a 16-bit constant: an actual number, a memory oﬀset, or a 
branch distance.
rt is usually the destination (loads, addi) or a compared source 
(branches).
EXAMPLES
addi $t0,$t1,5   $t0 = $t1 + 5
lw   $t0,8($sp)  load from sp+8
sw   $t0,8($sp)  store to sp+8
beq  $t0,$t1,L   branch if equal

<!-- page 17 -->
L11 · MODERN COMPUTER ARCHITECTURE
20 / 34
J-Format: Jumps
The simplest layout — just an opcode and a big 26-bit address for j and jal.
opcode
6 bits
j or jal
address
26 bits
26-bit target (word address)
BUILDING THE TARGET
26 bits can't address all of 32-bit memory, so:
target = (PC[31:28]) | (address << 2)
<<2 gives byte address; top 4 bits come from the current PC. 
Jumps stay within a 256 MB region.
THE TWO JUMPS
j  L       jump to label L
jal L    jump AND save return
         address in $ra —
         this is a function call.

<!-- page 18 -->
3. Reading Machine Code
The payoﬀ: take a raw hex instruction and decode it to assembly — and 
assemble the other way, by hand.

<!-- page 19 -->
L11 · MODERN COMPUTER ARCHITECTURE
23 / 34
Decode a Word (Activity 2)
Given 0x02324820 — split it into ﬁelds and recover the assembly.
STEP 1 — HEX TO BINARY
0x02324820  =  0000 0010 0011 0010 0100 1000 0010 0000
opcode = 000000 → R-type, so slice: 6 | 5 | 5 | 5 | 5 | 6
STEP 2 — SPLIT THE FIELDS
000000
6 bits
op=0
10001
5 bits
rs=17=$s1
10010
5 bits
rt=18=$s2
01001
5 bits
rd=9=$t1
00000
5 bits
shamt=0
100000
6 bits
funct=0x20
STEP 3 — ASSEMBLE:  funct 0x20 = add, rd=$t1, rs=$s1, rt=$s2  →   add $t1, $s1, $s2

<!-- page 20 -->
L11 · MODERN COMPUTER ARCHITECTURE
24 / 34
Decoding an I-Type
The same skill for a load — where the last 16 bits are one number, not two register ﬁelds.
DECODE:   lw $t1, 16($sp)   — opcode for lw is 0x23 (100011)
100011
6 bits
lw
11101
5 bits
rs=29=$sp
01001
5 bits
rt=9=$t1
0000000000010000
16 bits
imm=16
READING IT
opcode 0x23 → lw (load word).
rs = $sp → the base address.
rt = $t1 → the destination.
imm = 16 → the offset.
THE MEANING
lw $t1, 16($sp)
"load into $t1 the word at
memory address $sp + 16."
The oﬀset(base) pattern — rs is base, imm is oﬀset.

<!-- page 21 -->
L11 · MODERN COMPUTER ARCHITECTURE
25 / 34
Hand-Assemble (Activity 3)
Now the reverse: turn  addi $t0, $zero, 5  into 32 bits of binary.
STEP 1 — IDENTIFY FIELDS
addi is I-format.   opcode(addi) = 0x08 = 001000.   rs = $zero = 0.   rt = $t0 = 8.   imm = 5.
STEP 2 — PLACE THE BITS
001000
6 bits
addi
00000
5 bits
rs=$zero
01000
5 bits
rt=$t0=8
0000000000000101
16 bits
imm=5
STEP 3 — REGROUP TO HEX:  0010 0000 0000 1000 0000 0000 0000 0101  =  0x20080005

<!-- page 22 -->
4. RISC-V's Modular ISA
Same format ideas, a diﬀerent strategy: a tiny base plus optional extensions 
you bolt on as needed.

<!-- page 23 -->
L11 · MODERN COMPUTER ARCHITECTURE
27 / 34
RISC-V: Start With a Tiny Base
RV32I is a minimal 32-bit integer ISA — small enough to implement in a classroom, complete enough to run real code.
RV32I — THE BASE
~40 instructions. 32 registers (x0–x31, x0 = zero, like 
$zero).
Fixed 32-bit instructions, load/store architecture — the 
same RISC DNA as MIPS.
Formats: R, I, S, B, U, J — a reﬁnement of MIPS's R/I/J with 
cleaner branch & immediate encodings.
MIPS vs RISC-V BASE
Both: 32 registers, ﬁxed 32-bit, load/store.
MIPS: one ﬁxed ISA — you get everything at once.
RISC-V: a minimal base you EXTEND. Want multiply? Add 
the M extension. Floats? Add F. Nothing you don't need.
That modularity is RISC-V's big idea — next slide.

<!-- page 24 -->
L11 · MODERN COMPUTER ARCHITECTURE
28 / 34
The Extension Model
Build exactly the ISA your chip needs — base plus a menu of standard extensions.
RV32I
base
M 
multiply / divide
A 
atomic ops
F 
single-ﬂoat
D 
double-ﬂoat
C 
compressed 16-bit
V 
vector (SIMD)
e.g. RV32IMAFD = base + multiply + atomic + float + double.  Pick your letters, get your ISA.

<!-- page 25 -->
L11 · MODERN COMPUTER ARCHITECTURE
29 / 34
MIPS vs RISC-V: Same Idea, Refined
RISC-V learned from MIPS — keeping the good, ﬁxing the awkward.
MIPS32
RISC-V (RV32)
Registers
32 ($0–$31)
32 (x0–x31)
Zero register
$zero ($0)
x0
Instr. width
Fixed 32-bit
32-bit (+16-bit with C)
Formats
R, I, J
R, I, S, B, U, J
ISA model
One ﬁxed set
Modular base + extensions
Licensing
Proprietary (MIPS Inc.)
Open & royalty-free
Learn one and the other is easy — the register-and-format model is the transferable skill, not the syntax.

<!-- page 26 -->
L11 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and reveal shaky understanding.
✕
Writing to $zero
$zero is hardwired to 0 — writes are silently ignored. Don't 
use it as a destination.
✕
Forgetting PC + 4
Instructions are 4 bytes. The PC advances by 4, and branch 
targets are PC+4-relative.
✕
Skipping sign extension
The 16-bit immediate is sign-extended to 32 bits. 0xFFFB is 
−5, not 65531.
✕
Confusing rd, rs, rt
In R-format, rd is the DESTINATION; rs & rt are sources. 
Order in binary ≠ order in assembly.
✕
$t vs $s saving
$t registers are caller-saved (not preserved); $s are 
callee-saved (preserved). Don't swap them.
✕
Forgetting the << 2
Branch and jump oﬀsets are in WORDS, shifted left 2 to get 
bytes. Miss it and targets are wrong.

<!-- page 27 -->
L11 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — from register names to raw bits.
01
MIPS has 32 general-purpose registers, each with a conventional role: $zero, $a0–$a3, $t0–$t9, $s0–$s7, $sp, $ra.
02
$t registers are caller-saved (not preserved); $s registers are callee-saved (preserved across calls).
03
Every MIPS instruction is 32 bits in one of three formats: R (register ops), I (immediate/memory/branch), J (jumps).
04
R = opcode|rs|rt|rd|shamt|funct; I = opcode|rs|rt|imm(16); J = opcode|address(26) — all sharing a 6-bit opcode.
05
RISC-V keeps the same model but is modular: a small RV32I base plus optional extensions (M, A, F, D, C, V).

<!-- page 28 -->
L11 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Decode, assemble, and know your conventions.
01
Decode
Decode 0x012A4020 to MIPS assembly. 
Show every ﬁeld and the ﬁnal 
mnemonic.
02
Hand-Assemble
Convert lw $t1, 16($sp) into 32-bit 
binary, then to hex. Show the ﬁelds.
03
Conventions
Explain the diﬀerence between 
$t-registers and $s-registers in the 
calling convention.
EXIT TICKET
1.  Which ﬁelds does the R-format have, in order?
2.  What value does $zero always hold, and what happens if you write to it?
3.  Name the six RISC-V extension letters and what each adds.

<!-- page 29 -->
L11 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
$zero always holds…
0
Q2
R, I, J — how many bits is each instruction?
32
Q3
RISC-V's 'M' extension adds…
multiply
All three instant? You can read machine code now — next we turn assembly into a running program.

<!-- page 30 -->
END OF L11
You can read
machine code now.
NEXT — L12
Assembly Programming & the MARS Simulator — from mnemonics to a running 
program: loops, branches, memory, and system calls.

#### MIPS Encoding Reference.pdf

_(no extractable text — open `L13 - MIPS Encoding Reference.pdf`)_

### L14 · Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, MIPS32 / RISC-V  ... (24 Sep 2026)
_Topics: Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, MIPS32 / RISC-V ISA, MIPS Register Set and Conventions, R-Format_

#### MCA_Lecture_12_C_to_MIPS_Translation_.pdf

<!-- page 1 -->
Lecture: 0011 
C To MIPS Translation
CSA222: Modern Computer Architecture
Two Philosophies for a CPU's Language
The instruction set is the contract between hardware and software — 
and there are two great ways to write it.

<!-- page 2 -->
L12 · MODERN COMPUTER ARCHITECTURE
02 / 34
From Instructions to Programs
L11 taught us to encode single instructions. Now we express whole programs.
01
We can encode
R, I, J formats — any single 
MIPS instruction, in bits 
(L11).
{}
But programs have 
structure
if/else, loops, functions — 
none of which exist as 
single instructions.
→
The translation 
patterns
Each C construct maps to 
a ﬁxed idiom of branches 
and jumps.
▤
Functions need the 
stack
Calling conventions and 
stack frames make 
reusable code possible.
The magic of a compiler is just a set of these patterns applied over and over. Today, you become the compiler.

<!-- page 3 -->
L12 · MODERN COMPUTER ARCHITECTURE
03 / 34
Today's Roadmap
Three patterns, building from a simple if to a recursive function.
1
Conditionals
if / else via beq, bne, and the slt 
idiom for ordering.
→
2
Loops
while and for — condition tests 
and branch-back patterns.
→
3
Functions
The calling convention and stack 
frames — leaf and recursive.
The skill:  see a C construct, recall its MIPS idiom. Once you know the handful of patterns, any program 
translates.

<!-- page 4 -->
L12 · MODERN COMPUTER ARCHITECTURE
04 / 34
The Translation Mindset
High-level code is structured; assembly is ﬂat. Translation means ﬂattening structure into labels and branches.
▦
Variables → registers
Each active C variable lives in a register ($t/$s). 
The compiler assigns them.
⑃
Structure → labels + branches
if, else, loop bodies become labelled blocks; 
control ﬂow becomes jumps between them.
⚖
Conditions → compare + branch
A test like a > b becomes 'set a ﬂag, then branch 
on it' — usually slt then bne.
↔
Reverse the condition
if (cond) do X → often 'if NOT cond, skip X'. You 
branch AWAY on the opposite test.
Keep 'reverse the condition' in mind — it's the trick behind almost every if and loop translation today.

<!-- page 5 -->
05 / 34
1. Conditionals
if and if/else become compare-and-branch idioms — beq and bne for equality, 
slt for ordering.

<!-- page 6 -->
L12 · MODERN COMPUTER ARCHITECTURE
06 / 34
The Branch Toolkit
MIPS keeps it minimal: two branches and one set-less-than. Everything else is built from these.
beq $a,$b,L
Branch to L if $a == $b 
(branch if equal).
bne $a,$b,L
Branch to L if $a != $b 
(branch if not equal).
slt $d,$a,$b
Set $d = 1 if $a < $b, else 0 
(set-less-than).
j L
Unconditional jump to 
label L.
Notice: there's no 'branch if less-than' instruction. You build it: slt to set a ﬂag, then bne with $zero.

<!-- page 7 -->
L12 · MODERN COMPUTER ARCHITECTURE
07 / 34
Translating a Simple if
The core trick: branch AWAY on the opposite condition, skipping the body.
C SOURCE
if (a == b) {
    c = a + b;
}
// continue…
# MIPS assumption  of variable ($t0=a, $t1=b, $t2=c)
    bne  $t0, $t1, Skip
    add  $t2, $t0, $t1
Skip:
    # continue…
C says 'if EQUAL, do the body'. MIPS says 'if NOT equal (bne), skip the body'. Reversed condition, same result.

<!-- page 8 -->
L12 · MODERN COMPUTER ARCHITECTURE
08 / 34
Translating if / else
Two labelled blocks and an unconditional jump to skip the else after the if.
C SOURCE
if (a == b) {
    c = 1;
} else {
    c = 0;
}
MIPS
    bne  $t0, $t1, Else
    li   $t2, 1        # c = 1
    j    Done
Else:
    li   $t2, 0        # c = 0
Done:
The j Done is essential — without it, the if-block would fall straight through into the else-block.

<!-- page 9 -->
L12 · MODERN COMPUTER ARCHITECTURE
09 / 34
Ordering: the slt Idiom
For < > <= >= there's no direct branch — you set a ﬂag with slt, then branch on it.
C:  if (a < b) …
if (a < b) {
    // body
}
MIPS
    slt  $t3, $t0, $t1   # t3 = (a<b)
    beq  $t3, $zero, Skip
    # body  (runs when a<b)
Skip:
# t3=1 means a<b → beq $zero
# is false → body runs.
slt sets $t3 to 1 if a<b. Then 'beq $t3,$zero,Skip' skips the body when the ﬂag is 0 (i.e. a≥b).

<!-- page 10 -->
L12 · MODERN COMPUTER ARCHITECTURE
10 / 34
Worked: max of Two
if (a > b) c = a; else c = b;  — a full, runnable translation.
C SOURCE
if (a > b)
    c = a;
else
    c = b;
MIPS  ($t0=a, $t1=b, $t2=c)
    slt  $t3, $t1, $t0   # t3 = (b < a) = (a > b)
    beq  $t3, $zero, Else
    move $t2, $t0        # c = a
    j    Done
Else:
    move $t2, $t1        # c = b
Done:
Trick: a > b is the same as b < a — so we use slt $t3,$t1,$t0. Flip the operands to turn > into <.

<!-- page 11 -->
L12 · MODERN COMPUTER ARCHITECTURE
11 / 34
Control Flow, Visualised
The same max example as a ﬂowchart — see how branches carve the two paths.
start
a > b ?
yes
c = a
no
c = b
Done:
Every if/else is this shape: a test that splits into two blocks that merge back. Branches are the arrows.

<!-- page 12 -->
12 / 34
2. Loops
while and for are just conditionals with a branch back to the top — a test, a 
body, and a jump.

<!-- page 13 -->
L12 · MODERN COMPUTER ARCHITECTURE
13 / 34
The while Loop
Test at the top; run the body; jump back. Exit when the condition fails.
C SOURCE
while (i < n) {
    sum += i;
    i++;
}
# MIPS assumption ($t0=i, $t1=n, $s0=sum)
Loop:
    blt  $t1, $t0, End
    add  $s0, $s0, $t0    # sum+=i
    addi $t0, $t0, 1      # i++
    j    Loop
End:
Pattern: Loop label → test (slt+beq to exit) → body → j back to Loop → End label. Memorise this shape.

<!-- page 14 -->
L12 · MODERN COMPUTER ARCHITECTURE
14 / 34
The for Loop
A for is a while with the init and increment made explicit — same skeleton underneath.
C SOURCE
for (i = 0; i < 10; i++) {
    sum += i;
}
MIPS  ($t0=i, $s0=sum)
    li   $t0, 0           # i = 0
Loop:
    slti $t2, $t0, 10     # i<10 ?
    beq  $t2, $zero, End
    add  $s0, $s0, $t0    # sum+=i
    addi $t0, $t0, 1      # i++
    j    Loop
End:
Map the four for-parts: init before the label, condition at the top, body in the middle, increment before the jump-back.

<!-- page 15 -->
17 / 34
3. The Calling Convention
A shared agreement on how functions pass arguments, return values, and 
preserve registers — so any code can call any code.

<!-- page 16 -->
L12 · MODERN COMPUTER ARCHITECTURE
19 / 34
Arguments & Return Values
Four argument registers in, two return registers out — the standard ﬂow of a call.
CALLER
puts args in
$a0–$a3,
then jal
CALLEE
reads $a0–$a3,
puts result in
$v0, then jr $ra
$a0–$a3    arguments
$v0–$v1    return values
More than 4 arguments? The extras go on the stack. Return values beyond two are rare usually just $v0.
$a0 - $a3 = four argument slots. 
$v0 - $v1 = return slots. This is the single most-used convention.

<!-- page 17 -->
L12 · MODERN COMPUTER ARCHITECTURE
20 / 34
jal and jr $ra: Call & Return
Two instructions make a function call work — one to go, one to come back.
jal Label
jump and link
Saves the return address (PC+4) into $ra.
Then jumps to Label (the function).
'Link' = remember where to return to.
This is how you CALL a function.
jr $ra
jump register
Jumps to the address held in $ra.
That's the instruction after the original jal.
So execution resumes at the caller.
This is how you RETURN from a function.
Exam favourite: jal stores PC+4 into $ra AND jumps. jr $ra reads that address back. Together = call/return.

<!-- page 18 -->
L12 · MODERN COMPUTER ARCHITECTURE
24 / 34
The Stack Grows Downward
In MIPS, pushing DECREASES $sp — the stack grows toward lower addresses.
high addresses
… older frames …
saved $ra
saved $s0
local var
← $sp (top)
low addresses
stack
grows
down
(sp ↓)
So 'addi $sp, $sp, -8' pushes 8 bytes (makes room); 'addi $sp, $sp, 8' pops them. 
Down to push, up to pop.

<!-- page 19 -->
L12 · MODERN COMPUTER ARCHITECTURE
27 / 34
Worked: Recursive Factorial
The classic — each call saves its own $ra and $a0 on the stack.
C SOURCE
int fact(int n) {
if (n <= 1)
return 1;
return n * fact(n-1);
}
main:
# Read n and call fact
li $v0, 5 # read int
syscall
move $a0, $v0 # $a0 = input n
jal fact # call factorial
move $s0, $v0 # save result
li $v0, 10 # exit
syscall
# --------------------------------------------------
fact:
# 1. Prologue: Allocate stack & save $ra, $a0
addi $sp, $sp, -8
sw $ra, 4($sp) # save return address
sw $a0, 0($sp) # save current n
# 2. Base Case: Check if n <= 1
li $t0, 1
ble $a0, $t0, base_case
# 3. Recursive Step: Compute fact(n - 1)
addi $a0, $a0, -1 # n - 1
jal fact # recursive call
# 4. Combine Results
lw $a0, 0($sp) # restore original n
mul $v0, $a0, $v0 # n * fact(n - 1)
j fact_exit
base_case:
li $v0, 1 # return 1
fact_exit:
# 5. Epilogue: Restore $ra & stack pointer
lw $ra, 4($sp) # restore $ra
addi $sp, $sp, 8 # deallocate frame
jr $ra # return
Each recursive level gets its own stack frame holding its $ra and n — that's how recursion 'remembers' where it was.

<!-- page 20 -->
L12 · MODERN COMPUTER ARCHITECTURE
28 / 34
How the Stack Grows: fact(3)
Watch each call push a frame, then unwind as they return.
fact(3)   
n=3, $ra=main
fact(2)   
n=2, $ra=fact(3)
fact(1)   n=1 → base case, returns 1
↓ calls push down
THE UNWIND
fact(1) returns 1
fact(2) = 2 × 1 = 2
fact(3) = 3 × 2 = 6
As each returns, it pops its frame, restores its saved n and 
$ra, multiplies, and returns to its caller.
3 calls → 3 frames on the stack at peak, then unwound one 
by one.

<!-- page 21 -->
L12 · MODERN COMPUTER ARCHITECTURE
28 / 34
How the Stack Grows: fact(3)
Watch each call push a frame, then unwind as they return.
STACK FRAME LAYOUT
fact(3)
Frame 1 (Caller)
n=3, $ra=main
fact(2)
Frame 2 (Recursive)
n=2, $ra=fact(3)
fact(1)
BASE CASE REACHED
n=1 → returns 1
↓ Calls push frames downward onto stack
STEP 2 THE UNWIND (RETURNING)
1. base case: fact(1) returns 1
2. unwind 2nd: fact(2) = 2 × 1 = 2
3. unwind top: fact(3) = 3 × 2 = 6
As each call returns, it pops its frame, restores saved n and $ra, 
multiplies the result, and returns to caller.
3 calls → 3 frames on stack at peak, then unwound one by one.

<!-- page 22 -->
L12 · MODERN COMPUTER ARCHITECTURE
29 / 34
The Full Function Template
Every non-leaf function follows this ﬁve-part skeleton — memorise it.
1  Prologue
Make stack room, save $ra and any $s registers you'll use.
2  Body
Do the work — arguments in $a0–$a3, locals in $t/$s registers.
3  Calls
Use jal for sub-calls; restore any caller-saved values you need after.
4  Result
Place the return value in $v0.
5  Epilogue
Restore $ra and $s registers, free stack room, then jr $ra.

<!-- page 23 -->
L12 · MODERN COMPUTER ARCHITECTURE
30 / 34
Common Mistakes to Avoid
The slips that cost marks — and break your programs.
✕
Not reversing the condition
if (cond) body → branch AWAY on !cond. Branching on cond 
itself inverts your logic.
✕
Forgetting to save $ra
A non-leaf function that doesn't save $ra can never return 
— jal overwrites it.
✕
Wrong array scaling
A[i] is at base + i×4 for words. Forgetting the ×4 (sll by 2) 
reads the wrong memory.
✕
Using blt / bgt directly
Base MIPS has no blt. Use slt then beq/bne with $zero.
✕
Unbalanced stack
Every addi $sp,-N must be matched by addi $sp,+N. 
Leftover oﬀsets corrupt the caller.
✕
Clobbering $s without saving
If you use an $s register, you MUST save & restore it — the 
caller trusts it survives.

<!-- page 24 -->
L12 · MODERN COMPUTER ARCHITECTURE
31 / 34
Key Takeaways
Five sentences — from C constructs to running assembly.
01
if/else translates to compare-and-branch: use beq/bne, and branch AWAY on the reversed condition.
02
Ordering (< > <= >=) uses the slt idiom — set a ﬂag with slt, then branch on it with beq/bne + $zero.
03
Loops are a label, a condition test at the top, a body, and a j back — while and for share this skeleton.
04
The calling convention: arguments in $a0–$a3, returns in $v0–$v1, return address in $ra (set by jal, used by jr).
05
Non-leaf and recursive functions build a stack frame: push $ra & saved regs (stack grows down), pop before jr $ra.

<!-- page 25 -->
L12 · MODERN COMPUTER ARCHITECTURE
32 / 34
Practice & Homework
Translate control ﬂow, loops, and a recursive function.
01
if/else
Translate  if (a == b) c = 1; else c = 0;  to 
MIPS. Show your labels.
02
Loop Sum
Translate  int sum(int n){int s=0; 
for(i=1;i<=n;i++) s+=i; return s;}  to MIPS.
03
Recursion
Translate a recursive factorial to MIPS 
with a proper stack frame (save $ra & 
$a0).
EXIT TICKET
1.  Where are function arguments passed? Where are return values placed?
2.  What exactly does jal do, in two steps?
3.  Why must a non-leaf function save $ra, but a leaf function need not?

<!-- page 26 -->
L12 · MODERN COMPUTER ARCHITECTURE
33 / 34
Rapid-Fire Recap
Three questions — shout the answers.
Q1
Return values go in which registers?
$v0 / $v1
Q2
jal stores the return address in…
$ra
Q3
The MIPS stack grows in which direction?
downward
All three instant? You can hand-compile C to MIPS — and Module 4 builds the CPU that runs it.

<!-- page 27 -->
END OF L12  ·  MODULE 3 COMPLETE
You are the
compiler now.
NEXT — MODULE 4, L13
The Fetch-Decode-Execute Cycle — we ﬁnally BUILD the CPU datapath that turns 
these instructions into action.

- Link: [MIPS Artifact](https://claude.ai/artifact/DVA7A3ckmQLKsLhcpmLBGU)

## Labs

### L02 · Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basi ... (12 Aug 2026)
_Topics: Truth Table, Course Introduction & Boolean Algebra, The Abstraction Stack, Boolean Logic Basics, Boolean Laws & Simplification, AND, OR, NOT, XOR Gates_

#### Whiteboard

<!-- page 1 -->
Lab: 0001
Verilog Setup & Basic Gate
Implementation.
CSA222: Modern Computer Architecture
The journey from a single transistor to the GPUs that train modern AI 
— starting with 1s and 0s.
Where It All Begins

<!-- page 2 -->
Why Hardware Description Languages Exist? 
The mental-model shift everything else in this lecture depends on.

<!-- page 3 -->
20 Billion Switches, One Idea

<!-- page 4 -->
1947: The Switch That Replaced the Vacuum Tube

<!-- page 5 -->
The Integrated Circuit: From Wires to Wafers

<!-- page 6 -->
1971: The First CPU on a Single Chip

<!-- page 7 -->
Moore's Law: The Prediction That Ran the Industry

<!-- page 8 -->
How Small Is 3nm, Really?

<!-- page 9 -->
From A Few Gates to Billions

<!-- page 10 -->
Why One Island Makes Almost Every Advanced Chip

<!-- page 11 -->
Apple Silicon: One Chip, Every Concept in This Course

<!-- page 12 -->
1847 + 1937: The Math That Was Waiting for the Transistor

<!-- page 13 -->
How a chip is actually manufactured?

<!-- page 14 -->
From Your First assign Statement to a Physical Chip: 
The Full Pipeline

<!-- page 15 -->
Prerequisites
This lecture assumes nothing about prior coding or HDL exposure.
L1
Boolean algebra recap
L1's four core gates and truth tables 
give the circuits we'll use as running 
examples — helpful, not required.
0
Zero coding background
No prior programming or HDL 
experience is assumed anywhere in 
this lecture. Every construct is 
introduced from first principles.
Everything here becomes muscle memory in Lab 1 — Verilog Setup & Basic Gate Implementation.

<!-- page 16 -->
What You'll Build Today
By the end of this lab, you'll have all seven core gates running in simulation.
NOT
AND
1 if either input is 1
OR
Inverts the input
NAND
0 if both  inputs are 1
PLUS
a single self-checking testbench, a generated VCD file, and a GTKWave screenshot of all four gates switching 
together.
NOR
1 if both inputs are 0
XOR
1 if either input is 1
XNOR
1 if both inputs are same
1 if both inputs are 1

<!-- page 17 -->
Software Brain vs. Hardware Brain
One CPU executing instructions in order, versus thousands of gates switching at once.
Software: sequential
A program counter steps through instructions one at a time. 
"Turn on lamp 1, then lamp 2, then lamp 3" is a loop — each line 
waits for the last to finish.
for (i=0;i<4;i++) lamp[i]=1;
Hardware: concurrent
Four real lamps wired to four real switches all respond the 
instant power arrives — simultaneously, not in a queue. 
Verilog describes this concurrency directly.
assign lamp = switch;  // ×4, at once
Every bug this mismatch causes in Lab 1 traces back to reading Verilog like a to-do list instead of a wiring diagram.

<!-- page 18 -->
Simulation vs. Synthesis
An HDL file is compiled two completely different ways, for two completely different purposes.
▶
Simulation
Runs your Verilog on a normal CPU, modeling circuit behaviour 
over simulated time. Produces console output and waveforms. 
Nothing physical is built — this is everything Lab 1 does.
⚙
Synthesis
A synthesis tool (Synopsys, Cadence) reads the same style of 
Verilog and generates a real gate-level netlist — the actual 
circuit that gets fabricated on silicon.
Same language, two audiences: a simulator that pretends to be hardware, and a synthesizer that builds it for real.

<!-- page 19 -->
Verilog, VHDL, SystemVerilog
Three HDLs exist in industry today. Here's why this course uses Verilog.
Verilog (1984)
C-like syntax, compact, the most widely taught HDL for digital design courses. IEEE 1364. What 
this course uses.
VHDL (1987)
Ada-derived, strongly typed, verbose. Dominant in defense, aerospace, and some European 
industry.
SystemVerilog (2005)
A superset of Verilog adding verification and object-oriented features. IEEE 1800 — where Verilog 
leads.
This course uses Verilog: compact syntax, the fastest on-ramp to writing your first working circuit.

<!-- page 20 -->
A Brief History
Forty years old, still the industry's default teaching language for RTL design.
1984
Gateway Design Automation creates Verilog as a proprietary simulator language.
1989
Cadence acquires Gateway; Verilog spreads across the industry.
1995
IEEE 1364-1995 — Verilog becomes an open standard.
2001
IEEE 1364-2001 — ANSI-style ports, generate blocks, signed arithmetic.
2005
IEEE 1800 — SystemVerilog folds Verilog in as its foundation.

<!-- page 21 -->
Verilog in the Real Flow
From the RTL you'll write to the silicon that ships.

<!-- page 22 -->
56 / 58
RTL → Silicon
Every line of Verilog this lecture covers eventually passes through this exact pipeline.
RTL
(your .v files)
→
Logic
Synthesis
→
Gate-Level
Netlist
→
Place &
Route
→
Fabrication
Simulation (this whole lecture, and all of Lab 1) happens entirely at the RTL stage — before anything is synthesized, placed, or 
fabricated.
⚙
Tools of the trade
Simulators: Icarus Verilog, Synopsys VCS, Siemens Questa. Synthesis: Synopsys Design Compiler, Cadence Genus. Waveform viewers: 
GTKWave. Lab 1 uses the free, open-source column of this list.

<!-- page 23 -->
Program Structure
The container every Verilog design lives inside — and two ways to write its header.

<!-- page 24 -->
module / endmodule & Ports
Every design unit — however large — is delimited by exactly this pair of keywords.
ANATOMY OF A MODULE
module and_gate (
  input  wire a,   // a port — a connection point to the outside world
  input  wire b,
  output wire y
);
  assign y = a & b;  // the body — what the module does
endmodule
module <name> (<port list>);  is a function signature for hardware — the name and ports are the interface; everything before 
endmodule is the implementation.

<!-- page 25 -->
Comments, Whitespace & Identifiers
The small syntax rules that make everything else readable.
//
Comments
// runs to end of line. /* ... */ spans 
multiple lines. Verilog is otherwise 
silent about documentation — a 
comment header naming each 
module's purpose is a house 
convention, not a language rule.
␣
Whitespace
Free-format — spaces, tabs, and 
newlines are interchangeable and don't 
affect meaning. Indentation is purely 
for humans, same as in C
Aa
Case sensitivity
Verilog is case-sensitive: and_gate 
and AND_GATE are different identifiers. 
Keywords (module, input, assign...) are 
always lowercase.

<!-- page 26 -->
Data Types
Four possible values, two fundamentally different kinds of signal.

<!-- page 27 -->
Nets vs. Variables
The theory behind Lab 1's #1 rule: wire for assign, reg for always.
Nets — wire
A net represents a physical wire. It has no value of its own — it 
continuously reflects whatever drives it (a gate, a module 
port, an assign statement). Declared with wire (or the rarer 
wor/wand/tri).
wire y;   assign y = a & b;
Variables — reg, integer, real, time
A variable holds a value between procedural assignments. reg 
is the workhorse; integer, real, and time exist for testbench 
convenience. Despite the name, reg does not always mean a 
hardware flip-flop.
reg y;   always @(*) y = a & b;

<!-- page 28 -->
Vectors & Buses
Bundling bits into a multi-bit signal — and picking individual bits back out.
DECLARING AND INDEXING A VECTOR
wire [7:0] data;   // an 8-bit vector, bit 7 = MSB, bit 0 = LSB
 
data[0]         // bit-select — a single bit
data[7:4]       // part-select — the top nibble
wire [3:0] nib = data[3:0];  // assigning a slice to a narrower wire
Convention: [MSB:LSB] — this course always declares vectors most-significant-bit first, e.g. [7:0], never [0:7].

<!-- page 29 -->
Arithmetic & Relational Operators
The same symbols you already know from software — with one hardware caveat.
Arithmetic
+  −  *  /  %  — addition, subtraction, multiplication, division, 
modulo. Division and modulo are simulation-friendly but 
expensive (or unsynthesizable) in real hardware — used 
sparingly outside testbenches.
sum = a + b;   rem = a % b;
Relational
<   >   <=   >=  — compare magnitude, always return a single bit: 1 
(true), 0 (false), or x if either operand contains an x.
wire gt = (a > b);

<!-- page 30 -->
Logical & Bitwise Operators
Two families that look similar and behave completely differently.
Logical  &&  ||  !
Treat their entire operand as one true/false value (any 
nonzero = true) and always return a single bit. Used for 
conditions — if, while.
if (a && !b) ...
Bitwise  &  |  ^  ^~  ~
Operate bit-by-bit across a vector, returning a vector the 
same width as the operands. This is what and_gate's assign y 
= a & b; actually uses.
wire [3:0] y = a & b;  // per-bit AND

<!-- page 31 -->
The assign Statement
"Continuous" means exactly that — this line re-evaluates the instant its inputs change.
CONTINUOUS ASSIGNMENT
wire y;
assign y = a & b;   // re-fires on every change to a or b
⚡
No clock, no trigger, no waiting
This is what makes assign the right tool for combinational logic — a real AND gate has no concept of "running once." It just always reflects 
its inputs, and assign models that directly.

<!-- page 32 -->
Exercise 1 · Build an AND Gate
One module. Two inputs. One output. The simplest possible Verilog.
and_gate.v
// 2-input AND gate
module and_gate (
  input  wire a,
  input  wire b,
  output wire y
);
  assign y = a & b;
endmodule
NOTES
assign
is continuous — y updates the moment a or b changes.
&
is bitwise AND. For 1-bit signals, that's just AND.
wire
ports default to wire — you can omit it. Shown for 
clarity.

<!-- page 33 -->
Exercise 1 · Write the Testbench
Drive every input combination. Watch the output. Record the waveform.
and_tb.v
module and_tb;
  reg  a, b;
  wire y;
  and_gate dut (.a(a), .b(b), .y(y));
  initial begin
    $dumpfile("and.vcd");
    $dumpvars(0, and_tb);
    a=0; b=0; #10;
    a=0; b=1; #10;
    a=1; b=0; #10;
    a=1; b=1; #10;
    $finish;
  end
endmodule
KEY POINTS
Testbench has no ports — it's the top of 
the simulation.
`reg` for the inputs because they're 
driven inside a procedural block.
`#10` = wait 10 time units before next 
change.
`$dumpvars` records every signal under 
and_tb into the VCD.

<!-- page 34 -->
Exercise 2 · Add OR, NOT, XOR
Same pattern as AND. Just three more modules. Three operators to remember.
or_gate.v
module or_gate (
  input  a,
  input  b,
  output y
);
  assign y = a | b;
endmodule
not_gate.v
module not_gate (
  input  a,
  output y
);
  assign y = ~a;
endmodule
xor_gate.v
module xor_gate (
  input  a,
  input  b,
  output y
);
  assign y = a ^ b;
endmodule
OPERATORS  ·  & AND   | OR   ~ NOT   ^ XOR

<!-- page 35 -->
Common Errors · And the Fix
Four mistakes that will eat 30 minutes if you don't recognize them.
syntax error near `endmodule`
Missing semicolon at the end of an `assign` line. Verilog won't tell you the right line — look one above.
yourgate.v: undefined identifier `and_gate`
You forgot to compile and_gate.v alongside the testbench. Pass BOTH files to iverilog.
VCD opens but is empty in GTKWave
You forgot `$dumpfile` and `$dumpvars` in the testbench. Without them, nothing is recorded.
Output stuck at X (red)
An input was never assigned. In Verilog, unassigned wires default to X (unknown), not 0.

<!-- page 36 -->
Take These Home
Three short stretch problems. Solutions discussed at the start of Lab 2.
01
NAND  and NOR from primitives
Implement a NAND gate using only the AND and NOT modules from this lab. Verify against its truth table.
02
Add an XNOR module
Add `xnor_gate.v` to your set. Update top.v and the testbench to exercise all five gates together.

<!-- page 37 -->
END OF LAB 01
Seven gates.
A whole CPU ahead.
Questions?

<!-- page 38 -->
Thanks 
for 
watching!

### L03 · Logic Minimisation & Universal Gates, Worked Simplification Examples, Motivation ... (17 Aug 2026)
_Topics: Worked Simplification Examples, Logic Minimisation & Universal Gates, Motivation for Minimisation, Canonical Forms, Karnaugh Maps, SOP Form (Minterms), POS Form (Maxterms), 2-Variable K-Map, 3-Variable K-Map, 4-Variable K-Map, Don't-Cares_

#### Whiteboard

<!-- page 1 -->
LAB 2
Logic Minimisation &
Universal Gates
From truth tables to minimal circuits --- practice with
the solution directly beside the problem.
35 Questions + Detailed Worked Solutions
Computer Architecture & Digital Logic • GATE Preparation
PRINT-READY LATEX EDITION

<!-- page 2 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
2 / 17
SECTION A
Warm-up & Fundamentals
Basic • Q1--Q7
STRATEGY — Canonical Forms
• SOP: 1 →uncomplemented, 0 →complemented
• POS: 1 →complemented, 0 →uncomplemented
• Minterm number = binary value of the input combination (MSB left)
• Maxterm number = same binary; product of all maxterms where F = 0
Q1
Basic
2 marks - Evaluation
Evaluate F = A·B + A·B' + A'·B for A=1, B=0. What is F?
WORKED SOLUTION
STEP 1 — Substitute
A=1, B=0 →B’=1
STEP 2 — Terms
A·B=0, A·B’=1, A’·B=0 →F=1
FINAL ANSWER →F = 1
Q2
Basic
3 marks - Truth Table →SOP
Write the canonical SOP for F(A,B,C) from the truth table:
A
B
C
F
0
0
0
0
0
0
1
1
0
1
0
1
0
1
1
0
1
0
0
1
1
0
1
0
1
1
0
0
1
1
1
1
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 3 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
3 / 17
WORKED SOLUTION
STEP 1 — Rows where F=1
(0,0,1), (0,1,0), (1,0,0), (1,1,1)
STEP 2 — Minterms
m1=A’B’C, m2=A’BC’, m4=AB’C’, m7=ABC
FINAL ANSWER →F = A’B’C + A’BC’ + AB’C’ + ABC = Σm(1,2,4,7)
Trap: For SOP a 0 must produce a complemented literal.
Q3
Basic
3 marks - Truth Table →POS
Using the same truth table as Q2, write the canonical POS for F.
WORKED SOLUTION
STEP 1 — Rows where F=0
(0,0,0),(0,1,1),(1,0,1),(1,1,0) →M0,M3,M5,M6
STEP 2 — Maxterms
M0=(A+B+C), M3=(A+B’+C’), M5=(A’+B+C’), M6=(A’+B’+C)
FINAL ANSWER →F = (A+B+C)(A+B’+C’)(A’+B+C’)(A’+B’+C) = ΠM(0,3,5,6)
Q4
Basic
2 marks - Σ →Π
Convert F(A,B,C) = Σm(0,3,5,6) into Π notation.
WORKED SOLUTION
Missing minterms (F=0) are 1,2,4,7 →maxterms.
FINAL ANSWER →F = ΠM(1,2,4,7)
Q5
Basic
2 marks - Minterm ID
What is the minterm for A=1, B=0, C=1, D=0? Give algebraic form and decimal index.
WORKED SOLUTION
Binary 1010₂ = 10₁₀ →A B’ C D’
FINAL ANSWER →m₁₀ = A B’ C D’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 4 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
4 / 17
Q6
Basic
2 marks - Maxterm ID
Write the maxterm for A=0, B=1, C=1. Also give its decimal index.
WORKED SOLUTION
STEP 1 — Binary
011₂ = 3₁₀
STEP 2 — Maxterm rule
M₃ = (A + B’ + C’)
FINAL ANSWER →M₃ = (A + B’ + C’)
Trap: Students often apply the SOP complement rule to maxterms.
Q7
Basic
3 marks - Dual Conversion
Given F = Σm(1,2,4,7), write both canonical SOP algebraic expression and equivalent canonical
POS.
WORKED SOLUTION
SOP: A’B’C + A’BC’ + AB’C’ + ABC
Missing →maxterms 0,3,5,6
POS: (A+B+C)(A+B’+C’)(A’+B+C’)(A’+B’+C)
FINAL ANSWER →SOP = Σm(1,2,4,7)
POS = ΠM(0,3,5,6)
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 5 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
5 / 17
SECTION B
Boolean Algebra & Simplification
Basic →Intermediate • Q8--Q13
STRATEGY — Algebraic Minimisation
• Apply identity, null, complement, idempotent, absorption, distributive laws
• Factor or create cancelling terms; use consensus when useful
• Verify by substitution or truth-table check
• Count gates / literals for area–power–speed impact
Q8
Basic
2 marks - Law ID
Which law justifies X + X·Y = X?
A. Distributive B. Absorption C. Idempotent D. DeMorgan
WORKED SOLUTION
X + XY = X(1+Y) = X·1 = X (Absorption)
FINAL ANSWER →B. Absorption
Q9
Basic
2 marks - Law Application
Simplify A + A'B. Name the law used.
WORKED SOLUTION
A + A’B = (A+A’)(A+B) = 1·(A+B) = A+B (Distributive / cover)
FINAL ANSWER →A + B
Q10
Intermediate
3 marks - Algebraic Min
Minimise F = XY + X'Z + YZ. Is the YZ term necessary?
WORKED SOLUTION
By consensus theorem, YZ is the consensus of XY and X’Z →redundant.
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 6 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
6 / 17
FINAL ANSWER →F = XY + X’Z (YZ can be dropped)
Q11
Intermediate
3 marks - Equivalence
Prove or disprove: (A+B)(A'+C) = AC + A'B.
WORKED SOLUTION
Expand LHS: AA’ + AC + A’B + BC = AC + A’B + BC. Consensus removes BC →AC + A’B.
Equality holds after dropping consensus.
FINAL ANSWER →True (after consensus); F = AC + A’B
Q12
Intermediate
3 marks - Redundant Terms
Identify and remove all redundant terms from F = A'B'C + A'BC + AB'C + ABC + A'B.
WORKED SOLUTION
A’B’C + A’BC = A’C; AB’C + ABC = AC; then A’C + AC = C; remaining A’B. Result: F = C + A’B
FINAL ANSWER →F = C + A’B
Q13
Intermediate
3 marks - Dual / Complement
Find the complement of F = (A+B)(A'+C) and simplify.
WORKED SOLUTION
F’ = (A+B)’ + (A’+C)’ = A’B’ + AC’ (DeMorgan)
FINAL ANSWER →F’ = A’B’ + AC’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 7 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
7 / 17
SECTION C
K-map Foundations
Intermediate • Q14--Q20
K-MAP STRATEGY
• Fill correctly (Gray-code order)
• Largest groups only (powers of 2: 1,2,4,8…)
• Rectangular & adjacent (incl. wrap-around)
• Every 1 covered; overlapping allowed
• Variables that change inside a group are eliminated
Q14
Intermediate
3 marks - Gray Code
Why must K-map order be 00-01-11-10 instead of natural binary 00-01-10-11?
WORKED SOLUTION
Adjacent cells must differ by exactly one bit for the combining theorem. Natural order places
10 next to 01 (two-bit difference). Gray code guarantees single-bit adjacency including wrap-
around.
FINAL ANSWER →Gray code ensures single-bit adjacency required by combining
theorem.
Q15
Intermediate
3 marks - 2-var K-map
Draw/fill the 2-variable K-map for F(A,B)=Σm(0,2) and give the minimal SOP.
WORKED SOLUTION
B=0
B=1
A=0
1
0
A=1
1
0
Group of 2 (vertical) →B’
FINAL ANSWER →F = B’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 8 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
8 / 17
Q16
Intermediate
4 marks - 3-var K-map
Fill 3-var K-map for F(A,B,C)=Σm(0,2,3,5) and obtain minimal SOP.
WORKED SOLUTION
00
01
11
10
0
1
0
1
1
1
0
1
0
0
Groups: A’C’ (m0+m2 wrap), A’B (m2+m3), AB’C (m5)
FINAL ANSWER →F = A’B + A’C’ + AB’C
Q17
Intermediate
3 marks - Legal Groups
Which groupings are legal on a 3-var K-map? (Select all)
A. Four corners B. 2×2 block C. Three adjacent 1s D. Two cells differing in two variables
WORKED SOLUTION
A legal (size 4 wrap). B legal. C illegal (size ≠power of 2). D illegal (not adjacent).
FINAL ANSWER →A and B
Q18
Intermediate
3 marks - Variable Cancellation
On a 3-var K-map a group of four 1s covers cells m0,m2,m4,m6. What is the product term?
WORKED SOLUTION
Cells: 000,010,100,110 →C is always 0; A and B change →term = C’
FINAL ANSWER →C’
Q19
Intermediate
3 marks - Group of 8
A 3-variable function has all eight minterms = 1. What is the minimal expression?
WORKED SOLUTION
The whole map is one group of 8 →F = 1.
FINAL ANSWER →F = 1
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 9 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
9 / 17
Q20
Intermediate
4 marks - Fill Empty Map
Given F = A’C + AB, place the 1s on a 3-var K-map and list the minterms.
WORKED SOLUTION
A’C covers m1 (001) and m3 (011). AB covers m6 (110) and m7 (111). Minterms: 1,3,6,7
FINAL ANSWER →Σm(1,3,6,7)
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 10 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
10 / 17
SECTION D
Advanced K-map Techniques
Intermediate →Advanced • Q21--Q26
ADVANCED K-MAP STRATEGY
• Wrap-around and four-corner groups are valid
• Don’t-cares (X) treated as 1 only when they enlarge a group
• Prime implicant = largest group that cannot be grown further
• Essential PI covers at least one 1 not covered by any other PI
• Minimal cover = all EPIs + smallest set of remaining PIs
Q21
Advanced
5 marks - 4-var + Corners
F(A,B,C,D)=Σm(0,2,5,7,8,10,13,15). Obtain minimal SOP. Watch for corner grouping.
WORKED SOLUTION
AB\CD
00
01
11
10
00
1
0
0
1
01
0
1
1
0
11
0
1
1
0
10
1
0
0
1
Four corners →B’D’; quad m5,7,13,15 →BD
FINAL ANSWER →F = B’D’ + BD
Trap: Missing the four-corner group forces a non-minimal expression.
Q22
Advanced
4 marks - Wrap-around
On a 4-var K-map the cells m0, m2, m8, m10 are 1. What single product term covers all four?
WORKED SOLUTION
These are the four corners. Variables B and D are 0 throughout →B’D’
FINAL ANSWER →B’D’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 11 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
11 / 17
Q23
Advanced
6 marks - PI / EPI
For F(A,B,C)=Σm(0,1,2,5,6,7): list all PIs, identify EPIs, give one minimal cover.
WORKED SOLUTION
PIs: A’B’, A’C’, B’C, BC’, AC, AB
One minimal cover: A’B’ + BC’ + AC
FINAL ANSWER →F = A’B’ + BC’ + AC
Q24
Advanced
4 marks - Essential Count
A function has five prime implicants of which three are essential. What is the minimum number
of product terms in any minimal SOP?
WORKED SOLUTION
All three EPIs must appear. If they already cover every 1, the minimum is exactly 3.
FINAL ANSWER →At least 3 (exactly 3 if EPIs cover all 1s)
Q25
Advanced
4 marks - Overlapping Groups
True or False: Overlapping groups on a K-map are always illegal.
WORKED SOLUTION
False. Overlapping is legal and frequently necessary for largest groups and a minimal expres-
sion.
FINAL ANSWER →False
Q26
Advanced
5 marks - Minimal Cover Selection
F has PIs: P1=A’B, P2=BC’, P3=AC, P4=A’C’. The 1s covered uniquely are: m0 only by P4, m7
only by P3. Select a minimal cover.
WORKED SOLUTION
EPIs are P4 and P3. Remaining 1s covered by choosing among P1/P2. One minimal cover:
A’C’ + AC + BC’ (or + A’B).
FINAL ANSWER →Example: A’C’ + AC + BC’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 12 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
12 / 17
SECTION E
DeMorgan & Bubble Pushing
Intermediate • Q27--Q30
DeMORGAN / BUBBLE STRATEGY
• Outside-in: (XY)’=X’+Y’, (X+Y)’=X’Y’
• Never stop after one application if nested complements remain
• Bubble on output ≡bubbles on all inputs of the dual gate
• Two bubbles in series cancel
Q27
Intermediate
3 marks - Nested DeMorgan
Simplify F = ((A+B)’·C)’ + (A·B)’ . Show every step.
WORKED SOLUTION
(A+B)’=A’B’, (AB)’=A’+B’
F = (A’B’·C)’ + (A’+B’) = (A+B+C’) + (A’+B’) = 1
FINAL ANSWER →F = 1
Trap: Stopping after first DeMorgan leaves nested complements.
Q28
Intermediate
3 marks - Bubble Push
Convert (A·B)’ + C into simplest form with primary inputs.
WORKED SOLUTION
(AB)’ = A’+B’ →F = A’ + B’ + C
FINAL ANSWER →F = A’ + B’ + C
Q29
Intermediate
3 marks - Dual Form
Apply DeMorgan to convert (A·B·C)' into an OR with inverted inputs.
WORKED SOLUTION
(ABC)’ = A’ + B’ + C’
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 13 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
13 / 17
FINAL ANSWER →A’ + B’ + C’
Q30
Intermediate
4 marks - Nested + Simplify
Simplify F = ((A'+B)' + (A·C)')'.
WORKED SOLUTION
Inner: (A’+B)’ = AB’, (AC)’ = A’+C’
F = (AB’ + A’ + C’)’ = (AB’)’·(A’)’·(C’)’ = (A’+B)·A·C = ABC
FINAL ANSWER →F = ABC
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 14 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
14 / 17
SECTION F
Universal Gates
Advanced • Q31--Q33
UNIVERSAL GATE STRATEGY
• Simplify the function first
• NOT = NAND/NOR with tied inputs
• AND = NAND + inverter (or DeMorgan form)
• OR = inverted inputs into NAND
• Count 2-input gates; multi-level may reduce total
• Verify by expanding back
Q31
Advanced
3 marks - NAND Primitives
Show 2-input NAND realisations of NOT, AND and OR. State gate counts.
WORKED SOLUTION
NOT: A tied →1 NAND
AND: NAND then NAND-inverter →2 NANDs
OR: invert both inputs then NAND →3 NANDs
FINAL ANSWER →NOT=1, AND=2, OR=3
Q32
Advanced
3 marks - NOR Primitives
Show 2-input NOR realisations of NOT, OR and AND. State gate counts.
WORKED SOLUTION
NOT: A tied →1 NOR
OR: NOR then NOR-inverter →2 NORs
AND: invert inputs then NOR →3 NORs
FINAL ANSWER →NOT=1, OR=2, AND=3
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 15 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
15 / 17
Q33
Advanced
5 marks - NAND-only F
Implement F = AB + C using only 2-input NAND gates. Minimise gate count.
WORKED SOLUTION
F = ((AB)’ · C’)’ →three NANDs: one for AB, one for C’, one final.
FINAL ANSWER →3 NAND gates
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 16 -->
LAB 2 • MODERN COMPUTER ARCHITECTURE
16 / 17
SECTION G
Exam / GATE Challenge
Advanced • Q34--Q35
Q34
GATE-Style
2 marks - MCQ
Minimum number of 2-input NAND gates to implement F=(A+B)(C+D) is
A. 3 B. 4 C. 5 D. 6
WORKED SOLUTION
Classic multi-level NAND count for this function is 6.
FINAL ANSWER →D. 6
Q35
GATE-Style / MSQ
3 marks - Concepts
Which statements are true?
A. Number of PIs always equals number of EPIs
B. Minimal SOP must contain every EPI
C. Don’t-care minterms may appear in a PI
D. Two minimal covers can differ in number of product terms (classic definition)
WORKED SOLUTION
A False · B True · C True · D generally False under classic term-count minimality
FINAL ANSWER →B and C
Sources & Further Practice
• GATE Overflow – Digital Logic / K-Maps archives
• ExamSIDE GATE ECE / CSE previous-year collections
• NPTEL Digital Circuits (IIT Madras, IIT Bombay)
• Morris Mano – Digital Design; Roth – Fundamentals of Logic Design
Logic Minimisation & Universal Gates • 35 Questions + Worked Solutions

<!-- page 17 -->
End of Lab 2
Fewer gates. Same truth table. Better design.
35 QUESTIONS • WORKED SOLUTIONS • PRINT READY

### L04 · Combinational Building Blocks, DeMorgan's Theorems, Universal Gates, Reusable Bl ... (19 Aug 2026)
_Topics: Universal Gates, DeMorgan's Theorems, Combinational Building Blocks, Reusable Blocks, Multiplexers, 2:1 MUX, 4:1 and n:1 MUX Cascading, Demultiplexers and Decoders, DEMUX, n-to-2^n Decoders_

#### Whiteboard

<!-- page 1 -->
Lab: 0011 
Combinational Circuits
CSA222: Modern Computer Architecture
From Boolean minimisation to the data-selector circuits that route 
every bus in a modern CPU.

<!-- page 2 -->
Where We Left Off
Lab 1 built the gates. Lecture 2 shrank them. Today we build the circuits that pick between them.
Lab 1
Seven gates in Verilog — AND, OR, 
NOT, XOR, NAND, NOR, XNOR — plus a 
self-checking testbench.
Lab 2
SOP / POS, Karnaugh maps, and the 
proof that NAND (or NOR) alone can 
build any circuit.
Lab 3 — Today
Multiplexers and demultiplexers: the 
gate patterns that select and route 
data — the ternary operator, the case 
statement, and structural instantiation.

<!-- page 3 -->
What You'll Build Today
By the end of this lab, you'll have four data-selector circuits running in simulation.
2:1 MUX
Two inputs, one select line
4:1 MUX
Four inputs, two select lines
1:2 DEMUX
One input routed to one of two 
outputs
1:4 DEMUX
One input routed to one of four 
outputs
Naming convention: an n:1 MUX has n inputs. A demultiplexer is the mirror image, so this course names it by its 1:n output count — 1:2 and 1:4 — to avoid an "n:1 
demux" that would read backwards.

<!-- page 4 -->
Behavioural Modeling
Procedural blocks — and the single most-tested rule in this entire lecture.

<!-- page 5 -->
The initial Block
Runs exactly once, starting at simulation time zero — testbench territory.
INITIAL — RUNS ONCE
initial begin
  a = 0; b = 0;
  #10 a = 0; b = 1;
  #10 $finish;
end
A module can contain more than one initial block — each starts independently at t=0 and runs to completion (or the next timing control) 
concurrently with the others.

<!-- page 6 -->
The always Block
Re-triggers every time its sensitivity list changes — the procedural equivalent of assign.
always @(*) — combinational
Re-evaluates whenever any signal read inside the block 
changes. The (*) auto-infers the sensitivity list — the modern, 
error-proof way to write it.
always @(*) y = a & b;
always @(posedge clk) — sequential
Re-evaluates only on the rising edge of clk. This is how 
registers and flip-flops are described — a full preview, 
properly covered in Module 2.
always @(posedge clk) q <= d;
The left-hand side inside any always block must be declared reg — this is Part III's rule, now in action.

<!-- page 7 -->
`timescale, `define, `include
Three directives you'll see at the top of nearly every file this course.
`timescale
Sets the simulation time unit and 
precision. Every Lab 1 file starts with 
this exact line.
`timescale 1ns/1ps
`define
A text macro, substituted before 
compilation — like #define in C. Used 
sparingly; parameter is usually the 
better tool.
`define WIDTH 8
`include
Splices another file's text in verbatim 
at compile time — how large designs 
share common definitions across files.
`include "defs.v"

<!-- page 8 -->
Testbench Theory
The constructs behind Lab 1's testbench — explained, not yet typed.

<!-- page 9 -->
Why a Testbench Has No Ports
The one module in your entire design that connects to nothing but simulation itself.
∅
Nothing outside simulation ever instantiates it
Every other module in this course gets instantiated by something — gates_top instantiates and_gate; a real chip's top-level module gets 
synthesized and fabricated. A testbench is instantiated by nobody. It sits at the very top of the hierarchy purely to drive stimulus into the 
design under test (DUT) and observe what comes back — so it has no reason to expose a port list at all.

<!-- page 10 -->
45 / 58
$time, $finish, $stop
Controlling and reading the simulation clock itself.
$time
Returns the current simulation time — 
what powers the t=%0t field in every 
$monitor line you've seen.
$finish
Ends the simulation entirely and exits 
the simulator. This is how Lab 1's 
testbench cleanly stops after its 
stimulus sequence.
$stop
Pauses simulation without exiting — 
hands control back to an interactive 
simulator session. Rare in scripted, 
batch-run testbenches.

<!-- page 11 -->
46 / 58
$dumpfile & $dumpvars
The two lines that turn a silent simulation into a viewable waveform.
ENABLING WAVEFORM CAPTURE
$dumpfile("gates_tb.vcd");  // names the output file
$dumpvars(0, gates_tb);     // records every signal from level 0 down
$dumpfile alone creates an empty VCD — both lines are required. This is exactly the pair Lab 1's Common Mistakes slide warns 
about forgetting.

<!-- page 12 -->
47 / 58
Generating Stimulus
initial plus #delay is the entire vocabulary needed to drive a DUT through every input combination.
A FOUR-COMBINATION STIMULUS SEQUENCE
initial begin
           a=0; b=0; 
#10;   a=0; b=1; 
#10;    a=1; b=0; 
#10;   a=1; b=1; 
#10;    $finish;
end
#10 between each line advances simulation time by 10 units before the next assignment — without it, every line would execute 
at t=0.

<!-- page 13 -->
Verilog in 60 Seconds
Just enough to start. We'll come back to syntax in later labs.
module
Defines a hardware unit. Has input and output ports.
wire
A net — connects things. Used for combinational signals.
reg
A variable — needed for assignments inside `always` blocks.
assign
Continuous assignment. Use this for combinational logic.
always @(*)
Procedural block. Re-runs when ANY listed signal changes.

<!-- page 14 -->
Why a Data Selector Circuit?
One circuit primitive shows up in almost every block of a CPU datapath.
ALU operand select
Choosing between a register value and an immediate constant 
before the ALU.
PC update
Choosing the next instruction address: PC+4, a branch target, or a 
jump target.
Memory routing
Sending one data bus to one of several destinations — registers, 
cache, or I/O.
Every one of these is either a multiplexer (many signals → one) or a 
demultiplexer (one signal → many).

<!-- page 15 -->
Part 1 · Multiplexers
Many signals in. One signal out — chosen by a select line.

<!-- page 16 -->
What Is a Multiplexer?
A digital switch: it selects exactly one of several inputs and routes it to a single output.
MUX  =  Multiplexer  =  Data Selector
✦
A MUX with n select lines can choose among 2ⁿ inputs.
✦
1 select line →   2 inputs (2:1 MUX).
✦
2 select lines → 4 inputs (4:1 MUX).
✦
Only one input ever reaches the output at a time — the 
rest are ignored.

<!-- page 17 -->
2:1 MUX · Truth Table
One select line S chooses between I0 and I1.
S
Y
0
I0
1
I1
2:1
MUX
A
B
S
Y
S = 0 → Y = A      S = 1 → Y = B
“if S is 0, pass I0; if S is 1, pass I1.” Exactly one product term survives 
for any value of S — that's what makes it a selector and not just a 
logic function.

<!-- page 18 -->
2:1 MUX · Expression & From Equation to 
Gates
Two AND gates, one OR gate, one inverter — the equation built in silicon.
Boolean expression (sum-of-products form):
Y  =  S′·I0  +  S·I1
This is exactly the SOP form Lecture 2 taught you to derive from a 
truth table — the MUX equation is just the K-map result written out.

<!-- page 19 -->
Exercise 1 · Build a 2:1 MUX (Gate-Level)
Write the equation from Slide 7 directly as Verilog primitives.
mux2_1_gate.v
module mux2x1 (
    input  wire a, b, sel,
    output wire y
  );
  wire sel_n, a0, a1;
  not  u0 (sel_n, sel);        // S'
  and  u1 (a0, a, sel_n);     // S'·I0
  and  u2 (a1, b, sel);       // S·I1
  or   u3 (y, a0, a1);         // sum
endmodule
KEY POINTS
sel_n
A named wire for the inverted select — no gate 
output is left anonymous.
not / and / or
The same primitive gates from Lab 1, just wired to a 
new pattern.
u0, u1...
Instance names are mandatory for primitive gates 
with more than one instance of the same type in a 
module.

<!-- page 20 -->
New Construct · The Conditional Operator
A one-line hardware selector — the exact shape of a multiplexer.
syntax
assign y = condition ? value_if_1 : value_if_0;
?  reads as “if” — evaluates condition first.
:  reads as “else” — the fallback value.
This is a continuous assignment, so it belongs after assign, never inside an always block.
sel ? in1 : in0   is a 2:1 MUX in eight characters. Chain them and you can build any MUX width — but as the chain grows, a case 
statement (next up) reads far more clearly.

<!-- page 21 -->
Exercise 1 · Alternate: the Ternary Version
Same interface, one line of behavioral Verilog instead of four gates.
mux2_1_ternary.v
module mux2x1 (
    input  wire a, b, sel,
    output wire y
  );
  assign y = sel ? b : a;
endmodule
WHY BOTH VERSIONS?
Gate-level
Shows exactly which transistors switch — this is what 
synthesis produces either way.
Ternary
Shows what you'll actually type once you trust the 
tool to do the gate mapping.
Same module name, same port list — pick one file at a time. Both simulate identically. From here on, this course defaults to the shorter 
behavioral style unless a lab specifically asks for gate-level, exactly like Lab 1's assign vs primitive distinction.

<!-- page 22 -->
Exercise 1 · Testbench for the 2:1 MUX
Drive all four (i0, i1, sel) combinations and record the waveform.
mux2_1_tb.v
module mux2x1_tb;
    reg a, b, sel;
    wire y;
    mux2x1 uut (.a(a), .b(b), .sel(sel), .y(y)
    );
    initial begin
        sel = 0; a = 0; b = 0;
        #10 sel = 0; a = 0; b = 1;
        #10 sel = 0; a = 1; b = 0;
        #10 sel = 0; a = 1; b = 1;
        #10 sel = 1; a = 0; b = 0;
        #10 sel = 1; a = 0; b = 1;
        #10 sel = 1; a = 1; b = 0;
        #10 sel = 1; a = 1; b = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("mux2x1_wave.vcd");
        $dumpvars(0, mux2x1_tb);
        $monitor("Time = %0t | sel = %b, a = %b, b = %b | y = %b",
                  $time, sel, a, b, y);
    end
endmodule

<!-- page 23 -->
4:1 MUX · Truth Table
Two select lines now address four inputs — exactly 2².
S1
S0
Y
0
0
I0
0
1
I1
1
0
I2
1
1
I3
Boolean expression:
Y = S1′S0′·I0 + S1′S0·I1 + S1S0′·I2 + S1S0·I3
Four AND terms, one per input, each gated by the unique minterm of (S1, S0) that selects it — then OR'd together. Writing all four terms 
out by hand is exactly why Lecture 2's SOP-from-truth-table method matters once a circuit outgrows two inputs.

<!-- page 24 -->
4:1 MUX · Two Ways to Build It
Structural composition vs. behavioral description — same circuit, two mindsets.
Structural
Instantiate the mux2_1 module three times and wire them into a 
tree. Mirrors Lab 1's top.v — building bigger circuits out of smaller, 
already-verified ones.
Behavioral
Describe the truth table directly with a case statement inside an 
always block. Faster to write, and how you'll build most real designs.

<!-- page 25 -->
New Construct · The case Statement
A readable, self-documenting way to describe a truth table inside an always block.
syntax
always @(*) begin
  case (sel)
    2'b00: y = i0;
    2'b01: y = i1;
    2'b10: y = i2;
    default: y = i3;   // covers 2'b11 AND catches X/Z
  endcase
end
y must be declared reg, not wire — it's assigned inside a procedural block.  default is not optional: an incomplete case list infers a 
latch instead of a MUX — the single most common bug in this exercise.

<!-- page 26 -->
Exercise 2 · 4:1 MUX — Behavioral Build
The same interface, described with a case statement.
mux4_1_behavioral.v
module mux4_1 (
    input  wire i0, i1, i2, i3,
    input  wire s0, s1,
    output reg  y
  );
  always @(*) begin
    case ({s1, s0})
      2'b00: y = i0;
      2'b01: y = i1;
      2'b10: y = i2;
      default: y = i3;
    endcase
  end
endmodule

<!-- page 27 -->
Exercise 2 · Testbench — Sweep Every Select 
Value
New construct: a for loop generates all four select combinations automatically.
mux4_1_tb.v
module mux4_1_tb;
  reg  i0, i1, i2, i3, s0, s1;
  wire y;
  integer k;
  mux4_1 dut (.i0(i0), .i1(i1), .i2(i2), .i3(i3), .s0(s0), .s1(s1), .y(y));
  initial begin
    $dumpfile("mux4_1_tb.vcd"); $dumpvars(0, mux4_1_tb);
    i0=0; i1=1; i2=0; i3=1;
    for (k = 0; k < 4; k = k + 1) begin
      {s1, s0} = k; #10;   // walks 00, 01, 10, 11
    end
    $finish;
  end
endmodule

<!-- page 28 -->
New Construct · for Loops in a Testbench
Stop hand-typing every input combination — let the simulator count for you.
integer k;
Declares a variable to hold the loop counter — testbench-only, never in synthesizable logic.
for (k=0; k<4; k=k+1)
Same three-part syntax as C: init; condition; step.
{s1, s0} = k;
Concatenation on the left-hand side — splits k's two low bits straight into the two select wires.
#10 inside the loop
Advances simulation time on every iteration, so each combination gets its own visible slice of 
the waveform.

<!-- page 29 -->
Part 2 · Demultiplexers
One signal in. Many possible outputs — routed by a select line.

<!-- page 30 -->
What Is a Demultiplexer?
The mirror image of a MUX: one input, routed to exactly one of several outputs.
✦
DEMUX = a data distributor, the reverse of a data 
selector.
✦
n select lines route the input to one of 2ⁿ outputs.
✦
Every output not selected is driven to 0 — nothing is left 
floating.
Naming note: “2:1 DEMUX” would literally mean 2 inputs → 1 
output — backwards for what we're building. This course calls 
these circuits 1:2 and 1:4 DEMUX (1 input : n outputs) instead.

<!-- page 31 -->
1:2 DEMUX · Truth Table & Expression
One select line S routes input D to either Y0 or Y1.
S
Y0
Y1
0
D
0
1
0
D
Boolean expressions:
Y0 = S′·D          Y1 = S·D
Notice the symmetry with the 2:1 MUX 
equation on Slide 7 — same AND/inverter 
pattern, just fanning one input out to two 
gated outputs instead of gating two inputs 
into one.
1:4
DEMUX
D
O0
O1
O2
O3
S1
S0

<!-- page 32 -->
Exercise 3 · Build a 1:2 DEMUX
Two AND gates and an inverter — the mirror image of Exercise 1.
demux1_2.v
module demux1_2 (
    input  wire i, sel,
    output wire y0, y1
  );
  assign y0 = ~sel & i;
  assign y1 =  sel & i;
endmodule
No case statement needed here — with only one select bit and two mutually exclusive outputs, two continuous assignments are 
already as clear as it gets.

<!-- page 33 -->
Exercise 3 · Testbench for the 1:2 DEMUX
Confirm the unselected output always reads 0 — the defining behavior of a DEMUX.
demux1_2_tb.v
module demux1_2_tb;
  reg  i, sel;
  wire y0, y1;
  demux1_2 dut (.i(i), .sel(sel), .y0(y0), .y1(y1));
  initial begin
    $dumpfile("demux1_2_tb.vcd"); $dumpvars(0, demux1_2_tb);
    i=1; sel=0; #10;   // expect y0=1, y1=0
    i=1; sel=1; #10;   // expect y0=0, y1=1
    i=0; sel=1; #10;   // expect y0=0, y1=0
    $finish;
  end
endmodule

<!-- page 34 -->
1:4 DEMUX · Truth Table
Two select lines route D to exactly one of four outputs; the rest read 0.
S1
S0
Y0
Y1
Y2
Y3
0
0
D
0
0
0
0
1
0
D
0
0
1
0
0
0
D
0
1
1
0
0
0
D
With a case statement, this table becomes almost literal Verilog — each row is one case branch that drives the whole output bus at 
once.

<!-- page 35 -->
1:4 DEMUX · Where This Shows Up
Any time one resource must be shared by steering it to different destinations in turn.
Memory address decoding
The high bits of an address 'demux' a read/write enable signal to 
exactly one memory bank or chip.
Telecom switching
A single voice/data line is routed to one of several trunk lines based 
on a routing code.
Serial-to-many I/O
One microcontroller output pin, time-shared across several 
peripheral chip-select lines.

<!-- page 36 -->
Exercise 4 · Build a 1:4 DEMUX
A 4-bit output bus, driven entirely by a case statement.
demux1_4.v
module demux1_4 (
    input  wire d,
    input  wire [1:0] sel,
    output reg  [3:0] y
  );
  always @(*) begin
    y = 4'b0000;          // clear all outputs first
    case (sel)
      2'b00: y[0] = d;
      2'b01: y[1] = d;
      2'b10: y[2] = d;
      default: y[3] = d;
    endcase
  end
endmodule

<!-- page 37 -->
Exercise 4 · Testbench for the 1:4 DEMUX
Reuse the for-loop pattern from Exercise 2 to sweep all four select values.
demux1_4_tb.v
module demux1_4_tb;
  reg  d;
  reg  [1:0] sel;
  wire [3:0] y;
  integer k;
  demux1_4 dut (.d(d), .sel(sel), .y(y));
  initial begin
    $dumpfile("demux1_4_tb.vcd"); $dumpvars(0, demux1_4_tb);
    d = 1;
    for (k = 0; k < 4; k = k + 1) begin sel = k; #10; end
    $finish;
  end
endmodule

<!-- page 38 -->
Common Errors · And the Fix
Four mistakes that will eat 30 minutes if you don't recognize them.
Missing default in a case
Every select value not covered infers a latch, not a MUX. Always add default (or cover 
every combination explicitly).
y declared as wire but assigned in always
Anything assigned inside always must be reg. Continuous assign targets must be wire.
Overlapping case items
Verilog case matches top-to-bottom and stops at the first hit — duplicate or missing bit 
patterns silently misbehave instead of erroring.
Select bus built from the wrong bit order
{s1, s0} ≠ {s0, s1}. Double-check concatenation order against your truth table before 
simulating.

<!-- page 39 -->
Take These Home
Three stretch problems. Solutions discussed at the start of Lab 4.
01
Build an 8:1 MUX
Combine two 4:1 MUXes and one 2:1 MUX (the third select bit) into an 8-input selector. Reuse Exercise 2's structural pattern.
02
Parameterize the MUX
Rewrite mux4_1 with a parameter WIDTH so i0–i3 and y become WIDTH-bit buses instead of single wires.
03
Add an enable input
Add an active-low enable_n to demux1_4 so all outputs read 0 whenever enable_n = 1, regardless of sel.

<!-- page 40 -->
Thanks 
for 
watching!

### L05 · Adders, Half Adder, Full Adder, ALU and Register File (24 Aug 2026)
_Topics: Adders, Half Adder, Full Adder, ALU and Register File_

#### Whiteboard

<!-- page 1 -->
Lab: 0100 
Half Adder,
 Full Adder & 4-Bit Ripple Adder
CSA222: Modern Computer Architecture
Adders
Compose half adders into full adders. Cascade four full adders. 
Watch the carry ripple.

<!-- page 2 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
02  /  28
What You'll Build Today
Three modules. Each one composes the previous. By the end, you'll add two 4-bit numbers in silicon.
01
Half Adder
Two inputs A, B. Produces Sum and 
Cout. The simplest 1-bit add — but it 
can't accept a carry-in.
02
Full Adder
Three inputs A, B, Cin. Built from two 
half adders + an OR gate. The true 1-bit 
adder cell.
03
4-Bit Ripple Adder
Four full adders chained. Cout of stage 
i becomes Cin of stage i+1. Adds two 
4-bit numbers.

<!-- page 3 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
04  /  28
Why Adders Matter
Addition is the atom of arithmetic. Every CPU instruction that does math leans on one of these cells.
Subtraction
A − B is just A + (~B) + 1 — done with 
the same adder, with Cin = 1 and one 
input inverted.
Multiplication
A × B is a sequence of shifts and adds. 
Multipliers are arrays of adders.
Program counters
PC ← PC + 4 happens every clock cycle. 
Always an adder. Address arithmetic 
too.
Master a 1-bit adder, and you've cracked open everything that follows: 
subtractors, multipliers, ALUs, the entire datapath.
BINARY ADDITION  ·  0 + 0 = 00     0 + 1 = 01     1 + 0 = 01     1 + 1 = 10

<!-- page 4 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
05  /  28
Half Adder  ·  The Equations
Two 1-bit inputs. Two 1-bit outputs. Two Boolean equations. That's the whole device.
SUM
Sum  =  A ⊕ B
Sum is 1 when A and B differ. That's XOR.
CARRY-OUT
Cout =  A · B
Carry-out is 1 only when both are 1. That's AND.
WHY "HALF"?
A half adder has no place to accept a carry from a previous stage. That's only half of what real binary addition needs — so 
you can't chain them. The full adder, two slides later, fixes this.

<!-- page 5 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
06  /  28
Half Adder  ·  Truth Table & Schematic
Four input rows. Two outputs each. Read it left-to-right.
TRUTH TABLE
A
B
Sum
Cout
0
0
0
0
0
1
1
0
1
0
1
0
1
1
0
1
Last row · Sum = 0, Cout = 1.  That's the carry: 1+1 = 10 in binary.
SCHEMATIC

<!-- page 6 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
07  /  28
Half Adder  ·  Verilog Implementation
Two continuous assignments. No always blocks, no clocks. Pure combinational.
half_adder.v
// 1-bit half adder
module half_adder (
  input  wire a,
  input  wire b,
  output wire sum,
  output wire cout
);
  assign sum  = a ^ b;   // XOR
  assign cout = a & b;   // AND
endmodule
NOTES
^  bitwise XOR.  &  bitwise AND.
Two assign statements run in parallel — there's 
no ordering.
Both outputs settle the moment a or b changes.
In real silicon, this is one XOR cell and one AND 
cell, side by side.

<!-- page 7 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
08  /  28
Half Adder  ·  Self-Checking Testbench
Four input combinations. Compare to expected. Print PASS or FAIL for each row of the truth table.
ha_tb.v
module ha_tb;
  reg a, b;  wire sum, cout;
  half_adder dut(.a(a), .b(b),
                 .sum(sum), .cout(cout));
  task check(input ea,eb,es,ec);
    begin  a=ea; b=eb; #1;
      $display("%s a=%b b=%b s=%b c=%b",
        (sum===es && cout===ec)?"PASS":"FAIL",
        a, b, sum, cout);
    end
  endtask
  initial begin
    $dumpfile("ha.vcd"); $dumpvars(0,ha_tb);
    check(0,0,0,0); check(0,1,1,0);
    check(1,0,1,0); check(1,1,0,1);
    $finish;
  end
endmodule
EXPECTED OUTPUT
PASS a=0 b=0 s=0 c=0
PASS a=0 b=1 s=1 c=0
PASS a=1 b=0 s=1 c=0
PASS a=1 b=1 s=0 c=1
Four lines, all PASS. If any FAIL appears — 
check operator precedence in your assigns.

<!-- page 8 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
10  /  28
Why a Half Adder Isn't Enough
Try to add two multi-bit numbers and you'll hit a wall on the very second column.
ADD  11 + 01
    1 1     ← A
  + 0 1     ← B
  ─────
  1 0 0
Bit 0:  1 + 1  → sum=0, carry=1  ✓
Bit 1:  1 + 0 + carry  → needs 3 
inputs!
THE PROBLEM
Bit position 1 has three signals to sum:
A[1]
B[1]
Carry-in from bit 0
A half adder has only two inputs. It cannot accept that carry. 
We need a 3-input adder cell — the full adder.

<!-- page 9 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
11  /  28
Full Adder  ·  The Equations
Three 1-bit inputs (A, B, Cin) summed into a 2-bit result (Cout, Sum).
SUM
Sum  =  A ⊕ B ⊕ Cin
Three-way XOR. Sum is 1 when an odd number of inputs are 1.
CARRY-OUT
Cout =  (A · B) + (Cin · (A ⊕ B))
Carry when both A,B are 1 — or when the partial sum (A⊕B) is 
1 and Cin is also 1.
KEY INSIGHT
Look at the Sum formula: it's a chain of XORs. And the Cout formula has (A⊕B) baked into it. That shared (A⊕B) term is the 
hint — you can build a full adder from two half adders.

<!-- page 10 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
12  /  28
Full Adder  ·  Truth Table
Eight rows — all 2³ combinations of (A, B, Cin). Sum is 1 on odd-count rows; Cout is 1 when two or more inputs are 1.
A
B
Cin
Sum
Cout
0
0
0
0
0
0
0
1
1
0
0
1
0
1
0
0
1
1
0
1
1
0
0
1
0
1
0
1
0
1
1
1
0
0
1
1
1
1
1
1
READING THE TABLE
Sum
1 when an odd number of inputs (1 or 3) are 1.  Pure 
parity function.
Cout
1 when two or more inputs are 1.  Pure majority 
function.
Sum + Cout
Together they encode the 2-bit count of how many 
inputs are 1.

<!-- page 11 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
13  /  28
Full Adder  ·  Built From Two Half Adders
Stage 1 adds A and B. Stage 2 adds that result to Cin. An OR gate combines the two carry signals.
A
B
Cin
HA 1
a, b → sum1, cout1
sum1
cout1
HA 2
sum1, cin → sum,cout2
Sum
cout2
OR
Cout
Sum from HA2 is the final sum.  Carry from either HA is the final carry — that's why OR works.

<!-- page 12 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
14  /  28
Why the OR Gate Works for the Carry-Out
The two half-adder carries can never be 1 at the same time. So OR is enough — no third AND is needed.
01
cout1 = A · B
First half adder sees A and B. Its carry 
is 1 only when both A and B are 1.
02
cout2 = sum1 · Cin
Second half adder sees sum1 = (A ⊕ B) 
and Cin. Its carry is 1 when sum1 and 
Cin are both 1.
03
They can't both be 1
If A=B=1, then sum1 = A⊕B = 0, so 
cout2 = 0. cout1 and cout2 are 
mutually exclusive — OR or XOR both 
work.
ALGEBRA  ·  Cout = cout1 + cout2 = AB + (A⊕B)·Cin    ↔    the standard full-adder carry equation.

<!-- page 13 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
15  /  28
Full Adder  ·  Verilog (Structural)
Instantiate two half_adder modules, OR their carries together. No new assigns — pure composition.
full_adder.v
// 1-bit full adder · 2 HAs + 1 OR
module full_adder (
  input  wire a, b, cin,
  output wire sum,
  output wire cout
);
  wire s1, c1, c2;
  half_adder ha1 (.a(a),  .b(b),
                 .sum(s1), .cout(c1));
  half_adder ha2 (.a(s1), .b(cin),
                 .sum(sum), .cout(c2));
  assign cout = c1 | c2;  // OR
endmodule
WHAT'S WIRED
ha1  sees a, b directly. Its sum is the partial 
sum s1.
ha2  sees s1 and cin. Its sum becomes the final 
Sum.
c1, c2  are the two HA carry-outs.
cout = c1 | c2  combines them — exactly one 
(or neither) is ever 1.

<!-- page 14 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
16  /  28
Full Adder  ·  Testbench (All 8 Cases)
Pack three input bits at once — same {a, b, cin} = i[2:0] trick you used for the MUX testbench in Lab 2.
fa_tb.v
module fa_tb;
  reg  a, b, cin;  wire sum, cout;
  full_adder dut(.a(a), .b(b), .cin(cin),
                 .sum(sum), .cout(cout));
  integer i;
  initial begin
    $dumpfile("fa.vcd"); $dumpvars(0, fa_tb);
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, cin} = i[2:0];  #5;
      $display("a=%b b=%b cin=%b → sum=%b cout=%b",
               a, b, cin, sum, cout);
    end
    $finish;
  end
endmodule
RUN IT
$ iverilog -o fa.vvp \
    half_adder.v \
    full_adder.v \
    fa_tb.v
$ vvp fa.vvp
$ gtkwave fa.vcd
Pass all three .v files. Verilog won't find 
half_adder otherwise.

<!-- page 15 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
17  /  28
4-Bit Ripple-Carry Adder  ·  The Idea
Chain four full adders. Bit 0 on the right, bit 3 on the left. Each carry-out feeds the next carry-in.
FA3
bit 3
a[3]
b[3]
s[3]
FA2
bit 2
a[2]
b[2]
s[2]
FA1
bit 1
a[1]
b[1]
s[1]
FA0
bit 0
a[0]
b[0]
s[0]
c[1]
c[2]
c[3]
cin
cout
"Ripple" = the carry has to travel through every stage before the last sum is correct. Each stage waits for the previous.

<!-- page 16 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
18  /  28
4-Bit Ripple Adder  ·  Verilog
Four full_adder instances. One internal 3-bit carry wire. Connect cout[i] to cin[i+1].
adder4.v
module adder4 (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] sum,
  output wire       cout
);
  wire c1, c2, c3;  // internal carries
  full_adder fa0(.a(a[0]),.b(b[0]),.cin(cin),
                  .sum(sum[0]),.cout(c1));
  full_adder fa1(.a(a[1]),.b(b[1]),.cin(c1),
                  .sum(sum[1]),.cout(c2));
  full_adder fa2(.a(a[2]),.b(b[2]),.cin(c2),
                  .sum(sum[2]),.cout(c3));
  full_adder fa3(.a(a[3]),.b(b[3]),.cin(c3),
                  .sum(sum[3]),.cout(cout));
endmodule
KEY POINTS
[3:0]  declares a 4-bit vector. a[0] is the LSB.
c1, c2, c3  are internal — only carry-in and 
carry-out are exposed.
cin → fa0, and fa3.cout → cout. The chain is 
complete.
Try generate loops in the stretch problems 
for an N-bit version.

<!-- page 17 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
19  /  28
4-Bit Ripple Adder  ·  Testbench Vectors
Four targeted test cases. Each one stresses a different aspect of carry behaviour.
adder4_tb.v
module adder4_tb;
  reg  [3:0] a, b;  reg cin;
  wire [3:0] sum;   wire cout;
  adder4 dut(.a(a),.b(b),.cin(cin),
             .sum(sum),.cout(cout));
  initial begin
    $dumpfile("adder4.vcd");
    $dumpvars(0, adder4_tb);
    cin = 0;
    a=4'b0001; b=4'b0001; #10;  // 1+1=2
    a=4'b0111; b=4'b0001; #10;  // 7+1=8
    a=4'b1111; b=4'b0001; #10;  // overflow
    a=4'b1000; b=4'b1000; #10;  // 8+8=16
    $finish;
  end
endmodule
WHY THESE 4?
0001 + 0001  smallest carry — just bit 0 to bit 
1.
0111 + 0001  carry ripples through bits 0, 1, 2.
1111 + 0001  carry ripples through ALL four 
bits — overflow out.
1000 + 1000  one-bit add, immediate 
overflow to cout.

<!-- page 18 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
20  /  28
Walking Through Test Cases  ·  Part 1
Trace each carry by hand. If your simulation disagrees, you have a bug in the adder — not in the testbench.
0001 + 0001 = 00010
  0 0 0 1   ← a
+ 0 0 0 1   ← b
─────────
  0 0 1 0   sum = 0010
  cout = 0
Bit 0: 1+1 → s=0, c=1.  Bit 1: 0+0+1 → s=1, c=0.  No further carry.
0111 + 0001 = 01000
  0 1 1 1   ← a
+ 0 0 0 1   ← b
─────────
  1 0 0 0   sum = 1000
  cout = 0
Carry travels: bit 0 → 1 → 2 → 3, and bit 3 finally outputs s=1, c=0.

<!-- page 19 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
21  /  28
Walking Through Test Cases  ·  Part 2
Now the edge cases — when 4 bits are too few to hold the result, the final carry-out tells you so.
1111 + 0001 = 10000  ← overflow
  1 1 1 1   ← a
+ 0 0 0 1   ← b
─────────
  0 0 0 0   sum = 0000
  cout = 1  ← overflow!
Carry ripples through ALL four stages. sum looks like zero, but 
cout=1 means "there's a fifth bit".
1000 + 1000 = 10000
  1 0 0 0   ← a
+ 1 0 0 0   ← b
─────────
  0 0 0 0   sum = 0000
  cout = 1
Only bit 3 has a 1+1 → carry out immediately. No rippling, but still 
an overflow.

<!-- page 20 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
22  /  28
Watching the Carry Ripple in GTKWave
Open adder4.vcd and add a, b, sum, cout, c1, c2, c3 to the waveform. Zoom in on the 1111 + 0001 transition.
time →
(propagation through 
stages)
c1   (FA0 → FA1)
↑
c2   (FA1 → FA2)
↑
c3   (FA2 → FA3)
↑
cout (FA3 out)
↑
inputs change
Each carry rises slightly later than the previous one — that staircase is the "ripple" propagating in real time.

<!-- page 21 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
23  /  28
Why Ripple-Carry is Slow
In real silicon, every gate has a delay. The carry has to walk through all of them — serially.
~2
gate delays per FA stage
Each full adder adds 2 levels of logic 
between its Cin and its Cout.
8
delays for a 4-bit add
4 stages × 2 delays = 8. Doable. But scale 
up...
128
delays for a 64-bit add
64 stages × 2 delays. Modern CPUs can't 
tolerate this latency.
THE FIX
Compute every carry in parallel using the equation Cout = G + (P · Cin), where G = A·B and P = A⊕B. That's the carry-look-ahead adder — 
Lab 4.

<!-- page 22 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
24  /  28
Common Errors  ·  And the Fix
Five traps specific to this lab. Spot them quickly — save yourself 30 minutes of waveform-staring.
cout always 0, even when 1+1+1
Probably wrote cout = c1 & c2 instead of c1 | c2. AND only fires when BOTH carries are 1, which never happens.
sum bits in reverse order
a[0] is the LSB. If you wired sum[3] to fa0, you've reversed everything. Double-check your indices.
Last sum is always X (red)
fa3 has no Cin connection — you forgot to wire c3 in. Unassigned Verilog inputs default to X (unknown).
Waveform shows correct sum, but at time 0
You assigned all inputs at t=0 with no #delay. Add small delays between vectors so transitions are visible.

<!-- page 23 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
26  /  28
Take These Home
Three stretch problems. Solutions discussed at the start of Lab 4.
01
Build it from one half adder
Refactor full_adder.v to use only ONE half_adder instance plus a few primitive gates. Verify it still passes all 8 cases.
02
Parametric N-bit adder
Rewrite adder4.v as a parameterised adder#(N) module with a Verilog generate loop. Test with N = 8 and N = 16.
03
Overflow detection
Add an overflow output to your 4-bit adder using signed arithmetic semantics — V = c3 ⊕ c4 (carry into MSB XOR carry 
out).
Pick one. All three if you're feeling sharp.

<!-- page 24 -->
LAB 03  ·  MODERN COMPUTER ARCHITECTURE
27  /  28
Why This Matters
The 1-bit full adder is the building block. Every arithmetic structure in a CPU starts here.
TODAY
You built an ALU's most basic operation from primitive gates. 
Two HAs, four FAs, one VCD trace.
TOMORROW
Lab 4 trades depth for width — carry-look-ahead computes 
every carry in parallel. Faster, more transistors.
REAL CHIPS
Modern CPUs use carry-select, Kogge-Stone, or Brent-Kung 
adders. All of them still decompose into FA cells like the one 
you just wrote.
BEYOND
Multipliers are arrays of FAs. Floating-point units are wider 
FAs. Even GPUs and TPUs lean on these cells billions of times 
per second.
You just built, in 90 minutes, the cell that ships in every CPU on Earth.

<!-- page 25 -->
END OF LAB 03
Two half adders.
One full adder.
Four cells, one ALU's heart.
Questions?

<!-- page 26 -->
Thanks 
for 
watching!

### L06 · Number Systems & Two's Complement, Number Systems, Binary to Decimal Conversion, ... (26 Aug 2026)
_Topics: Negation, Binary to Decimal Conversion, Binary Addition, 1's Complement, Hexadecimal Number System, Number Systems, Signed Representations, Number Systems & Two's Complement, Two's Complement, Sign-Magnitude, Range, Sign Extension_

#### Whiteboard

<!-- page 1 -->
Lab: 0100 
Adder Subtractor, Two's 
Complement & Overflow
CSA222: Modern Computer Architecture

<!-- page 4 -->
Can you Try 1 & 2 bit Comparator and 
Multiplier by yourself ?
Explore Carry Look Ahead Adder and try to 
figure out something which is worth noticing !

<!-- page 5 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
16 / 28
Two's Complement · The Lay of the Land
Same 4 bits. Two readings. Whether a result is 'right' depends entirely on which reading you intended.
U
UNSIGNED · 0 to 15
All bits are 'just bits'. 1111 = 15. Carry-out = wraparound. 15 + 1 
→ 0 + Cout. That's it. Cout IS the overflow flag.
S
SIGNED (TWO'S COMPLEMENT) · -8 to +7
MSB is the sign bit. 1111 = -1, not 15. Cout is meaningless here — 
we need a different flag.
BITS
0000
0001
...
0111
1000
1001
1111
UNSIGNED
0
1
...
7
8
9
15
SIGNED
0
1
...
7
-8
-7
-1

<!-- page 6 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
17 / 28
Unsigned Overflow · CF = Cout
If you treat your 4 bits as 0–15, the carry-out tells you the result didn't fit. End of story.
CF (carry flag) = Cout
0001 = 1
+0001 = 1
0010 = 2
CF = 0
Result fits in 4 bits. No overflow.
1111 = 15
+0001 = 1
0000 = 0
CF = 1
15+1 = 16, but only 4 bits — the top bit fell off.
1000 = 8
+1000 = 8
0000 = 0
CF = 1
8+8 = 16 = 10000. Bit 4 became Cout.

<!-- page 7 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
18 / 28
Signed Overflow · OF = C₃ ⊕ C₄
The XOR of the carry INTO the MSB and the carry OUT of the MSB. That's the rule, and it just works.
OF (overflow flag) = Cin-to-MSB ⊕ Cout-of-MSB
THE INTUITION
Signed overflow happens when two positives add to a 'negative', or two negatives add to a 'positive' — the sign bit lies about the 
answer.
The MSB column is exactly where that lie happens. If the carry going IN disagrees with the carry going OUT, the sign bit got flipped by 
arithmetic — not by the real result. That's overflow.
WHERE TO TAP  ·  In your CLA, c3 is the carry into the MSB and c4 (= cout) is the carry out. So OF = c3 ⊕ c4.

<!-- page 8 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
19 / 28
Why That XOR Works
Two signs in, one sign out. Walk the MSB column. Overflow is exactly the disagreement of its two carries.
A₃
B₃
Result sign
C₃ in
C₄ out
OF
Verdict
0 (+)
0 (+)
0 ✓ matches
0
0
0
no overflow
0 (+)
0 (+)
1 ✗ flipped
1
0
1
OVERFLOW
1 (-)
1 (-)
0 ✗ flipped
0
1
1
OVERFLOW
1 (-)
1 (-)
1 ✓ matches
1
1
0
no overflow
READ MIDDLE TWO ROWS · Same-sign inputs producing the opposite sign ⇔ the MSB column's two carries disagree.

<!-- page 9 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
20 / 28
Overflow Flags · Two More Lines
Promote c3 and c4 to module outputs. One AND, one XOR, and you're done.
cla_adder.v · with flags
module cla_adder_4bit_ovf (
  input  wire [3:0] a, b,
  input  wire cin,
  output wire [3:0] sum,
  output wire cout, cf, of
);
  // ... g, p, c1..c4, sum exactly as before ...
  // The two new flags:
  assign cf = c4;        // unsigned overflow
  assign of = c3 ^ c4;   // signed overflow
  assign cout = c4;
endmodule
TWO FLAGS, ONE ADDER
cf is meaningful only if you read your inputs as 
unsigned.
of is meaningful only if you read them as signed.
The adder emits both flags — your program (or 
CPU flag register) picks. Exactly how x86 and ARM 
work.

<!-- page 10 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
21 / 28
Four Test Cases · Stressing Both Flags
Each case tests a different signed/unsigned scenario. Predict every flag before you simulate.
01
0001 + 0001
CF=0  OF=0
unsigned 1+1=2 · signed +1+1=+2 · quiet case
02
0111 + 0001
CF=0  OF=1
unsigned 7+1=8 (fine) · signed +7+1=-8 ✗
03
1111 + 0001
CF=1  OF=0
unsigned 15+1=16 ✗ wrapped · signed -1+1=0 (fine)
04
1000 + 1000
CF=1  OF=1
unsigned 8+8=16 ✗ · signed -8+-8=0 ✗ · both broke
Drop these four into your testbench. Print a, b, sum, cf, of for each — the pattern above is the spec.

<!-- page 11 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
22 / 28
Walking Through Test Cases · Part 1
Trace the MSB column by hand. If sim disagrees, your flag logic is wrong — not the arithmetic.
case 02
0111 + 0001 · signed overflow
  0111 = +7
+ 0001 = +1
-------
  1000 = -8  (should be +8)
MSB: Cin=1  Cout=0
OF = 1 xor 0 = 1
CF = Cout = 0
case 03
1111 + 0001 · unsigned wrap
  1111 = 15 (or -1)
+ 0001 = +1
-------
  0000 = 0
MSB: Cin=1  Cout=1
OF = 1 xor 1 = 0
CF = Cout = 1

<!-- page 12 -->
LAB 04 · MODERN COMPUTER ARCHITECTURE
23 / 28
Walking Through Test Cases · Part 2
The double-failure case, plus a 'should-be-clean' case to show what a quiet adder looks like.
case 04
1000 + 1000 · both flags
  1000 = 8 (or -8)
+ 1000 = 8 (or -8)
-------
  0000 = 0
MSB: Cin=0  Cout=1
OF = 0 xor 1 = 1
CF = Cout = 1
sanity check
0011 + 0010 · the quiet case
  0011 = +3
+ 0010 = +2
-------
  0101 = +5
MSB: Cin=0  Cout=0
OF = 0 xor 0 = 0
CF = Cout = 0

<!-- page 13 -->
LAB 04  ·  MODERN COMPUTER ARCHITECTURE
28  /  28
END OF LAB 04
One adder performs all.
One ground truth.
Two flags for what 'overflow' 
really means.

<!-- page 14 -->
Thanks 
for 
watching!

### L07 · Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, Combinatio ... (31 Aug 2026)
_Topics: Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, SR Latch, Combinational vs Sequential Circuits, D-Latch, D Flip-Flop, Timing Parameters, NAND/NOR Structure, Forbidden State, Setup and Hold Time, Metastability and MTBF, Registers, Counters & Shift Registers, Scaling from Flip-Flops to Registers_

#### Whiteboard

<!-- page 1 -->
Lab: 0101 
The Day Your Circuit
Learns to Remember.
CSA222: Modern Computer Architecture
From Combinational to Sequential
How a circuit gains memory — and how a clock keeps that memory sane.

<!-- page 2 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
2 / 30
What You'll Build Today
Three storage elements, in order of increasing discipline. By the end, you'll have the building block of every register on a CPU.
01
SR Latch
Two cross-coupled NORs. Holds one bit. 
You'll meet its forbidden state — the 
warning sign of all latches.
02
D Latch
Tame the SR latch with an enable. 
While E=1 the output follows D. While 
E=0 it remembers. Transparent and 
glitch-prone.
03
D Flip-Flop
Same idea, but it samples only on the 
clock's rising edge. The workhorse of 
every synchronous CPU.
Today is where Verilog stops being just combinational equations and starts looking like state.

<!-- page 3 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
3 / 30
Recap · Where We Are
Labs 1–4 built circuits whose outputs are pure functions of their inputs. Today the output depends on history too.
01
Combinational so far
Adders, MUXes, decoders — outputs change the instant inputs change. No state. No clock.
02
But CPUs have state
Registers hold partial sums between cycles. The PC remembers what to fetch next. Memory 
remembers everything.
03
Feedback is the answer
Loop an output back into an input through a gate. With the right topology, the circuit holds 
onto a bit.
04
Then add discipline
Pure feedback is messy — async, glitch-sensitive. The clock turns chaos into a sequence of 
well-deﬁned moments.
Every circuit from today onward will have memory. Get used to thinking in time, not just in logic.

<!-- page 4 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
4 / 30
Why We Need Memory
Pure logic forgets the instant inputs change. To compute anything iterative, the circuit has to hold a value between steps.
f(x)
what combinational
gates compute
0 ns
how long they
remember
1 bit
the minimum unit
of state we need
∞
complexity we can
build once we have it
THE INSIGHT
Try writing a counter with only AND/OR/XOR. You can't. There's no way to ask 'what was Q a moment ago?' 
without something that remembers. That something is built from feedback.

<!-- page 5 -->
L05 · MODERN COMPUTER ARCHITECTURE
04 / 34
Combinational vs Sequential
The single most important distinction in digital design.
COMBINATIONAL
Output = f(inputs now)
No memory — purely reactive.
Same inputs always give same output.
Examples: adders, MUXes, decoders.
The instant inputs change, output follows.
SEQUENTIAL
Output = f(inputs, past state)
Has memory — remembers history.
Same inputs can give diﬀerent outputs.
Examples: registers, counters, FSMs.
A clock decides WHEN state updates.
The diﬀerence is one thing: a feedback loop. Add it, and a circuit can remember.

<!-- page 6 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
5 / 30
The Idea · Feedback Creates State
Wire an output back into an input. If the topology supports two stable conﬁgurations, the circuit can be in either — and stay there.
WHAT YOU SEE
Two NOR gates feeding each other's inputs. Two stable 
conﬁgurations: (Q=1, Q'=0) and (Q=0, Q'=1). Either holds 
itself.
Each gate's output feeds the OTHER gate's input — that's the cross-coupling 
that holds state.

<!-- page 7 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
7 / 30
SR Latch · Schematic & Truth Table
Two NOR gates, four input combinations, four very diﬀerent behaviours.
S
R
Q (next)
Behaviour
0
0
Q (hold)
remember
1
0
1
set
0
1
0
reset
1
1
??
forbidden
Read row 4: with S=R=1, both NORs try to drive their outputs to 0 — but then both feedbacks are 0, which would 
force both back to 1. The latch oscillates.

<!-- page 8 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
6 / 30
SR Latch · The Equations
Two assignments, each referring to the other's output. That mutual reference is the storage.
Q (the bit we read)
Q = ~(R | Q')
Q stays 1 unless R is asserted. If R=1, Q is pulled to 0 
regardless of Q'.
Q' (the inverted bit)
Q' = ~(S | Q)
Q' stays 1 unless S is asserted. If S=1, Q' is pulled to 0, which 
lets Q rise to 1.
WHY THIS WORKS
When S=R=0 (no command), each equation simpliﬁes to Q = ~Q', Q' = ~Q. That's a consistent pair — and it's 
stable. Two such pairs exist; the latch sits in whichever it last entered.

<!-- page 9 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
8 / 30
SR Latch · Verilog
Two assigns, each referencing the other's wire. Verilog handles the simultaneous evaluation.
sr_latch.v
// NOR-based SR latch
module sr_latch (
  input  wire s,
  input  wire r,
  output wire q,
  output wire qbar
);
  // Cross-coupled NORs:
  // q depends on qbar, qbar depends on q.
  assign q    = ~(r | qbar);
  assign qbar = ~(s | q);
endmodule
WHY THIS COMPILES
• Each assign is continuous — it re-evaluates 
whenever its RHS changes.
• When you change s or r, one assign reacts, then 
the other, then it settles.
• With S=R=1, both keep ﬁring forever — that's the 
simulator's way of telling you about the 
forbidden state.
• Real hardware doesn't oscillate cleanly; it lands 
at whichever NOR is slightly faster.

<!-- page 10 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
9 / 30
The Forbidden State · S = R = 1
What the truth table calls 'forbidden' isn't an error in Verilog — it's the moment the latch stops being a latch.
1
Both fire
S=R=1 forces both NOR outputs to 0. So 
Q=0 and Q'=0 — they're equal, breaking 
the invariant Q ≠ Q'.
2
Release S and R
Now both inputs return to 0. The NORs 
feed back the previous 0's — each tries 
to ﬂip to 1. They race.
3
Whoever is faster wins
The ﬁnal state depends on tiny 
propagation diﬀerences between the 
two gates. Non-deterministic — which 
is unusable in a CPU.
THE LESSON
Every latch design that exposes both S and R must guarantee they're never both 1. The D latch solves this by 
construction — R is always ~S.

<!-- page 11 -->
L05 · MODERN COMPUTER ARCHITECTURE
12 / 34
SR Latch, NAND Version
Same idea, built from NAND gates — but the inputs are active-LOW.
NOR vs NAND LATCH
NOR latch: active-HIGH (1 = act).
NAND latch: active-LOW (0 = act).
Forbidden state ﬂips too: for the NAND latch, S' = 
R' = 0 is the illegal one.
NAND latches are common in practice because NAND 
is the cheap, universal gate (recall L2).
Note the primes: S' and R' are active-LOW — a 0 triggers the action, not a 1.

<!-- page 12 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
10 / 30
SR Latch · Testbench
Walk through all four cases. The forbidden case will show oscillation in iverilog — read the log carefully.
sr_tb.v
module sr_tb;
  reg s, r; wire q, qbar;
  sr_latch dut(.s(s), .r(r), .q(q), .qbar(qbar));
  initial begin
    $dumpfile("sr.vcd"); $dumpvars(0, sr_tb);
    s=0; r=0; #5;  // initial — unknown
    s=1; r=0; #5;  // SET -> q=1
    s=0; r=0; #5;  // HOLD -> q stays 1
    s=0; r=1; #5;  // RESET -> q=0
    s=0; r=0; #5;  // HOLD -> q stays 0
    s=1; r=1; #5;  // FORBIDDEN
    s=0; r=0; #5;  // metastable!
    $finish;
  end
endmodule
WHAT TO LOOK FOR
• Steps 1–5: q follows the rules — set, hold, reset, 
hold.
• Step 6: q and qbar both go to 0 — illegal state.
• Step 7: after release, iverilog may keep toggling — 
that's the oscillation.
• If you see X (unknown) on q after step 7, the 
simulator gave up. That's the right behaviour.

<!-- page 13 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
11 / 30
The SR Latch Is Hard to Use
Even when you avoid the forbidden state, two things make raw SR latches dangerous in a real design.
01
Two control lines is one too 
many
Every consumer of this latch has to 
remember not to assert S and R 
together. That's a rule humans break.
02
Any input glitch propagates
A 1 ns spike on S during HOLD will set 
the latch. There's no way to ignore 
noise without external gating.
03
No notion of 'now'
The latch reacts to inputs the instant 
they change. Synchronous design 
needs a clock to deﬁne when things 
happen.
The D latch ﬁxes problems 1 and 2. The ﬂip-ﬂop ﬁxes problem 3.

<!-- page 14 -->
L05 · MODERN COMPUTER ARCHITECTURE
13 / 34
Adding an Enable: The Gated Latch
Now the latch only listens when we say so — the ﬁrst step toward a clock.
The Enable (E) controls the latch: when enabled, S sets Q = 1 and 
R resets Q = 0; when disabled, the previous state is retained.
WHY THIS MATTERS
When E = 1 (Enable): The latch responds to 
S and R — S = 1 sets Q = 1, while R = 1 
resets Q = 0.
When E = 0 (Disable): The latch holds its 
previous state, so Q remains unchanged.

<!-- page 15 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
12 / 30
D Latch · One Input, One Enable
Take the SR latch. Tie R = ~S internally. Add an enable that gates everything. Now S and R can never both be 1.
S = D · E    R = ~D · E
01
When E = 0
Both S and R are 0. The 
SR latch is in HOLD. D 
can wiggle all it wants 
— output doesn't 
change.
02
When E = 1, D = 1
S=1, R=0. SR latch is SET. 
Q = 1.
03
When E = 1, D = 0
S=0, R=1. SR latch is 
RESET. Q = 0.
While E is high, Q follows D — we call this 'transparent'. While E is 
low, Q holds.

<!-- page 16 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
14 / 30
D Latch · Transparency
While E is high, Q tracks D step-for-step. While E is low, whatever D was at the falling edge of E is what Q holds.
D
E
Q
D
E
Q
← transparent →
← holding →
← transparent →
During the green windows, Q is a copy of D. During the amber window, Q remembers the last D from before E fell.

<!-- page 17 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
13 / 30
D Latch · Verilog
Two assigns to compute S_int and R_int from D and E. Then reuse the SR latch as a submodule.
d_latch.v
// Transparent D latch built from an SR latch
module d_latch (
  input  wire d,
  input  wire e,
  output wire q,
  output wire qbar
);
  wire s_int, r_int;
  assign s_int = d & e;
  assign r_int = ~d & e;
  sr_latch core(.s(s_int), .r(r_int),
                .q(q), .qbar(qbar));
endmodule
NOTES
• S and R are mutually exclusive by construction.
• When E=0, both s_int and r_int are 0 — the SR 
latch holds.
• Reusing sr_latch keeps the design hierarchical — 
like the FA from 2 HAs in Lab 3.
• Compile with both .v ﬁles: iverilog -o d.vvp 
sr_latch.v d_latch.v d_tb.v

<!-- page 18 -->
L05 · MODERN COMPUTER ARCHITECTURE
16 / 34
The Clock: The System Heartbeat
One periodic signal synchronises every ﬂip-ﬂop in the chip.
WHY ONE CLOCK
Every ﬂip-ﬂop updates on the same edge.
That shared instant is what keeps a 
whole chip's state consistent — everyone 
steps together.
The clock is the drummer the entire 
orchestra follows. Lose sync, lose 
everything.

<!-- page 20 -->
L05 · MODERN COMPUTER ARCHITECTURE
17 / 34
Level-Triggered vs Edge-Triggered
The diﬀerence between 'listen the whole time' and 'listen for one instant'.
LEVEL-TRIGGERED (latch)
Active during an entire clock LEVEL (high or low).
Transparent — output tracks input the whole window.
Simpler, fewer gates.
Risky: data can slip through unintentionally.
EDGE-TRIGGERED (flip-flop)
Active only at the clock EDGE (rising or falling).
Samples input at one instant, then locks.
More gates, but predictable.
The safe choice for pipelines & registers.
↑ rising edge
An edge is a MOMENT (0→1 transition), not a duration. That's why edge-triggering 
samples cleanly.

<!-- page 21 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
15 / 30
Transparency Is Sometimes a Problem
Anything that wiggles on D while E is high lands on Q. Glitches included. That's why CPUs don't use latches for the critical path.
D LATCH · TRANSPARENT
D FLIP-FLOP · EDGE TRIGGERED
Same noisy D. Same clock. Latch propagates everything. Flip-ﬂop ignores everything except the value at the rising edge.

<!-- page 22 -->
L05 · MODERN COMPUTER ARCHITECTURE
18 / 34
The D Flip-Flop
Samples D on the rising clock edge, then holds it for the whole cycle.
The small triangle on the clock input is the universal symbol for 
'edge-triggered'.
THE RULE
At each rising edge of CLK:
Q ← D (sampled once).
Between edges: Q is frozen, no matter what D does.
So D can wiggle all it wants — only its value AT the 
edge is captured. This solves the transparency 
problem completely.

<!-- page 23 -->
L05 · MODERN COMPUTER ARCHITECTURE
19 / 34
How Edge-Triggering Works: Master-Slave
Two latches in series on opposite clock phases — data can only advance one step per cycle.
Master captures D while CLK is high; slave passes it on the falling edge. Result: one clean 
update per cycle.
THE HAND-OFF
The two latches are NEVER transparent 
at the same time.
When the master listens, the slave is 
locked — and vice versa.
So data can't race straight through. It's a 
two-stage airlock for one bit.

<!-- page 24 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
16 / 30
From Latch to Flip-Flop · The Clock
An edge-triggered ﬂip-ﬂop is a latch that opens for an instant on the clock edge — too brieﬂy for glitches to pass.

<!-- page 25 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
17 / 30
D Flip-Flop · Verilog
Procedural this time. The `always @(posedge clk)` block tells the simulator: 'evaluate this only at the rising edge of clk'.
d_ff.v
// Positive-edge-triggered D flip-flop
module d_ff (
  input  wire clk,
  input  wire d,
  output reg  q   // reg, not wire
);
  always @(posedge clk) begin
    q <= d;       // nonblocking
  end
endmodule
THREE THINGS NEW
• output reg — q is now a procedural variable. wire 
can't be assigned inside always.
• always @(posedge clk) — the block runs once 
each time clk goes 0→1. Never any other time.
• <= (nonblocking) — the update happens at the 
end of the time step. Next slide explains why this 
matters.

<!-- page 26 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
19 / 30
D Flip-Flop · Testbench
Drive a clock. Drive D with deliberate noise between edges. Verify Q only changes on rising edges.
ff_tb.v
module ff_tb;
  reg clk, d; wire q;
  d_ff dut(.clk(clk), .d(d), .q(q));
  initial clk = 0;
  always #5 clk = ~clk;  // period = 10 ns
  initial begin
    $dumpfile("ff.vcd"); $dumpvars(0, ff_tb);
    d = 0; #3;   // before 1st edge
    d = 1; #1;   // glitch up
    d = 0; #1;   // glitch down - edge at t=5
    d = 1; #6;   // settle to 1
    d = 1; #10;  // hold across 2 edges
    d = 0; #10;
    $finish;
  end
endmodule
EXPECTED Q
• Q stays 0 until t=5.
• At t=5 (rising edge), D was 0 → Q stays 0.
• At t=15, D = 1 → Q goes to 1.
• All intermediate glitches on D are ignored.

<!-- page 27 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
20 / 30
D Flip-Flop · What the Waveform Shows
CLK ticks. D wiggles. Q updates only at the up-arrows. Everything else gets thrown away.
Notice Q ignores all the glitches on D between edges. It samples only at the four red arrows.

<!-- page 28 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
21 / 30
Side by Side · D Latch vs D Flip-Flop
Same circuit symbol, very diﬀerent behaviour. Memorize this table — it's the most-asked digital-design interview question.
D Latch
D Flip-Flop
Control signal
Enable (level)
Clock (edge)
Output during 'active'
Q follows D continuously
Q samples once, then holds
Transparent?
Yes — D wiggles, Q wiggles
No — Q is opaque between edges
Glitches on D propagate?
Yes
No
Verilog body
assign (or always @(*))
always @(posedge clk)
Output type
wire
reg
Used in modern CPUs?
Rarely — special cases only
Everywhere — pipelines, registers

<!-- page 29 -->
L05 · MODERN COMPUTER ARCHITECTURE
24 / 34
Setup Time & Hold Time
Data must be STABLE in a window around the clock edge — before and after.
THE ANALOGY
Taking a photo of a moving object.
The subject must hold still just before 
AND just after the shutter clicks, or the 
picture blurs.
Same for a ﬂip-ﬂop: change D inside the 
setup/hold window and the captured bit is a 
blur — undeﬁned.

<!-- page 30 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
23 / 30
Setup & Hold Time · The Fine Print
The ﬂip-ﬂop only samples reliably if D is stable for a small window around the rising edge. Violate that window and Q goes metastable.
t_setup
how long D must be
stable BEFORE the edge
t_hold
how long D must be
stable AFTER the edge
t_cq
delay from the edge
to Q being valid
WHAT GOES WRONG
If D changes inside the [edge − t_setup, edge + t_hold] window, the ﬂip-ﬂop captures neither 0 nor 1 cleanly. Q 
enters a metastable state — somewhere between rails — and may stay there for many gate-delays before snapping 
to one or the other. This is why CPU pipelines have synchronizers at every clock-domain crossing.

<!-- page 31 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
24 / 30
When to Use a Latch
Flip-ﬂops won the war, but latches still show up in three speciﬁc places. Knowing why matters more than memorizing them.
01
SRAM cells
Every bit of cache is two cross-coupled 
inverters — essentially an SR latch. 
There are billions of these on a modern 
die.
02
Time-borrowing
In pipelines too tight for one clock 
period, designers insert a latch 
between two ﬂop stages. The latch lets 
a slow operation 'borrow' time from 
the next cycle.
03
Asynchronous resets
Reset logic is often latched, not ﬂopped 
— you want to be sure the reset signal 
sticks even if the clock isn't running 
yet.
Everywhere else — pipeline registers, control state, the PC, ALU result registers — it's ﬂip-ﬂops.

<!-- page 32 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
25 / 30
Common Errors · And the Fix
Five traps that catch most students. Glance now and save yourself half an hour of waveform-staring.
✕
Declared q as wire inside the flip-flop
Procedural assignments need reg. Verilog will refuse to compile and the error 
message points at the wrong line. Change wire to reg.
✕
Used `=` instead of `<=` in posedge block
Compiles ﬁne, often even simulates ﬁne. But cascaded stages get the wrong values 
when clk-skew matters. Use <= in every posedge block, every time.
✕
Forgot the begin/end on multiline blocks
Verilog only ties the ﬁrst statement to the @(posedge). Subsequent lines run as 
combinational logic. Wrap multi-line bodies in begin ... end.
✕
Drove S and R high simultaneously in SR test
iverilog will report 'X' on q after release. That's not a bug — it's the forbidden state. 
Re-read slide 9 and gate your inputs.
✕
Built a flip-flop and called it a latch
If your D propagates only at posedge clk, you have a ﬂip-ﬂop. A real latch uses 
always @(*) or continuous assigns with an enable wire.

<!-- page 33 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
27 / 30
Why This Matters · What's Next
Every register on the CPU you'll build later is a row of D ﬂip-ﬂops. Every pipeline stage is a ﬂop. Today is the foundation of all of that.
TODAY
One bit, one flop
You built the elementary unit of digital memory. From here, 
everything scales.
TOMORROW
Registers, banks
Stack 32 ﬂip-ﬂops side by side, share a clock — you have a 32-bit 
register. Build 32 of those, you have the register ﬁle.
REAL CHIPS
Pipelines and pacing
Every stage boundary in a CPU pipeline is a row of ﬂops. Their 
setup/hold determines the max clock frequency.
BEYOND
FSMs and control
Combine ﬂops with combinational logic and you have a ﬁnite-state 
machine. That's how every controller in a CPU works.
You just learned, in 90 minutes, the storage cell that ships in every CPU on Earth.

<!-- page 34 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
28 / 30
Rapid-Fire Recap
Three questions — shout the answers.
Q1
S = R = 1 on an SR latch is called…
forbidden
Q2
A D latch is transparent when E equals…
1
Q3
A D flip-flop samples D on the clock's…
rising edge
All three instant? You've got the foundation — Lab 06 builds registers and register ﬁles from exactly this cell.

<!-- page 35 -->
LAB 05 · MODERN COMPUTER ARCHITECTURE
29 / 30
LAB 05 · MODERN COMPUTER ARCHITECTURE
29 / 30
✓
One latch. One flip-flop.
One bit that remembers.
Next: registers, register ﬁles, and the ﬁrst real piece of a datapath.
END OF LAB 05 · LATCHES AND FLIP-FLOPS

<!-- page 36 -->
Thanks 
for 
watching!

### L08 · Registers, Load Enable and Reset (02 Sep 2026)
_Topics: Registers, Load Enable and Reset_

#### Whiteboard

<!-- page 1 -->
Lab: 0110 
Shift Registers & Counters
CSA222: Modern Computer Architecture
From Flip-Flops to Sequencing Circuits

<!-- page 2 -->
SESSION MAP
LAB 06  ·  2
Lab Roadmap
Two theory blocks, following the same order and depth as the Neso Academy Digital Electronics playlist — then six build exercises.
A
Registers & Shift Registers
Intro to registers → data formats → SISO → SIPO → 
PISO → PIPO → bidirectional → universal shift 
register.
B
Counters
Asynchronous (ripple) up/down → synchronous 
design method → 2/3/4-bit up/down → Ring Counter 
→ Johnson Counter.
C
Verilog Exercises
6 build questions: two registers, two shift registers, 
two synchronous counters — problem + solution each.

<!-- page 3 -->
SECTION A
LAB 06  ·  3
Registers & Shift Registers
Storage elements built from flip-flops — how data enters, moves, and leaves.
1
What is a Register?
A group of flip-flops sharing one 
clock.
2
Data Formats
Serial vs. parallel in, serial vs. parallel 
out.
3
4 Basic Modes
SISO, SIPO, PISO, PIPO.
4
Advanced Modes
Bidirectional & Universal shift 
registers.

<!-- page 4 -->
A1 · INTRODUCTION TO REGISTERS
LAB 06  ·  4
What Is a Register?
A register is a group of flip-flops, each storing one bit, all sharing a common clock.
✦
An n-bit register = n flip-flops in parallel, clocked together, so an n-bit 
word updates atomically
✦
Registers are the fastest storage a digital system has — no addressing 
or bus arbitration needed, just a clock edge
✦
Two control lines are common on a practical register: LOAD (accept 
new data) and CLEAR (force all bits to 0)
✦
Registers differ from plain flip-flop banks only in how data is organised: 
as a stored word with defined I/O behaviour
✦
Building block for: CPU register files, pipeline stage latches, the 
Program Counter, and every shift register on the next slides
Are registers made of flip-flops? Yes — always. Everything from here builds on this one fact.

<!-- page 5 -->
A2 · DATA FORMATS & CLASSIFICATION
LAB 06  ·  5
Data Formats and Classification of Registers
Every register is classified by how data enters and how it is read back out.
✦
Serial format: bits arrive/leave one at a time, on successive clock 
edges, over a single wire
✦
Parallel format: all bits arrive/leave together, in one clock edge, over 
n wires
Mode
Input
Output
Typical Use
SISO
Serial
Serial
Pure delay line, data buffering
SIPO
Serial
Parallel
Serial-to-parallel conversion 
(e.g. UART receive)
PISO
Parallel
Serial
Parallel-to-serial conversion 
(e.g. UART transmit)
PIPO
Parallel
Parallel
Ordinary buffer register with 
load enable
Bidirectional and Universal registers (slides A7–A8) extend this table with a direction/mode control.

<!-- page 6 -->
A3 · SHIFT REGISTER — SISO MODE
LAB 06  ·  6
SISO: Serial-In, Serial-Out
Each flip-flop's Q feeds the next flip-flop's D. Data enters one bit per clock and exits one bit per clock, n cycles later.
✦
Shift-right convention: bit walks FF0 -> FF1 -> FF2 -> FF3, one hop per rising edge.
FILMSTRIP — shifting in 1,0,1,1 (serial_in shown at left of each frame)
t=0 (reset)
0
0
0
0
t=1: in=1
1
0
0
0
t=2: in=0
0
1
0
0
t=3: in=1
1
0
1
0
t=4: in=1
1
1
0
1
FF3 = serial_out
always @(posedge clk) begin
  q <= {q[2:0], serial_in};   // shift right: q3<-q2<-q1<-q0<-serial_in
end
assign serial_out = q[3];      // read one bit out, one bit at a time
After 4 clocks the input word has fully entered — but you can only read it 1 bit at a time out of serial_out.

<!-- page 7 -->
A3 · SHIFT REGISTER — SISO MODE
LAB 06  ·  6
SISO: Serial-In, Serial-Out
Each flip-flop's Q feeds the next flip-flop's D. Data enters one bit per clock and exits one bit per clock, n cycles later.

<!-- page 8 -->
A4 · SHIFT REGISTER — SIPO MODE
LAB 06  ·  7
SIPO: Serial-In, Parallel-Out
Same shifting chain as SISO — the difference is purely in how you read the output: tap every flip-flop's Q at once.
FILMSTRIP — same 1,0,1,1 input, but every Q is available immediately (parallel taps)
t=0
0
0
0
0
t=1
1
0
0
0
q[3:0]=0001 readable now
t=2
0
1
0
0
q[3:0]=0010
t=3
1
0
1
0
q[3:0]=0101
t=4
1
1
0
1
q[3:0]=1011 (full word)
✦
Used to reassemble a serial stream (UART RX, SPI MISO) back into a 
parallel word for the rest of the system
✦
No extra hardware vs SISO — it is the SAME circuit; the four Q outputs 
were always there
✦
This is exactly the sipo_reg circuit you'll build in Exercise Q3
module sipo_reg(
  input clk, sin,
  output reg [3:0] q);
  always @(posedge clk)
    q <= {q[2:0], sin};
endmodule  // q IS the parallel out

<!-- page 9 -->
A4 · SHIFT REGISTER — SIPO MODE
LAB 06  ·  7
SIPO: Serial-In, Parallel-Out
Same shifting chain as SISO — the difference is purely in how you read the output: tap every flip-flop's Q at once.

<!-- page 10 -->
A5 · SHIFT REGISTER — PISO MODE
LAB 06  ·  8
PISO: Parallel-In, Serial-Out
Load an entire word in one clock edge, then shift it out one bit per clock — needs a 2:1 mux in front of every D input.
FILMSTRIP — load 1011 in one edge, then shift out right-to-left
LOAD=1: t0
1
0
1
1
parallel word captured
LOAD=0: t1
0
1
0
1
sout=1 (old q0)
LOAD=0: t2
0
0
1
0
sout=1
LOAD=0: t3
0
0
0
1
sout=0
LOAD=0: t4
0
0
0
0
sout=1 -> word out
✦
Each flip-flop's D input is a MUX: LOAD=1 selects the parallel data bit, 
LOAD=0 selects the neighbour's Q (shift)
✦
This is the mirror image of PIPO's load-enable idea, combined with 
SISO's shifting idea
✦
Classic use: convert a wide parallel bus into a narrow serial line (e.g. 
driving an SPI shift-out chip)
always @(posedge clk) begin
  if (load) q <= d;              // parallel load
  else      q <= {1'b0, q[3:1]}; // shift right
end
assign sout = q[0];

<!-- page 11 -->
A5 · SHIFT REGISTER — PISO MODE
LAB 06  ·  8
PISO: Parallel-In, Serial-Out
Load an entire word in one clock edge, then shift it out one bit per clock — needs a 2:1 mux in front of every D input.

<!-- page 12 -->
A6 · SHIFT REGISTER — PIPO MODE
LAB 06  ·  9
PIPO: Parallel-In, Parallel-Out
No shifting at all — every bit loads and reads together. This is simply a load-enable register (Slide A1) wearing the 'shift register' family name.
✦
On a clock edge with LOAD=1, all n bits update simultaneously from d[n-1:0]
✦
With LOAD=0, the register holds — no shifting, no serial ports at all
✦
It's grouped with the shift-register family because it shares the same D-flip-flop-row hardware, 
just without the neighbour-to-neighbour wiring
✦
This is the exact behaviour tested in Exercise Q1 and Q2 (8-bit register, with and without 
synchronous reset)
always @(posedge clk)
  if (load)
    q <= d;
  // else: hold
Compare to A3 (SISO): same register skeleton, different D-input wiring — neighbour's Q vs. an external bus.

<!-- page 13 -->
A6 · SHIFT REGISTER — PIPO MODE
LAB 06  ·  9
PIPO: Parallel-In, Parallel-Out
No shifting at all — every bit loads and reads together. This is simply a load-enable register (Slide A1) wearing the 'shift register' family name.

<!-- page 14 -->
SECTION B
LAB 06  ·  12
Counters
A counter is a register that always overwrites itself with the next count value — no external data input needed.
1
Asynchronous
Ripple counters — up, down, 
up/down.
2
Synchronous
Excitation-table design method; 
2/3/4-bit up/down.
3
Ring Counter
One '1' circulates through n flip-flops.
4
Johnson Counter
Complemented feedback — 2n 
unique states.

<!-- page 15 -->
B1 · ASYNCHRONOUS COUNTERS
LAB 06  ·  13
Asynchronous (Ripple) Up Counter — 2-Bit
Each flip-flop toggles (T=1) using the PREVIOUS flip-flop's Q as its own clock — the count ripples through, stage by stage.
✦
Only FF0 sees the real clock; FF1 is clocked by FF0's Q, FF2 by FF1's Q, 
and so on
✦
Every stage is wired T=1, so it simply toggles every time it is clocked
✦
This reproduces the same divide-by-2 chain from Lecture 6 — reading it 
as bits IS counting
✦
Simple to build (no extra logic gates) but has ripple delay — real count 
is only valid after all stages settle
FILMSTRIP — 2-bit ripple up counter (Q1 Q0), 4 clock edges
start
0
0
clk 1
0
1
clk 2
1
0
clk 3
1
1
Q0 toggles every clock; Q1 toggles only when Q0 falls 1->0 — exactly like a divide-by-2 chain.

<!-- page 16 -->
B2 · ASYNCHRONOUS COUNTERS (CONT.)
LAB 06  ·  14
3-Bit & 4-Bit Ripple Counters, and Their Speed Limit
The 2-bit pattern extends directly: add one more T flip-flop, clocked by the previous stage's Q, per extra bit.
✦
3-bit: FF0 -> FF1 -> FF2, counts 000 through 111, then wraps
✦
4-bit: one more stage, counts 0000 through 1111 (MOD-16)
✦
In general, n ripple stages count MOD-2^n and divide the input clock by 
2^n
After edge
Q3 Q2 Q1 Q0
Value
before
0 1 1 1
7 (correct)
+1 tpd
0 1 1 0
6 (wrong, transient)
+2 tpd
0 1 0 0
4 (wrong, transient)
+4 tpd
1 0 0 0
8 (correct at last)
THE SPEED LIMIT
t_settle = n × t_pd
f_max = 1 / (n × t_pd)
Any circuit reading the count while it ripples — a comparator, a memory 
address bus — briefly sees the wrong value. At t_pd = 10 ns, a 4-bit ripple 
counter tops out near 25 MHz; a modern CPU clock is ~3 GHz. This is 
exactly why synchronous counters (next slides) exist.

<!-- page 17 -->
B2 · ASYNCHRONOUS COUNTERS (CONT.)
LAB 06  ·  14
3-Bit & 4-Bit Ripple Counters, and Their Speed Limit
The 2-bit pattern extends directly: add one more T flip-flop, clocked by the previous stage's Q, per extra bit.

<!-- page 19 -->
B4 · DESIGN OF SYNCHRONOUS COUNTERS
LAB 06  ·  16
How to Design a Synchronous Counter
Every flip-flop shares the real clock; combinational logic in front decides each flip-flop's next input.
1
Write the state (count) sequence you want, e.g. 00 -> 01 -> 10 -> 11 -> 00
2
Build a present-state / next-state table from that sequence
3
For each flip-flop, use its excitation table (Lecture 6) to find what input makes that Q -> Q' transition
4
K-map each flip-flop's input as a function of the present-state bits
5
Wire the resulting gates to each flip-flop's input; all flip-flops still share one clock
This is the same 6-step FSM design flow from Lecture 6 — a counter is just an FSM whose states happen to be binary numbers.

<!-- page 20 -->
B5 · 2-BIT SYNCHRONOUS UP COUNTER
LAB 06  ·  17
Worked Example: 2-Bit Synchronous Up Counter
Q1 Q0
Next Q1 Q0
T1
T0
0 0
0 1
0
1
0 1
1 0
1
1
1 0
1 1
0
1
1 1
0 0
1
1
✦
T0 = 1 always -> Q0 toggles every clock (same as the ripple LSB)
✦
T1 = Q0 -> Q1 only toggles when Q0 was 1 the previous edge
✦
Both flip-flops now share the SAME real clock — no ripple delay
module up2 (
  input clk, rst,
  output reg [1:0] q
);
  wire T0 = 1'b1;
  wire T1 = q[0];
  always @(posedge clk) begin
    if (rst) q <= 2'b00;
    else begin
      q[0] <= q[0] ^ T0;
      q[1] <= q[1] ^ T1;
    end
  end
endmodule

<!-- page 21 -->
B6 · 3-BIT SYNCHRONOUS UP COUNTER
LAB 06  ·  18
3-Bit Synchronous Up Counter — the General Rule
Extending the 2-bit result reveals the pattern used for any width.
THE RULE
T0 = 1
T1 = Q0
T2 = Q0 · Q1
A bit toggles exactly when every bit below it is 1 — identical to the 
ripple-counter rule from Lecture 6, just computed combinationally instead of 
chained through real hardware clocking.
module up3 (
  input clk, rst,
  output reg [2:0] q
);
  always @(posedge clk) begin
    if (rst) q <= 3'b000;
    else     q <= q + 3'b001;
    // synthesiser derives
    // T0/T1/T2 automatically
    // from the '+1' -- this
    // is why real designs
    // write q+1, not manual
    // T-equations.
  end
endmodule

<!-- page 22 -->
B7 · SYNCHRONOUS UP/DOWN COUNTER
LAB 06  ·  19
3-Bit & 4-Bit Synchronous Up/Down Counter
Add one control input; the next-state adder now adds +1 or -1 depending on it — everything else is unchanged.
✦
up_down = 1 -> q <= q + 1 (counts up, wraps MAX -> 0)
✦
up_down = 0 -> q <= q - 1 (counts down, wraps 0 -> MAX)
✦
Still fully synchronous: one clock, one clean transition per edge
✦
This is exactly the difference between Exercise Q5 (up) and Q6 (down) 
later in this deck
module updown4 (
  input clk, rst, up_down,
  output reg [3:0] q
);
  always @(posedge clk) begin
    if (rst) q <= 4'b0000;
    else if (up_down)
      q <= q + 4'b0001;
    else
      q <= q - 4'b0001;
  end
endmodule

<!-- page 23 -->
B8 · RING COUNTER
LAB 06  ·  20
Ring Counter
A shift register (SISO-style) with its output fed back to its own input — a single 1 circulates forever.
✦
n flip-flops, connected exactly like a shift register, but Q(last) feeds 
back to D(first)
✦
Preset exactly one flip-flop to 1 and clear the rest — that single 1 then 
walks around the ring, one position per clock
✦
n flip-flops give exactly n unique output states (one-hot) — no 
decoding logic needed to know which state you're in
✦
Used for simple round-robin sequencing: LED chasers, one-hot state 
machines, simple timing generators
FILMSTRIP — 4-bit ring counter, one 1 circulating
t0
1
0
0
0
t1
0
1
0
0
t2
0
0
1
0
t3
0
0
0
1
always @(posedge clk)
  if (rst) q <= 4'b0001;   // preset one 1
  else     q <= {q[2:0], q[3]}; // feedback

<!-- page 24 -->
B8 · RING COUNTER
LAB 06  ·  20
Ring Counter
A shift register (SISO-style) with its output fed back to its own input — a single 1 circulates forever.

<!-- page 25 -->
B10 · COUNTER FAMILY COMPARISON
LAB 06  ·  22
Ripple vs Synchronous vs Ring vs Johnson
Counter
Clocking
States (n stages)
Extra Logic
Best For
Ripple (async)
Chained
2^n
None
Cheap, low-speed 
dividers
Synchronous
Shared
2^n
Next-state gates/adder
Any speed-critical count 
(PC, timers)
Ring
Shared
n
None (just feedback)
One-hot sequencing, LED 
chasers
Johnson
Shared
2n
None (complemented 
feedback)
More states than Ring, 
still glitch-free
All four are the same skeleton — a row of flip-flops with a shared clock — differing only in what feeds each D input.

<!-- page 26 -->
SECTION C
LAB 06  ·  23
Verilog Build Exercises
Six designs, drawn directly from the register / shift-register / counter theory just covered.
1-2
Registers
Load-enable, then add synchronous reset.
3-4
Shift Registers
SIPO, then PISO.
5-6
Counters
4-bit synchronous up, then down.

<!-- page 27 -->
WRAP-UP
LAB 06  ·  30
Key Takeaways
Two theory blocks, one skeleton each.
01
A register is n flip-flops sharing a clock; shift registers just wire neighbour-to-neighbour (SISO/SIPO/PISO/PIPO), and can add direction (bidirectional) or full 
mode-select (universal).
02
A ripple counter chains flip-flop clocks together — cheap, but the count is briefly wrong while it settles (ripple delay).
03
A synchronous counter shares one real clock; combinational logic computes each flip-flop's next input, so the whole count is valid the instant after the edge.
04
Ring and Johnson counters are shift registers with feedback — n states (Ring) or 2n states (Johnson), no decoding logic needed.
05
Every Verilog exercise in this lab is one of these skeletons: an if/else inside always @(posedge clk) — only the next-state expression changes.

<!-- page 28 -->
Thanks 
for 
watching!

### L09 · Counters, 4-bit Synchronous Up-Counter Design, Synchronous Counters, Asynchronou ... (07 Sep 2026)
_Topics: Counters, Shift Registers, 4-bit Synchronous Up-Counter Design, Synchronous Counters, Asynchronous (Ripple) Counters, SISO, SIPO, PISO, PIPO_

#### Whiteboard

<!-- page 1 -->
Lab: 0110 
Shift Registers & Counters - 
Verilog
CSA222: Modern Computer Architecture
From Flip-Flops to Sequencing Circuits

<!-- page 2 -->
EXERCISE 1 OF 6
LAB 06  ·  24
Q1
8-bit Register with Load Enable
PROBLEM
✦
Write reg8_load: inputs clk, load, d[7:0]; output q[7:0].
✦
On a rising edge: if load=1, capture d into q.
✦
If load=0, q holds its previous value (not X, not 0).
✦
No reset pin required for this exercise.
SOLUTION
module register_8bit (
    input        clk,
    input        ld,
    input  [7:0] d,
    output reg [7:0] q
);
    always @(posedge clk) begin
        if (ld)
            q <= d;
    end
endmodule

<!-- page 3 -->
EXERCISE 2 OF 6
LAB 06  ·  25
Q2
8-bit Register with Synchronous Reset
PROBLEM
✦
Extend Q1: add a synchronous rst input.
✦
On a rising edge, if rst=1, q clears to 8'b0 — regardless of 
load.
✦
Priority order: rst beats load beats hold.
✦
rst only takes effect on a clock edge (NOT 
asynchronous).
SOLUTION
module register_8bit_rst (
    input            clk,
    input            rst,
    input            ld,
    input      [7:0] d,
    output reg [7:0] q
);
    always @(posedge clk) begin
        if (rst)
            q <= 8'b00000000;
        else if (ld)
            q <= d;
    end
endmodule

<!-- page 4 -->
EXERCISE 3 OF 6
LAB 06  ·  26
Q3
SIPO Shift Register
PROBLEM
✦
Write sipo_reg: a 4-bit Serial-In, Parallel-Out shift 
register.
✦
Inputs: clk, sin (1 bit). Output: q[3:0] (parallel).
✦
Each rising edge: shift q left by one, load sin into bit 0.
✦
After 4 clocks, q[3:0] holds the last 4 bits received.
SOLUTION
module sipo (
    input        clk,
    input        rst,
    input        d_in,
    output reg [3:0] q
);
    always @(posedge clk) begin
        if (rst)
            q <= 4'b0000;
        else begin
            q[3] <= q[2];
            q[2] <= q[1];
            q[1] <= q[0];
            q[0] <= d_in;
        end
    end
endmodule

<!-- page 5 -->
EXERCISE 4 OF 6
LAB 06  ·  27
Q4
PISO Shift Register
PROBLEM
✦
Write piso_reg: a 4-bit Parallel-In, Serial-Out shift 
register.
✦
Inputs: clk, load, d[3:0]. Output: sout (1 bit).
✦
If load=1 on a clock edge, capture d (parallel load).
✦
If load=0, shift right each edge; output the LSB on sout.
SOLUTION
module piso (
    input            clk,
    input            rst,
    input            sh_ld,
    input      [3:0] d,
    output reg [3:0] q,
    output           d_out
);
    assign d_out = q[0];
    always @(posedge clk) begin
        if (rst)
            q <= 4'b0000;
        else if (!sh_ld)
            q <= d;
        else begin
            q[0] <= q[1];
            q[1] <= q[2];
            q[2] <= q[3];
            q[3] <= 1'b0;
        end
    end
endmodule

<!-- page 6 -->
EXERCISE 5 OF 6
LAB 06  ·  28
Q5
4-bit Synchronous Up Counter
PROBLEM
✦
Write up_counter4: a 4-bit synchronous up counter.
✦
Inputs: clk, rst, en. Output: q[3:0].
✦
On a rising edge: if rst=1, q clears to 0000.
✦
Else if en=1, q increments by 1; else, q holds.
✦
Must wrap 1111 -> 0000 with no special-case code.
SOLUTION
module up_counter4 (
  input clk, rst, en,
  output reg [3:0] q
);
  always @(posedge clk) begin
    if (rst)
      q <= 4'b0000;
    else if (en)
      q <= q + 4'b0001;  // wraps
                         // for free:
                         // 1111+1
                         //  =0000
  end
endmodule

<!-- page 7 -->
EXERCISE 6 OF 6
LAB 06  ·  29
Q6
4-bit Synchronous Down Counter
PROBLEM
✦
Write down_counter4: a 4-bit synchronous down 
counter.
✦
Inputs: clk, rst, en. Output: q[3:0].
✦
On a rising edge: if rst=1, q loads to 1111 (its MAX, not 
0).
✦
Else if en=1, q decrements by 1; else, q holds.
✦
Must wrap 0000 -> 1111 with no special-case code.
SOLUTION
module down_counter4 (
  input clk, rst, en,
  output reg [3:0] q
);
  always @(posedge clk) begin
    if (rst)
      q <= 4'b1111;   // reset to
                      // MAX, so it
                      // has room
                      // to count
                      // down
    else if (en)
      q <= q - 4'b0001;  // wraps
                         // 0000-1
                         //  =1111
  end
endmodule

<!-- page 8 -->
WRAP-UP
LAB 06  ·  30
Key Takeaways
Two theory blocks, one skeleton each.
01
A register is n flip-flops sharing a clock; shift registers just wire neighbour-to-neighbour (SISO/SIPO/PISO/PIPO), and can add direction (bidirectional) or full 
mode-select (universal).
02
A ripple counter chains flip-flop clocks together — cheap, but the count is briefly wrong while it settles (ripple delay).
03
A synchronous counter shares one real clock; combinational logic computes each flip-flop's next input, so the whole count is valid the instant after the edge.
04
Ring and Johnson counters are shift registers with feedback — n states (Ring) or 2n states (Johnson), no decoding logic needed.
05
Every Verilog exercise in this lab is one of these skeletons: an if/else inside always @(posedge clk) — only the next-state expression changes.

<!-- page 9 -->
Thanks 
for 
watching!

### L11 · Sequence Detector, SRAM vs DRAM & Memory Stack, Beyond Register Files, SRAM, 6T  ... (14 Sep 2026)

#### Lab8_Sequence_Detector_FSMs.pdf

<!-- page 1 -->
CSA222 -- Modern Computer Architecture
Module 7: Register Files & Finite State Machines
Lab 8
Sequence Detector FSMs
Moore & Mealy -- Overlap & Non-Overlap
Detecting the pattern 1011 in a serial bit stream:
four correct hardware designs, four different engineering trade-offs.
1
0
1
1
0
1
1
0
Cover illustration – IN = 10110110, two overlapping 1011 matches highlighted
Estimated duration: 2 lab sessions
|
Prerequisites: Lectures on FSM design, Moore vs. Mealy machines

<!-- page 2 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
Learning Objectives
Learning Objectives
By the end of this lab, you will be able to:
• Derive an overlap-aware FSM transition table for a fixed bit pattern using the failure-
function method
• Explain, with a concrete transition, exactly what changes between an overlapping and a
non-overlapping sequence detector
• Implement both Mealy-type (output on transition) and Moore-type (output on state) FSMs
in synthesizable Verilog
• Simulate all four designs against a shared test vector and correctly predict/verify the num-
ber and timing of detected matches
Background
Background
Fixed bit-pattern detection in a live serial stream is not a textbook toy problem – it is the
exact hardware task behind telecom frame synchronization. The DS1/T1 superframe stan-
dard locates frame boundaries using the 6-bit sync pattern 001011 (and its cyclic rotations);
SONET uses the framing byte 11110110. Any hardware that must find such a pattern –
possibly with overlapping occurrences – needs exactly the kind of FSM you will build in this
lab.
In this lab the target pattern is 1011. Two independent design decisions produce four legiti-
mate, distinct hardware implementations:
1. Mealy vs. Moore – does the detected-match signal come out combinationally on the
transition (Mealy, same cycle) or only once the FSM settles into a dedicated “matched”
state (Moore, one cycle later)?
2. Overlap vs. non-overlap – after a match, may the trailing bits of that match be reused
as the start of the next candidate match, or must the search restart from scratch?
Shared Test Stream (use this for all four questions)
IN = 1 0 1 1 0 1 1 0
(one bit per rising clock edge, bit 1 applied first)
Overlapping detectors must report 2 matches: bits 1–4, and bits 4–7 (bit 4 is reused).
Non-overlapping detectors must report 1 match: bits 1–4 only.
1
Lab 8

<!-- page 3 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
1 Question 1 -- Mealy Machine, Overlap Allowed
Q1: Mealy, overlapping detector
Design and simulate a Mealy-type FSM that detects 1011 on serial input in, asserting out =
1 combinationally, in the same clock cycle the 4th matching bit arrives. Overlapping matches
must be permitted: a 1 that completes one match may simultaneously begin the next.
S0
S1
S2
S3
1/0
0/0
1/0
0/0
1/0
0/0
0/0
1/1
Figure 1 – Q1 state diagram: Mealy, overlap allowed (amber = the overlap-defining transition)
Verified transition table
State
in = 0
in = 1
S0
S0 / 0
S1 / 0
S1
S2 / 0
S1 / 0
S2
S0 / 0
S3 / 0
S3
S2 / 0
S1 / 1
1
module mealy_overlap (
2
input
wire clk,
3
input
wire rst,
4
input
wire in,
5
output reg
out
6
);
7
localparam S0=2'b00, S1=2'b01, S2=2'b10, S3=2'b11;
8
reg [1:0] state, next_state;
9
10
always @(posedge clk or posedge rst) begin
11
if (rst) state <= S0;
12
else
state <= next_state;
13
end
14
15
always @(∗) begin
16
next_state = S0;
17
out
= 1'b0;
18
case (state)
19
S0: next_state = in ? S1 : S0;
20
S1: next_state = in ? S1 : S2;
21
S2: next_state = in ? S3 : S0;
22
S3: begin
23
if (in) begin
2
Lab 8

<!-- page 4 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
24
next_state = S1;
// overlap: reuse the matching '1'
25
out
= 1'b1; // Mealy: asserted this same cycle
26
end else begin
27
next_state = S2;
28
end
29
end
30
endcase
31
end
32
endmodule
Listing 1: mealy_overlap.v
Verified Result
On the shared stream, out pulses on the 4th and 7th applied bits – 2 matches, both in the
same cycle the triggering bit is applied.
2 Question 2 -- Mealy Machine, Non-Overlapping
Q2: Mealy, non-overlapping detector
Same Mealy structure as Q1, but on detecting a match, discard the matching tail entirely
and restart the search from S0 – no bit may be reused to begin the next candidate match.
S0
S1
S2
S3
1/0
0/0
1/0
0/0
1/0
0/0
0/0
1/1
Figure 2 – Q2 state diagram: Mealy, no overlap (amber = full reset to S0 on match, the only edge
that differs from Figure 1)
Verified transition table
State
in = 0
in = 1
S0
S0 / 0
S1 / 0
S1
S2 / 0
S1 / 0
S2
S0 / 0
S3 / 0
S3
S2 / 0
S0 / 1
1
module mealy_nooverlap (
2
input
wire clk,
3
input
wire rst,
3
Lab 8

<!-- page 5 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
4
input
wire in,
5
output reg
out
6
);
7
localparam S0=2'b00, S1=2'b01, S2=2'b10, S3=2'b11;
8
reg [1:0] state, next_state;
9
10
always @(posedge clk or posedge rst) begin
11
if (rst) state <= S0;
12
else
state <= next_state;
13
end
14
15
always @(∗) begin
16
next_state = S0;
17
out
= 1'b0;
18
case (state)
19
S0: next_state = in ? S1 : S0;
20
S1: next_state = in ? S1 : S2;
21
S2: next_state = in ? S3 : S0;
22
S3: begin
23
if (in) begin
24
next_state = S0;
// full reset, no overlap reuse
25
out
= 1'b1;
26
end else begin
27
next_state = S2;
28
end
29
end
30
endcase
31
end
32
endmodule
Listing 2: mealy_nooverlap.v
Verified Result
On the shared stream, out pulses only on the 4th applied bit – 1 match. The FSM has fully
reset by bit 5 and must re-climb S0→S1→S2→S3 before it can match again, so the bit-7
candidate is never detected.
3 Question 3 -- Moore Machine, Overlap Allowed
Q3: Moore, overlapping detector
Design a Moore-type FSM for the same overlap-allowed policy as Q1, where out is a pure
function of the current state. This requires a 5th state S4 that is entered on a match; S4’s own
outgoing transitions must mirror S1’s, since after outputting the match the FSM’s position
for future matching is equivalent to “just matched a single 1”.
4
Lab 8

<!-- page 6 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
S0
S1
S2
S3
S4
out=1
1
0
1
1
0
1
0
0
1
0
Figure 3 – Q3 state diagram: Moore, overlap allowed (S4 = the unique output=1 state; amber
edge is the one that differs from Figure 4)
Verified transition table
State
in = 0
in = 1
Output
S0
S0
S1
0
S1
S2
S1
0
S2
S0
S3
0
S3
S2
S4
0
S4
S2
S1
1
1
module moore_overlap (
2
input
wire clk,
3
input
wire rst,
4
input
wire in,
5
output wire out
6
);
7
localparam S0=3'd0, S1=3'd1, S2=3'd2, S3=3'd3, S4=3'd4;
8
reg [2:0] state, next_state;
9
10
always @(posedge clk or posedge rst) begin
11
if (rst) state <= S0;
12
else
state <= next_state;
13
end
14
15
always @(∗) begin
16
case (state)
17
S0: next_state = in ? S1 : S0;
18
S1: next_state = in ? S1 : S2;
19
S2: next_state = in ? S3 : S0;
20
S3: next_state = in ? S4 : S2;
21
S4: next_state = in ? S1 : S2; // mirrors S1's transitions
22
default: next_state = S0;
23
endcase
24
end
25
26
assign out = (state == S4); // pure function of state: Moore
27
endmodule
Listing 3: moore_overlap.v
5
Lab 8

<!-- page 7 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
Verified Result
Same 2 matches as Q1, but each out pulse appears one clock cycle later than its Q1 coun-
terpart – registered on the state, not combinational on the transition.
4 Question 4 -- Moore Machine, Non-Overlapping
Q4: Moore, non-overlapping detector
Same Moore structure as Q3, but S4’s outgoing transitions now mirror S0’s (full reset one
cycle after the match) – the Moore parallel to Q2’s non-overlap policy.
S0
S1
S2
S3
S4
out=1
1
0
1
1
0
1
0
0
1
0
Figure 4 – Q4 state diagram: Moore, no overlap (amber edge: S4 falls all the way back to S0
instead of S2)
Verified transition table
State
in = 0
in = 1
Output
S0
S0
S1
0
S1
S2
S1
0
S2
S0
S3
0
S3
S2
S4
0
S4
S0
S1
1
1
module moore_nooverlap (
2
input
wire clk,
3
input
wire rst,
4
input
wire in,
5
output wire out
6
);
7
localparam S0=3'd0, S1=3'd1, S2=3'd2, S3=3'd3, S4=3'd4;
8
reg [2:0] state, next_state;
9
6
Lab 8

<!-- page 8 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
10
always @(posedge clk or posedge rst) begin
11
if (rst) state <= S0;
12
else
state <= next_state;
13
end
14
15
always @(∗) begin
16
case (state)
17
S0: next_state = in ? S1 : S0;
18
S1: next_state = in ? S1 : S2;
19
S2: next_state = in ? S3 : S0;
20
S3: next_state = in ? S4 : S2;
21
S4: next_state = in ? S1 : S0; // mirrors S0's transitions
22
default: next_state = S0;
23
endcase
24
end
25
26
assign out = (state == S4);
27
endmodule
Listing 4: moore_nooverlap.v
Verified Result
Only 1 match, one cycle after bit 4 – no second pulse near bit 7, for the same reason as Q2.
5 Testbench Template
Use the following structure for all four modules – instantiate the module under test and reuse this
stimulus:
1
module tb_top;
2
reg clk = 0, rst = 1, in;
3
wire out;
4
integer i;
5
reg [7:0] stream = 8'b10110110; // bit 1 = MSB, applied first
6
7
// Instantiate the design under test, e.g.:
8
// mealy_overlap dut (.clk(clk), .rst(rst), .in(in), .out(out));
9
10
always #5 clk = ~clk;
11
12
initial begin
13
rst = 1; in = 0;
14
@(negedge clk); rst = 0;
15
for (i = 7; i >= 0; i = i −1) begin
16
in = stream[i];
17
@(negedge clk); // sample 'out' just after the clock edge
18
$display("t=%0t␣bit=%b␣out=%b", $time, in, out);
19
end
20
$finish;
21
end
22
endmodule
Listing 5: Shared testbench structure
7
Lab 8

<!-- page 9 -->
CSA222 – Modern Computer Architecture
Module 7: Register Files & FSMs
6 Summary Comparison
Build
Matches on shared stream
Detection timing
Q1: Mealy, overlap
2 (bit 4, bit 7)
Same cycle as 4th bit
Q2: Mealy, no overlap
1 (bit 4)
Same cycle as 4th bit
Q3: Moore, overlap
2 (bit 4, bit 7)
One cycle after each match
Q4: Moore, no overlap
1 (bit 4)
One cycle after match
Deliverables
Deliverables Checklist
□Four synthesizable modules (Q1–Q4), matching the verified transition tables above
□Four testbenches driving the shared stream 10110110
□One waveform screenshot per module, annotated with which bit(s) triggered out = 1
□One-paragraph write-up: for each of the two design axes (Mealy/Moore, overlap/no-
overlap), state in your own words the single structural change in the FSM that causes
the behavioral difference observed in simulation
8
Lab 8

### L13 · SRAM vs DRAM Comparison, Memory Hierarchy, Latency and Capacity Trade-offs, The  ... (21 Sep 2026)
_Topics: Memory Hierarchy, SRAM vs DRAM Comparison, Latency and Capacity Trade-offs, The Memory Wall, Von Neumann vs Harvard Architectures, Von Neumann Architecture, Harvard Architecture, Modified Harvard in Modern CPUs, From Gates to a Complete Machine, Stored-Program Concept, Single Bus and Memory, CISC vs RISC, CISC vs RISC Core Ideas, Historical Context, Compiler Implications and Code Density, Modern Reality - Micro-ops in x86, Trends - RISC-V and AI ISAs, CISC Characteristics, RISC Load-Store Model, VAX and Early CISC, MIPS, SPARC, IBM 801, ARM, x86, RISC-V Emergence, MIPS32 / RISC-V ISA, MIPS Register Set and Conventions, Instruction Formats, RISC-V Modular ISA, R-Format, J-Format, Base RV32I and Extensions (M, A, F, D, C, V), I-Format, Von Neumann Bottleneck_

#### Lab11_MIPS_Assembly.pdf

<!-- page 1 -->
CSA222 · MODERN COMPUTER ARCHITECTURE
LAB 11
MIPS Assembly I:
Machine, Arithmetic & Memory
The toolkit behind Labs 12, 13 and 14
Fetch-execute · registers · syscalls · arithmetic · HI/LO · memory
90-minute hands-on lab · B.Tech CS · Year 3
Anuj Kumar · Newton School of Technology
add $t2,$t0,$t1
000000 01000 01001 01010 00000 100000
0x01095020
one instruction = one 32-bit word

<!-- page 2 -->
PLAN
Run of show: 90 minutes, typing along from minute 24
1
2
3
4
5
6
7
8
9
10
0:00
0:04
0:14
0:24
0:36
0:44
0:52
1:21
1:30
0:56
#
Segment
Min
What happens
1
Hook + roadmap
4
MIPS from Stanford (1984) to RISC-V (2021); how Labs 11–14 fit together
2
Machine model
10
CPU, memory, load/store, fetch-decode-execute, registers
3
Sheets and formats
10
The two reference sheets; R/I/J formats; encode and decode by hand
4
Demo 1
12
First program, syscalls (print, read, exit), pseudo-instructions
5
Demo 2
8
Arithmetic, HI/LO for mult/div, logic and shifts
6
Demo 3
8
Scalar memory: la vs lw, sw, base + offset, alignment
7
Bug hunt
4
Five broken snippets, pairs
8
Hands-on
25
Four practice problems + three finishers; you circulate
9
Debrief
6
Reference solutions, cold calls
10
Exit
3
Exit ticket; preview of Lab 12
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
2 / 38

<!-- page 3 -->
PLAN
By minute 90 you can…
1. Explain fetch, decode, execute and say what the PC does after
every instruction.
2. Name the registers by convention and use only $t, $a, $v, $zero
today.
3. Write a .data/.text program that reads integers, computes,
prints and exits via syscall.
4. Use add/sub/addi, mult/div with HI/LO, logic and shifts; know
which instructions are pseudo.
5. Tell la (an address) from lw (a value); reach the next word with
4($t0).
6. Encode and decode one R-type and one I-type instruction by
hand.
Open-book lab.
Both reference sheets are open all
90 minutes. Memorise nothing.
Understand everything.
Practice problems today
• Hello, MIPS!
• Add Two Inputs
• Quotient and Remainder
• Swap Two Memory Variables
Finishers: Celsius to Fahrenheit,
Multiply by 10 with shifts,
(a + b)(a −b)
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
3 / 38

<!-- page 4 -->
PLAN
The four-lab arc: today is the toolkit for everything after
LAB 11 · today
MIPS Assembly I
Machine model, registers,
syscalls, arithmetic, HI/LO,
logic, scalar memory.
Practice
Hello, MIPS! · Add Two
Inputs · Quotient and
Remainder · Swap Two
Memory Variables
Unlocks
li la move add sub
addi mult div mfhi
mflo and or sll srl lw
sw syscall
LAB 12
Memory and arrays
Base register, offsets,
pointer stride 4, first
counted loop.
Portal
Access First Element of an
Array · Sum of Array
Elements · Maximum
Element in an Array
Unlocks
lw 4($t0), sll indexing,
slt, ble/bge, j
LAB 13
Branching, loops and
conditional logic
Every control-flow shape,
built on beq/bne/slt.
Portal
A Number Is Even or Odd ·
Find the Sum from 0 to 9 ·
Iterative Factorial of 5 ·
Iterative Factorial of Any
Number
Unlocks
beq bne blt bgt, andi
parity, mult/mflo loops
LAB 14
Functions, stack frames
and recursion
Calling convention, $ra,
$sp, saved registers.
Portal
Recursive Factorial ·
Recursive Fibonacci
Unlocks
jal jr, $ra, $sp,
$s0--$s7, push/pop
frames
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
4 / 38

<!-- page 5 -->
1 · HOOK
MIPS: 41 years from a Stanford lab to RISC-V
1984
MIPS founded
at Stanford by
Hennessy & Rowen
1988
SGI adopts MIPS
for its workstations
1992
Silicon Graphics
acquires MIPS
1994
PlayStation:
R3000A-compatible
core, 33.8688 MHz
1996
Nintendo 64: NEC
VR4300, 93.75
MHz, 64-bit
2000
PS2 Emotion Engine
(R5900), 294.912 MHz
2013
Imagination buys
MIPS; Tallwood
2017; Wave 2018
2021
Wave exits
bankruptcy; abandons
MIPS ISA for RISC-V
2025
GlobalFoundries
acquires MIPS (July)
Why we start here. Fixed 32-bit instructions,
three formats, 32 registers, load/store: the
cleanest teaching ISA ever shipped. Hennessy and
Patterson shared the 2017 Turing Award for this
philosophy; RISC-V descends from it and we use
both.
Chip War lens. An instruction set is a strategic
asset, not just a technical artefact. ARM won
mobile; MIPS lost it, sold itself four times, then
abandoned its own ISA in 2021.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
5 / 38

<!-- page 6 -->
1 · HOOK
Where MIPS shipped: real chips, real clock speeds
Product
Year
CPU
Clock
Fact
SGI workstations
1988
MIPS R-series
—
Jurassic Park, T2, The
Abyss
MIPS R3000/R3000A
1988+
R3000A
up to 40 MHz
About 32 MIPS
Sony PlayStation
1994
R3000A-compatible (LSI)
33.8688 MHz
No FPU, no MMU; 32-bit
Nintendo 64
Jun 1996
NEC VR4300 (R4300i family)
93.75 MHz
64-bit; about 125 MIPS
Sony PlayStation 2
2000
Emotion Engine R5900 (Sony,
Toshiba)
294.912 MHz
2 × 16 MB RDRAM
Embedded
1990s+
Routers, printers, automotive
—
Licensable core
Lab sanity check. At ideal CPI = 1 one instruction
takes 29.5 ns on the PlayStation CPU (33.8688
MHz). Program A today, about 12 real instructions,
runs in roughly 0.35 µs.
From this room. Every app on every phone is, at
the bottom, a stream of 32-bit words like the ones
we decode today.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
6 / 38

<!-- page 7 -->
2 · MACHINE MODEL
The machine: two boxes and a narrow road between them
CPU
PC
address of the next instruction
32 registers × 32 bit = 128 bytes
$zero $at $v0-$v1 $a0-$a3 $t0-$t7
$s0-$s7 $t8-$t9 $k0-$k1 $gp $sp $fp $ra
HI LO
64-bit result of mult / div
ALU
operands come from registers only
MEMORY
byte-addressable, 232 bytes = 4 GiB
.text
instructions (fetched via PC)
.data
variables, arrays, strings
heap ↑
free space
↓stack
stack (grows toward low addresses)
$sp points at its top
low
high
fetch
lw / sw
Memory is byte-addressable: a word is 4 bytes, so consecutive words are 4 apart. Every instruction is exactly
32 bits. The ALU sees registers only: to use memory you load, compute, store.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
7 / 38

<!-- page 8 -->
2 · MACHINE MODEL
Load/store architecture: c = a + b costs four instructions
lw
$t0, a
# 1 memory -> reg
lw
$t1, b
# 2 memory -> reg
add
$t2, $t0, $t1 # 3 reg + reg
sw
$t2, c
# 4 reg -> memory
Why the restriction? Every non-memory
instruction is register-to-register: fixed
32-bit format, fast decode, simple
pipeline. x86 lets ALU instructions read
memory; MIPS does not.
add $t0, var, $t1 is illegal: operands
of add are registers.
MEMORY
REGISTERS
a
b
c
$t0
$t1
$t2
ALU
1
2
3
4
only registers reach the ALU
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
8 / 38

<!-- page 9 -->
2 · MACHINE MODEL
Fetch, decode, execute: the loop the CPU never stops
1 Fetch
Word at address
PC →instruction
register.
PC ←PC+4.
2 Decode
Split op / rs / rt /
rd / funct. Read
two registers.
3 Execute
ALU: add, sub, and,
or; or compute
an address.
4 Memory
lw reads, sw writes.
Everything else
skips this stage.
5 Write back
Result →rd (R-type)
or rt (I-type).
next instruction: PC = PC+4
Instruction
Fetch
Decode
Execute
Memory
Write back
Note
add $t2,$t0,$t1
•
•
•
•
no memory access
lw $t0,4($t1)
•
•
•
•
•
the only instruction that uses all five
sw $t0,4($t1)
•
•
•
•
nothing to write back
beq $t0,$t1,L
•
•
•
may replace PC (Lab 13)
These five stages are the datapath you build in the single-cycle module, and the five pipeline stages afterwards.
Fixed 32-bit instructions make stage 1 trivial: the next instruction is always at PC+4.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
9 / 38

<!-- page 10 -->
2 · MACHINE MODEL
32 registers: names, numbers, and who may destroy what
$zero
0
$at
1
$v0
2
$v1
3
$a0
4
$a1
5
$a2
6
$a3
7
$t0
8
$t1
9
$t2
10
$t3
11
$t4
12
$t5
13
$t6
14
$t7
15
$s0
16
$s1
17
$s2
18
$s3
19
$s4
20
$s5
21
$s6
22
$s7
23
$t8
24
$t9
25
$k0
26
$k1
27
$gp
28
$sp
29
$fp
30
$ra
31
$v0–$v1, $a0–$a3
Return values and arguments. $v0 = syscall service number, $a0 = syscall argument.
$t0–$t9
Temporaries: a callee may destroy them freely. Today we use only these.
$s0–$s7
Saved: a callee must preserve them (Lab 14).
$sp $fp $ra
Stack pointer (grows down), frame pointer, return address written by jal.
$zero, $at
$zero is always 0 (writes ignored). $at is the assembler’s scratch: never use it.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
10 / 38

<!-- page 11 -->
3 · SHEETS AND FORMATS
Two reference sheets, two jobs
Sheet J: JHU CS333 Quick Reference
Sheet K: KTH Reference Sheet v1.12
Strength
Conventions, syscall table, worked examples
Exact semantics, opcode/funct, bit formats
Multiply
mult →HI:LO (64-bit), read with mflo/mfhi
mul rd,rs,rt, 32-bit result (op 28, funct 2)
Pseudo-ops
Lists blt ble bgt bge, li, la, move
Shows real expansions of li, la, ble, move, nop
Syscalls
Full table, services 1–10
None
Directives
.data .text .word .byte .space .asciiz
Adds .align 2, .global, .ascii
Entry label
Uses both main: and __start: in different
examples
Not specified
When they disagree: Sheet K is the hardware
truth, Sheet J is the assembler’s convenience, and
the portal is the final judge.
Both sheets contain small errors (see the errata
slide at the end). Trust, but verify against the
simulator.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
11 / 38

<!-- page 12 -->
3 · SHEETS AND FORMATS
Every instruction is exactly 32 bits: three formats
R-type register arithmetic: add sub and or nor slt sll srl sra jr
op
31–26
rs
25–21
rt
20–16
rd
15–11
shamt
10–6
funct
5–0
I-type one register + 16-bit constant: addi andi ori lw sw lb sb beq bne lui slti
op
31–26
rs
25–21
rt
20–16
immediate
15–0
J-type 26-bit word address: j jal
op
31–26
address
25–0
Fixed width: fetch 4 bytes,
decode while reading registers.
x86 cannot.
rs, rt = the two read ports; rd =
the write port: exactly the
Module 7 register file.
I-type has no rd: the
destination is rt (loads, addi,
lui).
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
12 / 38

<!-- page 13 -->
3 · SHEETS AND FORMATS
Be the assembler: encode add $t2, $t0, $t1
op
000000
0 = R-type
rs
01000
$t0 = 8
rt
01001
$t1 = 9
rd
01010
$t2 = 10
shamt
00000
0
funct
100000
32 = add
0000 0001 0000 1001 0101 0000 0010 0000
0x01095020
Source line
Machine word
li $t0, 7 →addiu $t0,$zero,7
0x24080007
li $t1, 5 →addiu $t1,$zero,5
0x24090005
add $t2, $t0, $t1
0x01095020
Some assemblers emit ori $t0,$zero,7 (0x34080007) for li.
The CPU never sees $t2 or “add”. It sees
bits. The program is a list of 32-bit
numbers in memory.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
13 / 38

<!-- page 14 -->
3 · SHEETS AND FORMATS
Reverse it: decode 0x8D280004
1000 1101 0010 1000 0000 0000 0000 0100
op
100011
35 = lw
rs
01001
$t1 = base
rt
01000
$t0 = dest
immediate
0000000000000100
4 = byte offset
lw $t0, 4($t1)
Which register receives the data? rt. I-type has
no rd, so for loads the destination sits in the rt
slot.
Your turn (30 s): encode addi $t2, $t3, 5.
Answer: op 001000, rs 01011, rt 01010, imm 5 →
0x216A0005
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
14 / 38

<!-- page 15 -->
3 · SHEETS AND FORMATS
Your program is numbers in memory; PC walks through them
Address
Word
Assembly
Fields
PC after
0x00400000
0x24080007
addiu $t0,$zero,7
op 9, rs 0, rt 8, imm 7 (li $t0,7)
0x00400004
0x00400004
0x24090005
addiu $t1,$zero,5
op 9, rs 0, rt 9, imm 5 (li $t1,5)
0x00400008
0x00400008
0x01095020
add $t2,$t0,$t1
op 0, rs 8, rt 9, rd 10, funct 32
0x0040000C
Addresses step by 4 because every instruction is
32 bits. The address 0x00400000 is the usual start
of the text segment in teaching simulators: read it
off your portal’s text view.
Program and data share one memory.
Instructions live in .text, variables in .data. The
CPU cannot tell them apart by looking at bits: only
PC versus lw/sw decides which is which.
(Stored-program idea, von Neumann.)
Why this matters for Labs 12–14: loops (Lab 13) and function calls (Lab 14) are nothing more than instructions
that put a different value into PC.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
15 / 38

<!-- page 16 -->
3 · SHEETS AND FORMATS
Three details every student gets wrong once
1. Sign-extend vs zero-extend the 16-bit
immediate
Sign-extended
addi addiu lw sw lb slti
and branch offsets
Zero-extended
andi ori xori (logic works on
bit patterns)
addi $t0,$t0,-1: imm 0xFFFF →0xFFFFFFFF.
andi $t0,$t1,0xFFFF: mask 0x0000FFFF.
2. lb vs lbu on the byte 0xF0
lb →0xFFFFFFF0 (sign-extend)
lbu →0x000000F0 (zero-extend)
3. “Unsigned” is a misnomer (Sheet K
clarification)
addu / addiu do the same arithmetic as add /
addi. The only difference: they do not trap on
overflow.
$zero buys free instructions
move $t0,$t1 = add zero to $t1
li $t0,7 = addiu $t0,$zero,7
nop = sll $zero,$zero,0 (shift zero into zero)
b L = beq $zero,$zero,L
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
16 / 38

<!-- page 17 -->
4 · DEMO 1: FIRST PROGRAM
Anatomy of a program: two sections, labels, directives
.data
# 1 variables in memory
msg:
.asciiz "Sum = " # 2 null-terminated str
arr:
.word 5, 13, -7
# 3 initialised words
buf:
.space 40
# 4 reserve 40 bytes
.text
# 5 instructions here
.globl main
# 6 export main
main:
li $v0, 10
# 7 entry point
syscall
# 8 exit
Labels always end with a colon. Forget the exit syscall and
the CPU keeps fetching the next bytes in memory as
instructions.
Directive
Meaning
.data / .text
Data segment / code
segment
.asciiz
String plus terminating
zero byte
.ascii
String without terminator
(Sheet K)
.word
4-byte value(s)
.byte
1-byte value(s)
.space X
Reserve X bytes
.align 2
Align to a multiple of 4
.globl / .global
Export a label
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
17 / 38

<!-- page 18 -->
4 · DEMO 1: FIRST PROGRAM
Program A: add two numbers and print the result
.data
msg:
.asciiz "Sum = "
.text
.globl main
main:
li
$t0, 7
# a = 7
li
$t1, 5
# b = 5
add
$t2, $t0, $t1
# sum = a + b
li
$v0, 4
# 4: print string
la
$a0, msg
# $a0 = &msg
syscall
li
$v0, 1
# 1: print int
move
$a0, $t2
# $a0 = sum
syscall
li
$v0, 10
# 10: exit
syscall
Output: Sum = 12
■li loads a constant. Pseudo-instruction: one
real instruction for small values.
■add rd, rs, rt: destination first, then the
two sources.
■la loads the address of msg, not the
characters.
■syscall is not an ALU op: it traps to the OS
layer, which reads $v0 to pick the service.
Predict, then run: sub gives 2; mult+mflo gives 35;
add \n to msg.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
18 / 38

<!-- page 19 -->
4 · DEMO 1: FIRST PROGRAM
syscall: your only window to the outside world (Sheet J)
$v0
Service
Arguments
Result
1
print integer
$a0 = value
—
4
print string
$a0 = address
—
5
read integer
---
$v0
8
read string
$a0 buf, $a1 n+1
—
9
allocate memory
$a0 = bytes
$v0 = addr
10
exit
---
—
Three-beat pattern:
1. li $v0, service
2. move $a0, value
3. syscall
# read an int, print it back
li
$v0, 5
syscall
# value -> $v0
move $a0, $v0
li
$v0, 1
syscall
li
$v0, 10
# always exit
syscall
Classic bug: li $a0, 42 then syscall
with a stale $v0: the wrong service runs.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
19 / 38

<!-- page 20 -->
4 · DEMO 1: FIRST PROGRAM
Pseudo-instructions: what you write vs what the CPU runs
You write
Assembler emits
Why
li $t0, 7
addiu $t0,$zero,7
Constant fits in 16 bits: one instruction
li $t0, 0xabcd1234
lui $at,0xabcd ; ori $t0,$at,0x1234
Immediate is only 16 bits, so two instructions
la $t0, label
lui $at,hi ; ori $t0,$at,lo
32-bit address
lw $t0, var
lui $at,hi(var) ; lw $t0,lo(var)($at)
$at holds the upper half
move $t0, $t1
addu $t0,$zero,$t1
Add zero
b L
beq $zero,$zero,L
Always-taken compare
blt $t0,$t1,L
slt $at,$t0,$t1 ; bne $at,$zero,L
Real MIPS has only beq / bne
bge $t0,$t1,L
slt $at,$t0,$t1 ; beq $at,$zero,L
not (a < b)
ble $t0,$t1,L
slt $at,$t1,$t0 ; beq $at,$zero,L
Sheet K’s own example
nop
sll $zero,$zero,0
Shift zero into zero
Consequence: count real instructions: la costs 2, bge costs 2. The branch rows preview Labs 12 and 13.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
20 / 38

<!-- page 21 -->
5 · DEMO 2: ARITHMETIC AND LOGIC
Arithmetic: registers are your variables
Instruction
Effect
Note
add rd,rs,rt
rd = rs + rt
traps on signed
overflow
addu rd,rs,rt
rd = rs + rt
wraps silently
addi rt,rs,imm
rt = rs + signext(imm)
no subi: use
−imm
sub rd,rs,rt
rd = rs −rt
traps on
overflow
subu rd,rs,rt
rd = rs −rt
wraps silently
mul rd,rs,rt
rd = low 32 bits
Sheet K; HI lost
move rd,rs
rd = rs
pseudo: addu
rd,$zero,rs
Overflow, concretely: 231 −1 = 2,147,483,647 =
0x7FFFFFFF. add with 1 raises an exception; addu
returns 0x80000000 = −2,147,483,648.
x = (a + b) −c
a=7, b=3, c=4
li
$t0, 7
# a
li
$t1, 3
# b
li
$t2, 4
# c
add
$t3, $t0, $t1
# t = a+b
sub
$t3, $t3, $t2
# t = t-c
# $t3 = 6
Variable
Register
a, b, c
$t0, $t1, $t2
temp / result x
$t3 (reused as source and destination)
Destination comes first. A register may be both
source and destination: sub $t3,$t3,$t2 is legal
and common.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
21 / 38

<!-- page 22 -->
5 · DEMO 2: ARITHMETIC AND LOGIC
mult and div: results land in HI and LO
mult $t0, $t1
(32 × 32 →64 bits)
HI bits 63–32
LO bits 31–0
mfhi $t3
mflo $t2
div $t0, $t1
($t0 / $t1)
HI = remainder
LO = quotient
mfhi $t3
mflo $t2
Operation
HI
LO
Reading
100000 × 100000
0x00000002
0x540BE400
product = 10,000,000,000 = 2 · 232 + 1,410,065,408
12! = 479,001,600
0x00000000
0x1C8CFC00
fits in 32 bits: HI is 0
13! = 12! × 13
0x00000001
0x7328CC00
true value 6,227,020,800; LO alone reads 1,932,053,504
17 ÷ 5
2
3
quotient in LO, remainder in HI
−17 ÷ 5
−2
−3
truncates toward zero; remainder takes the dividend’s sign (verify on the
portal)
Lab 13 preview: Iterative Factorial of Any Number
overflows at 13!. HI tells you when. mul rd,rs,rt
keeps only LO, so it cannot warn you.
div by zero gives an undefined result on MIPS (no trap).
Guarding it needs a branch: Lab 13.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
22 / 38

<!-- page 23 -->
5 · DEMO 2: ARITHMETIC AND LOGIC
Logic and shifts: bits in, bits out
8-bit view: a = 1100 1010 (0xCA), b = 0000 1111 (0x0F)
Instruction
Result
Hex
and $t2,$t0,$t1
0000 1010
0x0A
or $t2,$t0,$t1
1100 1111
0xCF
xor $t2,$t0,$t1
1100 0101
0xC5
nor $t2,$t0,$t1
0011 0000
0x30
32-bit view:
Instruction
Result
Meaning
sll $t1,$t0,3
0x00000078
0x0F × 8 = 120
srl $t1,$t0,4
0x0FFFFFFF
$t0 = −16 = 0xFFFFFFF0;
zero fill
sra $t1,$t0,4
0xFFFFFFFF
sign fill: −16/16 = −1
Idioms you will reuse
andi $t1,$t0,1 →parity test (Lab 13:
even/odd)
sll $t1,$t0,2 →×4, index to byte offset
(Lab 12: arrays)
nor $t1,$t0,$zero →bitwise NOT
srl $t1,$t0,26 →extract the opcode field
Decode in code: 0x8D280004 ≫26 = 35 = lw.
Shifts and masks pull fields out of an
instruction word. srl zero-fills, sra sign-fills:
the classic mix-up.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
23 / 38

<!-- page 24 -->
6 · DEMO 3: SCALAR MEMORY
Scalar memory: la gives the address, lw the value, sw writes
la $t0, x
$t0 = B
x = 10
address B
points at
lw $t1, x
x = 10
$t1 = 10
copies value
sw $t1, y
$t1 = 10
y: 20→10
writes value
.data
x:
.word 10
y:
.word 20
.text
la
$t0, x
# $t0 = &x
(address)
lw
$t1, 0($t0)
# $t1 = 10
(value)
lw
$t1, x
# same, via label
The classic bug: la $a0, x then print-integer
prints the address (a large number), not 10. Use
lw $a0, x.
lw $t1, x is a pseudo-instruction: lui
$at,hi(x) then lw $t1,lo(x)($at).
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
24 / 38

<!-- page 25 -->
6 · DEMO 3: SCALAR MEMORY
Program D: update a variable, reach the next word
.data
x:
.word 10
y:
.word 20
.text
.globl main
main:
lw
$t0, x
# $t0 = 10
addi
$t0, $t0, 5
# $t0 = 15
sw
$t0, x
# x = 15
la
$t1, x
# $t1 = &x
lw
$t2, 4($t1)
# $t2 = y = 20
add
$t2, $t2, $t0
# 35
li
$v0, 1
move
$a0, $t2
syscall
# prints 35
li
$v0, 10
syscall
Output: 35
Address
Before
After
B (x)
10
15
B+4 (y)
20
20
Effective address = base register +
signext(offset)
lw $t2, 4($t1) reads address B+4: the
word right after x.
lw $t2, -4($t1) would read the word
before. Negative offsets are fine.
Lab 12 in one sentence: two adjacent words
are the smallest array. Give the base register
a longer list and step it by 4.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
25 / 38

<!-- page 26 -->
6 · DEMO 3: SCALAR MEMORY
Alignment and endianness: two ways memory surprises you
B+0
B+1
B+2
B+3
B+4
B+5
B+6
B+7
lw $t1,0($t0) OK
lw $t1,2($t0) ERROR
A word access needs an address that is a multiple of 4,
or the CPU raises an address error exception. lb/sb
have no such restriction. After a .byte declaration put
.align 2 before the next .word.
Word 0x12345678 stored at B
big-endian
little-endian
12
78
B+0
34
56
B+1
56
34
B+2
78
12
B+3
lb $t1, 0($t0) gives 0x12 (big) or 0x78 (little).
MIPS hardware is bi-endian; the portal
simulator picks one. Network byte order is
big-endian, x86 is little-endian.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
26 / 38

<!-- page 27 -->
7 · BUG HUNT
Bug hunt: one primary bug per snippet (pairs, 3 minutes)
S1 prints nothing / wrong thing
li
$a0, 42
syscall
S4
quotient
and
remainder
swapped
div
$t0, $t1
# 17 / 5
mfhi $s0
# "quotient"
mflo $s1
# "remainder"
S2 prints a huge number, not 42
x: .word 42
...
la
$a0, x
li
$v0, 1
syscall
S5 address error
la
$t0, x
lw
$t1, 2($t0)
S3 prints 0, want 42
li
$t0, 6
li
$t1, 7
mult $t0, $t1
li
$v0, 1
move $a0, $t2
syscall
Rules: find the bug, state the
symptom, fix in one line.
Answers on the next slide.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
27 / 38

<!-- page 28 -->
7 · BUG HUNT
Bug hunt: answers
Root cause
Fix
S1
$v0 never set. syscall runs whatever service
number was left there.
li $v0, 1 before syscall
S2
la loads the address of x; print-integer prints that
address.
lw $a0, x
S3
mult writes HI and LO, not a general register. $t2
was never assigned.
mflo $a0 after mult
S4
Roles reversed: LO holds the quotient (3), HI the
remainder (2).
mflo $s0 ; mfhi $s1
S5
Word load at an address that is not a multiple of 4.
Offsets 0, 4, 8…; lb for bytes
Debugging order used all semester: (1) read the symptom, (2) write the trace table, (3) find the first row that
differs from what you expect, (4) fix that line only.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
28 / 38

<!-- page 29 -->
8 · HANDS-ON
Hands-on: 25 minutes, four practice problems
#
Problem
Tools
Min
Test cases
1
Hello, MIPS!
.asciiz, la, syscall 4
4
prints Hello, MIPS!
2
Add Two Inputs
syscall 5 twice, move, add
7
(3,4) →7; (-5,12) →7
3
Quotient and Remainder
div, mflo, mfhi
8
(17,5) →3, 2; (100,7) →14, 2
4
Swap Two Memory Variables
lw, sw, labels
6
x=10, y=20 →prints 20 then 10
⋆
Celsius to Fahrenheit
mult, div, addi
—
100 →212; 37 →98; −40 →−40
⋆
Multiply by 10 with shifts
sll, add
—
7 →70; −3 →−30
⋆
(a + b)(a −b)
registers as variables
—
(7,3) →40; (2,9) →−77
Before you raise a hand: have a
trace table on paper. I will ask
to see it.
Checkpoints
1:05 problems 1–2 submitted
1:15 problem 3 submitted
1:19 two minutes left
Code craft (10 pts): comments
3, register discipline 2, exit 2,
sensible labels 2, no $at 1
Match the portal’s starter code and output text exactly: one stray space or newline fails the auto-grader.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
29 / 38

<!-- page 30 -->
8 · HANDS-ON
Plans, no code: read the sheet, then write
2. Add Two Inputs
1. syscall 5 →value in $v0
2. Copy it to $t0
3. Read again →$t1
4. add into $t2
5. Print integer, exit
Watch: the second read
overwrites $v0. Copy the first
value out before reading again.
3. Quotient and Remainder
1. Read a, then b
2. div $t0,$t1
3. mflo = quotient
4. mfhi = remainder
5. Print each; newline
between
Watch: LO is the quotient. Try
−17 and 5, then predict before
you run. b = 0 is undefined: Lab
13 guards it.
4. Swap Two Memory
Variables
1. lw x into $t0
2. lw y into $t1
3. sw $t1 into x
4. sw $t0 into y
5. Reload and print x, then y
Watch: if you sw before loading
both, one value is gone.
Registers are the temporary.
Sheet J: syscall numbers, div/mflo/mfhi. Sheet K: exact lw/sw and shift semantics. Finishers: multiply first, then divide;
shifts replace multiplication; two temporaries, then one mult.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
30 / 38

<!-- page 31 -->
9 · DEBRIEF
Reference solutions: problems 1 and 2
1. Hello, MIPS!
.data
msg:
.asciiz "Hello, MIPS!\n"
.text
.globl main
main:
li
$v0, 4
la
$a0, msg
syscall
li
$v0, 10
syscall
The z in .asciiz adds the terminating zero byte.
Without it, print-string runs past the end of the text.
2. Add Two Inputs
.text
.globl main
main:
li
$v0, 5
syscall
move
$t0, $v0
# first value out of $v0
li
$v0, 5
syscall
move
$t1, $v0
add
$t2, $t0, $t1
li
$v0, 1
move
$a0, $t2
syscall
li
$v0, 10
syscall
Trace: input 3, 4 →$t0=3, $t1=4, $t2=7. Match the portal’s
exact output text.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
31 / 38

<!-- page 32 -->
9 · DEBRIEF
Reference solution: 3. Quotient and Remainder
.data
nl:
.asciiz "\n"
.text
.globl main
main:
li
$v0, 5
syscall
move
$t0, $v0
# a
li
$v0, 5
syscall
move
$t1, $v0
# b
div
$t0, $t1
# LO = a/b, HI = a mod b
mflo
$t2
# quotient
mfhi
$t3
# remainder
li
$v0, 1
move
$a0, $t2
syscall
# print quotient
li
$v0, 4
la
$a0, nl
syscall
# newline
li
$v0, 1
move
$a0, $t3
syscall
# print remainder
li
$v0, 10
syscall
Trace 17, 5: $t0=17, $t1=5; after div: LO=3, HI=2;
prints 3 newline 2. For −17, 5 the expected
answer is −3 and −2.
Ask a student: why is the print sequence repeated?
Because $v0 and $a0 are overwritten by every
syscall setup. Lab 14 turns this pattern into a
function.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
32 / 38

<!-- page 33 -->
9 · DEBRIEF
Reference solution: 4. Swap Two Memory Variables
.data
x:
.word 10
y:
.word 20
nl:
.asciiz "\n"
.text
.globl main
main:
lw
$t0, x
# t0 = 10
lw
$t1, y
# t1 = 20
sw
$t1, x
# x = 20
sw
$t0, y
# y = 10
lw
$a0, x
li
$v0, 1
syscall
# prints 20
la
$a0, nl
li
$v0, 4
syscall
lw
$a0, y
li
$v0, 1
syscall
# prints 10
li
$v0, 10
syscall
Step
$t0
$t1
x
y
start
—
—
10
20
lw x
10
—
10
20
lw y
10
20
10
20
sw x
10
20
20
20
sw y
10
20
20
10
Finishers (solutions in the script): C × 9 ÷ 5 + 32 multiplies
first so integer division loses nothing;
x × 10 = (x ≪3) + (x ≪1).
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
33 / 38

<!-- page 34 -->
9 · DEBRIEF
Trust, but verify: errors hiding in the two sheets
#
Sheet
Issue
Correct
1
J
subu $t1,$t6,$t7 comment says $t1 = $t6 + $t7
Should be −
2
J
string1 .asciiz ...: label without a colon, though
the sheet says labels always take one
string1: .asciiz ...
3
J
Load/store examples use __start: and a bare done;
others use main:
Use main: and end with the exit syscall
4
J
addi $t0, 1 two-operand shorthand; some
assemblers reject it
addi $t0,$t0,1
5
K
move $t0,$t1 shown as addi $t0,$t1,$zero: addi
takes an immediate, not a register
addu $t0,$zero,$t1
6
K
xori semantics typo rerg(rs)
reg(rs)
7
J vs K
Multiply: mult+mflo vs mul rd,rs,rt
Both legal; different encodings
8
J vs K
J lists blt ble bgt bge; K expands only ble
Others use the same slt trick
Every reference has bugs. The hardware is the only authority: when a sheet contradicts the simulator, believe
the simulator, then find out why.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
34 / 38

<!-- page 35 -->
9 · DEBRIEF
Cold calls: name first, then the question
1. Why can’t you write add $t0, var, $t1?
2. What does $zero buy the ISA?
3. Which pipeline stages does add skip? sw?
4. Decode 0x012A4020.
5. add vs addu: what really differs?
6. la $t0,x vs lw $t0,x: what is in $t0?
7. After mult, where is the result? After div?
8. 13! in 32 bits: what does LO hold, and where do
you see the overflow?
9. srl vs sra on −16 by 4?
10. Why is sll $t1,$t0,2 useful for arrays?
11. What happens on lw $t1,2($t0)?
12. What does PC hold, and how does it change?
13. Why is li $t0,0xabcd1234 two instructions?
14. Which R-type fields map to the register-file
ports?
Then, 2 minutes: “What mistake did you make most often today? Tell your neighbour.” Share the top two with
the room.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
35 / 38

<!-- page 36 -->
9 · DEBRIEF
What each later portal problem borrows from today
Lab
Portal problem
Lab 11 tool it needs
New in that lab
12
Access First Element of an Array
la, lw 0($t0), print-int syscall
.word lists, array = base + offsets
12
Sum of Array Elements
add accumulator, addi by 4
first counted loop (bge, j)
12
Maximum Element in an Array
compare with slt, move
sll index scaling, conditional update
13
A Number Is Even or Odd
andi $t1,$t0,1, syscall 5,
print-string
beq/bne, two-way branch
13
Find the Sum from 0 to 9
add, addi, counter
the loop skeleton, trace tables
13
Iterative Factorial of 5
mult + mflo
loop with a running product
13
Iterative Factorial of Any Number
syscall 5, mult/HI (overflow at 13!)
input checks, edge cases (0!, 1!)
14
Recursive Factorial
mult/mflo, register conventions
jal/jr, $ra, $sp, stack frame
14
Recursive Fibonacci
add, $s vs $t rules
two recursive calls, saving $s
registers
Readiness check before Lab 12: you can (1) print an integer and a string, (2) read an integer, (3) la + lw from a
label, (4) explain why array steps are multiples of 4. If not, redo Program D.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
36 / 38

<!-- page 37 -->
10 · EXIT
Exit ticket, and next lab: memory and arrays
Exit ticket (2 min)
1. lw $t0, 4($t1) with $t1 = 0x1000:
effective address?
2. After div $t0,$t1, which register
instruction gives the remainder?
3. la $t0, x vs lw $t0, x: which puts 10 in
$t0?
Lab 12 portal: Access First Element of an Array,
Sum of Array Elements, Maximum Element in an
Array.
Teaser: Lab 12 starts here
.data
arr:
.word 10, 20, 30, 40, 50
.text
la
$t0, arr
lw
$t1, 0($t0)
# arr[0]
lw
$t2, 4($t0)
# arr[1]
lw
$t3, 8($t0)
# arr[2]
Bring today’s Program D and your trace tables. Lab 12
is Program D with more than two words.
CSA222 · Modern Computer Architecture · Lab 11 — MIPS Assembly I
37 / 38

<!-- page 38 -->
LAB 11 · ONE-PAGE CHEAT SHEET
Copy this. Then trace before you run.
PRINT INT
li $v0,1 ; move $a0,$reg ; syscall
PRINT STR
li $v0,4 ; la $a0,label ; syscall
READ INT
li $v0,5 ; syscall ; value in $v0 (copy it out!)
EXIT
li $v0,10 ; syscall
MULTIPLY
mult $a,$b ; mflo $r (low 32) ; mfhi $h (high 32)
DIVIDE
div $a,$b ; mflo $q (quotient) ; mfhi $r (remainder)
SHIFT/MASK
sll $r,$x,k (x 2^k) ; andi $r,$x,1 (bit 0)
ADDRESS
la $t0,x (→address)
VALUE
lw $t1,x or lw $t1,0($t0) (→value)
STORE
sw $t1,x or sw $t1,4($t0)
Registers
$v0 service · $a0 argument · $t temporaries · $s preserved · $sp grows down
Formats
R: op rs rt rd shamt funct · I: op rs rt imm16 · J: op addr26
Rules
word = 4 bytes · lw/sw address multiple of 4 · destination first · LO = quotient
Sources: MIPS Quick Reference (JHU CS333); MIPS Reference Sheet v1.12 (D. Broman, KTH); MIPS Technologies history;
SGI, Sony, Nintendo and Toshiba product records. Next: Lab 12 (arrays), Lab 13 (control flow), Lab 14 (stack and
recursion).


---

# Modern Computer Architecture — Coding & Lab Questions

## Labs

### Lab 01 - In Class — 12 Aug 2026

#### AND Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2-input AND gate using Verilog HDL. The module should take two single-bit inputs `a` and `b`, and produce a single-bit output `y`. The output `y` must be HIGH only when both inputs are HIGH; otherwise, the output remains LOW. Implement the module using a continuous assignment (`assign`) statement with the bitwise AND operator.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| y | Output | 1-bit | AND result (a & b) |

  
  
**Truth Table**

| a | b | y (a AND b) |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

  
  
**Requirements**

- Module name must be `and_gate`
- Port names must be exactly `a`, `b`, and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise AND of inputs `a` and `b`

**Input**

**Test Bench**

```
module and_gate_tb;
    reg a;
    reg b;
    wire y;

    and_gate uut (
        .a(a),
        .b(b),
        .y(y)
    );

    initial begin
        a = 0; b = 0;
        
        #10 a = 0; b = 1;
        #10 a = 1; b = 0;
        #10 a = 1; b = 1;
        
        #10 $finish;
    end

    initial begin
        $dumpfile("and_gate_wave.vcd");

        $dumpvars(0, and_gate_tb); 
        
        $monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile and_gate_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 0
Time = 20 | a = 1, b = 0 | y = 0
Time = 30 | a = 1, b = 1 | y = 1
tb.v:19: $finish called at 40 (1s)
```

**Example**

**Test Bench**

```
module and_gate_tb;
    reg a;
    reg b;
    wire y;

    and_gate uut (
        .a(a),
        .b(b),
        .y(y)
    );

    initial begin
        a = 0; b = 0;
        
        #10 a = 0; b = 1;
        #10 a = 1; b = 0;
        #10 a = 1; b = 1;
        
        #10 $finish;
    end

    initial begin
        $dumpfile("and_gate_wave.vcd");

        $dumpvars(0, and_gate_tb); 
        
        $monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile and_gate_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 0
Time = 20 | a = 1, b = 0 | y = 0
Time = 30 | a = 1, b = 1 | y = 1
tb.v:19: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module and_gate (a,b,y);
    input a,b;
    output y;
    assign y = a & b;
endmodule
```


#### OR Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2-input OR gate using Verilog HDL. The module should take two single-bit inputs `a` and `b`, and produce a single-bit output `y`. The output `y` must be HIGH when at least one input is HIGH; it is LOW only when both inputs are LOW. Implement the module using a continuous assignment (`assign`) statement with the bitwise OR operator.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| y | Output | 1-bit | OR result (a | b) |

  
**Truth Table**

| a | b | y (a OR b) |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

  
**Requirements**

- Module name must be `or_gate`
- Port names must be exactly `a`, `b`, and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise OR of inputs `a` and `b`

**Input**

```
module or_gate_tb;
    reg a;
    reg b;
    wire y;

    or_gate uut (
        .a(a),
        .b(b),
        .y(y)
    );

    initial begin
        a = 0; b = 0;

        #10 a = 0; b = 1;
        #10 a = 1; b = 0;
        #10 a = 1; b = 1;

        #10 $finish;
    end

    initial begin
        $dumpfile("or_gate_wave.vcd");
        $dumpvars(0, or_gate_tb);

        $monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
    end
endmodule
```

**Output**

VCD info: dumpfile or\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 1
tb.v:19: $finish called at 40 (1s)

**Example**

**Test Bench**
module or\_gate\_tb;
reg a;
reg b;
wire y;
or\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("or\_gate\_wave.vcd");
$dumpvars(0, or\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule
**Output**
VCD info: dumpfile or\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 1
tb.v:19: $finish called at 40 (1s)

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module or_gate(input a , input b, output y);
    assign y = a | b;
endmodule
```


#### XOR Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2-input XOR gate using Verilog HDL. The module should take two single-bit inputs `a` and `b`, and produce a single-bit output `y`. The output `y` must be HIGH when the inputs are different, and LOW when they are the same. Implement the module using a continuous assignment (`assign`) statement with the bitwise XOR operator.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| y | Output | 1-bit | XOR result (a ^ b) |

  
  
**Truth Table**

| a | b | y (a XOR b) |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

  
  
**Requirements**

- Module name must be `xor_gate`
- Port names must be exactly `a`, `b`, and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise XOR of inputs `a` and `b`

**Input**

**Test Bench**
module xor\_gate\_tb;
reg a;
reg b;
wire y;
xor\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("xor\_gate\_wave.vcd");
$dumpvars(0, xor\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule

**Output**

VCD info: dumpfile xor\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Example**

**Test Bench**
module xor\_gate\_tb;
reg a;
reg b;
wire y;
xor\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("xor\_gate\_wave.vcd");
$dumpvars(0, xor\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule
**Output**
VCD info: dumpfile xor\_gate\_wave.vcd opened for output.
VCD info: dumpfile xor\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 0
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module xor_gate(a,b,y);
    input a,b;
    output y;
    assign y = (~a & b) | (a & ~b);
endmodule
```


#### NOT Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a single-input NOT gate (inverter) using Verilog HDL. The module should take one single-bit input `a` and produce a single-bit output `y`. The output `y` must be the logical complement of the input — HIGH when the input is LOW, and LOW when the input is HIGH. Implement the module using a continuous assignment (`assign`) statement with the bitwise NOT operator.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | Input operand |
| y | Output | 1-bit | NOT result (~a) |

  
**Truth Table**

| a | y (NOT a) |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

  
**Requirements**

- Module name must be `not_gate`
- Port names must be exactly `a` and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise NOT of input `a`

**Input**

**Testbench <\strong>

```

module not_gate_tb;
    reg a;
    wire y;

    not_gate uut (
        .a(a),
        .y(y)
    );

    initial begin
        a = 0;
        
        #10 a = 1;
        
        #10 $finish;
    end

    initial begin
        $dumpfile("not_gate_wave.vcd");
        $dumpvars(0, not_gate_tb);
        
        $monitor("Time = %0t | a = %b | y = %b", $time, a, y);
    end
endmodule

```**

**Output**

VCD info: dumpfile not\_gate\_wave.vcd opened for output.
Time = 0 | a = 0 | y = 1
Time = 10 | a = 1 | y = 0
tb.v:15: $finish called at 20 (1s)

**Example**

**Testbench <\strong>
module not\_gate\_tb;
reg a;
wire y;
not\_gate uut (
.a(a),
.y(y)
);
initial begin
a = 0;
#10 a = 1;
#10 $finish;
end
initial begin
$dumpfile("not\_gate\_wave.vcd");
$dumpvars(0, not\_gate\_tb);
$monitor("Time = %0t | a = %b | y = %b", $time, a, y);
end
endmodule
**Output<\strong>
VCD info: dumpfile not\_gate\_wave.vcd opened for output.
Time = 0 | a = 0 | y = 1
Time = 10 | a = 1 | y = 0
tb.v:15: $finish called at 20 (1s)****

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module not_gate(input a, output y);
    assign y = ~ a;
endmodule
```


#### NAND Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2-input NAND gate using Verilog HDL. The module should take two single-bit inputs `a` and `b`, and produce a single-bit output `y`. The output `y` must be LOW only when both inputs are HIGH; otherwise, the output remains HIGH. Implement the module using a continuous assignment (`assign`) statement with the bitwise AND and NOT operators.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| y | Output | 1-bit | NAND result (~(a & b)) |

  
  
**Truth Table**

| a | b | y (a NAND b) |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

  
  
**Requirements**

- Module name must be `nand_gate`
- Port names must be exactly `a`, `b`, and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise NAND of inputs `a` and `b`

**Input**

**TestBench**
module nand\_gate\_tb;
reg a;
reg b;
wire y;
nand\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("nand\_gate\_wave.vcd");
$dumpvars(0, nand\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule

**Output**

VCD info: dumpfile nand\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 1
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Example**

**TestBench**
module nand\_gate\_tb;
reg a;
reg b;
wire y;
nand\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("nand\_gate\_wave.vcd");
$dumpvars(0, nand\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule
**Output**
VCD info: dumpfile nand\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 1
Time = 10 | a = 0, b = 1 | y = 1
Time = 20 | a = 1, b = 0 | y = 1
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module nand_gate(a,b,y);
    input a,b;
    output y;
    assign y = ~(a&b);
endmodule
```


#### NOR Gate | Verilog
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2-input NOR gate using Verilog HDL. The module should take two single-bit inputs `a` and `b`, and produce a single-bit output `y`. The output `y` must be HIGH only when both inputs are LOW; otherwise, the output remains LOW. Implement the module using a continuous assignment (`assign`) statement with the bitwise OR and NOT operators.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| y | Output | 1-bit | NOR result (~(a | b)) |

  
  
**Truth Table**

| a | b | y (a NOR b) |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

  
  
**Requirements**

- Module name must be `nor_gate`
- Port names must be exactly `a`, `b`, and `y`
- Use a single assign statement for the logic
- Output `y` should be the bitwise NOR of inputs `a` and `b`

**Input**

**TestBench**
module nor\_gate\_tb;
reg a;
reg b;
wire y;
nor\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("nor\_gate\_wave.vcd");
$dumpvars(0, nor\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule

**Output**

VCD info: dumpfile nor\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 1
Time = 10 | a = 0, b = 1 | y = 0
Time = 20 | a = 1, b = 0 | y = 0
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Example**

**TestBench**
module nor\_gate\_tb;
reg a;
reg b;
wire y;
nor\_gate uut (
.a(a),
.b(b),
.y(y)
);
initial begin
a = 0; b = 0;
#10 a = 0; b = 1;
#10 a = 1; b = 0;
#10 a = 1; b = 1;
#10 $finish;
end
initial begin
$dumpfile("nor\_gate\_wave.vcd");
$dumpvars(0, nor\_gate\_tb);
$monitor("Time = %0t | a = %b, b = %b | y = %b", $time, a, b, y);
end
endmodule
**Output**
VCD info: dumpfile nor\_gate\_wave.vcd opened for output.
Time = 0 | a = 0, b = 0 | y = 1
Time = 10 | a = 0, b = 1 | y = 0
Time = 20 | a = 1, b = 0 | y = 0
Time = 30 | a = 1, b = 1 | y = 0
tb.v:19: $finish called at 40 (1s)

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module nor_gate(input a, input b, output y);
 assign y = ~(a|b);

endmodule
```


### LAB 03 - In Class — 19 Aug 2026

#### Build an 2x1 MUX using logic gates
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 2x1 Multiplexer (MUX) using Verilog HDL. A multiplexer is a combinational circuit that selects one of the two input signals and forwards it to the output based on a select line. The module should take two single-bit data inputs `a` and `b`, a single-bit select line `sel`, and produce a single-bit output `y`. When `sel` is LOW, the output follows input `a`; when `sel` is HIGH, the output follows input `b`. Implement the module using basic logic gates (AND, OR, NOT) with continuous assignment (`assign`) statements.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | Data input 0 (selected when sel = 0) |
| b | Input | 1-bit | Data input 1 (selected when sel = 1) |
| sel | Input | 1-bit | Select line |
| y | Output | 1-bit | MUX output |

  
  
**Truth Table**

| sel | a | b | y (output) |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

  
  
**Requirements**

- Module name must be `mux2x1`
- Port names must be exactly `a`, `b`, `sel`, and `y`
- Implement using basic logic gates (AND, OR, NOT) only
- Output `y` must follow input `a` when `sel = 0` and input `b` when `sel = 1`

**Input**

The input is provided via a testbench. The testbench applies a single combination of `sel`, `a`, and `b` to the `mux2x1` module and observes the output `y`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | sel = <sel>, a = <a>, b = <b> | y = <y>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module mux2x1_tb;
    reg a;
    reg b;
    reg sel;
    wire y;
    mux2x1 uut (
        .a(a),
        .b(b),
        .sel(sel),
        .y(y)
    );
    initial begin
        sel = 0; a = 0; b = 0;
        #10 sel = 0; a = 0; b = 1;
        #10 sel = 0; a = 1; b = 0;
        #10 sel = 0; a = 1; b = 1;
        #10 sel = 1; a = 0; b = 0;
        #10 sel = 1; a = 0; b = 1;
        #10 sel = 1; a = 1; b = 0;
        #10 sel = 1; a = 1; b = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("mux2x1_wave.vcd");
        $dumpvars(0, a, b, sel, y);
        $monitor("Time = %0t | sel = %b, a = %b, b = %b | y = %b",
                  $time, sel, a, b, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile mux2x1_wave.vcd opened for output.
Time = 0  | sel = 0, a = 0, b = 0 | y = 0
Time = 10 | sel = 0, a = 0, b = 1 | y = 0
Time = 20 | sel = 0, a = 1, b = 0 | y = 1
Time = 30 | sel = 0, a = 1, b = 1 | y = 1
Time = 40 | sel = 1, a = 0, b = 0 | y = 0
Time = 50 | sel = 1, a = 0, b = 1 | y = 1
Time = 60 | sel = 1, a = 1, b = 0 | y = 0
Time = 70 | sel = 1, a = 1, b = 1 | y = 1
tb.v:27: $finish called at 80 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module mux2x1(a,b,sel,y);
    input a,b,sel;
    output reg y;
    always @(*) begin
        case(sel)
        1'b0: y = a;
        1'b1: y = b;
        endcase
    end
endmodule
```


#### Build an 4x1 MUX using logic gates
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 4x1 Multiplexer (MUX) using Verilog HDL. A 4x1 multiplexer is a combinational circuit that selects one of the four input signals and forwards it to the output based on a 2-bit select line. The module should take four single-bit data inputs `i0`, `i1`, `i2`, and `i3`, a 2-bit select line `sel`, and produce a single-bit output `y`. Implement the module using basic logic gates (AND, OR, NOT) with continuous assignment (`assign`) statements.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| i0 | Input | 1-bit | Data input 0 (selected when sel = 00) |
| i1 | Input | 1-bit | Data input 1 (selected when sel = 01) |
| i2 | Input | 1-bit | Data input 2 (selected when sel = 10) |
| i3 | Input | 1-bit | Data input 3 (selected when sel = 11) |
| sel | Input | 2-bit | Select line |
| y | Output | 1-bit | MUX output |

  
  
**Truth Table**

| sel[1] | sel[0] | y (output) |
| --- | --- | --- |
| 0 | 0 | i0 |
| 0 | 1 | i1 |
| 1 | 0 | i2 |
| 1 | 1 | i3 |

  
  
**Requirements**

- Module name must be `mux4x1`
- Port names must be exactly `i0`, `i1`, `i2`, `i3`, `sel`, and `y`
- Implement using basic logic gates (AND, OR, NOT) only
- Output `y` must follow the selected input based on `sel` value

**Input**

The input is provided via a testbench. The testbench applies a single combination of `sel`, `i0`, `i1`, `i2`, and `i3` to the `mux4x1` module and observes the output `y`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | sel = <sel>, i0 = <i0>, i1 = <i1>, i2 = <i2>, i3 = <i3> | y = <y>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module mux4x1_tb;
    reg i0, i1, i2, i3;
    reg [1:0] sel;
    wire y;
    mux4x1 uut (
        .i0(i0),
        .i1(i1),
        .i2(i2),
        .i3(i3),
        .sel(sel),
        .y(y)
    );
    initial begin
        sel = 2'b00; i0 = 1; i1 = 0; i2 = 0; i3 = 0;
        #10 sel = 2'b01; i0 = 0; i1 = 1; i2 = 0; i3 = 0;
        #10 sel = 2'b10; i0 = 0; i1 = 0; i2 = 1; i3 = 0;
        #10 sel = 2'b11; i0 = 0; i1 = 0; i2 = 0; i3 = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("mux4x1_wave.vcd");
        $dumpvars(0, i0, i1, i2, i3, sel[1:0], y);
        $monitor("Time = %0t | sel = %b, i0 = %b, i1 = %b, i2 = %b, i3 = %b | y = %b",
                  $time, sel, i0, i1, i2, i3, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile mux4x1_wave.vcd opened for output.
Time = 0  | sel = 00, i0 = 1, i1 = 0, i2 = 0, i3 = 0 | y = 1
Time = 10 | sel = 01, i0 = 0, i1 = 1, i2 = 0, i3 = 0 | y = 1
Time = 20 | sel = 10, i0 = 0, i1 = 0, i2 = 1, i3 = 0 | y = 1
Time = 30 | sel = 11, i0 = 0, i1 = 0, i2 = 0, i3 = 1 | y = 1
tb.v:19: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module mux4x1(i0, i1, i2, i3, sel,y);
    input i0,i1,i2,i3;
    input [1:0] sel;
    output reg y;
    always @(*) begin
        case(sel)
        2'b00: y = i0;
        2'b01: y = i1;
        2'b10: y = i2;
        2'b11: y = i3;
        endcase
    end
endmodule
```


#### Build an 1x2 DEMUX using logic gates
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 1x2 De-Multiplexer (DEMUX) using Verilog HDL. A de-multiplexer is a combinational circuit that takes a single input signal and routes it to one of the two outputs based on a select line. The module should take a single-bit data input `i`, a single-bit select line `sel`, and produce two single-bit outputs `y0` and `y1`. When `sel` is LOW, the input is routed to `y0`; when `sel` is HIGH, the input is routed to `y1`. Implement the module using basic logic gates (AND, NOT) with continuous assignment (`assign`) statements.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| i | Input | 1-bit | Data input |
| sel | Input | 1-bit | Select line |
| y0 | Output | 1-bit | Output 0 (active when sel = 0) |
| y1 | Output | 1-bit | Output 1 (active when sel = 1) |

  
  
**Truth Table**

| sel | i | y0 | y1 |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

  
  
**Requirements**

- Module name must be `demux1x2`
- Port names must be exactly `i`, `sel`, `y0`, and `y1`
- Implement using basic logic gates (AND, NOT) only
- Input `i` must be routed to `y0` when `sel = 0` and to `y1` when `sel = 1`

**Input**

The input is provided via a testbench. The testbench applies a single combination of `sel` and `i` to the `demux1x2` module and observes the outputs `y0` and `y1`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | sel = <sel>, i = <i> | y0 = <y0>, y1 = <y1>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module demux1x2_tb;
    reg i;
    reg sel;
    wire y0;
    wire y1;
    demux1x2 uut (
        .i(i),
        .sel(sel),
        .y0(y0),
        .y1(y1)
    );
    initial begin
        sel = 0; i = 0;
        #10 sel = 0; i = 1;
        #10 sel = 1; i = 0;
        #10 sel = 1; i = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("demux1x2_wave.vcd");
        $dumpvars(0, i, sel, y0, y1);
        $monitor("Time = %0t | sel = %b, i = %b | y0 = %b, y1 = %b",
                  $time, sel, i, y0, y1);
    end
endmodule
```

**Output**

```
VCD info: dumpfile demux1x2_wave.vcd opened for output.
Time = 0  | sel = 0, i = 0 | y0 = 0, y1 = 0
Time = 10 | sel = 0, i = 1 | y0 = 1, y1 = 0
Time = 20 | sel = 1, i = 0 | y0 = 0, y1 = 0
Time = 30 | sel = 1, i = 1 | y0 = 0, y1 = 1
tb.v:19: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
// module demux1x2(i,sel,y0,y1);
//     input i,sel;
//     output y0,y1;
//     assign y0 = ~sel & i;
//     assign y1 = sel & i;
// endmodule
module demux1x2(i,sel,y0,y1);
    input i,sel;
    output reg y0,y1;
    always @(*) begin
        y0 = 0;
        y1 = 0;
        case(sel)
        1'b0: y0 = i;
        1'b1: y1 = i;
        endcase
    end
endmodule
```


### Combinational Building Blocks, DeMorgan's Theorems, Universal Gates, Reusable Bl ... - Post Class — 20 Aug 2026

#### Build an 1x4 DEMUX using logic gates
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 1x4 De-Multiplexer (DEMUX) using Verilog HDL. A 1x4 de-multiplexer is a combinational circuit that takes a single input signal and routes it to one of the four outputs based on a 2-bit select line. The module should take a single-bit data input `i`, a 2-bit select line `sel`, and produce four single-bit outputs `y0`, `y1`, `y2`, and `y3`. Only the selected output follows the input; all other outputs remain LOW. Implement the module using basic logic gates (AND, NOT) with continuous assignment (`assign`) statements.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| i | Input | 1-bit | Data input |
| sel | Input | 2-bit | Select line |
| y0 | Output | 1-bit | Output 0 (active when sel = 00) |
| y1 | Output | 1-bit | Output 1 (active when sel = 01) |
| y2 | Output | 1-bit | Output 2 (active when sel = 10) |
| y3 | Output | 1-bit | Output 3 (active when sel = 11) |

  
  
**Truth Table**

| sel[1] | sel[0] | i | y0 | y1 | y2 | y3 |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 |

  
  
**Requirements**

- Module name must be `demux1x4`
- Port names must be exactly `i`, `sel`, `y0`, `y1`, `y2`, and `y3`
- Implement using basic logic gates (AND, NOT) only
- Only the selected output must follow input `i`; all other outputs must remain LOW

**Input**

The input is provided via a testbench. The testbench applies a single combination of `sel` and `i` to the `demux1x4` module and observes the outputs `y0`, `y1`, `y2`, and `y3`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | sel = <sel>, i = <i> | y0 = <y0>, y1 = <y1>, y2 = <y2>, y3 = <y3>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module demux1x4_tb;

    reg i;
    reg [1:0] sel;
    wire y0, y1, y2, y3;

    // Instantiate the Unit Under Test (UUT)
    demux1x4 uut (
        .i(i),
        .sel(sel),
        .y0(y0),
        .y1(y1),
        .y2(y2),
        .y3(y3)
    );

    // Test stimulus
    initial begin
        sel = 2'b10;
        i   = 1'b1;

        #10;
        $finish;
    end

    // Waveform and output monitoring
    initial begin
        $dumpfile("demux1x4_wave.vcd");
        $dumpvars(0, i, sel, y0, y1, y2, y3);

        $monitor(
            "Time = %0t | sel = %b, i = %b | y0 = %b, y1 = %b, y2 = %b, y3 = %b",
            $time, sel, i, y0, y1, y2, y3
        );
    end

endmodule
```

**Output**

```
VCD info: dumpfile demux1x4_wave.vcd opened for output.
Time = 0  | sel = 00, i = 1 | y0 = 1, y1 = 0, y2 = 0, y3 = 0
Time = 10 | sel = 01, i = 1 | y0 = 0, y1 = 1, y2 = 0, y3 = 0
Time = 20 | sel = 10, i = 1 | y0 = 0, y1 = 0, y2 = 1, y3 = 0
Time = 30 | sel = 11, i = 1 | y0 = 0, y1 = 0, y2 = 0, y3 = 1
tb.v:19: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
// module demux1x4(i,sel,y0,y1,y2,y3);
//     input i;
//     input [1:0] sel;
//     output y0,y1,y2,y3;
//     assign y0 = ~sel[1] & ~sel[0] & i;
//     assign y1 = ~sel[1] & sel[0] & i;
//     assign y2 = sel[1] & ~sel[0] & i;
//     assign y3 = sel[1] & sel[0] & i;
// endmodule

// module demux1x4(i,sel,y0,y1,y2,y3);
//     input i;
//     input [1:0] sel;
//     output y0,y1,y2,y3;
    
//     wire [3:0] y_bus;
//     assign y_bus = i << sel;

//     assign {y3,y2,y1,y0} = y_bus;
// endmodule

module demux1x4(i,sel,y0,y1,y2,y3);
    input i;
    input [1:0] sel;
    output reg y0,y1,y2,y3;

    always @(*) begin
        y0 = 0;
        y1 = 0;
        y2 = 0;
        y3 = 0;

        case(sel)
            2'b00: y0 = i;
            2'b01: y1 = i;
            2'b10: y2 = i;
            2'b11: y3 = i;
        endcase
    end
endmodule
```


### Lab 4 - In Class — 24 Aug 2026

#### Half Adder
_Coding · Medium · Solved ✓ · 20/20 pts_

Design a Half Adder using Verilog HDL. A Half Adder is a combinational arithmetic circuit that adds two single-bit binary numbers and produces a Sum and a Carry-out. It is called “half” because it cannot accept a carry from a previous stage — it only handles two inputs with no carry-in. The Sum output is HIGH when the inputs differ, and the Carry-out is HIGH only when both inputs are HIGH.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| sum | Output | 1-bit | XOR result (a ^ b) |
| cout | Output | 1-bit | AND result (a & b) |

  
  
**Truth Table**

| a | b | sum | cout |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

  
  
**Requirements**

- Module name must be `half_adder`
- Port names must be exactly `a`, `b`, `sum`, and `cout`

**Input**

The input is provided via a testbench. The testbench applies a single combination of `a` and `b` to the `half_adder` module and observes the outputs `sum` and `cout`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | a = <a>, b = <b> | sum = <sum>, cout = <cout>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module half_adder_tb;
    reg a;
    reg b;
    wire sum;
    wire cout;
    half_adder uut (
        .a(a),
        .b(b),
        .sum(sum),
        .cout(cout)
    );
    initial begin
        a = 0; b = 0;
        #10 a = 0; b = 1;
        #10 a = 1; b = 0;
        #10 a = 1; b = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("half_adder_wave.vcd");
        $dumpvars(0, a, b, sum, cout);
        $monitor("Time = %0t | a = %b, b = %b | sum = %b, cout = %b",
                  $time, a, b, sum, cout);
    end
endmodule
```

**Output**

```
VCD info: dumpfile half_adder_wave.vcd opened for output.
Time = 0  | a = 0, b = 0 | sum = 0, cout = 0
Time = 10 | a = 0, b = 1 | sum = 1, cout = 0
Time = 20 | a = 1, b = 0 | sum = 1, cout = 0
Time = 30 | a = 1, b = 1 | sum = 0, cout = 1
tb.v:19: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module half_adder(a,b,sum,cout);   
input a,b; //a and b are inputs
output sum,cout; //sum and c_out are outputs
// functional declaration
assign sum=a^b;
assign cout=a&b;
endmodule
```


#### Full Adder
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a Full Adder using Verilog HDL. A Full Adder is a combinational arithmetic circuit that adds three single-bit binary numbers — two data inputs and one carry-in from a previous stage — and produces a Sum and a Carry-out. Unlike the Half Adder, a Full Adder accepts a carry-in, which makes it suitable for chaining multiple stages together to add multi-bit binary numbers.  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 1-bit | First operand |
| b | Input | 1-bit | Second operand |
| cin | Input | 1-bit | Carry-in from previous stage |
| sum | Output | 1-bit | XOR result (a ^ b ^ cin) |
| cout | Output | 1-bit | Carry-out to next stage |

  
  
**Truth Table**

| a | b | cin | sum | cout |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

  
  
**Requirements**

- Module name must be `full_adder`
- Port names must be exactly `a`, `b`, `cin`, `sum`, and `cout`

**Input**

The input is provided via a testbench. The testbench applies a single combination of `a`, `b`, and `cin` to the `full_adder` module and observes the outputs `sum` and `cout`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | a = <a>, b = <b>, cin = <cin> | sum = <sum>, cout = <cout>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module full_adder_tb;
    reg a;
    reg b;
    reg cin;
    wire sum;
    wire cout;
    full_adder uut (
        .a(a),
        .b(b),
        .cin(cin),
        .sum(sum),
        .cout(cout)
    );
    initial begin
        a = 0; b = 0; cin = 0;
        #10 a = 0; b = 0; cin = 1;
        #10 a = 0; b = 1; cin = 0;
        #10 a = 0; b = 1; cin = 1;
        #10 a = 1; b = 0; cin = 0;
        #10 a = 1; b = 0; cin = 1;
        #10 a = 1; b = 1; cin = 0;
        #10 a = 1; b = 1; cin = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("full_adder_wave.vcd");
        $dumpvars(0, a, b, cin, sum , cout);
        $monitor("Time = %0t | a = %b, b = %b, cin = %b | sum = %b, cout = %b",
                  $time, a, b, cin, sum, cout);
    end
endmodule
```

**Output**

```
VCD info: dumpfile full_adder_wave.vcd opened for output.
Time = 0  | a = 0, b = 0, cin = 0 | sum = 0, cout = 0
Time = 10 | a = 0, b = 0, cin = 1 | sum = 1, cout = 0
Time = 20 | a = 0, b = 1, cin = 0 | sum = 1, cout = 0
Time = 30 | a = 0, b = 1, cin = 1 | sum = 0, cout = 1
Time = 40 | a = 1, b = 0, cin = 0 | sum = 1, cout = 0
Time = 50 | a = 1, b = 0, cin = 1 | sum = 0, cout = 1
Time = 60 | a = 1, b = 1, cin = 0 | sum = 0, cout = 1
Time = 70 | a = 1, b = 1, cin = 1 | sum = 1, cout = 1
tb.v:27: $finish called at 80 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
// module full_adder (a,b,cin,sum,cout);
//     input a,b,cin;
//     output sum,cout;
//     assign sum = a ^ b ^ cin;
//     assign cout = (a&b) | (cin) & (a^b);
// endmodule

module half_adder(a,b,sum,cout);   
input a,b; //a and b are inputs
output sum,cout; //sum and c_out are outputs
// functional declaration
assign {cout,sum}=a+b;
endmodule

module full_adder(a,b,cin,sum,cout);
input a,b,cin;
output sum,cout;
wire sum1,carry1,carry2;
half_adder ha1(.a(a),.b(b),.sum(sum1),.cout(carry1));
half_adder ha2(.a(sum1),.b(cin),.sum(sum),.cout(carry2));
or or1(cout,carry2,carry1);
endmodule
```


#### 4-bit Ripple Carry Adder
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 4-bit Ripple Carry Adder using Verilog HDL. A Ripple Carry Adder is built by chaining four Full Adders together — the carry-out of each stage feeds directly into the carry-in of the next stage. This is why it is called “ripple” — the carry has to travel (ripple) through every stage before the final sum is correct.  
  
The module should take two 4-bit inputs `a` and `b`, a single-bit carry-in `cin`, and produce a 4-bit sum output `s` and a single-bit carry-out `cout`. You are provided with a `full_adder` boilerplate module — instantiate it four times to build the complete 4-bit adder.  
  
**Structure**  

| Stage | Inputs | Carry-in | Sum Output | Carry-out |
| --- | --- | --- | --- | --- |
| FA0 (bit 0) | a[0], b[0] | cin | s[0] | c[1] |
| FA1 (bit 1) | a[1], b[1] | c[1] | s[1] | c[2] |
| FA2 (bit 2) | a[2], b[2] | c[2] | s[2] | c[3] |
| FA3 (bit 3) | a[3], b[3] | c[3] | s[3] | cout |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 4-bit | First operand |
| b | Input | 4-bit | Second operand |
| cin | Input | 1-bit | Initial carry-in (LSB stage) |
| s | Output | 4-bit | Sum result |
| cout | Output | 1-bit | Final carry-out (MSB stage) |

  
  
**Requirements**

- Top module name must be `ripple_carry_adder`
- Port names must be exactly `a`, `b`, `cin`, `s`, and `cout`
- Must instantiate the provided `full_adder` module exactly four times
- The carry-out of each stage must connect to the carry-in of the next stage

**Input**

The input is provided via a testbench. The testbench applies a single combination of 4-bit values `a`, `b`, and single-bit `cin` to the `ripple_carry_adder` module and observes the 4-bit sum `s` and carry-out `cout`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | a = <a>, b = <b>, cin = <cin> | s = <s>, cout = <cout>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module ripple_carry_adder_tb;
    reg  [3:0] a;
    reg  [3:0] b;
    reg        cin;
    wire [3:0] s;
    wire       cout;
    ripple_carry_adder uut (
        .a(a),
        .b(b),
        .cin(cin),
        .s(s),
        .cout(cout)
    );
    initial begin
        a = 4'b0011; b = 4'b0101; cin = 0;
        #10 a = 4'b1111; b = 4'b0001; cin = 0;
        #10 a = 4'b1010; b = 4'b0101; cin = 1;
        #10 a = 4'b1111; b = 4'b1111; cin = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("ripple_carry_adder_wave.vcd");
        $dumpvars(1);
        $monitor("Time = %0t | a = %b, b = %b, cin = %b | s = %b, cout = %b",
                  $time, a, b, cin, s, cout);
    end
endmodule
```

**Output**

```
VCD info: dumpfile ripple_carry_adder_wave.vcd opened for output.
Time = 0  | a = 0011, b = 0101, cin = 0 | s = 1000, cout = 0
Time = 10 | a = 1111, b = 0001, cin = 0 | s = 0000, cout = 1
Time = 20 | a = 1010, b = 0101, cin = 1 | s = 0000, cout = 1
Time = 30 | a = 1111, b = 1111, cin = 1 | s = 1111, cout = 1
tb.v:21: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module full_adder (
    input  a,
    input  b,
    input  cin,
    output sum,
    output cout
);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (b & cin) | (a & cin);
endmodule

//Your code here

module ripple_carry_adder (a,b,cin,s,cout);
input [3:0] a,b;
input cin;
output [3:0]s;
output cout;
wire [2:0] c;
full_adder FA0(.a(a[0]),.b(b[0]),.cin(cin),.sum(s[0]),.cout(c[0]));
full_adder FA1(.a(a[1]),.b(b[1]),.cin(c[0]),.sum(s[1]),.cout(c[1]));
full_adder FA2(.a(a[2]),.b(b[2]),.cin(c[1]),.sum(s[2]),.cout(c[2]));
full_adder FA3(.a(a[3]),.b(b[3]),.cin(c[2]),.sum(s[3]),.cout(cout));
endmodule
```


### Lab 5 - In Class — 26 Aug 2026

#### Sign Extender
_Coding · Hard · Solved ✓ · 40/40 pts_

Design an 8-bit Sign Extender using Verilog HDL. Sign extension is the process of increasing the number of bits of a binary number while preserving its sign and value. When loading a smaller signed value into a larger register, you must replicate the Most Significant Bit (MSB) into all the new upper bits — this is called sign extension. Simply padding with zeros (zero-extension) gives the wrong answer for negative numbers.  
  
This module takes a 4-bit signed input `a` and sign-extends it to an 8-bit signed output `y` by replicating the MSB (`a[3]`) into the upper 4 bits.  
  
**The Rule**  

| MSB (a[3]) | Sign | Upper 4 bits of y | Action |
| --- | --- | --- | --- |
| 0 | Positive | 0000 | Fill upper bits with 0 |
| 1 | Negative | 1111 | Fill upper bits with 1 |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 4-bit | Signed input operand |
| y | Output | 8-bit | Sign-extended output |

  
  
**Truth Table**

| a (4-bit binary) | a (decimal) | y (8-bit binary) | y (decimal) |
| --- | --- | --- | --- |
| 0101 | +5 | 00000101 | +5 |
| 0111 | +7 | 00000111 | +7 |
| 1101 | −3 | 11111101 | −3 |
| 1000 | −8 | 11111000 | −8 |

  
  
**Requirements**

- Module name must be `sign_extender`
- Port names must be exactly `a` and `y`
- Use a single `assign` statement with Verilog replication operator
- Output `y` must be the 8-bit sign-extended version of 4-bit input `a`
- If `a[3] = 0` (positive), upper 4 bits of `y` must be `0000`
- If `a[3] = 1` (negative), upper 4 bits of `y` must be `1111`

**Input**

The input is provided via a testbench. The testbench applies a single 4-bit value `a` to the `sign_extender` module and observes the 8-bit output `y`.

**Output**

For the given input, print the result in the following format:  
  

```
Time = <time> | a = <a> | y = <y>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module sign_extender_tb;
    reg  [3:0] a;
    wire [7:0] y;
    sign_extender uut (
        .a(a),
        .y(y)
    );
    initial begin
        a = 4'b0101;
        #10 a = 4'b0111;
        #10 a = 4'b1101;
        #10 a = 4'b1000;
        #10 $finish;
    end
    initial begin
        $dumpfile("sign_extender_wave.vcd");
        $dumpvars(0, sign_extender_tb);
        $monitor("Time = %0t | a = %b | y = %b",
                  $time, a, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile sign_extender_wave.vcd opened for output.
Time = 0  | a = 0101 | y = 00000101
Time = 10 | a = 0111 | y = 00000111
Time = 20 | a = 1101 | y = 11111101
Time = 30 | a = 1000 | y = 11111000
tb.v:17: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module sign_extender (a,y);
    input [3:0] a;
    output [7:0] y;
    assign y = {{4{a[3]}},a};
endmodule
```


#### Adder-Subtractor
_Coding · Medium · Solved ✓ · 20/20 pts_

Design a 4-bit Adder-Subtractor using Verilog HDL. An Adder-Subtractor is a combinational circuit that performs either addition or subtraction based on a single control bit `m`. This is possible because subtraction can be rewritten as addition of the two's complement negative:  
  
`A − B = A + (~B) + 1`  
  
When `m = 0`, the circuit adds (`A + B`). When `m = 1`, the circuit subtracts (`A − B`) by inverting all bits of `B` and forcing carry-in to 1. This means the same hardware — one adder — handles both operations. That is exactly how real CPUs work.  
  
**How It Works**  

| m | Operation | Effective Inputs | Result |
| --- | --- | --- | --- |
| 0 | Addition | A + B + 0 | A + B |
| 1 | Subtraction | A + (~B) + 1 | A − B |

  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 4-bit | First operand |
| b | Input | 4-bit | Second operand |
| m | Input | 1-bit | Mode select (0 = Add, 1 = Subtract) |
| s | Output | 4-bit | Result (sum or difference) |
| cout | Output | 1-bit | Carry-out |

  
  
**Truth Table**

| m | a | b | s | cout | Operation |
| --- | --- | --- | --- | --- | --- |
| 0 | 0011 | 0101 | 1000 | 0 | 3 + 5 = 8 |
| 0 | 1111 | 0001 | 0000 | 1 | 15 + 1 = 16 (overflow) |
| 1 | 0101 | 0011 | 0010 | 0 | 5 − 3 = 2 |
| 1 | 0011 | 0101 | 1110 | 1 | 3 − 5 = −2 |

  
  
**Requirements**

- Module name must be `adder_subtractor`
- Port names must be exactly `a`, `b`, `m`, `s`, and `cout`
- When `m = 0`, output `s` must be `a + b`
- When `m = 1`, output `s` must be `a - b` using two's complement method
- Use XOR to conditionally invert `b` based on `m`
- Use `m` as the carry-in to complete the two's complement negation

**Input**

The input is provided via a testbench. The testbench applies a single combination of 4-bit values `a`, `b`, and control bit `m` to the `adder_subtractor` module and observes the 4-bit result `s` and carry-out `cout`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | m = <m>, a = <a>, b = <b> | s = <s>, cout = <cout>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module adder_subtractor_tb;
    reg  [3:0] a;
    reg  [3:0] b;
    reg        m;
    wire [3:0] s;
    wire       cout;
    adder_subtractor uut (
        .a(a),
        .b(b),
        .m(m),
        .s(s),
        .cout(cout)
    );
    initial begin
        m = 0; a = 4'b0011; b = 4'b0101;
        #10 m = 0; a = 4'b1111; b = 4'b0001;
        #10 m = 1; a = 4'b0101; b = 4'b0011;
        #10 m = 1; a = 4'b0011; b = 4'b0101;
        #10 $finish;
    end
    initial begin
        $dumpfile("adder_subtractor_wave.vcd");
        $dumpvars(0, adder_subtractor_tb);
        $monitor("Time = %0t | m = %b, a = %b, b = %b | s = %b, cout = %b",
                  $time, m, a, b, s, cout);
    end
endmodule
```

**Output**

```
VCD info: dumpfile adder_subtractor_wave.vcd opened for output.
Time = 0  | m = 0, a = 0011, b = 0101 | s = 1000, cout = 0
Time = 10 | m = 0, a = 1111, b = 0001 | s = 0000, cout = 1
Time = 20 | m = 1, a = 0101, b = 0011 | s = 0010, cout = 0
Time = 30 | m = 1, a = 0011, b = 0101 | s = 1110, cout = 1
tb.v:21: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module adder_subtractor (a,b,m,s,cout);
    input [3:0] a;
    input [3:0] b;
    input m;
    output [3:0] s;
    output cout;

    assign {cout,s} =m?(a+(b^{4{m}}) + 1):(a+b);
endmodule
```


#### Adder-Subtractor + Overflow Flags
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 4-bit Adder-Subtractor with Overflow Detection using Verilog HDL. This circuit extends the basic Adder-Subtractor by adding two overflow detection flags — one for unsigned overflow and one for signed overflow. Real CPUs (x86, ARM) use exactly these two flags to detect when an arithmetic result exceeds the representable range.  
  
When `m = 0`, the circuit performs addition (`A + B`). When `m = 1`, the circuit performs subtraction (`A − B`) using two's complement method. After every operation, both flags are updated automatically.  
  
**Overflow Detection Rules**  

| Flag | Name | Rule | Meaning |
| --- | --- | --- | --- |
| `cf` | Carry Flag (Unsigned Overflow) | `cf = cout` | Result exceeded unsigned range (0 to 15 for 4-bit) |
| `vf` | Overflow Flag (Signed Overflow) | `vf = cin_msb ^ cout` | Result exceeded signed range (−8 to +7 for 4-bit) |

  
  
**Signed Overflow Patterns**  

| cin\_msb | cout | vf | Meaning |
| --- | --- | --- | --- |
| 0 | 0 | 0 | No overflow — positive result fits |
| 1 | 1 | 0 | No overflow — negative result fits |
| 0 | 1 | 1 | OVERFLOW — two negatives gave positive |
| 1 | 0 | 1 | OVERFLOW — two positives gave negative |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 4-bit | First operand |
| b | Input | 4-bit | Second operand |
| m | Input | 1-bit | Mode select (0 = Add, 1 = Subtract) |
| s | Output | 4-bit | Result (sum or difference) |
| cf | Output | 1-bit | Carry flag — unsigned overflow |
| vf | Output | 1-bit | Overflow flag — signed overflow |

  
  
**Truth Table**

| m | a | b | s | cf | vf | Operation |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0011 | 0101 | 1000 | 0 | 0 | 3 + 5 = 8, no overflow |
| 0 | 0111 | 0001 | 1000 | 0 | 1 | 7 + 1 = 8, signed overflow (+7 max) |
| 0 | 1111 | 0001 | 0000 | 1 | 0 | 15 + 1 = 16, unsigned overflow |
| 1 | 0101 | 0011 | 0010 | 1 | 0 | 5 − 3 = 2, no overflow |

  
  
**Requirements**

- Module name must be `adder_subtractor_overflow`
- Port names must be exactly `a`, `b`, `m`, `s`, `cf`, and `vf`
- When `m = 0`, output `s` must be `a + b`
- When `m = 1`, output `s` must be `a - b` using two's complement method
- Carry flag `cf` must be the carry-out of the MSB addition
- Overflow flag `vf` must be `cin_msb ^ cout` where `cin_msb` is the carry into the MSB stage

**Input**

The input is provided via a testbench. The testbench applies a single combination of 4-bit values `a`, `b`, and control bit `m` to the `adder_subtractor_overflow` module and observes the 4-bit result `s`, carry flag `cf`, and overflow flag `vf`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | m = <m>, a = <a>, b = <b> | s = <s>, cf = <cf>, vf = <vf>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module adder_subtractor_overflow_tb;
    reg  [3:0] a;
    reg  [3:0] b;
    reg        m;
    wire [3:0] s;
    wire       cf;
    wire       vf;
    adder_subtractor_overflow uut (
        .a(a),
        .b(b),
        .m(m),
        .s(s),
        .cf(cf),
        .vf(vf)
    );
    initial begin
        m = 0; a = 4'b0011; b = 4'b0101;
        #10 m = 0; a = 4'b0111; b = 4'b0001;
        #10 m = 0; a = 4'b1111; b = 4'b0001;
        #10 m = 1; a = 4'b0101; b = 4'b0011;
        #10 $finish;
    end
    initial begin
        $dumpfile("adder_subtractor_overflow_wave.vcd");
        $dumpvars(0, adder_subtractor_overflow_tb);
        $monitor("Time = %0t | m = %b, a = %b, b = %b | s = %b, cf = %b, vf = %b",
                  $time, m, a, b, s, cf, vf);
    end
endmodule
```

**Output**

```
VCD info: dumpfile adder_subtractor_overflow_wave.vcd opened for output.
Time = 0  | m = 0, a = 0011, b = 0101 | s = 1000, cf = 0, vf = 0
Time = 10 | m = 0, a = 0111, b = 0001 | s = 1000, cf = 0, vf = 1
Time = 20 | m = 0, a = 1111, b = 0001 | s = 0000, cf = 1, vf = 0
Time = 30 | m = 1, a = 0101, b = 0011 | s = 0010, cf = 1, vf = 0
tb.v:23: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module adder_subtractor_overflow (
    input  [3:0] a,
    input  [3:0] b,
    input        m,
    output [3:0] s,
    output       cf,
    output       vf
);

    wire [3:0] b_sub;
    wire [4:0] ext_sum;
    wire       cin_msb;
    wire       cout;

    // XOR b with m to flip bits when subtracting (m = 1)
    assign b_sub = b ^ {4{m}};

    // Perform 5-bit addition including the carry-in m
    assign ext_sum = a + b_sub + m;

    // Assign output sum and carry flag (unsigned overflow)
    assign s  = ext_sum[3:0];
    assign cf = ext_sum[4];

    // Calculate carry into MSB stage (bit 3)
    assign cin_msb = a[2] + b_sub[2] + (a[1:0] + b_sub[1:0] + m >= 4'd4 ? 1'b1 : 1'b0);

    // MSB carry-out is the final carry-out
    assign cout = cf;

    // Overflow flag (signed overflow) = cin_msb ^ cout
    assign vf = cin_msb ^ cout;

endmodule
```


#### 2's Complement Negator
_Coding · Medium · Solved ✓ · 20/20 pts_

Design a Two's Complement Negator using Verilog HDL. Two's complement is the standard method used by all modern CPUs to represent signed integers. To negate a number in two's complement, follow two steps: first invert all bits (one's complement), then add 1 to the result. This module should take an 8-bit input `a` and produce its two's complement negation as an 8-bit output `y`.  
  
**The Recipe**  

| Step | Operation | Example (a = 00000101) |
| --- | --- | --- |
| 1 | Invert all bits (~a) | 11111010 |
| 2 | Add 1 | 11111011 |
| Result | Two's complement of a | 11111011 (which is −5) |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| a | Input | 8-bit | Input operand |
| y | Output | 8-bit | Two's complement negation of a |

  
  
**Truth Table**

| a (binary) | a (decimal) | y (binary) | y (decimal) |
| --- | --- | --- | --- |
| 00000000 | 0 | 00000000 | 0 |
| 00000101 | +5 | 11111011 | −5 |
| 00010010 | +18 | 11101110 | −18 |
| 11111111 | −1 | 00000001 | +1 |
| 10000000 | −128 | 10000000 | −128 (special case) |

  
  
**Requirements**

- Module name must be `twos_complement`
- Port names must be exactly `a` and `y`
- Use a single `assign` statement for the logic
- Output `y` must be the two's complement negation of input `a`
- Special case: negation of `8'b00000000` must return `8'b00000000`
- Special case: negation of `8'b10000000` (−128) must return `8'b10000000` (overflow wraps back)

**Input**

The input is provided via a testbench. The testbench applies a single 8-bit value `a` to the `twos_complement` module and observes the 8-bit output `y`.

**Output**

For the given input, print the result in the following format:  
  

```
Time = <time> | a = <a> | y = <y>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module twos_complement_tb;
    reg  [7:0] a;
    wire [7:0] y;
    twos_complement uut (
        .a(a),
        .y(y)
    );
    initial begin
        a = 8'b00000101;
        #10 a = 8'b00010010;
        #10 a = 8'b11111111;
        #10 a = 8'b00000000;
        #10 $finish;
    end
    initial begin
        $dumpfile("twos_complement_wave.vcd");
        $dumpvars(0, a, y);
        $monitor("Time = %0t | a = %b | y = %b",
                  $time, a, y);
    end
endmodule
```

**Output**

```
VCD info: dumpfile twos_complement_wave.vcd opened for output.
Time = 0  | a = 00000101 | y = 11111011
Time = 10 | a = 00010010 | y = 11101110
Time = 20 | a = 11111111 | y = 00000001
Time = 30 | a = 00000000 | y = 00000000
tb.v:17: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
// module twos_complement (
//     input [7:0] a,
//     output [7:0] y);
//     assign y = ~a + 1;
// endmodule
module twos_complement (
    input [7:0] a,
    output [7:0] y
);
    assign y = ~a + 8'b000000001;
endmodule
```


### Binary Subtraction, Overflow Detection, Latches, Flip-Flops & Timing, Combinatio ... - In Class — 31 Aug 2026

#### D Latch
_Coding · Medium · Solved ✓ · 20/20 pts_

Design a D Latch using Verilog HDL. A D Latch is an improvement over the SR Latch — it eliminates the forbidden state by using a single data input `d` and an inverter, ensuring that Set and Reset can never both be active at the same time. The D Latch is a **level-triggered** memory element controlled by an enable signal `en`.  
  
When `en = 1` (transparent mode), the output `q` follows the input `d` in real-time — any change on `d` immediately appears on `q`. When `en = 0` (latched mode), the output `q` holds its last value and ignores any changes on `d`.  
  
**Behaviour**  

| en | d | q | Action |
| --- | --- | --- | --- |
| 0 | X | q\_prev | Hold — q retains last value |
| 1 | 0 | 0 | Transparent — q follows d = 0 |
| 1 | 1 | 1 | Transparent — q follows d = 1 |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| d | Input | 1-bit | Data input |
| en | Input | 1-bit | Enable (1 = transparent, 0 = latched) |
| q | Output | 1-bit | Stored bit |
| q\_n | Output | 1-bit | Complement of q |

  
  
**Requirements**

- Module name must be `d_latch`
- Port names must be exactly `d`, `en`, `q`, and `q_n`
- Use an `always @(*)` block with an `if-else` statement
- When `en = 1`, output `q` must follow input `d` immediately
- When `en = 0`, output `q` must hold its last value
- Output `q_n` must always be the complement of `q`

**Input**

The input is provided via a testbench. The testbench applies a single combination of `en` and `d` to the `d_latch` module and observes the outputs `q` and `q_n`.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | en = <en>, d = <d> | q = <q>, q_n = <q_n>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module d_latch_tb;
    reg d;
    reg en;
    wire q;
    wire q_n;

    d_latch uut (
        .d(d),
        .en(en),
        .q(q),
        .q_n(q_n)
    );

    initial begin
        en = 1; d = 1;
        #10 en = 1; d = 0;
        #10 en = 0; d = 1;
        #10 en = 1; d = 1;
        #10 $finish;
    end

    initial begin
        $dumpfile("d_latch_wave.vcd");

        $dumpvars(1, d);
        $dumpvars(1, en);
        $dumpvars(1, q);
        $dumpvars(1, q_n);

        $monitor("Time = %0t | en = %b, d = %b | q = %b, q_n = %b",
                 $time, en, d, q, q_n);
    end
endmodule
```

**Output**

```
VCD info: dumpfile d_latch_wave.vcd opened for output.
Time = 0  | en = 1, d = 1 | q = 1, q_n = 0
Time = 10 | en = 1, d = 0 | q = 0, q_n = 1
Time = 20 | en = 0, d = 1 | q = 0, q_n = 1
Time = 30 | en = 1, d = 1 | q = 1, q_n = 0
tb.v:21: $finish called at 40 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module d_latch (
    input d,input en,output reg q,output q_n
);
    always @(*) begin
        if (en)
            q = d;
        else
            q = q;
    end
    assign q_n = ~q;
endmodule
```


#### D Flip-Flop with Enable
_Coding · Medium · Solved ✓ · 20/20 pts_

Design a D Flip-Flop with Enable using Verilog HDL. A D Flip-Flop is an **edge-triggered** memory element — unlike the D Latch which is level-triggered, the D Flip-Flop captures the value of input `d` only at the **rising edge** of the clock. This makes it predictable, glitch-free, and safe for CPU pipeline design.  
  
This variant adds an **enable** signal `en`. When `en = 1`, the flip-flop captures `d` on the rising clock edge normally. When `en = 0`, the flip-flop ignores `d` and holds its current value — even on the clock edge. An active-high synchronous reset `rst` is also included: when `rst = 1` on the rising clock edge, `q` is forced to 0 regardless of `d` or `en`.  
  
**Behaviour**  

| clk | rst | en | d | q | Action |
| --- | --- | --- | --- | --- | --- |
| rising edge | 1 | X | X | 0 | Synchronous Reset — force q = 0 |
| rising edge | 0 | 1 | 1 | 1 | Capture — q captures d = 1 |
| rising edge | 0 | 1 | 0 | 0 | Capture — q captures d = 0 |
| rising edge | 0 | 0 | X | q\_prev | Hold — en=0, q unchanged |
| no edge | X | X | X | q\_prev | Hold — no clock edge, q unchanged |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| rst | Input | 1-bit | Synchronous reset (1 = reset q to 0) |
| en | Input | 1-bit | Enable (1 = capture d, 0 = hold q) |
| d | Input | 1-bit | Data input |
| q | Output | 1-bit | Stored bit |

  
  
**Requirements**

- Module name must be `dff_enable`
- Port names must be exactly `clk`, `rst`, `en`, `d`, and `q`
- Use `always @(posedge clk)` block — rising edge triggered
- Reset is synchronous — `rst` is checked only on the rising clock edge
- When `rst = 1`, force `q = 0` regardless of `en` or `d`
- When `rst = 0` and `en = 1`, capture `d` into `q`
- When `rst = 0` and `en = 0`, hold current value of `q`

**Input**

The input is provided via a testbench. The testbench drives the clock and applies a single combination of `rst`, `en`, and `d` to the `dff_enable` module, then observes the output `q` after the rising clock edge.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, rst = <rst>, en = <en>, d = <d> | q = <q>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module dff_enable_tb;
    reg clk;
    reg rst;
    reg en;
    reg d;
    wire q;
    dff_enable uut (
        .clk(clk),
        .rst(rst),
        .en(en),
        .d(d),
        .q(q)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        rst = 0; en = 1; d = 1;
        #10 rst = 0; en = 1; d = 0;
        #10 rst = 0; en = 0; d = 1;
        #10 rst = 1; en = 1; d = 1;
        #10 $finish;
    end
    initial begin
        $dumpfile("dff_enable_wave.vcd");
        $dumpvars(0, clk, rst, en, d, q);
        $monitor("Time = %0t | clk = %b, rst = %b, en = %b, d = %b | q = %b",
                  $time, clk, rst, en, d, q);
    end
endmodule
```

**Output**

```
VCD info: dumpfile dff_enable_wave.vcd opened for output.
Time = 0 | clk = 0, rst = 0, en = 1, d = 1 | q = x
Time = 5 | clk = 1, rst = 0, en = 1, d = 1 | q = 1
Time = 10 | clk = 0, rst = 0, en = 1, d = 0 | q = 1
Time = 15 | clk = 1, rst = 0, en = 1, d = 0 | q = 0
Time = 20 | clk = 0, rst = 0, en = 0, d = 1 | q = 0
Time = 25 | clk = 1, rst = 0, en = 0, d = 1 | q = 0
Time = 30 | clk = 0, rst = 1, en = 1, d = 1 | q = 0
Time = 35 | clk = 1, rst = 1, en = 1, d = 1 | q = 0
tb.v:21: $finish called at 40 (1s)
Time = 40 | clk = 0, rst = 1, en = 1, d = 1 | q = 0
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module dff_enable(clk,rst,en,d,q);
    input clk,rst,en,d;
    output reg q;
    always @(posedge clk) begin
        if(rst)
            q <= 0;
        else if(en)
            q <= d;
    end
endmodule
```


#### Master-Slave D Flip-Flop
_Coding · Hard · Attempted · 0/40 pts_

Design a Master-Slave D Flip-Flop using Verilog HDL. A Master-Slave D Flip-Flop is built by connecting two D Latches in series with complementary enable signals. This construction is what makes the flip-flop truly **edge-triggered** — the output `q` changes only at the **falling edge** of the clock, solving the transparency problem of a single D Latch.  
  
**How It Works**  

| Stage | CLK = HIGH | CLK = LOW (Falling Edge) |
| --- | --- | --- |
| **Master Latch** | Transparent — follows D | Latched — captures D |
| **Slave Latch** | Latched — holds Q | Transparent — passes Q\_M to Q |

  
  
**Behaviour**  

| clk | d | q | Action |
| --- | --- | --- | --- |
| HIGH | X | q\_prev | Slave holds — Q unchanged while CLK is high |
| Falling Edge | 0 | 0 | Capture — Q takes value of D at falling edge |
| Falling Edge | 1 | 1 | Capture — Q takes value of D at falling edge |
| LOW | X | q\_prev | Hold — Q unchanged while CLK is low |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (falling edge triggered) |
| d | Input | 1-bit | Data input |
| q | Output | 1-bit | Final output (from slave latch) |
| q\_m | Output | 1-bit | Master latch output (internal visibility) |

  
  
**Requirements**

- Module name must be `master_slave_dff`
- Port names must be exactly `clk`, `d`, `q`, and `q_m`
- Must instantiate two `d_latch` submodules — one master, one slave
- Master latch enable must be `clk` (transparent when CLK = HIGH)
- Slave latch enable must be `~clk` (transparent when CLK = LOW)
- Output `q` must change only on the **falling edge** of the clock
- Output `q_m` must show the master latch output for verification

**Input**

The input is provided via a testbench. The testbench drives the clock and applies a single value of `d` to the `master_slave_dff` module, then observes both `q_m` (master output) and `q` (slave output) across one full clock cycle.

**Output**

For the given input, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, d = <d> | q_m = <q_m>, q = <q>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module master_slave_dff_tb;
    reg clk;
    reg d;
    wire q;
    wire q_m;
    master_slave_dff uut (
        .clk(clk),
        .d(d),
        .q(q),
        .q_m(q_m)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        d = 1;
        #20 d = 0;
        #20 d = 1;
        #20 d = 0;
        #10 $finish;
    end
    initial begin
        $dumpfile("master_slave_dff_wave.vcd");
        $dumpvars(0, clk, d, q, q_m);
        $monitor("Time = %0t | clk = %b, d = %b | q_m = %b, q = %b",
                  $time, clk, d, q_m, q);
    end
endmodule
```

**Output**

```
VCD info: dumpfile master_slave_dff_wave.vcd opened for output.
Time = 0 | clk = 0, d = 1 | q_m = x, q = x
Time = 5 | clk = 1, d = 1 | q_m = 1, q = x
Time = 10 | clk = 0, d = 1 | q_m = 1, q = 1
Time = 15 | clk = 1, d = 1 | q_m = 1, q = 1
Time = 20 | clk = 0, d = 0 | q_m = 1, q = 1
Time = 25 | clk = 1, d = 0 | q_m = 0, q = 1
Time = 30 | clk = 0, d = 0 | q_m = 0, q = 0
Time = 35 | clk = 1, d = 0 | q_m = 0, q = 0
Time = 40 | clk = 0, d = 1 | q_m = 0, q = 0
Time = 45 | clk = 1, d = 1 | q_m = 1, q = 0
Time = 50 | clk = 0, d = 1 | q_m = 1, q = 1
Time = 55 | clk = 1, d = 1 | q_m = 1, q = 1
Time = 60 | clk = 0, d = 0 | q_m = 1, q = 1
Time = 65 | clk = 1, d = 0 | q_m = 0, q = 1
tb.v:19: $finish called at 70 (1s)
Time = 70 | clk = 0, d = 0 | q_m = 0, q = 0
```

**Constraints**

N/A


### Registers, Load Enable and Reset, CPU Registers Preview (PC, IR, GPR), Counters, ... - In Class — 02 Sep 2026

#### 8-bit Register with Load Enable
_Coding · Easy · Solved ✓ · 20/20 pts_

Design an 8-bit Register with Load Enable using Verilog HDL. A register is a group of D flip-flops sharing a single clock — it stores multiple bits simultaneously. This 8-bit register stores one full byte. A 2:1 MUX before each flip-flop controls whether new data is loaded or the current value is held.  
  
When `ld = 1` (Load), the register captures the 8-bit input `d` on the rising clock edge. When `ld = 0` (Hold), the MUX feeds `q` back to its own input — the register holds its current value indefinitely while the clock keeps ticking. This is exactly how the CPU register file WRITE ENABLE signal works.  
  
**Behaviour**  

| clk | ld | d | q | Action |
| --- | --- | --- | --- | --- |
| rising edge | 1 | D\_in | D\_in | Load — q captures d |
| rising edge | 0 | X | q\_prev | Hold — q unchanged |
| no edge | X | X | q\_prev | Hold — no clock edge |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| ld | Input | 1-bit | Load enable (1 = load d, 0 = hold q) |
| d | Input | 8-bit | Data input |
| q | Output | 8-bit | Stored output |

  
  
**Requirements**

- Module name must be `register_8bit`
- Port names must be exactly `clk`, `ld`, `d`, and `q`
- Use `always @(posedge clk)` block — rising edge triggered
- When `ld = 1`, capture `d` into `q` on the rising clock edge
- When `ld = 0`, hold current value of `q` unchanged
- No reset — initial value of `q` is undefined until first load

**Input**

The input is provided via a testbench. The testbench drives the clock and applies a single combination of `ld` and 8-bit `d` to the `register_8bit` module, then observes the 8-bit output `q` after the rising clock edge.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, ld = <ld>, d = <d> | q = <q>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module register_8bit_tb;
    reg        clk;
    reg        ld;
    reg  [7:0] d;
    wire [7:0] q;
    register_8bit uut (
        .clk(clk),
        .ld(ld),
        .d(d),
        .q(q)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        ld = 1; d = 8'b10101010;
        #10 ld = 1; d = 8'b11001100;
        #10 ld = 0; d = 8'b11111111;
        #10 ld = 1; d = 8'b00001111;
        #10 $finish;
    end
    initial begin
        $dumpfile("register_8bit_wave.vcd");
        $dumpvars(0, clk, ld, d, q);
        $monitor("Time = %0t | clk = %b, ld = %b, d = %b | q = %b",
                  $time, clk, ld, d, q);
    end
endmodule
```

**Output**

```
VCD info: dumpfile register_8bit_wave.vcd opened for output.
Time = 0 | clk = 0, ld = 1, d = 10101010 | q = xxxxxxxx
Time = 5 | clk = 1, ld = 1, d = 10101010 | q = 10101010
Time = 10 | clk = 0, ld = 1, d = 11001100 | q = 10101010
Time = 15 | clk = 1, ld = 1, d = 11001100 | q = 11001100
Time = 20 | clk = 0, ld = 0, d = 11111111 | q = 11001100
Time = 25 | clk = 1, ld = 0, d = 11111111 | q = 11001100
Time = 30 | clk = 0, ld = 1, d = 00001111 | q = 11001100
Time = 35 | clk = 1, ld = 1, d = 00001111 | q = 00001111
tb.v:19: $finish called at 40 (1s)
Time = 40 | clk = 0, ld = 1, d = 00001111 | q = 00001111
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module register_8bit (clk,ld,d,q);
    input clk,ld; 
    input [7:0] d;
    output reg [7:0] q;
    always @(posedge clk) begin
        if(ld) begin
        q <=d;
        end
    end
endmodule
```


#### 8-bit Register with Synchronous Reset-
_Coding · Easy · Solved ✓ · 20/20 pts_

Design an 8-bit Register with Load Enable and Synchronous Reset using Verilog HDL. This register extends the basic load-enable register by adding a synchronous reset signal `rst`. When `rst = 1` on the rising clock edge, all 8 bits of `q` are forced to `00000000` regardless of `ld` or `d`. Reset is synchronous — it only takes effect at the clock edge, not immediately. This makes it glitch-free and safe for synchronous digital designs.  
  
The priority order on the rising clock edge is:

1. **Reset first** — if `rst = 1`, force `q = 00000000`
2. **Load second** — if `rst = 0` and `ld = 1`, capture `d` into `q`
3. **Hold last** — if `rst = 0` and `ld = 0`, keep current `q`

  
**Behaviour**  

| clk | rst | ld | d | q | Action |
| --- | --- | --- | --- | --- | --- |
| rising edge | 1 | X | X | 00000000 | Synchronous Reset — clears all bits |
| rising edge | 0 | 1 | D\_in | D\_in | Load — q captures d |
| rising edge | 0 | 0 | X | q\_prev | Hold — q unchanged |
| no edge | X | X | X | q\_prev | Hold — no clock edge |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| rst | Input | 1-bit | Synchronous reset (1 = clear q to 00000000) |
| ld | Input | 1-bit | Load enable (1 = load d, 0 = hold q) |
| d | Input | 8-bit | Data input |
| q | Output | 8-bit | Stored output |

  
  
**Requirements**

- Module name must be `register_8bit_rst`
- Port names must be exactly `clk`, `rst`, `ld`, `d`, and `q`
- Use `always @(posedge clk)` block — rising edge triggered
- Reset is synchronous — checked only on the rising clock edge, not immediately
- Reset has highest priority — overrides `ld` and `d`
- When `rst = 1`, force `q = 8'b00000000` on the rising edge
- When `rst = 0` and `ld = 1`, capture `d` into `q`
- When `rst = 0` and `ld = 0`, hold current value of `q`

**Input**

The input is provided via a testbench. The testbench drives the clock and applies a single combination of `rst`, `ld`, and 8-bit `d` to the `register_8bit_rst` module, then observes the 8-bit output `q` after the rising clock edge.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, rst = <rst>, ld = <ld>, d = <d> | q = <q>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module register_8bit_rst_tb;
    reg        clk;
    reg        rst;
    reg        ld;
    reg  [7:0] d;
    wire [7:0] q;
    register_8bit_rst uut (
        .clk(clk),
        .rst(rst),
        .ld(ld),
        .d(d),
        .q(q)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        rst = 0; ld = 1; d = 8'b10101010;
        #10 rst = 0; ld = 1; d = 8'b11001100;
        #10 rst = 0; ld = 0; d = 8'b11111111;
        #10 rst = 1; ld = 1; d = 8'b11111111;
        #10 $finish;
    end
    initial begin
        $dumpfile("register_8bit_rst_wave.vcd");
        $dumpvars(0, clk, rst, ld, d, q);
        $monitor("Time = %0t | clk = %b, rst = %b, ld = %b, d = %b | q = %b",
                  $time, clk, rst, ld, d, q);
    end
endmodule
```

**Output**

```
VCD info: dumpfile register_8bit_rst_wave.vcd opened for output.
Time = 0 | clk = 0, rst = 0, ld = 1, d = 10101010 | q = xxxxxxxx
Time = 5 | clk = 1, rst = 0, ld = 1, d = 10101010 | q = 10101010
Time = 10 | clk = 0, rst = 0, ld = 1, d = 11001100 | q = 10101010
Time = 15 | clk = 1, rst = 0, ld = 1, d = 11001100 | q = 11001100
Time = 20 | clk = 0, rst = 0, ld = 0, d = 11111111 | q = 11001100
Time = 25 | clk = 1, rst = 0, ld = 0, d = 11111111 | q = 11001100
Time = 30 | clk = 0, rst = 1, ld = 1, d = 11111111 | q = 11001100
Time = 35 | clk = 1, rst = 1, ld = 1, d = 11111111 | q = 00000000
tb.v:21: $finish called at 40 (1s)
Time = 40 | clk = 0, rst = 1, ld = 1, d = 11111111 | q = 00000000
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module register_8bit_rst (clk, rst, ld, d,q);
    input clk,rst,ld;
    input [7:0] d;
    output reg [7:0] q;
    always @(posedge clk) begin
        if(rst) begin
            q <= 8'b00000000;
        end else if(ld) begin
            q <= d;
        end
    end
endmodule
```


### CPU Registers Preview (PC, IR, GPR), Counters, Asynchronous (Ripple) Counters, S ... - In Class — 07 Sep 2026

#### 4-bit Synchronous Up Counter_
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 4-bit Synchronous Up Counter using Verilog HDL. A synchronous counter has all flip-flops sharing the same clock — every bit changes at exactly the same rising clock edge with no ripple delay and no glitches. The counter increments by 1 on every rising clock edge when enabled, counting from 0 (0000) to 15 (1111), then wrapping back to 0.  
  
This counter includes a synchronous reset `rst` and a count enable `en`. When `rst = 1`, the counter clears to 0000 on the next rising edge. When `en = 0`, the counter pauses — all flip-flops hold their current value. When `en = 1` and `rst = 0`, the counter increments normally. A Terminal Count output `tc` goes HIGH when the counter reaches 15 (1111) — used for cascading multiple counters.  
  
**Behaviour**  

| clk | rst | en | q | tc | Action |
| --- | --- | --- | --- | --- | --- |
| rising edge | 1 | X | 0000 | 0 | Synchronous Reset — counter clears |
| rising edge | 0 | 0 | q\_prev | q\_prev==1111 | Hold — counter paused |
| rising edge | 0 | 1 | q\_prev + 1 | q\_next==1111 | Count — increment by 1 |
| rising edge | 0 | 1 | 0000 | 0 | Wrap — 1111 rolls over to 0000 |

  
  
**Count Sequence**  

| Decimal | Q3 | Q2 | Q1 | Q0 | tc |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 2 | 0 | 0 | 1 | 0 | 0 |
| 3 | 0 | 0 | 1 | 1 | 0 |
| 4 | 0 | 1 | 0 | 0 | 0 |
| 5 | 0 | 1 | 0 | 1 | 0 |
| 6 | 0 | 1 | 1 | 0 | 0 |
| 7 | 0 | 1 | 1 | 1 | 0 |
| 8 | 1 | 0 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 1 | 0 |
| 10 | 1 | 0 | 1 | 0 | 0 |
| 11 | 1 | 0 | 1 | 1 | 0 |
| 12 | 1 | 1 | 0 | 0 | 0 |
| 13 | 1 | 1 | 0 | 1 | 0 |
| 14 | 1 | 1 | 1 | 0 | 0 |
| 15 | 1 | 1 | 1 | 1 | 1 |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| rst | Input | 1-bit | Synchronous reset (1 = clear to 0000) |
| en | Input | 1-bit | Count enable (1 = count, 0 = hold) |
| q | Output | 4-bit | Current count value |
| tc | Output | 1-bit | Terminal count (1 when q = 1111) |

  
  
**Requirements**

- Module name must be `sync_counter_4bit`
- Port names must be exactly `clk`, `rst`, `en`, `q`, and `tc`
- Use `always @(posedge clk)` block — rising edge triggered
- Reset is synchronous — checked only on the rising clock edge
- When `rst = 1`, force `q = 4'b0000`
- When `rst = 0` and `en = 1`, increment `q` by 1
- When `rst = 0` and `en = 0`, hold current value of `q`
- Counter wraps from 1111 back to 0000 automatically
- Terminal count `tc` must be 1 only when `q = 4'b1111`

**Input**

The input is provided via a testbench. The testbench drives the clock and applies a combination of `rst` and `en` to the `sync_counter_4bit` module, then observes the 4-bit count output `q` and terminal count `tc` across multiple clock cycles.

**Output**

For the given input combination, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, rst = <rst>, en = <en> | q = <q>, tc = <tc>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module sync_counter_4bit_tb;
    reg  clk;
    reg  rst;
    reg  en;
    wire [3:0] q;
    wire       tc;
    sync_counter_4bit uut (
        .clk(clk),
        .rst(rst),
        .en(en),
        .q(q),
        .tc(tc)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        rst = 1; en = 0;
        #10 rst = 0; en = 1;
        #160 rst = 1; en = 1;
        #10 rst = 0; en = 0;
        #20 $finish;
    end
    initial begin
        $dumpfile("sync_counter_4bit_wave.vcd");
        $dumpvars(0, clk, rst, en, q, tc);
        $monitor("Time = %0t | clk = %b, rst = %b, en = %b | q = %b, tc = %b",
                  $time, clk, rst, en, q, tc);
    end
endmodule
```

**Output**

```
VCD info: dumpfile sync_counter_4bit_wave.vcd opened for output.
Time = 0 | clk = 0, rst = 1, en = 0 | q = xxxx, tc = x
Time = 5 | clk = 1, rst = 1, en = 0 | q = 0000, tc = 0
Time = 10 | clk = 0, rst = 0, en = 1 | q = 0000, tc = 0
Time = 15 | clk = 1, rst = 0, en = 1 | q = 0001, tc = 0
Time = 20 | clk = 0, rst = 0, en = 1 | q = 0001, tc = 0
Time = 25 | clk = 1, rst = 0, en = 1 | q = 0010, tc = 0
Time = 30 | clk = 0, rst = 0, en = 1 | q = 0010, tc = 0
Time = 35 | clk = 1, rst = 0, en = 1 | q = 0011, tc = 0
Time = 40 | clk = 0, rst = 0, en = 1 | q = 0011, tc = 0
Time = 45 | clk = 1, rst = 0, en = 1 | q = 0100, tc = 0
Time = 50 | clk = 0, rst = 0, en = 1 | q = 0100, tc = 0
Time = 55 | clk = 1, rst = 0, en = 1 | q = 0101, tc = 0
Time = 60 | clk = 0, rst = 0, en = 1 | q = 0101, tc = 0
Time = 65 | clk = 1, rst = 0, en = 1 | q = 0110, tc = 0
Time = 70 | clk = 0, rst = 0, en = 1 | q = 0110, tc = 0
Time = 75 | clk = 1, rst = 0, en = 1 | q = 0111, tc = 0
Time = 80 | clk = 0, rst = 0, en = 1 | q = 0111, tc = 0
Time = 85 | clk = 1, rst = 0, en = 1 | q = 1000, tc = 0
Time = 90 | clk = 0, rst = 0, en = 1 | q = 1000, tc = 0
Time = 95 | clk = 1, rst = 0, en = 1 | q = 1001, tc = 0
Time = 100 | clk = 0, rst = 0, en = 1 | q = 1001, tc = 0
Time = 105 | clk = 1, rst = 0, en = 1 | q = 1010, tc = 0
Time = 110 | clk = 0, rst = 0, en = 1 | q = 1010, tc = 0
Time = 115 | clk = 1, rst = 0, en = 1 | q = 1011, tc = 0
Time = 120 | clk = 0, rst = 0, en = 1 | q = 1011, tc = 0
Time = 125 | clk = 1, rst = 0, en = 1 | q = 1100, tc = 0
Time = 130 | clk = 0, rst = 0, en = 1 | q = 1100, tc = 0
Time = 135 | clk = 1, rst = 0, en = 1 | q = 1101, tc = 0
Time = 140 | clk = 0, rst = 0, en = 1 | q = 1101, tc = 0
Time = 145 | clk = 1, rst = 0, en = 1 | q = 1110, tc = 0
Time = 150 | clk = 0, rst = 0, en = 1 | q = 1110, tc = 0
Time = 155 | clk = 1, rst = 0, en = 1 | q = 1111, tc = 1
Time = 160 | clk = 0, rst = 0, en = 1 | q = 1111, tc = 1
Time = 165 | clk = 1, rst = 0, en = 1 | q = 0000, tc = 0
Time = 170 | clk = 0, rst = 1, en = 1 | q = 0000, tc = 0
Time = 175 | clk = 1, rst = 1, en = 1 | q = 0000, tc = 0
Time = 180 | clk = 0, rst = 0, en = 0 | q = 0000, tc = 0
Time = 185 | clk = 1, rst = 0, en = 0 | q = 0000, tc = 0
Time = 190 | clk = 0, rst = 0, en = 0 | q = 0000, tc = 0
Time = 195 | clk = 1, rst = 0, en = 0 | q = 0000, tc = 0
tb.v:21: $finish called at 200 (1s)
Time = 200 | clk = 0, rst = 0, en = 0 | q = 0000, tc = 0

```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module sync_counter_4bit (clk, rst, en, q, tc);
    input clk,rst,en;
    output reg[3:0] q;
    output wire tc;
    assign tc  = (q == 4'b1111);
    always @(posedge clk) begin
        if(rst == 1) begin
            q <= 4'b0000;
        end else if(en == 1) begin
            q <= q + 1;
        end

    end
endmodule
```


#### SIPO Shift Register
_Coding · Hard · Solved ✓ · 40/40 pts_

Design a 4-bit Serial In, Parallel Out (SIPO) Shift Register using Verilog HDL. A SIPO shift register receives data one bit at a time through a serial input and presents all bits simultaneously at parallel outputs after 4 clock cycles. This is the fundamental operation of a UART receiver — it converts an incoming serial bit stream into a parallel data word that the CPU can read all at once.  
  
On every rising clock edge, the new serial bit `d_in` enters at `q[0]` (LSB), and all existing bits shift one position to the right — `q[0]` moves to `q[1]`, `q[1]` moves to `q[2]`, and `q[2]` moves to `q[3]`. After 4 clock cycles, the complete 4-bit word is available at `q[3:0]` simultaneously. A synchronous reset `rst` clears all bits to 0000.  
  
**Operation Trace (input stream: 1, 0, 1, 1)**  

| Cycle | d\_in | q[0] (FF0) | q[1] (FF1) | q[2] (FF2) | q[3] (FF3) |
| --- | --- | --- | --- | --- | --- |
| Init | — | 0 | 0 | 0 | 0 |
| 1 ↑ | 1 | 1 | 0 | 0 | 0 |
| 2 ↑ | 0 | 0 | 1 | 0 | 0 |
| 3 ↑ | 1 | 1 | 0 | 1 | 0 |
| 4 ↑ | 1 | 1 | 1 | 0 | 1 |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| rst | Input | 1-bit | Synchronous reset (1 = clear all bits to 0) |
| d\_in | Input | 1-bit | Serial data input (one bit per cycle) |
| q | Output | 4-bit | Parallel output (all 4 bits simultaneously) |

  
  
**Requirements**

- Module name must be `sipo`
- Port names must be exactly `clk`, `rst`, `d_in`, and `q`
- Use `always @(posedge clk)` block — rising edge triggered
- Reset is synchronous — clears all bits to `4'b0000` on rising edge
- On every rising edge, shift all bits right by one position
- New serial bit `d_in` enters at `q[0]` (LSB) on every clock
- After 4 cycles, the full parallel word is available at `q[3:0]`

**Input**

The input is provided via a testbench. The testbench drives the clock and serially feeds one bit per cycle via `d_in` to the `sipo` module, then observes the 4-bit parallel output `q` after each rising clock edge.

**Output**

For the given input, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, rst = <rst>, d_in = <d_in> | q = <q>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module sipo_tb;
    reg  clk;
    reg  rst;
    reg  d_in;
    wire [3:0] q;
    sipo uut (
        .clk(clk),
        .rst(rst),
        .d_in(d_in),
        .q(q)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        rst = 1; d_in = 0;
        #10 rst = 0;
        d_in = 1; #10
        d_in = 0; #10
        d_in = 1; #10
        d_in = 1; #10
        rst = 1; #10
        rst = 0;
        d_in = 1; #10
        d_in = 1; #10
        d_in = 0; #10
        d_in = 1; #10
        $finish;
    end
    initial begin
        $dumpfile("sipo_wave.vcd");
        $dumpvars(1);
        $monitor("Time = %0t | clk = %b, rst = %b, d_in = %b | q = %b",
                  $time, clk, rst, d_in, q);
    end
endmodule
```

**Output**

```
VCD info: dumpfile sipo_wave.vcd opened for output.
Time = 0 | clk = 0, rst = 1, d_in = 0 | q = xxxx
Time = 5 | clk = 1, rst = 1, d_in = 0 | q = 0000
Time = 10 | clk = 0, rst = 0, d_in = 1 | q = 0000
Time = 15 | clk = 1, rst = 0, d_in = 1 | q = 0001
Time = 20 | clk = 0, rst = 0, d_in = 0 | q = 0001
Time = 25 | clk = 1, rst = 0, d_in = 0 | q = 0010
Time = 30 | clk = 0, rst = 0, d_in = 1 | q = 0010
Time = 35 | clk = 1, rst = 0, d_in = 1 | q = 0101
Time = 40 | clk = 0, rst = 0, d_in = 1 | q = 0101
Time = 45 | clk = 1, rst = 0, d_in = 1 | q = 1011
Time = 50 | clk = 0, rst = 1, d_in = 1 | q = 1011
Time = 55 | clk = 1, rst = 1, d_in = 1 | q = 0000
Time = 60 | clk = 0, rst = 0, d_in = 1 | q = 0000
Time = 65 | clk = 1, rst = 0, d_in = 1 | q = 0001
Time = 70 | clk = 0, rst = 0, d_in = 1 | q = 0001
Time = 75 | clk = 1, rst = 0, d_in = 1 | q = 0011
Time = 80 | clk = 0, rst = 0, d_in = 0 | q = 0011
Time = 85 | clk = 1, rst = 0, d_in = 0 | q = 0110
Time = 90 | clk = 0, rst = 0, d_in = 1 | q = 0110
Time = 95 | clk = 1, rst = 0, d_in = 1 | q = 1101
tb.v:27: $finish called at 100 (1s)
Time = 100 | clk = 0, rst = 0, d_in = 1 | q = 1101
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module sipo (clk,rst,d_in,q);
    input clk,rst,d_in;
    output reg [3:0] q;
    always @(posedge clk) begin
        if (rst) begin
            q <= 4'b0000;
        end else begin
            q[0] <= d_in;
            q[1] <= q[0];
            q[2] <= q[1];
            q[3] <= q[2];
        end
    end
endmodule
```


#### PISO Shift Register
_Coding · Easy · Solved ✓ · 20/20 pts_

Design a 4-bit Parallel In, Serial Out (PISO) Shift Register using Verilog HDL. A PISO shift register is the opposite of SIPO — it loads all 4 bits simultaneously in one clock cycle and then shifts them out one bit at a time on each subsequent clock cycle. This is the fundamental operation of a UART transmitter — it converts a parallel data word from the CPU into a serial bit stream that can be sent over a single wire.  
  
The operation is controlled by a `sh_ld` (Shift/Load) signal. When `sh_ld = 0` (Load mode), all 4 bits of `d` are loaded into the register simultaneously on the rising clock edge. When `sh_ld = 1` (Shift mode), the register shifts right by one position on each rising clock edge — `q[1]` moves to `q[0]`, `q[2]` moves to `q[1]`, `q[3]` moves to `q[2]`, and 0 is shifted into `q[3]`. The serial output `d_out` is always the LSB `q[0]`.  
  
**Operation Trace (loading 1011, then shifting out MSB first)**  

| Phase | sh\_ld | q[3] | q[2] | q[1] | q[0] | d\_out |
| --- | --- | --- | --- | --- | --- | --- |
| LOAD | 0 | 1 | 0 | 1 | 1 | 1 |
| Shift 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| Shift 2 | 1 | 0 | 0 | 1 | 0 | 0 |
| Shift 3 | 1 | 0 | 0 | 0 | 1 | 1 |
| Shift 4 | 1 | 0 | 0 | 0 | 0 | 0 |

  
  
**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock signal (rising edge triggered) |
| rst | Input | 1-bit | Synchronous reset (1 = clear all bits to 0) |
| sh\_ld | Input | 1-bit | Shift/Load control (0 = load d, 1 = shift right) |
| d | Input | 4-bit | Parallel data input (loaded when sh\_ld = 0) |
| q | Output | 4-bit | Internal register state |
| d\_out | Output | 1-bit | Serial output (always q[0] — LSB exits first) |

  
  
**Requirements**

- Module name must be `piso`
- Port names must be exactly `clk`, `rst`, `sh_ld`, `d`, `q`, and `d_out`
- Use `always @(posedge clk)` block — rising edge triggered
- Reset is synchronous — clears all bits to `4'b0000` on rising edge
- When `sh_ld = 0`, load all 4 bits of `d` into `q` simultaneously
- When `sh_ld = 1`, shift right — `q[0] <= q[1]`, `q[1] <= q[2]`, `q[2] <= q[3]`, `q[3] <= 0`
- Serial output `d_out` must always follow `q[0]`

**Input**

The input is provided via a testbench. The testbench drives the clock and applies `sh_ld` and 4-bit parallel data `d` to the `piso` module. First a parallel load is performed (`sh_ld = 0`), then the data is shifted out serially (`sh_ld = 1`). The serial output `d_out` and internal state `q` are observed after each rising clock edge.

**Output**

For the given input, print the result in the following format:  
  

```
Time = <time> | clk = <clk>, rst = <rst>, sh_ld = <sh_ld>, d = <d> | q = <q>, d_out = <d_out>
```

Where all values are printed in binary format.

**Example**

**Test Bench**

```
module piso_tb;
    reg        clk;
    reg        rst;
    reg        sh_ld;
    reg  [3:0] d;
    wire [3:0] q;
    wire       d_out;
    piso uut (
        .clk(clk),
        .rst(rst),
        .sh_ld(sh_ld),
        .d(d),
        .q(q),
        .d_out(d_out)
    );
    initial clk = 0;
    always #5 clk = ~clk;
    initial begin
        rst = 1; sh_ld = 0; d = 4'b0000;
        #10 rst = 0; sh_ld = 0; d = 4'b1011;
        #10 sh_ld = 1;
        #40 sh_ld = 0; d = 4'b1100;
        #10 sh_ld = 1;
        #40 $finish;
    end
    initial begin
        $dumpfile("piso_wave.vcd");
        $dumpvars(1);
        $monitor("Time = %0t | clk = %b, rst = %b, sh_ld = %b, d = %b | q = %b, d_out = %b",
                  $time, clk, rst, sh_ld, d, q, d_out);
    end
endmodule
```

**Output**

```
VCD info: dumpfile piso_wave.vcd opened for output.
Time = 0 | clk = 0, rst = 1, sh_ld = 0, d = 0000 | q = xxxx, d_out = x
Time = 5 | clk = 1, rst = 1, sh_ld = 0, d = 0000 | q = 0000, d_out = 0
Time = 10 | clk = 0, rst = 0, sh_ld = 0, d = 1011 | q = 0000, d_out = 0
Time = 15 | clk = 1, rst = 0, sh_ld = 0, d = 1011 | q = 1011, d_out = 1
Time = 20 | clk = 0, rst = 0, sh_ld = 1, d = 1011 | q = 1011, d_out = 1
Time = 25 | clk = 1, rst = 0, sh_ld = 1, d = 1011 | q = 0101, d_out = 1
Time = 30 | clk = 0, rst = 0, sh_ld = 1, d = 1011 | q = 0101, d_out = 1
Time = 35 | clk = 1, rst = 0, sh_ld = 1, d = 1011 | q = 0010, d_out = 0
Time = 40 | clk = 0, rst = 0, sh_ld = 1, d = 1011 | q = 0010, d_out = 0
Time = 45 | clk = 1, rst = 0, sh_ld = 1, d = 1011 | q = 0001, d_out = 1
Time = 50 | clk = 0, rst = 0, sh_ld = 1, d = 1011 | q = 0001, d_out = 1
Time = 55 | clk = 1, rst = 0, sh_ld = 1, d = 1011 | q = 0000, d_out = 0
Time = 60 | clk = 0, rst = 0, sh_ld = 0, d = 1100 | q = 0000, d_out = 0
Time = 65 | clk = 1, rst = 0, sh_ld = 0, d = 1100 | q = 1100, d_out = 0
Time = 70 | clk = 0, rst = 0, sh_ld = 1, d = 1100 | q = 1100, d_out = 0
Time = 75 | clk = 1, rst = 0, sh_ld = 1, d = 1100 | q = 0110, d_out = 0
Time = 80 | clk = 0, rst = 0, sh_ld = 1, d = 1100 | q = 0110, d_out = 0
Time = 85 | clk = 1, rst = 0, sh_ld = 1, d = 1100 | q = 0011, d_out = 1
Time = 90 | clk = 0, rst = 0, sh_ld = 1, d = 1100 | q = 0011, d_out = 1
Time = 95 | clk = 1, rst = 0, sh_ld = 1, d = 1100 | q = 0001, d_out = 1
Time = 100 | clk = 0, rst = 0, sh_ld = 1, d = 1100 | q = 0001, d_out = 1
Time = 105 | clk = 1, rst = 0, sh_ld = 1, d = 1100 | q = 0000, d_out = 0
tb.v:25: $finish called at 110 (1s)
Time = 110 | clk = 0, rst = 0, sh_ld = 1, d = 1100 | q = 0000, d_out = 0
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module piso (clk,rst,sh_ld,d,q,d_out);
    input clk,rst,sh_ld;
    input [3:0] d;
    output reg[3:0] q;
    output wire d_out;

    assign d_out = q[0];
    
    always @(posedge clk) begin
        if(rst) begin
            q <= 4'b0000;
        end else begin
            if (sh_ld == 0) begin
                q <= d;
            end else begin
                q[0] <= q[1];
                q[1] <= q[2];
                q[2] <= q[3];
                q[3] <= 0;
            end
        end
    end
endmodule
```


### CPU Registers Preview (PC, IR, GPR), Register Files & Finite State Machines, Fro ... - In Class — 09 Sep 2026

#### Build a 4-Register 32-Bit Register File with Dual Read Ports
_Coding · Hard · Solved ✓ · 40/40 pts_

Design a **4-register, 32-bit Register File** using Verilog HDL. The register file contains four 32-bit registers (`R0`–`R3`) and supports **one synchronous write port** and **two asynchronous read ports**.

- Data is written into the selected register on the **positive edge of the clock** when `we` (write enable) is HIGH.
- Two registers can be read simultaneously using independent read addresses.
- If `we` is LOW, no register should be updated.
- Assume all registers are initialized to `32'b0`.

**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock input |
| we | Input | 1-bit | Write enable |
| wr\_addr | Input | 2-bit | Write register address |
| wr\_data | Input | 32-bit | Data to be written into the selected register |
| rd\_addr1 | Input | 2-bit | Read address for read port 1 |
| rd\_addr2 | Input | 2-bit | Read address for read port 2 |
| rd\_data1 | Output | 32-bit | Data read from register selected by `rd_addr1` |
| rd\_data2 | Output | 32-bit | Data read from register selected by `rd_addr2` |

  
  
**Register Address Mapping**

| Address | Register |
| --- | --- |
| 2'b00 | R0 |
| 2'b01 | R1 |
| 2'b10 | R2 |
| 2'b11 | R3 |

  
  
**Requirements**

- Module name must be `register_file`.
- Port names must be exactly `clk`, `we`, `wr_addr`, `wr_data`, `rd_addr1`, `rd_addr2`, `rd_data1`, and `rd_data2`.
- Implement exactly four 32-bit registers.
- Write operations must occur only on the positive edge of `clk` when `we` is HIGH.
- Read operations must be asynchronous (continuous).
- Only the register selected by `wr_addr` should be updated during a write.
- Assume all registers are initialized to `32'b0`.

**Input**

**Test Bench**

```
module register_file_tb;
reg clk;
reg we;
reg [1:0] wr_addr;
reg [31:0] wr_data;
reg [1:0] rd_addr1;
reg [1:0] rd_addr2;
wire [31:0] rd_data1;
wire [31:0] rd_data2;

register_file uut (
    .clk(clk), .we(we), .wr_addr(wr_addr), .wr_data(wr_data),
    .rd_addr1(rd_addr1), .rd_addr2(rd_addr2),
    .rd_data1(rd_data1), .rd_data2(rd_data2)
);

always #5 clk = ~clk;

initial begin
    clk = 0; we = 0;
    wr_addr = 2'b00; wr_data = 32'hFFFFFFFF;
    rd_addr1 = 2'b00; rd_addr2 = 2'b00;
    #20;
    we = 1; wr_addr = 2'b00; wr_data = 32'h12345678;
    #10;
    we = 0; wr_data = 32'h09999999;   // attempted write while we=0 must be ignored
    #10;
    $finish;
end

initial begin
    $dumpfile("tb2_wave.vcd");
    $dumpvars(0, clk, we, wr_addr, wr_data, rd_addr1, rd_addr2, rd_data1, rd_data2);
    $monitor("Time=%0t | WE=%b | WR=%b DATA=%h | RD1=%b DATA1=%h | RD2=%b DATA2=%h",
             $time, we, wr_addr, wr_data, rd_addr1, rd_data1, rd_addr2, rd_data2);
end
endmodule
```

**Output**

```
VCD info: dumpfile tb2_wave.vcd opened for output.
Time=0 | WE=0 | WR=00 DATA=ffffffff | RD1=00 DATA1=00000000 | RD2=00 DATA2=00000000
Time=20 | WE=1 | WR=00 DATA=12345678 | RD1=00 DATA1=00000000 | RD2=00 DATA2=00000000
Time=25 | WE=1 | WR=00 DATA=12345678 | RD1=00 DATA1=12345678 | RD2=00 DATA2=12345678
Time=30 | WE=0 | WR=00 DATA=09999999 | RD1=00 DATA1=12345678 | RD2=00 DATA2=12345678
tb.v:28: $finish called at 40 (1s)
```

**Example**

Write all 4 registers, then read all combinations

**Test Bench**

```
module register_file_tb;
reg clk;
reg we;
reg [1:0] wr_addr;
reg [31:0] wr_data;
reg [1:0] rd_addr1;
reg [1:0] rd_addr2;
wire [31:0] rd_data1;
wire [31:0] rd_data2;

register_file uut (
    .clk(clk), .we(we), .wr_addr(wr_addr), .wr_data(wr_data),
    .rd_addr1(rd_addr1), .rd_addr2(rd_addr2),
    .rd_data1(rd_data1), .rd_data2(rd_data2)
);

always #5 clk = ~clk;

initial begin
    clk = 0; we = 0;
    wr_addr = 2'b00; wr_data = 32'h00000000;
    rd_addr1 = 2'b00; rd_addr2 = 2'b11;
    #10;
    we = 1; wr_addr = 2'b00; wr_data = 32'hAAAAAAAA;
    #10;
    wr_addr = 2'b01; wr_data = 32'hBBBBBBBB;
    #10;
    wr_addr = 2'b10; wr_data = 32'hCCCCCCCC;
    #10;
    wr_addr = 2'b11; wr_data = 32'hDDDDDDDD;
    #10;
    we = 0; rd_addr1 = 2'b00; rd_addr2 = 2'b01;
    #10;
    rd_addr1 = 2'b10; rd_addr2 = 2'b11;
    #10;
    rd_addr1 = 2'b11; rd_addr2 = 2'b00;
    #10;
    $finish;
end

initial begin
    $dumpfile("tb1_wave.vcd");
    $dumpvars(0, clk, we, wr_addr, wr_data, rd_addr1, rd_addr2, rd_data1, rd_data2);
    $monitor("Time=%0t | WE=%b | WR=%b DATA=%h | RD1=%b DATA1=%h | RD2=%b DATA2=%h",
             $time, we, wr_addr, wr_data, rd_addr1, rd_data1, rd_addr2, rd_data2);
end
endmodule
```

**Output**

```
VCD info: dumpfile tb1_wave.vcd opened for output.
Time=0 | WE=0 | WR=00 DATA=00000000 | RD1=00 DATA1=00000000 | RD2=11 DATA2=00000000
Time=10 | WE=1 | WR=00 DATA=aaaaaaaa | RD1=00 DATA1=00000000 | RD2=11 DATA2=00000000
Time=15 | WE=1 | WR=00 DATA=aaaaaaaa | RD1=00 DATA1=aaaaaaaa | RD2=11 DATA2=00000000
Time=20 | WE=1 | WR=01 DATA=bbbbbbbb | RD1=00 DATA1=aaaaaaaa | RD2=11 DATA2=00000000
Time=30 | WE=1 | WR=10 DATA=cccccccc | RD1=00 DATA1=aaaaaaaa | RD2=11 DATA2=00000000
Time=40 | WE=1 | WR=11 DATA=dddddddd | RD1=00 DATA1=aaaaaaaa | RD2=11 DATA2=00000000
Time=45 | WE=1 | WR=11 DATA=dddddddd | RD1=00 DATA1=aaaaaaaa | RD2=11 DATA2=dddddddd
Time=50 | WE=0 | WR=11 DATA=dddddddd | RD1=00 DATA1=aaaaaaaa | RD2=01 DATA2=bbbbbbbb
Time=60 | WE=0 | WR=11 DATA=dddddddd | RD1=10 DATA1=cccccccc | RD2=11 DATA2=dddddddd
Time=70 | WE=0 | WR=11 DATA=dddddddd | RD1=11 DATA1=dddddddd | RD2=00 DATA2=aaaaaaaa
tb.v:38: $finish called at 80 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module register_file (
    input clk,
    input we,
    input [1:0] wr_addr,
    input [31:0] wr_data,
    input [1:0] rd_addr1,
    input [1:0] rd_addr2,
    output [31:0] rd_data1,
    output [31:0] rd_data2
);

reg [31:0] reg_file [0:3];

// Initializing all 4 registers
/*
initial begin
    reg_file[0] = 32'b0;
    reg_file[1] = 32'b0;
    reg_file[2] = 32'b0;
    reg_file[3] = 32'b0;
end */
integer i;
initial begin
    for(i=0;i<4;i=i+1)
    reg_file[i] = 32'b0;
end
// Writing logic
always @(posedge clk) begin
    if (we)
        reg_file[wr_addr] <= wr_data;
end

// Asynchronous read logic
assign rd_data1 = reg_file[rd_addr1];
assign rd_data2 = reg_file[rd_addr2];

endmodule
```


#### Register File with Synchronous Reset & Hardwired Zero Register
_Coding · Hard · Solved ✓ · 40/40 pts_

Design a 4-register, 32-bit Register File named `regfile` with one synchronous write port and two independent asynchronous (combinational) read ports. In addition to normal register storage, the file must implement two special behaviors:

1. **Synchronous reset** — when `rst` is HIGH on the rising edge of `clk`, all four registers are cleared to `32'b0`, overriding any pending write.
2. **Hardwired-zero register (R0)** — register `R0` (address `2'b00`) always behaves as constant zero:
   - Any write targeting `wr_addr == 2'b00` must be silently dropped (register 0 never actually changes).
   - Any read from address `2'b00` on either port must return `32'b0`, always — regardless of what may or may not be stored there.

**Module Interface**

| Port | Direction | Width | Description |
| --- | --- | --- | --- |
| clk | Input | 1-bit | Clock input |
| rst | Input | 1-bit | Synchronous reset (active-high) |
| we | Input | 1-bit | Write enable |
| wr\_addr | Input | 2-bit | Write register address |
| wr\_data | Input | 32-bit | Data to be written into the selected register |
| rd\_addr\_a | Input | 2-bit | Read address for read port A |
| rd\_addr\_b | Input | 2-bit | Read address for read port B |
| rd\_data\_a | Output | 32-bit | Data read from register selected by `rd_addr_a` |
| rd\_data\_b | Output | 32-bit | Data read from register selected by `rd_addr_b` |

**Register Address Mapping**

| Address | Register | Behavior |
| --- | --- | --- |
| 2'b00 | R0 | Hardwired zero — writes ignored, reads always return 0 |
| 2'b01 | R1 | Normal read/write |
| 2'b10 | R2 | Normal read/write |
| 2'b11 | R3 | Normal read/write |

**Requirements**

- Module name must be `regfile`.
- Port names must be exactly `clk`, `rst`, `we`, `wr_addr`, `wr_data`, `rd_addr_a`, `rd_addr_b`, `rd_data_a`, and `rd_data_b`.
- Implement exactly four 32-bit registers.
- On `posedge clk`, if `rst` is HIGH, all four registers must clear to `32'b0`, taking priority over any write.
- Write operations must occur only on the positive edge of `clk` when `we` is HIGH and `rst` is LOW.
- Writes targeting `wr_addr == 2'b00` must never change any register.
- Read operations must be asynchronous (continuous) on both ports.
- Reads from address `2'b00` on either port must always output `32'b0`, unconditionally.
- Only the register selected by `wr_addr` (if not `2'b00`) should be updated during a write.
- Assume all registers are initialized to `32'b0` after reset.

**Input**

```
module regfile_tb;
reg clk, rst, we;
reg [1:0] wr_addr, rd_addr_a, rd_addr_b;
reg [31:0] wr_data;
wire [31:0] rd_data_a, rd_data_b;

regfile uut (
    .clk(clk), .rst(rst), .we(we),
    .wr_addr(wr_addr), .wr_data(wr_data),
    .rd_addr_a(rd_addr_a), .rd_addr_b(rd_addr_b),
    .rd_data_a(rd_data_a), .rd_data_b(rd_data_b)
);

always #5 clk = ~clk;

initial begin
    clk = 0; rst = 1; we = 0;
    wr_addr = 2'b00; wr_data = 32'h00000000;
    rd_addr_a = 2'b01; rd_addr_b = 2'b10;
    #10;
    rst = 0; we = 1; wr_addr = 2'b01; wr_data = 32'hAAAA1111;
    #10;
    wr_addr = 2'b10; wr_data = 32'hBBBB2222;
    #10;
    we = 0;
    #10;
    rst = 1;                   // reset again — must clear R1 & R2 back to zero
    #10;
    rst = 0;
    #10;
    $finish;
end

initial begin
    $dumpfile("regfile_tb3.vcd");
    $dumpvars(0, clk, rst, we, wr_addr, wr_data, rd_addr_a, rd_data_a, rd_addr_b, rd_data_b);
    $monitor("Time=%0t | RST=%b WE=%b | WR=%b DATA=%h | A_addr=%b A_data=%h | B_addr=%b B_data=%h",
             $time, rst, we, wr_addr, wr_data, rd_addr_a, rd_data_a, rd_addr_b, rd_data_b);
end
endmodule
```

**Output**

VCD info: dumpfile regfile\_tb3.vcd opened for output.
Time=0 | RST=1 WE=0 | WR=00 DATA=00000000 | A\_addr=01 A\_data=xxxxxxxx | B\_addr=10 B\_data=xxxxxxxx
Time=5 | RST=1 WE=0 | WR=00 DATA=00000000 | A\_addr=01 A\_data=00000000 | B\_addr=10 B\_data=00000000
Time=10 | RST=0 WE=1 | WR=01 DATA=aaaa1111 | A\_addr=01 A\_data=00000000 | B\_addr=10 B\_data=00000000
Time=15 | RST=0 WE=1 | WR=01 DATA=aaaa1111 | A\_addr=01 A\_data=aaaa1111 | B\_addr=10 B\_data=00000000
Time=20 | RST=0 WE=1 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=aaaa1111 | B\_addr=10 B\_data=00000000
Time=25 | RST=0 WE=1 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=aaaa1111 | B\_addr=10 B\_data=bbbb2222
Time=30 | RST=0 WE=0 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=aaaa1111 | B\_addr=10 B\_data=bbbb2222
Time=40 | RST=1 WE=0 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=aaaa1111 | B\_addr=10 B\_data=bbbb2222
Time=45 | RST=1 WE=0 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=00000000 | B\_addr=10 B\_data=00000000
Time=50 | RST=0 WE=0 | WR=10 DATA=bbbb2222 | A\_addr=01 A\_data=00000000 | B\_addr=10 B\_data=00000000
tb.v:31: $finish called at 60 (1s)

**Example**

#### R0 always reads zero, even mid-attack with repeated write attempts

**Testbench**

```

module regfile_tb2;
reg clk, rst, we;
reg [1:0] wr_addr, rd_addr_a, rd_addr_b;
reg [31:0] wr_data;
wire [31:0] rd_data_a, rd_data_b;

regfile uut (
    .clk(clk), .rst(rst), .we(we),
    .wr_addr(wr_addr), .wr_data(wr_data),
    .rd_addr_a(rd_addr_a), .rd_addr_b(rd_addr_b),
    .rd_data_a(rd_data_a), .rd_data_b(rd_data_b)
);

always #5 clk = ~clk;

initial begin
    clk = 0; rst = 1; we = 0;
    wr_addr = 2'b00; wr_data = 32'h00000000;
    rd_addr_a = 2'b00; rd_addr_b = 2'b00;
    #10;
    rst = 0; we = 1; wr_addr = 2'b00; wr_data = 32'hDEAD0000;  // attempt write R0
    #10;
    wr_addr = 2'b01; wr_data = 32'h12345678;                   // legit write to R1
    #10;
    wr_addr = 2'b00; wr_data = 32'hFACEFACE;                   // attempt write R0 again
    #10;
    we = 0; rd_addr_a = 2'b00; rd_addr_b = 2'b01;
    #10;
    rd_addr_a = 2'b01; rd_addr_b = 2'b00;
    #10;
    $finish;
end

initial begin
    $dumpfile("regfile_tb2.vcd");
    $dumpvars(0, clk, rst, we, wr_addr, wr_data, rd_addr_a, rd_data_a, rd_addr_b, rd_data_b);
    $monitor("Time=%0t | RST=%b WE=%b | WR=%b DATA=%h | A_addr=%b A_data=%h | B_addr=%b B_data=%h",
             $time, rst, we, wr_addr, wr_data, rd_addr_a, rd_data_a, rd_addr_b, rd_data_b);
end
endmodule
```

**Output**

```
VCD info: dumpfile regfile_tb2.vcd opened for output.
Time=0 | RST=1 WE=0 | WR=00 DATA=00000000 | A_addr=00 A_data=00000000 | B_addr=00 B_data=00000000
Time=10 | RST=0 WE=1 | WR=00 DATA=dead0000 | A_addr=00 A_data=00000000 | B_addr=00 B_data=00000000
Time=20 | RST=0 WE=1 | WR=01 DATA=12345678 | A_addr=00 A_data=00000000 | B_addr=00 B_data=00000000
Time=30 | RST=0 WE=1 | WR=00 DATA=faceface | A_addr=00 A_data=00000000 | B_addr=00 B_data=00000000
Time=40 | RST=0 WE=0 | WR=00 DATA=faceface | A_addr=00 A_data=00000000 | B_addr=01 B_data=12345678
Time=50 | RST=0 WE=0 | WR=00 DATA=faceface | A_addr=01 A_data=12345678 | B_addr=00 B_data=00000000
tb.v:31: $finish called at 60 (1s)
```

**Constraints**

N/A

**My solution** (Verilog (Icarus 13.0))

```
module regfile (
    input clk,
    input rst,
    input we,
    input [1:0] wr_addr,
    input [31:0] wr_data,
    input [1:0] rd_addr_a,
    input [1:0] rd_addr_b,
    output [31:0] rd_data_a,
    output [31:0] rd_data_b
);

    // Four 32-bit registers (R0 storage exists but is never used/read)
    reg [31:0] regs [0:3];
    integer i;

    // Synchronous behavior: reset has priority, then write (R0 writes dropped)
    always @(posedge clk) begin
        if (rst) begin
            for (i = 0; i < 4; i = i + 1)
                regs[i] <= 32'b0;
        end else if (we && wr_addr != 2'b00) begin
            regs[wr_addr] <= wr_data;
        end
    end

    // Asynchronous reads; address 0 always returns hardwired zero
    assign rd_data_a = (rd_addr_a == 2'b00) ? 32'b0 : regs[rd_addr_a];
    assign rd_data_b = (rd_addr_b == 2'b00) ? 32'b0 : regs[rd_addr_b];

endmodule
```


### C-to-MIPS Translation, Conditional Branching, Loops, while Loops, For Loop, MIPS ... - In Class — 23 Sep 2026

#### A Number Is Even or Odd in MIPS
_Coding · Easy · Solved ✓ · 20/20 pts_

Complete the given MIPS assembly program to read an integer and print whether it is **Even** or **Odd**.

Your task is to use the **if-else pattern in MIPS**:

- If the number is divisible by 2, print `"Even"`
- Else, print `"Odd"`

**Goal:** Read one integer, check its remainder when divided by 2, and print the correct result. Step through the program line by line and observe how the input register, remainder register, and branch instructions work together.

**Input**

A single integer `n`.

**Output**

`Even` if `n` is divisible by 2.
`Odd` otherwise

**Example**

**Input**

```
2
```

**Output**

```
Even
```

**Constraints**

- Use the provided boilerplate code.
- Do not modify the input-reading code.
- Use division or bitwise logic to determine parity.
- Use branch instructions to implement the if-else pattern.
- Print the result using syscall `4`.

**My solution** (MIPS (Mars 4.5))

```asm
.data
even: .asciiz "Even"
odd:  .asciiz "Odd"

.text
.globl main

main:
    # Read integer input from user
    li $v0, 5          # syscall 5 reads an integer
    syscall            # integer value is stored in $v0

    # Check parity using bitwise AND with 1
    andi $t0, $v0, 1   # $t0 = $v0 & 1 (0 if even, 1 if odd)

    # Branch if odd
    bne $t0, $zero, print_odd

print_even:
    la $a0, even       # Load address of "Even" string
    li $v0, 4          # syscall 4 prints a string
    syscall
    j end

print_odd:
    la $a0, odd        # Load address of "Odd" string
    li $v0, 4          # syscall 4 prints a string
    syscall

end:
    li $v0, 10         # syscall 10 exits the program
    syscall
```


#### Iterative Factorial of 5 in MIPS
_Coding · Easy · Solved ✓ · 20/20 pts_

Complete the MIPS assembly program to compute the factorial of `5` using an iterative approach.

The program should repeatedly multiply the current result by the counter value, decrease the counter by 1, and stop when the counter becomes 0.

**Input**

No Input

**Output**

Print the factorial of 5.

**Example**

**Input**

```
No Input
```

**Output**

```
120
```

**Constraints**

- Use an iterative approach.
- Multiply the running result by the counter in each iteration.
- Decrease the counter by 1 until it becomes 0.
- Print the final factorial value using MIPS syscall `1`.

**My solution** (MIPS (Mars 4.5))

```asm
.text
.globl main

main:
    li $t0, 1         # Initialize result in $t0 = 1
    li $t1, 5         # Initialize counter in $t1 = 5

loop:
    beq $t1, $zero, done   # Exit loop when counter becomes 0
    mul $t0, $t0, $t1      # Result = Result * Counter
    subi $t1, $t1, 1       # Counter = Counter - 1
    j loop                 # Repeat loop

done:
    move $a0, $t0
    li   $v0, 1
    syscall

    li   $v0, 10
    syscall
```


### while Loops, For Loop, MIPS Calling Convention, Argument and Return Registers, C ... - In Class — 28 Sep 2026

#### Access First Element of an Array in MIPS
_Coding · Easy · Attempted · 0/20 pts_

Complete the given MIPS program to print the **first element** of an array.

The array is already created and populated using the provided boilerplate code. Your task is to access the first element of the array and print it.

**Goal:** Print `arr[0]`. Step through the program line by line and observe every register that the program modifies.

**Input**

The first line contains an integer `n` `(1 ≤ n ≤ 100)`.
The next `n` integers represent the elements of the array.

**Output**

Print the value of the first element of the array.

**Example**

**Input**

```

5
10 
20 
30 
40 
50
```

**Output**

```
10
```

**Constraints**

`1 ≤ n ≤ 100`
Access the first element using the `lw` instruction.
Print the value using syscall `1`.


#### Sum of Array Elements in MIPS
_Coding · Easy · Attempted · 0/20 pts_

Complete the given MIPS assembly program to compute and print the **sum of all elements** in an array.

The array is already created and populated using the provided boilerplate code. Your task is to traverse the array, compute the sum of its elements, and print the final result.

**Goal:** Iterate through the array, accumulate the sum of all elements, and print the sum. Step through the program line by line and observe how the array pointer and accumulator register change during execution.

**Input**

The first line contains an integer `n` `(1 ≤ n ≤ 100)`.
The next `n` integers represent the elements of the array.

**Output**

Print the sum of all array elements.

**Example**

**Input**

```
5
10 
20 
30 
40 
50
```

**Output**

```
150
```

**Constraints**

- Use the provided boilerplate code.
- Do not modify the input-reading code.
- Traverse the array using `lw`.
- Use registers to maintain the running sum.
- Print the answer using syscall `1`.


#### Maximum Element in an Array in MIPS
_Coding · Easy · Attempted · 0/20 pts_

Complete the given MIPS assembly program to find and print the **maximum element** in an array.

The array is already created and populated using the provided boilerplate code. Your task is to traverse the array, determine the largest element, and print it.

**Goal:** Iterate through the array, compare each element with the current maximum, update the maximum when necessary, and print the final maximum value. Step through the program line by line and observe how the array pointer, loop counter, and maximum value register change during execution.

**Input**

The first line contains an integer `n` `(1 ≤ n ≤ 100)`.
The next `n` integers represent the elements of the array.

**Output**

Print the maximum element of the array.

**Example**

**Input**

```

5
10 
20 
30 
40 
50
```

**Output**

```
50
```

**Constraints**

Use the provided boilerplate code.
Do not modify the input-reading code.
Traverse the array using `lw`.
Store the current maximum in a register.
Print the answer using syscall `1`.


#### Find the Sum from 0 to 9 in MIPS
_Coding · Easy · Attempted · 0/20 pts_

Complete the given MIPS assembly program to calculate and print the **sum of numbers from 0 to 9**.

Your task is to use a loop to add all integers starting from `0` up to `9`, store the running sum in a register, and print the final result.

**Goal:** Initialize a counter and a sum variable, repeatedly add the counter value to the sum, increment the counter, and stop when the counter reaches `10`.

**Input**

Not Applicable

**Output**

Print the sum of numbers from `0` to `9`.

**Example**

**Input**

```
Not Applicable
```

**Output**

```
45
```

**Constraints**

- Use a loop in MIPS.
- Store the running sum in a register.
- Increment the counter in each iteration.
- Print the final answer using syscall `1`.


### Factorial / Fibonacci | In Class | Batch D — 29 Sep 2026

#### Iterative Factorial of 5 in MIPS
_Coding · Easy · Solved ✓ · 20/20 pts_

Complete the MIPS assembly program to compute the factorial of `5` using an iterative approach.

The program should repeatedly multiply the current result by the counter value, decrease the counter by 1, and stop when the counter becomes 0.

**Input**

No Input

**Output**

Print the factorial of 5.

**Example**

**Input**

```
No Input
```

**Output**

```
120
```

**Constraints**

- Use an iterative approach.
- Multiply the running result by the counter in each iteration.
- Decrease the counter by 1 until it becomes 0.
- Print the final factorial value using MIPS syscall `1`.

**My solution** (MIPS (Mars 4.5))

```asm
.text
.globl main

main:
    li $t0, 1
    li $t1, 5

loop:
    beq $t1, $zero, done
    mul $t0, $t0, $t1
    sub $t1, $t1, 1
    j loop

done:
    move $a0, $t0
    li   $v0, 1
    syscall

    li   $v0, 10
    syscall
```


#### Iterative Factorial of Any Number in MIPS
_Coding · Easy · Solved ✓ · 20/20 pts_

Complete the MIPS assembly program to read an integer `n` and compute `n!` using an iterative approach.

- read `n`
- initialize result as `1`
- multiply result by the counter while the counter is greater than `0`
- print the final factorial value

**Input**

A single integer `n`

**Output**

Print the factorial of `n`.

**Example**

**Input**

```
5
```

**Output**

```
120
```

**Constraints**

- Read one integer `n` from input.
- Use an iterative approach to compute the factorial.
- Initialize the result as `1`.
- Print the final factorial value using MIPS syscall `1`.

**My solution** (MIPS (Mars 4.5))

```asm
.text
.globl main

main:
    li $v0, 5
    syscall
    move $t1, $v0

    li $t0, 1

loop:
    ble $t1, $zero, done
    mul $t0, $t0, $t1
    sub $t1, $t1, 1
    j loop

done:
    move $a0, $t0
    li   $v0, 1
    syscall

    li   $v0, 10
    syscall
```


#### Fibonacci in MIPS
_Coding · Easy · Solved ✓ · 20/20 pts_

Write a **MIPS assembly program** to generate and print the first `n` Fibonacci numbers using an **iterative/loop-based approach**.

The Fibonacci sequence is defined as:

```

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2), for n ≥ 2
```

###### Requirements

1. Read a single integer `n` from the user.
2. Generate the Fibonacci sequence iteratively using a loop.
3. Do **not** use recursion.
4. Print the Fibonacci numbers from `F(0)` to `F(n)`.
5. Print a **space between consecutive numbers**.

**Input**

5

**Output**

0 1 1 2 3 5

**Example**

Input:
5
Output:
0 1 1 2 3 5

**Constraints**

N/A

**My solution** (MIPS (Mars 4.5))

```asm
.text
.globl main

main:
    # Read n from user
    li   $v0, 5
    syscall
    move $t0, $v0          # $t0 = n

    # Initialize Fibonacci variables
    li   $t1, 0            # $t1 = prev = F(0)
    li   $t2, 1            # $t2 = curr = F(1)
    li   $t3, 0            # $t3 = i = 0 (counter)

loop:
    # Exit loop if counter i > n
    bgt  $t3, $t0, exit

    # Print current Fibonacci number (F(i))
    move $a0, $t1
    li   $v0, 1
    syscall

    # Print space character (' ' or ASCII 32)
    li   $a0, 32
    li   $v0, 11
    syscall

    # Calculate next Fibonacci number: next = prev + curr
    add  $t4, $t1, $t2     # $t4 = next
    move $t1, $t2          # prev = curr
    move $t2, $t4          # curr = next

    # Increment loop counter
    addi $t3, $t3, 1
    j    loop

exit:
    # Exit program
    li   $v0, 10
    syscall
```



---

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
