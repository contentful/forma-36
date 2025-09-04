import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { UsageCardProps } from './UsageCard';

const variantToStyles = (variant: UsageCardProps['variant']) => {
  switch (variant) {
    case 'info':
      return {
        backgroundColor: tokens.gray100,
        border: `2px solid ${tokens.gray100}`,
      };
    default:
      return {
        border: `2px solid ${tokens.gray200}`,
      };
  }
};

export const getUsageCardStyles = () => ({
  usageCard: (variant: UsageCardProps['variant']) =>
    css({
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
      ...variantToStyles(variant),
    }),
});

export const getUsageCardDescriptionStyles = () => {
  return {
    usageCardDescription: css({
      color: tokens.gray500,
    }),
  };
};
