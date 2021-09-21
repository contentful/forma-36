import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCardStyles = () => {
  return {
    contentWithLargePadding: css({
      paddingBottom: tokens.spacingL,
      paddingLeft: tokens.spacingL,
      paddingRight: tokens.spacingL,
    }),
    header: css({
      gridColumn: 'content',
      gridRow: 'header',
    }),
    headerWithActions: css({
      alignItems: 'flex-end',
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacingXs,
    }),
  };
};
