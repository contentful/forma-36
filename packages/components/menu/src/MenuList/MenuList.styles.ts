import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuHeaderStyles = () => {
  return css({
    position: 'sticky',
    top: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
    borderBottom: `1px solid ${tokens.gray300}`,
    marginBottom: tokens.spacing2Xs,
    padding: `${tokens.spacing2Xs} 0`,
    zIndex: 1001,
  });
};

export const getMenuFooterStyles = () => {
  return css({
    position: 'sticky',
    bottom: 0,
    left: 0,
    backgroundColor: tokens.colorWhite,
    borderTop: `1px solid ${tokens.gray300}`,
    marginTop: tokens.spacing2Xs,
    padding: `${tokens.spacing2Xs} 0`,
    zIndex: 1001,
  });
};

export const getMenuListStyles = (props: {
  hasStickyFooter?: boolean;
  hasStickyHeader?: boolean;
}) => ({
  container: css({
    // To get to our regular border radius for the inner menu items (6px),
    // we need to use 8px on the outer container
    borderRadius: '8px',
    overflowY: 'auto',
    position: 'relative',
    padding: 0,
    paddingTop: props.hasStickyHeader ? 0 : tokens.spacing2Xs,
    paddingBottom: props.hasStickyFooter ? 0 : tokens.spacing2Xs,
  }),
});
