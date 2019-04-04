import { FirebaseRulesContext } from '../FirebaseRulesContext';

import { FirestoreRulesFunctionDescriptor } from '..';
import { FirestoreRulesClosure } from '../FirestoreRuleClosure';

/**
 * values
 */
const keys = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (self === undefined) {
    throw new Error(`keys() -member function did not found refering object.`);
  }
  if (typeof self === 'object') {
    return Object.keys(self);
  }
  throw new Error(`keys() can only be called for an map, Found type : ${typeof self} .`);
};

/**
 * Convert a string to boolean.
 */
const values = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  if (self === undefined) {
    throw new Error(`values() -member function did not found refering object.`);
  }
  if (typeof self === 'object') {
    return Object.values(self);
  }
  throw new Error(`values() can only be called for an map, Found type : ${typeof self} .`);
};

export default function registerMapFunctions(closure: FirestoreRulesClosure) {
  const mapFunctions: { [name: string]: FirestoreRulesFunctionDescriptor } = {
    keys: {
      callback: keys,
      argNames: [],
    },
    values: {
      callback: values,
      argNames: [],
    },
  };

  closure.self = { ...closure.self, ...mapFunctions };
}
