/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

export type Translation = string;

export interface ITranslations {
  [key: string]: Translation | ITranslations;
}

export interface IPseudoLocalizeCompilerStrategy {
  compileTranslation(translation: Translation): Translation;
  compileTranslations(translations: ITranslations): ITranslations;
}
