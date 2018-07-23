/**
 * Sandbox web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { SandboxFeatureComponent } from './sandbox-feature.component';


const WEB_FEATURE_COMPONENTS: Type<any>[] = [
  SandboxFeatureComponent,
];

@NgModule({
  declarations: [
    WEB_FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class SandboxFeatureModule { }
