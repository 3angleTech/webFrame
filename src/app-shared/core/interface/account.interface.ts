/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides IAccountService.
 */
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Empty } from '../data/empty.dm';
import { IAccountCredentials } from './account-credentials';
import { IAccountInformation } from './account-information';

export interface IAccountService {
  login(credentials: IAccountCredentials): Observable<Empty>;
  logout(): Observable<Empty>;
  signup(information: IAccountInformation): Observable<Empty>;
}
export const IAccountService = new InjectionToken('IAccountService');
