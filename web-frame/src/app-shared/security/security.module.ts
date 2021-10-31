/**
 * @file Provides the security app-shared module.
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';

import { IfUserHasPermissionDirective } from './directives/if-user-has-permission.directive';
import { IfUserHasRoleDirective } from './directives/if-user-has-role.directive';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UserPermissionGuard } from './guards/user-permission.guard';
import { UserRoleGuard } from './guards/user-role.guard';
import { SECURITY_INITIALIZER_PROVIDERS } from './initializers/security-initializer.factory';
import { AccessControlService } from './services/access-control.service';

const SHARED_ROOT_PROVIDERS: Provider[] = [
  AnonymousGuard,
  AuthenticatedGuard,
  UserPermissionGuard,
  UserRoleGuard,
  AccessControlService,
];

const SHARED_DIRECTIVES: Type<unknown>[] = [
  IfUserHasRoleDirective,
  IfUserHasPermissionDirective,
];

@NgModule({
  declarations: [
    SHARED_DIRECTIVES,
  ],
  exports: [
    SHARED_DIRECTIVES,
  ],
  imports: [
    CommonModule,
  ],
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: [
        SECURITY_INITIALIZER_PROVIDERS,
        SHARED_ROOT_PROVIDERS,
      ],
    };
  }
}
