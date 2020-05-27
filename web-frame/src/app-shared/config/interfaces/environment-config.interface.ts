/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
export interface IEnvironmentConfig {
  apiBaseUrl: string;
  /**
   * The Base URL where the application is served. It can be an absolute URL, or a relative URL from the domain root.
   *
   * The path for the base URL needs to match the base element href attribute defined in index.html.
   */
  appBaseUrl: string;
  appName: string;
  clientId: string;
  clientSecret: string;
  devMode?: boolean;
}

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
