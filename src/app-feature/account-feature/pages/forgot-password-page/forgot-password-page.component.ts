/**
 * Provides ForgotPasswordPageComponent.
 */
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  public getPageTitle(): string {
    return 'Forgot password';
  }
}
