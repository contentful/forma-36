import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getNavbarItemIconStyles = () => ({
  navbarItemIcon: css({
    '&:last-child&:not(:only-child)': {
      marginLeft: tokens.spacing2Xs,
    },
    'img&': {
      borderRadius: tokens.borderRadiusSmall,
      maxWidth: tokens.spacingM,
      maxHeight: tokens.spacingM,
    },
  }),
});
