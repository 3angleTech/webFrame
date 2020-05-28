/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Host, Input, OnChanges, Optional } from '@angular/core';
import { FormGroupDirective, ValidationErrors } from '@angular/forms';

import { getValidationErrorsTranslations } from '../../other/get-validation-errors-translations';

@Component({
  selector: 'app-form-group-errors',
  styleUrls: ['./form-group-errors.component.scss'],
  templateUrl: './form-group-errors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupErrorsComponent implements OnChanges {
  @Input()
  public readonly namespace: string;

  @Input()
  public readonly validationErrors: ValidationErrors | null | undefined;

  public errorList: string[];

  constructor(
    @Host() @Optional()
    public readonly parentFormGroupDirective: FormGroupDirective | null,
  ) {
    if (!this.parentFormGroupDirective) {
      throw new Error('The <app-form-group-validationErrors> element needs a FormGroup parent component.');
    }
  }

  public ngOnChanges(): void {
    this.errorList = getValidationErrorsTranslations(this.validationErrors, this.namespace);
  }

}
