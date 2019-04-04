export interface MockResource {
  data: any;
  id: string;
}

export interface FirebaseRulesContext {
  /** Path to resource for what the access rights are checked */
  auth: any;
  resource: any;
  /**
   * Called when rule execution will trigger `exists(...)` -call.
   *
   * @memberof ExecutorContext
   * @returns true, if a document exists within a given path
   */
  onExistsCall?: (path: string) => boolean;
  /**
   * Called when rule execution will trigger `get(...)` -call.
   *
   * @memberof ExecutorContext
   * @returns Document
   */
  onGetCall?: (path: string) => undefined | MockResource;
}
