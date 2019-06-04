/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { PagedResult } from 'app-shared/core/data/paged-result.do';
import { IPaginatorVm } from 'app-shared/data-table/data-table.controller';
import { DataTableSortQuery } from 'app-shared/data-table/paginated-data-request.service';
import { BehaviorSubject } from 'rxjs';
import { ProductDataTableController } from './product-data-table.controller';
import { ProductPaginatedDataRequestService } from './product-paginated-data-request.service';
import { Product } from './product.do';

@Component({
  selector: 'app-data-table-page',
  templateUrl: './data-table-page.component.html',
  styleUrls: ['./data-table-page.component.scss'],
  providers: [
    ProductDataTableController,
    ProductPaginatedDataRequestService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTablePageComponent implements OnInit {
  public search: string;
  public pageIndex: number = 0;
  public pageSize: number = 3;

  public column_sort: DataTableSortQuery;
  constructor(
    @Inject(ProductDataTableController)
    private tableController: ProductDataTableController,
  ) { }

  public ngOnInit(): void {
    this.column_sort = {
      column: 'id',
      direction: '',
    };
  }

  public get displayedColumns(): string[] {
    return this.tableController.displayedColumns;
  }

  public get isLoading(): BehaviorSubject<boolean> {
    return this.tableController.requestService.loading;
  }

  public get dataSource(): BehaviorSubject<PagedResult<Product>> {
    return this.tableController.requestService.data;
  }

  public get paginatorVm(): IPaginatorVm {
    return this.tableController.paginatorVm;
  }

  public pageChange(pageIndex: any): void {
    this.pageIndex = Math.max(pageIndex, 0);

    this.tableController.input_events.paginationChange.next({
      page: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  public pageSizeChange(pageSize: string): void {
    this.pageSize = parseInt(pageSize, 10);
    this.tableController.input_events.paginationChange.next({
      page: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  public searchForProducts(): void {
    this.tableController.input_events.searchChange.next({
      name: this.search,
    });
  }

  public sortChanged(column: string): void {
    if (column !== this.column_sort.column) {
      return;
    }

    switch (this.column_sort.direction ) {
      case '':
        this.column_sort.direction = 'asc';
        break;
      case 'asc':
        this.column_sort.direction = 'desc';
        break;
      case 'desc':
        this.column_sort.direction = '';
        break;
    }
    this.tableController.input_events.sortChange.next(this.column_sort);
  }
}
