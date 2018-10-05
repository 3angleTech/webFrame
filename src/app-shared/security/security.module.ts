/**
 * Provides the security app-shared module.
 */
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

const SHARED_ROOT_PROVIDERS: Provider[] = [
];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: SHARED_ROOT_PROVIDERS,
    };
  }
}
