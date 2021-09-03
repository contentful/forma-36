import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';

export function getSelectStyles(props: {
  isInvalid?: boolean;
  isDisabled?: boolean;
}) {
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
  });

  const disabled = css({
    backgroundColor: tokens.gray100,
    cursor: 'not-allowed',
    color: tokens.gray600,
    '&:focus, &:active': { borderColor: tokens.gray300 },
  });

  const invalid = css({
    borderColor: props.isDisabled ? tokens.red300 : tokens.red600,
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
      props.isDisabled ? disabled : null,
      props.isInvalid ? invalid : null,
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
