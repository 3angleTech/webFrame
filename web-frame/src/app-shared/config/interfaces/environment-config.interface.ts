/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
export interface IEnvironmentConfig {
  apiBaseUrl: string;
  /**
   * The Base URL where the application is served. It can be an absolute URL, or a relative URL from the domain root.
   *
   * The path for the base URL needs to match the base element href attribute defined in index.html.
   *
   * TODO: #143 Inherit the value set by the Angular CLI `--deployUrl` and improve DX trimming of slashes.
   * NOTE: The URL must end with a forward-slash (/).
   */
  appBaseUrl: string;
  appName: string;
  clientId: string;
  clientSecret: string;
  devMode?: boolean;
}
