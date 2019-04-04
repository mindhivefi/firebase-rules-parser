import { FirestoreRulesClosure } from '../../FirestoreRuleClosure';
import registerListFunctions from '../lists';
import registerStringFunctions from '../strings';

const globalClosure = new FirestoreRulesClosure();
registerListFunctions(globalClosure);
registerStringFunctions(globalClosure);

describe('Lists', () => {
  describe('hasAll-function', () => {
    const fun = globalClosure.getValue('hasAll');
    it('will match key pairs', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = [1, 2, 3];
      expect(fun.callback(undefined, closure, [1, 2, 3])).toBe(true);
      expect(fun.callback(undefined, closure, [4, 5])).toBe(false);

      closure.self.list = [1, 2, 3, 4, 5, 6];
      expect(fun.callback(undefined, closure, [1, 2, 3])).toBe(true);
    });
    it('will throw an error if self is not given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure, [])).toThrow();
    });
    it('will throw an error when unsupported data type is used as an self', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = [1, 2, 3];
      expect(() => fun.callback(undefined, closure, '123')).toThrow();
    });
    it('will throw an error when unsupported data type is used as an argument', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = 'error';
      expect(() => fun.callback(undefined, closure, ['123'])).toThrow();
    });
  });

  describe('hasAny-function', () => {
    const fun = globalClosure.getValue('hasAny');
    it('will match key pairs', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = [1, 2, 3];
      expect(fun.callback(undefined, closure, [1])).toBe(true);
      expect(fun.callback(undefined, closure, [3, 2])).toBe(true);
      expect(fun.callback(undefined, closure, [4, 5])).toBe(false);

      closure.self.list = [1, 2, 3, 4, 5, 6];
      expect(fun.callback(undefined, closure, [1, 2, 3])).toBe(true);
    });
    it('will throw an error if self is not given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure, [])).toThrow();
    });
    it('will throw an error when unsupported data type is used as an self', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = [1, 2, 3];
      expect(() => fun.callback(undefined, closure, '123')).toThrow();
    });
    it('will throw an error when unsupported data type is used as an argument', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = 'error';
      expect(() => fun.callback(undefined, closure, ['123'])).toThrow();
    });
  });

  describe('hasOnly-function', () => {
    const fun = globalClosure.getValue('hasOnly');
    it('will match key pairs', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = ['a', 'c'];
      expect(fun.callback(undefined, closure, ['a', 'b'])).toBe(false);
      closure.self.list = ['a', 'b', 'c'];
      expect(fun.callback(undefined, closure, ['a', 'b'])).toBe(true);
      closure.self.list = ['b', 'a'];
      expect(fun.callback(undefined, closure, ['a', 'b'])).toBe(true);
      closure.self.list = ['a', 'b', 'b'];
      expect(fun.callback(undefined, closure, ['a', 'a', 'b'])).toBe(true);
      closure.self.list = ['a', 'b', 'b', 'c'];
      expect(fun.callback(undefined, closure, ['a', 'a', 'b'])).toBe(true);
    });
    it('will throw an error if self is not given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure, [])).toThrow();
    });
    it('will throw an error when unsupported data type is used as an self', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = [1, 2, 3];
      expect(() => fun.callback(undefined, closure, '123')).toThrow();
    });
    it('will throw an error when unsupported data type is used as an argument', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.list = 'error';
      expect(() => fun.callback(undefined, closure, ['123'])).toThrow();
    });
  });
  describe('size-function', () => {
    // Size function is shared with string
    const fun = globalClosure.getValue('size');
    it('will give count of items in list', () => {
      expect(fun.callback(undefined, undefined, [1, 2, 3])).toBe(3);

      expect(fun.callback(undefined, undefined, [])).toBe(0);
    });
    it('will throw an error if not input argument is given', () => {
      expect(() => fun.callback(undefined, undefined)).toThrow();
    });

    it('will throw an error when unsupported data type is used', () => {
      expect(() => fun.callback(undefined, undefined, 123)).toThrow();
    });
  });

  describe('join-function', () => {
    const fun = globalClosure.getValue('join');
    it('will join elements to a string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.separator = ',';

      expect(fun.callback(undefined, closure, [1, 2, 3])).toBe('1,2,3');
      expect(fun.callback(undefined, closure, [])).toBe('');
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure, [])).toThrow();
    });

    it('will throw an error when unsupported data type is used as self', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.separator = ',';
      expect(() => fun.callback(undefined, closure, 123)).toThrow();
    });

    it('will throw an error when self is not defined', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.separator = ',';
      expect(() => fun.callback(undefined, closure)).toThrow();
    });

    it('will throw an error when unsupported data type is used in argument', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.separator = {
        flop: true,
      };
      expect(() => fun.callback(undefined, closure, [123, 456])).toThrow();
    });
  });
});
