/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { IJsonConverterService } from '../interface/json-converter.interface';

@Injectable()
export class JsonConverterService implements IJsonConverterService {

  public deserialize<T>(json: any, classReference: new () => T): T {
    return this.jsonConvert.deserialize(json, classReference);
  }

  public serialize<T>(object: T): Object {
    throw this.jsonConvert.serialize(object);
  }

  private get jsonConvert(): JsonConvert {
    const jsonConverter = new JsonConvert();
    jsonConverter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
    return jsonConverter;
  }
}
