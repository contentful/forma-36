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
    const base = 'Component - Author';
    const match = 'author ';
    expect(getStringMatch(base, match)).toEqual({
      before: 'Component - ',
      match: 'Author',
      after: '',
    });
  });
  it('ignores capitalisation', () => {
    const base = 'Author';
    const match = 'author';
    expect(getStringMatch(base, match)).toEqual({
      before: '',
      match: base,
      after: '',
    });
  });
});
