import { RulesParser } from '..';

describe('Firebase Rules', () => {
  const createContext = () => ({
    auth: undefined,
    resource: undefined,
  });

  describe('Path matching', () => {
    const ruleFile = `service cloud.firestore {
      match /databases/{database}/documents {
        match /organizations/{doc} {
          allow read: if true;             
        }
      }
    }`;

    it('Will give ', () => {
      const rules = new RulesParser().init(ruleFile);

      expect(
        rules.getRightsForPath('/databases/DEFAULT/documents/organizations/mindhive', {
          auth: undefined,
          resource: undefined,
        }).read
      ).toBe(true);

      expect(
        rules.getRightsForPath('/databases/DEFAULT/documents/someother', {
          auth: undefined,
          resource: undefined,
        })
      ).toEqual({});
    });
  });

  describe('Path matching', () => {
    const ruleFile = (left: string | number | boolean, rule: string, right: string | number | boolean) =>
      `service cloud.firestore {
         match /databases/{database}/documents {
           match /organizations/{doc} {
             allow read, write: if ${left} ${rule} ${right};     
           }
         }
      }`;
    const path = '/databases/DEFAULT/documents/organizations/mindhive';

    const result = (value: boolean) => ({
      read: value,
      write: value,
    });

    describe('Comparization Rules', () => {
      it('Will support greater than (>)', () => {
        const rules = new RulesParser().init(ruleFile(5, '>', 2));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will support greater or equal than (>=)', () => {
        const rules = new RulesParser().init(ruleFile(5, '>=', 5));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will support less or equal than (<=)', () => {
        const rules = new RulesParser().init(ruleFile(5, '<=', 3));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(false));
      });
      it('Will support less than (<)', () => {
        const rules = new RulesParser().init(ruleFile(3, '<', 4));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will support equality (==)', () => {
        const rules = new RulesParser().init(ruleFile(3, '==', 3));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });

      it('Will support inequality (!=)', () => {
        const rules = new RulesParser().init(ruleFile(3, '!=', 2));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
    });
    describe('Parenthesis', () => {
      it('Will support parenthesis, (2 + 3) == 5', () => {
        const rules = new RulesParser().init(ruleFile('(2 + 3)', '==', 5));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });

      it('Will support recuresive parenthesis resolvling, (2 + (4 * 3)) == 14', () => {
        const rules = new RulesParser().init(ruleFile('(2 + (4 * 3))', '==', 14));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
    });

    describe('Arithmetics', () => {
      it('Will do addition, (5 + 2) == 7', () => {
        const rules = new RulesParser().init(ruleFile('(5 + 2)', '==', 7));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will do subtraction, (3 - 2) == 1', () => {
        const rules = new RulesParser().init(ruleFile('(3 - 2)', '==', 1));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will do multipication, (3 * 2) == 6', () => {
        const rules = new RulesParser().init(ruleFile('(3 * 2)', '==', 6));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will do division, (4 / 2) == 2', () => {
        const rules = new RulesParser().init(ruleFile('(4 / 2)', '==', 2));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
    });

    describe('Logical operations', () => {
      it('Will support logical or, (5 == 2) || true', () => {
        const rules = new RulesParser().init(ruleFile('(5 == 2)', '||', true));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will support logical and, (5 == 2) && true', () => {
        const rules = new RulesParser().init(ruleFile('(5 == 2)', '&&', true));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(false));
      });

      it('Will support logical operations withour parenthesis, 5 == 2 || true', () => {
        const rules = new RulesParser().init(ruleFile('5 == 2', '||', true));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
    });

    describe('Unary operations', () => {
      it('Will support negation, (10+(-5)) == 5', () => {
        const rules = new RulesParser().init(ruleFile('(10+(-5))', '==', 5));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
      it('Will support exclusion, !true == false', () => {
        const rules = new RulesParser().init(ruleFile('!true', '==', false));
        expect(rules.getRightsForPath(path, createContext())).toEqual(result(true));
      });
    });
  });

  describe('Functions', () => {
    it('will support function calls without arguments', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          function common() {
            return true;
          }
          match /organizations/{doc} {
            allow read: if common();     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });

    it('will support function calls expressions in arguments', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          function common(value1, value2) {
            return value1 == value2;
          }
          match /organizations/{doc} {
            allow read: if common(2 + 4, 2 * 3);     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });
  });

  describe('Object references', () => {
    it('will support basic request object reference calls', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if request.auth != null;     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });

    it('will match given auth uid value (double quotes)', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if request.auth.uid == "ABC";     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      rules.request.auth.uid = 'ABC';
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });

    it('will match given auth uid value (single quotes)', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if request.auth.uid == 'ABC';     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      rules.request.auth.uid = 'ABC';
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });
    it('will match given auth uid value (empty string)', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if request.auth.uid == '';     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      rules.request.auth.uid = '';
      expect(rules.getRightsForPath(path, createContext())).toEqual({
        read: true,
      });
    });
  });
});
