/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Routes } from '@angular/router';
import { DefaultShellComponent } from '~app-shell/default-shell';

import { SlowLoadingCanActivateGuard } from './components/slow-loading-sandbox-page/slow-loading-can-activate.guard';
import { SlowLoadingSandboxPageComponent } from './components/slow-loading-sandbox-page/slow-loading-sandbox-page.component';
import { SlowLoadingResolver } from './components/slow-loading-sandbox-page/slow-loading.resolver';

export const LOADING_SANDBOX_ROUTES: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: 'slow-can-activate',
        canActivate: [
          SlowLoadingCanActivateGuard,
        ],
        component: SlowLoadingSandboxPageComponent,
      },
      {
        path: 'slow-resolve',
        resolve: {
          slowLoading: SlowLoadingResolver,
        },
        component: SlowLoadingSandboxPageComponent,
      },
    ],
  },
];
