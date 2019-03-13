/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { inject, TestBed } from '@angular/core/testing';
import { createTranslationServiceStub } from 'app-shared/test-utils';
import { NotificationService } from './notification.service';
import { ITranslationService } from './translation/translation.interface';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        {
          provide: ITranslationService,
          useValue: createTranslationServiceStub,
        },
      ],
    });
  });

  it('should be created', inject([NotificationService], (notificationService: NotificationService) => {
    expect(notificationService).toBeTruthy();
  }));
});
