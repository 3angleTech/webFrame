import { browser, by, element, promise } from 'protractor';

/**
 * TODO
 */

export class AppPage {
  public navigateToRoot(): promise.Promise<any> {
    return browser.get('/');
  }

  public navigateToSignupPage(): promise.Promise<any> {
    return browser.get('/account/signup');
  }

  public navigateToForgotPasswordPage(): promise.Promise<any> {
    return browser.get('/account/forgot-password');
  }

  public getPageTitle(): promise.Promise<string> {
    return element(by.css('app-root h1.app-page__title')).getText();
  }
}
