/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { ExtraOptions, Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingErrorHandlerService } from './app-routing-error-handler.service';

/**
 * NOTE: The DI system is not used to create this service instance because this needs to also work
 * with the appRoutingErrorHandler function.
 */
const ERROR_HANDLER_SERVICE_INSTANCE: AppRoutingErrorHandlerService =
  new AppRoutingErrorHandlerService();

function appRoutingErrorHandler(this: Router, err: unknown): unknown {
  return ERROR_HANDLER_SERVICE_INSTANCE.handleNavigationError(this, err);
}

/**
 * NOTE: The routes are registered by AppFeaturesInitializerService.initialize().
 *
 * @see AppFeaturesInitializerService.registerAvailableRoutes()
 * @see AVAILABLE_FEATURE_MODULES
 */
const NO_ROUTES: Routes = [];

const ROUTER_CONFIG: ExtraOptions = {
  errorHandler: appRoutingErrorHandler,
  initialNavigation: 'disabled',
  onSameUrlNavigation: 'reload',
  paramsInheritanceStrategy: 'always',
  urlUpdateStrategy: 'eager',
  useHash: true,
};

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(NO_ROUTES, ROUTER_CONFIG),
  ],
})
export class AppRoutingModule {
}
