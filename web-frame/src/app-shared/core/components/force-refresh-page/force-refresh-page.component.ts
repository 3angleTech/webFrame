/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PAGE_URL } from '../../other/page-url.enum';
import { IWebFrameContextNavigationService } from '../../service/web-frame-context/web-frame-context-navigation.service';

@Component({
  selector: 'app-force-refresh-page',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForceRefreshPageComponent implements OnDestroy, OnInit {

  constructor(
    @Inject(IWebFrameContextNavigationService)
    private navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnDestroy(): void {
  }

  public ngOnInit(): void {
    this.navigateToDestinationPage();
  }

  private navigateToDestinationPage(): void {
    const destinationUrl: string = this.activatedRoute.snapshot.queryParamMap.get('destination') || PAGE_URL.HOME_PAGE;
    this.navigationService.navigateToUrl(destinationUrl);
  }

}
