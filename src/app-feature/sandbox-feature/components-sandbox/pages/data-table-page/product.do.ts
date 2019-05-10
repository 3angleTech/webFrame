/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Product {
  @JsonProperty('id', Number, true)
  public id: number = undefined;

  @JsonProperty('asin', String, true)
  public asin: string = undefined;

  @JsonProperty('price', Number, true)
  public price: number = undefined;

  @JsonProperty('no_reviews', Number, true)
  public no_reviews: number = undefined;

  @JsonProperty('no_sellers', Number, true)
  public no_sellers: number = undefined;
}
