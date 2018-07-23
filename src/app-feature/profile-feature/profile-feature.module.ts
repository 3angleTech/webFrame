/**
 * Profile web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { ProfileSettingsPageComponent } from './pages/profile-settings-page/profile-settings-page.component';
import { ProfileFeatureComponent } from './profile-feature.component';


const WEB_FEATURE_COMPONENTS: Type<any>[] = [
  ProfileFeatureComponent,
  ProfileSettingsPageComponent,
];

@NgModule({
  declarations: [
    WEB_FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class ProfileFeatureModule { }
