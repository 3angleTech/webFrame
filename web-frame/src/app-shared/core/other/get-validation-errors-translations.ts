/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ValidationErrors } from '@angular/forms';

/**
 * Returns a list of error phrases that need to go through the translate service.
 */
export function getValidationErrorsTranslations(errors: ValidationErrors | null | undefined, namespace: string): string[] | undefined {
  if (!errors) {
    return  undefined;
  }

  const errorPhrases: string[] = [];
  Object.getOwnPropertyNames(errors).forEach((currentErrorKey: string) => {
    const currentErrorNamespace: string = `${namespace}.${currentErrorKey}`;
    if (typeof errors[currentErrorKey] === 'object') {
      const childErrors: string[] = getValidationErrorsTranslations(errors[currentErrorKey], currentErrorNamespace);
      errorPhrases.push(...childErrors);
    } else {
      errorPhrases.push(currentErrorNamespace);
    }
  });

  return errorPhrases;
}
