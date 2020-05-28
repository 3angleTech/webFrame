/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:max-classes-per-file */
import { Inject, Injectable } from '@angular/core';
import { JsonObject, JsonProperty } from 'json2typescript';
import { filter, orderBy, slice } from 'lodash';
import { Observable, of } from 'rxjs';
import {
  IJsonConverterService,
  IWebFrameContextService,
  IWebRequestService,
  PagedResult,
} from '~app-shared/core';
import {
  DataTableQuery,
  DataTableSearchQuery,
  PaginatedDataRequestService,
} from '~app-shared/data-table';
import { isNil } from '~app-shared/utils';

import { Product } from './product.do';
import { products } from './products-mock';

const ELEMENT_DATA = products;

@JsonObject('ProductPagedResult')
export class ProductPagedResult extends PagedResult<Product> {
  @JsonProperty('results', [Product])
  public results: Product[] = undefined;
}

@Injectable()
export class ProductPaginatedDataRequestService extends PaginatedDataRequestService<Product> {

    constructor(
        @Inject(IWebRequestService)
        webRequest: IWebRequestService,
        @Inject(IJsonConverterService)
        jsonConverter: IJsonConverterService,
        @Inject(IWebFrameContextService)
        private context: IWebFrameContextService,
    ) {
        super(webRequest, jsonConverter);
    }

    protected getPage(query: DataTableQuery): Observable<PagedResult<Product>> {
        // TODO: Request from server
        const pResults = new ProductPagedResult();
        let pList: Product[] = [];
        ELEMENT_DATA.forEach(e => {
            const p = this.jsonConverter.deserialize(e, Product);
                pList.push(p);
        });

        if (!isNil(query.search)) {
            pList = this.search(pList, query.search);
        }
        const totalCount = pList.length;

      const pagination = query.pagination;
      const start: number = pagination.page * pagination.pageSize;
      const end = Math.min(start + pagination.pageSize, ELEMENT_DATA.length);
        pList = slice(pList, start, end);
        if (!isNil(query.sort) && query.sort.direction !== '') {
            pList = orderBy(pList, [query.sort.column], [query.sort.direction]);
        }
        pResults.results = pList;
        pResults.page = pagination.page;
        pResults.pageSize = query.pagination.pageSize;
        pResults.totalCount = totalCount;
        return of(pResults);
    }

    private search(productList: Product[], searchQuery: DataTableSearchQuery): Product[] {
        let filteredProducts = [];
        filteredProducts = filter(productList, p => {
            const key = Object.keys(searchQuery)[0];
            if (searchQuery && (searchQuery[key] === '' || isNil(searchQuery[key]))) {
                return true;
            }
            return String(p[key]).indexOf(searchQuery[key]) > -1;
        });
        return filteredProducts;
    }

    protected getPagedResultClass(): new() => PagedResult<Product> {
        return ProductPagedResult;
    }
}
