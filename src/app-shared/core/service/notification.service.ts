/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides NotificationService.
 */
import { Inject, Injectable } from '@angular/core';
import { INotificationConfig, INotificationService } from '../interface/notification.service';
import { ITranslationService } from '../interface/translation.service';

@Injectable()
export class NotificationService implements INotificationService {

  constructor(
    @Inject(ITranslationService)
    private translationService: ITranslationService,
  ) { }

  public showNotification(config: INotificationConfig): void {
    const translatedMessage = this.translationService.translate(config.message, config.messageArgs);

    // TODO: Properly implement the notification service.
    alert(translatedMessage);
  }
}
