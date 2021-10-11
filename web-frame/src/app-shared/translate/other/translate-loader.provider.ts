/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpClient } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader as UpstreamTranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { BUILD_FLAGS, ENVIRONMENT } from '~app-shared/config';

export class TranslateHttpLoader extends UpstreamTranslateHttpLoader {
  public getTranslation(lang: string): Observable<Object> {
    const newLang = lang.replace(/-PSEUDO.*$/g, '');

    return super.getTranslation(newLang);
  }
}

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
