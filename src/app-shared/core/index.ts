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
export { IAccountCredentials, IAccountInformation, IAccountService } from './service/account.interface';
export { Dictionary } from './interface/dictionary';
export { INotificationConfig, INotificationService } from './service/notification.interface';
export { ITranslationService, TranslationPhrase, TranslationPhraseArgs } from './service/translation.interface';
export { IWebFrameContextStateService } from './service/web-frame-context/web-frame-context.interface';
export { IWebFrameContextLocalizationService } from './service/web-frame-context/web-frame-context.interface';
export { IWebFrameContextNavigationService } from './service/web-frame-context/web-frame-context.interface';
export { IWebFrameContextUIService } from './service/web-frame-context/web-frame-context.interface';
