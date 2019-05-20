/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the main navigation menu.
 */
import { Component, HostBinding, Inject, isDevMode, OnInit } from '@angular/core';
import { IWebFrameContextStateService, User } from 'app-shared/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @HostBinding('class.app-navigation-menu')
  public componentClass: boolean = true;

  public userIsLoggedIn: Observable<Boolean>;
  public isDevMode: boolean = isDevMode();

  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public ngOnInit(): void {
    this.userIsLoggedIn = this.stateService.currentUser.asObservable().pipe(
      map((user: User): boolean => {
        return !!user;
      }),
    );
  }

}
