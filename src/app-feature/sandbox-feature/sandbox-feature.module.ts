/**
 * Provides the sandbox feature module.
 */
import { NgModule, Type } from '@angular/core';
import { DefaultShellModule } from 'app-shell/default-shell/default-shell.module';
import { SandboxFeatureRoutingModule } from './sandbox-feature-routing.module';
import { SandboxFeatureComponent } from './sandbox-feature.component';


const FEATURE_COMPONENTS: Type<any>[] = [
  SandboxFeatureComponent,
];

@NgModule({
  imports: [
    SandboxFeatureRoutingModule,
    DefaultShellModule,
  ],
  exports: [],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class SandboxFeatureModule { }
