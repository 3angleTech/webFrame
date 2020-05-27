/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultShellModule } from '~app-shell/default-shell';

import { SlowLoadingCanActivateGuard } from './components/slow-loading-sandbox-page/slow-loading-can-activate.guard';
import { SlowLoadingResolveGuard } from './components/slow-loading-sandbox-page/slow-loading-resolve.guard';
import { SlowLoadingSandboxPageComponent } from './components/slow-loading-sandbox-page/slow-loading-sandbox-page.component';
import { LOADING_SANDBOX_ROUTES } from './loading-sandbox.routes';

@NgModule({
  declarations: [
    SlowLoadingSandboxPageComponent,
  ],
  imports: [
    CommonModule,
    DefaultShellModule,
    RouterModule.forChild(LOADING_SANDBOX_ROUTES),
  ],
  providers: [
    SlowLoadingCanActivateGuard,
    SlowLoadingResolveGuard,
  ],
})
export class LoadingSandboxModule {
}