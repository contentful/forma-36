import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const container = () =>
  css({
    background: tokens.colorWhite,
    border: 0,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.boxShadowDefault,
    zIndex: tokens.zIndexDropdown,
  });

export const styles = {
  container,
};
