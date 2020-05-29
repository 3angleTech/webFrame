/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { NEVER, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ENVIRONMENT } from '~app-shared/config';

import { IAccountService } from '../service/account/account.service';
import { IWebFrameContextStateService } from '../service/web-frame-context/web-frame-context-state.service';

@Injectable()
export class AppStateInitializerService {
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
        // TODO: Fix possible race condition and use translated messages.
        // const translatedMessage = 'GENERAL.ERROR.EXPIRED_SESSION';
        const translatedMessage = 'Session has expired.';
        alert(translatedMessage);
        window.location.href = ENVIRONMENT.appBaseUrl;

        return NEVER;
      }),
    );
  }
}
