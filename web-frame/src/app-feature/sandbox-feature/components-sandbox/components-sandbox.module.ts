/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComponentsSandboxRoutingModule } from './components-sandbox-routing.module';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

@NgModule({
  declarations: [
    DataTablePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsSandboxRoutingModule,
  ],
})
export class ComponentsSandboxModule {
}
