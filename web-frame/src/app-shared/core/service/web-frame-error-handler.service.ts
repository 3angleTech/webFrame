/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { skipWhile } from 'rxjs/operators';

import { BUILD_FLAGS } from '~app-shared/config';

import { isAppErrorOrApiError, AppError } from '../errors/app-error';
import { isWebFrameErrorHandlerProxy } from '../interfaces/web-frame-error-handler-proxy.interface';
import { IWebFrameContextNavigationService } from './web-frame-context/web-frame-context-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class WebFrameErrorHandlerService {
  public static readonly LAST_RUNTIME_ERROR_KEY: string = 'lastRuntimeError';
  public static readonly STANDALONE_ERROR_PAGE: string = '/error/index.html';

  private initialized: boolean = false;
  private unknownRuntimeErrorEncountered: boolean = false;

  constructor(
    @Inject(IWebFrameContextNavigationService)
    public readonly navigationService: IWebFrameContextNavigationService,
    private readonly errorHandler: ErrorHandler,
  ) {
  }

  public static DISPLAY_STANDALONE_ERROR_PAGE(err: unknown): void {
    console.warn('Redirecting to error page...');
    WebFrameErrorHandlerService.STORE_LAST_RUNTIME_ERROR(err);
    window.location.href = WebFrameErrorHandlerService.STANDALONE_ERROR_PAGE;
  }

  public static STORE_LAST_RUNTIME_ERROR(runtimeErr: unknown): void {
    try {
      // NOTE: To avoid `enumerable: false` issues, the error details are copied to a new object.
      const errorDetails: Partial<AppError | Error> = {
        name: (runtimeErr as { name: string }).name,
        message: (runtimeErr as { message: string }).message,
        stack: (runtimeErr as { stack: string }).stack,
        location: (runtimeErr as { location?: string }).location,
      };
      const errorDetailsString: string = JSON.stringify(errorDetails);
      window.sessionStorage.setItem(WebFrameErrorHandlerService.LAST_RUNTIME_ERROR_KEY, errorDetailsString);
    } catch (err) {
      // Ignore storageArea issues and just display a generic error page.
      console.error('Failed to serialize the error object.', err);
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
    // NOTE: This subscription is permanently active while the application is running.
    this.errorHandler.errors$.asObservable().pipe(
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
    ).subscribe((caughtErr: unknown): void => {
      this.handleCaughtError(caughtErr);
    });
  }

  private handleCaughtError(caughtErr: unknown): void {
    if (caughtErr instanceof AppError) {
      return this.navigateToInformationPage(caughtErr);
    }
    if (caughtErr instanceof HttpErrorResponse) {
      return alert(`Unhandled HTTP Error: ${caughtErr.message}`);
    }
    if (!BUILD_FLAGS.devModeDisableErrorPage) {
      WebFrameErrorHandlerService.DISPLAY_STANDALONE_ERROR_PAGE(caughtErr);
    }
  }

  public navigateToInformationPage(caughtErr: AppError): void {
    const extras: NavigationExtras = {
      skipLocationChange: true,
      queryParams: {
        destination: caughtErr.location,
      },
    };
    this.navigationService.navigateToInformationPage(caughtErr.name, extras);
  }

}
