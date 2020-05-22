/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { NEVER, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ENVIRONMENT } from '~app-shared/config';

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
        window.location.href = ENVIRONMENT.appBaseUrl;

        return NEVER;
      }),
    );
  }
}
