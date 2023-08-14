import tokens from '@contentful/f36-tokens';

export type ColorVariant =
  | 'primary'
  | 'muted'
  | 'green'
  | 'orange'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'emerald'
  | 'lavender'
  | 'gray';

export const avatarColorMap = {
  primary: tokens.blue500,
  green: tokens.green400,
  orange: tokens.orange400,
  yellow: tokens.yellow500,
  purple: tokens.purple400,
  gray: tokens.gray400,
  pink: '#FF77AE',
  emerald: '#00B8A2',
  lavender: '#9095FF',
};
