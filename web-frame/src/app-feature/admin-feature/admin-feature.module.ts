/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '~app-shared/core';

import { AdminFeatureRoutingModule } from './admin-feature-routing.module';
import { AdminOverviewPageComponent } from './pages/admin-overview-page/admin-overview-page.component';

@NgModule({
  declarations: [
    AdminOverviewPageComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    AdminFeatureRoutingModule,
  ],
})
export class AdminFeatureModule {
}
