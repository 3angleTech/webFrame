/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { PAGE_URL } from 'app-shared/core';
import { browser, by, WebElement } from 'protractor';

export class AccountTestability {
  public async openHomePage(): Promise<void> {
    return browser.get(PAGE_URL.HOME_PAGE);
  }

  public async getPageTitle(): Promise<string> {
    return browser.findElement(by.css('app-root h1.app-page__title')).getText();
  }

  public async openLoginPage(): Promise<void> {
    return browser.get(PAGE_URL.LOGIN_PAGE);
  }

  public async openLogoutPage(): Promise<void> {
    return browser.get(PAGE_URL.LOGOUT_PAGE);
  }

  public async openSignupPage(): Promise<void> {
    return browser.get(PAGE_URL.SIGNUP_PAGE);
  }

  public async openForgotPasswordPage(): Promise<void> {
    return browser.get(PAGE_URL.FORGOT_PASSWORD_PAGE);
  }

  public async clickButtonWithText(partialButtonText: string): Promise<void> {
    const buttonEl: WebElement = await browser.findElement(by.partialButtonText(partialButtonText));
    await buttonEl.click();
  }

  public async clickLinkWithText(partialButtonText: string): Promise<void> {
    const linkEl: WebElement = await browser.findElement(by.partialLinkText(partialButtonText));
    await linkEl.click();
  }

  public async setReactiveFormData(
    formEl: WebElement,
    data: Record<string, string>,
  ): Promise<void> {
    const inputNames: string[] = Object.keys(data);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < inputNames.length; index++) {
      const inputName: string = inputNames[index];
      await formEl.findElement(by.name(inputName)).clear();
      await formEl.findElement(by.name(inputName)).sendKeys(data[inputName]);
    }
  }
}
