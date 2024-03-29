/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { InjectionToken } from '@angular/core';

import { Dictionary } from '../../interfaces/dictionary';
import { QueryParameterValueType, UrlParameterValueType } from '../web-request/web-request.interface';

export enum ServerApi {
  AuthToken = '/auth/token',
  Logout = '/auth/logout',
  AccountMe = '/account/me',
  AccountActivate = '/account/activate',
  AccountChangePassword = '/account/change-password',
  AccountForgotPassword = '/account/forgot-password',
  AccountResetPassword = '/account/reset-password',
  UserById = '/users/{{userId}}',
}

export interface IApiEndpointBuilderService {
  /**
   * Builds the API endpoint url
   *
   * @param serverApi Server api
   * @param queryParameters List of all the query parameters which should be set.
   * @param urlParameters List of all the url parameters which should be set.
   */
  getUrl(
    serverApi: ServerApi,
    queryParameters: Dictionary<QueryParameterValueType>,
    urlParameters: Dictionary<UrlParameterValueType>,
  ): string;
}
export const IApiEndpointBuilderService = new InjectionToken('IApiEndpointBuilderService');
