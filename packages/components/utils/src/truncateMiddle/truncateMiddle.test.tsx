import { truncateMiddle } from './truncateMiddle';

describe('truncateMiddle', () => {
  it('should return the same string if it is shorter than the max length', () => {
    expect(truncateMiddle('short', 10)).toBe('short');
  });

  it('should truncate the string in the middle', () => {
    expect(truncateMiddle('long string', 5)).toBe('lo…ng');
    expect(truncateMiddle('long string', 6)).toBe('lon…ng');
  });

  it('should truncate the string in the middle with custom replacement', () => {
    expect(truncateMiddle('long string', 5, '***')).toBe('l***g');
    expect(truncateMiddle('long string', 6, '***')).toBe('lo***g');
  });

  it('should return the truncated replacement if the replacement is too long', () => {
    expect(truncateMiddle('long string', 3, '*****')).toBe('***');
    expect(truncateMiddle('long string', 4, '*****')).toBe('****');
  });
});
