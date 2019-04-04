import { FirestoreRulesClosure } from '../FirestoreRuleClosure';
import registerStringFunctions from './strings';

export default function registerSystemFunctions(closure: FirestoreRulesClosure) {
  registerStringFunctions(closure);
}
