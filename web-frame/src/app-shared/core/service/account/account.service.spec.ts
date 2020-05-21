/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { inject, TestBed } from '@angular/core/testing';

import { IJsonConverterService } from '../json-converter/json-converter.service';
import { IWebRequestService } from '../web-request/web-request.interface';

import { AccountService } from './account.service';

describe('AccountService', () => {
  // tslint:disable-next-line:no-any variable-name
  const MockDependentService: any = undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        {
          provide: IWebRequestService,
          useValue: MockDependentService,
        },
        {
          provide: IJsonConverterService,
          useValue: MockDependentService,
        },
      ],
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
