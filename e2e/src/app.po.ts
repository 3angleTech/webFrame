import { browser, by, element } from 'protractor';

/**
 * TODO
 */

export class AppPage {
  navigateToRoot() {
    return browser.get('/');
  }

  navigateToSignupPage() {
    return browser.get('/account/signup');
  }

  getPageTitle() {
    return element(by.css('app-root h1.app-page__title')).getText();
  }
}
