/**
 * Provides AccountService.
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAccountCredentials } from '../interface/account-credentials';
import { IAccountInformation } from '../interface/account-information';
import { IAccountService } from '../interface/account-service';


@Injectable()
export class AccountService implements IAccountService {
  constructor() { }

  public login(credentials: IAccountCredentials): Observable<null> {
    // TODO: Implement login feature.
    console.log('IAccountCredentials', credentials);
    return of(null);
  }

  signup(information: IAccountInformation): Observable<null> {
    // TODO: Implement signup feature.
    console.log('IAccountInformation', information);
    return of(null);
  }
}
