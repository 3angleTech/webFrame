/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpErrorResponse } from '@angular/common/http';

export interface IAppErrorProperties {
  location?: string;
  message?: string;
  originalError?: unknown;
}

export abstract class AppError extends Error {
  public abstract readonly name: string;
  public readonly message: string;
  public readonly location?: string;
  public readonly originalError?: NonNullable<unknown>;

  protected constructor(parameters: IAppErrorProperties) {
    // NOTE: To avoid `enumerable: false` issues, the Error class is called without any arguments.
    super();
    this.message = parameters.message;
    this.location = parameters.location || undefined;
    this.originalError = parameters.originalError || undefined;
  }
}

export function isAppErrorOrApiError(err: unknown): boolean {
  return err instanceof HttpErrorResponse || err instanceof AppError;
}
