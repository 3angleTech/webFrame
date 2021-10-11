/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides ConfirmEmailPageComponent.
 */
import { Component, OnInit } from '@angular/core';

export enum TokenVerificationStatusType {
  InProgress,
  ValidToken,
  TokenExpired,
  InvalidToken,
}

@Component({
  selector: 'app-confirm-email-page',
  templateUrl: './confirm-email-page.component.html',
  styleUrls: ['./confirm-email-page.component.scss'],
})
export class ConfirmEmailPageComponent implements OnInit {
  public tokenStatus: TokenVerificationStatusType = TokenVerificationStatusType.ValidToken;
  public tokenVerificationStatusType: typeof TokenVerificationStatusType = TokenVerificationStatusType;

  constructor() { }

  public ngOnInit(): void {
  }
}
