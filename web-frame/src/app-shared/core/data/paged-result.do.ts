/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonProperty } from 'json2typescript';

/**
 * The extending class must be decorated with `@JsonObject('...')` and it must
 * provide a `@JsonProperty()` decorated override for the results property.
 */
export abstract class PagedResult<T> {
  @JsonProperty('page', Number)
  public page: number = undefined;

  @JsonProperty('pageSize', Number)
  public pageSize: number = undefined;

  @JsonProperty('totalCount', Number)
  public totalCount: number = undefined;

  public abstract results: T[] = undefined;
}
