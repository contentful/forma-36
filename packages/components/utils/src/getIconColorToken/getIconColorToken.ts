import { ColorTokens } from '@contentful/f36-tokens';

// Universal variant type for all components supporting variants
export type Variant =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'transparent'
  | 'muted'
  | 'white'
  | 'premium'
  | 'warning'
  | 'primary-filled'
  | 'featured'
  | 'neutral';

/**
 * Universal icon color mapping by variant for all components.
 * Components can use this directly or extend/override as needed.
 */
export const iconColorByVariant: Record<Variant, ColorTokens> = {
  negative: 'colorNegative',
  positive: 'colorPositive',
  primary: 'colorPrimary',
  secondary: 'gray900',
  transparent: 'gray900',
  muted: 'gray600',
  white: 'colorWhite',
  premium: 'purple600',
  warning: 'orange600',
  'primary-filled': 'colorWhite',
  featured: 'purple600',
  neutral: 'gray600',
};

/**
 * Returns the color token for a given variant using the provided mapping.
 * @param variant - The variant key (e.g., 'primary', 'negative', etc.)
 * @param mapping - An object mapping variants to color tokens
 * @returns The color token string
 */
/**
 * Returns the color token for a given variant using the provided mapping.
 * Accepts a partial mapping so components only need to specify the variants they use.
 * Throws an error if the variant is not found in the mapping.
 */
export function getIconColorToken(
  variant: Variant,
  mapping: Partial<Record<Variant, ColorTokens>>,
): ColorTokens {
  const color = mapping[variant];
  if (!color) {
    throw new Error(`No color mapping found for variant: ${variant}`);
  }
  return color;
}
