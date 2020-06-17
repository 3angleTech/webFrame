/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorSandboxComponent } from './error-sandbox.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { SimplePageGuard } from './pages/simple-page/simple-page.guard';
import { SimplePageResolver } from './pages/simple-page/simple-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: ErrorSandboxComponent,
  },
  {
    path: 'resolver/:triggerFakeErrorType',
    resolve: [
      SimplePageResolver,
    ],
    component: SimplePageComponent,
  },
  {
    path: 'can-activate/:triggerFakeErrorType',
    canActivate: [
      SimplePageGuard,
    ],
    component: SimplePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorSandboxRoutingModule {
}
