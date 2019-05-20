/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides routing for account feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from 'app-shell/default-shell';
import { AccountFeatureComponent } from './account-feature.component';
import { ConfirmEmailPageComponent } from './pages/confirm-email-page/confirm-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { InviteUsersPageComponent } from './pages/invite-users-page/invite-users-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // TODO: Check the user account and redirect to the proper page.
    redirectTo: 'login',
  },
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: '',
        component: AccountFeatureComponent,
        children: [
          {
            path: 'confirm-email',
            component: ConfirmEmailPageComponent,
          },
          {
            path: 'forgot-password',
            component: ForgotPasswordPageComponent,
          },
          {
            path: 'invite-users',
            component: InviteUsersPageComponent,
          },
          {
            path: 'login',
            component: LoginPageComponent,
          },
          {
            path: 'logout',
            component: LogoutPageComponent,
          },
          {
            path: 'information/:informationId',
            component: InformationPageComponent,
          },
          {
            path: 'signup',
            component: SignupPageComponent,
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
export class AccountFeatureRoutingModule { }
