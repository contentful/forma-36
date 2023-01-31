import { hexToRGBA } from './hexToRGBA';
import tokens from '@contentful/f36-tokens';

describe('hexToRGBA', () => {
  it('should return rgba color', () => {
    expect(hexToRGBA('#000000')).toBe('rgba(0, 0, 0, 1)');
    expect(hexToRGBA('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)');
  });

  it('should return rgba color from tokens', () => {
    expect(hexToRGBA(tokens.colorBlack)).toBe('rgba(12, 20, 28, 1)');
    expect(hexToRGBA(tokens.colorBlack, 0.5)).toBe('rgba(12, 20, 28, 0.5)');
  });
});
