/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Profile feature module's main component.
 */
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-feature',
  templateUrl: './profile-feature.component.html',
  styleUrls: ['./profile-feature.component.scss'],
})
export class ProfileFeatureComponent implements OnInit {
  @HostBinding('class.app-profile-feature')
  public componentClass: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }
}
