/**
 * Guards against the layout viewport growing wider than the screen.
 *
 * The trap this exists for: `overflow-x: clip`/`hidden` on the root makes a
 * page *look* fixed, because it can no longer be scrolled sideways, while iOS
 * Safari still lays content out at the widened width and simply clips the
 * overhang. Body text then wraps past the screen edge and is chopped.
 *
 * So asserting "cannot scroll sideways" is not enough. The real assertion is
 * that nothing overflows in the first place, checked with any root overflow
 * containment forced off so it cannot mask a failure.
 */
import { chromium, webkit, devices } from "playwright";

const URL = process.argv[2] || "http://localhost:3000/";
const WIDTHS = [320, 360, 375, 390, 414, 430, 600, 768, 1024, 1440];
const PHONES = ["iPhone SE", "iPhone 13", "iPhone 13 Pro Max"];
const UNMASK = "html,body{overflow-x:visible!important;overflow-y:visible!important}";

const probe = async (page, { unmask }) => {
  if (unmask) await page.addStyleTag({ content: UNMASK });
  // Force every lazy image in, so nothing is measured at zero height.
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  return page.evaluate(() => {
    window.scrollTo(9999, 0);
    const scrolledX = window.scrollX;
    window.scrollTo(0, 0);
    const vw = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (!r.width) continue;
      if (r.right > vw + 0.5 || r.left < -0.5) {
        const cls = (el.className || "").toString().trim().split(/\s+/)[0];
        offenders.push(`${el.tagName}${cls ? "." + cls : ""} L=${r.left.toFixed(0)} R=${r.right.toFixed(0)}`);
      }
    }
    return {
      vw, scrolledX,
      inner: window.innerWidth,
      docW: document.documentElement.scrollWidth,
      bodyW: document.body.scrollWidth,
      offenders: offenders.slice(0, 6),
      nOffenders: offenders.length,
    };
  });
};

const check = (label, r) => {
  const fails = [];
  if (r.nOffenders) fails.push(`${r.nOffenders} element(s) past the edge: ${r.offenders.join(" | ")}`);
  if (r.docW > r.vw + 0.5) fails.push(`scrollWidth ${r.docW} > clientWidth ${r.vw}`);
  if (r.bodyW > r.vw + 0.5) fails.push(`body.scrollWidth ${r.bodyW} > clientWidth ${r.vw}`);
  if (r.inner > r.vw + 0.5) fails.push(`layout viewport ${r.inner} > visual ${r.vw}`);
  if (r.scrolledX !== 0) fails.push(`scrolled sideways to ${r.scrolledX}`);
  console.log(`  ${fails.length ? "FAIL" : "pass"}  ${label}`);
  fails.forEach(f => console.log(`          ${f}`));
  return fails.length === 0;
};

let ok = true;
for (const [name, engine] of [["chromium", chromium], ["webkit", webkit]]) {
  const b = await engine.launch();
  console.log(`\n${name} — viewport widths (root overflow forced visible)`);
  for (const width of WIDTHS) {
    const ctx = await b.newContext({ viewport: { width, height: 844 }, isMobile: width < 500, hasTouch: width < 500 });
    const p = await ctx.newPage();
    await p.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
    ok = check(`${width}px`, await probe(p, { unmask: true })) && ok;
    await ctx.close();
  }
  if (name === "webkit") {
    console.log(`\nwebkit — real device profiles (as shipped, no unmasking)`);
    for (const d of PHONES) {
      const ctx = await b.newContext({ ...devices[d] });
      const p = await ctx.newPage();
      await p.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
      ok = check(d, await probe(p, { unmask: false })) && ok;
      await ctx.close();
    }
  }
  await b.close();
}
console.log(ok ? "\nALL PASS" : "\nFAILURES PRESENT");
process.exit(ok ? 0 : 1);
