import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getUsageCardHeaderStyles = () => ({
  usageCardHeader: (tooltip?: string) =>
    css({
      width: '100%',
      ...(tooltip && {
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
