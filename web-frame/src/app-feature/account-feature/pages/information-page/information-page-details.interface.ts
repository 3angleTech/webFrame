/**
 * @license
 * Copyright (c) 2019 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { TranslationPhrase } from '~app-shared/core';

export interface IInformationPageDetails {
  title: TranslationPhrase;
  message?: TranslationPhrase;
  type: 'warning' | 'success';
}
