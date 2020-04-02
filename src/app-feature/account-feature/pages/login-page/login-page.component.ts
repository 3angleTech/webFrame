/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides LoginPageComponent.
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountCredentials, IAccountService, INotificationConfiguration, IWebFrameContextService } from 'app-shared/core';

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
    return 'Login';
  }

  public onSubmit(): void {
    if (this.loginForm.disabled) {
      return;
    }
    if (this.loginForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
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
      this.context.navigation.navigateToUrl('/profile');
    });
  }

  private onLoginError(err: unknown): void {
    this.loginForm.enable();
    if (typeof err === 'object' && err['message']) {
      console.warn(err);
      alert('Login error!');
      this.loginForm.setErrors({
        submitError: err['message'],
      });
    } else {
      throw err;
    }
  }
}
