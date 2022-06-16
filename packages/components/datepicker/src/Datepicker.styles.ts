import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    calendar: css({
      padding: tokens.spacingM,
    }),
  };
};
