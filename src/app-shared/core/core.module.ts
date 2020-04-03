/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the core shared module.
 */
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';

import { FormControlErrorsComponent } from './components/form-control-errors/form-control-errors.component';
import { TranslatePipe } from './pipes/translate.pipe';
import {
  AccountService,
  IAccountService,
} from './service/account/account.service';
import { IApiEndpointBuilderService } from './service/api-endpoint-builder/api-endpoint-builder.interface';
import { ApiEndpointBuilderService } from './service/api-endpoint-builder/api-endpoint-builder.service';
import {
  IJsonConverterService,
  JsonConverterService,
} from './service/json-converter/json-converter.service';
import {
  INotificationService,
  NotificationService,
} from './service/notification/notification.service';
import {
  IStorageService,
  StorageService,
} from './service/storage/storage.service';
import {
  IStringTemplateService,
  StringTemplateService,
} from './service/string-template/string-template.service';
import {
  ITranslationService,
  TranslationService,
} from './service/translation/translation.service';
import {
  IWebFrameContextLocalizationService,
  WebFrameContextLocalizationService,
} from './service/web-frame-context/web-frame-context-localization.service';
import {
  IWebFrameContextNavigationService,
  WebFrameContextNavigationService,
} from './service/web-frame-context/web-frame-context-navigation.service';
import {
  IWebFrameContextStateService,
  WebFrameContextStateService,
} from './service/web-frame-context/web-frame-context-state.service';
import {
  IWebFrameContextUIService,
  WebFrameContextUIService,
} from './service/web-frame-context/web-frame-context-ui.service';
import {
  IWebFrameContextService,
  WebFrameContextService,
} from './service/web-frame-context/web-frame-context.service';
import { WebRequestInterceptorService } from './service/web-request/web-request-interceptor.service';
import { IWebRequestService } from './service/web-request/web-request.interface';
import { WebRequestService } from './service/web-request/web-request.service';

const SHARED_COMPONENTS: Type<unknown>[] = [
  FormControlErrorsComponent,
];

const SHARED_DIRECTIVES: Type<unknown>[] = [
];

const SHARED_PIPES: Type<unknown>[] = [
  TranslatePipe,
];

const SHARED_ROOT_PROVIDERS: Provider[] = [
  {
    provide: IAccountService,
    useClass: AccountService,
  },
  {
    provide: INotificationService,
    useClass: NotificationService,
  },
  {
    provide: IStorageService,
    useClass: StorageService,
  },
  {
    provide: ITranslationService,
    useClass: TranslationService,
  },
  {
    provide: IApiEndpointBuilderService,
    useClass: ApiEndpointBuilderService,
  },
  {
    provide: IWebRequestService,
    useClass: WebRequestService,
  },
  {
    provide: IStringTemplateService,
    useClass: StringTemplateService,
  },
  {
    provide: IJsonConverterService,
    useClass: JsonConverterService,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: WebRequestInterceptorService,
    multi: true,
  },
  {
    provide: IWebFrameContextService,
    useClass: WebFrameContextService,
  },
  {
    provide: IWebFrameContextLocalizationService,
    useClass: WebFrameContextLocalizationService,
  },
  {
    provide: IWebFrameContextNavigationService,
    useClass: WebFrameContextNavigationService,
  },
  {
    provide: IWebFrameContextStateService,
    useClass: WebFrameContextStateService,
  },
  {
    provide: IWebFrameContextUIService,
    useClass: WebFrameContextUIService,
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ],
  declarations: [
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: SHARED_ROOT_PROVIDERS,
    };
  }
}
