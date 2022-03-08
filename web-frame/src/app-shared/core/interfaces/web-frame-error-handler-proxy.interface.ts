/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, EventEmitter } from '@angular/core';

export interface IWebFrameErrorHandlerProxy extends ErrorHandler {
  readonly errors$: EventEmitter<unknown>;
}

export function isWebFrameErrorHandlerProxy(value: unknown): value is IWebFrameErrorHandlerProxy {
  if (value && value instanceof ErrorHandler) {
    return (value as unknown as { errors$: unknown }).errors$ instanceof EventEmitter;
  }
  return false;
}
