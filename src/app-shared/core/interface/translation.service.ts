/**
 * Provides types for the translation service.
 */
import { InjectionToken } from '@angular/core';

export type TranslationPhrase = string;

export interface TranslationPhraseArgs {
  [key: string]: string | TranslationPhraseArgs;
}

export interface ITranslationService {
  translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string;
}
export const ITranslationService = new InjectionToken('ITranslationService');
