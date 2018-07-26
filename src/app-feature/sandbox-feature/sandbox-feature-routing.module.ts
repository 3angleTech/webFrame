/**
 * Provides routing for sandbox feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from 'app-shell/default-shell/default-shell.component';
import { SandboxFeatureComponent } from './sandbox-feature.component';


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
    path: 'placeholder',
    loadChildren: './placeholder-sandbox/placeholder-sandbox.module#PlaceholderSandboxModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxFeatureRoutingModule { }