import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export function getAiPillStyles(hasRemoveButton: boolean) {
  return {
    pill: css({
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '16px',
      height: '32px',
      paddingTop: tokens.spacing2Xs,
      paddingBottom: tokens.spacing2Xs,
      paddingLeft: tokens.spacingS,
      paddingRight: hasRemoveButton ? tokens.spacing2Xs : tokens.spacingS,
      border: '1px solid #1872e5',
      background:
        'linear-gradient(157.5deg, rgba(24,114,229,0.05) 0.77%, rgba(140,46,234,0.05) 31.5%, rgba(230,83,37,0.05) 62.3%, rgba(234,175,9,0.05) 93.9%)',
      fontFamily: tokens.fontStackPrimary,
      boxSizing: 'border-box',
    }),
    label: css({
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      lineHeight: tokens.lineHeightM,
      whiteSpace: 'nowrap',
      color: '#6c3ecf',
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
      '&&:disabled': {
        backgroundColor: 'transparent',
        color: tokens.gray400,
      },
    }),
  };
}
