import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { getMenuItemStyles } from '@contentful/f36-core';

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
  item: ({
    isActive = false,
    isDisabled = false,
  }: {
    isActive?: boolean;
    isDisabled?: boolean;
  }) => cx(getMenuItemStyles({ isActive, isDisabled })),
  highlighted: css({
    backgroundColor: tokens.gray100,
  }),
  hidden: css({
    display: 'none',
  }),
});
