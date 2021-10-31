/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { USER_ROLE } from '../other/user-role.enum';

/**
 * Represents static data associated with a particular route which requires the user to have a given
 * role in order to access the route.
 *
 * Users that don't have the required role will be redirected to the "Access Denied" page.
 *
 * @see USER_ROLE
 */
export interface IDataWithRequiredUserRole {
  requiredUserRole: USER_ROLE;
}

export function isDataWithRequiredUserRole(value: unknown): value is IDataWithRequiredUserRole {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const requiredUserRole: unknown = (value as {requiredUserRole: unknown}).requiredUserRole;

  return typeof requiredUserRole === 'string' &&
    Object.keys(USER_ROLE).includes(requiredUserRole);
}
