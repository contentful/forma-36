import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMultiselectStyles = () => ({
  multiselect: css({
    position: 'relative',
    width: '100%',
  }),
  currentSelection: css({
    width: '50%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    verticalAlign: 'bottom',
    marginRight: tokens.spacing2Xs,
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
    zIndex: tokens.zIndexDefault,
    padding: tokens.spacing2Xs,
    height: tokens.spacingXl,
  }),
  content: (listMaxHeight: number) =>
    css({
      overflow: 'auto',
      maxHeight: `${listMaxHeight}px`,
    }),
  list: css({
    listStyle: 'none',
    padding: `${tokens.spacingXs} 0`,
    margin: 0,
  }),
  groupTitle: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    lineHeight: tokens.lineHeightM,
  }),
  noMatchesTitle: css({
    color: tokens.gray500,
    margin: tokens.spacingM,
  }),
  item: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    wordBreak: 'break-word',
    whiteSpace: 'break-spaces',
    hyphens: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '&:focus, &:hover': {
      backgroundColor: tokens.gray100,
    },
    '&:active': {
      backgroundColor: tokens.gray200,
    },
  }),
  disabled: css({
    opacity: 0.5,
    cursor: 'not-allowed',
  }),
});