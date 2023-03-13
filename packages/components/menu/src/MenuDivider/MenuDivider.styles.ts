import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuDividerStyles = () =>
  css({
    border: 'none',
    width: '100%',
    height: '1px',
    backgroundColor: tokens.gray200,
    margin: `${tokens.spacing2Xs} 0`,
  });
