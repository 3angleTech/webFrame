/**
 * Routes for production environments.
 */
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
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
    path: 'sandbox',
    loadChildren: 'src/app-feature/sandbox-feature/sandbox-feature.module#SandboxFeatureModule',
  },
];
