// build.js — turn notes_body.html into two A4 PDFs:
//   COA_Revision_Notes.pdf      (clean typed sheet)
//   COA_Handwritten_Notes.pdf   (handwritten style: ruled paper, ink, highlighter)
// Fonts: Patrick Hand and Caveat (SIL Open Font License). Diagrams are taken from the unit data files, so they match the site exactly.
// Run: node revision/build.js   (needs Playwright + Chromium)
const fs = require('fs'), path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require(path.join(process.execPath, '../../lib/node_modules/playwright'))); }

const dir = __dirname, root = path.join(dir, '..');
const body = fs.readFileSync(path.join(dir, 'notes_body.html'), 'utf8');
const scripts = ['js/svglib.js'].concat(Array.from({ length: 15 }, (_, i) => 'data/unit' + String(i + 1).padStart(2, '0') + '.js'));

const common = `
@page { size: A4; margin: 14mm 14mm 16mm 16mm; }
html, body { background: transparent; }
body { font-size: 10.6pt; line-height: 1.5; }
section { break-before: page; }
section.cover { break-before: auto; }
h1 { font-size: 22pt; margin: 30mm 0 6mm; }
h2 { font-size: 17pt; margin: 0 0 4mm; }
h3 { font-size: 12.5pt; margin: 5mm 0 2mm; break-after: avoid; }
p { margin: 1.5mm 0; }
.f, .d, .w, .t { margin: 2.5mm 0; padding: 2.5mm 3.5mm; break-inside: avoid; }
.f { break-inside: auto; }
.d ol, .w ol { margin: 1mm 0 0; padding-left: 6mm; }
.d li, .w li { margin: .6mm 0; }
table { font-size: 9.3pt; margin: 1.5mm 0; break-inside: avoid; }
th, td { padding: 1mm 2mm; }
.tt td, .tt th { font-family: inherit; }
pre { white-space: pre; font-size: 8.6pt; line-height: 1.35; padding: 2.5mm 3mm; break-inside: avoid; margin: 1.5mm 0; overflow: visible; }
code { font-size: .9em; }
figure { margin: 3mm 0; text-align: center; break-inside: avoid; }
figure svg { max-width: 100%; max-height: 92mm; height: auto; }
figure svg.big { max-height: 125mm; }
figcaption { font-size: 9pt; margin-top: 1mm; }
.sub { font-size: 12pt; }
.legend .mini { margin: 2mm 0; }
.toc { columns: 2; font-size: 11.5pt; margin-top: 8mm; }
.sheet .f { font-size: 9.6pt; line-height: 1.32; break-inside: auto; columns: 2; column-gap: 8mm; }
.sheet h2 { margin-bottom: 2mm; }
.sheet hr { border: 0; border-top: 1px dashed #b8a24a; margin: 1.5mm 0; }
`;

const typed = `
:root { --ink:#141a26; --line:#c9d1e0; --panel2:#eef2f8; --code-bg:#f4f6fa; --code-ink:#141a26; }
body { font-family: "DejaVu Sans", Arial, sans-serif; color: var(--ink); }
h1, h2 { color: #123c8c; }
h2 { border-bottom: 2.5px solid #123c8c; padding-bottom: 1.5mm; }
h3 { color: #123c8c; }
mark { background: #fff1a8; padding: 0 1px; }
.f { background: #fff8d6; border: 1.5px solid #e0b100; border-left: 5px solid #e0b100; border-radius: 4px; }
.d { background: #f1f6ff; border-left: 4px solid #2f6fd6; border-radius: 3px; }
.w { background: #f2fbf5; border-left: 4px solid #1e8e4f; border-radius: 3px; }
.t, .w .t { background: #fdecec; border-left: 4px solid #c0392b; color: #7a1a12; display: block; }
pre { border: 1px solid var(--line); }
`;

const hand = `
@font-face { font-family: Hand; src: url("fonts/PatrickHand-Regular.ttf"); }
@font-face { font-family: Title; src: url("fonts/Caveat.ttf"); }
:root { --ink:#1d3c8f; --line:#5a6fa8; --panel2:transparent; --code-bg:transparent; --code-ink:#1d3c8f; --gate:transparent; }
html { background-color: #fffdf6; background-image: radial-gradient(circle, #c9d3e6 0.55px, transparent 0.75px); background-size: 5mm 5mm; }
html::before { content: ""; position: fixed; top: -20mm; bottom: -20mm; left: -6mm; border-left: 1.2px solid #e8a3a3; }
body { font-family: Hand, "DejaVu Sans", sans-serif; color: var(--ink); font-size: 12.6pt; line-height: 1.45; }
b, strong, th { font-weight: 700; -webkit-text-stroke: 0.25px currentColor; }
b, strong { color: #0f2a6e; }
h1, h2, h3 { font-family: Title, Hand, sans-serif; font-weight: 700; color: #b3261e; }
h1 { font-size: 34pt; } h2 { font-size: 28pt; } h3 { font-size: 19pt; color: #0f2a6e; text-decoration: underline wavy #e07a5f 1.2px; text-underline-offset: 4px; }
h2 { border-bottom: 2px solid #b3261e; border-radius: 0 0 40% 5% / 0 0 6px 3px; display: inline-block; padding-right: 8mm; }
mark { background: linear-gradient(100deg, rgba(255,230,0,.0) 0%, rgba(255,226,40,.75) 4%, rgba(255,226,40,.6) 92%, rgba(255,230,0,0) 100%); color: inherit; padding: 0 2px; }
.f { background: rgba(255, 236, 90, .38); border: 2px solid #c2410c; border-radius: 14px 4px 16px 6px / 6px 14px 4px 12px; transform: rotate(-0.25deg); }
.d { border-left: 2.5px solid #2563eb; border-radius: 0 8px 8px 0; background: rgba(147, 197, 253, .14); }
.d > b:first-child::before { content: "✎ "; }
.w { border: 1.6px dashed #15803d; border-radius: 10px 4px 10px 4px; background: rgba(134, 239, 172, .12); transform: rotate(0.15deg); }
.w > b:first-child::before { content: "➜ "; }
.t, .w .t { color: #b3261e; border: 1.6px solid #b3261e; border-radius: 6px 12px 6px 12px; background: rgba(252, 165, 165, .15); display: block; }
.t::before { content: "⚠ "; }
table { border-collapse: collapse; }
th, td { border: 1.3px solid #4b5f99; }
th { background: rgba(255, 226, 40, .3); }
pre { font-family: "DejaVu Sans Mono", monospace; color: #1d3c8f; border: 1.4px solid #4b5f99; border-radius: 8px 3px 8px 3px; background: rgba(255,255,255,.55); }
code { background: none; color: #0f2a6e; }
figure { background: rgba(255,255,255,.65); border: 1.3px solid #9fb0d6; border-radius: 10px 4px 10px 4px; padding: 2mm; }
figcaption { color: #b3261e; }
/* diagrams in ink colours with the handwriting font */
.dg text { font-family: Hand, sans-serif !important; fill: #1d3c8f; }
.cover { text-align: left; }
`;

function page(css) {
  return '<!doctype html><html><head><meta charset="utf-8"><title>COA One-Shot Revision</title>' +
    '<link rel="stylesheet" href="../css/style.css"><style>' + common + css + '</style></head><body>' + body +
    scripts.map((s) => '<script src="../' + s + '"></script>').join('') +
    '<script>(function(){var D={};UNITS.forEach(function(u){u.subtopics.forEach(function(st){(st.diagrams||[]).forEach(function(d){D[d.id]=d;});});});' +
    'document.querySelectorAll("figure[data-d]").forEach(function(f){var d=D[f.dataset.d];if(!d){f.textContent="missing "+f.dataset.d;return;}' +
    'f.innerHTML=d.svg+"<figcaption>"+d.id+" · "+d.title+"</figcaption>";});document.body.dataset.ready="1";})();</script></body></html>';
}

(async () => {
  const opts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const browser = await chromium.launch(opts);
  for (const [name, css, out] of [['typed', typed, 'COA_Revision_Notes.pdf'], ['handwritten', hand, 'COA_Handwritten_Notes.pdf']]) {
    const html = path.join(dir, name + '.html');
    fs.writeFileSync(html, page(css));
    const p = await browser.newPage();
    const errs = [];
    p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('file://' + html);
    await p.waitForSelector('body[data-ready="1"]');
    await p.evaluate(() => document.fonts.ready);
    const missing = await p.evaluate(() => [...document.querySelectorAll('figure')].filter((f) => /^missing/.test(f.textContent)).map((f) => f.textContent));
    await p.pdf({ path: path.join(dir, out), format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: '<div style="width:100%;font-size:8px;color:#888;text-align:center;font-family:sans-serif">COA one-shot revision · page <span class="pageNumber"></span> / <span class="totalPages"></span></div>' });
    console.log(out, errs.length ? 'ERRORS ' + errs.join(' | ') : 'ok', missing.length ? 'MISSING ' + missing.join(', ') : '');
    await p.close();
  }
  await browser.close();
})();
