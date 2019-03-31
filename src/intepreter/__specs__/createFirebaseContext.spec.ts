import { createFirebaseRulesContext, defaultFirebaseReulesContext } from '..';

describe('create FirebaseRulesContext', () => {
  it('will return the default context, if no overrides are give', () => {
    expect(createFirebaseRulesContext({}, true)).toEqual(defaultFirebaseReulesContext);
  });

  it('will override only values set by override and leave other default values intact.', () => {
    const email = defaultFirebaseReulesContext.auth.email;

    const context = createFirebaseRulesContext(
      {
        auth: {
          uid: '123',
        },
      },
      true
    );
    expect(context.auth.email).toBe(email);
    expect(context.auth.uid).toBe('123');
  });

  it('will clear default authentication info, when auth if false .', () => {
    const context = createFirebaseRulesContext({
      resource: {
        data: {
          value: 123,
        },
      },
    });
    expect(context.auth.email).toBe(null);
    expect(context.auth.uid).toBe(null);
    expect(context.resource.data).toEqual({
      value: 123,
    });
  });
});
