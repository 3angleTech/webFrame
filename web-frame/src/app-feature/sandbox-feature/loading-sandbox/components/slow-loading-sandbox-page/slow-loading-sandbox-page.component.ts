/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slow-loading-sandbox-page',
  styleUrls: ['./slow-loading-sandbox-page.component.scss'],
  templateUrl: './slow-loading-sandbox-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlowLoadingSandboxPageComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'Sandbox: Slow loading page';
  }
}
