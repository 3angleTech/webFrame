/**
 * Provides the core shared module.
 */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { FormControlErrorsComponent } from './components/form-control-errors/form-control-errors.component';
import { IAccountService } from './interface/account.service';
import { INotificationService } from './interface/notification.service';
import { ITranslationService } from './interface/translation.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { AccountService } from './service/account.service';
import { NotificationService } from './service/notification.service';
import { TranslationService } from './service/translation.service';

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
];

@NgModule({
  imports: [
    CommonModule,
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
