/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Component, Inject, OnInit } from '@angular/core';
import { ENVIRONMENT } from '~app-shared/config';
import { IAccountService, IWebFrameContextService } from '~app-shared/core';

@Component({
  selector: 'app-logout-page',
  template: '',
})
export class LogoutPageComponent implements OnInit {

  constructor(
    @Inject(IAccountService)
    private accountService: IAccountService,
    @Inject(IWebFrameContextService)
    private context: IWebFrameContextService) {
  }

  public ngOnInit(): void {
    this.accountService.logout().subscribe(() => {
      window.location.href = ENVIRONMENT.appBaseUrl;
    });
  }
}
