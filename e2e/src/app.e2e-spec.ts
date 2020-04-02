/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * End-To-End tests for AppPage.
 */
import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('webFrame', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the public account pages', async () => {
    await page.navigateToRoot();
    expect(await page.getPageTitle()).toEqual('Login');

    await page.navigateToSignupPage();
    expect(await page.getPageTitle()).toEqual('Signup');

    await page.navigateToRoot();
    expect(await page.getPageTitle()).toEqual('Login');

    await page.navigateToForgotPasswordPage();
    expect(await page.getPageTitle()).toEqual('Forgot password');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const partialLogEntry: Partial<logging.Entry> = {
      level: logging.Level.SEVERE,
    };
    expect(logs).not.toContain(jasmine.objectContaining(partialLogEntry));
  });
});
