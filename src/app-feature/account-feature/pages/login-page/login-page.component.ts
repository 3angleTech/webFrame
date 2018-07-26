/**
 * Provides LoginPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountCredentials, IAccountService } from 'app-shared/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public formErrors: string[];
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IAccountService)
    private accountService: IAccountService,
  ) {
  }

  ngOnInit(): void {
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
      this.loginForm.updateValueAndValidity();
      return;
    }

    const credentials: IAccountCredentials = this.loginForm.getRawValue();
    const onSuccess = (): void => {
      alert('TODO: Implement user authentication.');
    };

    this.accountService.login(credentials).subscribe(onSuccess);
  }
}
