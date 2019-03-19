/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, InjectionToken } from '@angular/core';
import { User } from 'app-shared/core/data/user.do';
import { ICRUDService } from 'app-shared/core/interface/common.interface';
import { Observable } from 'rxjs';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IWebRequestService, RequestConfiguration } from '../web-request/web-request.interface';

export interface IUserService extends ICRUDService<User> {
}
export const IUserService = new InjectionToken('IUserService');

// tslint:disable:no-duplicate-string
export class UserService implements IUserService {
  constructor(
    @Inject(IWebRequestService)
    private webRequest: IWebRequestService,
  ) { }

  public get(id: string): Observable<User> {
    const config: RequestConfiguration = {
      serverApi: ServerApi.UserById,
      urlParameters: {
        userId: id,
      },
    };

    return this.webRequest.get(config);
  }

  public post(object: User): Observable<User> {
    throw new Error('Method not implemented.');
  }

  public put(object: User): Observable<User> {
    throw new Error('Method not implemented.');
  }

  public delete(id: string): Observable<User> {
    throw new Error('Method not implemented.');
  }
}
