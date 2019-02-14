/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Injectable } from '@angular/core';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from './translation.interface';

@Injectable()
export class TranslationService implements ITranslationService {
  public translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    // TODO: Implement TranslationService.
    return phrase;
  }
}
