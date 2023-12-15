const { test, expect } = require('@playwright/test');
import {pageURL,} from './pageURL.js'
test('Check add book page', async ({ page }) => {
    await page.goto(pageURL + 'add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  