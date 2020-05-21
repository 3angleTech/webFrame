/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IEnvironmentConfig } from '../interfaces/environment-config.interface';

/**
 * @file Provides configuration for the current environment.
 *
 * NOTE: This file will be replaced during the build process.
 */
export const ENVIRONMENT: Readonly<IEnvironmentConfig> = {
  apiBaseUrl: 'http://localhost:3000/api/v1',
  appName: 'WebFrame-3angleTECH',
  clientId: '3at-api',
  clientSecret: '5r5rd15c650f4849119eb894939d9fdaaf5f7d0e7e0f65de15b71bfa6411011y',
  devMode: true,
};

/**
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// tslint:disable-next-line:comment-format
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
