import RulesParser, { createFirebaseRulesContext } from '..';

describe('Firebase Rules', () => {
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
        rules.hasAccess('/databases/DEFAULT/documents/organizations/mindhive', {
          auth: undefined,
          resource: undefined,
        }).read
      ).toBe(true);

      expect(
        rules.hasAccess('/databases/DEFAULT/documents/someother', {
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
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will support greater or equal than (>=)', () => {
        const rules = new RulesParser().init(ruleFile(5, '>=', 5));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will support less or equal than (<=)', () => {
        const rules = new RulesParser().init(ruleFile(5, '<=', 3));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(false));
      });
      it('Will support less than (<)', () => {
        const rules = new RulesParser().init(ruleFile(3, '<', 4));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will support equality (==)', () => {
        const rules = new RulesParser().init(ruleFile(3, '==', 3));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });

      it('Will support inequality (!=)', () => {
        const rules = new RulesParser().init(ruleFile(3, '!=', 2));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
    });
    describe('Parenthesis', () => {
      it('Will support parenthesis, (2 + 3) == 5', () => {
        const rules = new RulesParser().init(ruleFile('(2 + 3)', '==', 5));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });

      it('Will support recuresive parenthesis resolvling, (2 + (4 * 3)) == 14', () => {
        const rules = new RulesParser().init(ruleFile('(2 + (4 * 3))', '==', 14));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
    });

    describe('Arithmetics', () => {
      it('Will do addition, (5 + 2) == 7', () => {
        const rules = new RulesParser().init(ruleFile('(5 + 2)', '==', 7));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will do subtraction, (3 - 2) == 1', () => {
        const rules = new RulesParser().init(ruleFile('(3 - 2)', '==', 1));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will do multipication, (3 * 2) == 6', () => {
        const rules = new RulesParser().init(ruleFile('(3 * 2)', '==', 6));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will do division, (4 / 2) == 2', () => {
        const rules = new RulesParser().init(ruleFile('(4 / 2)', '==', 2));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
    });

    describe('Logical operations', () => {
      it('Will support logical or, (5 == 2) || true', () => {
        const rules = new RulesParser().init(ruleFile('(5 == 2)', '||', true));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will support logical and, (5 == 2) && true', () => {
        const rules = new RulesParser().init(ruleFile('(5 == 2)', '&&', true));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(false));
      });

      it('Will support logical operations withour parenthesis, 5 == 2 || true', () => {
        const rules = new RulesParser().init(ruleFile('5 == 2', '||', true));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
    });

    describe('Unary operations', () => {
      it('Will support negation, (10+(-5)) == 5', () => {
        const rules = new RulesParser().init(ruleFile('(10+(-5))', '==', 5));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
      });
      it('Will support exclusion, !true == false', () => {
        const rules = new RulesParser().init(ruleFile('!true', '==', false));
        expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual(result(true));
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
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
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
        read: true,
      });
    });

    it('will support a map in operator', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 'auth' in request;
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
        read: true,
      });
    });

    // it('will give a null value error if object member do not exists', () => {
    //   const ruleFile = `service cloud.firestore {
    //     match /databases/{database}/documents {
    //       match /organizations/{doc} {
    //         allow read: if request.auth.daa == '';
    //       }
    //     }
    //   }`;
    //   const path = '/databases/DEFAULT/documents/organizations/mindhive';

    //   const rules = new RulesParser().init(ruleFile);
    //   expect(() => rules.hasAccess(path, createFirebaseRulesContext())).toThrow();
    // });
  });

  describe('arrays', () => {
    it('will read a cell value from an array', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if resource.data.list[1] == 'Joy';     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      rules.resource.data = {
        list: ['Happy', 'Joy'],
      };
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
        read: true,
      });
    });

    it('will match arrays to be equal', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if resource.data.list == [1, 2];
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      rules.resource.data = {
        list: [1, 2],
      };
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
        read: true,
      });
    });

    it('will support a list in operator', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 2 in [1, 2];
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const rules = new RulesParser().init(ruleFile);
      expect(rules.hasAccess(path, createFirebaseRulesContext())).toEqual({
        read: true,
      });
    });
  });
  describe('exists -function', () => {
    it('will read a cell value from an array', () => {
      const ruleFile = `service cloud.firestore {
      match /databases/{database}/documents {
        match /organizations/{doc} {
          allow read: if exists(/databases/$(database)/documents/users/$(request.auth.uid));     
        }
      }
    }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';

      const context = createFirebaseRulesContext();

      context.onExistsCall = () => true;

      const rules = new RulesParser().init(ruleFile);

      rules.request.auth.uid = '123';

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });
  });
  describe('get -function', () => {
    it('will call onGet event handler when get is executed on rules code', () => {
      const ruleFile = `service cloud.firestore {
      match /databases/{database}/documents {
        match /organizations/{doc} {
          allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.value == 'cool';     
        }
      }
    }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();

      context.onGetCall = () => ({
        data: {
          value: 'cool',
        },
        id: '123',
      });
      const rules = new RulesParser().init(ruleFile);

      rules.request.auth.uid = '123';
      rules.resource.data = {
        value: 'cool',
      };

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });

    it('will return a get data as a function return and function call can point into its fields', () => {
      const ruleFile = `service cloud.firestore {
      match /databases/{database}/documents {
        match /organizations/{doc} {

          function test() {
            return get(/databases/$(database)/documents/users/$(request.auth.uid));
          }
          allow read: if test().data.value == 'cool';     
        }
      }
    }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();

      context.onGetCall = () => ({
        data: {
          value: 'cool',
        },
        id: '123',
      });
      const rules = new RulesParser().init(ruleFile);

      rules.request.auth.uid = '123';
      rules.resource.data = {
        value: 'cool',
      };

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });
  });

  describe('string member functions', () => {
    it('will trim input string', () => {
      const ruleFile = `service cloud.firestore {
      match /databases/{database}/documents {
        match /organizations/{doc} {
          allow read: if ' cool '.trim() == 'cool';     
        }
      }
    }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();
      const rules = new RulesParser().init(ruleFile);

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });

    it('will lowercase input string', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 'COOL'.lower() == 'cool';     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();
      const rules = new RulesParser().init(ruleFile);

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });

    it('will uppercase input string', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 'Cool'.upper() == 'COOL';     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();
      const rules = new RulesParser().init(ruleFile);

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });

    it('will return a size of input string', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 'Cool'.size() == 4;     
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();
      const rules = new RulesParser().init(ruleFile);

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });

    it('will match regex pattern of input string', () => {
      const ruleFile = `service cloud.firestore {
        match /databases/{database}/documents {
          match /organizations/{doc} {
            allow read: if 'This is very cool thingie'.matches('.*cool.*') == true;
          }
        }
      }`;
      const path = '/databases/DEFAULT/documents/organizations/mindhive';
      const context = createFirebaseRulesContext();
      const rules = new RulesParser().init(ruleFile);

      expect(rules.hasAccess(path, context)).toEqual({
        read: true,
      });
    });
  });
});
