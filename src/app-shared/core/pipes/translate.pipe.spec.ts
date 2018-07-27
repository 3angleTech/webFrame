/**
 * Tests for TranslatePipe.
 */
import { async, inject, TestBed } from '@angular/core/testing';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from '../interface/translation.service';
import { TranslatePipe } from './translate.pipe';


function createTranslationServiceStub(): ITranslationService {
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


describe('TranslatePipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslatePipe,
        {
          provide: ITranslationService,
          useValue: createTranslationServiceStub(),
        }
      ]
    }).compileComponents();
  }));

  it('create an instance', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe).toBeTruthy();
    }
  ));

  it('handle empty phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform(undefined)).toBe('');
      expect(translatePipe.transform(null)).toBe('');
      expect(translatePipe.transform('')).toBe('');
    }
  ));

  it('handle unknown phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform('0')).toBe('0');
      expect(translatePipe.transform('{}')).toBe('{}');
      expect(translatePipe.transform('100,000.00')).toBe('100,000.00');
      expect(translatePipe.transform('Test Phrase')).toBe('Test Phrase');
      expect(translatePipe.transform('test.12.123')).toBe('test.12.123');
      const randomNumber = Math.floor(Math.random() * 10000);
      const unknownText = `unknown.translation.phrase${randomNumber}`;
      expect(translatePipe.transform(unknownText)).toBe(unknownText);
    }
  ));

  it('translates known phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform('hello')).toBe('Hello!');
      expect(translatePipe.transform('hello.world')).toBe('Hello, World!');
      expect(translatePipe.transform('abc.def.ghi')).toBe('ABC DEF GHI');
      expect(translatePipe.transform('test.12')).toBe('Test 12');

      const randomNumber = Math.floor(Math.random() * 10000);
      const args = { randomNumber: `${ randomNumber }` };
      expect(translatePipe.transform('test.random.number', args)).toBe(`Test random number: ${randomNumber}`);
    }
  ));
});
