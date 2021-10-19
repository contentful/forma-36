import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCardStyles = () => {
  return {
    content: ({ padding }) =>
      css({
        paddingBottom:
          padding === 'large'
            ? tokens.spacingL
            : padding === 'none'
            ? '0px'
            : tokens.spacingM,
        paddingLeft:
          padding === 'large'
            ? tokens.spacingL
            : padding === 'none'
            ? '0px'
            : tokens.spacingM,
        paddingRight:
          padding === 'large'
            ? tokens.spacingL
            : padding === 'none'
            ? '0px'
            : tokens.spacingM,
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
