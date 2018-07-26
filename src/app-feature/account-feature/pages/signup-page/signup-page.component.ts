/**
 * Provides SignupPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccountInformation, IAccountService } from 'app-shared/core';


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
      email: '',
      username: '',
      password: '',
    });
  }

  public getPageTitle(): string {
    return 'Signup';
  }

  public onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.updateValueAndValidity();
      return;
    }

    const credentials: IAccountInformation = this.signupForm.getRawValue();
    const onSuccess = (): void => {
      alert('TODO: Implement user signup.');
    };

    this.accountService.signup(credentials).subscribe(onSuccess);
  }
}
