/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Use the `MinimalShellComponent` to provide a structure around application pages that require
 * a minimal amount of structure. E.g.: login or registration pages.
 */
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '~app-shared/core';

import { MinimalShellComponent } from './minimal-shell.component';

const SHELL_DECLARATIONS: Type<unknown>[] = [
  MinimalShellComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CoreModule,
  ],
  exports: [
  ],
  declarations: [
    SHELL_DECLARATIONS,
  ],
  providers: [
  ],
})
export class MinimalShellModule { }
