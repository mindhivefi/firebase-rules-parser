export interface MatchParam {
  name: string;
  wildcard?: boolean;
}
export type MatchPatternField = string | MatchParam;

export class MatchPattern {
  public get fields(): MatchPatternField[] {
    return this._fields;
  }
  public get params(): MatchParams {
    return this._params;
  }
  private _fields: MatchPatternField[];
  private _params: MatchParams;

  constructor(path: string) {
    const pattern = this.parseMatchPattern(path);
    this._fields = pattern.fields;
    this._params = pattern.params;
  }

  /**
   * Match path with pattern
   *
   * @param {string} path Path to be matched
   * @returns {(false | MatchParams)} If no match is found, `false` will be returned. If match is found, a MatchParams object will be returned with pattern param values contained.
   * @memberof MatchPattern
   */
  public match = (path: string): false | MatchParams => {
    const elements = path
      .trim()
      .substr(1)
      .split('/');
    const params: MatchParams = {};
    if (elements.length === 0) {
      return false;
    }
    let index = 0;
    for (const field of this._fields) {
      if (elements.length <= index) {
        return false;
      }
      const element = elements[index++];
      if (typeof field === 'string') {
        if (element !== field) {
          return false;
        }
      } else {
        if (field.wildcard) {
          // any sub path will match with wildcard
          params[field.name] = this.resolvePathFromIndex(elements, element, index);
          return params;
        }
        params[field.name] = element;
      }
    }
    return params;
  }

  private resolvePathFromIndex = (elements: string[], element: string, index: number): string => {
    let result = element;

    while (index < elements.length) {
      result += '/' + elements[index++];
    }
    return result;
  }

  /**
   * Parse path used in Firestore rule match and get operations
   *
   * @export
   * @param {string} path Path presentation with possible wildcard params
   * @returns {MatchPattern}
   */
  private parseMatchPattern = (path: string) => {
    const fields: MatchPatternField[] = [];
    const params: MatchParams = {};
    if (path) {
      const fieldString = path
        .trim()
        .substring(1)
        .split('/');

      for (const field of fieldString) {
        if (field.startsWith('{')) {
          let name = field.substr(1, field.length - 2);
          const index = name.indexOf('=');
          if (index >= 0) {
            const value = name.substr(index + 1);
            name = name.substr(0, index);
            if (value === '**') {
              fields.push({
                name,
                wildcard: true,
              });
              continue;
            }
          }
          fields.push({
            name,
          });
          continue;
        }
        fields.push(field);
      }
    }
    return {
      fields,
      params,
    };
  }
}

export interface MatchParams {
  [name: string]: string;
}
