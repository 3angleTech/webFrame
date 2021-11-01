/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
export interface IApiErrorProperties {
  name: string;
  message: string;
  httpStatusCode: number;
}

export function isApiErrorProperties(value: unknown): value is IApiErrorProperties {
  if (typeof value !== 'object' && value === null) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(value, 'name') &&
    Object.prototype.hasOwnProperty.call(value, 'message') &&
    Object.prototype.hasOwnProperty.call(value, 'httpStatusCode') &&
    typeof (value as { httpStatusCode: unknown }).httpStatusCode === 'number';
}
