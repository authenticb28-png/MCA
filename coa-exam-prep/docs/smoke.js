// smoke.js — open every page of the site in headless Chromium and report render/console errors.
// Needs Playwright. Run via `python3 verify.py --browser`, or directly: node docs/smoke.js
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require(path.join(process.execPath, '../../lib/node_modules/playwright'))); }
(async () => {
  const opts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const b = await chromium.launch(opts);
  const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await p.goto('file://' + path.join(__dirname, '..', 'index.html'));
  const routes = ['#/home', '#/plan', '#/revision', '#/bonus', '#/diagrams', '#/tools', '#/progress', '#/mock/1', '#/mock/2'];
  for (let u = 1; u <= 15; u++) routes.push('#/unit/' + u);
  for (const r of routes) {
    await p.evaluate((h) => { location.hash = h; }, r);
    await p.waitForTimeout(120);
    const bad = await p.evaluate(() => /Render error|missing\./.test(document.querySelector('#main').innerText) || document.querySelector('#main').innerText.length < 200);
    if (bad) errs.push(r + ': page failed to render');
    const empty = await p.evaluate(() => [...document.querySelectorAll('[data-tool]')].filter((t) => t.innerHTML.length < 50).map((t) => t.dataset.tool));
    if (empty.length) errs.push(r + ': tool did not mount ' + empty.join(','));
  }
  // submit a mock paper with no answers: scoring must work
  await p.evaluate(() => { location.hash = '#/mock/1'; });
  await p.waitForTimeout(150);
  await p.click('#submitPaper');
  const score = await p.evaluate(() => document.querySelector('#mockScore').textContent);
  if (!/0 \/ 56/.test(score)) errs.push('mock 1 scoring: got "' + score + '"');
  console.log(routes.length + ' routes checked');
  console.log(errs.length ? errs.join('\n') : 'OK');
  await b.close();
  process.exitCode = errs.length ? 1 : 0;
})();
