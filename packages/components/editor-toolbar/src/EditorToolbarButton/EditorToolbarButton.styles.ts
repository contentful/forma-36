import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export function getButtonStyles() {
  return {
    root: css({
      margin: '0 1px',
      padding: '0',
      width: '30px',
      height: '30px',
    }),
    notActive: css({
      ':focus, :hover, :active': {
        backgroundColor: tokens.gray200,
        boxShadow: 'none',
      },
    }),
    active: css({
      backgroundColor: tokens.gray300,
      ':focus, :hover, :active': {
        backgroundColor: tokens.gray300,
        boxShadow: 'none',
      },
    }),
  };
}
