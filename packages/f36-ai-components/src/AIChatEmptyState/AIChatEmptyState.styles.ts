import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    suggestionPill: css({
      backgroundColor: tokens.colorWhite,
      border: `1px solid ${tokens.gray200}`,
      borderRadius: '99px',
      padding: `${tokens.spacing2Xs} ${tokens.spacingM}`,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: tokens.gray100,
      },
      ':active': {
        backgroundColor: tokens.gray200,
      },
    }),
    suggestionIcon: css({
      color: tokens.gray500,
    }),
  };
};
