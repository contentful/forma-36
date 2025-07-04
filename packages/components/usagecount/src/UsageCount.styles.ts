import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getUsageCountStyles = () => {
  return {
    usageCount: css({
      color: tokens.red600,
    }),
    captionText: css({
      color: tokens.gray500,
    }),
    valueDescriptionContainer: css({
      marginBottom: tokens.spacingXs,
    }),
    consumptionUnits: css({
      color: tokens.gray500,
      fontWeight: tokens.fontWeightDemiBold,
    }),
  };
};
