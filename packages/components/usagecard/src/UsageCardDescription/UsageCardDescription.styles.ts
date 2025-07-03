import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getUsageCardDescriptionStyles = () => {
  return {
    usageCardDescription: css({
      borderBottom: `1px solid ${tokens.gray200}`,
      width: '100%',
      justifyContent: 'center',
    }),
  };
};
