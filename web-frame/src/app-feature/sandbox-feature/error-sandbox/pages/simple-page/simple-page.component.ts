/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-page',
  template: '<h1>Sandbox: Simple page</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimplePageComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

}
