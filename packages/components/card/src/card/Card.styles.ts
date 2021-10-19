import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCardStyles = () => {
  return {
    contentWithLargePadding: css({
      paddingBottom: tokens.spacingL,
      paddingLeft: tokens.spacingL,
      paddingRight: tokens.spacingL,
    }),
    contentWithNoPadding: css({
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
    }),
    contentWithDefaultPadding: css({
      paddingBottom: tokens.spacingM,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingM,
    }),
    header: ({ padding }) =>
      css({
        gridColumn: 'content',
        gridRow: 'header',
        padding:
          padding === 'large'
            ? tokens.spacingL
            : padding === 'none'
            ? '0px'
            : tokens.spacingM,
      }),
    headerWithActions: ({ padding }) =>
      css({
        alignItems: 'flex-end',
        paddingRight: tokens.spacingXs,
        paddingTop:
          padding === 'large'
            ? tokens.spacingM
            : padding === 'none'
            ? '0px'
            : tokens.spacingXs,
      }),
  };
};
