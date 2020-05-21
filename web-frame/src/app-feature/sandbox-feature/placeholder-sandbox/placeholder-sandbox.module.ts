/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Placeholder sandbox module can be used to provide a placeholder page.
 */
import { NgModule } from '@angular/core';
import { DefaultShellModule } from '~app-shell/default-shell';
import { MinimalShellModule } from '~app-shell/minimal-shell';

import { PlaceholderSandboxRoutingModule } from './placeholder-sandbox-routing.module';
import { PlaceholderSandboxComponent } from './placeholder-sandbox.component';

@NgModule({
  imports: [
    DefaultShellModule,
    MinimalShellModule,
    PlaceholderSandboxRoutingModule,
  ],
  exports: [],
  declarations: [PlaceholderSandboxComponent],
  providers: [],
})
export class PlaceholderSandboxModule { }
