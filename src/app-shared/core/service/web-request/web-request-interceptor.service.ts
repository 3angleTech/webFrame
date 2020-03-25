/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WebRequestInterceptorService implements HttpInterceptor {
  constructor() { }

  /* tslint:disable:no-any */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      withCredentials: true,
    });

    return next.handle(updatedRequest).pipe(
      catchError((response: HttpErrorResponse): Observable<never> => {
        return throwError(response.error);
      }),
    );
  }
}
