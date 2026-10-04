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