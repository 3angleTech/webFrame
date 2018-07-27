import { browser, by, element } from 'protractor';

/**
 * TODO
 */

export class AppPage {
  public navigateToRoot() {
    return browser.get('/');
  }

  public navigateToSignupPage() {
    return browser.get('/account/signup');
  }

  public getPageTitle() {
    return element(by.css('app-root h1.app-page__title')).getText();
  }
}
