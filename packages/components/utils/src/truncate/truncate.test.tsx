import { truncate } from './truncate';

describe('truncate', () => {
  it('should return the same string if it is shorter than the max length', () => {
    expect(truncate('short', { start: 5, end: 5 })).toBe('short');
  });

  it('should truncate the string in the middle', () => {
    expect(truncate('long string', { start: 2, end: 2 })).toBe('lo…ng');
    expect(truncate('long string', { start: 3, end: 2 })).toBe('lon…ng');
  });

  it('should truncate the string in the middle with custom replacement', () => {
    expect(
      truncate('long string', { start: 2, end: 2, replacement: '***' }),
    ).toBe('lo***ng');
    expect(
      truncate('long string', { start: 3, end: 2, replacement: '***' }),
    ).toBe('lon***ng');
  });

  it('handles start or end being 0', () => {
    expect(truncate('long string', { start: 0, end: 2 })).toBe('…ng');
    expect(truncate('long string', { end: 2 })).toBe('…ng');

    expect(truncate('long string', { start: 2, end: 0 })).toBe('lo…');
    expect(truncate('long string', { start: 2 })).toBe('lo…');

    expect(truncate('long string', { start: 0, end: 0 })).toBe('…');
    expect(truncate('long string', {})).toBe('…');
  });
});
