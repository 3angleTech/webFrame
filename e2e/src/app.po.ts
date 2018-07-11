import { browser, by, element } from 'protractor';

/**
 * TODO
 */

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
