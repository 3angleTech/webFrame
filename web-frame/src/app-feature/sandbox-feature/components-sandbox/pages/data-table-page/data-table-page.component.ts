/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PagedResult } from '~app-shared/core';
import { DataTableSortQuery, IPaginatorVm } from '~app-shared/data-table';

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
  // eslint-disable-next-line no-magic-numbers
  public pageSize: number = 3;

  public sortQuery: DataTableSortQuery;
  constructor(
    @Inject(ProductDataTableController)
    private readonly tableController: ProductDataTableController,
  ) { }

  public ngOnInit(): void {
    this.sortQuery = {
      column: 'id',
      direction: undefined,
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

  public pageChange(pageIndex: number): void {
    this.pageIndex = Math.max(pageIndex, 0);

    this.tableController.inputEvents.paginationChange.next({
      page: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  public pageSizeChange(pageSize: string): void {
    this.pageSize = parseInt(pageSize, 10);
    this.tableController.inputEvents.paginationChange.next({
      page: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  public searchForProducts(): void {
    this.tableController.inputEvents.searchChange.next({
      name: this.search,
    });
  }

  public sortChanged(column: string): void {
    if (column !== this.sortQuery.column) {
      return;
    }

    switch (this.sortQuery.direction) {
      case undefined:
        this.sortQuery.direction = 'asc';
        break;
      case 'asc':
        this.sortQuery.direction = 'desc';
        break;
      case 'desc':
        this.sortQuery.direction = undefined;
        break;
    }
    this.tableController.inputEvents.sortChange.next(this.sortQuery);
  }

  public getPageTitle(): string {
    return 'Sandbox: Data Table';
  }
}
