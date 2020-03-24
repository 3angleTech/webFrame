/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { browser, by, element, promise } from 'protractor';

export class AppPage {
  public async navigateToRoot(): promise.Promise<void> {
    return browser.get('/');
  }

  public async navigateToSignupPage(): promise.Promise<void> {
    return browser.get('/account/signup');
  }

  public async navigateToForgotPasswordPage(): promise.Promise<void> {
    return browser.get('/account/forgot-password');
  }

  public async getPageTitle(): promise.Promise<string> {
    return element(by.css('app-root h1.app-page__title')).getText();
  }
}
