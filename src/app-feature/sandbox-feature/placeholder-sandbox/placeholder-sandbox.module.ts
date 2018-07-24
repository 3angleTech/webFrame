/**
 * Placeholder sandbox module can be used to provide a placeholder page.
 */
import { NgModule } from '@angular/core';
import { DefaultShellModule } from 'app-shell/default-shell';
import { MinimalShellModule } from 'app-shell/minimal-shell';
import { PlaceholderSandboxComponent } from './placeholder-sandbox.component';
import { PlaceholderSandboxRoutingModule } from './placeholder-sandbox-routing.module';


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
