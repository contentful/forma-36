import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getUsageCardHeaderStyles = () => {
  return {
    usageCardHeader: css({
      width: '100%',
      maxWidth: '1550px',
    }),
    subheadingWithIcon: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
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
  };
};
