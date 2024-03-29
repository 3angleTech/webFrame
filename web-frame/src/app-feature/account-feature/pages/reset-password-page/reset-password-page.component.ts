/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {
  IAccountResetPasswordRequest,
  IAccountService,
  INotificationConfiguration,
  IWebFrameContextNavigationService,
  IWebFrameContextService,
  PageNotFoundError,
} from '~app-shared/core';
import {
  passwordGroupConfirmedValidator,
  passwordPolicyComposedValidators,
} from '~app-shared/security';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordPageComponent implements OnInit {
  public forgotPasswordForm: UntypedFormGroup;

  // eslint-disable-next-line max-params
  constructor(
    private formBuilder: UntypedFormBuilder,
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    if (!token || token.length === 0) {
      throw new PageNotFoundError('Reset password token is required.');
    }

    this.forgotPasswordForm = this.formBuilder.group({
      token: [token, Validators.required],
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
    return 'ACCOUNT_FEATURE.RESET_PASSWORD.PAGE_TITLE';
  }

  public onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.context.ui.showNotification(notificationConfig);
      return;
    }

    const rawValue = this.forgotPasswordForm.getRawValue();
    const resetPasswordReq: IAccountResetPasswordRequest = {
      token: rawValue.token,
      newPassword: rawValue.newPasswordsGroup.newPassword,
    };
    const onSuccess = (): void => {
      this.navigationService.navigateToInformationPage('ResetPasswordSuccess');
    };

    this.accountService.resetPassword(resetPasswordReq).subscribe(onSuccess);
  }
}
