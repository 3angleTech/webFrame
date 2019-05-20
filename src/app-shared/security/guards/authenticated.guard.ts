/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { IWebFrameContextNavigationService, IWebFrameContextStateService } from 'app-shared/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
    @Inject(IWebFrameContextNavigationService)
    private navigationService: IWebFrameContextNavigationService,
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isAuthenticated().pipe(map((authenticated) => {
      if (!authenticated) {
        this.navigationService.navigateToAccessDeniedErrorPage();
        return false;
      }

      return true;
    }));
  }

  private isAuthenticated(): Observable<boolean> {
    if (this.stateService.currentUser.value) {
      return of(true);
    }

    return this.stateService.initialize().pipe(
      map((): boolean => {
        return !!this.stateService.currentUser.value;
      }),
      catchError(() => {
        return of(false);
      }),
    );
  }

}
