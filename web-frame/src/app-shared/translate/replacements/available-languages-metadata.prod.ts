/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ILanguageMetadata } from '../interfaces/language-metadata.interface';

export enum AppLocaleId {
  English = 'en',
}

export const AVAILABLE_LANGUAGES_METADATA: ILanguageMetadata<AppLocaleId>[] = [
  {
    name: 'English',
    localeId: AppLocaleId.English,
    isRTL: false,
  },
];
