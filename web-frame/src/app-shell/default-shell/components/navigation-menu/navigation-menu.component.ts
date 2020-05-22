/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the main navigation menu.
 */
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWebFrameContextStateService, User } from '~app-shared/core';
import { ENVIRONMENT } from '~app-shared/config';

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
