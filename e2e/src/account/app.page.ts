/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { PAGE_URL } from 'app-shared/core';
import { browser, by, element } from 'protractor';

export class AppPage {
  public async openHomePage(): Promise<void> {
    return browser.get(PAGE_URL.HOME_PAGE);
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

  public async getPageTitle(): Promise<string> {
    return element(by.css('app-root h1.app-page__title')).getText();
  }
}
