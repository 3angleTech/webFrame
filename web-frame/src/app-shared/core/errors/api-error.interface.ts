/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

export interface IApiError {
  name: string;
  message: string;
  httpStatusCode: number;
}

export function isApiError(value: unknown): value is IApiError {
  return typeof value === 'object'
    && value !== null
    && value.hasOwnProperty('name')
    && !!(value as { name: string }).name.match(/^[A-Z][A-Z_]+[A-Z]$/)
    && value.hasOwnProperty('message')
    && value.hasOwnProperty('httpStatusCode')
    && typeof (value as { httpStatusCode: unknown }).httpStatusCode === 'number';
}
