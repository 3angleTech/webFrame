/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Routes for production environments.
 */
import { Routes } from '@angular/router';

/* tslint:disable:typedef */
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    loadChildren: () => import('~app-feature/account-feature').then(m => m.default),
  },
  {
    path: 'profile',
    loadChildren: () => import('~app-feature/profile-feature').then(m => m.default),
  },
];
