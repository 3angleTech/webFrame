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
import { IAccountService } from './service/account.interface';
import { AccountService } from './service/account.service';
import { IApiEndpointBuilderService } from './service/api-endpoint-builder.interface';
import { ApiEndpointBuilderService } from './service/api-endpoint-builder.service';
import { INotificationService } from './service/notification.interface';
import { NotificationService } from './service/notification.service';
import { IStringTemplateService } from './service/string-template.interface';
import { StringTemplateService } from './service/string-template.service';
import { ITranslationService } from './service/translation.interface';
import { TranslationService } from './service/translation.service';
import { WebRequestInterceptorService } from './service/web-request-interceptor.service';
import { IWebRequestService } from './service/web-request.interface';
import { WebRequestService } from './service/web-request.service';

const SHARED_COMPONENTS: Type<any>[] = [
  FormControlErrorsComponent,
];

const SHARED_DIRECTIVES: Type<any>[] = [
];

const SHARED_PIPES: Type<any>[] = [
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
    provide: HTTP_INTERCEPTORS,
    useClass: WebRequestInterceptorService,
    multi: true,
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
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: SHARED_ROOT_PROVIDERS,
    };
  }
}
