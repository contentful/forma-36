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

export function getPillNextStyles(
  variant: PillNextVariant,
  hasRemoveButton: boolean,
) {
  const { background, border } = variantStyles[variant];

  return {
    pill: css({
      display: 'inline-flex',
      alignItems: 'center',
      // TODO: replace with border-radius token when new tokens ship in next major
      borderRadius: '16px',
      height: '32px',
      paddingTop: tokens.spacing2Xs,
      paddingBottom: tokens.spacing2Xs,
      paddingLeft: tokens.spacingS,
      paddingRight: hasRemoveButton ? tokens.spacing2Xs : tokens.spacingS,
      border: `1px solid ${border}`,
      backgroundColor: background,
      maxWidth: '100%',
      fontFamily: tokens.fontStackPrimary,
      boxSizing: 'border-box',
    }),
    leadingIconWrapper: css({
      display: 'inline-flex',
      alignItems: 'center',
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
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      lineHeight: tokens.lineHeightM,
      // Figma spec uses -0.154px; no token exists for negative letter-spacing
      letterSpacing: '-0.154px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }),
    removeButton: css({
      '&&': {
        width: '24px',
        height: '24px',
        minHeight: 'auto',
        minWidth: 'auto',
        padding: tokens.spacing2Xs,
        borderRadius: '50%',
        marginLeft: tokens.spacingXs,
      },
      '&&:hover:not(:disabled)': {
        backgroundColor: tokens.gray300,
      },
      '&&:hover:disabled': {
        backgroundColor: 'transparent',
      },
    }),
  };
}
