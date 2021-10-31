/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';

export abstract class KnownError extends Error {
  public abstract readonly name: string;
  public readonly message: string;
  public readonly location?: string;

  protected constructor(message: string, location?: string) {
    // NOTE: To avoid `enumerable: false` issues, the Error class is called without any arguments.
    super();
    this.message = message;
    this.location = location || undefined;
  }
}

export function isHttpErrorResponseOrKnownError(err: unknown): boolean {
  return err instanceof HttpErrorResponse || err instanceof KnownError;
}
