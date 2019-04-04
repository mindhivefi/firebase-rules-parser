import { FirebaseRulesContext } from '../FirebaseRulesContext';

import { FirestoreRulesFunctionDescriptor } from '..';
import { FirestoreRulesClosure } from '../FirestoreRuleClosure';

/**
 * Returns a lowercase version of the input string.
 */
const lower = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (typeof self !== 'string') {
    throw new Error(`Can not call lower() -method on non string object: ${self}`);
  }
  return self.toLowerCase();
};

/**
 * Returns the number of characters in the string.
 */
const size = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  const type = typeof self;
  if (Array.isArray(self) || type === 'string') {
    return self.length;
  }
  if (type === 'object') {
    return Object.keys(self).length;
  }
  throw new Error(`Can not call length() -method on non string object: ${self}`);
};

/**
 * Boolean, integer, float, and null values can be converted into strings using the string() function:
 */
const string = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  const stringWannabe = closure.getValue('value');
  if (stringWannabe === undefined) {
    throw new Error(`string() -method did not have an argument.`);
  }
  if (stringWannabe === null) {
    return 'null';
  }
  switch (typeof stringWannabe) {
    case 'string':
    case 'boolean':
    case 'number':
      return JSON.stringify(stringWannabe);

    default:
      throw new Error(`Can not conver type of: ${typeof stringWannabe} to string.`);
  }
};

/**
 * Splits a string according to a regular expression.
 */
const split = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (typeof self !== 'string') {
    throw new Error(`Can not call split() -method on non string object: ${self}`);
  }
  const re = closure.getValue('re');

  if (!re) {
    throw new Error(`split() -method did not have an argument.`);
  }
  return self.split(re);
};

/**
 * Performs a regular expression match on the whole string.
 */
const matches = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (typeof self !== 'string') {
    throw new Error(`Can not call matches() -method on non string object: ${self}`);
  }
  const re = closure.getValue('re');
  if (!re) {
    throw new Error(`matches() -method did not have an argument.`);
  }

  return self.match(re) !== null; // TODO user actual Google RE2 syntax
};

/**
 * Returns a version of the string with leading and trailing spaces removed.
 */
const trim = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  if (typeof self !== 'string') {
    throw new Error(`Can not call trim() -method on non string object: ${self}`);
  }
  return self.trim();
};

const upper = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  if (typeof self !== 'string') {
    throw new Error(`Can not call upper() -method on non string object: ${self}`);
  }
  return self.toUpperCase();
};

export default function registerStringFunctions(closure: FirestoreRulesClosure) {
  const stringFunctions: { [name: string]: FirestoreRulesFunctionDescriptor } = {
    lower: {
      callback: lower,
      argNames: [],
    },
    matches: {
      callback: matches,
      argNames: ['re'],
    },
    size: {
      callback: size,
      argNames: [],
    },
    split: {
      callback: split,
      argNames: ['re'],
    },
    string: {
      callback: string,
      argNames: ['value'],
    },
    trim: {
      callback: trim,
      argNames: [],
    },
    upper: {
      callback: upper,
      argNames: [],
    },
  };

  closure.self = { ...closure.self, ...stringFunctions };
}
