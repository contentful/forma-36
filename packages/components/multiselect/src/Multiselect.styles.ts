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
  inputField: css({
    paddingRight: tokens.spacingXl,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: '0px',
    borderBottom: `1px solid ${tokens.gray200}`,
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
  selectAll: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    'label > *': {
      fontWeight: 'bold',
    },
  }),
  item: css({
    label: {
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      margin: `0 ${tokens.spacing2Xs}`,
      width: `calc(100% - 2 * ${tokens.spacing2Xs})`,
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
