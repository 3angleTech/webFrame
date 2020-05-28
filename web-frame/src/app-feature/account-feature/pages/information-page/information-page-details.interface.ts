/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { TranslationPhrase } from '~app-shared/translate';

export interface IInformationPageDetails {
  title: TranslationPhrase;
  message?: TranslationPhrase;
  type: 'warning' | 'success';
}
