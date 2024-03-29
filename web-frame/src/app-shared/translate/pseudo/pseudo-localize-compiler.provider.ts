/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Provider } from '@angular/core';
// eslint-disable-next-line no-restricted-imports
import { TranslateCompiler } from '@ngx-translate/core';

import { PseudoLocalizeCompilerService } from './pseudo-localize-compiler.service';

export const PSEUDO_LOCALIZE_COMPILER_PROVIDER: Provider = {
  provide: TranslateCompiler,
  useClass: PseudoLocalizeCompilerService,
};
