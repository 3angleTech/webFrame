/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Routes for development environments.
 */
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from 'app-shared/security';

/* tslint:disable:no-implicit-dependencies typedef */
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    loadChildren: () => import('src/app-feature/account-feature/account-feature.module').then(m => m.AccountFeatureModule),
  },
  {
    path: 'profile',
    canActivate: [AuthenticatedGuard],
    loadChildren: () => import('src/app-feature/profile-feature/profile-feature.module').then(m => m.ProfileFeatureModule),
  },
  {
    path: 'sandbox',
    loadChildren: () => import('src/app-feature/sandbox-feature/sandbox-feature.module').then(m => m.SandboxFeatureModule),
  },
];
