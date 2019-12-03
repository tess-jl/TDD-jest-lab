const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToNumber,
  castToString,
  castToBoolean,
  castToArray,
  getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a number', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString('')).toBeTruthy(); 
      expect(isString(2)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy(); 
      expect(isBoolean(2)).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
      expect(isBoolean('hi')).toBeFalsy();
    });
    it('properly tells if a value is an array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray([1, 2, 'three'])).toBeTruthy();
      expect(isArray(true)).toBeFalsy();
      expect(isArray(false)).toBeFalsy(); 
      expect(isArray(2)).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
      expect(isArray('hi')).toBeFalsy();
    });
    it('properly tells if a value is an object', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject({ key: 'value' })).toBeTruthy();
      expect(isObject([])).toBeTruthy();
      expect(isObject([1, 2, 'three'])).toBeTruthy();
      expect(isObject(() => {})).toBeTruthy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject(false)).toBeFalsy(); 
      expect(isObject(2)).toBeFalsy();
      expect(isObject('hi')).toBeFalsy();
    });
    it('properly tells if a value is a function', () => {
      expect(isFunction(() => {})).toBeTruthy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction({ key: 'value' })).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
      expect(isFunction([1, 2, 'three'])).toBeFalsy();
      expect(isFunction(true)).toBeFalsy();
      expect(isFunction(false)).toBeFalsy(); 
      expect(isFunction(2)).toBeFalsy();
      expect(isFunction('hi')).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
    it('throws error if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString(3.02)).toEqual('3.02');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
      expect(castToString({})).toEqual('[object Object]');
      expect(castToString([1, 2])).toEqual('1,2');
      expect(castToString([])).toEqual('');
    });
    it('can cast values to a boolean', () => {
      expect(castToBoolean(3)).toEqual(true);
      expect(castToBoolean(3.02)).toEqual(true);
      expect(castToBoolean(true)).toEqual(true);
      expect(castToBoolean(false)).toEqual(false);
      expect(castToBoolean({})).toEqual(true);
      expect(castToBoolean([1, 2])).toEqual(true);
      expect(castToBoolean([])).toEqual(true);
    });
    it('can cast values to an array', () => {
      expect(castToArray([])).toEqual([[]]);
      expect(castToArray([1, 2])).toEqual([[1, 2]]);
      expect(castToArray(3)).toEqual([3]);
      expect(castToArray(3.02)).toEqual([3.02]);
      expect(castToArray(true)).toEqual([true]);
      expect(castToArray(false)).toEqual([false]);
      expect(castToArray({})).toEqual([{}]);
    });
  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
