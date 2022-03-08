/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, NgModule } from '@angular/core';

import { AppErrorHandlerProxyService } from './app-error-handler-proxy.service';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandlerProxyService,
    },
  ],
})
export class AppErrorHandlerModule {
}
