/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { isNil, isString } from 'lodash';
import { ENVIRONMENT } from '~app-shared/config';

import { Dictionary } from '../../interfaces/dictionary';
import { IStringTemplateService } from '../string-template/string-template.service';
import { QueryParameterValueType, UrlParameterValueType } from '../web-request/web-request.interface';

import { IApiEndpointBuilderService, ServerApi } from './api-endpoint-builder.interface';

@Injectable()
export class ApiEndpointBuilderService implements IApiEndpointBuilderService {
  constructor(
    @Inject(IStringTemplateService) private templateService: IStringTemplateService,
  ) { }

  public getUrl(
    serverApi: ServerApi,
    queryParameters: Dictionary<QueryParameterValueType>,
    urlParameters: Dictionary<UrlParameterValueType>,
  ): string {
    const baseUrl = this.getBaseUrl(serverApi, urlParameters);

    const queryString = this.buildParamQueryString(queryParameters);
    let url = baseUrl;
    if (queryString !== '') {
      if (url[url.length - 1] === '/') {
        url = url.substring(0, url.length - 1);
      }
      url += queryString;
    }

    return url;
  }

  private getBaseUrl(serverApi: ServerApi, urlParameters: Dictionary<UrlParameterValueType>): string {
    const urlTemplate = `${ENVIRONMENT.apiBaseUrl}${serverApi}`;

    return this.templateService.interpolate(urlTemplate, urlParameters);
  }

  private buildParamQueryString(queryParameters: Dictionary<QueryParameterValueType>): string {
    if (isNil(queryParameters)) {
      return '';
    }

    const paramKeyList: string[] = this.getQueryParametersWithValue(queryParameters);
    if (paramKeyList.length === 0) {
      return '';
    }

    let queryString = '?';
    paramKeyList.forEach((pKey: string, pKeyIndex: number): void => {
      let token = '';
      const pValue = queryParameters[pKey];
      if (pValue instanceof Array) {
        pValue.forEach((item: UrlParameterValueType, pValueIndex: number) => {
          token += `${pKey}=${encodeURIComponent(item)}`;
          token += (pValueIndex !== pValue.length - 1) ? '&' : '';
        });
      } else {
        token = `${pKey}=${encodeURIComponent(pValue)}`;
      }

      queryString += token;
      queryString += (pKeyIndex !== paramKeyList.length - 1) ? '&' : '';
    });

    return queryString;
  }

  private getQueryParametersWithValue(urlParameters: Dictionary<QueryParameterValueType>): string[] {
    const emptyString = '';
    const paramKeyList = Object.keys(urlParameters);
    const filteredParamKeyList: string[] = [];

    paramKeyList.forEach((pKey: string): void => {
      const value = urlParameters[pKey];
      if (!isNil(value) && !(isString(value) && value.trim() === emptyString)) {
        filteredParamKeyList.push(pKey);
      }
    });

    return filteredParamKeyList;
  }
}
