/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Product')
export class Product {
  @JsonProperty('id', Number, true)
  public id: number = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('price', Number, true)
  public price: number = undefined;
}
