/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ILanguageMetadata } from '../interfaces/language-metadata.interface';

export enum AppLocaleId {
  English = 'en',
  /**
   * Valid custom language codes for pseudo localization.
   * @see https://www.loc.gov/standards/iso639-2/php/langcodes_name.php?code_ID=367
   */
  PseudoEnglishElo = 'en-PSEUDO-EL',
  PseudoEnglishRtl = 'en-PSEUDO-RTL',
}

export const AVAILABLE_LANGUAGES_METADATA: ILanguageMetadata<AppLocaleId>[] = [
  {
    localeId: AppLocaleId.English,
    name: 'English',
    isRTL: false,
  },
  {
    localeId: AppLocaleId.PseudoEnglishElo,
    name: ' Ꝑṣeệeǜṳdôǒo EEnĝƚiśh',
    isRTL: false,
  },
  {
    localeId: AppLocaleId.PseudoEnglishRtl,
    name: '\u202eԀsǝnpo ᴚ⊥⅂ Ǝuƃʅısɥ\u202c',
    isRTL: true,
  },
];
