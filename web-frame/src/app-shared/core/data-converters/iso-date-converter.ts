/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class ISODateConverter implements JsonCustomConvert<Date> {
  public serialize(date: Date): string {
    return date.toISOString();
  }

  public deserialize(isoString: string): Date {
    const millis = Date.parse(isoString);

    return new Date(millis);
  }
}
