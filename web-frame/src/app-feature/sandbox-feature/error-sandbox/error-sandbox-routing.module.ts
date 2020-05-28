/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorSandboxComponent } from './error-sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorSandboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorSandboxRoutingModule {
}
