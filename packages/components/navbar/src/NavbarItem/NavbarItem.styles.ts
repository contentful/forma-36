import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { mqs } from '../utils.styles';

export const getNavbarItemActiveStyles = () =>
  css({
    '&': {
      color: tokens.colorWhite,
      '& svg': {
        fill: tokens.colorWhite,
      },
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      width: `calc(100% - ${tokens.spacingM})`,
      height: '2px',
      bottom: '0.5px',
      left: 0,
      right: 0,
      margin: 'auto',
      backgroundColor: tokens.colorWhite,
      zIndex: 0,
    },
  });

const commonItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: `10px ${tokens.spacingS}`,
  alignItems: 'center',
  background: 'none',
};

export const getNavbarItemStyles = () => ({
  root: css(commonItemStyles, {
    alignItems: 'center',
    background: 'none',
    border: 0,
    margin: 0,
    outline: 'none',
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    fontWeight: tokens.fontWeightMedium,
    position: 'relative',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    hyphens: 'auto',
    textDecoration: 'none',
    color: hexToRGBA(tokens.gray300, 0.8),
    boxSizing: 'border-box',
    transition: `color ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,

    '&::before': {
      content: '""',
      position: 'absolute',
      width: `calc(100% - ${tokens.spacingXs})`,
      height: `calc(100% - ${tokens.spacingS})`,
      top: `calc(${tokens.spacingS} / 2)`,
      left: 0,
      right: 0,
      margin: 'auto',
      borderRadius: tokens.borderRadiusSmall,
      backgroundColor: hexToRGBA(tokens.colorWhite, 0.08),
      opacity: 0,
      zIndex: 0,
      scale: 0,
      transition: `all ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,
    },

    '&:hover::before': {
      opacity: 1,
      scale: '1',
    },

    '&:focus-visible': {
      boxShadow: `inset ${tokens.glowPrimary}`,
      borderRadius: tokens.borderRadiusMedium,
    },
    '&:active::before': {
      backgroundColor: `rgba(255, 255, 255, 0.1)`,
    },
    '&:disabled': {
      cursor: 'auto',
    },

    '& svg': {
      fill: hexToRGBA(tokens.gray300, 0.8),
      transition: `fill ${tokens.transitionDurationShort} ${tokens.transitionEasingCubicBezier}`,

      '&:first-child': {
        display: 'none',
        [mqs.large]: {
          display: 'block',
        },
      },
    },
    '& > svg, & > span': {
      zIndex: tokens.zIndexDefault,
    },
  }),
  isActive: getNavbarItemActiveStyles(),
  dropdownIcon: css({
    paddingLeft: tokens.spacing2Xs,
  }),
});

export const getNavbarItemSkeletonStyles = () => ({
  root: css(commonItemStyles),
});
