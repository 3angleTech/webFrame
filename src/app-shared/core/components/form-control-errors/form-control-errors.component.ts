/**
 * Provides a helper component that can be used to display form control errors.
 */
import { ChangeDetectionStrategy, Component, Host, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { isEmpty, isObject } from 'lodash';
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
  public formControl: FormControl;
  public formControlErrors$: Observable<string[] | null>;

  @Input()
  public readonly formControlPath: string;

  @Input()
  public readonly namespace: string;

  /**
   * A list of validation that should be handled as trees.
   */
  protected readonly multiLevelValidationErrors: string[] = [
    'passwordPolicy',
  ];

  constructor(@Host() private formDir: FormGroupDirective) {
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
          return this.getFlatErrors(this.formControl.errors);
        }
        return null;
      })
    );
  }

  public getFlatErrors(errors: ValidationErrors, parent?: string): string[] {
    const errorPath = isEmpty(parent) ? `${this.namespace}.${this.formControlPath}.` : `${parent}.`;

    const errorStrings: string[] = [];
    Object.getOwnPropertyNames(errors).forEach((error: string) => {
      if (isObject(errors[error])) {
        this.getFlatErrors(errors[error], parent).forEach((errorString: string) => {
          errorStrings.push(errorString);
        });
      } else {
        const errorString = `${errorPath}${error}`;
        errorStrings.push(errorString);
      }
    });

    return errorStrings;
  }

}
