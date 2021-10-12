/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
// eslint-disable-next-line no-restricted-imports
import { TranslateService } from '@ngx-translate/core';
import { find } from 'lodash';
import { Observable } from 'rxjs';

import { ILanguageMetadata, LANGUAGE_METADATA_LIST } from '../interfaces/language-metadata.interface';
import { TranslationPhrase, TranslationPhraseArgs } from '../interfaces/translation-phrase.interface';

export interface ITranslationService {
  changeLanguage(languageMetadata: ILanguageMetadata): Observable<void>;

  getCurrentLanguageMetadata(): ILanguageMetadata;

  translate(
    phrase: TranslationPhrase,
    phraseArgs?: TranslationPhraseArgs,
  ): string;
}

export const ITranslationService = new InjectionToken('ITranslationService');

@Injectable()
export class TranslationService implements ITranslationService {
  constructor(
    @Inject(LANGUAGE_METADATA_LIST)
    private readonly languageMetadataList: ILanguageMetadata[],
    private readonly translateService: TranslateService,
  ) {
  }

  public getCurrentLanguageMetadata(): ILanguageMetadata {
    const languageMetadata = this.getLanguageMetadata(this.translateService.currentLang);
    if (!languageMetadata) {
      throw new Error('Invalid language selected');
    }

    return languageMetadata;
  }

  public translate(phrase: TranslationPhrase, phraseArgs?: TranslationPhraseArgs): string {
    return this.translateService.instant(phrase, phraseArgs);
  }

  public changeLanguage(languageMetadata: ILanguageMetadata): Observable<void> {
    return this.translateService.use(languageMetadata.localeId);
  }

  private getLanguageMetadata(localeId: string): ILanguageMetadata | undefined {
    return find(this.languageMetadataList, { localeId: localeId });
  }
}
