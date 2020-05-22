/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import { Injectable, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {
  TranslationPhrase,
  TranslationPhraseArgs,
} from '../interfaces/translation-phrase.interface';

export interface ITranslationService {
  translate(
    phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string;
}

// tslint:disable-next-line:variable-name
export const ITranslationService = new InjectionToken('ITranslationService');

@Injectable()
export class TranslationService implements ITranslationService {
  constructor(
    private translateService: TranslateService,
  ) {
  }

  public translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    return this.translateService.instant(phrase, phraseArgs);
  }
}
