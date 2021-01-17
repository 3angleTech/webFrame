/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the main navigation menu.
 */
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWebFrameContextStateService, User } from '~app-shared/core';
import { USER_PERMISSION, USER_ROLE } from '~app-shared/security';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  public readonly ADMINISTRATOR: USER_ROLE = USER_ROLE.ADMINISTRATOR;
  public readonly ACCESS_SANDBOX_PAGES: USER_PERMISSION = USER_PERMISSION.ACCESS_SANDBOX_PAGES;

  @HostBinding('class.app-navigation-menu')
  public componentClass: boolean = true;

  public currentUserObs: Observable<User>;

  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public ngOnInit(): void {
    this.currentUserObs = this.stateService.currentUser.asObservable();
  }
}
