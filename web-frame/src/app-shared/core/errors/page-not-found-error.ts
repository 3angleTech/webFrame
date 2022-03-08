/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { AppError, IAppErrorProperties } from './app-error';

export class PageNotFoundError extends AppError {
  public readonly name: string = 'PageNotFoundError';

  constructor(message: string)
  constructor(parameters: IAppErrorProperties)
  constructor(messageOrParameters: IAppErrorProperties | string) {
    super(typeof messageOrParameters === 'string' ? { message: messageOrParameters } : messageOrParameters);
  }
}
