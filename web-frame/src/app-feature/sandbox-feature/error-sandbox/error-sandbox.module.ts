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
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { SimplePageGuard } from './pages/simple-page/simple-page.guard';
import { SimplePageResolver } from './pages/simple-page/simple-page.resolver';

@NgModule({
  declarations: [
    ErrorSandboxComponent,
    SimplePageComponent,
  ],
  imports: [
    CommonModule,
    ErrorSandboxRoutingModule,
    SandboxFeatureModule,
  ],
  providers: [
    SimplePageGuard,
    SimplePageResolver,
  ],
})
export class ErrorSandboxModule {
}
