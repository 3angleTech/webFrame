/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';
import { User } from 'app-shared/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IWebRequestService, RequestConfiguration } from '../web-request/web-request.interface';

/**
 * Service holding the state of the application.
 */
export interface IWebFrameContextStateService {
  ready: boolean;
  currentUser: BehaviorSubject<User>;

  initialize(): Observable<boolean>;
}
export const IWebFrameContextStateService = new InjectionToken('IWebFrameContextStateService');
// TODO: Move outside
@Injectable()
export class WebFrameContextStateService implements IWebFrameContextStateService {
  public currentUser: BehaviorSubject<User>;
  public ready: boolean;

  constructor(
    @Inject(IWebRequestService)
    private webRequest: IWebRequestService,
  ) {
    this.currentUser = new BehaviorSubject(null);
    this.ready = false;

   }

   public initialize(): Observable<boolean> {
    return this.getCurrentLoggedInUser().pipe(
      map((user) => {
        this.currentUser.next(user);
        this.ready = true;
        return true;
    }));
   }

   private getCurrentLoggedInUser(): Observable<User> {
    const config: RequestConfiguration = {
      serverApi: ServerApi.AccountMe,
    };
    return this.webRequest.get(config);
   }
}
