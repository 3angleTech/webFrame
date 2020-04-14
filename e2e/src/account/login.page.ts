/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { IAccountCredentials } from 'app-shared/core';
import { browser, by, Key, WebElement } from 'protractor';

import { AccountPage } from './account.page';

export class LoginPage extends AccountPage {
  /**
   * Used after the login on the Profile page in order to trigger the logout.
   */
  public async clickLogoutButton(): Promise<void> {
    await browser.findElement(by.name('logout')).click();
  }

  public async submitLoginCredentials(credentials: IAccountCredentials): Promise<void> {
    const formEl: WebElement = await browser.findElement(by.tagName('form'));
    // tslint:disable-next-line:no-any
    const formData: Record<string, string> = credentials as any;
    await this.setReactiveFormData(formEl, formData);

    // Login by pressing the enter key when the password field is selected.
    return formEl.findElement(by.name('password')).sendKeys(Key.ENTER);
  }
}
