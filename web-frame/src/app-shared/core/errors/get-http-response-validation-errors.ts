/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';

import { isApiErrorProperties } from './api-error';

export function getHttpResponseValidationErrors(response: HttpErrorResponse): ValidationErrors {
  // NOTE: The HttpClient returns a 0 status code when the connection could not be established.
  if (!response.status) {
    return {
      'GENERAL.ERROR.CONNECTION_REFUSED': true,
    };
  }

  if (isApiErrorProperties(response.error)) {
    return {
      [response.error.name]: true,
    };
  }

  return {
    'GENERAL.ERROR.UNKNOWN_NETWORK_ERROR': true,
  };
}
