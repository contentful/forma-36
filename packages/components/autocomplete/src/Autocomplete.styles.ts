import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAutocompleteStyles = (listMaxHeight: number) => ({
  autocomplete: css({
    position: 'relative',
    width: '100%',
  }),
  combobox: css({
    position: 'relative',
  }),
  inputField: css({
    paddingRight: tokens.spacingXl,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  toggleButton: css({
    position: 'absolute',
    top: '1px',
    right: '1px',
    zIndex: 1,
    padding: tokens.spacing2Xs,
    minHeight: 'calc(100% - 2px)',
  }),
  content: css({
    overflow: 'auto',
    maxHeight: `${listMaxHeight}px`,
  }),
  list: css({
    listStyle: 'none',
    padding: `${tokens.spacingXs} ${tokens.spacing2Xs}`,
    margin: 0,
  }),
  groupTitle: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    lineHeight: tokens.lineHeightM,
  }),
  noMatchesTitle: css({
    color: tokens.gray500,
    margin: `${tokens.spacingM} 0 ${tokens.spacingM} 0`,
  }),
  item: css({
    display: 'block',
    // Magic number to get a height of 32px on the item
    padding: `6px ${tokens.spacingXs}`,
    wordBreak: 'break-word',
    whiteSpace: 'break-spaces',
    cursor: 'pointer',
    hyphens: 'auto',
    color: tokens.gray700,
    borderRadius: tokens.borderRadiusSmall,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    fontWeight: tokens.fontWeightNormal,
    '&:focus, &:hover': {
      backgroundColor: tokens.gray100,
    },
    '&:active': {
      backgroundColor: tokens.gray200,
      color: tokens.gray900,
    },
  }),
  disabled: css({
    opacity: 0.5,
    pointerEvents: 'none',
  }),
  highlighted: css({
    backgroundColor: tokens.gray100,
  }),
  hidden: css({
    display: 'none',
  }),
});
