import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebFrameAppComponent } from './web-frame-app.component';


/**
 * TODO
 */
@NgModule({
  declarations: [
    WebFrameAppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebFrameAppComponent]
})
export class WebFrameAppModule { }
