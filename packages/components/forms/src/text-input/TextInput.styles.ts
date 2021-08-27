import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const getStyles = ({ isInvalid, isDisabled }) => ({
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
        borderColor: isInvalid
          ? tokens.red600
          : isDisabled
          ? tokens.gray300
          : tokens.blue600,
        boxShadow: isInvalid
          ? tokens.glowNegative
          : isDisabled
          ? 'none'
          : tokens.glowPrimary,
      },
    }),
  }),
});

export default getStyles;
