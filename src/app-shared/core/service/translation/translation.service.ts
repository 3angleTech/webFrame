/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Injectable, InjectionToken } from '@angular/core';

export type TranslationPhrase = string;

export interface TranslationPhraseArgs {
  [key: string]: string | TranslationPhraseArgs;
}

export interface ITranslationService {
  translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string;
}
export const ITranslationService = new InjectionToken('ITranslationService');

@Injectable()
export class TranslationService implements ITranslationService {
  public translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    // TODO: Implement TranslationService.
    return phrase;
  }
}
