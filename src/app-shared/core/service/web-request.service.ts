/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiEndpointBuilderService } from './api-endpoint-builder.interface';
import { IWebRequestService, RequestConfiguration, RequestContentType } from './web-request.interface';

export type RequestStrategy<T> = (url: string, headers: HttpHeaders, body?: string) => Observable<T>;

@Injectable()
export class WebRequestService implements IWebRequestService {
  constructor(
    @Inject(IApiEndpointBuilderService)
    private apiEndpointBuilder: IApiEndpointBuilderService,
    private http: HttpClient) { }

  public get<T>(config: RequestConfiguration): Observable<T> {
    const getStrategy: RequestStrategy<T> = (url, headers, body) => {
      return this.http.get<T>(url, { headers: headers });
    };

    return this.sendRequest(config, getStrategy);
  }

  public post<T>(config: RequestConfiguration): Observable<T> {
    const postStrategy: RequestStrategy<T> = (url, headers, body) => {
      return this.http.post<T>(url, config.body, { headers: headers });
    };

    return this.sendRequest(config, postStrategy);
  }

  public put<T>(config: RequestConfiguration): Observable<T> {
    const putStrategy: RequestStrategy<T> = (url, headers, body) => {

      return this.http.put<T>(url, config.body, { headers: headers });
    };

    return this.sendRequest(config, putStrategy);
  }

  public delete<T>(config: RequestConfiguration): Observable<T> {
    const deleteStrategy: RequestStrategy<T> = (url, headers, body) => {
      return this.http.delete<T>(url, { headers: headers });
    };

    return this.sendRequest(config, deleteStrategy);
  }

  public sendRequest<T>(config: RequestConfiguration, requestStrategy: RequestStrategy<T>): Observable<T> {
    let headers = new HttpHeaders();
    const contentType = (config.contentType) ? config.contentType : RequestContentType.ApplicationJson;
    headers = headers.append('Content-Type', contentType);

    const url = this.apiEndpointBuilder.getUrl(config.serverApi, config.queryParameters, config.urlParameters);

    return requestStrategy(url, headers, config.body);
  }
}
