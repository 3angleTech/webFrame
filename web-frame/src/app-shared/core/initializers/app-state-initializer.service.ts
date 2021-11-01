/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NEVER, Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { ENVIRONMENT } from '~app-shared/config';
import { ITranslationService } from '~app-shared/translate';

import { KNOWN_ERROR_MESSAGE } from '../errors/known-error-message';
import { IAccountService } from '../service/account/account.service';
import { IWebFrameContextStateService } from '../service/web-frame-context/web-frame-context-state.service';

@Injectable()
export class AppStateInitializerService {

  constructor(
    @Inject(IAccountService)
    private readonly accountService: IAccountService,
    @Inject(IWebFrameContextStateService)
    private readonly stateService: IWebFrameContextStateService,
    @Inject(ITranslationService)
    private readonly translationService: ITranslationService,
  ) {
  }

  public initialize(): Observable<void> {
    if (!this.accountService.authenticatedCookieExists()) {
      return of(undefined);
    }

    return this.stateService.initialize().pipe(
      catchError((err: unknown): Observable<never> => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === HttpStatusCode.Unauthorized) {
            return this.logoutAndReloadApplication();
          }
        }
        // Allow the application to initialize and display the information page.
        return throwError(err);
      }),
    );
  }

  private logoutAndReloadApplication(): Observable<never> {
    return this.accountService.logout().pipe(
      mergeMap((): Observable<never> => {
        const translatedMessage = this.translationService.translate(KNOWN_ERROR_MESSAGE.EXPIRED_SESSION);
        alert(translatedMessage);
        // TODO: Display the information page with a "login" button. The button should use the current URL as login destination.
        window.location.href = ENVIRONMENT.appBaseUrl;

        return NEVER;
      }),
    );
  }
}
