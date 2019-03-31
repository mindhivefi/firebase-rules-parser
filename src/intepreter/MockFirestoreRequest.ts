import { defaultFirestoreResource, MockFirestoreResource } from './MockFirestoreResource';

export interface MockFirestoreRequest {
  auth: {
    uid: string;
    token: string;
    email: string;
    email_verified: boolean;
    phone_number: string;

    name: string;

    firebase: {
      identities: {
        email?: string[];
        phone?: string[];
        ['google.com']?: string[];
        ['facebook.com']?: string[];
        ['github.com']?: string[];
        ['twitter.com']?: string[];
      };
    };
  };
  method: 'get' | 'list' | 'create' | 'update' | 'delete';

  path: string;
  query: {
    limit?: string;
    where?: string;
    orderBy?: string;
  };

  resource: MockFirestoreResource;

  time: any;
}

export const defaultFirestoreRequest: MockFirestoreRequest = {
  auth: {
    uid: 'abcdefg',
    token: '123123',
    email: 'secure@rules.com',
    email_verified: true,
    phone_number: '+358112',

    name: 'Jack Secure',

    firebase: {
      identities: {
        email: ['secure@rules.com'],
      },
    },
  },
  method: 'get',
  query: {},

  path: '/company/acme/joy',

  resource: defaultFirestoreResource,

  time: new Date().valueOf(),
};

export function createMockRequest(values: Partial<MockFirestoreRequest>): MockFirestoreRequest {
  return {
    ...defaultFirestoreRequest,
    ...values,
  };
}
