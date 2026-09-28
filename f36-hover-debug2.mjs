import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({ storageState: '/tmp/f36-auth.json' });
const page = await context.newPage();

await page.goto('http://localhost:3000/guidelines/protected/draganddrop', { waitUntil: 'networkidle' });
await page.waitForSelector('text=Reorder', { timeout: 15000 });
await page.waitForTimeout(500);

const dragHandles = await page.locator('[data-test-id="cf-ui-drag-handle"]').all();
const thirdExampleHandle = dragHandles[dragHandles.length - 4];

const structure = await thirdExampleHandle.evaluate((el) => {
  let node = el;
  const chain = [];
  for (let i = 0; i < 5 && node; i++) {
    chain.push({ tag: node.tagName, class: node.className, attrs: node.getAttributeNames ? node.getAttributeNames() : [] });
    node = node.parentElement;
  }
  return chain;
});
console.log(JSON.stringify(structure, null, 2));

await browser.close();
