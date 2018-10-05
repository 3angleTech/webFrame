/**
 * Provides ForgotPasswordPageComponent.
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountCredentials, IAccountService, INotificationConfig, INotificationService } from 'app-shared/core';

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
    @Inject(INotificationService)
    private notificationService: INotificationService,
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
      const notificationConfig: INotificationConfig = {
        message: 'Invalid data provided.',
      };
      this.notificationService.showNotification(notificationConfig);
      return;
    }

    const credentials: IAccountCredentials = this.forgotPasswordForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfig = {
        message: 'TODO: Implement forgot password feature.',
      };
      this.notificationService.showNotification(notificationConfig);
    };

    this.accountService.login(credentials).subscribe(onSuccess);
  }
}
