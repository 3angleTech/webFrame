/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Use the `DefaultShellComponent` to provide a structure around most application pages that
 * require a consistent structure (page headers, navigation menu).
 *
 * E.g.: dashboard or profile edit pages.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DefaultShellComponent } from './default-shell.component';

const SHELL_DECLARATIONS: Type<unknown>[] = [
  NavigationMenuComponent,
  DefaultShellComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
  ],
  declarations: [
    SHELL_DECLARATIONS,
  ],
  providers: [
  ],
})
export class DefaultShellModule { }
