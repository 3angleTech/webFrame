/**
 * Checks if object is undefined or null. If memberAccessChain is provided it will traverse the object and check
 * if the value associated to the memberAccessChain is undefined or null.
 * @param object The object to check
 * @param memberAccessChain The chain of access members of the object separated by the member access operator "."
 * that will be traversed and checked if it's undefined or null.
 * e.g. memberAccessChain = "a.b" will test whether object[a][b] is null or undefined.
 */
export function isNil(object: object, memberAccessChain?: string): boolean {
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

function _isNil(object: object | string): boolean {
  return object === null || object === undefined;
}
