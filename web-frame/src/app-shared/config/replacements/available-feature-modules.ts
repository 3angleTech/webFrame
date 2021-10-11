/**
 * @file Provides a record of all available features.
 *
 * NOTE: This file will be replaced during the build process.
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { LoadChildrenCallback } from '@angular/router';

/**
 * Available features keyed by the feature path prefix and a LoadChildrenCallback
 * for Angular to create the lazy-modules.
 */
export const AVAILABLE_FEATURE_MODULES: Record<string, LoadChildrenCallback> = {
  account: () => import('~app-feature/account-feature').then(m => m.default),
  admin: () => import('~app-feature/admin-feature').then(m => m.default),
  profile: () => import('~app-feature/profile-feature').then(m => m.default),
  sandbox: () => import('~app-feature/sandbox-feature').then(m => m.default),
  system: () => import('~app-feature/system-feature').then(m => m.default),
};
