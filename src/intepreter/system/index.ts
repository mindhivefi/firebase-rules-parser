import { FirestoreRulesClosure } from '../FirestoreRuleClosure';
import registerListFunctions from './lists';
import registerMapFunctions from './maps';
import registerNumberFunctions from './numbers';
import registerStringFunctions from './strings';

export default function registerSystemFunctions(closure: FirestoreRulesClosure) {
  registerStringFunctions(closure);
  registerNumberFunctions(closure);
  registerMapFunctions(closure);
  registerListFunctions(closure);
}
