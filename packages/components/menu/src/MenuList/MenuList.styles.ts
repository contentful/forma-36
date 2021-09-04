import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuListStyles = () => ({
  container: css({
    overflowY: 'auto',
    position: 'relative',
  }),
  headerItem: css({
    position: 'sticky',
    top: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
  }),
  footerItem: css({
    position: 'sticky',
    bottom: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
  }),
});
