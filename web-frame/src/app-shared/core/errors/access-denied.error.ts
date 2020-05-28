/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { KnownError } from './known.error';

export class AccessDeniedError extends KnownError {
  public name: 'AccessDeniedError';

  constructor(public message: string) {
    super(message);
  }
}
