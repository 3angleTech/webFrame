/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * This file contains an explicit list of things exported in the current directory.
 */

export { CoreModule } from './core.module';
export { Empty } from './data/empty.do';
export { PagedResult } from './data/paged-result.do';
export {
  IJsonConverterService,
} from './service/json-converter/json-converter.service';
export { User } from './data/user.do';
export {
  IAccountChangePasswordRequest,
  IAccountForgotPasswordRequest,
  IAccountResetPasswordRequest,
  IAccountCredentials,
  IAccountInformation,
  IAccountService,
} from './service/account/account.service';
export { Dictionary } from './interface/dictionary';
export {
  INotificationConfiguration,
  INotificationService,
} from './service/notification/notification.service';
export {
  ITranslationService,
  TranslationPhrase,
  TranslationPhraseArgs,
} from './service/translation/translation.service';

export {
  IWebFrameContextService,
} from './service/web-frame-context/web-frame-context.service';
export {
  IWebFrameContextStateService,
} from './service/web-frame-context/web-frame-context-state.service';
export {
  IWebFrameContextLocalizationService,
} from './service/web-frame-context/web-frame-context-localization.service';
export {
  IWebFrameContextNavigationService,
} from './service/web-frame-context/web-frame-context-navigation.service';
export {
  IWebFrameContextUIService,
} from './service/web-frame-context/web-frame-context-ui.service';

export {
  IWebRequestService,
} from './service/web-request/web-request.interface';
