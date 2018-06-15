import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { BasicWithNavigationWebFrameComponent } from './web-frame/basic-with-navigation/basic-with-navigation-web-frame.component';
import { BasicWebFrameComponent } from './web-frame/basic/basic-web-frame.component';
import { AccountWebFeatureComponent } from './web-feature/account/account-web-feature.component';
import { ProfileWebFeatureComponent } from './web-feature/profile/profile-web-feature.component';
import { SandboxWebFeatureComponent } from './web-feature/sandbox/sandbox-web-feature.component';
import { LoginPageComponent } from './web-feature/account/pages/login/login-page.component';
import { SignupPageComponent } from './web-feature/account/pages/signup/signup-page.component';
import { LogoutPageComponent } from './web-feature/account/pages/logout/logout-page.component';
import { ForgotPasswordPageComponent } from './web-feature/account/pages/forgot-password/forgot-password-page.component';
import { EmailConfirmationPageComponent } from './web-feature/account/pages/email-confirmation/email-confirmation-page.component';
import { InviteUsersPageComponent } from './web-feature/account/pages/invite-users/invite-users-page.component';
import { AccountNotActivatedPageComponent } from './web-feature/account/pages/account-not-activated/account-not-activated-page.component';
import { ProfileSettingsPageComponent } from './web-feature/profile/pages/profile-settings/profile-settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicWithNavigationWebFrameComponent,
    BasicWebFrameComponent,
    AccountWebFeatureComponent,
    ProfileWebFeatureComponent,
    SandboxWebFeatureComponent,
    LoginPageComponent,
    SignupPageComponent,
    LogoutPageComponent,
    ForgotPasswordPageComponent,
    EmailConfirmationPageComponent,
    InviteUsersPageComponent,
    AccountNotActivatedPageComponent,
    ProfileSettingsPageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
