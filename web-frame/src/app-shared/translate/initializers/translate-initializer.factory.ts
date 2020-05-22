/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Provider } from '@angular/core';

import { TranslateInitializerService } from './translate-initializer.service';

export type AppInitializer = () => Promise<void>;

export const translateInitializerFactory = (
  translateInitializerService: TranslateInitializerService,
): AppInitializer => {
  return async (): Promise<void> => {
    return translateInitializerService.initialize().toPromise();
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
