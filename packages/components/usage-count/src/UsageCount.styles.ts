import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { Variant } from './UsageCount';

const variantToStyles = (variant: Variant) => {
  switch (variant) {
    case 'consumption':
      return {
        marginBottom: tokens.spacingXs,
      };
    default:
      return;
  }
};

export const getUsageCountStyles = () => ({
  usageCount: css({
    color: tokens.red600,
  }),
  captionText: css({
    color: tokens.gray500,
  }),
  valueDescriptionContainer: (variant: Variant) =>
    css({
      ...variantToStyles(variant),
    }),

  consumptionUnits: css({
    color: tokens.gray500,
    fontWeight: tokens.fontWeightDemiBold,
  }),
});
