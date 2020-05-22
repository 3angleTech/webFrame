/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { LoadChildrenCallback } from '@angular/router';

/* tslint:disable:typedef */
export const AVAILABLE_FEATURE_MODULES: Record<string, LoadChildrenCallback> = {
  account: () => import('~app-feature/account-feature').then(m => m.default),
  profile: () => import('~app-feature/profile-feature').then(m => m.default),
  sandbox: () => import('~app-feature/sandbox-feature').then(m => m.default),
};
