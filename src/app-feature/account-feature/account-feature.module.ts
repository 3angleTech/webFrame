/**
 * Account web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { AccountFeatureComponent } from './account-feature.component';
import { AccountNotActivatedPageComponent } from './pages/account-not-activated/account-not-activated-page.component';
import { EmailConfirmationPageComponent } from './pages/email-confirmation/email-confirmation-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password/forgot-password-page.component';
import { InviteUsersPageComponent } from './pages/invite-users/invite-users-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { LogoutPageComponent } from './pages/logout/logout-page.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';


const WEB_FEATURE_COMPONENTS: Type<any>[] = [
  AccountFeatureComponent,
  AccountNotActivatedPageComponent,
  EmailConfirmationPageComponent,
  ForgotPasswordPageComponent,
  InviteUsersPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  SignupPageComponent,
];

@NgModule({
  declarations: [
    WEB_FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class AccountFeatureModule { }
