
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
  navigateToUrl(url: string): void;
  navigateToLogin(): void;
  navigateToLogout(): void;
  navigateToNotFoundErrorPage(): void;
  navigateToAccessDeniedErrorPage(): void;
  refreshCurrentPage(): void;
}
export const IWebFrameContextService = new InjectionToken('IWebFrameContextService');

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
