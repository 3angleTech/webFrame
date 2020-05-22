/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the application's main module.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule } from '@angular/router';
import { ConfigModule } from '~app-shared/config';
import { CoreModule } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';

import { APP_ROUTES } from './app-routes';
import { AppComponent } from './app.component';

const ROUTER_CONFIG: ExtraOptions = {
  initialNavigation: 'disabled',
  onSameUrlNavigation: 'reload',
  paramsInheritanceStrategy: 'always',
  relativeLinkResolution: 'corrected',
  urlUpdateStrategy: 'eager',
  useHash: true,
};

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
    RouterModule.forRoot(APP_ROUTES, ROUTER_CONFIG),
    CoreModule.forRoot(),
    SecurityModule.forRoot(),
  ],
})
export class AppModule {
}
