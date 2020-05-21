/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Routes for development environments.
 */
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from '~app-shared/security';

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
    canActivate: [AuthenticatedGuard],
    loadChildren: () => import('~app-feature/profile-feature').then(m => m.default),
  },
  {
    path: 'sandbox',
    loadChildren: () => import('~app-feature/sandbox-feature').then(m => m.default),
  },
];
