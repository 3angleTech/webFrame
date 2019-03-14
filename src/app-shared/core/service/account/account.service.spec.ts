/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { inject, TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService],
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
