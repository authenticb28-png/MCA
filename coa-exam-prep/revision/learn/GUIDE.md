# How to write the "Samajh ke Padho" (learn) notes

Reader: a student who reads the concepts notes and feels "these are someone else's notes".
They know the words exist but not what they MEAN. Example complaint: "decoder ka one-hot
side mein likh diya but uska matlab kya hai nahi pata." They are weak in maths. Exam is in 1 day.
Goal: after reading a topic they can (a) explain it in their own words, (b) solve the numerical /
conceptual question the exam asks on it.

## Teaching rules (from learning research: Feynman technique, worked-example effect, dual coding, concrete-before-abstract)

1. **No undefined jargon.** Every technical word (one-hot, minterm, select line, enable, edge-triggered,
   propagation delay, sign bit, opcode, funct, hazard, stall, forwarding) is explained in plain words
   the FIRST time it appears in a topic, in the `.words` box, with a tiny concrete example. If a word
   was defined in an earlier topic, still give a 1-line reminder.
2. **Why before what.** Start with `.why`: the problem this thing solves, with an everyday analogy
   (lift buttons, railway points, a hotel key rack, a tiffin dabba line). Analogy must be accurate.
3. **Concrete before abstract.** Show it working with actual 0/1 values BEFORE the general formula.
4. **How it works, step by step.** `.how` is a numbered list. Every step one action. Never skip a step.
   Maths: show every line of arithmetic (e.g. 13 = 8 + 4 + 1 → 1101). No "clearly" / "obviously".
5. **Diagram + how to read it.** After a `<figure data-d="ID"></figure>` add `<p class="read">` saying
   what to look at first, what the arrows / bubbles / lines mean, and one trace through it with values.
6. **Solved exam-style example(s).** `.ex` box: the question as the exam would ask it, then numbered
   steps, then `<p class="ans">`. Cover the question TYPES that unit's mocks/practice ask (check the
   `practice` and `subjective` arrays in data/unitNN.js and data/mock1.js, mock2.js). Numerical topics
   get 2 examples (one easy, one exam-level). Conceptual topics get one "write the answer like this"
   example showing a model 4–6 line answer.
7. **Trap.** `.trap`: the mistake students actually make and why it is wrong.
8. **Trick.** `.trick`: a memory hook (mnemonic, rhyme, picture) only if it genuinely helps.
9. **One line.** `.yr` "Ek line mein:" the single sentence to remember.
10. Language: Definition in proper exam English. Everything else in simple Hinglish (Roman script,
    natural mix like an Indian senior explaining), short sentences. English terms stay English.
11. Accuracy matters more than anything. Every number, truth table row, encoding, cycle count must be
    checked (compute with node/python if needed). Follow the unit data file and class slides
    (docs/SOURCE_DIGEST.md) where they differ from textbooks; mention the textbook version if needed.
12. No filler, no motivational talk, no practice questions without solutions. Banned: "...", "…",
    "etc.", "and so on", "TODO", "similar to above".

## Markup (HTML fragment, one file per unit: learn/uNN.html)

```html
<section>
<h2>Unit N · Title</h2>
<div class="story"><b>Is unit ki kahani:</b> 3–5 lines: what problem this unit solves, how it connects
to the previous unit and the next one.</div>

<div class="topic"><h3>N.x Topic title</h3>
<div class="why"><b>Pehle socho:</b> ...</div>
<div class="def"><b>Definition:</b> ...</div>
<div class="words"><b>Mushkil shabd, aasaan matlab:</b><dl><dt>word</dt><dd>meaning + tiny example</dd></dl></div>
<div class="how"><b>Kaise kaam karta hai:</b><ol><li>...</li></ol></div>
<figure data-d="D3.3c"></figure>
<p class="read"><b>Diagram kaise padhein:</b> ...</p>
<div class="fx"><b>Formula:</b> ... <br><small>symbol = meaning</small></div>
<div class="ex"><b>Solved example:</b> <p class="qq">question</p><ol><li>step</li></ol><p class="ans">Answer: ...</p></div>
<div class="trap"><b>Galti mat karna:</b> ...</div>
<p class="trick"><b>Trick:</b> ...</p>
<div class="yr"><b>Ek line mein:</b> ...</div>
</div>

<div class="qtypes"><b>Exam mein is unit se kya aata hai → kaise solve karein</b>
<table><tr><th>Question type</th><th>Method (steps)</th></tr>...</table></div>
</section>
```

Not every box is needed in every topic (an intro topic like 1.1 may only need why/def/how/yr), but
every topic MUST have `.why`, `.def`, `.how` and `.yr`, and every topic with any technical word must
have `.words`. Use `<table class="tt">` for truth tables, `<pre>` for assembly/Verilog,
`<mark>` for the 1–3 most important phrases per topic. Use only diagram ids that exist in the unit
data files (`grep -o "id: 'D[0-9.E]*[a-z]'" data/unit*.js`). Escape `<` as `&lt;` in text.

See learn/sample_decoder.html for a complete, approved example of the depth wanted.
