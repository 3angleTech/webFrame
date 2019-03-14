
/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

 import { Injectable, InjectionToken } from '@angular/core';

/**
 * Service for common navigation operations.
 */
export interface IWebFrameContextNavigationService {
  /**
   * Navigate to target url.
   * @param url The target url.
   */
  navigateToUrl(url: string): void;
  /**
   * Navigate to login page.
   */
  navigateToLogin(): void;
  /**
   * Navigate to logout page.
   */
  navigateToLogout(): void;
  /**
   * Navigate to not found error page.
   */
  navigateToNotFoundErrorPage(): void;
  /**
   * Navigate to access denied error page.
   */
  navigateToAccessDeniedErrorPage(): void;
  /**
   * Force a refresh of the current page.
   */
  refreshCurrentPage(): void;
}
export const IWebFrameContextNavigationService = new InjectionToken('IWebFrameContextNavigationService');

// tslint:disable:no-duplicate-string
@Injectable()
export class WebFrameContextNavigationService implements IWebFrameContextNavigationService {
  public navigateToUrl(url: string): void {
    throw new Error('Method not implemented.');
  }
  public navigateToLogin(): void {
    throw new Error('Method not implemented.');
  }
  public navigateToLogout(): void {
    throw new Error('Method not implemented.');
  }
  public navigateToNotFoundErrorPage(): void {
    throw new Error('Method not implemented.');
  }
  public navigateToAccessDeniedErrorPage(): void {
    throw new Error('Method not implemented.');
  }
  public refreshCurrentPage(): void {
    throw new Error('Method not implemented.');
  }

}