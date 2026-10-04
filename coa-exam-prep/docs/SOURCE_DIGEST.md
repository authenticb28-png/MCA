# Source digest (built during Phase 0 — one section per source file, page refs = PDF page numbers)

## [20] Lectures/Whiteboards/L01 (11 Aug) Course Intro & Boolean Algebra — 38 pp
- p2-4: what CA is; Architecture = "what" (ISA, programmer's contract) vs Organisation = "how" (implementation, pipelines, caches) (p3).
- p6-8: logistics: 12 wks, 24 lectures, 6 modules (M1 Digital Foundations, M2 Sequential & Memory, M3 Org & ISA, M4 Datapath & Pipelining, M5 Memory hierarchy & cache, M6 Parallelism/modern); grading 40 end-sem/20 mid/20 contests/10 projects/10 assignments.
- p12 DIAGRAM abstraction stack: AI/ML models > Applications & languages > OS > ISA > Datapath & control > Logic gates > Transistors.
- p13 DIAGRAM A[i]=B[i]+C[i] descends: Python -> machine code (lw lw add sw) -> datapath (regfile->ALU->regfile) -> gates (XOR, AND, carry).
- p16 1 = TRUE/HIGH/ON (~3.3/5V), 0 = FALSE/LOW/OFF (0V).
- p17-23 DIAGRAMS gate symbols + truth tables: NOT, AND, OR, NAND, NOR, XOR (Y=A'B+AB'), XNOR (Y=A'B'+AB). p24 4 gates at a glance table.
- p25 NAND/NOR universal; NOT A = A NAND A.
- p26 quick check A=1,B=0 -> only OR (and XOR) gives 1.
- p28-31 laws: identity, null, idempotent, complement, absorption A+AB=A (partner A(1+B)=A), De Morgan (break the bar, flip the sign).
- p32 worked: AB+AB' = A(B+B') = A.
- p33 mistakes: + is OR (A+1=1), OR vs XOR last row, NAND != AND, verify with truth table.
- p35 homework: truth tables XOR/NAND/NOR; simplify A(A+B), A+A'B; draw Y=A+BC. Exit ticket: XOR(1,1)=0; A(A+B)=A absorption; ISA sits between gates and Python.

## [03] Labs/Whiteboards/L02 (12 Aug) Lab 1: Verilog setup & basic gates — 38 pp
- p3-14 image slides (history): M2 ~20B transistors; 1947 point-contact transistor replaced vacuum tube (ENIAC 18,000 tubes, 30 tons); 1958 Kilby first IC; 1971 Intel 4004 (~2300 transistors, 740 kHz, 4-bit, 10um PMOS) + 4-stage pipeline foreshadow F/D/E/W; Moore's law (transistors double ~2 yrs); 3nm scale (hair 75,000nm, RBC 7,000nm, virus 100nm, transistor gate ~3nm); gate-count eras table (vacuum tube 10^2-10^3 ENIAC ~1500 gates 1945; transistor 10^3-10^5 TI 7400; IC 10^5-10^6 Intel 8086 ~29,000 1978; VLSI 10^6-10^9 Core i7 2008; modern 10^9-10^11 Apple M2 2022); TSMC/Taiwan; Apple M2 SoC; Boole 1847 + Shannon 1937 (switching circuit theory); manufacturing: ingot/wafer, photolithography, 300mm wafer, die & package; VLSI flow: Spec -> RTL -> Simulation -> Synthesis -> Netlist -> Place&Route -> Physical verification (DRC/LVS/STA) -> Fabrication -> Post-silicon validation.
- p17 software sequential vs hardware concurrent; p18 simulation vs synthesis; p19-20 Verilog(1984, IEEE1364), VHDL(1987), SystemVerilog(2005, IEEE1800); p22 RTL->synthesis->netlist->P&R->fab; tools iverilog/VCS/Questa, DC/Genus, GTKWave.
- p24-31 Verilog: module/ports, comments, wire vs reg, vectors [7:0], operators (arith, relational, logical && || !, bitwise & | ^ ~ ^~), assign continuous.
- CODE p32 and_gate.v; p33 and_tb.v testbench ($dumpfile, $dumpvars, #10); p34 or_gate, not_gate, xor_gate. p35 common errors. p36 homework NAND from AND+NOT; xnor_gate.v.

## [21] Lectures/Whiteboards/L02 (13 Aug) Logic Minimisation & Universal Gates — 33 pp
- p4 why minimise: area, power, speed, cost ("16 -> 2 gates"). p5 VLSI logic synthesis; Apple M3 98B transistors, TSMC N3E; Synopsys DC, Cadence Genus.
- p6 DIAGRAM truth table F=Σm(1,3,5,7) -> SOP A'B'C+A'BC+AB'C+ABC; POS (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C).
- p7 SOP rule: 1->X, 0->X'; m5=AB'C. p8 POS rule: 0->X, 1->X' (THE trap); M2=(A+B'+C). p9 Σm/ΠM notation, complementary index sets.
- p10 laws table incl distributive A+BC=(A+B)(A+C).
- p12 DIAGRAM 2-var K-map F=B. p13 DIAGRAM 3-var K-map (Gray 00 01 11 10) quad -> F=C; legal group sizes 1/2/4/8.
- p14 DIAGRAM 4-var K-map rows 00:1001, 01:1111, 11:0110, 10:0000 -> F=A'B+BD+A'D'; group anatomy octet/quad/pair/single.
- p15 DIAGRAM wrap-around: 4 corners -> B'D'. p16 DIAGRAM don't-care map: row00: 1 1 X 0; row01: 0 X X 0 -> quad A'D (X used as 1). Sources of X: BCD 10-15, unread outputs, impossible sensor combos.
- p17 DIAGRAM full worked: columns CD=00,01 all 1 -> F=C' (slide text mistakenly also says B'; correct is C'). naive 9 gates -> 1 NOT.
- p19 De Morgan rules; p20 DIAGRAM bubble pushing: NAND == OR with inverted inputs. p21 ~(AB+C) = (~A+~B)~C. p22 quick check ~(A+B)=~A·~B.
- p23-26 DIAGRAMS NAND universal: NOT=NAND(A,A); AND=NAND->NAND-as-NOT (2 gates); OR=NAND(NAND(A,A),NAND(B,B)) (3 gates).
- p27 NOR table: NOT=NOR(A,A); AND=NOR(NOR(A,A),NOR(B,B)); OR=NOR(NOR(A,B),NOR(A,B)). NAND/NOR flash naming.
- p28 CMOS NAND 4 transistors (2N+2P) vs AND 6 transistors. Apple M4 28B transistors 3nm.
- p29 mistakes: SOP/POS rule flip, Gray order, diagonal groups illegal, wrap-around/corners, DeMorgan nested bars, NAND not "more powerful".
- p31 homework: Σm(1,3,5,7) SOP + K-map (=C); K-map race; NAND-only AND/OR/NOT/XOR. Exit: Σm(0,2,5,7,8,10,13,15)=B'D'+BD; ~(AB+C); OR from NAND.

## [04] Labs/Whiteboards/L03 (17 Aug) Lab 2: 35 questions w/ solutions (Logic minimisation) — 17 pp
- Section A Q1-7 canonical: Q1 F=AB+AB'+A'B at A=1,B=0 -> 1; Q2 TT 1s at 1,2,4,7 -> SOP Σm(1,2,4,7) (XOR3); Q3 POS ΠM(0,3,5,6); Q4 Σm(0,3,5,6)->ΠM(1,2,4,7); Q5 m10=AB'CD'; Q6 M3=(A+B'+C'); Q7 dual conversion.
- Section B Q8-13: absorption X+XY=X; A+A'B=A+B; consensus XY+X'Z+YZ=XY+X'Z; (A+B)(A'+C)=AC+A'B; A'B'C+A'BC+AB'C+ABC+A'B=C+A'B; complement of (A+B)(A'+C)=A'B'+AC'.
- Section C Q14-20: Gray code reason; 2-var Σm(0,2)=B'; 3-var Σm(0,2,3,5)=A'B+A'C'+AB'C; legal groups (corners, 2x2 yes; 3 cells, non-adjacent no); m0,2,4,6=C'; all 8 ones=1; A'C+AB=Σm(1,3,6,7).
- Section D Q21-26: Σm(0,2,5,7,8,10,13,15)=B'D'+BD; corners=B'D'; Σm(0,1,2,5,6,7) PIs A'B',A'C',B'C,BC',AC,AB, cover A'B'+BC'+AC (cyclic, no EPI); EPI count; overlapping legal; cover selection.
- Section E Q27-30: ((A+B)'C)'+(AB)'=1; (AB)'+C=A'+B'+C; (ABC)'=A'+B'+C'; ((A'+B)'+(AC)')'=ABC.
- Section F Q31-33: NAND NOT=1,AND=2,OR=3; NOR NOT=1,OR=2,AND=3; F=AB+C with 3 NANDs ((AB)'·C')' (needs C' -> 3 incl. inverter? slide says 3).
- Section G Q34 "min 2-input NAND for (A+B)(C+D) = 6" (VERIFY); Q35 MSQ: minimal SOP contains every EPI; don't cares may be in PI.
- Sources cited by deck: GATE Overflow, ExamSIDE, NPTEL, Mano, Roth.

## [22] Lectures/Whiteboards/L03 (18 Aug) Combinational Building Blocks — 14 pp
- p4 why reusable blocks: abstraction, reuse, verification, scale. ~5 core block types.
- p6-7 DIAGRAM 2:1 MUX symbol, Y=S'A+SB, railway switch analogy. p8 DIAGRAM 2:1 MUX gates (2 AND, 1 NOT, 1 OR).
- p9 DIAGRAM 4:1 MUX + select table; Y=S1'S0'I0+S1'S0I1+S1S0'I2+S1S0I3.
- p10 DIAGRAM 4:1 from three 2:1 (tree); 8:1 = two 4:1 + 2:1.
- p11 MUX as logic: XOR via 4:1 MUX (I0=0,I1=1,I2=1,I3=0); 2^n:1 MUX implements any n-var function; FPGA LUTs.
- p13 DIAGRAM 1:4 DEMUX; uses (CPU writing to chosen register, network switch). p14 DEMUX routing table.

## [05] Labs/Whiteboards/L04 (19 Aug) Lab 3: Combinational circuits (MUX/DEMUX in Verilog) — 40 pp
- p5-7 initial, always @(*) vs @(posedge clk), `timescale/`define/`include. p9-12 testbench theory ($time, $finish, $stop, $dumpfile/$dumpvars, stimulus).
- p14 uses of data selectors: ALU operand select (reg vs imm), PC update (PC+4/branch/jump), memory routing.
- p16-18 MUX: n select lines -> 2^n inputs; 2:1 truth table; Y=S'I0+SI1.
- CODE p19 mux2x1 gate-level (not/and/or primitives); p21 ternary version; p22 mux2x1_tb with $monitor.
- p23-26 4:1 MUX TT; structural vs behavioural; case statement (default avoids latch); CODE mux4_1 behavioural; p27 mux4_1_tb with for loop.
- p30-31 DEMUX: Y0=S'D, Y1=SD; naming 1:2/1:4. CODE p32 demux1_2, p33 tb; p34 1:4 TT; p35 uses (memory address decoding, telecom, chip select); CODE p36 demux1_4 (case), p37 tb.
- p38 common errors (missing default -> latch; reg vs wire; overlapping case; {s1,s0} order). p39 homework: 8:1 MUX from two 4:1 + 2:1; parameterised WIDTH mux; active-low enable_n on demux1_4.

## [23] Lectures/Whiteboards/L04 (20 Aug) Combinational Blocks II: Decoders & Adders — 20 pp
- p2 DIAGRAM 2-to-4 decoder + TT (one-hot). p3 DIAGRAM 3-to-8 decoder block; p4 3-to-8 TT; p5 DIAGRAM inside 3-to-8: 8 AND + 3 NOT, Dk = minterm k; n-to-2^n needs 2^n ANDs.
- p6 TABLE MUX vs DEMUX vs Decoder (inputs/outputs/does/one-liner); decoder = DEMUX with data tied to 1 (enable).
- p7 quick check: select 1 of 8 sensors -> 8:1 MUX.
- p9 DIAGRAM half adder TT Sum=A⊕B, Carry=AB. p10 DIAGRAM full adder TT, Sum=A⊕B⊕Cin, Cout=AB+Cin(A⊕B).
- p11 DIAGRAM FA = 2 HA + OR. p12 DIAGRAM 4-bit ripple carry adder FA3..FA0, Cin=0.
- p13 carry propagation delay: 4Δ/8Δ/16Δ/32Δ linear; carry-lookahead preview (area vs speed).
- p14 mistakes: MUX vs DEMUX, DEMUX vs decoder, select count (8:1 needs 3), HA has no Cin, ripple not fast, 4:1 MUX handles a 3-var function.
- p15 takeaway: any function = decoder + OR, or one MUX. p16 homework: 2:1 MUX from gates; 3-to-8 TT; HA->FA. Exit: 4:1 from 2:1; 4:1 MUX for F(A,B,C)=Σm(1,3,5,6); 3-to-8 uses 8 ANDs each one minterm.
- p18 refs: Harris & Harris ch.2; Patterson & Hennessy appendix.

## [06] Labs/Whiteboards/L05 (24 Aug) Lab 4: HA, FA, 4-bit ripple adder (Verilog) — 26 pp
- p3 why adders: subtraction A+~B+1, multiplication, PC+4. p4-5 HA eq/TT/schematic. CODE p6 half_adder.v; p7 ha_tb self-checking (task check, PASS/FAIL + expected output).
- p8 why HA isn't enough (11+01 needs 3 inputs at bit 1). p9-10 FA eq; Sum=parity, Cout=majority. p11 DIAGRAM FA from 2 HA + OR; p12 why OR works (cout1, cout2 mutually exclusive).
- CODE p13 full_adder.v structural; p14 fa_tb (for loop, iverilog/vvp/gtkwave commands).
- p15 DIAGRAM 4-bit RCA; CODE p16 adder4.v; p17 adder4_tb vectors 1+1, 7+1, 15+1 (overflow cout), 8+8; p18-19 hand traces; p20 GTKWave carry staircase.
- p21 ripple slow: ~2 gate delays/FA, 8 for 4-bit, 128 for 64-bit; CLA: G=AB, P=A⊕B, Cout=G+P·Cin.
- p22 common errors (c1&c2 vs c1|c2, bit order, unconnected X). p23 homework: FA from one HA; parametric adder#(N) generate; overflow V=c3⊕c4.

## [24] Lectures/Whiteboards/L05 (25 Aug) Number Systems & Two's Complement — 34 pp
- p4 11111111 = 255 unsigned / -1 signed. p6 positional: 237, 101101=45. p7 bin->dec 101010=42; dec->bin repeated ÷2 (42 -> 101010, read remainders bottom-up).
- p8 hex: 10110101 = 0xB5 = 181; A-F table. p9 0x2A = 0010 1010 = 42. p10 powers of 2, KB/MB/GB/TB; 32-bit counter ~4.3B.
- p12 sign-magnitude ±18 (two zeros, special add logic; used in FP sign). p13 1's complement (two zeros, end-around carry). p14 2's complement invert+1: +18=00010010, -18=11101110.
- p15 MSB weight -128: 11101110 = -128+64+32+8+4+2 = -18. p16 range -2^(n-1)..2^(n-1)-1 table (4:-8..7, 8:-128..127, 16:-32768..32767, 32: ±2.1B). Number wheel.
- p17 sign extension: +5 0101->00000101, -5 1011->11111011 (zero-padding gives +11). lb vs lbu.
- p18 quick check 10000000 = -128. p20 binary addition 13+11 = 24 (4-bit carry-out). p21-22 subtraction as add negative: 5-3 = 0101+1101 = (1)0010 = 2.
- p24 overflow +5+4 = 1001 = -7 (4-bit). p25 V = Cin(MSB) ⊕ Cout(MSB); same signs -> opposite result sign; opposite signs never overflow.
- p26 signed overflow (OF) vs unsigned (CF = carry out). p27 four cases: 5+4 OVF, -6+-5 = 0101 OVF, 5+-3 ok, 3+2 ok.
- p28 real failures: Ariane 5 (1996, 64-bit float->16-bit int, ~$370M), Boeing 787 (248 days), Gangnam Style 2014 (32-bit view counter), Pac-Man level 256.
- p29 mistakes. p31 homework/exit: -45 -> 11010011; 0110+1100 (6 + -4 = 2, no overflow); 0xB7 = 10110111 = -73 signed (183 unsigned). p32 recap: +18 → 11101110 is -18 (slide says "two's complement of +18 is 11101110"); 0xFF signed = -1.
- NOTE: "ALU and Register File" (syllabus 3.6) is NOT in any deck as its own slides — ALU only mentioned in passing; register file taught in L09 deck. -> 3.6 = researched.

## [07] Labs/Whiteboards/L06 (26 Aug) Lab 5: Adder-subtractor, 2's complement & overflow flags — 14 pp
- p2 (image) DIAGRAM 4-bit adder-subtractor: each Bi XOR K -> FA; K also = Cin; K=0 add, K=1 subtract (A + ~B + 1).
- p3 (image) CODE adder_subtractor: b_in = b ^ {4{m}}; {cout,s} = a + b_in + m.
- p4 homework: 1- & 2-bit comparator and multiplier; explore carry look-ahead adder.
- p5 unsigned 0..15 vs signed -8..7 table. p6 CF = Cout (1+1 CF0; 15+1 CF1; 8+8 CF1).
- p7-8 OF = c3 ⊕ c4 with MSB-column truth table (sign rule).
- CODE p9 cla_adder_4bit_ovf flags: cf = c4; of = c3 ^ c4.
- p10-12 four test cases: 0001+0001 CF0 OF0; 1111+0001 CF1 OF0; 0111+0001 CF0 OF1; 1000+1000 CF1 OF1; 0011+0010 quiet. (slide p10 lists the flag labels shifted; use the traced values p11-12.)

## [25] Lectures/Whiteboards/L06 (27 Aug) Latches, Flip-Flops & Timing — 15 pp
- p2 all so far stateless. p4 TABLE combinational vs sequential. p6 DIAGRAM feedback loop. p7 DIAGRAM bistable (2 cross-coupled inverters).
- p9 DIAGRAM SR latch (cross-coupled NOR). p10 TT S R: 00 hold, 10 set, 01 reset, 11 forbidden (Q=Q'=0).
- p11 forbidden state + race on release. p12 DIAGRAM NAND SR latch (active-low S',R'; S'=R'=0 forbidden).
- p13 DIAGRAM D latch (D->S, D'->R, gated by EN). p14 DIAGRAM D-latch transparency waveform. p15 DIAGRAM clock waveform, f = 1/T.

## [08] Labs/Whiteboards/L07 (31 Aug) Lab 6: SR latch, D latch, D FF (Verilog) — 36 pp
- p6-8 SR latch equations Q = ~(R | Q'), Q' = ~(S | Q). CODE p9 sr_latch.v; p12 sr_tb.v (set/hold/reset/hold/forbidden/metastable).
- p10 forbidden state 3 steps; p13 why SR is hard (two controls, glitches, no 'now').
- p14 DIAGRAM gated SR latch (NAND-based with enable E). p15 DIAGRAM D latch S=D·E, R=D'·E (NAND implementation). p16 transparency waveform. CODE p17 d_latch.v (reuses sr_latch).
- p18 clock; p19 (image) DIAGRAM ring oscillator: odd number of inverters in a loop -> clock, f = 1/T, total loop delay sets period.
- p20 level vs edge triggered table. p21 DIAGRAM latch (glitches pass) vs FF (only edge) waveforms.
- p22 DIAGRAM D FF symbol (triangle = edge). p23 DIAGRAM master-slave D FF (two D latches, opposite clock phases). p24 DIAGRAM Clock/Qm/Qs waveform.
- CODE p25 d_ff.v (always @(posedge clk) q <= d); p26 ff_tb.v with glitches + expected Q; p27 waveform.
- p28 TABLE D latch vs D FF (control, transparent, glitches, Verilog body, output type, usage).
- p29-30 setup/hold/t_cq definitions; metastability; synchronizers at clock-domain crossings.
- p31 where latches still used: SRAM cells, time borrowing, async resets. p32 common errors (= vs <=, begin/end, wire vs reg).
- Lab programs (from Study Pack 3): D Latch, D FF with Enable, Master-Slave D FF.

## [26] Lectures/Whiteboards/L07 (01 Sep) Latches, Flip-Flops & Timing II — 17 pp
- p3 level vs edge. p4 master-slave. p5 TABLE latch vs flip-flop (trigger, transparent, gate count ~2x, races, use).
- p7 setup/hold photo analogy; p8 setup violation (D changes too late) vs hold violation (too soon after edge) -> metastability.
- p9 ball-on-hill metastability; async inputs. p10 synchronizer chain 2-3 FFs; MTBF.
- p11 3.5 GHz -> T ~0.29 ns; STA (PrimeTime); critical path sets max clock; overclocking.
- p12 DIAGRAM D FF waveform trace (Q changes only at rising edges; D 0->1->0->1 example).
- p15 homework: NOR & NAND SR state tables; trace Q for D latch and D FF; path delay 0.28 ns + setup 0.05 ns -> Tmin 0.33 ns -> fmax ≈ 3.03 GHz.

## [09] Labs/Whiteboards/L08 (02 Sep) Lab 7: Shift Registers & Counters theory (Neso-style) — 28 pp
- p4 DIAGRAM 8-bit register = 8 D FFs sharing clock; LOAD & CLEAR controls. p5 TABLE SISO/SIPO/PISO/PIPO (input/output/use: delay line, UART RX, UART TX, buffer).
- p6-7 DIAGRAM SISO chain of 4 D FFs + filmstrip shifting 1,0,1,1; CODE q <= {q[2:0], serial_in}; serial_out=q[3].
- p8-9 DIAGRAM SIPO (parallel taps) + filmstrip -> 1011; CODE sipo_reg.
- p10-11 DIAGRAM PISO: 2:1 MUX (AND-OR) before each D, Shift/Load control; filmstrip; CODE if(load) q<=d else q<={1'b0,q[3:1]}; sout=q[0].
- p12-13 DIAGRAM PIPO block (D3..D0 in, Q3..Q0 out); CODE if(load) q<=d.
- p15 2-bit ripple up counter (T=1, FF1 clocked by Q0) filmstrip. p16-17 DIAGRAM 3-bit ripple with T FFs; t_settle = n·t_pd; f_max = 1/(n·t_pd); 7->8 transient 6,4 (table).
- p18 (image) 4-bit synchronous counter animation (EN=1, count sequence 0000..1111).
- p19 synchronous counter design steps (sequence -> PS/NS table -> excitation table -> K-map -> wire).
- p20 2-bit sync up counter table T1=Q0, T0=1; CODE up2. p21 3-bit rule T0=1, T1=Q0, T2=Q0Q1; CODE up3 (q+1). p22 CODE updown4.
- p23-24 DIAGRAM ring counter (4 D FFs, Q3->D0, preset 0001); CODE {q[2:0],q[3]}. p25 TABLE ripple vs sync vs ring (n states) vs Johnson (2n states, complemented feedback).

## [27] Lectures/Whiteboards/L08 (03 Sep) Registers, Counters & State Machines — 45 pp
- p5 FF toolkit SR/D/JK/T. p6 DIAGRAM latch vs FF waveform. p7 DIAGRAM SR latch NOR + char table. p8 D FF symbol + char table Q(n+1)=D.
- p9 DIAGRAM JK latch (NAND gates around SR latch) table hold/reset/set/toggle; Q+ = JQ' + K'Q.
- p10 T FF table, Q+ = T⊕Q; build from JK (J=K=T) or D (D = T⊕Q) DIAGRAMS.
- p11 DIAGRAM divide-by-2 waveforms (Q0 ÷2, Q1 ÷4); 32,768 Hz -> 1 Hz.
- p12 TABLE four FFs: SR Q+=S+R'Q; D Q+=D; JK Q+=JQ'+K'Q; T Q+=T⊕Q, uses. Real HW uses D FFs.
- p13 TABLE async vs sync reset (when acts, clock?, timing risk, use: power-on vs mod-N/FSM restart).
- p14-16 register = row of FFs sharing clock; DIAGRAM 8-bit register block (PC, IR, pipeline regs are registers).
- p17 DIAGRAM load enable: 2:1 MUX per bit (LOAD=1 new data, 0 feedback Q).
- p18 DIAGRAM shift register chain. p19 4 types. p20 uses: serial<->parallel, delay lines, ×2/÷2, LFSR.
- p21-23 counters; waveform Q0,Q1,Q2 0..7; rule: bit flips when all lower bits are 1 -> T0=1, T1=Q0, T2=Q0Q1.
- p24 DIAGRAM ripple counter. p25 7->8 transient table (7,6,4,0,8); t_pd=10ns -> 4-bit ~25 MHz, 16-bit ~6 MHz.
- p26 DIAGRAM synchronous counter: T FFs with AND chain (en, t[0..3], next). p27 TABLE ripple vs sync.
- p28 mod-N (mod-6 resets at 6), divide-by (bit k = clk ÷ 2^(k+1)). p29 counters in the wild (PC, freq division, timers, memory addressing).
- p31 FSM = states, transitions, outputs; traffic light. p32 TABLE Moore vs Mealy (6 rows).
- p33 DIAGRAM FSM anatomy: Mealy (inputs -> next-state logic -> state register -> output logic with inputs) and Moore (output logic from state only).
- p34-35 DIAGRAM traffic-light state diagram GREEN->YELLOW->RED (timer). p36 state table (Go/Slow/Stop). p37 6-step FSM design flow.
- p38 FSMs everywhere (control unit F-D-E-W). p39 DIAGRAM datapath + control (control FSM sends control signals, datapath returns status flags).
- p40 mistakes: load enable, ripple at speed, ⌈log2 N⌉ FFs, Moore/Mealy, reset state, unreachable states.
- p42 homework: shift 1011 over 4 clocks; 3-bit sync counter waveforms; '110' detector; 1 MHz -> 1 kHz (÷1000 => 10 FFs, mod-1000). Exit: mod-12 needs 4 FFs; Moore vs Mealy; '11' detector diagram.

## [10] Labs/Whiteboards/L09 (07 Sep) Lab 8: Shift registers & counters Verilog exercises — 9 pp
- CODE Q1 register_8bit (ld); Q2 register_8bit_rst (sync rst priority > ld > hold); Q3 sipo (rst, d_in, shift left into q[0]); Q4 piso (sh_ld=0 load, 1 shift right, d_out=q[0]); Q5 up_counter4 (rst, en, wraps); Q6 down_counter4 (rst -> 1111, en, wraps).

## [11] Lectures/L08 MCA_Lecture_6_Counters.pdf — 11 pp
- Same counter slides as [27] p21-29: counter def, 3-bit 0->7 wrap, waveform rule T0=1,T1=Q0,T2=Q0Q1, DIAGRAM ripple counter, 7->8 transient table, DIAGRAM synchronous counter, TABLE ripple vs sync, mod-N & divide-by, counters in the wild.

## [12] Lectures/L09 MCA_Lecture_7_Register_Files_and_FSMs.pdf — 25 pp
- p2-11 FSM intro repeated (3 ingredients, Moore vs Mealy table, anatomy DIAGRAM, traffic light diagram & table, 6-step flow, FSMs everywhere, datapath+control DIAGRAM).
- p14 need: add R1,R2,R3 reads 2 + writes 1 per cycle; MIPS/RISC-V 32×32-bit, 2R+1W.
- p16 DIAGRAM register file block: Read register 1/2 (5 bits), Write register (5), Write data (32), Read data 1/2 (32), Write (RegWrite) control.
- p17 DIAGRAM write port: WADDR[4:0] -> 5:32 decoder -> WE0..WE31 AND WE -> enables of R0..R31 (WDATA bus to all).
- p18 DIAGRAM read ports: Register 0..31 -> two 32:1 MUXes selected by Read Register 1 / 2 (5 = log2 32).
- p19 DIAGRAM 2 reads + 1 write. p20 TABLE read = combinational vs write = synchronous (read-before-write in one cycle).
- p21 RISC-V x0 hardwired zero; hierarchy RF -> L1 -> L2 -> RAM.
- p22 mistakes incl. resetting detector to S0 after 1011 (should go to prefix state), Moore needs one more state, tri-state contention.
- p24 homework: 8×16 register file (3->8 decoder); Mealy '10' detector; Mealy->Moore conversion. Exit: read comb vs write sync; Moore 1011 needs 5 states; trace Mealy detector on 101011 (pulses at bit 4 and bit 6 with overlap).

## [01] Labs/L11 Lab8_Sequence_Detector_FSMs.pdf — 9 pp
- Pattern 1011, shared stream IN = 10110110; overlap -> 2 matches (bits 1-4, 4-7), non-overlap -> 1. Telecom framing context (DS1 001011, SONET 11110110).
- Q1 Mealy overlap DIAGRAM + table: S0:0->S0/0,1->S1/0; S1:0->S2/0,1->S1/0; S2:0->S0/0,1->S3/0; S3:0->S2/0,1->S1/1. CODE mealy_overlap.v. out pulses at bits 4 and 7.
- Q2 Mealy non-overlap: same except S3,1 -> S0/1. CODE mealy_nooverlap.v. 1 match.
- Q3 Moore overlap 5 states: S0(0):0->S0,1->S1; S1(0):0->S2,1->S1; S2(0):0->S0,1->S3; S3(0):0->S2,1->S4; S4(1):0->S2,1->S1. CODE moore_overlap.v; out one cycle later.
- Q4 Moore non-overlap: S4: 0->S0, 1->S1. CODE moore_nooverlap.v.
- CODE tb_top shared testbench (stream 8'b10110110, @(negedge clk)). Summary table of 4 builds.

## [13] Lectures/L10 MCA_Lecture_8_SRAM_vs_DRAM_Memory_Stack.pdf — 22 pp
- p2 register files tiny; FFs 20+ transistors/bit. p5 SRAM static, 6T, few ns, no refresh, expensive.
- p6 DIAGRAM 6T cell: 2 cross-coupled inverters (4T) + access transistors M5, M6; word line, bit line BL and BL'.
- p7 active (self-reinforcing) vs passive storage. p8 SRAM read (precharge BLs, raise WL, cell pulls one BL low, sense amp) and write (drive BLs, raise WL, overpower). Non-destructive read.
- p9 SRAM scorecard -> caches. p11 DRAM 1T1C, 50-100 ns, refresh every few ms, dense.
- p12 DIAGRAM 1T1C: word line -> access transistor gate; bit line; storage capacitor to ground. ~6x denser.
- p13 refresh: leak curve full 0 ms .. lost 64 ms; refresh every row every ~64 ms.
- p14 destructive read: access (charge sharing) -> tiny signal -> sense amp -> write-back.
- p15 DRAM scorecard. p16 quick check: DRAM needs refresh.
- p18 TABLE SRAM vs DRAM (cell, density, speed, refresh, read, cost, use). p19 DIAGRAM density comparison. p20 where each lives (SRAM caches/RF/buffers; DRAM main memory, GDDR).
- p21 DIAGRAM CPU/Memory/I-O/Bus. p22 programs are data.

## [14] Lectures/L11 MCA_Lecture_8_Architecture_Intro.pdf — 24 pp
- p3 stored-program memory map (0x00 lw r1,0x40; 0x04 add r3,r1,r2; 0x08 sw r3,0x44; 0x40 0x2A data; 0x44 data).
- p4 DIAGRAM Von Neumann (CPU: control, ALU, registers; single shared bus; one memory). p7 DIAGRAM bottleneck (Backus 1977). p8 why it limits (contention, IPC cap, idle ALU, worsens). p9 gap chart (CPU demand vs bus bandwidth).
- p12 DIAGRAM Harvard (I-bus to instruction memory, D-bus to data memory). p13-14 timeline VN 2 cycles vs Harvard 1 cycle.
- p15 Harvard uses: DSP, real-time, ATmega328, embedded. p16 TABLE VN vs Harvard.
- p18-19 DIAGRAM modified Harvard: core -> split L1-I/L1-D -> unified L2/L3 -> DRAM. p20 why hybrid wins.
- p21 takeaways incl. memory hierarchy (small-fast over big-slow; locality) & memory wall (CPU outpacing DRAM).
- p22 homework: draw 6T & 1T1C; refresh math 64 ms / 8192 rows = 7.8 µs per row; plot access time vs capacity. Exit: 3 reasons SRAM faster; why DRAM refresh; order L2, DRAM, registers, L1, SSD -> registers < L1 < L2 < DRAM < SSD.
- NOTE: memory hierarchy pyramid & memory wall have NO dedicated slides (only takeaways/homework) -> 8.5 researched.

## [15] Lectures/L11 MCA_Lecture_9_Von_Neumann_vs_Harvard.pdf — 33 pp
- p4 DIAGRAM CPU/Memory/I-O/Bus. p6 stored-program. p7 DIAGRAM VN. p8 four classic components (Control unit, Memory, ALU, I/O).
- p10 history: von Neumann 'First Draft of a Report on the EDVAC' 1945 (Eckert, Mauchly, Turing).
- p12-14 bottleneck + gap chart. p17 DIAGRAM Harvard. p19 Harvard Mark I 1944 (punched tape instructions, relay data).
- p20 timeline. p21 uses. p22 TABLE. p24-26 modified Harvard + split L1 DIAGRAM.
- p27 activity: ATmega328 = true Harvard; ARM Cortex-M4 = modified Harvard; x86-64 desktop = modified Harvard.
- p28 worked: 1 GHz, 32-bit instr + 32-bit data per cycle -> 64 bits × 1e9 = 64 Gbit/s = 8 GB/s; VN one bus carries 8 GB/s; Harvard 4+4 GB/s.
- p29 mistakes. p31 homework: 2 GHz, 64-bit instr + 64-bit data -> 128 bits × 2e9 = 256 Gbit/s = 32 GB/s (VN single bus); Harvard 16 GB/s each.

## [16] Lectures/L12 MCA_Lecture_10_CISC_vs_RISC.pdf — 47 pp
- p4-22 recap of VN/Harvard/modified Harvard (same slides as [15]) = syllabus 10.1.
- p23 DIAGRAM ISA as HW/SW contract (software above compiles to ISA; hardware below executes it).
- p25 CISC: hundreds of instrs, variable length (1-15 bytes x86), memory operands (add [mem1],[mem2]), complex decoder, microcode; x86, VAX, 68000.
- p26 RISC: few simple, fixed 32-bit, load/store only, simple decoder; lw/lw/add/sw; MIPS, ARM, RISC-V, SPARC.
- p27 activity C=A+B; D=C×2: CISC mov/add/mov/shl/mov (~5) vs RISC lw/lw/add/sw/add/sw (6).
- p28 DIAGRAM fixed 32-bit encoding vs variable (prefix/op/modRM/disp/imm). p29 TABLE decoder: complexity in hardware (CISC) vs compiler (RISC).
- p30 ARM wins mobile / x86 holds desktop. p31 DIAGRAM ISA family tree: CISC: VAX, 68000, x86 (1978) -> x86-64 (2003); RISC: IBM 801 -> MIPS, SPARC, ARM (1985), RISC-V (2010).
- p33 code density (CISC edge; ARM Thumb, RISC-V C compress). p34 pipelining (RISC edge: fixed length, uniform decode, 1 cycle, load/store predictable).
- p35 TABLE strengths. p37 DIAGRAM x86 micro-ops: CISC instr -> decoder -> µop load/add/store -> RISC-like core. p38 boundary blurred. p39 who won (x86 skin + RISC core; ARM; RISC-V).
- p41 RISC-V open, royalty-free, modular, Berkeley 2010. p42 domain-specific ISAs: NVIDIA PTX, Google TPU (matrix multiply).
- p43 mistakes (RISC not always faster; RISC runs MORE instructions; ISA ≠ speed). p45 homework: 3-element vector add CISC vs RISC; 3 pipelining reasons. Exit: RISC hallmarks (fixed length, load/store); micro-ops; Apple ARM laptops.

## [17] Lectures/L13 MCA_Lecture_11_Registers_and_Instruction_Formats_.pdf — 30 pp
- p4 why MIPS: clean fixed width, MARS simulator, P&H, transferable.
- p6 DIAGRAM 32 registers grid. p7 TABLE register conventions ($zero 0, $at 1, $v0-$v1 2-3, $a0-$a3 4-7, $t0-$t7 8-15, $s0-$s7 16-23, $t8-$t9 24-25, $k0-$k1 26-27, $gp 28, $sp 29, $fp 30, $ra 31).
- p8 special: $zero, $sp, $ra, PC separate. p9 TABLE $t caller-saved vs $s callee-saved. p10 DIAGRAM PC separate, PC+4.
- p12-13 DIAGRAM R/I/J field layouts (6|5|5|5|5|6; 6|5|5|16; 6|26).
- p14 R-format meaning; add funct 0x20, sub 0x22. p15 worked add $t1,$t2,$t3 = 0|10|11|9|0|0x20.
- p16 I-format: addi, lw, sw, beq. p17 J-format: target = PC[31:28] | (address << 2); 256 MB region; j, jal.
- p19 decode 0x02324820 -> add $t1, $s1, $s2. p20 decode lw $t1,16($sp): 100011 11101 01001 imm 16. p21 assemble addi $t0,$zero,5 = 0x20080005.
- p23 RV32I base (~40 instrs, x0-x31, formats R/I/S/B/U/J). p24 DIAGRAM extensions M A F D C V; RV32IMAFD. p25 TABLE MIPS vs RISC-V.
- p26 mistakes: write to $zero ignored; rd dest; PC+4; $t/$s; sign extension 0xFFFB = -5; <<2.
- p28 homework: decode 0x012A4020 (= add $t0,$t1,$t2); assemble lw $t1,16($sp) (= 0x8FA90010).

## [18] Lectures/L13 MIPS Encoding Reference.pdf — 4 pp (images, read visually)
- Register encoding ooooooss sssttttt dddddaaa aaffffff; Immediate ooooooss sssttttt iiiiiiii iiiiiiii (2's complement -2^15..2^15-1); Jump oooooo + 26-bit i.
- Syntax table: ArithLog f $d,$s,$t; DivMult f $s,$t; Shift f $d,$t,a; ShiftV f $d,$t,$s; JumpR f $s; MoveFrom f $d; MoveTo f $s; ArithLogI o $t,$s,i; LoadI o $t,immed32; Branch o $s,$t,label (i = (label-(current+4))>>2); BranchZ o $s,label; LoadStore o $t,i($s); Jump o label; Trap o i.
- Opcode/funct table: add 100000, addu 100001, addi 001000, addiu 001001, and 100100, andi 001100, div 011010, divu 011011, mult 011000, multu 011001, nor 100111, or 100101, ori 001101, sll 000000, sllv 000100, sra 000011, srav 000111, srl 000010, srlv 000110, sub 100010, subu 100011, xor 100110, xori 001110; lhi 011001, llo 011000 (class-reference-specific); slt 101010, sltu 101001, slti 001010, sltiu 001001; beq 000100, bgtz 000111, blez 000110, bne 000101; j 000010, jal 000011, jalr 001001 (funct), jr 001000 (funct); lb 100000, lbu 100100, lh 100001, lhu 100101, lw 100011; sb 101000, sh 101001, sw 101011; mfhi 010000, mflo 010010, mthi 010001, mtlo 010011; trap 011010.
- Opcode map (ROOT) and function map (REG) grids. NOTE: this reference's j is PC-relative ("pc += i<<2") and uses lhi/llo/trap — a simplified teaching variant; real MIPS32 uses lui (0x0F) and pseudo-direct jumps (lecture p17 uses the real rule).

## [02] Labs/L13 Lab11_MIPS_Assembly.pdf — 38 pp
- p1 add $t2,$t0,$t1 = 000000 01000 01001 01010 00000 100000 = 0x01095020. p5-6 MIPS history (Stanford 1984 Hennessy; SGI; PlayStation R3000A 33.8688 MHz; N64 VR4300 93.75 MHz; PS2 R5900; 2021 abandoned for RISC-V; 2017 Turing award H&P).
- p7 DIAGRAM machine model: CPU (PC, 32 regs, HI/LO, ALU) + byte-addressable memory 2^32 (.text low, .data, heap up, stack down from high).
- p8 load/store c=a+b = lw,lw,add,sw (DIAGRAM). p9 TABLE F/D/E/M/WB per instruction (add skips M; sw skips WB; beq may replace PC).
- p10 register table 0-31. p12 R/I/J layouts with bit ranges; rs,rt = read ports, rd = write port.
- p13 encode add $t2,$t0,$t1 = 0x01095020; li $t0,7 -> addiu = 0x24080007; li $t1,5 = 0x24090005. p14 decode 0x8D280004 = lw $t0,4($t1); addi $t2,$t3,5 = 0x216A0005.
- p15 program in memory at 0x00400000 table. p16 sign- vs zero-extend (andi/ori/xori zero-extend), lb vs lbu on 0xF0, addu doesn't trap; move/li/nop/b via $zero.
- p17 directives (.data .text .asciiz .ascii .word .byte .space .align 2 .globl). CODE p18 Program A (Sum = 12). p19 syscall table (1 print int, 4 print str, 5 read int, 8 read str, 9 sbrk, 10 exit).
- p20 TABLE pseudo-instruction expansions (li, la, lw label, move, b, blt, bge, ble, nop).
- p21 arithmetic table; x=(a+b)-c example; overflow add traps vs addu wraps. p22 mult/div HI/LO (100000×100000; 12!, 13! overflow; 17÷5; -17÷5 = -3 r -2).
- p23 logic (0xCA & 0x0F etc.: and 0x0A, or 0xCF, xor 0xC5, nor 0x30), shifts sll/srl/sra on -16.
- p24 la vs lw vs sw. CODE p25 Program D (x=15, prints 35). p26 alignment & endianness (0x12345678 big/little).
- p27-28 bug hunt S1-S5 + answers. p29-30 hands-on problems + plans. CODE p31 Hello MIPS, Add Two Inputs; p32 Quotient & Remainder; p33 Swap; finishers C->F (C×9÷5+32), ×10 by shifts ((x<<3)+(x<<1)), (a+b)(a-b).
- p34 errata of reference sheets. p35 cold calls. p36 later portal problems map. p37 exit ticket (0x1004; mfhi; lw). Teaser array arr[0..2]. p38 cheat sheet.

## [19] Lectures/L14 MCA_Lecture_12_C_to_MIPS_Translation_.pdf — 27 pp
- p4 translation mindset (variables -> registers, conditions -> compare+branch, structure -> labels, reverse the condition).
- p6 branch toolkit beq, bne, slt, j. CODE p7 simple if (bne skip). p8 if/else (bne Else ... j Done). p9 slt idiom. p10 max of two (slt $t3,$t1,$t0). p11 DIAGRAM flowchart.
- p13 while loop (slide uses blt $t1,$t0,End — NOTE: correct exit test for while(i<n) is bge $t0,$t1,End / slt+beq; the slide's version runs one extra iteration when i == n). p14 for loop (slti/beq).
- p16 DIAGRAM caller/callee: $a0-$a3 args, $v0-$v1 returns, jal, jr $ra. p17 jal (save PC+4 in $ra, jump) / jr $ra.
- p18 DIAGRAM stack grows down (saved $ra, saved $s0, local var, $sp at top); addi $sp,$sp,-8 push.
- CODE p19 recursive factorial full program (main reads n, fact with prologue/base/recursive/combine/epilogue).
- p20-21 DIAGRAM fact(3) stack frames & unwind (3 frames). p22 five-part function template. p23 mistakes (reverse condition, save $ra, A[i] = base + 4i, no blt, balanced stack, save $s).
- p25 homework: if/else c=1/0; sum(n) for loop; recursive factorial. Exit: args/returns; jal two steps; non-leaf must save $ra.
- NOTE: leaf vs non-leaf explicitly named only in exit ticket/takeaways; leaf example researched (P&H leaf_example).

## Units with NO class files at all (researched): 13.x Single-cycle datapath (only the 4 class worksheets in Study Pack/Diagrams_class.pdf: trace beq/sw/lw + fill control signals), 14.x Pipelining (only foreshadowed: Intel 4004 slide F/D/E/W, Lab11 p9 five stages, CISC/RISC p34), 15.x Hazards.
