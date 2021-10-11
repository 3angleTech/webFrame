/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { TranslateModuleConfig } from '@ngx-translate/core';

import { TRANSLATE_LOADER_PROVIDER } from '../other/translate-loader.provider';
import { PSEUDO_LOCALIZE_COMPILER_PROVIDER } from '../pseudo/pseudo-localize-compiler.provider';

export const NGX_TRANSLATE_CONFIG: TranslateModuleConfig = {
  compiler: PSEUDO_LOCALIZE_COMPILER_PROVIDER,
  loader: TRANSLATE_LOADER_PROVIDER,
};
