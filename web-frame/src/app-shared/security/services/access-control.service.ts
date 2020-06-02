/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';
import { ENVIRONMENT } from '~app-shared/config';
import { IWebFrameContextStateService, User } from '~app-shared/core';

import { USER_PERMISSION } from '../other/user-permission.enum';
import { USER_ROLE } from '../other/user-role.enum';

@Injectable()
export class AccessControlService {
  public readonly currentUserRoles$: BehaviorSubject<USER_ROLE[]>
    = new BehaviorSubject<USER_ROLE[]>([]);

  public readonly currentUserPermissions$: BehaviorSubject<USER_PERMISSION[]>
    = new BehaviorSubject<USER_PERMISSION[]>([]);

  constructor(
    @Inject(IWebFrameContextStateService) private readonly stateService: IWebFrameContextStateService,
  ) {
  }

  public initialize(): Observable<void> {
    this.stateService.currentUser.pipe(
      mergeMap((currentUser: User | undefined): Observable<void> => {
        return this.updateRolesAndPermissions(currentUser);
      }),
    ).subscribe();

    return this.updateRolesAndPermissions(undefined);
  }

  public currentUserHasPermission(permission: USER_PERMISSION): boolean {
    return this.currentUserPermissions$.value.includes(permission);
  }

  public currentUserHasRole(role: USER_ROLE): boolean {
    return this.currentUserRoles$.value.includes(role);
  }

  private updateRolesAndPermissions(currentUser: User | undefined): Observable<void> {
    return this.initCurrentUserRoles(currentUser).pipe(
      mergeMap((userRoles: USER_ROLE[]): Observable<USER_PERMISSION[]> => {
        return this.initCurrentUserPermissions(userRoles);
      }),
      mapTo(undefined),
    );
  }

  private initCurrentUserRoles(currentUser: User | undefined): Observable<USER_ROLE[]> {
    const userRoles: USER_ROLE[] = this.getRolesForUser(currentUser);
    this.currentUserRoles$.next(userRoles);

    return of(userRoles);
  }

  private initCurrentUserPermissions(userRoles: USER_ROLE[]): Observable<USER_PERMISSION[]> {
    const userPermissions: USER_PERMISSION[] = this.getPermissionsForRoles(userRoles);
    this.currentUserPermissions$.next(userPermissions);

    return of(userPermissions);
  }

  private getRolesForUser(currentUser: User | undefined): USER_ROLE[] {
    const userRoles: USER_ROLE[] = [];
    if (currentUser) {
      // TODO: Use session token claims to determine available roles.
      userRoles.push(...[
        USER_ROLE.AUTHENTICATED,
        USER_ROLE.ADMINISTRATOR,
      ]);
    } else {
      userRoles.push(...[
        USER_ROLE.ANONYMOUS,
      ]);
    }

    return userRoles;
  }

  private getPermissionsForRoles(userRoles: USER_ROLE[]): USER_PERMISSION[] {
    const userPermissions = [];
    for (const userRole of userRoles) {
      userPermissions.push(...this.getPermissionsForRole(userRole));
    }

    return userPermissions;
  }

  private getPermissionsForRole(userRole: USER_ROLE): USER_PERMISSION[] {
    const permissions = [];
    switch (userRole) {
      case USER_ROLE.ANONYMOUS:
        return permissions;
      case USER_ROLE.AUTHENTICATED:
        if (ENVIRONMENT.devMode) {
          permissions.push(USER_PERMISSION.ACCESS_SANDBOX_PAGES);
        }

        return permissions;
      case USER_ROLE.ADMINISTRATOR:
        permissions.push(USER_PERMISSION.ACCESS_ADMIN_PAGES);

        return permissions;
    }

    return permissions;
  }

}
