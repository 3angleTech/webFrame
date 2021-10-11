/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { USER_PERMISSION } from '../other/user-permission.enum';

/**
 * Represents static data associated with a particular route which requires the user to have a given
 * permission in order to access the route.
 *
 * Users that don't have the required permission will be redirected to the "Access Denied" page.
 *
 * @see USER_PERMISSION
 */
export interface IDataWithRequiredUserPermission {
  requiredUserPermission: USER_PERMISSION;
}

export function isDataWithRequiredUserPermission(value: unknown): value is IDataWithRequiredUserPermission {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const requiredUserPermission: unknown = (value as {requiredUserPermission: unknown}).requiredUserPermission;

  return typeof requiredUserPermission === 'string' &&
    Object.keys(USER_PERMISSION).includes(requiredUserPermission);
}
