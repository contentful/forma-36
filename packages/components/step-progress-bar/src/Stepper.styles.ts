import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    progress: css({
      position: 'relative',
    }),
    list: (width: string) =>
      css({
        position: 'relative',
        justifyContent: 'space-between',
        width: '100%',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '0',
          height: '2px',
          zIndex: tokens.zIndexNegative,
          transform: 'translateY(-50%)',
        },
        '&::before': {
          backgroundColor: tokens.gray300,
          width: '100%',
        },
        '&::after': {
          backgroundColor: tokens.colorPrimary,
          width,
          transition: `width ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
        },
      }),
    lastItem: css({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    }),
    number: css({
      borderRadius: '50%',
      border: `2px solid ${tokens.gray300}`,
      color: tokens.gray300,
      width: tokens.spacingL,
      height: tokens.spacingL,
      display: 'inline-block',
      textAlign: 'center',
      backgroundColor: 'white',
      fontWeight: tokens.fontWeightDemiBold,
      fontSize: tokens.fontSizeS,
      padding: 0,
      '&:hover:enabled': {
        cursor: 'pointer',
        backgroundColor: tokens.gray200,
      },
      '&:focus': {
        outline: '0',
        boxShadow: tokens.glowPrimary,
      },
    }),
    numberCurrent: css({
      color: tokens.colorPrimary,
      borderColor: tokens.colorPrimary,
    }),
    icon: css({
      transform: 'translateY(2px)',
    }),
    confirmIcon: css({
      fill: tokens.gray300,
    }),
    clickable: css({
      cursor: 'pointer',
    }),
  };
};
