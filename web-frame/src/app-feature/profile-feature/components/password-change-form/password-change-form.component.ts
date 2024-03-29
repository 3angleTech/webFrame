/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {
  IAccountChangePasswordRequest,
  IAccountService,
  INotificationConfiguration,
  IWebFrameContextNavigationService,
  IWebFrameContextService,
} from '~app-shared/core';
import {
  passwordGroupConfirmedValidator,
  passwordPolicyComposedValidators,
} from '~app-shared/security';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordChangeFormComponent implements OnInit {
  public passwordChangeForm: UntypedFormGroup;

  // eslint-disable-next-line max-params
  constructor(
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.passwordChangeForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
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

  public onSubmit(): void {
    if (this.passwordChangeForm.disabled) {
      return;
    }
    if (this.passwordChangeForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.context.ui.showNotification(notificationConfig);
      return;
    }
    this.passwordChangeForm.disable();

    const rawValue = this.passwordChangeForm.getRawValue();
    const resetPasswordReq: IAccountChangePasswordRequest = {
      currentPassword: rawValue.currentPassword,
      newPassword: rawValue.newPasswordsGroup.newPassword,
    };

    this.accountService.changePassword(resetPasswordReq).subscribe({
      error: (err: NonNullable<unknown>): void => this.onChangePasswordError(err),
      complete: (): void => this.onChangePasswordComplete(),
    });
  }

  private onChangePasswordComplete(): void {
    this.passwordChangeForm.enable();
    const notificationConfig: INotificationConfiguration = {
      message: 'Password changed!',
    };
    this.context.ui.showNotification(notificationConfig);
  }

  private onChangePasswordError(err: NonNullable<unknown>): void {
    this.passwordChangeForm.enable();
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const message = err['message'];
    if (message) {
      alert('Password change error!');
      this.passwordChangeForm.setErrors({
        submitError: message,
      });
    } else {
      throw err;
    }
  }
}
