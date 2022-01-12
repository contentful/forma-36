import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getPropsStyles = () => ({
  list: css({
    listStyleType: 'none',
    padding: 0,
  }),
  listItem: css({
    padding: `${tokens.spacingM} 0`,
    borderBottom: `1px solid ${tokens.gray200}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
});
