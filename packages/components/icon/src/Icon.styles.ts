import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type {
  IconInternalProps,
  IconSize,
  IconVariant,
  NewIconSize,
} from './Icon';

const fills: { [key in IconVariant]: string } = {
  muted: tokens.gray600,
  negative: tokens.red600,
  positive: tokens.green600,
  primary: tokens.blue600,
  secondary: tokens.gray900,
  warning: tokens.colorWarning,
  white: tokens.colorWhite,
  premium: tokens.purple500,
};

const oldSizes: { [key in IconSize]: { [key in 'height' | 'width']: string } } =
  {
    xlarge: {
      height: '48px',
      width: '48px',
    },
    large: {
      height: '32px',
      width: '32px',
    },
    medium: {
      height: '24px',
      width: '24px',
    },
    small: {
      height: '18px',
      width: '18px',
    },
    tiny: {
      height: '16px',
      width: '16px',
    },
  };

const newSizes: {
  [key in NewIconSize]: { [key in 'height' | 'width']: string };
} = {
  medium: {
    height: '20px',
    width: '20px',
  },
  small: {
    height: '16px',
    width: '16px',
  },
};

export const getIconStyles = ({
  isNewIcon,
  size,
  trimmed,
  variant,
}: Pick<IconInternalProps, 'isNewIcon' | 'size' | 'trimmed' | 'variant'>) => {
  const sizes = isNewIcon ? newSizes : oldSizes;

  return {
    icon: css({
      fill: fills[variant],
      height: sizes[size].height,
      width: trimmed ? 'auto' : sizes[size].width,
    }),
  };
};
