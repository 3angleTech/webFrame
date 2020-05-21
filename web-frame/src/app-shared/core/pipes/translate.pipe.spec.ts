/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Tests for TranslatePipe.
 */
import { async, inject, TestBed } from '@angular/core/testing';
import { createTranslationServiceStub } from 'app-shared/test-utils';

import { ITranslationService } from '../service/translation/translation.service';

import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslatePipe,
        {
          provide: ITranslationService,
          useValue: createTranslationServiceStub(),
        },
      ],
    }).compileComponents();
  }));

  it('create an instance', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe).toBeTruthy();
    },
  ));

  it('handle empty phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform(undefined)).toBe('');
      // tslint:disable-next-line:no-null-keyword
      expect(translatePipe.transform(null)).toBe('');
      expect(translatePipe.transform('')).toBe('');
    },
  ));

  it('handle unknown phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform('0')).toBe('0');
      expect(translatePipe.transform('{}')).toBe('{}');
      expect(translatePipe.transform('100,000.00')).toBe('100,000.00');
      expect(translatePipe.transform('Test Phrase')).toBe('Test Phrase');
      expect(translatePipe.transform('test.12.123')).toBe('test.12.123');
      // tslint:disable-next-line:no-magic-numbers
      const randomNumber = Math.floor(Math.random() * 10000);
      const unknownText = `unknown.translation.phrase${randomNumber}`;
      expect(translatePipe.transform(unknownText)).toBe(unknownText);
    },
  ));

  it('translates known phrases', inject([TranslatePipe, ITranslationService],
    (translatePipe: TranslatePipe) => {
      expect(translatePipe.transform('hello')).toBe('Hello!');
      expect(translatePipe.transform('hello.world')).toBe('Hello, World!');
      expect(translatePipe.transform('abc.def.ghi')).toBe('ABC DEF GHI');
      expect(translatePipe.transform('test.12')).toBe('Test 12');

      // tslint:disable-next-line:no-magic-numbers
      const randomNumber = Math.floor(Math.random() * 10000);
      const args = { randomNumber: `${ randomNumber }` };
      expect(translatePipe.transform('test.random.number', args)).toBe(`Test random number: ${randomNumber}`);
    },
  ));
});
