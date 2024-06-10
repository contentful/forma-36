import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getNavbarItemIconStyles = () => ({
  navbarItemIcon: css({
    '&:last-child': {
      marginLeft: tokens.spacing2Xs,
    },
    '&:only-child': {
      marginLeft: 0,
    },
    'img&': {
      borderRadius: tokens.borderRadiusSmall,
      maxWidth: tokens.spacingM,
      maxHeight: tokens.spacingM,
    },
  }),
});
