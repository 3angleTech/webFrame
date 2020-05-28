/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { KnownError } from './known.error';

export class PageNotFoundError extends KnownError {
  public name: 'PageNotFoundError';

  constructor(public message: string) {
    super(message);
  }
}
