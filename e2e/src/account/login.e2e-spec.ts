/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IAccountCredentials } from 'app-shared/core';
import { browser, ExpectedConditions, logging } from 'protractor';
import { Alert } from 'selenium-webdriver';

import { LoginTestability } from './login.testability';

describe('Test if login works', (): void => {
  let page: LoginTestability;
  let validCredentials: IAccountCredentials;
  const useEnterKey: boolean = true;

  // TODO: Find a way to remove the known/expected errors from the browser console.
  let ignoreConsoleError: boolean;
  let invalidCredentials: IAccountCredentials;

  beforeAll((): void => {
    validCredentials = {
      email: browser.params.E2E_LOGIN_EMAIL,
      password: browser.params.E2E_LOGIN_PASSWORD,
    };
    const randomNumber: number = Math.floor(Math.random() * 1000);
    invalidCredentials = {
      email: browser.params.E2E_LOGIN_EMAIL,
      password: '--InvalidPassword--' + randomNumber,
    };
  });

  beforeEach((): void => {
    page = new LoginTestability();
    ignoreConsoleError = false;
  });

  it('User should be able to login - by pressing Enter', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    await page.submitLoginCredentials(validCredentials, useEnterKey);
    expect(await page.getPageTitle()).not.toEqual('Login');
  });

  it('User should be able to logout - by opening the logout page', async (): Promise<void> => {
    await page.openLogoutPage();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('User should be able to login - by clicking submit', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    await page.submitLoginCredentials(validCredentials);
    expect(await page.getPageTitle()).not.toEqual('Login');
  });

  it('User should be able to logout - by clicking the logout button', async (): Promise<void> => {
    expect(await page.getPageTitle()).toEqual('Profile');
    await page.clickLogoutButton();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  it('User should see the error message when providing invalid credentials', async (): Promise<void> => {
    await page.openLoginPage();
    expect(await page.getPageTitle()).toEqual('Login');
    ignoreConsoleError = true;
    await page.submitLoginCredentials(invalidCredentials, useEnterKey);
    await browser.wait(ExpectedConditions.alertIsPresent());
    const alert: Alert = await browser.switchTo().alert();
    expect(await alert.getText()).toEqual('Login error!');
    await alert.accept();
    expect(await page.getPageTitle()).toEqual('Login');
  });

  afterEach(async (): Promise<void> => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const partialLogEntry: Partial<logging.Entry> = {
      level: logging.Level.SEVERE,
    };
    if (logs.length === 1 && ignoreConsoleError) {
      const firstLog: logging.Entry = logs[0];
      // Ignore auth/token error caused by sending invalid password.
      // TODO: Find a way to remove the known/expected errors from the browser console.
      if (firstLog.message.includes('/auth/token')) {
        return Promise.resolve();
      }
    }
    expect(logs).not.toContain(jasmine.objectContaining(partialLogEntry));
  });
});
