/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

 /**
  * Service for localization operations.
  */
export interface IWebFrameContextLocalizationService {
  translate(phrase: string, parameters?: Object): string;
  changeLocalization(locale: string): void;
}

export class WebFrameContextLocalizationService implements IWebFrameContextLocalizationService {
  public translate(phrase: string, parameters?: Object): string {
    throw new Error('Method not implemented');
  }

  public changeLocalization(locale: string): void {
    throw new Error('Method not implemented');
  }
}
