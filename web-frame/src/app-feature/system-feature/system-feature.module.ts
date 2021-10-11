/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the system feature module. This module will provide pages that do not fit in any
 * particular module. For example: "Access Denied", "Not Found", "Force Refresh" and similar pages.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '~app-shared/core';
import { TranslateModule } from '~app-shared/translate';

import { ForceRefreshPageResolver } from './other/force-refresh-page.resolver';
import { ForceRefreshPageComponent } from './pages/force-refresh-page/force-refresh-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { SelectLanguagePageComponent } from './pages/select-language-page/select-language-page.component';
import { SystemFeatureRoutingModule } from './system-feature-routing.module';

@NgModule({
  declarations: [
    ForceRefreshPageComponent,
    InformationPageComponent,
    SelectLanguagePageComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    CoreModule,
    SystemFeatureRoutingModule,
  ],
  providers: [
    ForceRefreshPageResolver,
  ],
})
export class SystemFeatureModule {
}
