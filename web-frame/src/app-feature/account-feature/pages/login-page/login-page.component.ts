/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides LoginPageComponent.
 */
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import {
  getHttpResponseValidationErrors,
  IAccountCredentials,
  IAccountService,
  INotificationConfiguration,
  IWebFrameContextService,
  PAGE_URL,
} from '~app-shared/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
  ) {
  }

  public ngOnInit(): void {
    const emailValidators = Validators.compose([
      Validators.required,
      Validators.email,
    ]);

    this.loginForm = this.formBuilder.group({
      email: ['', emailValidators],
      password: ['', Validators.required],
      staySignedIn: false,
    });
  }

  public getPageTitle(): string {
    return 'ACCOUNT_FEATURE.LOGIN_PAGE.PAGE_TITLE';
  }

  public onSubmit(): void {
    if (!this.canSubmitFormData()) {
      return;
    }

    this.loginForm.disable();
    const credentials: IAccountCredentials = this.loginForm.getRawValue();
    this.accountService.login(credentials).subscribe({
      error: (err: unknown): void => this.onLoginError(err),
      complete: (): void => this.onLoginComplete(),
    });
  }

  private canSubmitFormData(): boolean {
    // Prevent accidental multiple consecutive submissions.
    if (this.loginForm.disabled) {
      return false;
    }

    // Allow re-submission when a connection error was encountered.
    if (this.isConnectionRefusedError(this.loginForm.errors)) {
      return true;
    }

    // Show notification.
    if (this.loginForm.invalid || this.loginForm.errors) {
      this.showFormGroupErrorsNotification();

      return false;
    }

    return true;
  }

  private isConnectionRefusedError(errors: ValidationErrors): boolean {
    if (!errors || Object.keys(errors).length !== 1) {
      return false;
    }

    return Object.keys(this.loginForm.errors).includes('GENERAL.ERROR.CONNECTION_REFUSED');
  }

  private showFormGroupErrorsNotification(): void {
    let message: string = 'GENERAL.ERROR.INVALID_DATA';
    if (this.loginForm.untouched) {
      message = 'GENERAL.ERROR.PLEASE_UPDATE';
    }
    const notificationConfig: INotificationConfiguration = {
      message: message,
    };
    this.context.ui.showNotification(notificationConfig);
  }

  private onLoginComplete(): void {
    this.context.state.initialize().subscribe(() => {
      this.context.navigation.navigateToUrl(PAGE_URL.PROFILE_PAGE);
    });
  }

  private onLoginError(err: unknown): void {
    this.loginForm.enable();
    if (err instanceof HttpErrorResponse) {
      const validationErrors = getHttpResponseValidationErrors(err);
      this.loginForm.setErrors(validationErrors);
      this.loginForm.markAsUntouched();
    } else {
      throw err;
    }
  }
}
