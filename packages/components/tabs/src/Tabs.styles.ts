import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

const styles = {
  tabDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
  tabDividerVertical: {
    '& > *:not(:first-child)': {
      boxShadow: `inset 1px 0 0px 0px ${tokens.gray200}`,
    },
  },
  tabDividerHorizontal: {
    boxShadow: `inset 0 -2px 0px 0px ${tokens.gray200}`,
  },
};

export const getTabStyles = ({ className, isDisabled }) => ({
  tab: cx(
    css({
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
        background: tokens.blue500,
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
        color: tokens.blue500,
        '&:before, &:hover:before, &:hover:focus': {
          opacity: '1',
        },
      },
      '> span': {
        display: 'flex',
        alignSelf: 'center',
        cursor: 'inherit',
      },
    }),
    className,
    {
      [css(styles.tabDisabled)]: isDisabled,
    },
  ),
});

export const getTabsStyles = ({ className, variant }) => ({
  tabList: cx(
    css({
      display: 'flex',
    }),
    className,
    {
      [css(styles.tabDividerHorizontal)]: variant === 'horizontal-divider',
      [css(styles.tabDividerVertical)]: variant === 'vertical-divider',
    },
  ),
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
