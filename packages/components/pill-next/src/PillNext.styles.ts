import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { PillNextSize, PillNextVariant } from './PillNext.types';

const variantStyles: Record<
  PillNextVariant,
  { background: string; border: string }
> = {
  secondary: {
    background: tokens.gray100,
    border: tokens.gray200,
  },
  primary: {
    background: tokens.blue100,
    border: tokens.blue200,
  },
  warning: {
    background: tokens.orange100,
    border: tokens.orange200,
  },
  negative: {
    background: tokens.red100,
    border: tokens.red200,
  },
};

export function getPillNextStyles(
  variant: PillNextVariant,
  hasEndButton: boolean,
  size: PillNextSize = 'medium',
) {
  const isSmall = size === 'small';
  const { background, border } = variantStyles[variant];

  return {
    pill: css({
      display: 'inline-flex',
      alignItems: 'center',
      height: 'auto',
      minHeight: isSmall ? tokens.spacingL : tokens.spacingXl,

      paddingTop: isSmall ? 0 : tokens.spacing2Xs,
      paddingBottom: isSmall ? 0 : tokens.spacing2Xs,
      paddingLeft: isSmall ? tokens.spacingXs : tokens.spacingS,

      paddingRight: hasEndButton
        ? isSmall
          ? 0
          : tokens.spacing2Xs
        : isSmall
          ? tokens.spacingXs
          : tokens.spacingS,

      borderRadius: '16px',
      minWidth: 0,
      maxWidth: '100%',
      border: isSmall ? 'none' : `1px solid ${border}`,
  boxShadow: isSmall ? `inset 0 0 0 1px ${border}` : 'none',
      backgroundColor: background,
      fontFamily: tokens.fontStackPrimary,
      boxSizing: 'border-box',
    }),
    leadingIconWrapper: css({
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      lineHeight: 0,
      marginRight: tokens.spacing2Xs,
    }),
    leadingIcon: css({
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: 0,
    }),
    label: css({
      fontSize: isSmall ? tokens.fontSizeS : tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      lineHeight: isSmall ? tokens.lineHeightS : tokens.lineHeightM,
      wordBreak: 'break-word',
      flex: '1 1 auto',
      paddingTop: isSmall ? '2px' : '0',
      paddingBottom: isSmall ? '2px' : '0',
    }),
    endButton: css({
      width: tokens.spacingL,
      height: tokens.spacingL,
      minWidth: tokens.spacingL,
      minHeight: tokens.spacingL,
      boxSizing: 'border-box',
      flex: '0 0 auto',
      alignSelf: 'center',
      padding: '2px',
      borderRadius: '50%',
      marginLeft: isSmall ? tokens.spacing2Xs : tokens.spacingXs,
      marginBlock: isSmall ? 0 : '-1px',
      mixBlendMode: 'luminosity',
      backgroundColor: 'transparent',
      backgroundClip: 'content-box',

      '&&:hover:not(:disabled)': {
        backgroundColor: tokens.gray300,
        backgroundClip: 'content-box',
      },

      '&&:hover:disabled': {
        backgroundColor: 'transparent',
      },
    }),


    small: css ({
      fontSize: '10px',
      color: tokens.green700
    })
  };
}
