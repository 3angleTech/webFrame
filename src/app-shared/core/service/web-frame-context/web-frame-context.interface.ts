/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { User } from 'app-shared/core/data/user.do';
import { BehaviorSubject } from 'rxjs';

/**
 * Hold the state of the application.
 */
export interface IWebFrameContextStateService {
  currentUser: BehaviorSubject<User>;
}

/**
 * Collection of common localization operations.
 */
export interface IWebFrameContextLocalizationService {
  translate(phrase: string): string;
  changeLocalization(locale: string, parameters?: Object): void;
}

/**
 * Collection of common navigation operations.
 */
export interface IWebFrameContextNavigationService {
  navigateToUrl(url: string): void;
  navigateToLogin(): void;
  navigateToLogout(): void;
  navigateToNotFoundErrorPage(): void;
  navigateToAccessDeniedErrorPage(): void;
  refreshCurrentPage(): void;
}

// tslint:disable-next-line:no-empty-interface
export interface INotificationConfiguration {
  // TODO
}

// tslint:disable-next-line:no-empty-interface
export interface IDialogConfiguration {
  // TODO
}

/**
 * Collection of common UI operations.
 */
export interface IWebFrameContextUIService {
  /**
   * Show a notification.
   * @param configuration The configuration for notifaction.
   */
  showNotification(configuration: INotificationConfiguration): void;

  /**
   * Show a dialog.
   * @param configuration The configuration of the dialog.
   * @param cancelCallback The cancel callback of the dialog.
   */
  showDialog(configuration: IDialogConfiguration, cancelCallback: Function): void;

  /**
   * Show a confirmation dialog.
   * @param configuration The configuration of the confirm dialog.
   * @param confirmCallback The confirmation callback of the dialog.
   * @param cancelCallback  The cancel callback of the dialog.
   */
  showConfirmationDialog(configuration: IDialogConfiguration, confirmCallback: Function, cancelCallback: Function): void;
}

export interface IWebFrameContextService {
  state: IWebFrameContextStateService;
  localization: IWebFrameContextLocalizationService;
  navigation: IWebFrameContextNavigationService;
  ui: IWebFrameContextUIService;
}
