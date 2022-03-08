/* eslint-disable no-magic-numbers */
/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Observable } from 'rxjs';

export interface ICRUDService<T> {
  get(id: string): Observable<T>;
  post(object: T): Observable<T>;
  put(object: T): Observable<T>;
  delete(id: string): Observable<T>;
}
