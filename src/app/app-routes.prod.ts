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
    loadChildren: () => import('src/app-feature/profile-feature/profile-feature.module').then(m => m.ProfileFeatureModule),
  },
];
