/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides ProfilePageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IWebFrameContextStateService, User } from '~app-shared/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public currentUserObs: Observable<User>;

  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public ngOnInit(): void {
    this.currentUserObs = this.stateService.currentUser.asObservable();
  }

  public getPageTitle(): string {
    return 'PROFILE_FEATURE.PROFILE_PAGE.PAGE_TITLE';
  }

}
