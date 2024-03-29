/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides routing for account feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousGuard, AuthenticatedGuard } from '~app-shared/security';
import { MinimalShellComponent } from '~app-shell/minimal-shell';

import { AccountFeatureComponent } from './account-feature.component';
import { ConfirmEmailPageComponent } from './pages/confirm-email-page/confirm-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    component: MinimalShellComponent,
    children: [
      {
        path: '',
        component: AccountFeatureComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login',
          },
          {
            path: 'confirm-email',
            component: ConfirmEmailPageComponent,
          },
          {
            path: 'forgot-password',
            component: ForgotPasswordPageComponent,
            canActivate: [
              AnonymousGuard,
            ],
          },
          {
            path: 'reset-password',
            component: ResetPasswordPageComponent,
            canActivate: [
              AnonymousGuard,
            ],
          },
          {
            path: 'login',
            component: LoginPageComponent,
            canActivate: [
              AnonymousGuard,
            ],
          },
          {
            path: 'logout',
            component: LogoutPageComponent,
            canActivate: [
              AuthenticatedGuard,
            ],
          },
          {
            path: 'signup',
            component: SignupPageComponent,
            canActivate: [
              AnonymousGuard,
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountFeatureRoutingModule {
}
