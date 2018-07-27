/**
 * Provides a helper component that can be used to display form control errors.
 */
import { ChangeDetectionStrategy, Component, Host, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
  // TODO: Use `OnPush` change detection.
  changeDetection: ChangeDetectionStrategy.Default,
  preserveWhitespaces: false,
})
export class FormControlErrorsComponent implements OnInit {
  /**
   * A list of `ValidationErrors` that contain multiple details.
   */
  protected static readonly complexValidationErrors: string[] = [
    'passwordPolicy',
  ];

  public formControl: FormControl;
  public formControlErrors$: Observable<string[] | null>;

  @Input()
  public readonly formControlPath: string;

  @Input()
  public readonly namespace: string;

  constructor(
    @Host()
    private formDir: FormGroupDirective,
  ) {
  }

  ngOnInit() {
    this.formControl = this.formDir.form.get(this.formControlPath) as FormControl;

    this.formControlErrors$ = this.formControl.statusChanges.pipe(
      // Emit a value on start, because `statusChanges` doesn't emit one.
      startWith(null),
      filter((): boolean => {
        return this.formControl.dirty || this.formControl.touched;
      }),
      map((): string[] | null => {
        if (this.formControl.errors) {
          return this.getErrorPhrases(this.formControl.errors);
        }
        return null;
      })
    );
  }

  /**
   * Returns a list of error phrases that need to go through the translate service.
   *
   * @param errors The ValidationErrors object from the FormControl.errors property.
   */
  public getErrorPhrases(errors: ValidationErrors): string[] {
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
