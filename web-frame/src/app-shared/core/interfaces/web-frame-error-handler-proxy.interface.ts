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
  if (typeof value !== 'object' && value === null) {
    return false;
  }
  return Object.keys(value).includes('errors$') &&
    (value as { errors$: unknown }).errors$ instanceof EventEmitter &&
    value instanceof ErrorHandler;
}
