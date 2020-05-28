/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides LoginPageComponent.
 */
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
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
    if (this.loginForm.disabled) {
      return;
    }
    if (this.loginForm.invalid) {
      let message: string = 'ACCOUNT_FEATURE.LOGIN_PAGE.ERRORS.INVALID_DATA';
      if (this.loginForm.untouched) {
        message = 'ACCOUNT_FEATURE.LOGIN_PAGE.ERRORS.PLEASE_UPDATE';
      }
      // tslint:disable-next-line:no-null-keyword
      this.loginForm.setErrors(null);
      const notificationConfig: INotificationConfiguration = {
        message: message,
      };
      this.context.ui.showNotification(notificationConfig);

      return;
    }
    this.loginForm.disable();

    const credentials: IAccountCredentials = this.loginForm.getRawValue();
    this.accountService.login(credentials).subscribe({
      error: (err: unknown): void => this.onLoginError(err),
      complete: (): void => this.onLoginComplete(),
    });
  }

  private onLoginComplete(): void {
    this.context.state.initialize().subscribe(() => {
      this.context.navigation.navigateToUrl(PAGE_URL.PROFILE_PAGE);
    });
  }

  private onLoginError(err: unknown): void {
    this.loginForm.enable();
    if (err instanceof HttpErrorResponse) {
      this.loginForm.setErrors({
        SUBMIT_ERROR: true,
      });
      this.loginForm.markAsUntouched();
    } else {
      throw err;
    }
  }
}
