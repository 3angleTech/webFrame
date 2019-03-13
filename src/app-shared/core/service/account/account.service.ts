/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { isNull } from 'util';
import { environment } from '../../../../environments/environment';
import { Empty } from '../../data/empty.do';
import { User } from '../../data/user.do';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IJsonConverterService } from '../json-converter/json-converter.interface';
import { IWebRequestService, RequestContentType } from '../web-request/web-request.interface';
import { IAccountCredentials, IAccountInformation, IAccountService } from './account.interface';

@Injectable()
export class AccountService implements IAccountService {
  public isLoggedIn: boolean;
  private loggedInUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public loggedInUserObservable: Observable<User> = this.loggedInUserSubject.asObservable();

  constructor(
    @Inject(IWebRequestService)
    private webRequest: IWebRequestService,
    @Inject(IJsonConverterService)
    private jsonConverter: IJsonConverterService,
  ) { }

  public login(credentials: IAccountCredentials): Observable<Empty> {
    const username = encodeURIComponent(credentials.username);
    const password = encodeURIComponent(credentials.password);
    const clientId = environment.clientId;
    const clientSecret = environment.clientSecret;
    const data = `username=${username}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=password`;
    return this.webRequest.post<Empty>({
      serverApi: ServerApi.AuthToken,
      contentType: RequestContentType.ApplicationWWWFormUrlEncoded,
      body: data,
    }).pipe(
      map(() => {
        this.isLoggedIn = true;
        this.getLoggedInUser().subscribe(user => {
          console.log(user);
        });
        return new Empty();
      }),
    );
  }

  public getLoggedInUser(): Observable<User> {
    if (!isNull(this.loggedInUserSubject.value)) {
      return this.loggedInUserObservable;
    }
    return this.webRequest.get({
      serverApi: ServerApi.AccountMe,
    }).pipe(mergeMap((userObject) => {
      const user = this.jsonConverter.deserialize(userObject, User);
      this.loggedInUserSubject.next(user);
      return this.loggedInUserObservable;
    }));
  }

  public logout(): Observable<Empty> {
    // TODO: Implement logout feature
    console.log('logout');
    return of(null);
  }

  public signup(information: IAccountInformation): Observable<null> {
    // TODO: Implement signup feature.
    console.log('IAccountInformation', information);
    return of(null);
  }
}
