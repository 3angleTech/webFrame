/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessDeniedError, KNOWN_ERROR_MESSAGE } from '~app-shared/core';

import { isDataWithRequiredUserPermission } from '../interfaces/data-with-required-user-permissions.interface';
import { USER_PERMISSION } from '../other/user-permission.enum';
import { AccessControlService } from '../services/access-control.service';

@Injectable()
export class UserPermissionGuard implements CanActivate {
  constructor(
    private readonly accessControlService: AccessControlService,
  ) {
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!isDataWithRequiredUserPermission(next.data)) {
      return true;
    }
    const requiredUserPermission: USER_PERMISSION = next.data.requiredUserPermission;
    if (this.accessControlService.currentUserHasPermission(requiredUserPermission)) {
      return true;
    }
    throw new AccessDeniedError(KNOWN_ERROR_MESSAGE.ACCESS_DENIED_USER_PERMISSION);
  }

}
