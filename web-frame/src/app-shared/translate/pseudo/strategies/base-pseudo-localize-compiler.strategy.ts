/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import {
  IPseudoLocalizeCompilerStrategy,
  ITranslations,
  Translation,
} from './pseudo-localize-strategy.interface';

export abstract class BasePseudoLocalizeCompilerStrategy implements IPseudoLocalizeCompilerStrategy {
  public abstract compileTranslation(translation: Translation): Translation;

  public compileTranslations(translations: ITranslations): ITranslations {
    const pseudoTranslations: ITranslations = {};
    Object.keys(translations).forEach((key: keyof ITranslations): void => {
      const translationValue: string | ITranslations = translations[key];
      pseudoTranslations[key] = this.isTranslationsObject(translationValue)
        ? this.compileTranslations(translationValue)
        : this.compileTranslation(translationValue);
    });

    return pseudoTranslations;
  }

  protected isInterpolationVariable(textPart: string): boolean {
    return textPart.startsWith('{{') && textPart.endsWith('}}');
  }

  protected isTranslationsObject(value: string | ITranslations): value is ITranslations {
    return typeof value === 'object';
  }

  protected processTextPart(textPart: string): string {
    if (this.isInterpolationVariable(textPart)) {
      return textPart;
    }

    return textPart.split('')
      .map((char: string): string => this.processCharacter(char))
      .join('');
  }

  protected abstract processCharacter(originalChar: string): string;
}
