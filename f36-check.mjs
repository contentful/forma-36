import { chromium } from 'playwright';

const OUT = '/tmp/f36-screens';
await import('node:fs/promises').then((fs) => fs.mkdir(OUT, { recursive: true }));

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', (err) => errors.push('pageerror: ' + err.message));

try {
  await page.goto('http://localhost:3000/guidelines/protected/draganddrop', {
    waitUntil: 'networkidle',
  });

  // If redirected to sign-in, log in with dev credentials
  if (page.url().includes('/api/auth/signin')) {
    console.log('Redirected to sign-in, logging in...');
    await page.fill('input[name="username"]', 'dev');
    await page.fill('input[name="password"]', 'weloveforma36');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
  }

  console.log('Current URL:', page.url());
  await page.screenshot({ path: `${OUT}/00-landed.png`, fullPage: true });
  console.log('Body text sample:', (await page.innerText('body')).slice(0, 2000));

  await page.waitForSelector('text=Example', { timeout: 15000 });
  await page.screenshot({ path: `${OUT}/01-page.png`, fullPage: true });
  console.log('Took full page screenshot');

  // Scroll the example into view
  const exampleHeading = page.getByText('Example', { exact: true }).first();
  await exampleHeading.scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${OUT}/02-example-section.png` });
  console.log('Took example section screenshot');

  // Check the folder rows rendered
  const testRow = page.getByText('Test', { exact: true }).first();
  await testRow.waitFor({ timeout: 10000 });
  console.log('Folder row "Test" found');

  // Hover to reveal overflow menu, then click it
  const row = page.locator('text=Test').first();
  await row.hover();
  await page.screenshot({ path: `${OUT}/03-row-hover.png` });

  const menuButtons = page.locator('button[aria-label*="folder actions"]');
  const count = await menuButtons.count();
  console.log('Overflow menu buttons found:', count);

  if (count > 0) {
    await menuButtons.first().click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/04-overflow-menu-open.png` });
    console.log('Opened overflow menu for first row');

    const moveDown = page.getByText('Move down', { exact: true }).first();
    await moveDown.click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/05-after-move-down.png` });
    console.log('Clicked Move down');
  }

  console.log('Console/page errors:', JSON.stringify(errors, null, 2));
} catch (e) {
  console.error('ERROR:', e.message);
  await page.screenshot({ path: `${OUT}/error.png` }).catch(() => {});
} finally {
  await browser.close();
}
