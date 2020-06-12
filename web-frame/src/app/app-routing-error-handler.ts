/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { trimStart } from 'lodash';
import { ENVIRONMENT } from '~app-shared/config';
import {
  AccessDeniedError,
  HttpStatusCode,
  PAGE_URL,
  PageNotFoundError,
  WebFrameErrorHandlerService,
} from '~app-shared/core';

function isAccessDeniedError(err: unknown): boolean {
  if (err instanceof AccessDeniedError) {
    return true;
  } else if (err instanceof HttpErrorResponse) {
    if (err.status === HttpStatusCode.FORBIDDEN) {
      return true;
    }
  }

  return false;
}

function isPageNotFoundError(err: unknown): boolean {
  if (err instanceof PageNotFoundError) {
    return true;
  } else if (err instanceof HttpErrorResponse) {
    if (err.status >= HttpStatusCode.BAD_REQUEST
      && err.status < HttpStatusCode.INTERNAL_SERVER_ERROR) {
      return true;
    }
  }

  return false;
}

function isInternalServerError(err: HttpErrorResponse): boolean {
  return err.status >= HttpStatusCode.INTERNAL_SERVER_ERROR;
}

function goToErrorDetailsPage(err: HttpErrorResponse): void {
  try {
    const errorString: string = JSON.stringify(err);
    window.sessionStorage.setItem(WebFrameErrorHandlerService.LAST_RUNTIME_ERROR_KEY, errorString);
  } catch (err) {
    // Ignore storageArea issues and just display a generic error page.
    console.error('Failed to serialize the navigation error object for the error page.');
  }
  window.location.href = ENVIRONMENT.appBaseUrl + trimStart(PAGE_URL.STANDALONE_ERROR_PAGE, '/');
}

export function appRoutingErrorHandler(this: Router, err: unknown): unknown {
  const extras: NavigationExtras = { skipLocationChange: true };
  if (isAccessDeniedError(err)) {
    return this.navigateByUrl(PAGE_URL.ACCESS_DENIED_PAGE, extras);
  } else if (isPageNotFoundError(err)) {
    return this.navigateByUrl(PAGE_URL.PAGE_NOT_FOUND_PAGE, extras);
  } else if (err instanceof HttpErrorResponse) {
    if (isInternalServerError(err)) {
      return goToErrorDetailsPage(err);
    }
  }

  throw err;
}
