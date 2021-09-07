import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuDividerStyles = () =>
  css({
    border: 'none',
    width: '100%',
    height: '1px',
    background: tokens.gray300,
    margin: `${tokens.spacingXs} 0`,
  });
