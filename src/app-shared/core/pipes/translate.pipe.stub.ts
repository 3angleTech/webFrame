/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides TranslatePipeStub.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from 'app-shared/core';
import { createTranslationServiceStub } from 'app-shared/test-utils';

const translateServiceStub: ITranslationService = createTranslationServiceStub();

@Pipe({
  name: 'translate',
})
export class TranslatePipeStub implements PipeTransform {
  public transform(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    return translateServiceStub.translate(phrase, phraseArgs);
  }
}
