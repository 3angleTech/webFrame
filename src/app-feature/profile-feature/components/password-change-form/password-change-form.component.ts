/**
 * @license
 * Copyright (c) 2019 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAccountService, INotificationConfiguration, IWebFrameContextNavigationService, IWebFrameContextService } from 'app-shared/core';
import { IAccountChangePasswordReq, IAccountResetPasswordReq } from 'app-shared/core/service/account/account.service';
import { passwordGroupConfirmedValidator, passwordPolicyComposedValidators } from 'app-shared/security';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordChangeFormComponent implements OnInit {
  public passwordChangeForm: FormGroup;

  constructor(
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
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
    if (this.passwordChangeForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.context.ui.showNotification(notificationConfig);
      return;
    }

    const rawValue = this.passwordChangeForm.getRawValue();

    const resetPasswordReq: IAccountChangePasswordReq = {
      currentPassword: rawValue.currentPassword,
      newPassword: rawValue.newPasswordsGroup.newPassword,
    };
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfiguration = {
        message: 'Password changed.',
      };
      this.context.ui.showNotification(notificationConfig);
    };

    this.accountService.changePassword(resetPasswordReq).subscribe(onSuccess);
  }
}
