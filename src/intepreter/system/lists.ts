import { FirebaseRulesContext } from '../FirebaseRulesContext';

import { FirestoreRulesFunctionDescriptor } from '..';
import { FirestoreRulesClosure } from '../FirestoreRuleClosure';

/**
 * Determine whether the list contains all elements in another list.
 */
const hasAll = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (self === undefined) {
    throw new Error(`hasAll() -member function did not found refering object.`);
  }
  const list = closure.self.list;
  if (!list) {
    throw new Error(`hasAll() -member function did get an list argument.`);
  }
  if (!Array.isArray(list)) {
    throw new Error(`hasAll() -member function expects list argument to be an array, but got an ${typeof list}.`);
  }
  if (Array.isArray(self)) {
    for (const element of self) {
      if (!list.includes(element)) {
        return false;
      }
    }
    return true;
  }
  throw new Error(`hasAll() can only be called for an array, Found type : ${typeof self} .`);
};

/**
 * Determine whether the list contains any element in another list.
 */
const hasAny = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  if (self === undefined) {
    throw new Error(`hasAny() -member function did not found refering object.`);
  }
  const list = closure.self.list;
  if (!list) {
    throw new Error(`hasAny() -member function did get an list argument.`);
  }
  if (!Array.isArray(list)) {
    throw new Error(`hasAny() -member function expects list argument to be an array, but got an ${typeof list}.`);
  }
  if (Array.isArray(self)) {
    for (const element of self) {
      if (list.includes(element)) {
        return true;
      }
    }
    return false;
  }
  throw new Error(`hasAny() can only be called for an array, Found type : ${typeof self} .`);
};

/**
 * Determine whether all elements in the list are present in another list.
 */
const hasOnly = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  if (self === undefined) {
    throw new Error(`hasOnly() -member function did not found refering object.`);
  }
  const list = closure.self.list;
  if (!list) {
    throw new Error(`hasOnly() -member function did get an list argument.`);
  }
  if (!Array.isArray(list)) {
    throw new Error(`hasOnly() -member function expects list argument to be an array, but got an ${typeof list}.`);
  }
  if (Array.isArray(self)) {
    for (const element of self) {
      if (!list.includes(element)) {
        return false;
      }
    }
    return true;
  }
  throw new Error(`hasOnly() can only be called for an array, Found type : ${typeof self} .`);
};

/**
 * Join the elements in the list into a string, with a separator.
 */
const join = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  if (self === undefined) {
    throw new Error(`join() -member function did not found refering object.`);
  }
  const separator = closure.self.separator;
  if (!separator) {
    throw new Error(`join() -member function did get an separator argument.`);
  }
  if (typeof separator !== 'string') {
    throw new Error(
      `join() -member function expects separator argument to be a string, but got an ${typeof separator}.`
    );
  }
  if (Array.isArray(self)) {
    return self.reduce((tail, value) => (tail ? tail + ',' + value : value), '');
  }
  throw new Error(`join() can only be called for an array, Found type : ${typeof self} .`);
};

export default function registerListFunctions(closure: FirestoreRulesClosure) {
  const mapFunctions: { [name: string]: FirestoreRulesFunctionDescriptor } = {
    hasAll: {
      callback: hasAll,
      argNames: ['list'],
    },
    hasAny: {
      callback: hasAny,
      argNames: ['list'],
    },
    hasOnly: {
      callback: hasOnly,
      argNames: ['list'],
    },
    join: {
      callback: join,
      argNames: ['separator'],
    },
  };

  closure.self = { ...closure.self, ...mapFunctions };
}
