/**
 * Account web feature module.
 */
import { NgModule, Type } from '@angular/core';
import { AccountFeatureComponent } from './account-feature.component';
import { EmailConfirmationPageComponent } from './pages/email-confirmation-page/email-confirmation-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { InviteUsersPageComponent } from './pages/invite-users-page/invite-users-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotActivatedPageComponent } from './pages/not-activated-page/not-activated-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


const FEATURE_COMPONENTS: Type<any>[] = [
  AccountFeatureComponent,
  EmailConfirmationPageComponent,
  ForgotPasswordPageComponent,
  InviteUsersPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  NotActivatedPageComponent,
  SignupPageComponent,
];

@NgModule({
  declarations: [
    FEATURE_COMPONENTS,
  ],
  exports: [],
  imports: [],
  providers: [],
})
export class AccountFeatureModule { }
