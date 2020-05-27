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

import { ENVIRONMENT } from './defaults/environment';
import { IEnvironmentConfig, validateEnvironmentConfig } from './interfaces/environment-config.interface';

@NgModule({
})
export class ConfigModule {
  constructor(
    @Inject(ConfigModule) @Optional() @SkipSelf()
    private existingInstance?: ConfigModule,
  ) {
    if (existingInstance) {
      throw new Error('ConfigModule should only be imported once.');
    }
    validateEnvironmentConfig(ENVIRONMENT);
  }

  public static forRoot(): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
      ],
    };
  }
}
