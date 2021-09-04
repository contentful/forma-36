import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
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

export function getSelectStyles({ isInvalid, isDisabled, size }) {
  const select = css({
    width: '100%',
    display: 'block',
    appearance: 'none',
    padding: `10px ${tokens.spacingL} 10px ${tokens.spacingS}`,
    backgroundColor: tokens.colorWhite,
    color: tokens.gray700,

    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    fontFamily: tokens.fontStackPrimary,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.insetBoxShadowDefault,
    height: '40px',

    '&::placeholder': {
      color: tokens.gray500,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: tokens.glowPrimary,
      borderColor: tokens.colorPrimary,
    },
    outline: 'none',
    border: `1px solid ${tokens.gray300}`,
    cursor: 'pointer',
    '&:-moz-focusring': { color: 'transparent', textShadow: '0 0 0 #000' },
    '&::-ms-expand': { display: 'none' },
    ...sizeToStyles({ size }),
  });

  const disabled = css({
    backgroundColor: tokens.gray100,
    cursor: 'not-allowed',
    color: tokens.gray600,
    '&:focus, &:active': { borderColor: tokens.gray300 },
  });

  const invalid = css({
    borderColor: isDisabled ? tokens.red300 : tokens.red600,
    '&:focus': {
      borderColor: tokens.red600,
      boxShadow: tokens.glowNegative,
    },
  });

  return {
    wrapper: cx(
      css({
        position: 'relative',
        display: 'block',
        width: 'auto',
      }),
    ),
    select: cx(
      select,
      isDisabled ? disabled : null,
      isInvalid ? invalid : null,
    ),
    icon: css({
      position: 'absolute',
      right: tokens.spacingXs,
      top: '50%',
      marginTop: '-8px',
      pointerEvents: 'none',
    }),
  };
}
