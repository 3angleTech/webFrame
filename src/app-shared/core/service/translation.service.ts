/**
 * Provides TranslationService.
 */
import { Injectable } from '@angular/core';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from '../interface/translation.service';


@Injectable()
export class TranslationService implements ITranslationService {
  public translate(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    // TODO: Implement TranslationService.
    return phrase;
  }
}
