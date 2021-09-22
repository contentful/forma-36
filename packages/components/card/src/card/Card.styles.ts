import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCardStyles = () => {
  return {
    contentWithLargePadding: css({
      paddingBottom: tokens.spacingL,
      paddingLeft: tokens.spacingL,
      paddingRight: tokens.spacingL,
    }),
    header: ({ padding }) =>
      css({
        gridColumn: 'content',
        gridRow: 'header',
        padding: padding === 'large' ? tokens.spacingL : tokens.spacingM,
      }),
    headerWithActions: ({ padding }) =>
      css({
        alignItems: 'flex-end',
        paddingRight: tokens.spacingXs,
        paddingTop: padding === 'large' ? tokens.spacingM : tokens.spacingXs,
      }),
  };
};
