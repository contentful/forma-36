import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { getGlowOnFocusStyles } from '../utils.styles';

export const getNavbarItemActiveStyles = () =>
  css({
    '&::after': {
      content: '""',
      position: 'absolute',
      width: `calc(100% - ${tokens.spacingM})`,
      height: '2px',
      bottom: '0.5px',
      left: 0,
      right: 0,
      margin: 'auto',
      backgroundColor: tokens.blue600,
      zIndex: 0,
    },
  });

const commonItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
  alignItems: 'center',
  background: 'none',
};

export const getNavbarItemStyles = () => ({
  navbarItem: css(
    commonItemStyles,
    {
      alignItems: 'center',
      background: 'none',
      border: 0,
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
      color: tokens.gray700,
      boxSizing: 'border-box',
      transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
      borderRadius: tokens.borderRadiusMedium,

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
    getGlowOnFocusStyles(`inset ${tokens.glowPrimary}`),
  ),
  navbarItemMenuTrigger: css({
    paddingRight: tokens.spacingXs,
  }),
  isActive: getNavbarItemActiveStyles(),
});

export const getNavbarItemSkeletonStyles = () => ({
  itemSkeleton: css(commonItemStyles),
});
