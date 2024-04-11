import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    stepper: css({
      color: tokens.red600,
    }),
  };
};
