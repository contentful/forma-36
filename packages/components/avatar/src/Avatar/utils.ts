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
  return `color-mix(in srgb, ${color}, ${tokens.colorWhite} 50%)`;
}
