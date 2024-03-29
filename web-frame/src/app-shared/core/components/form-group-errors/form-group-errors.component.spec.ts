/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormGroupErrorsComponent } from './form-group-errors.component';

describe('FormGroupErrorsComponent', () => {
  let component: FormGroupErrorsComponent;
  let fixture: ComponentFixture<FormGroupErrorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupErrorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
