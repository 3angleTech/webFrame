/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Tests for tryGetValue.
 */
import { tryGetValue } from './try-get-value';

describe('tryGetValue', () => {
  let testObject;

  beforeAll(() => {
    testObject = {
      childA: {
        childA1: 'A1',
        childA2: 'A2',
        childA3: 3,
      },
      childB: {
        childB1: 'B1',
        childB2: {
          childB21Null: null,
          childB22Undefined: undefined,
          childB23: {
            childB231: 'B231',
          },
        },
      },
    };
  });

  it('should return null if no value is found for the provided member access chain', () => {
    expect(tryGetValue(testObject, 'childX')).toBeNull();
    expect(tryGetValue(testObject, 'childA.X')).toBeNull();
    expect(tryGetValue(testObject, 'childB.childB2.childB21Null')).toBeNull();
    expect(tryGetValue(testObject, 'childB.childB2.childB22Undefined')).toBeNull();
    expect(tryGetValue(testObject, 'childB.childB2.X')).toBeNull();
  });

  it('should retrieve and return the value for the provided member access chain', () => {
    expect(tryGetValue(testObject, 'childA')).toEqual(testObject.childA);
    expect(tryGetValue(testObject, 'childA.childA1')).toEqual(testObject.childA.childA1);
    expect(tryGetValue(testObject, 'childB')).toEqual(testObject.childB);
    expect(tryGetValue(testObject, 'childB.childB2')).toEqual(testObject.childB.childB2);
    expect(tryGetValue(testObject, 'childB.childB2.childB23.childB231')).toEqual(testObject.childB.childB2.childB23.childB231);
  });
});
