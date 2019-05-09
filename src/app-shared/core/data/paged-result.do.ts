/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class PagedResult<T> {
    @JsonProperty('page', Number, true)
    public page: number = undefined;

    @JsonProperty('pageSize', Number, true)
    public pageSize: number = undefined;

    @JsonProperty('totalCount', Number, true)
    public totalCount: number = undefined;

    public results: T[];
}
