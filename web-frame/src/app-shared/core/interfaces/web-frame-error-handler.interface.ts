/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ErrorHandler, EventEmitter } from '@angular/core';

export interface IWebFrameErrorHandler extends ErrorHandler {
  readonly errors$: EventEmitter<unknown>;
}

export function isWebFrameErrorHandler(value: unknown): value is IWebFrameErrorHandler {
  return typeof value === 'object'
    && value !== null
    && value.hasOwnProperty('errors$')
    && (value as { errors$: unknown }).errors$ instanceof EventEmitter
    && value instanceof ErrorHandler;
}
