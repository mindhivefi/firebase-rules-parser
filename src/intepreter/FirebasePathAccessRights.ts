/**
 * Set of assigned access rights. FirebaseRulesParser will set a value for each access right
 * that rules script has implicitly set an value. If the script will not set the value, the
 * access right's value will remain undefined. When checking the rights, you should treat false and
 * undefined as a same.
 */
export interface FirebasePathAccessRights {
  create?: boolean;
  delete?: boolean;
  list?: boolean;
  read?: boolean;
  update?: boolean;
  write?: boolean;
}
