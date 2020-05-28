/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import {
  ModuleWithProviders,
  NgModule,
  PipeTransform,
  Type,
} from '@angular/core';
import { TranslateModule as UpstreamTranslateModule } from '@ngx-translate/core';

import { TRANSLATE_INITIALIZER_PROVIDERS } from './initializers/translate-initializer.factory';
import {
  ILanguageMetadata,
  LANGUAGE_METADATA_LIST,
} from './interfaces/language-metadata.interface';
import { DEFAULT_LANGUAGE } from './other/default-language.token';
import {
  ITranslationService,
  TranslationService,
} from './services/translation.service';

export interface ITranslateModuleDependencies {
  DEFAULT_LANGUAGE?: string;
  LANGUAGE_METADATA_LIST: ILanguageMetadata[];
}

const SHARED_PIPES: Type<PipeTransform>[] = [];

@NgModule({
  declarations: [
    SHARED_PIPES,
  ],
  exports: [
    SHARED_PIPES,
    UpstreamTranslateModule,
  ],
  imports: [
    UpstreamTranslateModule,
  ],
})
export class TranslateModule {
  public static forRoot(
    dependencies: ITranslateModuleDependencies,
  ): ModuleWithProviders<TranslateModule> {
    return {
      ngModule: TranslateModule,
      providers: [
        TRANSLATE_INITIALIZER_PROVIDERS,
        SHARED_PIPES,
        {
          provide: DEFAULT_LANGUAGE,
          useValue: dependencies.DEFAULT_LANGUAGE,
        },
        {
          provide: LANGUAGE_METADATA_LIST,
          useValue: dependencies.LANGUAGE_METADATA_LIST,
        },
        {
          provide: ITranslationService,
          useClass: TranslationService,
        },
      ],
    };
  }
}
