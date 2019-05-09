/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table-page',
  templateUrl: './data-table-page.component.html',
  styleUrls: ['./data-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTablePageComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
