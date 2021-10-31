/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IWebFrameContextNavigationService, PAGE_URL } from '~app-shared/core';

@Component({
  selector: 'app-force-refresh-page',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForceRefreshPageComponent implements OnInit {

  constructor(
    @Inject(IWebFrameContextNavigationService)
    private navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.navigateToDestinationPage();
  }

  private navigateToDestinationPage(): void {
    const destinationUrl: string = this.activatedRoute.snapshot.queryParamMap.get('destination') || PAGE_URL.HOME_PAGE;
    this.navigationService.navigateToUrl(destinationUrl);
  }

}
