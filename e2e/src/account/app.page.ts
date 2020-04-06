/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { IAccountCredentials, PAGE_URL } from 'app-shared/core';
import { browser, by, element, Key, WebElement } from 'protractor';

export class AppPage {
  public async openHomePage(): Promise<void> {
    return browser.get(PAGE_URL.HOME_PAGE);
  }

  public async clickLogoutButton(): Promise<void> {
    await browser.findElement(by.name('logout')).click();
  }

  public async getPageTitle(): Promise<string> {
    return element(by.css('app-root h1.app-page__title')).getText();
  }

  public async openLoginPage(): Promise<void> {
    return browser.get(PAGE_URL.LOGIN_PAGE);
  }

  public async openSignupPage(): Promise<void> {
    return browser.get(PAGE_URL.SIGNUP_PAGE);
  }

  public async openForgotPasswordPage(): Promise<void> {
    return browser.get(PAGE_URL.FORGOT_PASSWORD_PAGE);
  }

  public async setFormData(
    formEl: WebElement,
    data: Record<string, string>,
  ): Promise<void> {
    const inputNames: string[] = Object.keys(data);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < inputNames.length; index++) {
      const inputName: string = inputNames[index];
      await formEl.findElement(by.name(inputName)).sendKeys(data[inputName]);
    }
  }

  public async submitLoginCredentials(credentials: IAccountCredentials): Promise<void> {
    await browser.get(PAGE_URL.LOGIN_PAGE);

    const formEl: WebElement = await browser.findElement(by.tagName('form'));
    // tslint:disable-next-line:no-any
    const formData: Record<string, string> = credentials as any;
    await this.setFormData(formEl, formData);

    // Login by pressing the enter key when the password field is selected.
    return formEl.findElement(by.name('password')).sendKeys(Key.ENTER);
  }
}
