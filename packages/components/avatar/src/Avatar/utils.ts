import tokens from '@contentful/f36-tokens';

export type ColorVariant = keyof typeof avatarColorMap;

export const avatarColorMap = {
  gray: tokens.gray500,
  muted: applyMuted(tokens.gray500),
  blue: tokens.blue500,
  purple: tokens.purple500,
  orchid: '#BA33C6',
  strawberry: '#FF4C95',
  orange: tokens.orange500,
  gold: tokens.yellow700,
  olive: '#747826',
  green: tokens.green500,
  ocean: '#007F9B',
};

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
