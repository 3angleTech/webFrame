/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Empty } from '../data/empty.dm';
import { IAccountCredentials } from '../interface/account-credentials';
import { IAccountInformation } from '../interface/account-information';
import { IAccountService } from '../interface/account.service';
import { ServerApi } from '../interface/api-endpoint-builder.interface';
import { IWebRequestService, RequestContentType } from '../interface/web-request.interface';

@Injectable()
export class AccountService implements IAccountService {
  public isLoggedIn: boolean;

  constructor(
    @Inject(IWebRequestService)
    private webRequest: IWebRequestService,
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
        return new Empty();
      }),
    );
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
