/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Tests for isNil.
 */
import { isNil } from './is-nil';

describe('isNil', () => {
  let testObject;

  beforeAll(() => {
    testObject = {
      childA: {
        childA1: 'childA1 value',
        childA2: 'childA2 value',
        childA3: 3,
      },
      childB: {
        childB1: 'childB1 value',
        childB2: {
          childB21Null: null,
          childB22Undefined: undefined,
          childB23: {
            childB231: 'childB231 value',
          },
        },
      },
    };
  });

  it('should be true for object that is null or undefined', () => {
    expect(isNil(null)).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();
  });

  it('should be true for objects with the target member access chain null or undefined', () => {

    expect(isNil(testObject, 'childX')).toBeTruthy();
    expect(isNil(testObject, 'childA.X')).toBeTruthy();
    expect(isNil(testObject, 'childB.childB2.childB21Null')).toBeTruthy();
    expect(isNil(testObject, 'childB.childB2.childB22Undefined')).toBeTruthy();
    expect(isNil(testObject, 'childB.childB2.X')).toBeTruthy();
  });

  it('should be false for defined objects', () => {
    expect(isNil(testObject)).toBeFalsy();
    expect(isNil(testObject, '')).toBeFalsy();
  });

  it('should be false for objects with the target member access chain defined', () => {
    expect(isNil(testObject, 'childA')).toBeFalsy();
    expect(isNil(testObject, 'childA.childA1')).toBeFalsy();
    expect(isNil(testObject, 'childB')).toBeFalsy();
    expect(isNil(testObject, 'childB.childB2')).toBeFalsy();
    expect(isNil(testObject, 'childB.childB2.childB23.childB231')).toBeFalsy();
  });
});
