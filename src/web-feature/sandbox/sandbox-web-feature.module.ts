/**
 * Sandbox web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { SandboxWebFeatureComponent } from './sandbox-web-feature.component';


const WEB_FEATURE_COMPONENTS: Type<any>[] = [
  SandboxWebFeatureComponent,
];

@NgModule({
  declarations: [
    WEB_FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class SandboxWebFeatureModule { }
