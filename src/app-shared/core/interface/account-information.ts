/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides IAccountInformation.
 */
import { IAccountCredentials } from './account-credentials';

export interface IAccountInformation extends IAccountCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
