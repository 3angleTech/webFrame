/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

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

  @HostBinding('attr.aria-live')
  public readonly ariaLive: string = 'assertive';

  @HostBinding('attr.role')
  public readonly ariaRole: string = 'alert';

  @HostBinding('class.app-form-group-errors--not-empty')
  public notEmpty: boolean = false;

  public errorList: string[] | undefined;

  constructor() {
  }

  public ngOnChanges(): void {
    this.errorList = getValidationErrorsTranslations(this.validationErrors, this.namespace);
    this.notEmpty = this.errorList ? this.errorList.length > 0 : false;
  }

}
