/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { KnownError } from './known.error';

export class PageNotFoundError extends KnownError {
  public readonly name: 'PageNotFoundError';

  constructor(message: string, location?: string) {
    super(message, location);
  }
}
