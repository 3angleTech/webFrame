/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides LogoutPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { IAccountService, IWebFrameContextService } from 'app-shared/core';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
})
export class LogoutPageComponent implements OnInit {

  constructor(
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService) {
  }

  public ngOnInit(): void {
    this.accountService.logout().subscribe(this.onLogoutSuccess.bind(this));
  }

  private onLogoutSuccess(): void {
    window.location.href = '/';
  }
}
