/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-overview-page',
  styleUrls: ['./admin-overview-page.component.scss'],
  templateUrl: './admin-overview-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminOverviewPageComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getTitle(): string {
    return 'ADMIN_FEATURE.OVERVIEW_PAGE.PAGE_TITLE';
  }
}
