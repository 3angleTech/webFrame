/**
 * @license
 * Copyright (c) 2019 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides ForgotPasswordPageComponent.
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountForgotPasswordReq, IAccountService, INotificationConfiguration, IWebFrameContextService } from 'app-shared/core';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordPageComponent implements OnInit {
  public forgotPasswordForm: FormGroup;

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
      ],
    );

    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', emailValidators],
    });
  }

  public getPageTitle(): string {
    return 'Forgot password';
  }

  public onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.context.ui.showNotification(notificationConfig);
      return;
    }

    const forgotPasswordReq: IAccountForgotPasswordReq = this.forgotPasswordForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfiguration = {
        message: 'Password recovery instruction have been sent via email.',
      };
      this.context.ui.showNotification(notificationConfig);
    };

    this.accountService.forgotPassword(forgotPasswordReq).subscribe(onSuccess);
  }
}
