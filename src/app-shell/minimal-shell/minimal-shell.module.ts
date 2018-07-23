/**
 * Use the `MinimalShellComponent` to provide a structure around application pages that require
 * a minimal amount of structure. E.g.: login or registration pages.
 */
import { NgModule, Type } from '@angular/core';
import { MinimalShellComponent } from './minimal-shell.component';


const SHARED_DECLARATIONS: Type<any>[] = [
  MinimalShellComponent,
];

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [
    SHARED_DECLARATIONS,
  ],
  providers: [],
})
export class MinimalShellModule { }
