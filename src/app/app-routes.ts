/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Routes for production environments.
 */
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from 'app-shared/security/guards/authenticated.guard';

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
    canActivate: [AuthenticatedGuard],
    loadChildren: 'src/app-feature/profile-feature/profile-feature.module#ProfileFeatureModule',
  },
  {
    path: 'sandbox',
    loadChildren: 'src/app-feature/sandbox-feature/sandbox-feature.module#SandboxFeatureModule',
  },
];
