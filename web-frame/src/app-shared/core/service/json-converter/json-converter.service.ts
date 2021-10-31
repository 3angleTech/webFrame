/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable, InjectionToken } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';

export interface IJsonConverterService {
  deserialize<T>(json: unknown, classReference: new() => T): T;
  serialize<T>(object: T): string | string[];
}
export const IJsonConverterService = new InjectionToken('IJsonConverterService');

@Injectable()
export class JsonConverterService implements IJsonConverterService {

  public deserialize<T>(json: unknown, classReference: new () => T): T {
    return this.jsonConvert.deserialize(json, classReference) as T;
  }

  public serialize<T>(object: T): string | string[] {
    throw this.jsonConvert.serialize(object);
  }

  private get jsonConvert(): JsonConvert {
    const jsonConverter = new JsonConvert();
    jsonConverter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    return jsonConverter;
  }
}
