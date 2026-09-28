import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({ storageState: '/tmp/f36-auth.json' });
const page = await context.newPage();

await page.goto('http://localhost:3000/guidelines/protected/draganddrop', { waitUntil: 'networkidle' });
await page.waitForSelector('text=Reorder', { timeout: 15000 });
await page.waitForTimeout(500);

const dragHandles = await page.locator('[data-test-id="cf-ui-drag-handle"]').all();
const thirdExampleHandle = dragHandles[dragHandles.length - 4];
const box = await thirdExampleHandle.boundingBox();

await page.mouse.move(10, 10);
await page.waitForTimeout(150);
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 5 });
await page.waitForTimeout(300);

const result = await thirdExampleHandle.evaluate((el) => {
  const wrapper = el.closest('[data-row-action]');
  const row = wrapper.parentElement;
  return {
    rowMatchesHover: row.matches(':hover'),
    rowClass: row.className,
    rowOpacity: getComputedStyle(row).opacity,
    wrapperOpacity: getComputedStyle(wrapper).opacity,
    cssRules: [...document.styleSheets].flatMap(sheet => {
      try {
        return [...sheet.cssRules].filter(r => r.selectorText && r.selectorText.includes('data-row-action')).map(r => r.selectorText + ' -> ' + r.cssText.slice(0,150));
      } catch(e) { return []; }
    })
  };
});
console.log(JSON.stringify(result, null, 2));

await browser.close();
