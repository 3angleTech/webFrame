/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { browser, by, logging } from 'protractor';

import { AccountPage } from './account.page';

describe('Test if account pages work', (): void => {
  let page: AccountPage;

  beforeEach((): void => {
    page = new AccountPage();
  });

  it('The "Home" page should redirect to the "Login" page', async (): Promise<void> => {
    await page.openHomePage();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('The "Login" page should work', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('The "Signup" page should work', async (): Promise<void> => {
    await page.openSignupPage();
    expect(await page.getPageTitle()).toEqual('Signup');
  });

  it('The "Forgot password" page should work', async (): Promise<void> => {
    await page.openForgotPasswordPage();
    expect(await page.getPageTitle()).toEqual('Forgot password');
  });

  it('The "Signup" page is discoverable', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    await page.clickButtonWithText('Create account');
    expect(await page.getPageTitle()).toEqual('Signup');
    await page.clickButtonWithText('Login?');
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('The "Forgot password" page is discoverable', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    await page.clickLinkWithText('Forgot password?');
    expect(await page.getPageTitle()).toEqual('Forgot password');
    await page.clickButtonWithText('Login?');
    expect(await page.getPageTitle()).toEqual('Login');
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
