/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { DataTableController } from '~app-shared/data-table';

import { ProductPaginatedDataRequestService } from './product-paginated-data-request.service';
import { Product } from './product.do';

@Injectable()
export class ProductDataTableController extends DataTableController<Product> {
  constructor(
    @Inject(ProductPaginatedDataRequestService)
    public requestService: ProductPaginatedDataRequestService) {
      super();
      this.bootstrap({
        displayedColumns: ['id', 'name', 'description', 'price'],
        paginatorVm: {
          length: 100,
          pageSize: 3,
          pageSizeOptions: [3, 6, 9, 12],
        },
        requestService: this.requestService,
      });
    }
}
