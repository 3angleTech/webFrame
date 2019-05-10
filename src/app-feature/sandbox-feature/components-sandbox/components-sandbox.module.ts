/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DefaultShellModule } from 'app-shell/default-shell';
import { ComponentsSandboxRoutingModule } from './components-sandbox-routing.module';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsSandboxRoutingModule,
    DefaultShellModule,
  ],
  declarations: [DataTablePageComponent],
  exports: [DataTablePageComponent],
})
export class ComponentsSandboxModule { }
