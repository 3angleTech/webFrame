/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
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
    return err.status === HttpStatusCode.FORBIDDEN;
  }

  return false;
}

function isPageNotFoundError(err: unknown): boolean {
  if (err instanceof PageNotFoundError) {
    return true;
  } else if (err instanceof HttpErrorResponse) {
    return err.status >= HttpStatusCode.BAD_REQUEST
      && err.status < HttpStatusCode.INTERNAL_SERVER_ERROR;
  }

  return false;
}

function isInternalServerError(err: unknown): boolean {
  if (err instanceof HttpErrorResponse) {
    return err.status >= HttpStatusCode.INTERNAL_SERVER_ERROR;
  }

  return false;
}

export function appRoutingErrorHandler(this: Router, err: unknown): unknown {
  const extras: NavigationExtras = { skipLocationChange: true };
  if (isAccessDeniedError(err)) {
    return this.navigateByUrl(PAGE_URL.ACCESS_DENIED_PAGE, extras);
  } else if (isPageNotFoundError(err)) {
    return this.navigateByUrl(PAGE_URL.PAGE_NOT_FOUND_PAGE, extras);
  } else if (isInternalServerError(err)) {
    return WebFrameErrorHandlerService.DISPLAY_STANDALONE_ERROR_PAGE(err);
  }

  throw err;
}
