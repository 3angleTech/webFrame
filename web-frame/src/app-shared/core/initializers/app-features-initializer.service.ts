/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AVAILABLE_FEATURE_MODULES } from '~app-shared/config';

@Injectable()
export class AppFeaturesInitializerService {
  constructor(
    private router: Router,
  ) {
  }

  public initialize(): Observable<void> {
    return this.getEnabledFeatures().pipe(
      map((enabledFeatures: string[]): void => {
        const routes: Routes = this.getRoutesForEnabledFeatures(enabledFeatures);
        this.registerAvailableRoutes(routes);

        return undefined;
      }),
    );
  }

  private getEnabledFeatures(): Observable<string[]> {
    const enabledFeatures: string[] = [];
    Object.keys(AVAILABLE_FEATURE_MODULES).forEach((featureName: string): void => {
      enabledFeatures.push(featureName);
    });

    return of(enabledFeatures);
  }

  private getRoutesForEnabledFeatures(enabledFeatures: string[]): Routes {
    const routes: Routes = [];

    enabledFeatures.forEach((featureName: string): void => {
      routes.push({
        path: featureName,
        loadChildren: AVAILABLE_FEATURE_MODULES[featureName],
      });
    });

    return routes;
  }

  private registerAvailableRoutes(routes: Routes): void {
    const defaultRoutePath: string = routes[0].path;
    const defaultRedirect: Route = {
      path: '',
      pathMatch: 'full',
      redirectTo: defaultRoutePath,
    };
    routes.unshift(defaultRedirect);
    this.router.resetConfig(routes);
  }
}
