/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * End-To-End tests for AppPage.
 */
import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('webFrame', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the public account pages', () => {
    page.navigateToRoot();
    expect(page.getPageTitle()).toEqual('Login');

    page.navigateToSignupPage();
    expect(page.getPageTitle()).toEqual('Signup');

    page.navigateToRoot();
    expect(page.getPageTitle()).toEqual('Login');

    page.navigateToForgotPasswordPage();
    expect(page.getPageTitle()).toEqual('Forgot password');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const partialLogEntry: Partial<logging.Entry> = {
      level: logging.Level.SEVERE,
    };
    expect(logs).not.toContain(jasmine.objectContaining(partialLogEntry));
  });
});
