import { css } from '@emotion/css';
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
  isOpen?: boolean;
}) => ({
  container: css({
    display: props.isOpen ? 'initial' : 'none',
    // To get to our regular border radius for the inner menu items (6px),
    // we need to use 8px on the outer container
    borderRadius: '8px',
    overflowY: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 0,
    background: tokens.colorWhite,
    paddingTop: props.hasStickyHeader ? 0 : tokens.spacing2Xs,
    paddingBottom: props.hasStickyFooter ? 0 : tokens.spacing2Xs,
    boxShadow: tokens.boxShadowDefault,
    zIndex: tokens.zIndexDropdown,
    '&:focus': {
      boxShadow: tokens.glowPrimary,
      outline: 'none',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: tokens.boxShadowDefault,
    },
  }),
});
