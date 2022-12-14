export type BadgeSize = 'default' | 'small';

export type BadgeVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'primary-filled'
  | 'featured';

export type BadgeStylesProps = {
  variant: BadgeVariant;
  size: BadgeSize;
};
