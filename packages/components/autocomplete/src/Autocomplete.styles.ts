import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAutocompleteStyles = () => ({
  autocomplete: css({
    position: 'relative',
    width: '100%',
  }),
  combobox: css({
    position: 'relative',
  }),
  toggleButton: css({
    position: 'absolute',
    top: '4px',
    right: '4px',
    zIndex: 1,
  }),
  list: css({
    overflowY: 'auto',
    listStyle: 'none',
    padding: `${tokens.spacingXs} 0`,
    margin: 0,
    maxHeight: '360px',
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
  disabled: css({
    opacity: 0.5,
    pointerEvents: 'none',
  }),
  highlighted: css({
    backgroundColor: tokens.gray100,
  }),
});
