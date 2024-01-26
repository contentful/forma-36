import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';
import type { Density } from '@contentful/f36-utils';
import { BaseInputInternalProps } from './types';

type getSizeStylesProps = Pick<BaseInputInternalProps, 'size'> & {
  density?: Density;
};

const getSizeStyles = ({ size, density }: getSizeStylesProps): CSSObject => {
  const isHighDensity = density === 'high';
  if (size === 'small') {
    return {
      padding: tokens.spacingXs,
      minHeight: isHighDensity ? tokens.spacingL : tokens.spacingXl,
      maxHeight: isHighDensity ? tokens.spacingL : tokens.spacingXl,
    };
  }

  return {
    padding: isHighDensity ? tokens.spacingXs : `10px ${tokens.spacingS}`,
    minHeight: isHighDensity ? tokens.spacingXl : '40px',
    maxHeight: isHighDensity ? tokens.spacingXl : '40px',
  };
};

const getZIndex = ({
  isDisabled,
  isInvalid,
  zIndexBase = tokens.zIndexDefault,
}: {
  isDisabled?: boolean;
  isInvalid?: boolean;
  zIndexBase?: number;
}) => (isDisabled || isInvalid ? zIndexBase + 1 : zIndexBase);

type getInputStylesProps = Pick<
  BaseInputInternalProps,
  'as' | 'isDisabled' | 'isInvalid' | 'size' | 'resize'
> & {
  density?: Density;
};

const getInvalidOrDisabledStyles = ({
  isDisabled,
  isInvalid,
}: {
  isDisabled?: boolean;
  isInvalid?: boolean;
}) => {
  const disabledStyles = {
    borderColor: tokens.gray300,
    boxShadow: 'none',
  };
  const invalidStyles = {
    borderColor: tokens.red600,
    boxShadow: tokens.glowNegative,
  };
  if (isDisabled) {
    return disabledStyles;
  }
  if (isInvalid) {
    return invalidStyles;
  }
  return {};
};

const getStyles = ({
  as,
  isDisabled,
  isInvalid,
  size,
  resize,
  density = 'low',
}: getInputStylesProps) => {
  const densityStyles = {
    low: {
      borderRadius: tokens.borderRadiusMedium,
      lineHeight: tokens.lineHeightM,
      fontSize: tokens.fontSizeM,
    },
    high: {
      borderRadius: tokens.borderRadiusSmall,
      lineHeight: tokens.lineHeightS,
      fontSize: tokens.fontSizeS,
    },
  };

  return {
    rootComponentWithIcon: css({
      position: 'relative',
      display: 'flex',
      width: '100%',
      zIndex: getZIndex({ isDisabled, isInvalid }),
    }),
    input: css({
      outline: 'none',
      boxShadow: tokens.insetBoxShadowDefault,
      boxSizing: 'border-box',
      backgroundColor: isDisabled ? tokens.gray100 : tokens.colorWhite,
      border: `1px solid ${isInvalid ? tokens.red600 : tokens.gray300}`,
      color: tokens.gray700,
      fontFamily: tokens.fontStackPrimary,
      margin: 0,
      cursor: isDisabled ? 'not-allowed' : 'auto',
      width: '100%',
      zIndex: getZIndex({ isDisabled, isInvalid }),
      ...densityStyles[density],

      // if the input is a textarea, the resize prop is applied and size should be ignored
      ...(as === 'textarea' ? { resize } : getSizeStyles({ size, density })),

      '&::placeholder': {
        color: tokens.gray500,
      },

      '&:active, &:active:hover': {
        borderColor: tokens.blue600,
        boxShadow: tokens.glowPrimary,
        ...getInvalidOrDisabledStyles({ isDisabled, isInvalid }),
      },

      '&:focus': {
        borderColor: tokens.blue600,
        boxShadow: tokens.glowPrimary,
        ...getInvalidOrDisabledStyles({ isDisabled, isInvalid }),
      },
    }),

    inputWithIcon: css({
      paddingLeft: tokens.spacingXl,
    }),

    iconPlaceholder: css({
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      bottom: 0,
      left: size === 'small' ? tokens.spacingXs : tokens.spacingS,
      display: 'flex',
      alignItems: 'center',
      zIndex: tokens.zIndexDefault,
    }),
  };
};

export default getStyles;
