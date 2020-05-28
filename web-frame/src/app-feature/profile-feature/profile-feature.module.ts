/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the profile feature module.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';
import { DefaultShellModule } from '~app-shell/default-shell';

import { PasswordChangeFormComponent } from './components/password-change-form/password-change-form.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileSettingsPageComponent } from './pages/profile-settings-page/profile-settings-page.component';
import { ProfileFeatureRoutingModule } from './profile-feature-routing.module';
import { ProfileFeatureComponent } from './profile-feature.component';

const FEATURE_COMPONENTS: Type<unknown>[] = [
  PasswordChangeFormComponent,
  ProfileFeatureComponent,
  ProfilePageComponent,
  ProfileSettingsPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    DefaultShellModule,
    SecurityModule,
    ProfileFeatureRoutingModule,
  ],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class ProfileFeatureModule {
}
