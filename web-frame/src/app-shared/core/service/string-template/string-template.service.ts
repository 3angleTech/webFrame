/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Injectable, InjectionToken } from '@angular/core';
import { forEach, map, union } from 'lodash';

import { isNil } from 'app-shared/utils';

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

@Injectable()
export class StringTemplateService implements IStringTemplateService {
  private PLACEHOLDER_VARIABLE_FORMAT_REG_EXP: RegExp = /{{\s?([^{}\s]*)\s?}}/g;

  public interpolate(template: string, parameters: Object): string {
    this.validateTemplateAndParameters(template, parameters);

    return template.replace(this.PLACEHOLDER_VARIABLE_FORMAT_REG_EXP, (formatItem: string, actualKey: string) => {
      if (isNil(parameters, actualKey)) {
        return '';
      }
      return parameters[actualKey];
    });
  }

  private validateTemplateAndParameters(template: string, parameters: Object): void {
    const normalizedParameters = (parameters) ? parameters : {};

    const parameterList = Object.keys(normalizedParameters);
    const pVariableFormatList = template.match(this.PLACEHOLDER_VARIABLE_FORMAT_REG_EXP);

    const DEFINED = 1;
    const pVariableDict = {};
    const pVariableList = map(pVariableFormatList, vf => this.parsePlaceholderVariableFormat(vf));

    forEach(pVariableList, p => { pVariableDict[p] = DEFINED; });

    const keyList = union(pVariableList, parameterList);
    forEach(keyList, key => {
      if (isNil(pVariableDict[key])) {
        console.warn(`Parameter "${key}" is not defined in the template "${template}"`);
      }
      if (isNil(normalizedParameters[key])) {
        console.warn(`Placeholder variable \{{${key}\}} from template "${template}" is not defined
        in parameters list ${JSON.stringify(parameterList)}`);
      }
    });
  }

  private parsePlaceholderVariableFormat(variableFormat: string): string {
    return variableFormat.replace(this.PLACEHOLDER_VARIABLE_FORMAT_REG_EXP, (formatVariable: string, actualKey: string) => {
      return actualKey;
    });
  }
}
