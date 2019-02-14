/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { InjectionToken } from '@angular/core';

export interface IStringTemplateService {
  /**
   * Interpolate a string template with the parameters passed as input.
   * E.g. For the template 'Showing {{ resultsCount }} items out of {{ totalCount }}.',
   * with the parameters: { resultsCount: 25, totalCount: 348 } we will get:
   * 'Showing 25 items out of 348.'
   */
  interpolate(template: string, parameters: Object): string;
}
export const IStringTemplateService = new InjectionToken('IStringTemplateService');
