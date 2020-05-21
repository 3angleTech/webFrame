/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides routing for sandbox feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from '~app-shell/default-shell';

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
      },
    ],
  },
  // Other lazy-loaded sandbox sub-modules.
  {
    path: 'components',
    loadChildren: () => import('./components-sandbox/components-sandbox.module').then(m => m.ComponentsSandboxModule),
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
