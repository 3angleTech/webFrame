/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * This file contains an explicit list of things exported in the current directory.
 */
export { SecurityModule } from './security.module';

export { AnonymousGuard } from './guards/anonymous.guard';
export { AuthenticatedGuard } from './guards/authenticated.guard';
export { UserPermissionGuard } from './guards/user-permission.guard';
export { UserRoleGuard } from './guards/user-role.guard';
export { passwordGroupConfirmedValidator } from './other/password-group-confirmed-validator';
export { passwordPolicyComposedValidators, passwordPolicyValidator } from './other/password-policy-validator';
export { USER_ROLE } from './other/user-role.enum';
export { USER_PERMISSION } from './other/user-permission.enum';
