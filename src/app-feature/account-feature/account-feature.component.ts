/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Account feature module's main component.
 */
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-feature',
  templateUrl: './account-feature.component.html',
  styleUrls: ['./account-feature.component.scss'],
})
export class AccountFeatureComponent implements OnInit {
  @HostBinding('class.app-account-feature')
  public componentClass: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
