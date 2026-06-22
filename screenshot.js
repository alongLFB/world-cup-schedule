const { chromium } = require('../scraper/node_modules/playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1200 },
    deviceScaleFactor: 2
  });
  
  await page.goto('file:///Users/lialong/.gemini/antigravity/scratch/world-cup-schedule/schedule.html');
  await page.waitForTimeout(1000); // wait for fonts and js
  
  await page.screenshot({ path: '/Users/lialong/.gemini/antigravity/scratch/world-cup-schedule/schedule_uae.png', fullPage: true });
  
  await browser.close();
})();
