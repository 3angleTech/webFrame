/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides routing for account feature module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimalShellComponent } from '~app-shell/minimal-shell';

import { ForceRefreshPageResolver } from './other/force-refresh-page.resolver';
import { ForceRefreshPageComponent } from './pages/force-refresh-page/force-refresh-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { SelectLanguagePageComponent } from './pages/select-language-page/select-language-page.component';

const FEATURE_ROUTES: Routes = [
  {
    path: '',
    component: MinimalShellComponent,
    children: [
      {
        path: 'information/:informationId',
        component: InformationPageComponent,
      },
      {
        path: 'select-language',
        component: SelectLanguagePageComponent,
      },
    ],
  },
  {
    path: 'force-refresh',
    component: ForceRefreshPageComponent,
    resolve: {
      forceRefresh: ForceRefreshPageResolver,
    },
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(FEATURE_ROUTES) ],
})
export class SystemFeatureRoutingModule {
}
