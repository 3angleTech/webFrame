/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { APP_INITIALIZER, Provider } from '@angular/core';

import { AppInitializerService } from './app-initializer.service';

export type AppInitializer = () => Promise<void>;

export const appInitializerFactory = (
  initializerService: AppInitializerService,
): AppInitializer => {
  return async (): Promise<void> => {
    return initializerService.initialize().toPromise();
  };
};

export const APP_INITIALIZER_PROVIDERS: Provider[] = [
  AppInitializerService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [
      AppInitializerService,
    ],
    multi: true,
  },
];
