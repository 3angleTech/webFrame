/**
 * Provides the core shared module.
 */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { IAccountService } from './interface/account.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { AccountService } from './service/account.service';


const SHARED_COMPONENTS: Type<any>[] = [
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
