/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, InjectionToken } from '@angular/core';
import { INotificationConfiguration, ITranslationService } from 'app-shared/core';
import { INotificationService } from '../notification/notification.service';

/**
 * Service for common UI operations.
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
export const IWebFrameContextUIService = new InjectionToken('IWebFrameContextUIService');

// tslint:disable-next-line:no-empty-interface
// export interface INotificationConfiguration {
//   // TODO
// }

// tslint:disable-next-line:no-empty-interface
export interface IDialogConfiguration {
  // TODO
}

// tslint:disable:no-duplicate-string
export class WebFrameContextUIService implements IWebFrameContextUIService {
  constructor(
    @Inject(INotificationService)
    private notificationService: INotificationService,
  ) { }

  public showNotification(configuration: INotificationConfiguration): void {
    this.notificationService.showNotification(configuration);
  }

  public showDialog(configuration: IDialogConfiguration, cancelCallback: Function): void {
    throw new Error('Method not implemented.');
  }
  public showConfirmationDialog(configuration: IDialogConfiguration, confirmCallback: Function, cancelCallback: Function): void {
    throw new Error('Method not implemented.');
  }

}
