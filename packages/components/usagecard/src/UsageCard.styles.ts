import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { UsageCardProps } from './UsageCard';

export const getUsageCardStyles = (variant: UsageCardProps['variant']) => {
  if (variant === 'info') {
    return {
      usageCard: css({
        borderRadius: '6px',
        backgroundColor: tokens.gray100,
        border: `2px solid ${tokens.gray100}`,
        padding: '1.3rem',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media (max-width: 1024px)': {
          marginBottom: tokens.spacingM,
        },
      }),
    };
  }
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
