/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from '~app-shell/default-shell';

import { AdminOverviewPageComponent } from './pages/admin-overview-page/admin-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: AdminOverviewPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFeatureRoutingModule {
}
