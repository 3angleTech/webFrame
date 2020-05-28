/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import { Provider } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';

import { PseudoLocalizeCompilerService } from './pseudo-localize-compiler.service';

export const PSEUDO_LOCALIZE_COMPILER_PROVIDER: Provider = {
  provide: TranslateCompiler,
  useClass: PseudoLocalizeCompilerService,
};
