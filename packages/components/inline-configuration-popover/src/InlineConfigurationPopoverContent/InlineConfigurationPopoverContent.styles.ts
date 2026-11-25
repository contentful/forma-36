import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

const CONTENT_WIDTH = 360;

export const getStyles = () => ({
  root: css({
    width: CONTENT_WIDTH,
    maxWidth: `calc(100vw - ${tokens.spacingL})`,
    maxHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorWhite,
    border: 0,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.boxShadowDefault,
    // Popovers sit on the dropdown layer, above modals: close the popover
    // before opening a modal from it.
    zIndex: tokens.zIndexDropdown,
    outline: 'none',
    '&:focus-visible': {
      boxShadow: tokens.glowPrimary,
    },
  }),
  dragging: css({
    boxShadow: tokens.boxShadowHeavy,
    userSelect: 'none',
  }),
  // The anchor scrolled out of its scroll container: hide the popover rather
  // than float it over unrelated content. It comes back with the anchor.
  detached: css({
    visibility: 'hidden',
    pointerEvents: 'none',
  }),
  a11yContainer: css({
    display: 'contents',
  }),
});
