/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

const routes: Routes = [
  {
    path: 'data-table',
    component: DataTablePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsSandboxRoutingModule {
}
