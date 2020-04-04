/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * End-To-End tests for AppPage.
 */
import { browser, logging } from 'protractor';

import { AppPage } from './app.page';

describe('Test if application pages work', (): void => {
  let page: AppPage;

  beforeEach((): void => {
    page = new AppPage();
  });

  it('The "Login" public page should work', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('The "Signup" public page should work', async (): Promise<void> => {
    await page.openSignupPage();
    expect(await page.getPageTitle()).toEqual('Signup');
  });

  it('The "Forgot password" public page should work', async (): Promise<void> => {
    await page.openForgotPasswordPage();
    expect(await page.getPageTitle()).toEqual('Forgot password');
  });

  afterEach(async (): Promise<void> => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const partialLogEntry: Partial<logging.Entry> = {
      level: logging.Level.SEVERE,
    };
    expect(logs).not.toContain(jasmine.objectContaining(partialLogEntry));
  });
});
