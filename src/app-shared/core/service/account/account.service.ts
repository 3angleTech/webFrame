/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Empty } from '../../data/empty.do';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IJsonConverterService } from '../json-converter/json-converter.service';
import { IWebRequestService, RequestContentType } from '../web-request/web-request.interface';

export interface IAccountCredentials {
  email: string;
  password: string;
}

export interface IAccountChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface IAccountForgotPasswordRequest {
  email: string;
}

export interface IAccountResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface IAccountInformation {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

export interface IAccountService {
  login(credentials: IAccountCredentials): Observable<Empty>;

  logout(): Observable<Empty>;

  changePassword(request: IAccountChangePasswordRequest): Observable<Empty>;

  forgotPassword(request: IAccountForgotPasswordRequest): Observable<Empty>;

  resetPassword(request: IAccountResetPasswordRequest): Observable<Empty>;

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
  ) {
  }

  public changePassword(request: IAccountChangePasswordRequest): Observable<Empty> {
    const bodyData: Record<string, string> = {
      currentPassword: request.currentPassword,
      newPassword: request.newPassword,
    };

    return this.webRequest.post<Empty>({
      serverApi: ServerApi.AccountChangePassword,
      body: bodyData,
    }).pipe(
      map(() => {
        return new Empty();
      }),
    );
  }

  public forgotPassword(request: IAccountForgotPasswordRequest): Observable<Empty> {
    const bodyData: Record<string, string> = {
      email: request.email,
    };
    return this.webRequest.post<Empty>({
      serverApi: ServerApi.AccountForgotPassword,
      body: bodyData,
    }).pipe(
      map(() => {
        return new Empty();
      }),
    );
  }

  public resetPassword(request: IAccountResetPasswordRequest): Observable<Empty> {
    const bodyData: Record<string, string> = {
      token: request.token,
      newPassword: request.newPassword,
    };
    return this.webRequest.post<Empty>({
      serverApi: ServerApi.AccountResetPassword,
      body: bodyData,
    }).pipe(
      map(() => {
        return new Empty();
      }),
    );
  }

  public login(credentials: IAccountCredentials): Observable<Empty> {
    const bodyData = new HttpParams({
      fromObject: {
        email: credentials.email,
        password: credentials.password,
        client_id: environment.clientId,
        client_secret: environment.clientSecret,
        grant_type: 'password',
      },
    });

    return this.webRequest.post<Empty>({
      serverApi: ServerApi.AuthToken,
      contentType: RequestContentType.ApplicationWWWFormUrlEncoded,
      body: bodyData,
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
