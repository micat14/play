import { test } from '@playwright/test';

test('post 1', async ({ page }) => {
  const url = process.env.URL1 || "";
  await page.goto(url);
  const MIN_TIME = 5000;
  const MAX_TIME = 8000;
  const maxScrollY = await page.evaluate(() => {
    return document.documentElement.scrollHeight - window.innerHeight;
  });
  console.log(`1.El valor máximo de desplazamiento vertical es: ${maxScrollY}px`);
  const eachScroll = Math.round(maxScrollY / 50);

  await page.click('#accept-gdpr');

  for (let index = 0; index < 50; index++) {
    const randomTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME;
    const scrollPosition = await page.evaluate(() => window.scrollY);
    console.log(`La posición actual del desplazamiento vertical es: ${scrollPosition}px`);

    await page.waitForTimeout(randomTime);
    await page.mouse.wheel(100, eachScroll);
  }
  const randomTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME;
  await page.waitForTimeout(randomTime);


});
test('post 2', async ({ page }) => {
  const url = process.env.URL2 || "";
  await page.goto(url);
  const MIN_TIME = 5000;
  const MAX_TIME = 8000;
  const maxScrollY = await page.evaluate(() => {
    return document.documentElement.scrollHeight - window.innerHeight;
  });
  console.log(`2.El valor máximo de desplazamiento vertical es: ${maxScrollY}px`);
  const eachScroll = Math.round(maxScrollY / 50);

  await page.click('#accept-gdpr');

  for (let index = 0; index < 50; index++) {
    const randomTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME;
    const scrollPosition = await page.evaluate(() => window.scrollY);
    console.log(`La posición actual del desplazamiento vertical es: ${scrollPosition}px`);

    await page.waitForTimeout(randomTime);
    await page.mouse.wheel(100, eachScroll);
  }
  const randomTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME;
  await page.waitForTimeout(randomTime);


});
