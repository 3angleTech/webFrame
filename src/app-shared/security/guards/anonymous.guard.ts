/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { IWebFrameContextStateService, PAGE_URL } from 'app-shared/core';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(
    @Inject(IWebFrameContextStateService)
    private stateService: IWebFrameContextStateService,
    private router: Router,
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree {
    if (this.stateService.isAuthenticated()) {
      return this.router.parseUrl(PAGE_URL.PROFILE_PAGE);
    }
    return true;
  }
}
