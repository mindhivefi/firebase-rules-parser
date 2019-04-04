import { MatchPattern } from '../patternMatch';

describe('Pattern Matching', () => {
  describe('match', () => {
    it('Will split path in to fields', () => {
      const pattern = new MatchPattern('/a/b/c');
      expect(pattern.fields).toEqual(['a', 'b', 'c']);
    });

    it('Will identify params from path', () => {
      const pattern = new MatchPattern('/a/{uid}/c/{another}');
      expect(pattern.fields).toEqual([
        'a',
        {
          name: 'uid',
        },
        'c',
        {
          name: 'another',
        },
      ]);
    });

    it('Will identify wildcard param from path', () => {
      const pattern = new MatchPattern('/a/{uid}/c/{another=**}');
      expect(pattern.fields).toEqual([
        'a',
        {
          name: 'uid',
        },
        'c',
        {
          name: 'another',
          wildcard: true,
        },
      ]);
    });

    it('Will detect a basic pattern match', () => {
      const pattern = new MatchPattern('/users/{uid}');
      expect(pattern.match('/users/123')).toEqual({
        uid: '123',
      });
    });

    it('Will detect a wildcard pattern match', () => {
      const pattern = new MatchPattern('/users/{uid}/some/{thing=**}');
      expect(pattern.match('/users/123/some/great')).toEqual({
        uid: '123',
        thing: 'great',
      });
      expect(pattern.match('/users/123/some/great/sub/thingie')).toEqual({
        uid: '123',
        thing: 'great/sub/thingie',
      });
    });

    it('Will return false for unidentified path', () => {
      const pattern = new MatchPattern('/users/{uid}/some/{thing=**}');
      expect(pattern.match('/members/daa')).toBe(false);
    });
  });

  describe('matchPrefix', () => {
    it('Will identify params from path', () => {
      const pattern = new MatchPattern('/a/{uid}');
      expect(pattern.matchPrefix('/a/123/rock')).toEqual({ uid: '123' });
    });

    it('Will return false if start of paths do not match', () => {
      const pattern = new MatchPattern('/a/{uid}');
      expect(pattern.matchPrefix('/b/123/rock')).toBe(false);
    });
  });
});
