import { pathToFileURL } from 'url';

export class FirestoreRulesClosure {
  public self: any;

  public path: string = '';

  constructor(public parent?: FirestoreRulesClosure) {
    this.self = {};
  }

  public getPath(): string {
    return this.parent ? this.parent.getPath() + this.path : this.path;
  }

  public addValues = (obj: { [name: string]: any }) => {
    this.self = { ...this.self, ...obj };
  }

  public getValue = (fieldName: string) => {
    let closure: FirestoreRulesClosure | undefined = this;
    do {
      const obj = closure.self[fieldName];
      if (obj) {
        return obj;
      }
      closure = closure.parent;
    } while (closure);
    return undefined;
  }

  public open = () => {
    return new FirestoreRulesClosure(this);
  }

  public close = () => {
    if (!this.parent) {
      throw new Error('Can not close closure on global level');
    }
  }
}
