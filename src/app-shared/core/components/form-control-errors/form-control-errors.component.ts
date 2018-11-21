/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides a helper component that can be used to display form control errors.
 */
import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Host, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class FormControlErrorsComponent implements DoCheck, OnInit {
  /**
   * A list of `ValidationErrors` that contain multiple details.
   */
  protected static readonly complexValidationErrors: string[] = [
    'passwordPolicy',
  ];

  protected formControl: FormControl;
  public controlErrors$: Observable<string[] | null>;

  /**
   * Touch events are not emitted by form controls, this emit an event when a
   * form control is first touched.
   *
   * TODO: Remove once the angular issue #10887 has been fixed.
   * @see https://github.com/angular/angular/issues/10887
   */
  protected formControlTouchedChanges: EventEmitter<void> = new EventEmitter<void>();
  protected formControlTouchedChanged: boolean = false;

  @Input()
  public readonly formControlPath: string;

  @Input()
  public readonly namespace: string;

  constructor(
    @Host()
    protected formGroupDirective: FormGroupDirective,
  ) {
  }

  public ngOnInit(): void {
    this.formControl = this.formGroupDirective.form.get(this.formControlPath) as FormControl;
    if (!this.formControl) {
      throw getFormControlErrorsMissingControlError(this.formControlPath);
    }

    this.controlErrors$ = merge(
      this.formGroupDirective.ngSubmit,
      this.formControl.valueChanges,
      this.formControlTouchedChanges,
    ).pipe(
      map((): string[] | null => {
        if (this.formControl.errors) {
          return this.getErrorPhrases(this.formControl.errors);
        }
        return null;
      }),
    );
  }

  /**
   * NOTE: This method should be kept as fast as possible.
   *
   * TODO: Remove once the angular issue #10887 has been fixed.
   * @see https://github.com/angular/angular/issues/10887
   */
  public ngDoCheck(): void {
    // Show errors when a component is first touched.
    if (this.formControl.touched && !this.formControlTouchedChanged) {
      this.formControlTouchedChanged = true;
      this.formControlTouchedChanges.emit();
    }
  }

  /**
   * Returns a list of error phrases that need to go through the translate service.
   *
   * @param errors The ValidationErrors object from the FormControl.errors property.
   */
  protected getErrorPhrases(errors: ValidationErrors): string[] {
    const errorPhrases: string[] = [];
    const errorPhrasePrefix = `${this.namespace}.${this.formControlPath}`;

    Object.getOwnPropertyNames(errors).forEach((errorKey: string) => {
      if (FormControlErrorsComponent.complexValidationErrors.includes(errorKey)) {
        Object.getOwnPropertyNames(errors[errorKey]).forEach((errorDetailKey: string) => {
          errorPhrases.push(`${errorPhrasePrefix}.${errorKey}.${errorDetailKey}`);
        });
      } else {
        errorPhrases.push(`${errorPhrasePrefix}.${errorKey}`);
      }
    });

    return errorPhrases;
  }
}

/**
 * Returns an error to be thrown when the form control is missing.
 */
export function getFormControlErrorsMissingControlError(formControlPath: string): Error {
  return Error(`Parent form group does not have a "${formControlPath}" control.`);
}
