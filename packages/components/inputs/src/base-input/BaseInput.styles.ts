import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const getStyles = ({ isDisabled, isInvalid }) => ({
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
    maxHeight: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
    color: tokens.gray700,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    padding: `10px ${tokens.spacingS}`,
    margin: 0,
    cursor: isDisabled ? 'not-allowed' : 'auto',
    width: '100%',

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
  }),

  inputWithIcon: css({
    paddingLeft: '38px',
  }),

  iconPlaceholder: css({
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    bottom: 0,
    left: tokens.spacingS,
    display: 'flex',
    alignItems: 'center',
    zIndex: tokens.zIndexDefault,
  }),
});

export default getStyles;
