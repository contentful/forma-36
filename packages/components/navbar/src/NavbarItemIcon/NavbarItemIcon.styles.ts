import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getNavbarItemIconStyles = () => ({
  root: css({
    '&:first-child': {
      marginRight: tokens.spacing2Xs,
    },
    '&:last-child': {
      marginLeft: tokens.spacing2Xs,
    },
    'img&': {
      borderRadius: tokens.borderRadiusSmall,
      maxWidth: tokens.spacingM,
      maxHeight: tokens.spacingM,
    },
  }),
});
