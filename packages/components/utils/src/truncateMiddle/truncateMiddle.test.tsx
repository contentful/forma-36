import { truncateMiddle } from './truncateMiddle';

describe('truncateMiddle', () => {
  it('should return the same string if it is shorter than the max length', () => {
    expect(truncateMiddle('short', { start: 5, end: 5 })).toBe('short');
  });

  it('should truncate the string in the middle', () => {
    expect(truncateMiddle('long string', { start: 2, end: 2 })).toBe('lo…ng');
    expect(truncateMiddle('long string', { start: 3, end: 2 })).toBe('lon…ng');
  });

  it('should truncate the string in the middle with custom replacement', () => {
    expect(
      truncateMiddle('long string', { start: 2, end: 2, replacement: '***' }),
    ).toBe('lo***ng');
    expect(
      truncateMiddle('long string', { start: 3, end: 2, replacement: '***' }),
    ).toBe('lon***ng');
  });

  it('handles start or end being 0', () => {
    expect(truncateMiddle('long string', { start: 0, end: 2 })).toBe('…ng');
    expect(truncateMiddle('long string', { end: 2 })).toBe('…ng');

    expect(truncateMiddle('long string', { start: 2, end: 0 })).toBe('lo…');
    expect(truncateMiddle('long string', { start: 2 })).toBe('lo…');

    expect(truncateMiddle('long string', { start: 0, end: 0 })).toBe('…');
    expect(truncateMiddle('long string', {})).toBe('…');
  });
});
