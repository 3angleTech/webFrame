/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ValidationErrors } from '@angular/forms';
import { startsWith } from 'lodash';

import { KNOWN_ERROR_MESSAGE } from '../errors/known-error-message';

function getCurrentErrorNamespace(errorName: string, namespace: string): string {
  if (KNOWN_ERROR_MESSAGE[errorName]) {
    return KNOWN_ERROR_MESSAGE[errorName];
  } else if (startsWith(errorName, 'GENERAL.ERROR.')) {
    return errorName;
  }

  return `${namespace}.${errorName}`;
}

/**
 * Returns a list of error phrases that need to go through the translate service.
 */
export function getValidationErrorsTranslations(errors: ValidationErrors | null | undefined, namespace: string): string[] | undefined {
  if (!errors) {
    return undefined;
  }

  const errorPhrases: string[] = [];
  Object.getOwnPropertyNames(errors).forEach((currentErrorKey: string) => {
    const currentErrorNamespace: string = getCurrentErrorNamespace(currentErrorKey, namespace);
    if (typeof errors[currentErrorKey] === 'object') {
      const childErrors: string[] = getValidationErrorsTranslations(errors[currentErrorKey], currentErrorNamespace);
      errorPhrases.push(...childErrors);
    } else {
      errorPhrases.push(currentErrorNamespace);
    }
  });

  return errorPhrases;
}
