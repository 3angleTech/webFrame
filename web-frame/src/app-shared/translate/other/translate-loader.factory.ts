/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:import-blacklist */
import { HttpClient } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BUILD_FLAGS, ENVIRONMENT } from '~app-shared/config';

export function translateLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  const filePrefix = `${ ENVIRONMENT.appBaseUrl }assets/i18n/`;
  const fileSuffix = '.json?v=' + BUILD_FLAGS.clientVersion;

  return new TranslateHttpLoader(httpClient, filePrefix, fileSuffix);
}

export const TRANSLATE_LOADER_PROVIDER: FactoryProvider = {
  provide: TranslateLoader,
  useFactory: translateLoaderFactory,
  deps: [
    HttpClient,
  ],
};
