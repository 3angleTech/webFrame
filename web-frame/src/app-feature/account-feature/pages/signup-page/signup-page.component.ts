/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides SignupPageComponent.
 */
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  IAccountInformation,
  IAccountService,
  INotificationConfiguration,
  IWebFrameContextService,
} from '~app-shared/core';
import {
  passwordGroupConfirmedValidator,
  passwordPolicyComposedValidators,
} from '~app-shared/security';

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
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
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
        // eslint-disable-next-line no-magic-numbers
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
    return 'ACCOUNT_FEATURE.SIGNUP_PAGE.PAGE_TITLE';
  }

  public onSubmit(): void {
    if (this.signupForm.invalid) {
      const notificationConfig: INotificationConfiguration = {
        message: 'Invalid data provided.',
      };
      this.context.ui.showNotification(notificationConfig);
      return;
    }

    const credentials: IAccountInformation = this.signupForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfiguration = {
        message: 'TODO: Implement user signup feature.',
      };
      this.context.ui.showNotification(notificationConfig);
    };

    this.accountService.signup(credentials).subscribe(onSuccess);
  }
}
