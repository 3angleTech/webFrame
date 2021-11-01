/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NEVER, Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { BUILD_FLAGS } from '~app-shared/config';

import { InvalidAppVersionError } from '../../errors/invalid-app-version-error';
import { WebFrameErrorHandlerService } from '../web-frame-error-handler.service';
import { SKIP_ERROR_HANDLING_HEADER } from './web-request.interface';

@Injectable()
export class WebRequestInterceptorService implements HttpInterceptor {
  constructor(
    private readonly errorHandlerService: WebFrameErrorHandlerService,
  ) {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipErrorHandling: boolean = this.getSkipErrorHandling(request.headers);
    const updatedRequest = request.clone({
      headers: request.headers.delete(SKIP_ERROR_HANDLING_HEADER),
      withCredentials: true,
    });

    return next.handle(updatedRequest).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mergeMap((event: HttpEvent<any>): Observable<HttpEvent<any> | never> => {
        if (!BUILD_FLAGS.devModeSkipApiVersionCheck) {
          if (event instanceof HttpResponse) {
            return this.validateWebApiVersionHeader(event, skipErrorHandling);
          }
        }
        return of(event);
      }),
      catchError((err: unknown): Observable<never> => {
        if (skipErrorHandling) {
          return throwError(err);
        }
        if (err instanceof HttpErrorResponse) {
          if (err.status === HttpStatusCode.Unauthorized) {
            // TODO: #89 Refresh session!
            return throwError(err);
          }
        }
        return throwError(err);
      }),
    );
  }

  private getSkipErrorHandling(headers: HttpHeaders): boolean {
    return headers.get(SKIP_ERROR_HANDLING_HEADER) === 'true';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private validateWebApiVersionHeader(event: HttpResponse<any>, skipErrorHandling: boolean): Observable<HttpResponse<any> | never> {
    const webApiVersionHeader = event.headers.get('X-WebApiVersion');
    if (!webApiVersionHeader) {
      return of(event);
    }
    if (webApiVersionHeader === BUILD_FLAGS.clientVersion) {
      return of(event);
    }
    const message = `You are using an outdated application version. Expected v${webApiVersionHeader}, using v${BUILD_FLAGS.clientVersion}.`;
    const err = new InvalidAppVersionError({
      message: message,
      location: location.toString(),
    });
    if (skipErrorHandling) {
      return throwError(err);
    }
    // NOTE: The error is not thrown because we want to prevent subscribers from handling it.
    this.errorHandlerService.navigateToInformationPage(err);
    return NEVER;
  }

}
