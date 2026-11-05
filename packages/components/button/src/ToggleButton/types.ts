import type { ButtonSize } from '../types';

export type ToggleButtonVariant = 'secondary' | 'transparent';

export type GetStyleArguments = {
  isActive: boolean;
  isDisabled: boolean;
  size: ButtonSize;
  variant: ToggleButtonVariant;
};
