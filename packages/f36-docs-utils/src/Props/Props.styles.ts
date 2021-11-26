import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getPropsStyles = () => ({
  list: css({ listStyleType: 'none' }),
  listItem: css({
    padding: `${tokens.spacingM} 0`,
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
});
