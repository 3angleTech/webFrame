/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the sandbox feature module.
 */
import { NgModule, Type } from '@angular/core';
import { DefaultShellModule } from '~app-shell/default-shell';

import { SandboxFeatureRoutingModule } from './sandbox-feature-routing.module';
import { SandboxFeatureComponent } from './sandbox-feature.component';

const FEATURE_COMPONENTS: Type<unknown>[] = [
  SandboxFeatureComponent,
];

@NgModule({
  imports: [
    SandboxFeatureRoutingModule,
    DefaultShellModule,
  ],
  exports: [],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class SandboxFeatureModule { }
