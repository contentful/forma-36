export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'transparent';

export type ButtonStylesProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  isActive: boolean;
  isDisabled: boolean;
  isFullWidth: boolean;
};
