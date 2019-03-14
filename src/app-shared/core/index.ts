/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * This file contains an explicit list of things exported in the current directory.
 */

export { CoreModule } from './core.module';
export { User } from './data/user.do';
export { Empty } from './data/empty.do';
export { IAccountCredentials, IAccountInformation, IAccountService } from './service/account/account.interface';
export { Dictionary } from './interface/dictionary';
export { INotificationConfiguration, INotificationService } from './service/notification/notification.service';
export { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from './service/translation/translation.interface';

export {
  IWebFrameContextService,
  IWebFrameContextStateService,
  IWebFrameContextLocalizationService,
  IWebFrameContextNavigationService,
  IWebFrameContextUIService,
} from './service/web-frame-context/index';
