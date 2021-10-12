/* eslint-disable no-magic-numbers */
/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Observable } from 'rxjs';

export enum HttpStatusCode {
  // NOTE: The Angular HttpClient returns a 0 code for when a connection could not be established.
  CONNECTION_REFUSED = 0,
  OK = 200,
  MULTIPLE_CHOICES = 300,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export interface ICRUDService<T> {
  get(id: string): Observable<T>;
  post(object: T): Observable<T>;
  put(object: T): Observable<T>;
  delete(id: string): Observable<T>;
}
