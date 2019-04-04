import { FirebaseRulesContext } from '../FirebaseRulesContext';

import { FirestoreRulesFunctionDescriptor } from '..';
import { FirestoreRulesClosure } from '../FirestoreRuleClosure';

/**
 * Convert string and float values into integer.
 */
const int = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self: any): any => {
  const intWannabe = closure.getValue('value');
  if (intWannabe === undefined) {
    throw new Error(`int() -method did not have an argument.`);
  }
  switch (typeof intWannabe) {
    case 'string':
      const value = parseInt(intWannabe, 0);
      if (value === undefined || isNaN(value)) {
        throw new Error(`Can not conver ${intWannabe} to an integer value.`);
      }
      return value;
    case 'number':
      return Math.floor(intWannabe);

    default:
      throw new Error(`Can not convert type of: ${typeof intWannabe} to an integer.`);
  }
};

/**
 * Conver string and int values into float.
 */
const float = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  const floatWannabe = closure.getValue('value');
  if (floatWannabe === undefined) {
    throw new Error(`float() -method did not have an argument.`);
  }
  switch (typeof floatWannabe) {
    case 'string':
      const value = parseFloat(floatWannabe);
      if (value === undefined || isNaN(value)) {
        throw new Error(`Can not conver ${floatWannabe} to an float value.`);
      }
      return value;
    case 'number':
      return floatWannabe;

    default:
      throw new Error(`Can not convert type of: ${typeof floatWannabe} to an float.`);
  }
};

/**
 * Conver string values to boolean
 */
const bool = (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any): any => {
  const booleanWannabe = closure.getValue('value');
  if (booleanWannabe === undefined) {
    throw new Error(`bool() -method did not have an argument.`);
  }
  if (typeof booleanWannabe === 'string') {
    return JSON.parse(booleanWannabe);
  }
  throw new Error(`Can not convert type of: ${typeof booleanWannabe} to a boolean.`);
};

export default function registerNumberFunctions(closure: FirestoreRulesClosure) {
  const numberFunctions: { [name: string]: FirestoreRulesFunctionDescriptor } = {
    int: {
      callback: int,
      argNames: ['value'],
    },
    float: {
      callback: float,
      argNames: ['value'],
    },
    bool: {
      callback: bool,
      argNames: ['value'],
    },
  };

  closure.self = { ...closure.self, ...numberFunctions };
}
