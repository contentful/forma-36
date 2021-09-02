import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import { SelectWidth } from './types';

function getStylesForSize(props: { width?: SelectWidth }) {
  switch (props.width) {
    case 'auto':
      return css({ width: 'auto' });
    case 'small':
      return css({ width: '120px' });
    case 'medium':
      return css({ width: '240px' });
    case 'large':
      return css({ width: '420px' });
    case 'full':
    default:
      return css({ width: '100%' });
  }
}

export function getSelectStyles(props: {
  isInvalid?: boolean;
  isDisabled?: boolean;
  width?: SelectWidth;
}) {
  const select = css({
    width: '100%',
    display: 'block',
    appearance: 'none',
    padding: '10px',
    paddingRight: tokens.spacingL,
    backgroundColor: tokens.colorWhite,
    color: tokens.gray700,
    fontSize: tokens.fontSizeM,
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
    borderColor: props.isDisabled ? tokens.red300 : tokens.colorNegative,
    '&:focus': {
      borderColor: tokens.colorNegative,
      boxShadow: tokens.glowNegative,
    },
  });

  return {
    wrapper: cx(
      css({
        position: 'relative',
        display: 'block',
      }),
      getStylesForSize({ width: props.width }),
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
