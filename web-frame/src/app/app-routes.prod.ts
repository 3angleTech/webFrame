/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Routes for production environments.
 */
import { Routes } from '@angular/router';

/* tslint:disable:no-implicit-dependencies typedef */
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    loadChildren: () => import('app-feature/account-feature/account-feature.module').then(m => m.AccountFeatureModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('app-feature/profile-feature/profile-feature.module').then(m => m.ProfileFeatureModule),
  },
];
