/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides a validator for newPassword + confirmPassword input field groups.
 */
import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordGroupConfirmedValidator(group: FormGroup): ValidationErrors | null {
  const validationError = { passwordConfirmed: true };

  const groupValue = group.getRawValue();
  if (groupValue.confirmPassword === '') {
    return null;
  }
  if (groupValue.newPassword === groupValue.confirmPassword) {
    return null;
  }

  // Emit error so that change detection can display errors inside fields.
  group.get('newPassword').markAsTouched();
  group.get('confirmPassword').setErrors(validationError, { emitEvent: true });

  return validationError;
}
