import { ComponentVariant } from '@contentful/f36-core';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant =
  | Exclude<ComponentVariant, 'warning'>
  | 'transparent';

export type ButtonStylesProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  isActive: boolean;
  isDisabled: boolean;
  isFullWidth: boolean;
};
