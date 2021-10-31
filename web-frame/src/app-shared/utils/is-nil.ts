/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Checks if object is undefined or null. If memberAccessChain is provided it will traverse the object and check
 * if the value associated to the memberAccessChain is undefined or null.
 *
 * @param object The object to check
 * @param memberAccessChain The chain of access members of the object separated by the member access operator "."
 * that will be traversed and checked if it's undefined or null.
 * e.g. memberAccessChain = "a.b" will test whether object[a][b] is null or undefined.
 */
export function isNil(object: unknown, memberAccessChain?: string): boolean {
  if (_isNil(object)) {
    return true;
  }

  if (_isNil(memberAccessChain) || memberAccessChain === '') {
    return false;
  }

  let currentObject = object;
  const keyChain = memberAccessChain.split('.');

  for (const key of keyChain) {
    currentObject = currentObject[key];
    if (_isNil(currentObject)) {
      return true;
    }
  }

  return false;
}

// eslint-disable-next-line no-underscore-dangle
function _isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}
