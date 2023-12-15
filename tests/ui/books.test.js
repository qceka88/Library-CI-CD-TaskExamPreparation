const { test, expect } = require('@playwright/test');
import {pageURL,} from './pageURL.js'
test('Check books page', async ({ page }) => {
    await page.goto(pageURL + 'books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  