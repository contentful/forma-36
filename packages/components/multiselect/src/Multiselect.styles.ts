import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getMenuItemStyles } from '@contentful/f36-core';

export const getMultiselectStyles = () => ({
  multiselect: css({
    position: 'relative',
    width: '100%',
  }),
  triggerButton: css({
    justifyContent: 'space-between',
  }),
  currentSelection: css({
    display: 'inline-block',
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    verticalAlign: 'bottom',
    marginRight: tokens.spacing2Xs,
  }),
  currentSelectionWithClearButton: css({
    paddingRight: '40px',
  }),
  currentSelectionAddition: css({
    color: tokens.gray600,
  }),
  searchBar: css({
    paddingTop: tokens.spacing2Xs,
    position: 'sticky',
    top: '0px',
    zIndex: tokens.zIndexWorkbenchHeader,
    backgroundColor: tokens.colorWhite,
  }),
  inputField: css({
    padding: `6px ${tokens.spacingXl} 10px ${tokens.spacingXs}`,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: '0px',
    borderBottom: `1px solid ${tokens.gray200}`,
    boxShadow: 'none',
    '&:focus, &:active, &:active:hover': {
      boxShadow: 'none',
      borderBottom: `1px solid ${tokens.gray200}`,
    },
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
  container: css({}),
  list: css({
    listStyle: 'none',
    padding: `${tokens.spacing2Xs}`,
    margin: 0,
  }),
  groupTitle: css({
    // Magic number to get a height of 32px on the item
    padding: `6px ${tokens.spacingXs}`,
    lineHeight: tokens.lineHeightM,
  }),
  noMatchesTitle: css({
    color: tokens.gray500,
    margin: tokens.spacingM,
    textAlign: 'center',
  }),
  clearSelectionButton: css({
    marginLeft: '-80px',
  }),
  selectAll: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    marginBottom: tokens.spacing2Xs,
    paddingBottom: tokens.spacing2Xs,
    'label > *': {
      fontWeight: tokens.fontWeightMedium,
    },
  }),
  option: css({
    listStyleType: 'none',
  }),
  optionText: css({
    alignItems: 'center',
    display: 'flex',
    span: {
      color: tokens.gray900,
      fontWeight: tokens.fontWeightDemiBold,
    },
  }),
  optionCheck: ({
    isActive,
    isDisabled,
  }: {
    isActive?: boolean;
    isDisabled?: boolean;
  }) =>
    css({
      label: cx(
        getMenuItemStyles({ isActive, isDisabled }),
        css({
          width: '100%',
        }),
      ),
    }),
});
