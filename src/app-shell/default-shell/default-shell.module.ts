/**
 * Use the `DefaultShellComponent` to provide a structure around most application pages that
 * require a consistent structure (page headers, navigation menu).
 *
 * E.g.: dashboard or profile edit pages.
 */
import { NgModule, Type } from '@angular/core';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DefaultShellComponent } from './default-shell.component';


const SHARED_DECLARATIONS: Type<any>[] = [
  NavigationMenuComponent,
  DefaultShellComponent,
];

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [
    SHARED_DECLARATIONS,
  ],
  providers: [
  ],
})
export class DefaultShellModule { }
