/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from '~app-shared/config';
import { CoreModule, WebFrameErrorHandlerService } from '~app-shared/core';
import { SecurityModule } from '~app-shared/security';

import { AppComponent } from './app.component';
import { AppErrorHandlerModule } from './error-handler/app-error-handler.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppTranslateModule } from './translate/app-translate.module';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppErrorHandlerModule,
    AppRoutingModule,
    AppTranslateModule,
    ConfigModule.forRoot(),
    CoreModule.forRoot(),
    SecurityModule.forRoot(),
  ],
})
export class AppModule {
  constructor(
    readonly errorHandlerService: WebFrameErrorHandlerService,
  ) {
    this.errorHandlerService.initialize();
  }
}
