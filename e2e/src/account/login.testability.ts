/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { IAccountCredentials } from 'app-shared/core';
import { browser, by, Key, WebElement } from 'protractor';

import { AccountTestability } from './account.testability';

export class LoginTestability extends AccountTestability {
  /**
   * Used after the login on the Profile page in order to trigger the logout.
   */
  public async clickLogoutButton(): Promise<void> {
    await browser.findElement(by.name('logout')).click();
  }

  public async submitLoginCredentials(credentials: IAccountCredentials, useEnterKey?: boolean): Promise<void> {
    const formEl: WebElement = await browser.findElement(by.tagName('form'));
    // tslint:disable-next-line:no-any
    const formData: Record<string, string> = credentials as any;
    await this.setReactiveFormData(formEl, formData);

    if (useEnterKey) {
      // Login by pressing the enter key when the last (password) field is selected.
      const lastField: string = Object.keys(formData).pop();
      await formEl.findElement(by.name(lastField)).sendKeys(Key.ENTER);
    } else {
      await formEl.findElement(by.name('submit')).click();
    }

    return browser.waitForAngular();
  }
}
