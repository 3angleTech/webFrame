/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from './translation/translation.interface';

export interface INotificationConfig {
  message: TranslationPhrase;
  messageArgs?: TranslationPhraseArgs;
}

export interface INotificationService {
  showNotification(config: INotificationConfig): void;
}
export const INotificationService = new InjectionToken('INotificationService');

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
