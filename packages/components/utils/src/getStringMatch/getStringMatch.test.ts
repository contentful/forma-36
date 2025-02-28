import { getStringMatch } from './getStringMatch';

describe('getStringMatch', () => {
  it('returns before, match, and after', () => {
    const base = 'some test string';
    const match = 'test';
    expect(getStringMatch(base, match)).toEqual({
      before: 'some ',
      match,
      after: ' string',
    });
  });
  it('works with special characters', () => {
    const base = 'string with regex characters (test)';
    const match = '(test';
    expect(getStringMatch(base, match)).toEqual({
      before: 'string with regex characters ',
      match,
      after: ')',
    });
  });
  it('works with any regex special character', () => {
    const base = '.*+?^${}()|[]\\';
    const characters = base.split('');
    characters.forEach((character) => {
      const { match } = getStringMatch(base, character);
      expect(match).toEqual(character);
    });
  });
  it('works with whitespace', () => {
    const base = 'string with whitespace';
    const match = 'string ';

    expect(getStringMatch(base, match)).toEqual({
      before: '',
      match,
      after: 'with whitespace',
    });
  });
});
