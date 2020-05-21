/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IEnvironmentConfig } from '../interfaces/environment-config.interface';

/** @internal This variable should never be used directly; only by the build process. */
export const ENVIRONMENT: Readonly<IEnvironmentConfig> = {
  apiBaseUrl: '/api/v1',
  appBaseUrl: '/',
  appName: '',
  clientId: '',
  clientSecret: '',
};
