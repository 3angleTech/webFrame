/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the profile feature module.
 */
import { NgModule, Type } from '@angular/core';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileSettingsPageComponent } from './pages/profile-settings-page/profile-settings-page.component';
import { ProfileFeatureRoutingModule } from './profile-feature-routing.module';
import { ProfileFeatureComponent } from './profile-feature.component';

const FEATURE_COMPONENTS: Type<any>[] = [
  ProfileFeatureComponent,
  ProfilePageComponent,
  ProfileSettingsPageComponent,
];

@NgModule({
  imports: [
    ProfileFeatureRoutingModule,
  ],
  exports: [],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class ProfileFeatureModule { }
