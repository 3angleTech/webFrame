/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import { trimStart } from 'lodash';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { BUILD_FLAGS, ENVIRONMENT } from '~app-shared/config';

import { AccessDeniedError } from '../errors/access-denied.error';
import { isHttpErrorResponseOrKnownError } from '../errors/known.error';
import { PageNotFoundError } from '../errors/page-not-found.error';
import { isWebFrameErrorHandler } from '../interfaces/web-frame-error-handler.interface';
import { PAGE_URL } from '../other/page-url.enum';

import { IWebFrameContextNavigationService } from './web-frame-context/web-frame-context-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class WebFrameErrorHandlerService implements OnDestroy {
  public static readonly LAST_RUNTIME_ERROR_KEY: string = 'lastRuntimeError';

  private errorsSubscription: Subscription;

  private initialized: boolean = false;
  private unknownRuntimeErrorEncountered: boolean = false;

  private get storageArea(): Storage {
    return window.sessionStorage;
  }

  constructor(
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
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
        // Ignore all new errors until the last encountered error is displayed.
        if (this.unknownRuntimeErrorEncountered) {
          return true;
        }
        if (!isHttpErrorResponseOrKnownError(err)) {
          this.unknownRuntimeErrorEncountered = true;
        }

        return false;
      }),
    ).subscribe({
      next: (err: unknown): void => this.handlerEmittedError(err),
    });
  }

  private handlerEmittedError(err: unknown): void | never {
    if (err instanceof HttpErrorResponse) {
      return alert(`Unhandled HTTP Error: ${err.message}`);
    } else if (err instanceof AccessDeniedError) {
      return this.navigationService.navigateToAccessDeniedErrorPage();
    } else if (err instanceof PageNotFoundError) {
      return this.navigationService.navigateToNotFoundErrorPage();
    }

    if (!BUILD_FLAGS.disableStandaloneErrorPage) {
      this.displayStandaloneErrorPage(err);
    }

    throw err;
  }

  public displayStandaloneErrorPage(err: unknown): void {
    this.ngZone.runOutsideAngular((): void => {
      console.warn('Redirecting to error page...');
      this.storeLastRuntimeError(err);
      window.location.href = ENVIRONMENT.appBaseUrl + trimStart(PAGE_URL.STANDALONE_ERROR_PAGE, '/');
    });
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
      this.storageArea.setItem(WebFrameErrorHandlerService.LAST_RUNTIME_ERROR_KEY, errorDetailsString);
    } catch (err) {
      // Ignore storageArea issues and just display a generic error page.
      console.error('Failed to serialize the error object for the error page.');
    }
  }
}
