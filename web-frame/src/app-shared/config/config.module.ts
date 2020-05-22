/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';

import { ENVIRONMENT } from './defaults/environment';

// NOTE: The initialNavigation is delayed until after AppFeaturesInitializerService.
const ROUTES = [];

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
export class ConfigModule {
  constructor(
    @Inject(ConfigModule) @Optional() @SkipSelf()
    private existingInstance?: ConfigModule,
  ) {
    if (existingInstance) {
      throw new Error('ConfigModule should only be imported once.');
    }
    if (!ENVIRONMENT.apiBaseUrl || ENVIRONMENT.apiBaseUrl === '') {
      throw new Error('Invalid environment configuration, apiBaseUrl is missing.');
    }
  }

  public static forRoot(): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
      ],
    };
  }
}
