import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const getStyles = () => ({
  inputWithCopyButton: css({
    borderRadius: `${tokens.borderRadiusMedium} 0 0 ${tokens.borderRadiusMedium}`,
  }),
  copyButton: css({
    button: css({
      borderLeft: 'none',
      height: '100%',
      borderRadius: `0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0`,

      '&:focus': {
        zIndex: tokens.zIndexDefault,
        borderColor: tokens.blue600,
        boxShadow: tokens.glowPrimary,
        borderLeft: `1px solid ${tokens.blue600}`,
      },
    }),
  }),
  invalid: css({
    button: css({
      '&:focus': {
        borderColor: tokens.red600,
        boxShadow: tokens.glowNegative,
      },
    }),
  }),
  disabled: css({
    button: css({
      '&:focus': {
        borderColor: tokens.gray300,
        boxShadow: 'none',
      },
    }),
  }),
});

export default getStyles;
