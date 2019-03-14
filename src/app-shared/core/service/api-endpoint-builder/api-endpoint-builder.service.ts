/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { Dictionary } from 'app-shared/core';
import { forEach, isNil, isString } from 'lodash';

import { environment } from '../../../../environments/environment';
import { IStringTemplateService } from '../string-template/string-template.service';
import { QueryParameterValueType, UrlParameterValueType } from '../web-request/web-request.interface';
import { IApiEndpointBuilderService, ServerApi } from './api-endpoint-builder.interface';

@Injectable()
export class ApiEndpointBuilderService implements IApiEndpointBuilderService {
  constructor(
    @Inject(IStringTemplateService) private templateService: IStringTemplateService,
  ) { }

  public getUrl(serverApi: ServerApi,
    queryParameters: Dictionary<QueryParameterValueType>,
    urlParameters: Dictionary<UrlParameterValueType>): string {

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
    const urlTemplate = `${environment.apiBaseUrl}${serverApi}`;
    return this.templateService.interpolate(urlTemplate, urlParameters);
  }

  private buildParamQueryString(queryParameters: Dictionary<QueryParameterValueType>): string {
    if (isNil(queryParameters)) {
      return '';
    }

    const paramKeyList = this.getQueryParametersWithValue(queryParameters);
    if (paramKeyList.length === 0) {
      return '';
    }

    let queryString = '?';
    paramKeyList.forEach((pKey, pKeyIndex) => {
      let token = '';
      const pValue = queryParameters[pKey];
      if (pValue instanceof Array) {
        (<any[]>pValue).forEach((item: any, pValueIndex: number) => {
          token += `${pKey}=${encodeURIComponent(item)}`;
          token += (pValueIndex !== (<any[]>pValue).length - 1) ? '&' : '';
        });
      } else {
        token = `${pKey}=${encodeURIComponent(<any>pValue)}`;
      }

      queryString += token;
      queryString += (pKeyIndex !== paramKeyList.length - 1) ? '&' : '';
    });

    return queryString;
  }

  private getQueryParametersWithValue(urlParameters: Dictionary<QueryParameterValueType>): { [param: string]: any } {
    const emptyString = '';
    const paramKeyList = Object.keys(urlParameters);
    const filteredParamKeyList = [];

    forEach(paramKeyList, (pKey) => {
      const value = urlParameters[pKey];
      if (!isNil(value) && !(isString(value) && value.trim() === emptyString)) {
        filteredParamKeyList.push(pKey);
      }
    });
    return filteredParamKeyList;
  }
}
