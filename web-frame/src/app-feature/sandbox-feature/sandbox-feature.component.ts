/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * The sandbox feature module main component, this component should only provide styles for sandbox pages.
 */
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sandbox-feature',
  styleUrls: ['./sandbox-feature.component.scss'],
  templateUrl: './sandbox-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class SandboxFeatureComponent implements OnInit {
  constructor() {
  }

  public ngOnInit(): void {
  }
}
