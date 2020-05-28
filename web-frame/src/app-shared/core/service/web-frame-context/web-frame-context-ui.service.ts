/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';

import {
  INotificationConfiguration,
  INotificationService,
} from '../notification/notification.service';

/**
 * Service for common UI operations.
 */
export interface IWebFrameContextUIService {
  /**
   * Show a notification.
   * @param configuration The configuration for notification.
   */
  showNotification(configuration: INotificationConfiguration): void;

  /**
   * Show a dialog.
   * @param configuration The configuration of the dialog.
   * @param cancelCallback The cancel callback of the dialog.
   */
  showDialog(
    configuration: IDialogConfiguration,
    cancelCallback: Function,
  ): void;

  /**
   * Show a confirmation dialog.
   * @param configuration The configuration of the confirm dialog.
   * @param confirmCallback The confirmation callback of the dialog.
   * @param cancelCallback  The cancel callback of the dialog.
   */
  showConfirmationDialog(
    configuration: IDialogConfiguration,
    confirmCallback: Function,
    cancelCallback: Function,
  ): void;
}

export const IWebFrameContextUIService =
  new InjectionToken('IWebFrameContextUIService');

export interface IDialogConfiguration {
  title: string;
  message: string;
}

@Injectable()
export class WebFrameContextUIService implements IWebFrameContextUIService {
  constructor(
    @Inject(INotificationService)
    private notificationService: INotificationService,
  ) {
  }

  public showNotification(configuration: INotificationConfiguration): void {
    this.notificationService.showNotification(configuration);
  }

  public showDialog(
    configuration: IDialogConfiguration,
    cancelCallback: Function,
  ): void {
    throw new Error('Method not implemented.');
  }

  public showConfirmationDialog(
    configuration: IDialogConfiguration,
    confirmCallback: Function,
    cancelCallback: Function,
  ): void {
    throw new Error('Method not implemented.');
  }
}
