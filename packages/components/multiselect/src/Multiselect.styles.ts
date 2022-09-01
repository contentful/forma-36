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
    zIndex: 1,
    padding: tokens.spacing2Xs,
    height: '38px',
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
    margin: `${tokens.spacingM} 0 ${tokens.spacingM} 0`,
  }),
  item: (isDisabled?: boolean) =>
    css({
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      hyphens: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: isDisabled ? 0.5 : 1,

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
