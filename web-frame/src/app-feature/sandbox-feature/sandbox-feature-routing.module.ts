/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides routing for sandbox feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from '~app-shell/default-shell';

import { SandboxOverviewComponent } from './pages/sandbox-overview/sandbox-overview.component';
import { SandboxFeatureComponent } from './sandbox-feature.component';

/* tslint:disable:typedef */
const routes: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: '',
        component: SandboxFeatureComponent,
        children: [
          {
            path: '',
            pathMatch: 'exact',
            redirectTo: 'overview',
          },
          {
            path: 'overview',
            component: SandboxOverviewComponent,
          },
          {
            path: 'components',
            loadChildren: () => import('./components-sandbox/components-sandbox.module').then(m => m.ComponentsSandboxModule),
          },
          {
            path: 'error-handling',
            loadChildren: () => import('./error-sandbox/error-sandbox.module').then(m => m.ErrorSandboxModule),
          },
          {
            path: 'loading',
            loadChildren: () => import('./loading-sandbox/loading-sandbox.module').then(m => m.LoadingSandboxModule),
          },
        ],
      },
    ],
  },
  {
    path: 'placeholder',
    loadChildren: () => import('./placeholder-sandbox/placeholder-sandbox.module').then(m => m.PlaceholderSandboxModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxFeatureRoutingModule { }
