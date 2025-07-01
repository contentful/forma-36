import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getUsageCardStyles = () => {
  return {
    usageCard: css({
      border: `2px solid ${tokens.gray200}`,
      borderRadius: '6px',
      padding: '1.3rem',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '@media (max-width: 1024px)': {
        marginBottom: tokens.spacingM,
      },
    }),
  };
};
