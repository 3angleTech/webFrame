/**
 * Provides INotificationService.
 */
import { InjectionToken } from '@angular/core';
import { TranslationPhrase, TranslationPhraseArgs } from './translation.service';


export interface INotificationConfig {
  message: TranslationPhrase;
  messageArgs?: TranslationPhraseArgs;
}

export interface INotificationService {
  showNotification(config: INotificationConfig): void;
}
export const INotificationService = new InjectionToken('INotificationService');
