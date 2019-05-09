/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { Dictionary} from 'app-shared/core';
import { PagedResult } from 'app-shared/core/data/paged-result.do';
import { IJsonConverterService } from 'app-shared/core/service/json-converter/json-converter.service';
import { IWebRequestService } from 'app-shared/core/service/web-request/web-request.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface DataTableSearchQuery {
    [key: string]: any;
}

export interface DataTableSortQuery {
    column: string;
    direction: 'asc' | 'desc' | '';
}

export interface DataTableQuery {
    pagination: PagedQuery;
    search?: DataTableSearchQuery;
    sort?: DataTableSortQuery;
}

export interface PagedQuery extends Dictionary<QueryParameterValueType> {
    page: number;
    pageSize: number;
}

/**
 * Custom type for the query parameters' values
 */
export type QueryParameterValueType = string | number | boolean | string[] | number[];

export interface IPaginatedDataRequestService<T> {
    data: BehaviorSubject<PagedResult<T>>;
    loading: BehaviorSubject<boolean>;
    latestQuery: DataTableQuery;

    load<Q extends DataTableQuery>(query: Q): void;
    refresh(): void;
    destroy(): void;
}

@Injectable()
export abstract class PaginatedDataRequestService<T> implements IPaginatedDataRequestService<T> {
    public data: BehaviorSubject<PagedResult<T>> =
        new BehaviorSubject<PagedResult<T>>(null);
    public loading: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(true);
    public totalCount: BehaviorSubject<number> =
        new BehaviorSubject<number>(0);
    public latestQuery: DataTableQuery;

    constructor(
        @Inject(IWebRequestService)
        protected webRequest: IWebRequestService,
        @Inject(IJsonConverterService)
        protected jsonConverter: IJsonConverterService,
    ) {
        this.latestQuery = {
            pagination: {
                page: 0,
                pageSize: 10,
            },
        };
    }

    public destroy(): void {
        this.data.complete();
        this.loading.complete();
        this.totalCount.complete();
    }

    public load<Q extends DataTableQuery>(query: Q): void {
        this.latestQuery = query;
        this.loading.next(true);
        this.getPage(query).pipe(delay(1000)).subscribe((pageObject) => {
            this.loading.next(false);
            const pagesResultClass = this.getPagedResultClass();
            const page = this.jsonConverter.deserialize(pageObject, pagesResultClass);
            this.data.next(page);
        });
    }

    public refresh(): void {
        this.load(this.latestQuery);
    }

    protected abstract getPage<Q extends DataTableQuery>(query: Q): Observable<PagedResult<T>>;
    protected abstract getPagedResultClass(): { new(): PagedResult<T> };
}
