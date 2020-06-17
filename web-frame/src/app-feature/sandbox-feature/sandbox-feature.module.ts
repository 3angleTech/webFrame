/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the sandbox feature module.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { DefaultShellModule } from '~app-shell/default-shell';

import { SandboxListComponent } from './components/sandbox-list/sandbox-list.component';
import { SandboxFeatureRoutingModule } from './sandbox-feature-routing.module';
import { SandboxFeatureComponent } from './sandbox-feature.component';

const FEATURE_COMPONENTS: Type<unknown>[] = [
  SandboxFeatureComponent,
];

const SHARED_COMPONENTS: Type<unknown>[] = [
  SandboxListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SandboxFeatureRoutingModule,
    DefaultShellModule,
  ],
  declarations: [
    FEATURE_COMPONENTS,
    SHARED_COMPONENTS,
  ],
  exports: [
    SHARED_COMPONENTS,
  ],
})
export class SandboxFeatureModule {
}
