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

@NgModule({})
export class ConfigModule {
  constructor(
    @Inject(ConfigModule) @Optional() @SkipSelf()
    private existingInstance?: ConfigModule,
  ) {
    if (existingInstance) {
      throw new Error('ConfigModule should only be imported once.');
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
