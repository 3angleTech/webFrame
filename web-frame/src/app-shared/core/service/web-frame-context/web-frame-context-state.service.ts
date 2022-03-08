/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../../data/user.do';
import { InvalidAppVersionError } from '../../errors/invalid-app-version-error';
import { IAppRefresher } from '../../other/app-refresher.token';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';
import { IWebRequestService, RequestConfiguration } from '../web-request/web-request.interface';

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
    private readonly webRequest: IWebRequestService,
  ) {
    this.currentUser = new BehaviorSubject(undefined);
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser.value;
  }

  public initialize(): Observable<void> {
    const skipErrorHandling: boolean = true;
    return this.initializeCurrentUser(skipErrorHandling);
  }

  public refresh(): Observable<void> {
    return this.initializeCurrentUser();
  }

  private initializeCurrentUser(skipErrorHandling?: boolean): Observable<void> {
    const config: RequestConfiguration = {
      serverApi: ServerApi.AccountMe,
      skipErrorHandling: skipErrorHandling,
    };

    return this.webRequest.get(config).pipe(
      map((user: User): void => {
        this.currentUser.next(user);

        return undefined;
      }),
      catchError((err: unknown): Observable<void | never> => {
        if (err instanceof InvalidAppVersionError) {
          // Allow the application to initialize and display the information page.
          return of(undefined);
        }
        return throwError(err);
      }),
    );
  }
}
