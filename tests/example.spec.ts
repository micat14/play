import { test } from '@playwright/test';

test('post 1', async ({ page }) => {
  const url = process.env.URL1 || "";
  await page.goto(url);
  const MIN_TIME = 8000;
  const MAX_TIME = 10000;
  const MAX_SCROLL = 60;
  const maxScrollY = await page.evaluate(() => {
    return document.documentElement.scrollHeight - window.innerHeight;
  });
  console.log(`1.El valor máximo de desplazamiento vertical es: ${maxScrollY}px`);
  const eachScroll = Math.round(maxScrollY / MAX_SCROLL);

  await page.click('#accept-gdpr');

  for (let index = 0; index < MAX_SCROLL; index++) {
    const randomTime = Math.floor(Math.random() * (MAX_TIME/2 - MIN_TIME/2 + 1)) + MIN_TIME/2;
    const scrollPosition = await page.evaluate(() => window.scrollY);
    
    await page.waitForTimeout(randomTime);
    await page.mouse.wheel(100, eachScroll);
  }
  const randomTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME;
  await page.waitForTimeout(randomTime);
  
});
