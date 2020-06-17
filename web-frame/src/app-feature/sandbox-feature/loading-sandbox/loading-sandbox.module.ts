/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingSandboxRoutingModule } from './loading-sandbox-routing.module';
import { SlowLoadingCanActivateGuard } from './pages/slow-loading-sandbox-page/slow-loading-can-activate.guard';
import { SlowLoadingSandboxPageComponent } from './pages/slow-loading-sandbox-page/slow-loading-sandbox-page.component';
import { SlowLoadingResolver } from './pages/slow-loading-sandbox-page/slow-loading.resolver';

@NgModule({
  declarations: [
    SlowLoadingSandboxPageComponent,
  ],
  imports: [
    CommonModule,
    LoadingSandboxRoutingModule,
  ],
  providers: [
    SlowLoadingCanActivateGuard,
    SlowLoadingResolver,
  ],
})
export class LoadingSandboxModule {
}
