import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({ storageState: '/tmp/f36-auth.json', viewport: { width: 1280, height: 2200 } });
const page = await context.newPage();

await page.goto('http://localhost:3000/guidelines/protected/draganddrop', { waitUntil: 'networkidle' });
await page.waitForSelector('text=Reorder', { timeout: 15000 });
await page.waitForTimeout(500);

const dragHandles = await page.locator('[data-test-id="cf-ui-drag-handle"]').all();
const thirdExampleHandle = dragHandles[dragHandles.length - 4];
await thirdExampleHandle.scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
const box = await thirdExampleHandle.boundingBox();
console.log('box after scroll:', box);

await page.mouse.move(10, 10);
await page.waitForTimeout(150);
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 5 });
await page.waitForTimeout(300);

const result = await thirdExampleHandle.evaluate((el) => {
  const wrapper = el.closest('[data-row-action]');
  const row = wrapper.parentElement;
  return {
    rowMatchesHover: row.matches(':hover'),
    wrapperOpacity: getComputedStyle(wrapper).opacity,
  };
});
console.log('result:', result);

await page.screenshot({ path: '/tmp/f36-screens/hover-test.png', fullPage: true });

await browser.close();
