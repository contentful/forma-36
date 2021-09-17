import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAutocompleteStyles = () => ({
  autocomplete: css({
    position: 'relative',
  }),
  list: css({
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
  }),
  item: css({
    display: 'block',
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    wordBreak: 'break-word',
    whiteSpace: 'break-spaces',
    cursor: 'pointer',
    hyphens: 'auto',

    '&:focus, &:hover': {
      backgroundColor: tokens.gray100,
    },
    '&:active': {
      backgroundColor: tokens.gray200,
    },
  }),
});
