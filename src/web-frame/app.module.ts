import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { BasicWithNavigationWebFrameComponent } from './basic-with-navigation/basic-with-navigation-web-frame.component';
import { BasicWebFrameComponent } from './basic/basic-web-frame.component';
import { AccountWebFeatureComponent } from 'src/web-feature/account/account-web-feature.component';
import { ProfileWebFeatureComponent } from 'src/web-feature/profile/profile-web-feature.component';
import { SandboxWebFeatureComponent } from 'src/web-feature/sandbox/sandbox-web-feature.component';
import { LoginPageComponent } from 'src/web-feature/account/pages/login/login-page.component';
import { SignupPageComponent } from 'src/web-feature/account/pages/signup/signup-page.component';
import { LogoutPageComponent } from 'src/web-feature/account/pages/logout/logout-page.component';
import { ForgotPasswordPageComponent } from 'src/web-feature/account/pages/forgot-password/forgot-password-page.component';
import { EmailConfirmationPageComponent } from 'src/web-feature/account/pages/email-confirmation/email-confirmation-page.component';
import { InviteUsersPageComponent } from 'src/web-feature/account/pages/invite-users/invite-users-page.component';
import { AccountNotActivatedPageComponent } from 'src/web-feature/account/pages/account-not-activated/account-not-activated-page.component';
import { ProfileSettingsPageComponent } from 'src/web-feature/profile/pages/profile-settings/profile-settings-page.component';

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
