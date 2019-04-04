import { FirestoreRulesClosure } from '../../FirestoreRuleClosure';
import registerMapFunctions from '../maps';
import registerStringFunctions from '../strings';

const globalClosure = new FirestoreRulesClosure();
registerMapFunctions(globalClosure);
registerStringFunctions(globalClosure);

describe('Maps', () => {
  describe('keys-function', () => {
    const fun = globalClosure.getValue('keys');
    it('will list object keys', () => {
      expect(
        fun.callback(undefined, undefined, {
          key1: 1,
          key2: 2,
          key3: 3,
        })
      ).toEqual(['key1', 'key2', 'key3']);

      expect(fun.callback(undefined, undefined, {})).toEqual([]);
    });
    it('will throw an error if not input argument is given', () => {
      expect(() => fun.callback(undefined, undefined)).toThrow();
    });

    it('will throw an error when unsupported data type is used', () => {
      expect(() => fun.callback(undefined, undefined, '123')).toThrow();
    });
  });
  describe('values-function', () => {
    const fun = globalClosure.getValue('values');
    it('will list object values', () => {
      expect(
        fun.callback(undefined, undefined, {
          key1: 1,
          key2: 2,
          key3: 3,
        })
      ).toEqual([1, 2, 3]);

      expect(fun.callback(undefined, undefined, {})).toEqual([]);
    });
    it('will throw an error if not input argument is given', () => {
      expect(() => fun.callback(undefined, undefined)).toThrow();
    });

    it('will throw an error when unsupported data type is used', () => {
      expect(() => fun.callback(undefined, undefined, '123')).toThrow();
    });
  });

  describe('size-function', () => {
    // Size function is shared with string
    const fun = globalClosure.getValue('size');
    it('will give count of keys', () => {
      expect(
        fun.callback(undefined, undefined, {
          key1: 1,
          key2: 2,
          key3: 3,
        })
      ).toBe(3);

      expect(fun.callback(undefined, undefined, {})).toBe(0);
    });
    it('will throw an error if not input argument is given', () => {
      expect(() => fun.callback(undefined, undefined)).toThrow();
    });

    it('will throw an error when unsupported data type is used', () => {
      expect(() => fun.callback(undefined, undefined, 123)).toThrow();
    });
  });
});
