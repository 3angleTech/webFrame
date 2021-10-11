/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AccessDeniedError, KNOWN_ERROR_MESSAGE } from '~app-shared/core';

import { isDataWithRequiredUserRole } from '../interfaces/data-with-required-user-role.interface';
import { USER_ROLE } from '../other/user-role.enum';
import { AccessControlService } from '../services/access-control.service';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(
    private readonly accessControlService: AccessControlService,
  ) {
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!isDataWithRequiredUserRole(next.data)) {
      return true;
    }
    const requiredUserRole: USER_ROLE = next.data.requiredUserRole;
    if (this.accessControlService.currentUserHasRole(requiredUserRole)) {
      return true;
    }
    throw new AccessDeniedError(KNOWN_ERROR_MESSAGE.ACCESS_DENIED_USER_PERMISSION);
  }

}
