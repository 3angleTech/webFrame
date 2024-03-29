/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Observable } from 'rxjs';

import {
  ILanguageMetadata,
  ITranslationService,
  TranslationPhrase,
  TranslationPhraseArgs,
} from '~app-shared/translate';

/**
 * Provides a stub for testing components that depend on the translation service.
 *
 * To use it, just add it to the list of providers for the TestBed:
 *
 * @example
 * {
 *   provide: ITranslationService,
 *   useValue: createTranslationServiceStub(),
 * }
 */
export function createTranslationServiceStub(): ITranslationService {
  // Create a fake TranslationService object with a `translate()` spy.
  return {
    changeLanguage: function (languageMetadata: ILanguageMetadata): Observable<void> {
      return undefined;
    },
    getCurrentLanguageMetadata: function (): ILanguageMetadata {
      return undefined;
    },
    translate: function (phrase: TranslationPhrase, phraseArgs?: TranslationPhraseArgs): string {
      if (phrase === undefined || phrase === null) {
        return '';
      }

      // Provide a list of known translations.
      switch (phrase) {
        case 'hello':
          return 'Hello!';
        case 'hello.world':
          return 'Hello, World!';
        case 'abc.def.ghi':
          return 'ABC DEF GHI';
        case 'test.12':
          return 'Test 12';
        case 'test.random.number':
          return `Test random number: ${phraseArgs.randomNumber}`;
      }

      return phrase;
    },
  };
}
