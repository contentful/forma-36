import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const styles = {
  tabs: {
    display: 'flex',
  } as CSSObject,
  tab: {
    borderRadius: 0,
    whiteSpace: 'nowrap',
    color: tokens.gray500,
    display: 'flex',
    height: '100%',
    minHeight: tokens.spacing2Xl,
    position: 'relative',
    padding: `0 ${tokens.spacingM}`,
    fontFamily: tokens.fontStackPrimary,
    fontWeight: tokens.fontWeightDemiBold,
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:focus-visible': {
      boxShadow: tokens.glowPrimary,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      background: tokens.colorPrimary,
      opacity: '0',
      bottom: '0',
      left: '0',
      right: '0',
      height: '2px',
    },
    '&:hover:before, &:hover:focus': {
      opacity: '0.5',
    },
    '&[data-state="active"]': {
      color: tokens.colorPrimary,
      '&:before, &:hover:before, &:hover:focus': {
        opacity: '1',
      },
    },
    '> span': {
      display: 'flex',
      alignSelf: 'center',
      cursor: 'inherit',
    },
  } as CSSObject,
  tabDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  } as CSSObject,
  tabDividerVertical: {
    '& > *:not(:first-child)': {
      boxShadow: `inset 1px 0 0px 0px ${tokens.gray200}`,
    },
  },
  tabDividerHorizontal: {
    boxShadow: `inset 0 -2px 0px 0px ${tokens.gray200}`,
  },
};

export const getRootStyles = ({ className, orientation }) => ({
  root: cx(
    css({
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'row' : 'column',
    }),
    className,
  ),
});

export const getTabStyles = ({ className, isDisabled }) => ({
  tab: cx(css(styles.tab), className, {
    [css(styles.tabDisabled)]: isDisabled,
  }),
});

export const getTabsStyles = ({ className, variant }) => ({
  tabList: cx(css(styles.tabs), className, {
    [css(styles.tabDividerHorizontal)]: variant === 'horizontal-divider',
    [css(styles.tabDividerVertical)]: variant === 'vertical-divider',
  }),
});

export const getTabPanelStyles = ({ className }: { className: string }) => ({
  tabPanel: cx(
    css({
      outline: 'none',
      '&:focus-visible': {
        boxShadow: tokens.glowPrimary,
      },
    }),
    className,
  ),
});
