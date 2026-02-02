import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    messageList: css({
      padding: `${tokens.spacingXs}`,
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarGutter: 'stable',
      scrollbarWidth: 'thin',
    }),
  };
};
