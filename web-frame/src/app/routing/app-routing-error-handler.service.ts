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
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  AccessDeniedError,
  HttpStatusCode, PAGE_URL,
  PageNotFoundError,
} from '~app-shared/core';

@Injectable()
export class AppRoutingErrorHandlerService {
  public static readonly LAST_RUNTIME_ERROR_KEY: string = 'lastRuntimeError';
  public static readonly STANDALONE_ERROR_PAGE: string = '/error/index.html';

  public displayStandaloneErrorPage(err: unknown): void {
    console.warn('Redirecting to error page...');
    this.storeLastRuntimeError(err);
    window.location.href = AppRoutingErrorHandlerService.STANDALONE_ERROR_PAGE;
  }

  public handleNavigationError(router: Router, err: unknown): unknown {
    const extras: NavigationExtras = { skipLocationChange: true };
    if (this.isAccessDeniedError(err)) {
      return router.navigateByUrl(PAGE_URL.ACCESS_DENIED, extras);
    } else if (this.isPageNotFoundError(err)) {
      return router.navigateByUrl(PAGE_URL.NOT_FOUND, extras);
    } else if (this.isInternalServerError(err)) {
      return this.displayStandaloneErrorPage(err);
    }

    throw err;
  }

  private isAccessDeniedError(err: unknown): boolean {
    if (err instanceof AccessDeniedError) {
      return true;
    } else if (err instanceof HttpErrorResponse) {
      return err.status === HttpStatusCode.FORBIDDEN;
    }

    return false;
  }

  private isInternalServerError(err: unknown): boolean {
    if (err instanceof HttpErrorResponse) {
      return err.status >= HttpStatusCode.INTERNAL_SERVER_ERROR;
    }

    return false;
  }

  private isPageNotFoundError(err: unknown): boolean {
    if (err instanceof PageNotFoundError) {
      return true;
    } else if (err instanceof HttpErrorResponse) {
      return err.status >= HttpStatusCode.BAD_REQUEST
        && err.status < HttpStatusCode.INTERNAL_SERVER_ERROR;
    }

    return false;
  }

  private storeLastRuntimeError(err: unknown): void {
    try {
      // NOTE: To avoid `enumerable: false` issues, the error details are copied to a new object.
      const errorDetails: Partial<Error> = {
        name: (err as { name: string }).name,
        message: (err as { message: string }).message,
        stack: (err as { stack: string }).stack,
      };
      const errorDetailsString: string = JSON.stringify(errorDetails);
      window.sessionStorage.setItem(
        AppRoutingErrorHandlerService.LAST_RUNTIME_ERROR_KEY,
        errorDetailsString,
      );
    } catch (err) {
      // Ignore storageArea issues, just display generic error page, without any details.
      console.error('Failed to serialize the error object for the error page.');
    }
  }

}
