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
import { ENVIRONMENT } from '~app-shared/config';
import { IWebFrameContextStateService, User } from '~app-shared/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @HostBinding('class.app-navigation-menu')
  public componentClass: boolean = true;

  public currentUserObs: Observable<User>;
  public isDevMode: boolean = ENVIRONMENT.devMode;

  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public ngOnInit(): void {
    this.currentUserObs = this.stateService.currentUser.asObservable();
  }
}
