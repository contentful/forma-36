import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const getUsageCardHeaderStyles = () => ({
  usageCardHeader: (hasTooltip?: boolean) =>
    css({
      width: '100%',
      ...(hasTooltip && {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing2Xs,
      }),
    }),
  tooltip: css({
    minWidth: 'max-content',
  }),
  infoIcon: css`
    span & {
      display: flex;
      alignitems: center;
    }
  `,
});
