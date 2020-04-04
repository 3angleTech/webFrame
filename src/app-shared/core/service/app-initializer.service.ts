/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Inject, Injectable } from '@angular/core';
import { NEVER, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { IAccountService } from './account/account.service';
import { IWebFrameContextStateService } from './web-frame-context/web-frame-context-state.service';

@Injectable()
export class AppInitializerService {
  constructor(
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public initialize(): Observable<void> {
    if (!this.accountService.authenticatedCookieExists()) {
      return of(undefined);
    }
    return this.stateService.initialize().pipe(
      catchError((): Observable<never> => {
        return this.logoutAndReloadApplication();
      }),
    );
  }

  private logoutAndReloadApplication(): Observable<never> {
    return this.accountService.logout().pipe(
      mergeMap((): Observable<never> => {
        window.location.href = '/';
        return NEVER;
      }),
    );
  }
}

export type AppInitializer = () => Promise<void>;
export const appInitializerFactory = (
  initializerService: AppInitializerService,
): AppInitializer => {
  return async (): Promise<void> => {
    return initializerService.initialize().toPromise();
  };
};

export const APP_INITIALIZER_PROVIDERS = [
  AppInitializerService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [
      AppInitializerService,
    ],
    multi: true,
  },
];
