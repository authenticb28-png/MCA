// build_concepts.js — print concepts_body.html as COA_Concepts_Notes.pdf (calm handwritten style).
// Diagrams come from the unit data files (same as the site) with their how-to-draw line.
// Fonts: Patrick Hand + Caveat (SIL Open Font License). Run: node revision/build_concepts.js
const fs = require('fs'), path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require(path.join(process.execPath, '../../lib/node_modules/playwright'))); }

const dir = __dirname;
const body = fs.readFileSync(path.join(dir, 'concepts_body.html'), 'utf8');
const scripts = ['js/svglib.js'].concat(Array.from({ length: 15 }, (_, i) => 'data/unit' + String(i + 1).padStart(2, '0') + '.js'));

const css = `
@font-face { font-family: Hand; src: url("fonts/PatrickHand-Regular.ttf"); }
@font-face { font-family: Title; src: url("fonts/Caveat.ttf"); }
@page { size: A4; margin: 14mm 14mm 16mm 16mm; }
:root { --ink:#22346e; --line:#8e9cc4; --panel2:transparent; --code-bg:transparent; --code-ink:#22346e; --gate:transparent; }
html { background-color: #fffef9; background-image: radial-gradient(circle, #dfe5f0 0.5px, transparent 0.7px); background-size: 5mm 5mm; }
body { background: transparent; font-family: Hand, "DejaVu Sans", sans-serif; color: var(--ink); font-size: 12.8pt; line-height: 1.45; }
b, strong, th { font-weight: 700; -webkit-text-stroke: 0.22px currentColor; }
section { break-before: page; }
section.cover { break-before: auto; }
h1, h2, h3 { font-family: Title, Hand, sans-serif; font-weight: 700; line-height: 1.15; }
h1 { font-size: 36pt; color: #a8322a; margin: 22mm 0 4mm; }
h2 { font-size: 28pt; color: #a8322a; margin: 0 0 3mm; border-bottom: 1.6px solid #d9a19c; padding-bottom: 1mm; }
h3 { font-size: 19pt; color: #1b2c64; margin: 6mm 0 1.5mm; break-after: avoid; }
p { margin: 1.4mm 0; }
.sub { font-size: 14pt; }
mark { background: rgba(255, 224, 60, .55); color: inherit; padding: 0 2px; border-radius: 3px; }
.def { background: rgba(219, 232, 255, .75); border-left: 3.5px solid #4a73c9; border-radius: 0 8px 8px 0; padding: 2mm 3.5mm; margin: 1.5mm 0 2mm; break-inside: avoid; }
.hin { color: #0d5e57; margin: 2mm 0; }
.hin b { color: #0d5e57; }
ul.kp { margin: 1.5mm 0; padding-left: 6mm; }
ul.kp li { margin: .8mm 0; }
.fx { background: rgba(255, 240, 160, .55); border: 1.3px solid #d6a516; border-radius: 8px; padding: 2mm 3.5mm; margin: 2mm 0; break-inside: avoid; }
.trick { color: #2f7a35; }
.trick b { color: #2f7a35; }
.yr { border: 1.4px dashed #c0453b; background: rgba(255, 228, 225, .45); border-radius: 8px; padding: 1.5mm 3.5mm; margin: 2mm 0 1mm; break-inside: avoid; }
.yr b { color: #a8322a; }
.topic { margin-bottom: 4mm; }
table { border-collapse: collapse; margin: 2mm 0; font-size: 11.6pt; break-inside: avoid; }
th, td { border: 1.1px solid #8e9cc4; padding: .8mm 2.2mm; text-align: left; }
.tt td, .tt th { font-family: inherit; text-align: center; }
th { background: rgba(255, 224, 60, .3); }
pre { font-family: "DejaVu Sans Mono", monospace; font-size: 9pt; line-height: 1.35; color: #22346e; background: rgba(255,255,255,.7); border: 1.1px solid #8e9cc4; border-radius: 6px; padding: 2mm 3mm; white-space: pre; break-inside: avoid; margin: 2mm 0; }
code { font-family: "DejaVu Sans Mono", monospace; font-size: .82em; background: none; color: #1b2c64; padding: 0; }
figure { margin: 3mm 0; text-align: center; break-inside: avoid; background: rgba(255,255,255,.75); border: 1px solid #ccd4e6; border-radius: 8px; padding: 2mm; }
figure svg { max-width: 100%; max-height: 70mm; height: auto; }
figure svg.big { max-height: 118mm; }
figcaption { font-size: 10.5pt; margin-top: 1mm; text-align: left; }
figcaption .ttl { color: #a8322a; }
figcaption .how { color: #4b5876; }
.dg text { font-family: Hand, sans-serif !important; }
.howto { margin-top: 6mm; }
.howto .def, .howto .fx, .howto .yr { break-inside: avoid; }
.sources { font-size: 10.5pt; color: #4b5876; margin-top: 6mm; }
.sheet h2 { margin-bottom: 2mm; }
.sheet .cs { columns: 2; column-gap: 7mm; font-size: 11pt; line-height: 1.35; }
.sheet .cs p { break-inside: avoid; margin: 0 0 2.2mm; padding: 1.2mm 2mm; background: rgba(255, 240, 160, .35); border-radius: 5px; }
.sheet .cs b { color: #a8322a; }
`;

const page = '<!doctype html><html><head><meta charset="utf-8"><title>COA Concepts &amp; Formulas</title>' +
  '<link rel="stylesheet" href="../css/style.css"><style>' + css + '</style></head><body>' + body +
  scripts.map((s) => '<script src="../' + s + '"></script>').join('') +
  '<script>(function(){var D={};UNITS.forEach(function(u){u.subtopics.forEach(function(st){(st.diagrams||[]).forEach(function(d){D[d.id]=d;});});});' +
  'document.querySelectorAll("figure[data-d]").forEach(function(f){var d=D[f.dataset.d];if(!d){f.textContent="missing "+f.dataset.d;return;}' +
  'f.innerHTML=d.svg+"<figcaption><span class=ttl>"+d.title+"</span>"+(d.how?"<br><span class=how>How to draw: "+d.how+"</span>":"")+"</figcaption>";});document.body.dataset.ready="1";})();</script></body></html>';

(async () => {
  const opts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const browser = await chromium.launch(opts);
  const html = path.join(dir, 'concepts.html');
  fs.writeFileSync(html, page);
  const p = await browser.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file://' + html);
  await p.waitForSelector('body[data-ready="1"]');
  await p.evaluate(() => document.fonts.ready);
  const missing = await p.evaluate(() => [...document.querySelectorAll('figure')].filter((f) => /^missing/.test(f.textContent)).map((f) => f.textContent));
  await p.pdf({ path: path.join(dir, 'COA_Concepts_Notes.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:8px;color:#999;text-align:center;font-family:sans-serif">COA concepts &amp; formulas · page <span class="pageNumber"></span> / <span class="totalPages"></span></div>' });
  console.log('COA_Concepts_Notes.pdf', errs.length ? 'ERRORS ' + errs.join(' | ') : 'ok', missing.length ? 'MISSING ' + missing.join(', ') : '');
  await browser.close();
})();
