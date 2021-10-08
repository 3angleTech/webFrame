/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, EventEmitter, Injectable } from '@angular/core';
import { isHttpErrorResponseOrKnownError, IWebFrameErrorHandler } from '~app-shared/core';

/**
 * Replaces the Angular Core ErrorHandler class in order to emit errors.
 *
 * NOTE: This service should never be used directly, it's a replacement for the core ErrorHandler.
 */
@Injectable()
export class AppErrorHandlerService extends ErrorHandler implements IWebFrameErrorHandler {
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
