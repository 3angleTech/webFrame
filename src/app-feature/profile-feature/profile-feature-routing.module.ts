/**
 * Provides routing for profile feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from 'app-shell/default-shell';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileSettingsPageComponent } from './pages/profile-settings-page/profile-settings-page.component';
import { ProfileFeatureComponent } from './profile-feature.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: '',
        component: ProfileFeatureComponent,
        children: [
          {
            path: '',
            component: ProfilePageComponent,
          },
          {
            path: 'settings',
            component: ProfileSettingsPageComponent,
          },
        ],
      }
    ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileFeatureRoutingModule { }
