/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the application's main module.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '~app-shared/config';
import { CoreModule } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';

import { APP_ROUTES } from './app-routes';
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
    ConfigModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    CoreModule.forRoot(),
    SecurityModule.forRoot(),
  ],
})
export class AppModule {
}
