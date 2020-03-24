/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the security app-shared module.
 */
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { AccountService, IAccountService } from 'app-shared/core/service/account/account.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';

const SHARED_ROOT_PROVIDERS: Provider[] = [
  {
    provide: IAccountService,
    useClass: AccountService,
  },
  AuthenticatedGuard,
];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: SHARED_ROOT_PROVIDERS,
    };
  }
}
