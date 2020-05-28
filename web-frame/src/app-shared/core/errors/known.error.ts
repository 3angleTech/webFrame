/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';

export class KnownError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

export function isHttpErrorResponseOrKnownError(err: unknown): boolean {
  return err instanceof HttpErrorResponse || err instanceof KnownError;
}
