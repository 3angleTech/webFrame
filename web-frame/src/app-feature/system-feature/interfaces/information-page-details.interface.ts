/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { TranslationPhrase } from '~app-shared/translate';

export interface IInformationPageDetails {
  title: TranslationPhrase;
  message?: TranslationPhrase;
  type: 'success' | 'warning' | 'danger';
  buttonText?: TranslationPhrase;
}
