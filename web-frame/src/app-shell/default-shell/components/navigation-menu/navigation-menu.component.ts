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

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @HostBinding('class.app-navigation-menu')
  public componentClass: boolean = true;

  public currentUserObs: Observable<User>;
  public isDevMode: boolean = environment.devMode;

  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public ngOnInit(): void {
    this.currentUserObs = this.stateService.currentUser.asObservable();
  }
}
