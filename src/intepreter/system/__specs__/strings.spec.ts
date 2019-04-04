import { FirestoreRulesClosure } from '../../FirestoreRuleClosure';
import registerStringFunctions from '../strings';

const globalClosure = new FirestoreRulesClosure();
registerStringFunctions(globalClosure);

describe('Strings', () => {
  describe('string-function', () => {
    it('will convert boolean to string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = true;

      const stringFun = closure.getValue('string');

      expect(stringFun.callback(undefined, closure)).toBe('true');
    });
    it('will convert number to string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = 123;

      const stringFun = closure.getValue('string');

      expect(stringFun.callback(undefined, closure)).toBe('123');
    });
    it('will convert null to string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = null;

      const stringFun = closure.getValue('string');

      expect(stringFun.callback(undefined, closure)).toBe('null');
    });
    it('will throw an error when unsupported data type is used', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.value = {
        value: '123',
      };

      const stringFun = closure.getValue('string');

      expect(() => stringFun.callback(undefined, closure)).toThrow();
    });
    it('will throw an error when input value is not defined', () => {
      const closure = new FirestoreRulesClosure(globalClosure);

      const stringFun = closure.getValue('string');

      expect(() => stringFun.callback(undefined, closure)).toThrow();
    });
  });
  describe('size-function', () => {
    it('will tell the size of a string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);

      const fun = closure.getValue('size');

      expect(fun.callback(undefined, closure, '123456')).toBe(6);
    });
    it('will throw an error when self is not an string', () => {
      const closure = new FirestoreRulesClosure(globalClosure);

      const fun = closure.getValue('size');

      expect(() => fun.callback(undefined, closure, 123)).toThrow();
    });
  });
  describe('lower-function', () => {
    const closure = new FirestoreRulesClosure(globalClosure);
    const fun = closure.getValue('lower');
    it('will lowercase a string', () => {
      expect(fun.callback(undefined, closure, 'MINDHIVE')).toBe('mindhive');
    });
    it('will throw an error when self is not an string', () => {
      expect(() => fun.callback(undefined, closure, 123)).toThrow();
    });
  });
  describe('upper-function', () => {
    const closure = new FirestoreRulesClosure(globalClosure);
    const fun = closure.getValue('upper');
    it('will uppercae a string', () => {
      expect(fun.callback(undefined, closure, 'mindhive')).toBe('MINDHIVE');
    });
    it('will throw an error when self is not an string', () => {
      expect(() => fun.callback(undefined, closure, 123)).toThrow();
    });
  });
  describe('trim-function', () => {
    const closure = new FirestoreRulesClosure(globalClosure);
    const fun = closure.getValue('trim');
    it('will uppercae a string', () => {
      expect(fun.callback(undefined, closure, '  mindhive  ')).toBe('mindhive');
    });
    it('will throw an error when self is not an string', () => {
      expect(() => fun.callback(undefined, closure, 123)).toThrow();
    });
  });
  describe('split-function', () => {
    const fun = globalClosure.getValue('split');
    it('will split string into an array', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.re = ',';
      expect(fun.callback(undefined, closure, '1,2,3')).toEqual(['1', '2', '3']);
    });
    it('will throw an error when self is not an string', () => {
      expect(() => fun.callback(undefined, globalClosure, 123)).toThrow();
    });
    it('will throw an error when reqular expression is not defined', () => {
      expect(() => fun.callback(undefined, globalClosure, '1,2,3')).toThrow();
    });
  });
  describe('matches-function', () => {
    const fun = globalClosure.getValue('matches');
    it('will match an regular expression', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.re = '.*@domain[.]com';
      expect(fun.callback(undefined, closure, 'user@domain.com')).toBe(true);
    });
    it('will unmatch an regular expression', () => {
      const closure = new FirestoreRulesClosure(globalClosure);
      closure.self.re = '.*@domain[.]com';
      expect(fun.callback(undefined, closure, 'user_domain_com')).toBe(false);
    });
    it('will throw an error when self is not an string', () => {
      expect(() => fun.callback(undefined, globalClosure, 123)).toThrow();
    });
    it('will throw an error when reqular expression is not defined', () => {
      expect(() => fun.callback(undefined, globalClosure, '1,2,3')).toThrow();
    });
  });
});
