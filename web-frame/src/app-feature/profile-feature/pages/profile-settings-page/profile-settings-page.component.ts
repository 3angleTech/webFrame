/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings-page',
  templateUrl: './profile-settings-page.component.html',
  styleUrls: ['./profile-settings-page.component.scss'],
})
export class ProfileSettingsPageComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'PROFILE_FEATURE.PROFILE_SETTINGS_PAGE.PAGE_TITLE';
  }

}
