/*
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import {
  AccessDeniedError,
  PAGE_URL,
  PageNotFoundError,
} from '~app-shared/core';

@Injectable()
export class AppRoutingErrorHandlerService {
  public static readonly LAST_RUNTIME_ERROR_KEY: string = 'lastRuntimeError';
  public static readonly STANDALONE_ERROR_PAGE: string = '/error/index.html';

  public displayStandaloneErrorPage(caughtErr: unknown): void {
    console.warn('Redirecting to error page...');
    this.storeLastRuntimeError(caughtErr);
    window.location.href = AppRoutingErrorHandlerService.STANDALONE_ERROR_PAGE;
  }

  public handleNavigationError(router: Router, caughtErr: unknown): unknown {
    const extras: NavigationExtras = { skipLocationChange: true };
    if (this.isAccessDeniedError(caughtErr)) {
      return router.navigateByUrl(PAGE_URL.ACCESS_DENIED, extras);
    } else if (this.isPageNotFoundError(caughtErr)) {
      return router.navigateByUrl(PAGE_URL.NOT_FOUND, extras);
    } else if (this.isInternalServerError(caughtErr)) {
      return this.displayStandaloneErrorPage(caughtErr);
    }

    throw caughtErr;
  }

  private isAccessDeniedError(caughtErr: unknown): boolean {
    if (caughtErr instanceof AccessDeniedError) {
      return true;
    } else if (caughtErr instanceof HttpErrorResponse) {
      return caughtErr.status === HttpStatusCode.Forbidden;
    }

    return false;
  }

  private isInternalServerError(caughtErr: unknown): boolean {
    if (caughtErr instanceof HttpErrorResponse) {
      return caughtErr.status >= HttpStatusCode.InternalServerError;
    }

    return false;
  }

  private isPageNotFoundError(caughtErr: unknown): boolean {
    if (caughtErr instanceof PageNotFoundError) {
      return true;
    } else if (caughtErr instanceof HttpErrorResponse) {
      return caughtErr.status >= HttpStatusCode.BadRequest &&
        caughtErr.status < HttpStatusCode.InternalServerError;
    }

    return false;
  }

  private storeLastRuntimeError(caughtErr: unknown): void {
    try {
      // NOTE: To avoid `enumerable: false` issues, the error details are copied to a new object.
      const errorDetails: Partial<Error> = {
        name: (caughtErr as { name: string }).name,
        message: (caughtErr as { message: string }).message,
        stack: (caughtErr as { stack: string }).stack,
      };
      const errorDetailsString: string = JSON.stringify(errorDetails);
      window.sessionStorage.setItem(
        AppRoutingErrorHandlerService.LAST_RUNTIME_ERROR_KEY,
        errorDetailsString,
      );
    } catch (err) {
      // Ignore storageArea issues, just display generic error page, without any details.
      console.error('Failed to serialize the error object for the error page.', err);
    }
  }

}
