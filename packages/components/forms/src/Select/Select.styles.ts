import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export function getSelectStyles({ isInvalid, isDisabled, size, density }) {
  const getSizeAndDensityStyles = () => {
    switch (true) {
      case size === 'small':
        return {
          padding: `${tokens.spacing2Xs} ${tokens.spacingL} ${tokens.spacing2Xs} ${tokens.spacingXs}`,
          height: '32px',
        };

      case size === 'medium' && density === 'high':
        return {
          padding: `${tokens.spacing2Xs} ${tokens.spacingL} ${tokens.spacing2Xs} ${tokens.spacingXs}`,
          height: '32px',
          fontSize: tokens.fontSizeMHigh,
          lineHeight: tokens.lineHeightMHigh,
          borderRadius: tokens.borderRadiusSmall,
        };

      case size === 'medium' || density === 'low':
      default:
        return {
          padding: `10px ${tokens.spacingL} 10px ${tokens.spacingS}`,
          height: '40px',
        };
    }
  };

  const select = css({
    width: '100%',
    display: 'block',
    appearance: 'none',
    backgroundColor: tokens.colorWhite,
    color: tokens.gray700,

    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    fontFamily: tokens.fontStackPrimary,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.insetBoxShadowDefault,
    outline: 'none',
    border: `1px solid ${tokens.gray300}`,
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

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
      getSizeAndDensityStyles(),
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
