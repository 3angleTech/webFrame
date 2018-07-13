import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { BasicWithNavigationWebFrameLayoutComponent } from './layout/basic-with-navigation/basic-with-navigation-web-frame-layout.component';
import { BasicWebFrameLayoutComponent } from './layout/basic/basic-web-frame-layout.component';
import { WebFrameAppComponent } from './web-frame-app.component';


/**
 * TODO
 */
@NgModule({
  declarations: [
    WebFrameAppComponent,
    BasicWebFrameLayoutComponent,
    BasicWithNavigationWebFrameLayoutComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebFrameAppComponent]
})
export class WebFrameAppModule { }
