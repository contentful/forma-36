import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    datepicker: css({
      color: tokens.colorBlack,
    }),
  };
};
