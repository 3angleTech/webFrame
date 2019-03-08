/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { InjectionToken } from '@angular/core';

export interface IJsonConverterService {
  deserialize<T>(json: any, classReference: { new(): T }): T;
  serialize<T>(object: T): Object;
}
export const IJsonConverterService = new InjectionToken('IJsonConverterService');
