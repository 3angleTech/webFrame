/**
 * Provides the account feature module.
 */
import { NgModule, Type } from '@angular/core';
import { DefaultShellModule } from 'app-shell/default-shell';
import { AccountFeatureRoutingModule } from './account-feature-routing.module';
import { AccountFeatureComponent } from './account-feature.component';
import { ConfirmEmailPageComponent } from './pages/confirm-email-page/confirm-email-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { InviteUsersPageComponent } from './pages/invite-users-page/invite-users-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotActivatedPageComponent } from './pages/not-activated-page/not-activated-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


const FEATURE_COMPONENTS: Type<any>[] = [
  AccountFeatureComponent,
  ConfirmEmailPageComponent,
  ForgotPasswordPageComponent,
  InviteUsersPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  NotActivatedPageComponent,
  SignupPageComponent,
];

@NgModule({
  imports: [
    AccountFeatureRoutingModule,
    DefaultShellModule,
  ],
  exports: [],
  declarations: [
    FEATURE_COMPONENTS,
  ],
  providers: [],
})
export class AccountFeatureModule { }
