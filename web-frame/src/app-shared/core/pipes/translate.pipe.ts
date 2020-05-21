/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides TranslatePipe.
 */
import { Inject, Pipe, PipeTransform } from '@angular/core';

import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from '../service/translation/translation.service';

@Pipe({
  name: 'translate',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  constructor(
    @Inject(ITranslationService)
    private translationService: ITranslationService,
  ) { }

  public transform(phrase: TranslationPhrase, phraseArgs?: TranslationPhraseArgs): string {
    return this.translationService.translate(phrase, phraseArgs);
  }
}
