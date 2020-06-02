/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Provider } from '@angular/core';
import { concat } from 'rxjs';

import { AppFeaturesInitializerService } from './app-features-initializer.service';
import { AppInitializer } from './app-initializer.type';
import { AppStateInitializerService } from './app-state-initializer.service';

export const coreInitializerFactory = (
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

export const CORE_INITIALIZER_PROVIDERS: Provider[] = [
  AppFeaturesInitializerService,
  AppStateInitializerService,
  {
    provide: APP_INITIALIZER,
    useFactory: coreInitializerFactory,
    deps: [
      AppFeaturesInitializerService,
      AppStateInitializerService,
    ],
    multi: true,
  },
];
