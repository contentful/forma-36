import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getPropsTableStyles = () => ({
  headerCell: css({
    padding: `${tokens.spacingXs} 0`,
    backgroundColor: 'transparent',
  }),
  cell: css({
    padding: `${tokens.spacingL} 0`,
    paddingRight: tokens.spacingM,
  }),
});
