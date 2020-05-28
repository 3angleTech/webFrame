/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlowLoadingCanActivateGuard } from './pages/slow-loading-sandbox-page/slow-loading-can-activate.guard';
import { SlowLoadingSandboxPageComponent } from './pages/slow-loading-sandbox-page/slow-loading-sandbox-page.component';
import { SlowLoadingResolver } from './pages/slow-loading-sandbox-page/slow-loading.resolver';

export const routes: Routes = [
  {
    path: 'slow-can-activate',
    canActivate: [
      SlowLoadingCanActivateGuard,
    ],
    component: SlowLoadingSandboxPageComponent,
  },
  {
    path: 'slow-resolve',
    resolve: {
      slowLoading: SlowLoadingResolver,
    },
    component: SlowLoadingSandboxPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingSandboxRoutingModule {
}
