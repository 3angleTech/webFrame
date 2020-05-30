/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandbox-overview',
  styleUrls: ['./sandbox-overview.component.scss'],
  templateUrl: './sandbox-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxOverviewComponent implements OnInit {
  public forceRefreshQueryParams: Record<string, string>;

  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.forceRefreshQueryParams = {
      destination: this.router.url,
    };
  }

  public getPageTitle(): string {
    return 'Sandbox';
  }
}
