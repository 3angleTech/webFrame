/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

 // tslint:disable:no-implicit-dependencies

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
