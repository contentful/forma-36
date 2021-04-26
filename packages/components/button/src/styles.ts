import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { ButtonSize, ButtonVariant } from './types';

const variantToStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPrimary,
      };
      break;
    case 'positive':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPositive,
      };
      break;
    case 'negative':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPositive,
      };
      break;
    default:
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPositive,
      };
      break;
  }
};

const sizeToStyles = (size: ButtonSize) => {
  switch (size) {
    case 'default':
      return {
        padding: tokens.spacingM,
      };
      break;
    case 'small':
      return {
        padding: tokens.spacingS,
      };
      break;
    case 'large':
      return {
        padding: tokens.spacingL,
      };
      break;
    default:
      break;
  }
};

export const styles = {
  button: (variant: ButtonVariant, size: ButtonSize) =>
    css({
      ...variantToStyles(variant),
      ...sizeToStyles(size),
    }),
};
