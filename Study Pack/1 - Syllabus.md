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

