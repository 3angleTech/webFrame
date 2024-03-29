/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Service for localization operations.
 */
import { Injectable, InjectionToken } from '@angular/core';

/**
 * Service for common localization operations.
 */
export interface IWebFrameContextLocalizationService {
  translate(phrase: string, parameters?: Record<string, string | number>): string;
  changeLocalization(locale: string): void;
}
export const IWebFrameContextLocalizationService = new InjectionToken('IWebFrameContextLocalizationService');

@Injectable()
export class WebFrameContextLocalizationService implements IWebFrameContextLocalizationService {
  public translate(phrase: string, parameters?: Record<string, string | number>): string {
    throw new Error('Method not implemented');
  }

  public changeLocalization(locale: string): void {
    throw new Error('Method not implemented');
  }
}
