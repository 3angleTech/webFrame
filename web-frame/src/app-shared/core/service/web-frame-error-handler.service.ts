/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone, OnDestroy } from '@angular/core';
import { trimStart } from 'lodash';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { BUILD_FLAGS, ENVIRONMENT } from '~app-shared/config';

import { isWebFrameErrorHandler } from '../interfaces/web-frame-error-handler.interface';
import { PAGE_URL } from '../other/page-url.enum';

@Injectable({
  providedIn: 'root',
})
export class WebFrameErrorHandlerService implements OnDestroy {
  private errorsSubscription: Subscription;

  private initialized: boolean = false;
  private runtimeErrorEncountered: boolean = false;

  constructor(
    private readonly errorHandler: ErrorHandler,
    private readonly ngZone: NgZone,
  ) {
  }

  public ngOnDestroy(): void {
    if (this.errorsSubscription) {
      this.errorsSubscription.unsubscribe();
    }
  }

  public initialize(): void {
    if (this.initialized) {
      throw new Error('WebFrameErrorHandlerService can only be initialized once.');
    }
    this.initialized = true;
    if (!isWebFrameErrorHandler(this.errorHandler)) {
      throw new Error('The global ErrorHandler must implement IWebFrameErrorHandler.');
    }
    this.errorsSubscription = this.errorHandler.errors$.asObservable().pipe(
      skipWhile((err: unknown): boolean => {
        // Ignore all new validationErrors until the last encountered error is displayed.
        if (this.runtimeErrorEncountered) {
          return true;
        }
        if (!(err instanceof HttpErrorResponse)) {
          this.runtimeErrorEncountered = true;
        }

        return false;
      }),
    ).subscribe((err: unknown): void => {
      if (err instanceof HttpErrorResponse) {
        alert(`Unhandled HTTP Error: ${err.message}`);
      } else if (BUILD_FLAGS.disableStandaloneErrorPage) {
        throw err;
      } else {
        this.displayStandaloneErrorPage(err);
      }
    });
  }

  public displayStandaloneErrorPage(err: unknown): void {
    this.ngZone.runOutsideAngular((): void => {
      console.warn('Redirecting to error page...');
      window.location.href = ENVIRONMENT.appBaseUrl + trimStart(PAGE_URL.STANDALONE_ERROR_PAGE, '/');
    });
  }
}
