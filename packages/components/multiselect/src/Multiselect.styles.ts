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
    border: 'none',
    borderRadius: '0px',
    borderBottom: `1px solid ${tokens.gray200}`,
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
    cursor: 'pointer',
    '&:focus, &:hover': {
      backgroundColor: tokens.gray100,
    },
    '&:active': {
      backgroundColor: tokens.gray200,
    },
    '&:focus': {
      boxShadow: tokens.glowPrimary,
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'unset',
    },
    '&:focus-visible': {
      boxShadow: tokens.glowPrimary,
    },
  }),
  disabled: css({
    opacity: 0.5,
    cursor: 'not-allowed',
  }),
});
