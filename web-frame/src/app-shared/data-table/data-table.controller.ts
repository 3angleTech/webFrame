/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { isNil } from '~app-shared/utils';

import {
  DataTableSearchQuery,
  DataTableSortQuery,
  IPaginatedDataRequestService,
  PagedQuery,
} from './paginated-data-request.service';

export interface IPaginatorVm {
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
}

export interface DataTableControllerConfiguration<T> {
  displayedColumns: string[];
  paginatorVm?: IPaginatorVm;
  requestService: IPaginatedDataRequestService<T>;
}

export interface DataTableInputEvents {
  paginationChange: BehaviorSubject<PagedQuery>;
  searchChange: BehaviorSubject<DataTableSearchQuery>;
  sortChange: BehaviorSubject<DataTableSortQuery>;
}

export interface DataTableOutputEvents {
  resetToFirstPage: EventEmitter<void>;
}
/** Data table controller. */
export abstract class DataTableController<T> {
  /* The Data table configuration. */
  protected configuration: DataTableControllerConfiguration<T>;
  /* The columns that will be displayed. */
  public displayedColumns: string[];
  /* The paginator view model. */
  public paginatorVm: IPaginatorVm;
  /* The service that consumes the resource from the backend and handles pagination. */
  public requestService: IPaginatedDataRequestService<T>;
  /* Grouping of events that are triggered from the view and will determine a change in the controller. */
  public inputEvents: DataTableInputEvents;
  /* Grouping of events that are triggered from the controller and will determine changes in the view. */
  public outputEvents: DataTableOutputEvents;

  /**
   * Bootstraps the controller with the provided configuration.
   * @param configuration The bootstrap configuration.
   */
  protected bootstrap(configuration: DataTableControllerConfiguration<T>): void {
    this.configuration = configuration;
    this.initialize();
    this.setDataTableChangeBehaviour();
    this.refresh();
  }

  private initialize(): void {
    const defaultPaginatorVm = {
      length: 100,
      pageSize: 10,
      pageSizeOptions: [10, 25, 50, 100],
    };

    this.displayedColumns = this.configuration.displayedColumns;
    this.paginatorVm = (this.configuration.paginatorVm) ? this.configuration.paginatorVm : defaultPaginatorVm;
    this.requestService = this.configuration.requestService;

    this.inputEvents = {
      paginationChange: new BehaviorSubject({
        page: 0,
        pageSize: this.paginatorVm.pageSize,
      }),
      searchChange: new BehaviorSubject(null),
      sortChange: new BehaviorSubject(null),
    };

    this.outputEvents = {
      resetToFirstPage: new EventEmitter(),
    };
  }

  private setDataTableChangeBehaviour(): void {
    this.requestService.data.subscribe(data => {
      if (!isNil(data)) {
        this.paginatorVm.length = data.totalCount;
      }
    });
    this.inputEvents.paginationChange.pipe(skip(1))
      .subscribe(() => this.refresh());

    this.inputEvents.searchChange.pipe(skip(1))
      .subscribe(() => {
        this.outputEvents.resetToFirstPage.emit();
        this.inputEvents.paginationChange.next({
          page: 0,
          pageSize: this.paginatorVm.pageSize,
        });
        this.refresh();
      });

    this.inputEvents.sortChange.pipe(skip(1))
      .subscribe(() => this.refresh());
  }

  /* Trigger a refresh to the data table. */
  public refresh(): void {
    this.requestService.load({
      pagination: this.inputEvents.paginationChange.value,
      search: this.inputEvents.searchChange.value,
      sort: this.inputEvents.sortChange.value,
    });
  }
}
