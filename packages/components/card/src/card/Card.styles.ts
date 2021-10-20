import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCardStyles = ({ padding }) => {
  let paddingValue;

  switch (padding) {
    case 'large':
      paddingValue = tokens.spacingL;
      break;
    case 'none':
      paddingValue = '0px';
      break;
    default:
      paddingValue = tokens.spacingM;
  }

  return {
    content: css({
      paddingBottom: paddingValue,
      paddingLeft: paddingValue,
      paddingRight: paddingValue,
    }),
    header: css({
      gridColumn: 'content',
      gridRow: 'header',
      padding: paddingValue,
    }),
    headerWithActions: css({
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
