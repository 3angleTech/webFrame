/**
 * Provides IAccountService.
 */
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountCredentials } from './account-credentials';
import { IAccountInformation } from './account-information';

export interface IAccountService {
  login(credentials: IAccountCredentials): Observable<null>;
  // TODO: Implement logout feature.
  // logout(): Observable<null>;
  signup(information: IAccountInformation): Observable<null>;
}
export const IAccountService = new InjectionToken('IAccountService');
