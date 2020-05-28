/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, EventEmitter, Provider } from '@angular/core';
import { isHttpErrorResponseOrKnownError, IWebFrameErrorHandler } from '~app-shared/core';

/**
 * Replaces the Angular Core ErrorHandler class in order to emit errors.
 */
export class AppErrorHandler extends ErrorHandler implements IWebFrameErrorHandler {
  public readonly errors$: EventEmitter<unknown>
    = new EventEmitter<unknown>();

  private runtimeErrorEncountered: boolean = false;

  public handleError(err: unknown): void {
    if (!this.runtimeErrorEncountered) {
      if (!isHttpErrorResponseOrKnownError(err)) {
        this.runtimeErrorEncountered = true;
      }
      this.errors$.emit(err);
    }
    super.handleError(err);
  }
}

export const APP_ERROR_HANDLER_PROVIDER: Provider = {
  provide: ErrorHandler,
  useClass: AppErrorHandler,
};
