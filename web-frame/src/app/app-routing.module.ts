/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// NOTE: The routes are registered by AppFeaturesInitializerService.initialize().
const ROUTES: Routes = [];

const ROUTER_CONFIG: ExtraOptions = {
  initialNavigation: 'disabled',
  onSameUrlNavigation: 'reload',
  paramsInheritanceStrategy: 'always',
  relativeLinkResolution: 'corrected',
  urlUpdateStrategy: 'eager',
  useHash: true,
};

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(ROUTES, ROUTER_CONFIG),
  ],
})
export class AppRoutingModule {
}
