/**
 * @license
 * Copyright (c) 2019 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides InformationPageComponent.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dictionary, IWebFrameContextNavigationService } from 'app-shared/core';
import { IInformationPageDetails } from './information-page-details.interface';

// TODO: Refactor to use translation tokens once they exist.
export const INFORMATION_PAGES_DETAILS: Dictionary<IInformationPageDetails> = {
  notActivated: {
    title: 'Email account not activated',
    message: null,
    type: 'warning',
  },
  resetPasswordSuccess: {
    title: 'Password reset was successful.',
    message: null,
    type: 'success',
  },
};

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
})
export class InformationPageComponent implements OnInit {
  public pageDetails: IInformationPageDetails;

  constructor(
    @Inject(IWebFrameContextNavigationService)
    public navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    const informationId = this.activatedRoute.snapshot.paramMap.get('informationId');
    if (!informationId || !INFORMATION_PAGES_DETAILS.hasOwnProperty(informationId)) {
      this.navigationService.navigateToNotFoundErrorPage();
    }
    this.pageDetails = INFORMATION_PAGES_DETAILS[informationId];
  }

  public getPageTitle(): string {
    return this.pageDetails.title;
  }
}
