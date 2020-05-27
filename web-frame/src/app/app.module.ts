/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from '~app-shared/config';
import { CoreModule } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
    ConfigModule.forRoot(),
    CoreModule.forRoot(),
    SecurityModule.forRoot(),
  ],
})
export class AppModule {
}
