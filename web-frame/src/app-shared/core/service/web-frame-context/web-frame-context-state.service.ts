/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../data/user.do';
import { IAppRefresher } from '../../other/app-refresher.token';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import {
  IWebRequestService,
  RequestConfiguration,
} from '../web-request/web-request.interface';

/**
 * Service holding the state of the application.
 */
export interface IWebFrameContextStateService {
  currentUser: BehaviorSubject<User | undefined>;

  isAuthenticated(): boolean;

  initialize(): Observable<void>;
}

export const IWebFrameContextStateService = new InjectionToken('IWebFrameContextStateService');

@Injectable()
export class WebFrameContextStateService implements IAppRefresher, IWebFrameContextStateService {
  public currentUser: BehaviorSubject<User | undefined>;

  // The state service refresher needs to be executed first.
  public refresherWeight: number = -100;

  constructor(
    @Inject(IWebRequestService)
    private webRequest: IWebRequestService,
  ) {
    this.currentUser = new BehaviorSubject(undefined);
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser.value;
  }

  public initialize(): Observable<void> {
    return this.initializeCurrentUser();
  }

  public refresh(): Observable<void> {
    return this.initializeCurrentUser();
  }

  private initializeCurrentUser(): Observable<void> {
    const config: RequestConfiguration = {
      serverApi: ServerApi.AccountMe,
    };

    return this.webRequest.get(config).pipe(
      map((user: User): void => {
        this.currentUser.next(user);

        return undefined;
      }),
    );
  }
}
