/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Route } from '@angular/router';

import { ForceRefreshPageComponent } from '../components/force-refresh-page/force-refresh-page.component';

import { ForceRefreshPageResolver } from './force-refresh-page.resolver';

export const FORCE_REFRESH_PAGE_ROUTE: Route = {
  path: 'force-refresh',
  component: ForceRefreshPageComponent,
  resolve: {
    forceRefresh: ForceRefreshPageResolver,
  },
};
