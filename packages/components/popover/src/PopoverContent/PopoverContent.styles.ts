import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getPopoverContentStyles = (isOpen: boolean) => ({
  container: css({
    display: isOpen ? 'inital' : 'none',
    width: 'max-content',
    position: 'absolute',
    top: 0,
    left: 0,
    background: tokens.colorWhite,
    border: 0,
    borderRadius: tokens.borderRadiusMedium,
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
