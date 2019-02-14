/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the core shared module.
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { FormControlErrorsComponent } from './components/form-control-errors/form-control-errors.component';
import { IAccountService } from './interface/account.interface';
import { IApiEndpointBuilderService } from './interface/api-endpoint-builder.interface';
import { INotificationService } from './interface/notification.interface';
import { IStringTemplateService } from './interface/string-template.interface';
import { ITranslationService } from './interface/translation.interface';
import { IWebRequestService } from './interface/web-request.interface';
import { TranslatePipe } from './pipes/translate.pipe';
import { AccountService } from './service/account.service';
import { ApiEndpointBuilderService } from './service/api-endpoint-builder.service';
import { NotificationService } from './service/notification.service';
import { StringTemplateService } from './service/string-template.service';
import { TranslationService } from './service/translation.service';
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
