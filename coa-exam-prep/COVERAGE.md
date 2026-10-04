# COVERAGE.md — Modern Computer Architecture (CSA222) exam-prep tracker

Built from **every file** in the course folder (27 PDFs, 6 Study-Pack files, 1 linked artifact). Detailed per-page notes: `docs/SOURCE_DIGEST.md`.
Badges: **class** = From class slides · **researched** = ⚠ Not covered in class – researched · **extra** = Extra (beyond slides) / Extra from slides.

## Source legend
| Key | File (pages) |
|---|---|
| [L01] | Lectures/Whiteboards/L01 Course Intro & Boolean Algebra (38) |
| [L02] | Lectures/Whiteboards/L02 Logic Minimisation & Universal Gates (33) |
| [L03] | Lectures/Whiteboards/L03 Combinational Building Blocks (14) |
| [L04] | Lectures/Whiteboards/L04 Decoders, Adders (20) |
| [L05] | Lectures/Whiteboards/L05 Number Systems & Two's Complement (34) |
| [L06] | Lectures/Whiteboards/L06 Latches, Flip-Flops & Timing (15) |
| [L07] | Lectures/Whiteboards/L07 Flip-Flops & Timing II (17) |
| [L08] | Lectures/Whiteboards/L08 Registers, Counters & State Machines (45) |
| [CNT] | Lectures/L08 MCA_Lecture_6_Counters.pdf (11) |
| [RF] | Lectures/L09 MCA_Lecture_7_Register_Files_and_FSMs.pdf (25) |
| [MEM] | Lectures/L10 MCA_Lecture_8_SRAM_vs_DRAM_Memory_Stack.pdf (22) |
| [AI] | Lectures/L11 MCA_Lecture_8_Architecture_Intro.pdf (24) |
| [VNH] | Lectures/L11 MCA_Lecture_9_Von_Neumann_vs_Harvard.pdf (33) |
| [CR] | Lectures/L12 MCA_Lecture_10_CISC_vs_RISC.pdf (47) |
| [FMT] | Lectures/L13 MCA_Lecture_11_Registers_and_Instruction_Formats_.pdf (30) |
| [ENC] | Lectures/L13 MIPS Encoding Reference.pdf (4, image-only) |
| [C2M] | Lectures/L14 MCA_Lecture_12_C_to_MIPS_Translation_.pdf (27) |
| [LB1] | Labs/Whiteboards/L02 Lab 1 Verilog setup & gates (38) |
| [LB2] | Labs/Whiteboards/L03 Lab 2 Logic minimisation 35 Qs (17) |
| [LB3] | Labs/Whiteboards/L04 Lab 3 MUX/DEMUX Verilog (40) |
| [LB4] | Labs/Whiteboards/L05 Lab 4 HA/FA/RCA Verilog (26) |
| [LB5] | Labs/Whiteboards/L06 Lab 5 Adder-subtractor & overflow (14) |
| [LB6] | Labs/Whiteboards/L07 Lab 6 Latches & flip-flops Verilog (36) |
| [LB7] | Labs/Whiteboards/L08 Lab 7 Shift registers & counters theory (28) |
| [LB8] | Labs/Whiteboards/L09 Lab 8 Register/counter Verilog exercises (9) |
| [FSM] | Labs/L11 Lab8_Sequence_Detector_FSMs.pdf (9) |
| [MIPS] | Labs/L13 Lab11_MIPS_Assembly.pdf (38) |
| [DQ] | Study Pack/Diagrams_class.pdf (4 diagram-question samples) |
| [SP3] | Study Pack/3 - Coding & Lab Questions.md (portal lab problems + solutions) |
| [SP4] | Study Pack/4 - MCQs.md (class revision quizzes, 41 MCQs) |
| [SP] | Study Pack/1 - Syllabus.md, 2 - Lecture & Lab Notes.md, pack.json, Study Pack.md, MCA Midsem Study Room.html (metadata / duplicate text of the PDFs) |
| [ART] | Lectures/links.md → claude.ai artifact "MIPS teaching guide" |

## Build status (resume here)
- DONE: Phase 0 inventory; Phase 1 (data/diagrams.js: 4 samples, pattern analysis, 5 predicted, top-35 list); site engine (index.html, css, js/svglib.js, js/app.js, js/tools.js with 6 tools); Units 1–5 content (data/unit01–05.js); Units 6–15 content (data/unit06–15.js: every subtopic, diagram id and code id in the table below is present; ticked ☑).
- Units 6–15 checks run: schema check (answers in range, ≥ 3 practice per subtopic, sourceLine on researched/extra, no banned phrases, no `${`), every diagram rendered in Chromium and inspected, every `refs`/`ref` id in data/diagrams.js resolves, all 15 unit pages load with no console errors, tools (mips, datapath, pipeline) mount. MIPS encodings verified with a script; FSM outputs and pipeline cycle counts verified by simulation (pipeline numbers match js/tools.js PIPE).
- TODO: data/mock1.js, data/mock2.js, data/extras.js (home, study plan, last-night revision, bonus 14–15), verify.py (formal checker), then tick the Done column for Units 1–5.

## Coverage table
| ID | Syllabus subtopic | Source file(s) + pages | Badge | Diagrams found (SVG id) | Code / programs found (code id) | Done |
|---|---|---|---|---|---|---|
| 1.1 | Course introduction & roadmap | [L01] p1-10; [LB1] p15-16 | class | D1.1a six-module roadmap | — | ☐ |
| 1.2 | Why architecture matters – abstraction stack | [L01] p2-4, p11-14; [LB1] p3-14 | class | D1.2a abstraction stack; D1.2b A[i]=B[i]+C[i] through the layers; D1.2c RTL→silicon VLSI flow | — | ☐ |
| 1.3 | Boolean logic basics: AND, OR, NOT, XOR (+NAND, NOR, XNOR) | [L01] p15-25; [LB1] p16-34; [SP3] Lab 01 | class | D1.3a seven gate symbols | C1.3a and_gate.v; C1.3b and_tb.v; C1.3c or/not/xor gates; C1.3d nand/nor gates; C1.3e xnor_gate.v (homework) | ☐ |
| 1.4 | Truth tables | [L01] p17-24, p26; [SP4] quiz 1 | class | D1.4a gates-at-a-glance table | C1.4a exhaustive testbench (for loop) | ☐ |
| 1.5 | Boolean laws & simplification | [L01] p27-31; [L02] p10 | class | — (tables) | — | ☐ |
| 1.6 | Worked simplification examples | [L01] p32-35; [LB2] Q8-Q13; [SP4] quiz 1 | class | D1.6a Y=A+BC gate circuit | — | ☐ |
| 1.E1 | Verilog & HDL fundamentals (extra from slides) | [LB1] p17-35; [LB3] p4-13 | extra | D1.E1a simulation vs synthesis flow | C1.E1a module skeleton; C1.E1b wire vs reg; C1.E1c initial/always | ☐ |
| 2.1 | Motivation for minimisation (cost/power) | [L02] p4-5 | class | — | — | ☐ |
| 2.2 | Canonical forms: SOP and POS | [L02] p6-9; [LB2] Q1-Q7; [SP4] quiz 2 | class | D2.2a truth table with minterm/maxterm labels | — | ☐ |
| 2.3 | Karnaugh maps: 2, 3, 4 variables | [L02] p11-17; [LB2] Q14-Q22 | class | D2.3a 2-var map F=B; D2.3b 3-var map F=C; D2.3c 4-var map A'B+BD+A'D'; D2.3d corners B'D'; D2.3e worked F=C' | — | ☐ |
| 2.4 | DeMorgan's theorems & bubble pushing | [L02] p19-22; [LB2] Q27-Q30 | class | D2.4a NAND ≡ bubbled-OR; D2.4b NOR ≡ bubbled-AND | — | ☐ |
| 2.5 | Universal gates (NAND/NOR) demonstration | [L01] p25; [L02] p23-28; [LB2] Q31-Q34; [SP4] quiz 3 | class | D2.5a NOT/AND/OR from NAND; D2.5b NOT/AND/OR from NOR; D2.5c XOR from 4 NANDs; D2.5d (A+B)(C+D) with 6 NANDs | — | ☐ |
| 2.6 | Don't-cares in K-maps | [L02] p16; [LB2] Q21-Q26, Q35 | class | D2.6a don't-care quad A'D | — | ☐ |
| 2.E1 | Prime implicants, EPIs, consensus theorem (extra from slides) | [LB2] Q10-Q11, Q23-Q26 | extra | D2.E1a cyclic K-map Σm(0,1,2,5,6,7) | — | ☐ |
| 3.1 | Motivation – from gates to reusable blocks | [L03] p2-4; [LB3] p14 | class | — | — | ☐ |
| 3.2 | Multiplexers: 2:1, 4:1, cascading | [L03] p5-11; [LB3] p15-28; [SP3] Lab 03; [SP4] quiz 3 | class | D3.2a 2:1 MUX symbol; D3.2b 2:1 MUX gates; D3.2c 4:1 MUX symbol; D3.2d 4:1 from three 2:1; D3.2e 8:1 from 4:1+2:1; D3.2f XOR on a 4:1 MUX | C3.2a mux2x1 gate-level; C3.2b mux2x1 ternary; C3.2c mux2x1_tb; C3.2d mux4_1 behavioural; C3.2e mux4_1_tb; C3.2f 8:1 MUX (homework) | ☐ |
| 3.3 | Demultiplexers and n-to-2^n decoders | [L03] p12-14; [L04] p2-7; [LB3] p29-38; [SP3] | class | D3.3a 1:2 DEMUX gates; D3.3b 1:4 DEMUX; D3.3c 2-to-4 decoder; D3.3d 3-to-8 decoder internals | C3.3a demux1_2; C3.3b demux1_4; C3.3c demux tbs; C3.3d decoder 2-to-4 | ☐ |
| 3.4 | Half adder design | [L04] p8-9; [LB4] p3-7; [SP3] | class | D3.4a half adder | C3.4a half_adder.v; C3.4b ha_tb.v | ☐ |
| 3.5 | Full adder design (+ ripple-carry) | [L04] p10-13; [LB4] p8-21; [SP3]; [SP4] quiz 4 | class | D3.5a full adder gates; D3.5b FA from two HAs; D3.5c 4-bit ripple-carry adder | C3.5a full_adder.v; C3.5b fa_tb.v; C3.5c adder4.v; C3.5d adder4_tb.v | ☐ |
| 3.6 | CPU preview – ALU and register file | only named in lecture titles; [LB4] p24; [L01] p13 | researched | D3.6a 1-bit ALU slice; D3.6b ALU + register file preview | C3.6a 4-bit ALU (Verilog) | ☐ |
| 3.E1 | Carry-lookahead adder (extra from slides) | [L04] p13; [LB4] p21; [LB5] p4 | extra | D3.E1a CLA generate/propagate | — | ☐ |
| 4.1 | Number systems: binary, decimal, hex | [L05] p4-10 | class | D4.1a positional weights | — | ☐ |
| 4.2 | Signed representations overview | [L05] p11-13 | class | — | — | ☐ |
| 4.3 | Two's complement: negation and range | [L05] p14-18; [LB5] p5; [SP4] quiz 5 | class | D4.3a 4-bit number wheel | C4.3a twos_complement negator | ☐ |
| 4.4 | Sign extension | [L05] p17; [MIPS] p16 | class | D4.4a sign-extension wiring | C4.4a sign_extender | ☐ |
| 4.5 | Binary addition and subtraction | [L05] p19-22; [LB5] p2-3 | class | D4.5a 4-bit adder-subtractor | C4.5a adder_subtractor | ☐ |
| 4.6 | Overflow detection rules | [L05] p23-29; [LB5] p5-12 | class | D4.6a overflow XOR at MSB | C4.6a cla flags (cf, of); C4.6b adder_subtractor_overflow | ☐ |
| 5.1 | Combinational vs sequential circuits | [L06] p2-7; [LB6] p3-6 | class | D5.1a feedback loop; D5.1b bistable inverter pair | — | ☐ |
| 5.2 | SR latch: structure & forbidden state | [L06] p9-12; [LB6] p6-14; [L08] p7 | class | D5.2a NOR SR latch; D5.2b NAND SR latch; D5.2c gated SR latch | C5.2a sr_latch.v; C5.2b sr_tb.v | ☐ |
| 5.3 | D latch (level-triggered) | [L06] p13-14; [LB6] p15-17; [SP3] | class | D5.3a D latch; D5.3b transparency waveform | C5.3a d_latch.v (from SR); C5.3b d_latch behavioural | ☐ |
| 5.4 | D flip-flop (edge-triggered) | [L07] p2-5, p12; [LB6] p18-28; [L08] p5-12; [SP3]; [SP4] quiz 6-7 | class | D5.4a clock waveform; D5.4b ring oscillator; D5.4c master-slave D FF; D5.4d D FF symbol; D5.4e D FF waveform trace; D5.4f latch vs FF waveform | C5.4a d_ff.v; C5.4b ff_tb.v; C5.4c dff_enable; C5.4d master-slave D FF | ☐ |
| 5.5 | Setup time, hold time, metastability | [L07] p6-15; [LB6] p29-31; [SP4] quiz 7 | class | D5.5a setup/hold window; D5.5b metastability ball; D5.5c 2-FF synchronizer | — | ☐ |
| 5.E1 | JK & T flip-flops, characteristic & excitation tables (extra from slides) | [L08] p5-12; [LB7] p19 | extra | D5.E1a JK latch; D5.E1b T FF from JK and from D | — | ☐ |
| 6.1 | Scaling from flip-flops to registers | [L08] p14-16; [LB7] p4 | class | D6.1a 4-bit register (4 D FFs) | — | ☑ |
| 6.2 | Registers: load enable, reset, CPU preview | [L08] p13, p16-17; [LB7] p4, p12; [LB8] Q1-Q2; [SP3] | class | D6.2a load-enable MUX per bit; D6.2b 8-bit register block | C6.2a register_8bit; C6.2b register_8bit_rst | ☑ |
| 6.3 | Asynchronous (ripple) vs synchronous counters | [L08] p21-27; [CNT] p2-8; [LB7] p14-17, p25; [SP4] quiz 8 | class | D6.3a 3-bit ripple counter; D6.3b counter waveforms; D6.3c ripple 7→8 glitch timeline | C6.3a ripple counter (Verilog) | ☑ |
| 6.4 | 4-bit synchronous up-counter design | [L08] p23, p26; [CNT] p4, p7; [LB7] p18-22; [LB8] Q5-Q6; [SP3] | class | D6.4a 4-bit synchronous counter (T FFs + AND chain) | C6.4a up2; C6.4b up3; C6.4c updown4; C6.4d up_counter4; C6.4e down_counter4; C6.4f sync_counter_4bit with tc | ☑ |
| 6.5 | Shift registers: SISO, SIPO, PISO, PIPO | [L08] p18-20; [LB7] p5-13; [LB8] Q3-Q4; [SP3] | class | D6.5a SISO; D6.5b SIPO; D6.5c PISO with load MUX; D6.5d PIPO | C6.5a siso; C6.5b sipo; C6.5c piso; C6.5d pipo | ☑ |
| 6.E1 | Ring, Johnson, mod-N, divide-by-N, LFSR (extra from slides) | [LB7] p23-25; [L08] p11, p20, p28; [SP4] quiz 8 | extra | D6.E1a ring counter; D6.E1b Johnson counter | C6.E1a ring counter; C6.E1b Johnson counter; C6.E1c mod-6 counter | ☑ |
| 7.1 | From registers to register files | [RF] p12-14 | class | — | — | ☑ |
| 7.2 | Register file architecture (1 write, 2 read) | [RF] p15-21; [SP3]; [SP4] quiz 9 | class | D7.2a register-file block; D7.2b write port decoder; D7.2c read port MUXes | C7.2a register_file 4×32; C7.2b regfile with hardwired R0 | ☑ |
| 7.3 | Introduction to finite state machines | [RF] p2-11; [L08] p30-39 | class | D7.3a FSM anatomy (Moore/Mealy blocks); D7.3b traffic-light FSM; D7.3c datapath + control | — | ☑ |
| 7.4 | Moore vs Mealy machines | [RF] p4; [L08] p32 | class | — (comparison table) | — | ☑ |
| 7.5 | Worked example: sequence detector 1011 | [FSM] p1-9; [RF] p22-24; [SP4] quiz 10 | class | D7.5a Mealy overlap; D7.5b Mealy non-overlap; D7.5c Moore overlap; D7.5d Moore non-overlap | C7.5a mealy_overlap; C7.5b mealy_nooverlap; C7.5c moore_overlap; C7.5d moore_nooverlap; C7.5e tb_top | ☑ |
| 8.1 | Register files; need for bigger memory | [MEM] p2-3 | class | — | — | ☑ |
| 8.2 | SRAM: 6T cell structure & behaviour | [MEM] p4-9 | class | D8.2a 6T SRAM cell | — | ☑ |
| 8.3 | DRAM: 1T1C cell, refresh, destructive read | [MEM] p10-16 | class | D8.3a 1T1C DRAM cell; D8.3b charge-leak/refresh curve | — | ☑ |
| 8.4 | SRAM vs DRAM comparison | [MEM] p17-20 | class | — (table) | — | ☑ |
| 8.5 | Memory hierarchy + the memory wall | only takeaways/homework: [AI] p21-22; gap chart [VNH] p14 | researched | D8.5a hierarchy pyramid; D8.5b processor–memory gap | — | ☑ |
| 9.1 | From gates to a complete machine | [VNH] p2-4; [MEM] p21 | class | D9.1a CPU–memory–I/O–bus | — | ☑ |
| 9.2 | Von Neumann architecture: structure & history | [VNH] p5-10; [AI] p2-5 | class | D9.2a Von Neumann block diagram; D9.2b stored-program memory map | — | ☑ |
| 9.3 | The Von Neumann bottleneck | [VNH] p11-15, p28; [AI] p6-10 | class | D9.3a single-bus bottleneck | — | ☑ |
| 9.4 | Harvard architecture: separate I & D memories | [VNH] p16-22; [AI] p11-16 | class | D9.4a Harvard block diagram; D9.4b VN vs Harvard timeline | — | ☑ |
| 9.5 | Modified Harvard in modern CPUs | [VNH] p23-27; [AI] p17-20 | class | D9.5a split L1-I/L1-D hierarchy | — | ☑ |
| 10.1 | Recap of Von Neumann/Harvard + setup | [CR] p2-22 | class | — | — | ☑ |
| 10.2 | RISC vs CISC: definitions & design goals | [CR] p23-29 | class | D10.2a ISA contract; D10.2b fixed vs variable encoding | C10.2a C=A+B; D=2C in CISC and RISC style | ☑ |
| 10.3 | Historical context: VAX, x86, MIPS, ARM, RISC-V | [CR] p30-31; [MIPS] p5-6 | class | D10.3a ISA family tree | — | ☑ |
| 10.4 | Compiler implications & code density | [CR] p32-35 | class | — | — | ☑ |
| 10.5 | Modern reality: micro-ops in x86 | [CR] p36-39 | class | D10.5a x86 µop decode | — | ☑ |
| 10.6 | Trends: RISC-V open ISA & AI accelerators | [CR] p40-42 | class | — | — | ☑ |
| 11.1 | Why MIPS for teaching | [FMT] p2-4; [MIPS] p5-6 | class | — | — | ☑ |
| 11.2 | MIPS register set & conventions | [FMT] p5-10; [MIPS] p7, p10; [ART] | class | D11.2a register table; D11.2b MIPS machine model (CPU + memory map) | — | ☑ |
| 11.3 | R-format (register-register) | [FMT] p11-15, p19; [ENC] p1-4; [MIPS] p12-13 | class | D11.3a R-format fields | C11.3a encode add $t2,$t0,$t1 | ☑ |
| 11.4 | I-format (immediate, loads, stores, branches) | [FMT] p16, p20-21; [MIPS] p14, p16 | class | D11.4a I-format fields | C11.4a decode 0x8D280004 | ☑ |
| 11.5 | J-format (jumps) | [FMT] p17; [ENC] | class | D11.5a J-format + target address formation | — | ☑ |
| 11.6 | RISC-V's modular ISA | [FMT] p22-25 | class | D11.6a RV32I + extensions | — | ☑ |
| 11.E1 | MIPS assembly toolkit: directives, syscalls, pseudo-ops, HI/LO, shifts, la vs lw, alignment (extra from slides) | [MIPS] p15-38; [ART] | extra | D11.E1a endianness | C11.E1a Program A; C11.E1b Program D; C11.E1c Hello MIPS; C11.E1d Add two inputs; C11.E1e Quotient & remainder; C11.E1f Swap; C11.E1g C→F; C11.E1h ×10 by shifts; C11.E1i (a+b)(a−b) | ☑ |
| 12.1 | Recap of formats; translation pattern | [C2M] p2-4 | class | — | — | ☑ |
| 12.2 | If/else and conditional branching | [C2M] p5-11; [SP3] | class | D12.2a max-of-two flowchart | C12.2a simple if; C12.2b if/else; C12.2c slt idiom; C12.2d max of two; C12.2e even/odd program | ☑ |
| 12.3 | Loops: while and for | [C2M] p12-14; [SP3]; [ART] | class | D12.3a loop skeleton flowchart | C12.3a while; C12.3b for; C12.3c sum 0..9; C12.3d iterative factorial 5; C12.3e factorial of n; C12.3f Fibonacci; C12.3g array first element; C12.3h array sum; C12.3i array max; C12.3j Σk(k+1) | ☑ |
| 12.4 | Calling convention: $a, $v, $ra | [C2M] p15-17; [FMT] p9 | class | D12.4a caller/callee register flow | C12.4a sum(n) function | ☑ |
| 12.5 | Stack frames: leaf vs non-leaf | [C2M] p18-23 | class | D12.5a stack grows down; D12.5b fact(3) frames | C12.5a leaf function; C12.5b recursive factorial; C12.5c recursive Fibonacci | ☑ |
| 13.1 | Recap: ISA → hardware | no slides (L16 lecture had no file) | researched | — | — | ☑ |
| 13.2 | Fetch-decode-execute cycle | [MIPS] p9; [LB1] p6 | class | D13.2a F-D-E flowchart | — | ☑ |
| 13.3 | Building the datapath: PC, IMem, RegFile, ALU, DMem | [DQ] p1-4 datapath figure; rest researched | class | D13.3a single-cycle datapath (full, with control) ; D13.3b fetch unit | — | ☑ |
| 13.4 | Tracing different instruction types | [DQ] p1-4 (beq, sw, lw traces) | class | D13.4a R-type trace; D13.4b lw trace; D13.4c sw trace; D13.4d beq trace | — | ☑ |
| 13.5 | Critical path & clock period | no slides | researched | D13.5a critical path of lw | — | ☑ |
| 14.1 | Recap single-cycle; the problem | no slides | researched | — | — | ☑ |
| 14.2 | Pipelining intuition: laundry analogy | no slides (preview: [LB1] p6 4004 pipeline) | researched | D14.2a laundry sequential vs pipelined | — | ☑ |
| 14.3 | 5-stage MIPS pipeline + pipeline registers | no slides ([MIPS] p9 lists the 5 stages) | researched | D14.3a pipelined datapath with IF/ID, ID/EX, EX/MEM, MEM/WB | — | ☑ |
| 14.4 | Pipeline diagrams | no slides | researched | D14.4a multi-cycle pipeline diagram | — | ☑ |
| 14.5 | Throughput, latency, ideal speedup | no slides | researched | — | — | ☑ |
| 14.6 | Hazards preview | no slides ([CR] p34) | researched | — | — | ☑ |
| 15.1 | Hazard taxonomy: structural, data, control | no slides | researched | D15.1a structural hazard (single memory) | — | ☑ |
| 15.2 | RAW, WAR, WAW; why only RAW in-order | no slides | researched | — | — | ☑ |
| 15.3 | Naive solution: stalls (bubbles) | no slides | researched | D15.3a stall bubbles diagram | — | ☑ |
| 15.4 | Forwarding (bypassing) | no slides | researched | D15.4a forwarding paths EX/MEM→EX, MEM/WB→EX | — | ☑ |
| 15.5 | Load-use hazard: forwarding + stall | no slides | researched | D15.5a load-use 1 stall + forward | — | ☑ |
| 15.6 | Compiler scheduling | no slides | researched | — | — | ☑ |

## Syllabus subtopics NOT found in the files → "⚠ Not covered in class – researched"
3.6 (ALU/register-file preview — titles only), 8.5 (memory hierarchy & memory wall — only mentioned in takeaways/homework), 13.1, 13.5, 14.1–14.6, 15.1–15.6.
(13.2–13.4 have class material: Lab 11 fetch-decode-execute table and the 4 datapath worksheets in Diagrams_class.pdf; the datapath theory itself was researched.)

## Slide errors / ambiguities found (taught with the correction)
1. [L02] p17 text says "F = B'" next to a map whose answer is F = C' (columns CD=00,01). Correct: **C'**.
2. [C2M] p13 while loop uses `blt $t1,$t0,End` — runs one extra iteration when i == n. Correct exit: `bge $t0,$t1,End` (or `slt $t2,$t0,$t1; beq $t2,$zero,End`).
3. [LB5] p10 flag labels are shifted between cases; the traced values (p11-12) are correct: 1111+0001 → CF=1,OF=0; 0111+0001 → CF=0,OF=1.
4. [LB6]/[L07] master-slave slide: "master captures while CLK high, slave on falling edge" → that is a **negative**-edge FF. Harris & Harris build a **positive**-edge FF with master transparent when CLK=0. Both taught.
5. [ENC] simplified reference uses lhi/llo/trap and PC-relative j; real MIPS32 uses lui and pseudo-direct j (as in [FMT] p17).
6. [LB2] Q34 "(A+B)(C+D) needs 6 NANDs" — **verified by exhaustive search** (docs/nand_search.c): minimum is 6.
7. [SP3] PISO problem title says "shifting out MSB first", but with d_out = q[0] and a right shift the LSB leaves first (trace 1011 → d_out 1, 1, 0, 1). Taught as LSB first (6.5).
EOF