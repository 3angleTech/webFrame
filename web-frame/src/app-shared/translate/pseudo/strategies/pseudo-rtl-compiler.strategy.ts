/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { RTL_PSEUDO_CHARACTERS } from '../characters/rtl-pseudo.characters';

import { BasePseudoLocalizeCompilerStrategy } from './base-pseudo-localize-compiler.strategy';
import { Translation } from './pseudo-localize-strategy.interface';

export class PseudoRtlCompilerStrategy extends BasePseudoLocalizeCompilerStrategy {
  private readonly TEXT_PART_REG_EXP: RegExp = /({{\s?[^{}\s]*\s?}})/g;
  private readonly RTL_PREFIX: string = '\u202e';
  private readonly RTL_SUFFIX: string = '\u202c';

  public compileTranslation(translation: Translation): Translation {
    const pseudoTranslation: Translation = translation.split(this.TEXT_PART_REG_EXP)
      .map((textPart: string): string => this.processTextPart(textPart))
      .join('');

    return this.attachRightToLeftMarkers(pseudoTranslation);
  }

  /**
   * Surround words with Unicode formatting marks forcing right-to-left
   * directionality of non-RTL characters. If this string is from the DOM, it
   * should already contain the pre- and postfix.
   */
  private attachRightToLeftMarkers(pseudoTranslation: string): string {
    if (this.hasRightToLeftMarkers(pseudoTranslation)) {
      return pseudoTranslation;
    }

    return this.RTL_PREFIX + pseudoTranslation + this.RTL_SUFFIX;
  }

  protected processCharacter(originalChar: string): string {
    return RTL_PSEUDO_CHARACTERS[originalChar] || originalChar;
  }

  private hasRightToLeftMarkers(pseudoLocalizedText: string): boolean {
    return pseudoLocalizedText.startsWith(this.RTL_PREFIX)
      && pseudoLocalizedText.endsWith(this.RTL_SUFFIX);
  }
}
