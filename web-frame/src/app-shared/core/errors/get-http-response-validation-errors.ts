/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';

import { HttpStatusCode } from '../interfaces/common.interface';

import { isApiError } from './api-error.interface';

export function getHttpResponseValidationErrors(response: HttpErrorResponse): ValidationErrors {
  if (response.status === HttpStatusCode.CONNECTION_REFUSED) {
    return {
      'GENERAL.ERROR.CONNECTION_REFUSED': true,
    };
  }

  if (isApiError(response.error)) {
    return {
      [response.error.name]: true,
    };
  }

  return {
    'GENERAL.ERROR.UNKNOWN_HTTP_ERROR': true,
  };
}
