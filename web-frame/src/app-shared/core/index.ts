/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * This file contains an explicit list of things exported in the current directory.
 */

export { CoreModule } from './core.module';

export { User } from './data/user.do';
export { Empty } from './data/empty.do';
export { PagedResult } from './data/paged-result.do';
export { Dictionary } from './interfaces/dictionary';
export { IWebFrameErrorHandler } from './interfaces/web-frame-error-handler.interface';
export {
  IAppRefresher,
  APP_REFRESHER,
} from './other/app-refresher.token';
export { FORCE_REFRESH_PAGE_ROUTE } from './other/force-refresh-page.route';
export { PAGE_URL } from './other/page-url.enum';

export {
  ServerApi,
} from './service/api-endpoint-builder/api-endpoint-builder.interface';
export {
  IJsonConverterService,
} from './service/json-converter/json-converter.service';
export {
  IAccountChangePasswordRequest,
  IAccountForgotPasswordRequest,
  IAccountResetPasswordRequest,
  IAccountCredentials,
  IAccountInformation,
  IAccountService,
} from './service/account/account.service';
export {
  INotificationConfiguration,
  INotificationService,
} from './service/notification/notification.service';
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
  WebFrameErrorHandlerService,
} from './service/web-frame-error-handler.service';
export {
  IWebRequestService,
} from './service/web-request/web-request.interface';
