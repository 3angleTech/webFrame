/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import { TranslateModuleConfig } from '@ngx-translate/core';

import { TRANSLATE_LOADER_PROVIDER } from '../other/translate-loader.provider';

export const NGX_TRANSLATE_CONFIG: TranslateModuleConfig = {
  loader: TRANSLATE_LOADER_PROVIDER,
};
