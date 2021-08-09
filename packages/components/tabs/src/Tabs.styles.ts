import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const styles = {
  tabs: {
    display: 'flex',
  } as CSSObject,
  tab: {
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    color: tokens.gray500,
    display: 'flex',
    height: '100%',
    minHeight: tokens.spacing2Xl,
    position: 'relative',
    cursor: 'pointer',
    padding: `0 ${tokens.spacingM}`,
    fontSize: tokens.fontSizeM,
    fontFamily: tokens.fontStackPrimary,
    fontWeight: tokens.fontWeightMedium,
    outline: 'none',
    textDecoration: 'none',
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
    '&:hover:before, &:hover:focus, &:last-child': {
      opacity: '0.5',
    },
  } as CSSObject,
  tabSelected: {
    color: tokens.colorPrimary,
    '&:before, &:hover:before, &:hover:focus': {
      opacity: '1',
    },
  } as CSSObject,
  tabDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
    '&:before, &:hover:before, &:hover:focus': {
      opacity: '0',
    },
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

export const getTabStyles = ({ className, isSelected, isDisabled }) => ({
  tab: cx(css(styles.tab), className, {
    [css(styles.tabSelected)]: isSelected,
    [css(styles.tabDisabled)]: isDisabled,
  }),
});

export const getTabsStyles = ({ className, variant }) => ({
  tabs: cx(css(styles.tabs), className, {
    [css(styles.tabDividerHorizontal)]: variant === 'horizontal-divider',
    [css(styles.tabDividerVertical)]: variant === 'vertical-divider',
  }),
});
