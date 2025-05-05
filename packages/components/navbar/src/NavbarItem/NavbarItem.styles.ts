import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';

const borderWidth = '1px';

export const getNavbarItemActiveStyles = () =>
  css({
    backgroundColor: tokens.blue100,
    border: `${borderWidth} solid ${tokens.blue400}`,
    color: tokens.blue600,
    '&:hover': {
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
  navbarItem: css([
    commonItemStyles,
    {
      appearance: 'none',
      background: 'none',
      border: `${borderWidth} solid transparent`,
      margin: 0,
      outline: 'none',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: tokens.fontWeightMedium,
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
        ? undefined
        : `calc(${tokens.spacing2Xs} - ${borderWidth})`, // square button for icon-only items

      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.05),
      },

      '&:hover::before': {
        opacity: 1,
        scale: '1',
      },

      '&:active::before': {
        backgroundColor: `rgba(255, 255, 255, 0.1)`,
      },
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
  ]),
  navbarItemMenuTrigger: css({
    paddingRight: tokens.spacingXs,
  }),
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
