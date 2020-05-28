/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonObject, JsonProperty } from 'json2typescript';

import { BaseDataObject } from './base.do';

export enum UserStatus {
  Inactive,
  Active,
}

@JsonObject('User')
export class User extends BaseDataObject {
  @JsonProperty('id', Number, true)
  public id: number = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  public get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
