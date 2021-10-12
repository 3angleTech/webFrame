/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInitializer } from '~app-shared/core';

import { TranslateInitializerService } from './translate-initializer.service';

export const translateInitializerFactory = (
  translateInitializerService: TranslateInitializerService,
): AppInitializer => {
  return (): Observable<void> => {
    return translateInitializerService.initialize();
  };
};

export const TRANSLATE_INITIALIZER_PROVIDERS: Provider[] = [
  TranslateInitializerService,
  {
    provide: APP_INITIALIZER,
    useFactory: translateInitializerFactory,
    deps: [
      TranslateInitializerService,
    ],
    multi: true,
  },
];
