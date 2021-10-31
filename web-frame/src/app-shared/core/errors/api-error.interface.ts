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
  if (typeof value !== 'object' && value === null) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(value, 'name') &&
    !!(value as { name: string }).name.match(/^[A-Z][A-Z_]+[A-Z]$/) &&
    Object.prototype.hasOwnProperty.call(value, 'message') &&
    Object.prototype.hasOwnProperty.call(value, 'httpStatusCode') &&
    typeof (value as { httpStatusCode: unknown }).httpStatusCode === 'number';
}
