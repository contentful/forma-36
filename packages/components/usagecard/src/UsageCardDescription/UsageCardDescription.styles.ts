import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getUsageCardDescriptionStyles = () => {
  return {
    usageCardDescription: css({
      color: tokens.gray500,
    }),
  };
};
