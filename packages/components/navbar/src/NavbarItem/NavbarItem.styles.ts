import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';

const borderWidth = '1px';

export const getNavbarItemActiveStyles = () =>
  css({
    backgroundColor: tokens.blue100,
    border: `${borderWidth} solid ${tokens.blue400}`,
    color: tokens.blue600,
    '&:focus,&:hover': {
      backgroundColor: tokens.blue100,
    },
  });

export const getNavbarItemDisabledStyles = () =>
  css({
    border: 'none',
    opacity: 0.5,
    pointerEvents: 'none',
  });

const commonItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: `calc(${tokens.spacing2Xs} - ${borderWidth}) calc(${tokens.spacingXs} - ${borderWidth})`,
  alignItems: 'center',
  background: 'none',
  gap: tokens.spacing2Xs,
};

export const getNavbarItemStyles = ({ hasTitle }: { hasTitle: boolean }) => ({
  navbarItem: css(
    commonItemStyles,
    {
      appearance: 'none',
      background: 'none',
      outline: 'none',
      border: `${borderWidth} solid transparent`,
      margin: 0,
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: tokens.fontWeightMedium,
      position: 'relative',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      hyphens: 'auto',
      textDecoration: 'none',
      color: tokens.gray800,
      boxSizing: 'border-box',
      transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
      borderRadius: tokens.borderRadiusMedium,
      height: '30px',

      padding: hasTitle
        ? `${tokens.spacing2Xs} ${tokens.spacingXs}`
        : `calc(${tokens.spacing2Xs} - ${borderWidth})`, // square button for icon-only items

      '&:focus, &:hover': {
        backgroundColor: tokens.gray200,
      },

      '&:active': getNavbarItemActiveStyles(),

      '&:disabled': {
        cursor: 'auto',
      },

      '& svg': {
        transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
      },
      '& > svg, & > span': {
        zIndex: tokens.zIndexDefault,
      },
    },
    getGlowOnFocusStyles(),
    increaseHitArea(),
  ),
  isActive: getNavbarItemActiveStyles(),
  isDisabled: getNavbarItemDisabledStyles(),
  icon: css({
    height: '20px',
    width: '20px',
    boxSizing: 'content-box',
    display: hasTitle ? 'none' : 'block',
    [mqs.small]: {
      height: '16px',
      width: '16px',
      padding: hasTitle ? '2px 0' : '2px', // square for icon-only items
    },
    [mqs.large]: {
      display: 'block',
    },
  }),
});

export const getNavbarItemSkeletonStyles = () => ({
  itemSkeleton: css(commonItemStyles),
});
