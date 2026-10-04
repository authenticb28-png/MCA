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

