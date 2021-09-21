import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getInlineEntryCardStyles = () => {
  return {
    actions: css({
      display: 'flex',
      padding: 0,
      marginLeft: tokens.spacingXs,
      minHeight: 'auto',
    }),
    root: css({
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      display: 'inline-flex',
      flexDirection: 'row-reverse',
      paddingBottom: 0,
      paddingTop: 0,
      paddingLeft: tokens.spacingS,
      paddingRight: tokens.spacing2Xs,
    }),
  };
};
