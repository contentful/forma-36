import { getIconColorToken, iconColorByVariant } from './getIconColorToken';
import type { Variant } from './getIconColorToken';
import { ColorTokens } from '@contentful/f36-tokens';

describe('getIconColorToken', () => {
  it('returns the correct color token for a known variant', () => {
    expect(getIconColorToken('primary', iconColorByVariant)).toBe(
      'colorPrimary',
    );
    expect(getIconColorToken('negative', iconColorByVariant)).toBe(
      'colorNegative',
    );
  });

  it('returns the override color token for a per-component mapping', () => {
    const buttonIconColorByVariant: Record<Variant, ColorTokens> = {
      ...iconColorByVariant,
      primary: 'colorWhite',
    };
    expect(getIconColorToken('primary', buttonIconColorByVariant)).toBe(
      'colorWhite',
    );
    expect(getIconColorToken('negative', buttonIconColorByVariant)).toBe(
      'colorNegative',
    );
  });

  it('throws if the variant is not found in the mapping', () => {
    expect(() =>
      getIconColorToken('unknown' as Variant, iconColorByVariant),
    ).toThrow();
  });
});
