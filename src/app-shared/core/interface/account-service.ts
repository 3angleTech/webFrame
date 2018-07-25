/**
 * Provides IAccountService.
 */
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountCredentials } from './account-credentials';


export interface IAccountService {
  login(credentials: IAccountCredentials): Observable<null>;
  // TODO: Implement logout feature.
  // logout(): Observable<null>;
  // TODO: Implement signup feature.
  // signup(): Observable<null>;
}
export const IAccountService = new InjectionToken('IAccountService');
