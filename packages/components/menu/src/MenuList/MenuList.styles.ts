import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuListStyles = (props: {
  hasStickyFooter?: boolean;
  hasStickyHeader?: boolean;
}) => ({
  container: css({
    overflowY: 'auto',
    position: 'relative',
    padding: 0,
    paddingTop: props.hasStickyHeader ? 0 : tokens.spacingXs,
    paddingBottom: props.hasStickyFooter ? 0 : tokens.spacingXs,
  }),
  headerItem: css({
    position: 'sticky',
    top: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
    borderBottom: `1px solid ${tokens.gray300}`,
    padding: `${tokens.spacingXs} 0`,
    zIndex: 1001,
  }),
  footerItem: css({
    position: 'sticky',
    bottom: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
    borderTop: `1px solid ${tokens.gray300}`,
    padding: `${tokens.spacingXs} 0`,
    zIndex: 1001,
  }),
});
