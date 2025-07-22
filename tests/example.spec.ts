import { test, expect } from '@playwright/test';

// 測試 index.html 頁面

test('頁面能正確載入', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await expect(page).toHaveTitle('Document');
});

test('h1 內容正確', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Hello World');
});

test('p 內容正確', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  const p = page.locator('p');
  await expect(p).toHaveText('這是一段被 JavaScript 修改的文字。');
});
