import tokens from '@contentful/f36-tokens';

export type ColorVariant = keyof typeof avatarColorMap;

export const avatarColorMap = {
  primary: tokens.blue500,
  muted: applyMuted(tokens.gray500),
  green: tokens.green400,
  orange: tokens.orange400,
  yellow: tokens.yellow500,
  purple: tokens.purple400,
  gray: tokens.gray400,
  pink: '#FF77AE',
  emerald: '#00B8A2',
  lavender: '#9095FF',
};

/**
 * @param color Color string in hex format with a leading `#`
 */
export function applyMuted(color: string): string {
  // This is a temporary solution because `color-mix` is not supported in Safari
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgb(${[
    Math.round((255 + r) / 2),
    Math.round((255 + g) / 2),
    Math.round((255 + b) / 2),
  ].join(' ')})`;

  // Eventually we should use `color-mix`
  // return `color-mix(in srgb, ${color}, ${tokens.colorWhite} 50%)`;
}
