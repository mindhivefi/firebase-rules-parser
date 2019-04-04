import { FirestoreRulesClosure } from '../FirestoreRuleClosure';
import registerNumberFunctions from './numbers';
import registerStringFunctions from './strings';

export default function registerSystemFunctions(closure: FirestoreRulesClosure) {
  registerStringFunctions(closure);
  registerNumberFunctions(closure);
}
