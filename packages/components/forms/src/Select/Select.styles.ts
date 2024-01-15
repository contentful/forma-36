import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getSelectStyles({ isInvalid, isDisabled, size, density }) {
  const isHighDensity = density === 'high';
  const sizeStyles =
    size === 'small'
      ? {
          padding: `${tokens.spacing2Xs} ${tokens.spacingL} ${tokens.spacing2Xs} ${tokens.spacingXs}`,
          height: '32px',
          fontSize: tokens.fontSizeM,
          lineHeight: tokens.lineHeightM,
          borderRadius: tokens.borderRadiusMedium,
        }
      : {
          padding: isHighDensity
            ? `${tokens.spacingXs} ${tokens.spacingL} ${tokens.spacingXs} ${tokens.spacingXs}`
            : `10px ${tokens.spacingL} 10px ${tokens.spacingS}`,
          height: isHighDensity ? '32px' : '40px',
          fontSize: isHighDensity ? tokens.fontSizeMHigh : tokens.fontSizeM,
          lineHeight: isHighDensity
            ? tokens.lineHeightMHigh
            : tokens.lineHeightM,
          borderRadius: isHighDensity
            ? tokens.borderRadiusSmall
            : tokens.borderRadiusMedium,
        };

  const select = css({
    width: '100%',
    display: 'block',
    appearance: 'none',
    backgroundColor: tokens.colorWhite,
    color: tokens.gray700,

    fontFamily: tokens.fontStackPrimary,
    boxShadow: tokens.insetBoxShadowDefault,
    outline: 'none',
    border: `1px solid ${tokens.gray300}`,
    cursor: 'pointer',

    '&::placeholder': {
      color: tokens.gray500,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: tokens.glowPrimary,
      borderColor: tokens.blue500,
    },
    '&:-moz-focusring': { color: 'transparent', textShadow: '0 0 0 #000' },
    '&::-ms-expand': { display: 'none' },
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
    wrapper: css({
      position: 'relative',
      display: 'block',
      width: 'auto',
    }),
    select: css([
      select,
      sizeStyles,
      isDisabled && disabled,
      isInvalid && invalid,
    ]),
    icon: css({
      position: 'absolute',
      right: tokens.spacingXs,
      top: '50%',
      marginTop: '-8px',
      pointerEvents: 'none',
    }),
  };
}
