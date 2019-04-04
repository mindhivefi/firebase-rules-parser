import * as merge from 'deepmerge';

export interface MockFirestoreResource {
  __name__: string;

  data: {
    [fieldName: string]: any;
  };

  id: string;
}

export const defaultFirestoreResource: MockFirestoreResource = {
  __name__: '/databases/DEFAULT/documents/company/acme/joy',
  data: {
    value: 1,
  },
  id: 'doc1',
};

export function mockFirestoreResource(values: Partial<MockFirestoreResource>): MockFirestoreResource {
  return merge(defaultFirestoreResource, values);
}
