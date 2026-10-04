# Build notes (how the site is put together — read this to resume work)

## Load order (index.html)
css/style.css → js/svglib.js (window.S, diagram helpers) → data/unit01.js … unit15.js → data/diagrams.js → data/mock1.js → data/mock2.js → data/extras.js (study plan, last-night, bonus 14-15) → js/tools.js → js/app.js

## Data schema
```js
window.UNITS = window.UNITS || [];
UNITS.push({
  id: 1, title: 'Digital Foundations I: Boolean Algebra', lectures: 'L01, Lab 1',
  subtopics: [{
    id: '1.1', title: '...', badge: 'class' | 'researched' | 'extra',
    sources: '[L01] p1-10 ...',            // shown under the badge
    sourceLine: 'Source: Harris & Harris ...', // trusted refs for researched/extra
    explain: `html`, keypoints: ['html', ...],
    diagrams: [{ id: 'D1.2a', title: '', svg: S.something(...), how: '2-line how-to-draw' }],
    examples: [{ title: '', html: `` }],
    code: [{ id: 'C1.3a', title: '', lang: 'verilog'|'mips'|'c', src: ``, io: `sample input/expected output html` }],
    mistakes: ['html', ...],
    practice: [Q, Q, Q],    // >= 3
    subjective: [{ q, model, marks }]
  }]
});
```
Question Q: `{ id, type: 'mcq'|'msq'|'nat'|'match', tag: 'GATE-style'|'Class quiz'|'Lab question'|..., q, options, answer, tol, explain, why: [per option] , pairs/choices for match }`
- mcq: answer = index; msq: answer = [indices]; nat: answer = number, tol = absolute tolerance; match: left[], right[] (choices), answer = [index into right for each left].

Diagram registry: every `diagrams[]` entry is indexed into `window.DIAG[id]` by app.js so diagram questions / revision thumbnails can reference `ref: 'D5.2a'`.

## Content rules
- No "...", "…", "etc.", "TODO", "similar to above", "rest of", "and so on" anywhere in data (verify.py enforces).
- GATE tags only where certain; default 'GATE-style'.
- Template literals: never write `${` inside content.
EOF
## Mock papers (data/mock1.js, mock2.js)
`window.MOCKS[n] = { title, minutes, instructions, passages: [{id, title, unit, html}], sections: {A..F: [Q]} }`. Every question needs a unique `id` and `marks`; section B questions name their `passage`. E = `sub` (6 marks), F = `type: 'diag'` (5 marks, `svg` and/or `refs`, `model`, `scheme`, `draw`). Totals must be 100 (verify.py checks).

## Extras (data/extras.js)
`window.EXTRAS = { home: html, plan: {html}, revision: fn, bonus: fn }`. A function page is rendered at view time (so it can read window.DIAG / window.COA); attach `.questions` to wire practice questions.

## Verification
`python3 verify.py` (text + schema, needs node) and `python3 verify.py --browser` (adds the Chromium smoke test; needs Playwright, set CHROMIUM_PATH if the bundled browser is elsewhere). docs/lint.sh is the old quick grep.
