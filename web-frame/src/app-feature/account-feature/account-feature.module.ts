/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the account feature module.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';
import { DefaultShellModule } from '~app-shell/default-shell';

import { AccountFeatureRoutingModule } from './account-feature-routing.module';
import { AccountFeatureComponent } from './account-feature.component';
import { ConfirmEmailPageComponent } from './pages/confirm-email-page/confirm-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { InviteUsersPageComponent } from './pages/invite-users-page/invite-users-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const FEATURE_COMPONENTS: Type<unknown>[] = [
  AccountFeatureComponent,
  ConfirmEmailPageComponent,
  ForgotPasswordPageComponent,
  InformationPageComponent,
  InviteUsersPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  ResetPasswordPageComponent,
  SignupPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SecurityModule,
    DefaultShellModule,
    AccountFeatureRoutingModule,
  ],
  exports: [],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class AccountFeatureModule { }
