/**
 * Provides the application's main routing module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    loadChildren: 'src/app-feature/account-feature/account-feature.module#AccountFeatureModule',
  },
  {
    path: 'profile',
    loadChildren: 'src/app-feature/profile-feature/profile-feature.module#ProfileFeatureModule',
  },
  {
    // TODO: Remove `SandboxFeatureModule` from production builds.
    path: 'sandbox',
    loadChildren: 'src/app-feature/sandbox-feature/sandbox-feature.module#SandboxFeatureModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
