import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { CardProps } from '..';

const getCardPaddingValue = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'large':
      return tokens.spacingL;
    case 'none':
      return 0;
    default:
      return tokens.spacingM;
  }
};

export const getCardStyles = ({ padding }) => ({
  header: css({
    gridColumn: 'content',
    gridRow: 'header',
    marginBottom: tokens.spacingM,
  }),
  root: css({
    padding: getCardPaddingValue(padding),
  }),
});
