import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMultiselectStyles = () => ({
  multiselect: css({
    position: 'relative',
    width: '100%',
  }),
  triggerButton: css({
    justifyContent: 'space-between',
  }),
  currentSelection: css({
    width: '50%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    verticalAlign: 'bottom',
    marginRight: tokens.spacing2Xs,
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
    margin: '1px 0',
  }),
  optionText: css({
    color: tokens.gray700,
    b: {
      color: tokens.gray900,
    },
  }),
  optionCheck: css({
    label: {
      // Magic number to get a height of 32px on the item
      padding: `6px ${tokens.spacingXs}`,
      width: '100%',
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      hyphens: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: tokens.borderRadiusMedium,
      border: 0,
      cursor: 'pointer',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: tokens.fontWeightNormal,
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
    },
  }),
  disabled: css({
    opacity: 0.5,
    cursor: 'not-allowed',
  }),
});
