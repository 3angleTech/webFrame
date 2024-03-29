/* eslint-disable no-magic-numbers,sonarjs/no-duplicate-string,@typescript-eslint/no-use-before-define */
/**
 * @file Tests for FormControlErrorsComponent.
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import {
  Component,
  DebugElement,
  Provider,
  Type,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { createTranslationServiceStub, TranslatePipeStub } from '~app-shared/test-utils';
import { ITranslationService } from '~app-shared/translate';

import { Dictionary } from '../../interfaces/dictionary';

import { FormControlErrorsComponent } from './form-control-errors.component';

@Component({
  selector: 'app-form-control-errors-test-form',
  // eslint-disable-next-line @angular-eslint/component-max-inline-declarations
  template: `
  <form [formGroup]="testForm" (ngSubmit)="onSubmit()">
    <!-- control without any validators. -->
    <input type="text" formControlName="fullName" placeholder="fullName">
    <app-form-control-errors namespace="testForm" formControlPath="fullName"></app-form-control-errors>

    <!-- control with one validator. -->
    <input type="text" formControlName="userName" placeholder="userName">
    <app-form-control-errors namespace="testForm" formControlPath="userName"></app-form-control-errors>

    <!-- control with two non-required validators. -->
    <input type="text" formControlName="userEmail" placeholder="userEmail">
    <app-form-control-errors namespace="testForm" formControlPath="userEmail"></app-form-control-errors>
  </form>
  `,
})
class FormControlErrorsTestFormComponent {
  public readonly testForm: UntypedFormGroup;
  @ViewChild(FormControlErrorsComponent, { static: true })
  public readonly formControlErrors: FormControlErrorsComponent;

  public submittedValues: Dictionary<string> = undefined;

  constructor() {
    this.testForm = new UntypedFormGroup({
      fullName: new UntypedFormControl(''),
      userName: new UntypedFormControl('', Validators.required),
      userEmail: new UntypedFormControl('', Validators.compose([
        Validators.email,
        Validators.minLength(8),
      ])),
    });
  }

  public onSubmit(): void {
    if (this.testForm.valid) {
      this.submittedValues = this.testForm.getRawValue();
    }
  }
}

describe('FormControlErrorsComponent', () => {
  let abstractControl: AbstractControl;
  let fixture: ComponentFixture<FormControlErrorsTestFormComponent>;
  let testComponent: FormControlErrorsTestFormComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        FormControlErrorsComponent,
        FormControlErrorsTestFormComponent,
        TranslatePipeStub,
      ] as Type<unknown>[],
      providers: [
        {
          provide: ITranslationService,
          useValue: createTranslationServiceStub(),
        },
      ] as Provider[],
    }).compileComponents();
    fixture = TestBed.createComponent(FormControlErrorsTestFormComponent);
    fixture.detectChanges();
  }));

  beforeEach(() => {
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create within form', () => {
    expect(testComponent.testForm instanceof UntypedFormGroup)
      .toBeTruthy('FormGroup should have been created');
    expect(testComponent.formControlErrors instanceof FormControlErrorsComponent)
      .toBeTruthy('FormControlErrorsComponent should have been created');
  });

  it('should work without validators', fakeAsync(() => {
    abstractControl = testComponent.testForm.get('fullName');
    expect(abstractControl.untouched)
      .toBeTruthy('Expected untouched fullName control');
    expect(abstractControl.pristine)
      .toBeTruthy('Expected pristine fullName control');
    expect(countFormControlErrors(fixture, 'fullName').length)
      .toBe(0, 'Expected no errors on fullName control');

    abstractControl.markAsTouched();
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'fullName').length)
      .toBe(0, 'Expected no errors on touched fullName control');
  }));

  it('should work with one validator', fakeAsync(() => {
    abstractControl = testComponent.testForm.get('userName');
    expect(abstractControl.untouched)
      .toBeTruthy('Expected untouched userName control');
    expect(abstractControl.pristine)
      .toBeTruthy('Expected pristine userName control');
    expect(countFormControlErrors(fixture, 'userName').length)
      .toBe(0, 'Expected no errors on userName control');

    abstractControl.markAsTouched();
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'userName').length)
      .toBe(1, 'Expected one error on touched userName control');
  }));

  it('should work with two validator', fakeAsync(() => {
    abstractControl = testComponent.testForm.get('userEmail');
    expect(abstractControl.untouched)
      .toBeTruthy('Expected untouched userEmail control');
    expect(abstractControl.pristine)
      .toBeTruthy('Expected pristine userEmail control');

    abstractControl.markAsTouched();
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'userEmail').length)
      .toBe(0, 'Expected no errors on userEmail control');

    const invalidEmailAddress = 'INVALID';
    abstractControl.setValue(invalidEmailAddress);
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'userEmail').length)
      // NOTE: The minlength error shows twice in the list: once for the actualLength and once for the requiredLength.
      .toBe(3, 'Expected two errors on userEmail control with invalid email');
  }));

  // NOTE: This test is temporarily disabled.
  // TODO: Enable once the angular issue #10887 has been fixed.
  // @see https://github.com/angular/angular/issues/10887
  xit('should work allow validator resetting', fakeAsync(() => {
    abstractControl = testComponent.testForm.get('userName');
    expect(abstractControl.untouched)
      .toBeTruthy('Expected untouched userName control');
    expect(abstractControl.pristine)
      .toBeTruthy('Expected pristine userName control');
    expect(countFormControlErrors(fixture, 'userName').length)
      .toBe(0, 'Expected no errors on userName control');

    abstractControl.markAsTouched();
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'userName').length)
      .toBe(1, 'Expected one error on userName control');

    abstractControl.reset();
    fixture.detectChanges();
    expect(countFormControlErrors(fixture, 'userName').length)
      .toBe(0, 'Expected no errors on userName control');
  }));
});

function countFormControlErrors(fixture: ComponentFixture<unknown>, formControlPath: string): string[] {
  const controlError: DebugElement = fixture.debugElement.query(
    By.css(`[formControlPath=${formControlPath}]`),
  );

  const controlErrorItems: DebugElement[] = controlError.queryAll(
    By.css('ul > li'),
  );

  const errorStrings: string[] = [];
  controlErrorItems.forEach((item: DebugElement) => {
    const nativeElement: Element = item.nativeElement;
    const errorString = nativeElement.textContent.trim();
    errorStrings.push(errorString);
  });

  return errorStrings;
}
