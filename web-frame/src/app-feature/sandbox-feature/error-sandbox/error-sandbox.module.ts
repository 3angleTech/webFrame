/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SandboxFeatureModule } from '../sandbox-feature.module';

import { ErrorSandboxRoutingModule } from './error-sandbox-routing.module';
import { ErrorSandboxComponent } from './error-sandbox.component';

@NgModule({
  declarations: [
    ErrorSandboxComponent,
  ],
  imports: [
    CommonModule,
    ErrorSandboxRoutingModule,
    SandboxFeatureModule,
  ],
})
export class ErrorSandboxModule {
}
