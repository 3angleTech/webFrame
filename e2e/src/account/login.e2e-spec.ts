/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IAccountCredentials } from 'app-shared/core';
import { browser, logging } from 'protractor';

import { LoginTestability } from './login.testability';

describe('Test if login works', (): void => {
  let page: LoginTestability;

  beforeEach((): void => {
    page = new LoginTestability();
  });

  it('User should be able to login - by pressing Enter', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    const credentials: IAccountCredentials = {
      email: browser.params.E2E_LOGIN_EMAIL,
      password: browser.params.E2E_LOGIN_PASSWORD,
    };
    const useEnterKey: boolean = true;
    await page.submitLoginCredentials(credentials, useEnterKey);
    expect(await page.getPageTitle()).not.toEqual('Login');
  });

  it('User should be able to logout - by opening the logout page', async (): Promise<void> => {
    await page.openLogoutPage();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('User should be able to login - by clicking submit', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    const credentials: IAccountCredentials = {
      email: browser.params.E2E_LOGIN_EMAIL,
      password: browser.params.E2E_LOGIN_PASSWORD,
    };
    await page.submitLoginCredentials(credentials);
    expect(await page.getPageTitle()).not.toEqual('Login');
  });

  it('User should be able to logout - by clicking the logout button', async (): Promise<void> => {
    expect(await page.getPageTitle()).toEqual('Profile');
    await page.clickLogoutButton();
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
