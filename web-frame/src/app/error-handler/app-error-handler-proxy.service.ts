/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, EventEmitter, Injectable } from '@angular/core';

import { isHttpErrorResponseOrKnownError, IWebFrameErrorHandlerProxy } from '~app-shared/core';

/**
 * Replaces the Angular Core ErrorHandler class in order to emit errors.
 *
 * NOTE: Never use directly, use the isWebFrameErrorHandlerProxy type guard on the ErrorHandler injection token.
 *
 * @see isWebFrameErrorHandlerProxy()
 */
@Injectable()
export class AppErrorHandlerProxyService extends ErrorHandler implements IWebFrameErrorHandlerProxy {
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
