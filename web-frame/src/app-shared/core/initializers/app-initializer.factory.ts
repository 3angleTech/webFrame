/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Provider } from '@angular/core';
import { concat } from 'rxjs';

import { AppFeaturesInitializerService } from './app-features-initializer.service';
import { AppStateInitializerService } from './app-state-initializer.service';

export type AppInitializer = () => Promise<void>;

export const appInitializerFactory = (
  featuresInitializerService: AppFeaturesInitializerService,
  stateInitializerService: AppStateInitializerService,
): AppInitializer => {
  return async (): Promise<void> => {
    return concat(
      stateInitializerService.initialize(),
      featuresInitializerService.initialize(),
    ).toPromise();
  };
};

export const APP_INITIALIZER_PROVIDERS: Provider[] = [
  AppFeaturesInitializerService,
  AppStateInitializerService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [
      AppFeaturesInitializerService,
      AppStateInitializerService,
    ],
    multi: true,
  },
];
