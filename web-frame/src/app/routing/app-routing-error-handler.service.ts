/*
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { BUILD_FLAGS } from '~app-shared/config';
import {
  AccessDeniedError, InvalidAppVersionError,
  PAGE_URL,
  PageNotFoundError,
  WebFrameErrorHandlerService,
} from '~app-shared/core';

@Injectable()
export class AppRoutingErrorHandlerService {
  public handleNavigationError(router: Router, caughtErr: unknown): Promise<boolean> | never {
    const extras: NavigationExtras = { skipLocationChange: true };
    if (this.isAccessDeniedError(caughtErr)) {
      return router.navigateByUrl(PAGE_URL.ACCESS_DENIED, extras);
    } else if (this.isPageNotFoundError(caughtErr)) {
      return router.navigateByUrl(PAGE_URL.NOT_FOUND, extras);
    } else if (caughtErr instanceof InvalidAppVersionError) {
      const informationPageUrl = PAGE_URL.INFORMATION.replace(':informationId', caughtErr.name);
      return router.navigateByUrl(informationPageUrl, extras);
    } else if (this.isInternalServerError(caughtErr)) {
      return this.displayStandaloneErrorPage(caughtErr);
    }
    throw caughtErr;
  }

  private displayStandaloneErrorPage(caughtErr: unknown): Promise<boolean> {
    if (!BUILD_FLAGS.devModeDisableErrorPage) {
      WebFrameErrorHandlerService.DISPLAY_STANDALONE_ERROR_PAGE(caughtErr);
    }
    return Promise.resolve(false);
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

}
