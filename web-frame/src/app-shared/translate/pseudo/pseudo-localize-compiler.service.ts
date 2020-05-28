/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import { Injectable } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';

import { getLanguageMetadata } from '../interfaces/language-metadata.interface';
import { AVAILABLE_LANGUAGES_METADATA } from '../replacements/available-languages-metadata';

import { PseudoElongateCompilerStrategy } from './strategies/pseudo-elongate-compiler.strategy';
import { IPseudoLocalizeCompilerStrategy, ITranslations } from './strategies/pseudo-localize-strategy.interface';
import { PseudoRtlCompilerStrategy } from './strategies/pseudo-rtl-compiler.strategy';

@Injectable()
export class PseudoLocalizeCompilerService implements TranslateCompiler {
  private readonly elongateStrategy: IPseudoLocalizeCompilerStrategy;
  private readonly rtlStrategy: IPseudoLocalizeCompilerStrategy;

  constructor() {
    this.elongateStrategy = new PseudoElongateCompilerStrategy();
    this.rtlStrategy = new PseudoRtlCompilerStrategy();
  }

  public compile(value: string, lang: string): string {
    const pseudoLocalizeStrategy = this.getPseudoLocalizeStrategy(lang);
    if (pseudoLocalizeStrategy) {
      return pseudoLocalizeStrategy.compileTranslation(value);
    }

    return value;
  }

  public compileTranslations(translations: ITranslations, lang: string): ITranslations {
    const pseudoLocalizeStrategy = this.getPseudoLocalizeStrategy(lang);
    if (pseudoLocalizeStrategy) {
      return pseudoLocalizeStrategy.compileTranslations(translations);
    }

    return translations;
  }

  private getPseudoLocalizeStrategy(localeId: string): IPseudoLocalizeCompilerStrategy | undefined {
    const languageMetadata = getLanguageMetadata(AVAILABLE_LANGUAGES_METADATA, localeId);
    if (!languageMetadata || !this.isPseudoLanguage(languageMetadata.localeId)) {
      return undefined;
    }

    return languageMetadata.isRTL ? this.rtlStrategy : this.elongateStrategy;
  }

  private isPseudoLanguage(lang: string): boolean {
    return lang.includes('-PSEUDO');
  }
}
