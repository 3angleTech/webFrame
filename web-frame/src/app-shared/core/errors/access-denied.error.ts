/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { KnownError } from './known.error';

export class AccessDeniedError extends KnownError {
  public readonly name: 'AccessDeniedError';

  constructor(message: string, location?: string) {
    super(message, location);
  }
}
