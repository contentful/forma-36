import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { PillNextVariant } from './PillNext.types';

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

export function getPillNextStyles(variant: PillNextVariant) {
  const { background, border } = variantStyles[variant];

  return {
    pill: css({
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '16px',
      height: '32px',
      padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
      border: `1px solid ${border}`,
      backgroundColor: background,
      maxWidth: '100%',
      fontFamily: tokens.fontStackPrimary,
      boxSizing: 'border-box',
    }),
    leadingIcon: css({
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      marginRight: tokens.spacing2Xs,
    }),
    labelWrapper: css({
      display: 'inline-flex',
      minWidth: 0,
      maxWidth: '100%',
    }),
    label: css({
      color: tokens.gray900,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.154px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }),
    removeButton: css({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      padding: '4px',
      borderRadius: '16px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      flexShrink: 0,
      marginLeft: tokens.spacingXs,
      color: tokens.gray900,
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: tokens.gray300,
      },
      '&:focus-visible': {
        outline: `2px solid ${tokens.blue500}`,
        outlineOffset: '1px',
      },
      '&:disabled': {
        backgroundColor: tokens.gray300,
        mixBlendMode: 'luminosity' as const,
        cursor: 'not-allowed',
        color: tokens.gray500,
      },
    }),
    removeIcon: css({
      width: '16px',
      height: '16px',
    }),
  };
}
