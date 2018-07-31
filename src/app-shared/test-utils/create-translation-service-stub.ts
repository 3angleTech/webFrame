import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from 'app-shared/core';


/**
 * Provides a stub for testing components that depend on the translation service.
 *
 * To use it, just add it to the list of providers for the TestBed:
 *
 * {
 *   provide: ITranslationService,
 *   useValue: createTranslationServiceStub(),
 * }
 */
export function createTranslationServiceStub(): ITranslationService {
  // Create a fake TranslationService object with a `translate()` spy.
  return {
    translate: (phrase: TranslationPhrase, phraseArgs: TranslationPhraseArgs): string => {
      if (phrase == null) {
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
    }
  };
}
