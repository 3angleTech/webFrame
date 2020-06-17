/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, NgModule } from '@angular/core';

import { AppErrorHandlerService } from './app-error-handler.service';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandlerService,
    },
  ],
})
export class AppErrorHandlerModule {
}
