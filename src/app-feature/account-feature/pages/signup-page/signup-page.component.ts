/**
 * Provides SignupPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccountInformation, IAccountService } from 'app-shared/core';
import { passwordGroupConfirmedValidator, passwordPolicyComposedValidators } from 'app-shared/security';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  public formErrors: string[];
  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IAccountService)
    private accountService: IAccountService,
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
        }
      ),
    });
  }

  public getPageTitle(): string {
    return 'Signup';
  }

  public onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.updateValueAndValidity({ emitEvent: true });
      return;
    }

    const credentials: IAccountInformation = this.signupForm.getRawValue();
    const onSuccess = (): void => {
      alert('TODO: Implement user signup.');
    };

    this.accountService.signup(credentials).subscribe(onSuccess);
  }
}
