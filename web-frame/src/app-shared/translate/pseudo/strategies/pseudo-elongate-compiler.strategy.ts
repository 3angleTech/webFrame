/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ELONGATE_CHARACTERS } from '../characters/elongate.characters';
import { SIMILAR_PSEUDO_CHARACTERS } from '../characters/similar-pseudo.characters';

import { BasePseudoLocalizeCompilerStrategy } from './base-pseudo-localize-compiler.strategy';
import { Translation } from './pseudo-localize-strategy.interface';

export class PseudoElongateCompilerStrategy extends BasePseudoLocalizeCompilerStrategy {
  private readonly ELONGATE_MAX_COUNT: number = 4;
  private readonly TEXT_PART_REG_EXP: RegExp = /({{\s?[^{}\s]*\s?}})/g;

  public compileTranslation(translation: Translation): Translation {
    const pseudoTranslation: Translation = translation.split(this.TEXT_PART_REG_EXP)
      .map((textPart: string): string => this.processTextPart(textPart))
      .join('');

    return pseudoTranslation;
  }

  protected processCharacter(originalChar: string): string {
    if (ELONGATE_CHARACTERS.includes(originalChar)) {
      return originalChar
        .repeat(this.getRandomRepeatCount())
        .split('')
        .map(currentChar => this.getRandomPseudoCharacter(currentChar))
        .join('');
    }

    return this.getRandomPseudoCharacter(originalChar);
  }

  private getRandomPseudoCharacter(originalChar: string): string {
    const characterGroup: string | undefined = SIMILAR_PSEUDO_CHARACTERS[originalChar];
    if (characterGroup) {
      return characterGroup[Math.round(Math.random() * characterGroup.length - 1)];
    }

    return originalChar;
  }

  private getRandomRepeatCount(): number {
    return Math.ceil(Math.random() * this.ELONGATE_MAX_COUNT);
  }
}
