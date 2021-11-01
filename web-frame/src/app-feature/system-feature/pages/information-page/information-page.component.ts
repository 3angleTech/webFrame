/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides InformationPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

import { IWebFrameContextNavigationService, IWebFrameContextStateService, PAGE_URL } from '~app-shared/core';

import { IInformationPageDetails } from '../../interfaces/information-page-details.interface';
import { INFORMATION_PAGES_DETAILS } from '../../other/information-page-details';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
})
export class InformationPageComponent implements OnInit {
  public authenticationRequired: boolean;
  public pageDetails: IInformationPageDetails;

  constructor(
    @Inject(IWebFrameContextNavigationService)
    private readonly navigationService: IWebFrameContextNavigationService,
    @Inject(IWebFrameContextStateService)
    private readonly stateService: IWebFrameContextStateService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    let informationId: string | undefined = this.activatedRoute.snapshot.paramMap.get('informationId') || 'PageNotFoundError';
    if (informationId.length === 0 || INFORMATION_PAGES_DETAILS[informationId] === undefined) {
      informationId = 'PageNotFoundError';
    }
    this.pageDetails = INFORMATION_PAGES_DETAILS[informationId];
    this.authenticationRequired = informationId === 'AccessDeniedError' && !this.stateService.isAuthenticated();
  }

  public getPageTitle(): string {
    return this.pageDetails.title;
  }

  public navigateToDestinationPage(): void {
    const destinationUrl: string = this.activatedRoute.snapshot.queryParamMap.get('destination') || PAGE_URL.HOME_PAGE;
    this.navigationService.navigateToUrl(destinationUrl);
  }

  public navigateToLoginPage(): void {
    const extras: NavigationExtras = {
      queryParams: {
        destination: this.activatedRoute.snapshot.queryParamMap.get('destination') || undefined,
      },
    };
    this.navigationService.navigateToUrl(PAGE_URL.LOGIN_PAGE, extras);
  }
}
