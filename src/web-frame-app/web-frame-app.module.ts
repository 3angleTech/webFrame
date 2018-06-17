import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebFrameAppComponent } from './web-frame-app.component';
import { BasicWebFrameLayoutComponent } from './layout/basic/basic-web-frame-layout.component';
// tslint:disable-next-line:max-line-length
import { BasicWithNavigationWebFrameLayoutComponent } from './layout/basic-with-navigation/basic-with-navigation-web-frame-layout.component';
// tslint:disable-next-line:max-line-length
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
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    WebFrameAppComponent,
    BasicWebFrameLayoutComponent,
    BasicWithNavigationWebFrameLayoutComponent,
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
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebFrameAppComponent]
})
export class WebFrameAppModule { }
