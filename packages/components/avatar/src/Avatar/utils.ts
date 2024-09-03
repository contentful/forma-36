import tokens from '@contentful/f36-tokens';

export type ColorVariant = keyof typeof avatarColorMap | 'muted';

export const avatarColorMap = {
  primary: tokens.blue500,
  green: tokens.green500,
  orange: tokens.orange500,
  gold: tokens.yellow700,
  purple: tokens.purple500,
  gray: tokens.gray500,
  strawberry: '#FF4C95',
  orchid: '#BA33C6',
  ocean: '#007F9B',
  olive: '#747826',
};
