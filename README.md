# firebase-rules-parser

Firebase rule parser parsers Firebase rule language files and emulates rules to check the access for different paths. Current version supports nearly all functionality of the rules language, except duaration, latlong and timestamp functions.

This project is a side project of [ts-mock-firebase](https://github.com/mindhivefi/ts-mock-firebase#readme), which is a mocking library for professional unit testing with Firebase projects. Even so, it is also possible to use this librarary individually.

## Getting started

Install the library: 

```bash
yarn add firebase-rules-parser
```
or 
```bash
npm install firebase-rules-parser
```
### Initializing rules
To load rules into intepreter:

```typescript
import createFirebaseRulesIntepreter from 'firebase-rules-parser';

// create an instance of intepreter
const rules = createFirebaseRulesIntepreter();
// load your rules 
rules.init(source);
```
Above, the source parameter is a string containing rules -file content. `Init` -method call, will automatically parse its content and if no parsing succeeds with no errors, rules are ready to be tested.

### Checking access for a path

To check access for some path, you need to set up the case for the rule intepreter. Firebase rules are always tested against same path. So you need to define the path to resource what are you testing against. The path must be given in a full path form starting with `/databases/DEFAULT/documents/my-collection/my-doc/my-subcollection/doc-here` -form. In addition, you need to define the authentication state and the actual resource been accessed with the context object.

```typescript

// create a context object for call
const context = createFirebaseRulesContext({
  // set up auth properties
  auth: {
    uid: '123', // authenticated user's id
    email: 'john.doe@acme.com', // user's email
  },
  // define setup for resource 
  resource: {
    // set the document id 
    id: 'abc', 
    // set the actual document data
    data: {
      value: 123, // refered document's data
    }
  },
  // define a trigger for exists -function calls if any used in rules script
  onExistsCall: (path) => {
    return path === '/databases/DEFAULT/documents/users/123'; 
  },
  // define a trigger for get -function calls if any used in rules script
  onGetCall: (path) => {
    if (path === '/databases/DEFAULT/documents/users/123') {
      return {
        uid: '123',
        name: 'John Doe',
      }
    }
  }
});

const hasAccess = rules.hasAccess('/databases/DEFAULT/documents/users/123', context);
```

´hasAccess´ -method will return an object which contains all access right keys that were defined in rules script. If there were no allow -rule to set access to true or false, no key will be included in object. So for example, the result could something like this:

```typescript
{
  read: true,
  update: true,
  create: false,
}
```

This would mean that the rules script defines that with path requested, read and update have been defined to be allowed and create is not. Delete is not defined at all, so that should be treated as false too.

Firebase rules allow support access keys: `create`, `read`, `write`, `update`, `list` and `delete`.

## Note

Please note, that this library have been created on information got from Google's Firebase documentation and testing the Firebase. There have been no actual specification of rules language available during the development. So it is possible that there are some small differences between the parser and the actual Firebase's rules engine. Please let me know if you face any this kind of anomalities. The goal of this project is to emulate fully Firebase rules functionality. 
