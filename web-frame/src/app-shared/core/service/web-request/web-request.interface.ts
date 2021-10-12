/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Dictionary } from '../../interfaces/dictionary';
import { ServerApi } from '../api-endpoint-builder/api-endpoint-builder.interface';

/**
 * Custom type for the URL parameters' values
 */
export type UrlParameterValueType = string | number | boolean;

/**
 * Custom type for the query parameters' values
 */
export type QueryParameterValueType = string | number | boolean | string[] | number[];

/**
 * Enum containing all the supported content types
 */
export enum RequestContentType {
  ApplicationJson = 'application/json',
  ApplicationWWWFormUrlEncoded = 'application/x-www-form-urlencoded',
  FormData = 'multipart/form-data',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface RequestConfiguration<T = any> {
  serverApi: ServerApi;
  queryParameters?: Dictionary<QueryParameterValueType>;
  urlParameters?: Dictionary<UrlParameterValueType>;
  contentType?: RequestContentType;
  body?: T;
}

export interface IWebRequestService {
  /**
   * GET resource<T>
   *
   * @param config The request configuration.
   * @param instance The instance of object <T>.
   */
  get<T>(config: RequestConfiguration): Observable<T>;
  /**
   * POST resource<T>
   *
   * @param config The request configuration.
   * @param instance The instance of object <T>.
   */
  post<T>(config: RequestConfiguration): Observable<T>;
  /**
   * PUT resource<T>
   *
   * @param config The request configuration.
   * @param instance The instance of object <T>.
   */
  put<T>(config: RequestConfiguration): Observable<T>;
  /**
   * DELETE resource<T>]
   *
   * @param config The request configuration.
   * @param instance The instance of object <T>.
   */
  delete<T>(config: RequestConfiguration): Observable<T>;
}
export const IWebRequestService = new InjectionToken('IWebRequestService');
