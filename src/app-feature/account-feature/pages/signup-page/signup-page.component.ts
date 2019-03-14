/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides SignupPageComponent.
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountInformation, IAccountService, INotificationConfiguration, INotificationService } from 'app-shared/core';
import { passwordGroupConfirmedValidator, passwordPolicyComposedValidators } from 'app-shared/security';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(INotificationService)
    private notificationService: INotificationService,
  ) {
  }

  public ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      newPasswordsGroup: this.formBuilder.group(
        {
          newPassword: ['', passwordPolicyComposedValidators],
          confirmPassword: ['', Validators.required],
        }, {
          validator: passwordGroupConfirmedValidator,
        },
      ),
    });
  }

  public getPageTitle(): string {
    return 'Signup';
  }

  public onSubmit(): void {
    if (this.signupForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.notificationService.showNotification(notificationConfig);
      return;
    }

    const credentials: IAccountInformation = this.signupForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfiguration = {
        message: 'TODO: Implement user signup feature.',
      };
      this.notificationService.showNotification(notificationConfig);
    };

    this.accountService.signup(credentials).subscribe(onSuccess);
  }
}
