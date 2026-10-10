// build_learn.js — assemble learn/cover.html + learn/u01..u15.html + the cheat sheet into COA_Learn_Notes.pdf
// ("Samajh ke Padho": why → definition → jargon → how → diagram → solved examples → trap → one line).
// Diagrams come from the unit data files. Fonts: Patrick Hand + Caveat (SIL OFL).
// Run: node revision/build_learn.js            → COA_Learn_Notes.pdf
//      node revision/build_learn.js u03         → learn/preview_u03.pdf (one unit, for checking)
const fs = require('fs'), path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require(path.join(process.execPath, '../../lib/node_modules/playwright'))); }

const dir = __dirname, ldir = path.join(dir, 'learn');
const only = process.argv[2];
const read = (f) => fs.readFileSync(path.join(ldir, f), 'utf8');
let body;
if (only) body = read(only + '.html');
else {
  const units = Array.from({ length: 15 }, (_, i) => 'u' + String(i + 1).padStart(2, '0') + '.html').filter((f) => fs.existsSync(path.join(ldir, f)));
  // Contents page: unit start pages come from learn/toc_pages.json (written by a first build + pdftotext, see BUILD_NOTES).
  const tp = fs.existsSync(path.join(ldir, 'toc_pages.json')) ? JSON.parse(read('toc_pages.json')) : {};
  const toc = '<section class="toc"><h2>Contents</h2><table>' + units.map((f) => {
    const h = (read(f).match(/<h2>(.*?)<\/h2>/) || [])[1] || f;
    const n = (h.match(/Unit (\d+)/) || [])[1];
    return '<tr><td>' + h + '</td><td class="pg">page ' + (tp[n] || '?') + '</td></tr>';
  }).join('') + '<tr><td>Last-hour cheat sheet</td><td class="pg">page ' + (tp.sheet || '?') + '</td></tr></table>' +
  '<p class="read">Ek din mein sab nahi ho paaye to order: 4 (numbers) → 2 (K-map) → 3 → 5 → 6 → 7 → 11 → 12 → 13 → 14 → 15, phir baaki. Har unit ke end ka "Exam mein kya aata hai" table zaroor dekho.</p></section>';
  body = read('cover.html') + toc + units.map(read).join('\n') + read('cheatsheet.html');
}
const scripts = ['js/svglib.js'].concat(Array.from({ length: 15 }, (_, i) => 'data/unit' + String(i + 1).padStart(2, '0') + '.js'));

const css = `
@font-face { font-family: Hand; src: url("../fonts/PatrickHand-Regular.ttf"); }
@font-face { font-family: Title; src: url("../fonts/Caveat.ttf"); }
@page { size: A4; margin: 14mm 14mm 16mm 16mm; }
:root { --ink:#22346e; --line:#8e9cc4; --panel2:transparent; --code-bg:transparent; --code-ink:#22346e; --gate:transparent; }
html { background-color: #fffef9; }
body { background: transparent; font-family: Hand, "DejaVu Sans", sans-serif; color: var(--ink); font-size: 12.8pt; line-height: 1.5; }
b, strong, th, dt { font-weight: 700; -webkit-text-stroke: 0.22px currentColor; }
section { break-before: page; }
section.cover { break-before: auto; }
h1, h2, h3 { font-family: Title, Hand, sans-serif; font-weight: 700; line-height: 1.15; }
h1 { font-size: 38pt; color: #a8322a; margin: 18mm 0 4mm; }
h2 { font-size: 28pt; color: #a8322a; margin: 0 0 3mm; border-bottom: 1.6px solid #d9a19c; padding-bottom: 1mm; }
h3 { font-size: 20pt; color: #1b2c64; margin: 7mm 0 2mm; break-after: avoid; border-top: 1px dashed #c3cbe0; padding-top: 3mm; }
p { margin: 1.4mm 0; }
.sub { font-size: 14pt; }
small { font-size: 10.5pt; color: #4b5876; }
mark { background: rgba(255, 224, 60, .55); color: inherit; padding: 0 2px; border-radius: 3px; }
.story { background: rgba(232, 222, 255, .55); border: 1.3px solid #8b6fd0; border-radius: 10px; padding: 2.5mm 4mm; margin: 2mm 0 4mm; }
.story b:first-child { color: #5b3fa6; }
.why { font-size: inherit; background: rgba(225, 245, 230, .7); border-left: 3.5px solid #3c9a55; border-radius: 0 8px 8px 0; padding: 2mm 3.5mm; margin: 1.5mm 0 2mm; }
.why b:first-child { color: #2b7a40; }
.def { background: rgba(219, 232, 255, .75); border-left: 3.5px solid #4a73c9; border-radius: 0 8px 8px 0; padding: 2mm 3.5mm; margin: 1.5mm 0 2mm; break-inside: avoid; }
.words { border: 1.2px solid #b9c4de; background: rgba(255,255,255,.7); border-radius: 8px; padding: 2mm 3.5mm; margin: 2mm 0; }
.words dl { margin: 1mm 0 0; }
.words dt { color: #a8322a; margin-top: 1.2mm; }
.words dd { margin: 0 0 0 5mm; }
.how { margin: 2mm 0; }
.how ol, .ex ol { margin: 1mm 0; padding-left: 7mm; }
.how li, .ex li { margin: .9mm 0; }
.read { color: #4b5876; font-size: 11.8pt; margin-top: 0; }
.fx { background: rgba(255, 240, 160, .55); border: 1.3px solid #d6a516; border-radius: 8px; padding: 2mm 3.5mm; margin: 2mm 0; break-inside: avoid; }
.ex { border: 1.5px solid #2f7a8a; background: rgba(214, 240, 244, .45); border-radius: 10px; padding: 2mm 3.5mm; margin: 2.5mm 0; }
.ex > b:first-child { color: #1f5f6c; }
.ex .qq { font-style: italic; margin: 1mm 0; }
.ex .ans { background: rgba(255, 224, 60, .45); display: inline-block; padding: .5mm 2mm; border-radius: 5px; font-weight: 700; }
.trap { border: 1.4px solid #c0453b; background: rgba(255, 228, 225, .45); border-radius: 8px; padding: 1.5mm 3.5mm; margin: 2mm 0; break-inside: avoid; }
.trap b:first-child { color: #a8322a; }
.trick { color: #2f7a35; }
.trick b { color: #2f7a35; }
.yr { border: 1.4px dashed #a8322a; background: rgba(255, 244, 214, .6); border-radius: 8px; padding: 1.5mm 3.5mm; margin: 2mm 0 1mm; break-inside: avoid; }
.yr b:first-child { color: #a8322a; }
.qtypes { margin-top: 6mm; border: 2px solid #5b3fa6; border-radius: 10px; padding: 2.5mm 3.5mm; background: rgba(240, 234, 255, .5); }
.qtypes > b:first-child { color: #5b3fa6; font-size: 14pt; }
.qtypes table { width: 100%; font-size: 11.4pt; }
.qtypes tr { break-inside: avoid; }
.topic { margin-bottom: 3mm; }
table { border-collapse: collapse; margin: 2mm 0; font-size: 11.6pt; }
table.tt { break-inside: avoid; }
th, td { border: 1.1px solid #8e9cc4; padding: .8mm 2.2mm; text-align: left; vertical-align: top; }
.tt td, .tt th { font-family: inherit; text-align: center; }
th { background: rgba(255, 224, 60, .3); }
pre { font-family: "DejaVu Sans Mono", monospace; font-size: 9pt; line-height: 1.35; color: #22346e; background: rgba(255,255,255,.75); border: 1.1px solid #8e9cc4; border-radius: 6px; padding: 2mm 3mm; white-space: pre; break-inside: avoid; margin: 2mm 0; }
code { font-family: "DejaVu Sans Mono", monospace; font-size: .82em; background: none; color: #1b2c64; padding: 0; }
figure { margin: 3mm 0 1mm; text-align: center; break-inside: avoid; background: rgba(255,255,255,.75); border: 1px solid #ccd4e6; border-radius: 8px; padding: 2mm; }
figure svg { max-width: 100%; max-height: 72mm; height: auto; }
figure svg.big { max-height: 118mm; }
figcaption { font-size: 10.5pt; margin-top: 1mm; text-align: left; }
figcaption .ttl { color: #a8322a; }
figcaption .how { color: #4b5876; }
.dg text { font-family: Hand, sans-serif !important; }
.sheet .cs { columns: 2; column-gap: 7mm; font-size: 11pt; line-height: 1.35; }
.sheet .cs p { break-inside: avoid; margin: 0 0 2.2mm; padding: 1.2mm 2mm; background: rgba(255, 240, 160, .35); border-radius: 5px; }
.sheet .cs b { color: #a8322a; }
.toc table { width: 100%; font-size: 14pt; } .toc td { border: 0; border-bottom: 1px dashed #c3cbe0; padding: 1.6mm 1mm; } .toc .pg { text-align: right; white-space: nowrap; color: #a8322a; }
.legend > div, .legend > p { margin: 1.5mm 0; }
`;

const page = '<!doctype html><html><head><meta charset="utf-8"><title>COA Samajh ke Padho</title>' +
  '<link rel="stylesheet" href="../../css/style.css"><style>' + css + '</style></head><body>' + body +
  scripts.map((s) => '<script src="../../' + s + '"></script>').join('') +
  '<script>(function(){var D={};UNITS.forEach(function(u){u.subtopics.forEach(function(st){(st.diagrams||[]).forEach(function(d){D[d.id]=d;});});});' +
  'document.querySelectorAll("figure[data-d]").forEach(function(f){var d=D[f.dataset.d];if(!d){f.textContent="missing "+f.dataset.d;return;}' +
  'f.innerHTML=d.svg+"<figcaption><span class=ttl>"+d.title+"</span>"+(d.how?"<br><span class=how>How to draw: "+d.how+"</span>":"")+"</figcaption>";});document.body.dataset.ready="1";})();</script></body></html>';

(async () => {
  const opts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const browser = await chromium.launch(opts);
  const html = path.join(ldir, (only ? 'preview_' + only : 'learn') + '.tmp.html');
  fs.writeFileSync(html, page);
  const p = await browser.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file://' + html);
  await p.waitForSelector('body[data-ready="1"]');
  await p.evaluate(() => document.fonts.ready);
  const missing = await p.evaluate(() => [...document.querySelectorAll('figure')].filter((f) => /^missing/.test(f.textContent)).map((f) => f.textContent));
  const out = only ? path.join(ldir, 'preview_' + only + '.pdf') : path.join(dir, 'COA_Learn_Notes.pdf');
  await p.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:8px;color:#999;text-align:center;font-family:sans-serif">COA · samajh ke padho · page <span class="pageNumber"></span> / <span class="totalPages"></span></div>' });
  console.log(path.basename(out), errs.length ? 'ERRORS ' + errs.join(' | ') : 'ok', missing.length ? 'MISSING ' + missing.join(', ') : '');
  await browser.close();
  fs.unlinkSync(html);
})();
