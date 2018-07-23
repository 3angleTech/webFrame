/**
 * Sandbox web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { SandboxFeatureComponent } from './sandbox-feature.component';


const FEATURE_COMPONENTS: Type<any>[] = [
  SandboxFeatureComponent,
];

@NgModule({
  declarations: [
    FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class SandboxFeatureModule { }
