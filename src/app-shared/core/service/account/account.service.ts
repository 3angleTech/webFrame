/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';
import { IWebFrameContextStateService } from 'app-shared/core/service/web-frame-context/web-frame-context-state.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Empty } from '../../data/empty.do';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IJsonConverterService } from '../json-converter/json-converter.service';
import { IWebRequestService, RequestContentType } from '../web-request/web-request.interface';

export interface IAccountCredentials {
  username: string;
  password: string;
}

export interface IAccountInformation extends IAccountCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAccountService {
  login(credentials: IAccountCredentials): Observable<Empty>;
  logout(): Observable<Empty>;
  signup(information: IAccountInformation): Observable<Empty>;
}
export const IAccountService = new InjectionToken('IAccountService');

@Injectable()
export class AccountService implements IAccountService {

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
