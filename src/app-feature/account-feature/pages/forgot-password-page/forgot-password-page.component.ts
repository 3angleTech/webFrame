/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides ForgotPasswordPageComponent.
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountCredentials, IAccountService, INotificationConfiguration, INotificationService, IWebFrameContextService } from 'app-shared/core';

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
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
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

    const credentials: IAccountCredentials = this.forgotPasswordForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfiguration = {
        message: 'TODO: Implement forgot password feature.',
      };
      this.context.ui.showNotification(notificationConfig);
    };

    this.accountService.login(credentials).subscribe(onSuccess);
  }
}
