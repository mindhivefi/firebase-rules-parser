import { FirestoreRulesClosure } from '../../FirestoreRuleClosure';
import registerNumberFunctions from '../numbers';

const globalClosure = new FirestoreRulesClosure();
registerNumberFunctions(globalClosure);

describe('Numbers and Boolean', () => {
  describe('bool-function', () => {
    const fun = globalClosure.getValue('bool');
    it('will convert "true" to boolean', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 'true';
      expect(fun.callback(undefined, closure)).toBe(true);
    });
    it('will convert "false" to boolean', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 'false';
      expect(fun.callback(undefined, closure)).toBe(false);
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error with erronous input', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 'tosi';
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error when unsupported data type is used', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = {
        value: '123',
      };
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
  });

  describe('int-function', () => {
    const fun = globalClosure.getValue('int');
    it('will convert "123" to an integer', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = '123';
      expect(fun.callback(undefined, closure)).toBe(123);
    });
    it('will convert a float to an integer', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 123.12;
      expect(fun.callback(undefined, closure)).toBe(123);
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });

    it('will throw an error with erronous input', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = '';
      expect(() => fun.callback(undefined, closure)).toThrow();
      closure.self.value = 'Woodstock';
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error when unsupported data type is used', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = {
        value: '123',
      };
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
  });

  describe('float-function', () => {
    const fun = globalClosure.getValue('float');
    it('will convert "123" to an float', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = '123';
      expect(fun.callback(undefined, closure)).toBe(123.0);
    });
    it('will convert a integer to a float', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 123;
      expect(fun.callback(undefined, closure)).toBe(123.0);
    });
    it('will throw an error if not input argument is given', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error with erronous input', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = '';
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error when unsupported data type is used', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = {
        value: '123',
      };
      expect(() => fun.callback(undefined, closure)).toThrow();
    });
  });
});
