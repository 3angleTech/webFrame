/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * End-To-End tests for AppPage.
 */
import { IAccountCredentials } from 'app-shared/core';
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

  it('User should be able to login', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    const credentials: IAccountCredentials = {
      email: browser.params.E2E_LOGIN_EMAIL,
      password: browser.params.E2E_LOGIN_PASSWORD,
    };
    await page.submitLoginCredentials(credentials);
    expect(await page.getPageTitle()).toEqual('Profile');
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
