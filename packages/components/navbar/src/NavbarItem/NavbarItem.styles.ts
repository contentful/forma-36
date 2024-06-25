import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';

export const getNavbarItemActiveStyles = () =>
  css({
    backgroundColor: tokens.blue100,
    border: `1px solid ${tokens.blue400}`,
    color: tokens.blue600,
    '&:hover': {
      backgroundColor: tokens.blue100,
    },
  });

const commonItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
  alignItems: 'center',
  background: 'none',
  gap: tokens.spacing2Xs,
};

export const getNavbarItemStyles = ({ title }) => ({
  navbarItem: css(
    commonItemStyles,
    {
      appearance: 'none',
      background: 'none',
      border: '1px solid transparent',
      margin: 0,
      outline: 'none',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightS,
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
      minWidth: '44px',

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
  ),
  navbarItemMenuTrigger: css({
    paddingRight: tokens.spacingXs,
  }),
  isActive: getNavbarItemActiveStyles(),
  icon: css({
    display: !title ? 'block' : 'none',
    [mqs.large]: {
      display: 'block',
    },
  }),
});

export const getNavbarItemSkeletonStyles = () => ({
  itemSkeleton: css(commonItemStyles),
});
