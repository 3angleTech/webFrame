/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';

import { AccessDeniedError, PageNotFoundError } from '~app-shared/core';

import { SandboxError } from '../../sandbox-error';

export function simplePageErrorTrigger(triggerFakeErrorType: string): never {
  switch (triggerFakeErrorType) {
    case 'AccessDeniedError':
      throw new AccessDeniedError('This is not the error you are looking for.');
    case 'PageNotFoundError':
      throw new PageNotFoundError('This is not the page you are looking for.');
    case 'Mock403':
      throw new HttpErrorResponse({
        error: 'Mock Forbidden',
        status: 403,
        statusText: 'Mock Forbidden Response.',
      });
    case 'Mock404':
      throw new HttpErrorResponse({
        error: 'Mock Not Found',
        status: 404,
        statusText: 'Mock Not Found Response.',
      });
    case 'Mock500':
      throw new HttpErrorResponse({
        error: 'Mock HTTP Error',
        status: 501,
        statusText: 'Mock Internal Server Error Response.',
      });
    default:
      throw new SandboxError('An error was intentionally triggered during a NavigationTransition.');
  }
}
