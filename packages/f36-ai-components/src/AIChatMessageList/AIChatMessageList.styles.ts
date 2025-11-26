import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    messageList: css({
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarGutter: 'stable',
      padding: tokens.spacingXs,
    }),
  };
};
