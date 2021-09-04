import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const sizeToStyles = ({ size }): CSSObject => {
  switch (size) {
    case 'small':
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightM,
        padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
        height: `32px`,
      };
    default:
      return {
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightM,
        height: `40px`,
      };
  }
};

const getStyles = ({ as, isDisabled, isInvalid, size }) => ({
  rootComponentWithIcon: css({
    position: 'relative',
    display: 'flex',
    width: '100%',
  }),
  input: css({
    outline: 'none',
    boxShadow: tokens.insetBoxShadowDefault,
    boxSizing: 'border-box',
    backgroundColor: isDisabled ? tokens.gray100 : tokens.colorWhite,
    border: `1px solid ${isInvalid ? tokens.red600 : tokens.gray300}`,
    borderRadius: tokens.borderRadiusMedium,
    color: tokens.gray700,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    padding: `10px ${tokens.spacingS}`,
    margin: 0,
    cursor: isDisabled ? 'not-allowed' : 'auto',
    width: '100%',

    // if the input is a textarea, the height is resizeble
    ...(as === 'textarea' ? { resize: 'vertical' } : { maxHeight: '40px' }),

    '&::placeholder': {
      color: tokens.gray500,
    },

    '&:active, &:active:hover': {
      borderColor: isInvalid
        ? tokens.red600
        : isDisabled
        ? tokens.gray300
        : tokens.blue600,
      boxShadow: isInvalid
        ? tokens.glowNegative
        : isDisabled
        ? 'none'
        : tokens.glowPrimary,
    },

    '&:focus': {
      zIndex: tokens.zIndexDefault,
      borderColor: isInvalid
        ? tokens.red600
        : isDisabled
        ? tokens.gray300
        : tokens.blue600,
      boxShadow: isInvalid
        ? tokens.glowNegative
        : isDisabled
        ? 'none'
        : tokens.glowPrimary,
    },
    ...sizeToStyles({ size }),
  }),

  inputWithIcon: css({
    paddingLeft: size === 'small' ? tokens.spacingXl : '38px',
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
});

export default getStyles;
