/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Tests for TranslationService.
 */
import { inject, TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService],
    });
  });

  it('should be created', inject([TranslationService], (service: TranslationService) => {
    expect(service).toBeTruthy();
  }));
});
