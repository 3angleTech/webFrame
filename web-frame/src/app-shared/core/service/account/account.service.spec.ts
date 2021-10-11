/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { inject, TestBed } from '@angular/core/testing';

import { IJsonConverterService } from '../json-converter/json-converter.service';
import { IStorageService } from '../storage/storage.service';
import { IWebRequestService } from '../web-request/web-request.interface';

import { AccountService } from './account.service';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        {
          provide: IJsonConverterService,
          useValue: undefined,
        },
        {
          provide: IStorageService,
          useValue: undefined,
        },
        {
          provide: IWebRequestService,
          useValue: undefined,
        },
      ],
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
