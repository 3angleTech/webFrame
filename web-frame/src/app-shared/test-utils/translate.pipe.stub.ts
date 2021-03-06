/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:no-any */
import { Pipe, PipeTransform } from '@angular/core';
import { createTranslationServiceStub } from '~app-shared/test-utils';
import { ITranslationService } from '~app-shared/translate';

const translateServiceStub: ITranslationService = createTranslationServiceStub();

@Pipe({
  // tslint:disable-next-line:pipe-prefix
  name: 'translate',
  pure: true,
})
export class TranslatePipeStub implements PipeTransform {
  public transform(phrase: string, phraseArgs: any): string {
    return translateServiceStub.translate(phrase, phraseArgs);
  }
}
