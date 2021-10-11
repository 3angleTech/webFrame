/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides InformationPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IWebFrameContextNavigationService, IWebFrameContextStateService, PAGE_URL } from '~app-shared/core';

import { IInformationPageDetails } from '../../interfaces/information-page-details.interface';
import { INFORMATION_PAGES_DETAILS } from '../../other/information-page-details';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
})
export class InformationPageComponent implements OnInit {
  public isAuthenticated: boolean;
  public pageDetails: IInformationPageDetails;

  constructor(
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.isAuthenticated = this.stateService.isAuthenticated();
    const informationId = this.activatedRoute.snapshot.paramMap.get('informationId');
    if (!informationId || !INFORMATION_PAGES_DETAILS.hasOwnProperty(informationId)) {
      return this.navigationService.navigateToNotFoundErrorPage();
    }
    this.pageDetails = INFORMATION_PAGES_DETAILS[informationId];
  }

  public getPageTitle(): string {
    return this.pageDetails.title;
  }

  public navigateToDestinationPage(): void {
    const destinationUrl: string = this.activatedRoute.snapshot.queryParamMap.get('destination') || PAGE_URL.HOME_PAGE;
    this.navigationService.navigateToUrl(destinationUrl);
  }
}
