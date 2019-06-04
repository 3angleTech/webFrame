/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { IWebFrameContextService } from 'app-shared/core';
import { PagedResult } from 'app-shared/core/data/paged-result.do';
import { IJsonConverterService } from 'app-shared/core/service/json-converter/json-converter.service';
import { IWebRequestService } from 'app-shared/core/service/web-request/web-request.interface';
import { DataTableQuery, DataTableSearchQuery, PaginatedDataRequestService } from 'app-shared/data-table/paginated-data-request.service';
import { isNil } from 'app-shared/utils';
import { JsonObject, JsonProperty } from 'json2typescript';
import { filter, orderBy, slice } from 'lodash';
import { Observable, of } from 'rxjs';
import { Product } from './product.do';
import { products } from './products-mock';

const ELEMENT_DATA = products;

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
        const pResults = new PagedResult<Product>();
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
        const start = pagination.page * pagination.pageSize;
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

    protected getPagedResultClass(): { new(): PagedResult<Product> } {
        return ProductPagedResult;
    }
}

@JsonObject
export class ProductPagedResult extends PagedResult<Product> {
    @JsonProperty('results', [Product], true)
    public results: Product[] = undefined;
}
