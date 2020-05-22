/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ILanguageMetadata } from '../interfaces/language-metadata.interface';

export enum AppLocaleId {
  English = 'en',
}

export const AVAILABLE_LANGUAGES_METADATA: ILanguageMetadata<AppLocaleId>[] = [
  {
    localeId: AppLocaleId.English,
    name: 'English',
    isRTL: false,
  },
];
