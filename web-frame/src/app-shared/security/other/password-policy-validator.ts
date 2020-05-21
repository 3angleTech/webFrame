/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides a validator for password input fields.
 */
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { isEmpty, isNull } from 'lodash';

export function passwordPolicyValidator(control: AbstractControl): ValidationErrors | null {
  const newPassword: string = control.value;
  const validationErrors: ValidationErrors = { passwordPolicy: {} };

  // Don't validate empty values to allow optional controls.
  if (isEmpty(newPassword)) {
    return null;
  }

  // Password MUST have at least one lowercase letter.
  const lowerCaseMatch = newPassword.match(/[a-z]/);
  if (isNull(lowerCaseMatch) || lowerCaseMatch.length < 1) {
    validationErrors.passwordPolicy.lowerCase = true;
  }

  // Password MUST have at least one uppercase letter.
  const upperCaseMatch = newPassword.match(/[A-Z]/);
  if (isNull(upperCaseMatch) || upperCaseMatch.length < 1) {
    validationErrors.passwordPolicy.upperCase = true;
  }

  // Password MUST have at least one digit.
  const digitMatch = newPassword.match(/[0-9]/);
  if (isNull(digitMatch) || digitMatch.length < 1) {
    validationErrors.passwordPolicy.digit = true;
  }

  return isEmpty(validationErrors.passwordPolicy) ? null : validationErrors;
}

export const passwordPolicyComposedValidators = Validators.compose([
  Validators.required,
  Validators.minLength(6),
  passwordPolicyValidator,
]);
