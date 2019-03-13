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
import { IAccountCredentials, IAccountService, INotificationConfig, INotificationService, IWebFrameContextService } from 'app-shared/core';

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
    @Inject(INotificationService)
    private notificationService: INotificationService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService,
  ) {
  }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      staySignedIn: false,
    });
  }

  public getPageTitle(): string {
    return 'Login';
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      const notificationConfig: INotificationConfig = {
        message: 'Invalid data provided.',
      };
      this.notificationService.showNotification(notificationConfig);
      return;
    }

    const credentials: IAccountCredentials = this.loginForm.getRawValue();
    const onSuccess = (): void => {
      const notificationConfig: INotificationConfig = {
        message: 'TODO: Implement user authentication feature.',
      };
      this.notificationService.showNotification(notificationConfig);
    };

    this.accountService.login(credentials).subscribe(onSuccess);
  }
}
