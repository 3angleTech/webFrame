/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SKIP_ERROR_HANDLING_HEADER } from './web-request.interface';

@Injectable()
export class WebRequestInterceptorService implements HttpInterceptor {
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipErrorHandling: boolean = this.getSkipErrorHandling(request.headers);
    const updatedRequest = request.clone({
      headers: request.headers.delete(SKIP_ERROR_HANDLING_HEADER),
      withCredentials: true,
    });

    return next.handle(updatedRequest).pipe(
      catchError((err: unknown): Observable<never> => {
        if (skipErrorHandling) {
          return throwError(err);
        }
        if (err instanceof HttpErrorResponse) {
          if (err.status === HttpStatusCode.Unauthorized) {
            // TODO: Refresh session!
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
}
