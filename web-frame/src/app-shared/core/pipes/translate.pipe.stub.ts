/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides TranslatePipeStub.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { createTranslationServiceStub } from 'app-shared/test-utils';
import {
  ITranslationService,
  TranslationPhrase,
  TranslationPhraseArgs,
} from '../service/translation/translation.service';

const translateServiceStub: ITranslationService = createTranslationServiceStub();

@Pipe({
  // tslint:disable-next-line:pipe-prefix
  name: 'translate',
  pure: true,
})
export class TranslatePipeStub implements PipeTransform {
  public transform(phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string {
    return translateServiceStub.translate(phrase, phraseArgs);
  }
}
