/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { IWebFrameContextStateService } from 'app-shared/core';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router,
    @Inject(IWebFrameContextStateService)
    private state: IWebFrameContextStateService,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isAuthenticated()
    .pipe(map((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        //TODO: navigate to access denied page
        return false;
      }
    }));
  }

  private isAuthenticated(): Observable<boolean> {
    if (this.state.currentUser.value) {
      return of(true);
    } else {
      return this.state.initialize()
      .pipe(take(1))
      .pipe(map(() => true))
      .pipe(catchError(() => {
        return of(false);
      }));
    }
  }

}
