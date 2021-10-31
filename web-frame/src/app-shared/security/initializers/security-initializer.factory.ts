/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { APP_INITIALIZER, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInitializer } from '~app-shared/core';

import { AccessControlService } from '../services/access-control.service';

export function securityInitializerFactory(service: AccessControlService): AppInitializer {
  return (): Observable<void> => {
    return service.initialize();
  };
}

export const SECURITY_INITIALIZER_PROVIDERS: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: securityInitializerFactory,
    deps: [AccessControlService],
    multi: true,
  },
];
