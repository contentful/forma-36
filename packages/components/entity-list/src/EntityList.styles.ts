import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getEntityListStyles = () => ({
  root: css({
    display: 'block',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    border: `1px solid ${tokens.gray200}`,
    borderBottom: 'none',
    borderRadius: tokens.borderRadiusMedium,
    overflow: 'hidden',
  }),
});
