import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { BasicWithNavigationWebFrameComponent } from './web-frame/basic-with-navigation/basic-with-navigation-web-frame.component';
import { BasicWebFrameComponent } from './web-frame/basic/basic-web-frame.component';
import { AccountWebFeatureComponent } from './web-feature/account/account-web-feature.component';
import { ProfileWebFeatureComponent } from './web-feature/profile/profile-web-feature.component';
import { SandboxWebFeatureComponent } from './web-feature/sandbox/sandbox-web-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicWithNavigationWebFrameComponent,
    BasicWebFrameComponent,
    AccountWebFeatureComponent,
    ProfileWebFeatureComponent,
    SandboxWebFeatureComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
