// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has TeaMail title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/TeaMail/);
});
