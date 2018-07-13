/**
 * Profile web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { ProfileSettingsPageComponent } from './pages/profile-settings/profile-settings-page.component';
import { ProfileWebFeatureComponent } from './profile-web-feature.component';


const WEB_FEATURE_COMPONENTS: Type<any>[] = [
  ProfileWebFeatureComponent,
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
export class ProfileWebFeatureModule { }
