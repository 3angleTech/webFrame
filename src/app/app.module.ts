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
import { CoreModule } from 'app-shared/core';
import { SecurityModule } from 'app-shared/security';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SecurityModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
