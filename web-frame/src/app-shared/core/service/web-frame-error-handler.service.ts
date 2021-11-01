/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

import { BUILD_FLAGS } from '~app-shared/config';

import { AccessDeniedError } from '../errors/access-denied-error';
import { isAppErrorOrApiError } from '../errors/app-error';
import { PageNotFoundError } from '../errors/page-not-found-error';
import { isWebFrameErrorHandlerProxy } from '../interfaces/web-frame-error-handler-proxy.interface';
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

  constructor(
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    private readonly errorHandler: ErrorHandler,
  ) {
  }

  public static DISPLAY_STANDALONE_ERROR_PAGE(err: unknown): void {
    console.warn('Redirecting to error page...');
    WebFrameErrorHandlerService.STORE_LAST_RUNTIME_ERROR(err);
    window.location.href = PAGE_URL.STANDALONE_ERROR_PAGE;
  }

  public static STORE_LAST_RUNTIME_ERROR(runtimeErr: unknown): void {
    try {
      // NOTE: To avoid `enumerable: false` issues, the error details are copied to a new object.
      const errorDetails: Partial<Error> = {
        name: (runtimeErr as { name: string }).name,
        message: (runtimeErr as { message: string }).message,
        stack: (runtimeErr as { stack: string }).stack,
      };
      const errorDetailsString: string = JSON.stringify(errorDetails);
      window.sessionStorage.setItem(WebFrameErrorHandlerService.LAST_RUNTIME_ERROR_KEY, errorDetailsString);
    } catch (err) {
      // Ignore storageArea issues and just display a generic error page.
      console.error('Failed to serialize the error object for the error page.', err);
    }
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
    if (!isWebFrameErrorHandlerProxy(this.errorHandler)) {
      throw new Error('The global ErrorHandler must implement IWebFrameErrorHandlerProxy.');
    }
    this.errorsSubscription = this.errorHandler.errors$.asObservable().pipe(
      skipWhile((err: unknown): boolean => {
        // Ignore all new errors until the last encountered error is displayed.
        if (this.unknownRuntimeErrorEncountered) {
          return true;
        }
        if (!isAppErrorOrApiError(err)) {
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
      WebFrameErrorHandlerService.DISPLAY_STANDALONE_ERROR_PAGE(err);
    }

    throw err;
  }

}
