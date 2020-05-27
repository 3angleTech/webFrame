/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IEnvironmentConfig } from '../interfaces/environment-config.interface';

export function validateEnvironmentConfig(config: IEnvironmentConfig): void | never {
  if (!config.apiBaseUrl || config.apiBaseUrl === '') {
    throw new Error('Invalid environment configuration, apiBaseUrl is missing.');
  }
  if (!config.appBaseUrl) {
    throw new Error('Invalid environment configuration, appBaseUrl is missing.');
  }
  if (!config.appBaseUrl.endsWith('/')) {
    throw new Error('Invalid environment configuration, appBaseUrl must end with a forward slash (/).');
  }
}
