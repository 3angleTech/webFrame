/**
 * Provides routing for placeholder sandbox feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from 'app-shell/default-shell';
import { MinimalShellComponent } from 'app-shell/minimal-shell';
import { PlaceholderSandboxComponent } from './placeholder-sandbox.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: ':title',
        component: PlaceholderSandboxComponent,
      },
    ]
  },
  {
    path: 'minimal',
    component: MinimalShellComponent,
    children: [
      {
        path: ':title',
        component: PlaceholderSandboxComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceholderSandboxRoutingModule { }

export const routedComponents = [PlaceholderSandboxComponent];
