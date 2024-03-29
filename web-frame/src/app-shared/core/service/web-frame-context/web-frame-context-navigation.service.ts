/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable, InjectionToken } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

import { PAGE_URL } from '../../other/page-url.enum';

/**
 * Service for common navigation operations.
 */
export interface IWebFrameContextNavigationService {
  /**
   * Navigate to target url.
   *
   * @param url The target url.
   * @param extras An object containing properties that modify the navigation strategy.
   */
  navigateToUrl(url: string | UrlTree, extras?: NavigationExtras): void;

  /**
   * Navigate to login page.
   */
  navigateToLogin(): void;

  /**
   * Navigate to logout page.
   */
  navigateToLogout(): void;

  /**
   * Navigate to information page.
   *
   * @see INFORMATION_PAGES_DETAILS
   *
   * @param informationId The information page ID as defined in `INFORMATION_PAGES_DETAILS`.
   * @param extras An object containing properties that modify the navigation strategy.
   */
  navigateToInformationPage(informationId: string, extras?: NavigationExtras): void;

  /**
   * Force a refresh of the current page.
   */
  refreshCurrentPage(): void;
}

export const IWebFrameContextNavigationService = new InjectionToken('IWebFrameContextNavigationService');

@Injectable()
export class WebFrameContextNavigationService implements IWebFrameContextNavigationService {
  constructor(
    private readonly router: Router,
  ) {
  }

  public navigateToUrl(url: string | UrlTree, extras?: NavigationExtras): void {
    // eslint-disable-next-line promise/catch-or-return
    this.router.navigateByUrl(url, extras).then(() => {
      // Nothing to do.
      return undefined;
    });
  }

  public navigateToLogin(): void {
    throw new Error('Method not implemented.');
  }

  public navigateToLogout(): void {
    throw new Error('Method not implemented.');
  }

  public navigateToInformationPage(informationId: string, extras?: NavigationExtras): void {
    this.navigateToUrl(`/system/information/${informationId}`, extras);
  }

  public refreshCurrentPage(): void {
    const extras: NavigationExtras = {
      skipLocationChange: true,
      queryParams: {
        destination: this.router.url,
      },
    };
    this.navigateToUrl(PAGE_URL.FORCE_REFRESH, extras);
  }

}
