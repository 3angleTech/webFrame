/**
 * @file This file should never be imported directly, see the fileReplacements.
 *
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:typedef */
import { LoadChildrenCallback } from '@angular/router';

/**
 * Available features keyed by the feature path prefix and a LoadChildrenCallback
 * for Angular to create the lazy-modules.
 */
export const AVAILABLE_FEATURE_MODULES: Record<string, LoadChildrenCallback> = {
  account: () => import('~app-feature/account-feature').then(m => m.default),
  profile: () => import('~app-feature/profile-feature').then(m => m.default),
};
