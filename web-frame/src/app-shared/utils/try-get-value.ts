/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { isNil } from './is-nil';

/**
 * Traverse the object as defined in the memberAccessChain and try to get it's value is it's defined. If the member is not define
 * it will fail safe by returning a null value.
 *
 * @param object The target object
 * @param memberAccessChain The chain of access members of the object separated by the member access operator "."
 * e.g. memberAccessChain = "a.b" will return the value of object[a][b].
 */
export function tryGetValue<T>(object: unknown, memberAccessChain: string): T | undefined {
  if (isNil(object, memberAccessChain)) {
    return null;
  }

  let currentValue = object;
  const keyChain = memberAccessChain.split('.');

  for (const key of keyChain) {
    currentValue = currentValue[key];
  }

  return <T>currentValue;
}
