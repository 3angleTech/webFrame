/* eslint-disable sonarjs/no-duplicate-string */
/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../data/user.do';
import { ICRUDService } from '../../interfaces/common.interface';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IWebRequestService, RequestConfiguration } from '../web-request/web-request.interface';

export interface IUserService extends ICRUDService<User> {
}
export const IUserService = new InjectionToken('IUserService');

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
