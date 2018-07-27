/**
 * Provides TranslatePipe.
 */
import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from '../interface/translation.service';


@Pipe({
  name: 'translate'
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
