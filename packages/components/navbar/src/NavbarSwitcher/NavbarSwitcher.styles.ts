import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';
import { EnvVariant } from './NavbarSwitcher';

const BORDER_WIDTH = 1;

export const getNavbarSwitcherStyles = (variant: EnvVariant) => ({
  navbarSwitcher: ({ showSpaceEnv }: { showSpaceEnv: boolean }) =>
    css(
      {
        color: tokens.gray600,
        flexShrink: 1,
        fontWeight: tokens.fontWeightMedium,

        maxWidth: '50vw',
        minHeight: 'unset',
        padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
        '&:hover': {
          backgroundColor: hexToRGBA(tokens.gray900, 0.05),
        },
        [mqs.xsmall]: {
          maxWidth: '45vw',
        },
        [mqs.medium]: {
          maxWidth: '35vw',
        },
        [mqs.large]: {
          maxWidth: '25vw',
        },
        [mqs.xlarge]: {
          maxWidth: '600px',
        },
      },
      showSpaceEnv && getEnvVariantColor(variant),
      getGlowOnFocusStyles(),
      increaseHitArea(),
    ),
  switcherWrapper: ({ showSpaceEnv }: { showSpaceEnv: boolean }) =>
    css({
      // Set min-width only when there are three span children
      gap: tokens.spacingXs,
      alignItems: 'center',
      minWidth: 0,
      '&:has(> span:last-child:nth-child(3))': {
        minWidth: '12ch',
      },
      '&:before': css({
        content: '""',
        position: 'absolute',
        display: 'block',
        width: `calc(8px - ${BORDER_WIDTH}px)`,
        height: showSpaceEnv ? '26px' : 'unset',
        borderTopLeftRadius: `calc(${tokens.borderRadiusMedium} - ${BORDER_WIDTH}px)`,
        borderBottomLeftRadius: `calc(${tokens.borderRadiusMedium} - ${BORDER_WIDTH}px)`,
        ...getWrapperBackground(variant),
        backgroundPosition: 'bottom',
      }),
    }),

  switcherLabelWrapper: css({
    height: '26px',
    paddingLeft: `calc(${tokens.spacingXs} * 2)`,
    alignItems: 'center',
    gap: tokens.spacing2Xs,
    maxWidth: '100%',
  }),

  switcherLabel: css({
    color: 'currentcolor',
    fontWeight: 'inherit',
    lineHeight: 'unset',
    display: 'inline-block',
    flexShrink: 1,
    minWidth: '0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),

  switcherCaret: css({
    flexShrink: 0,
    minWidth: 0,
  }),

  switcherEnvIcon: css({
    minWidth: '0',
    [mqs.small]: {
      width: '16px',
      height: '16px',
    },
  }),
});

export const getNavbarIconColor = (variant: EnvVariant) => {
  switch (variant) {
    case 'trial':
      return tokens.purple700;
    case 'non-master':
      return tokens.orange700;
    default:
      // Default to master variant
      return tokens.green700;
  }
};

const getEnvVariantColor = (variant: EnvVariant) => {
  const sharedStyles = {
    padding: '0',
    paddingRight: tokens.spacingXs,
  };

  switch (variant) {
    case 'trial':
      return {
        ...sharedStyles,
        color: tokens.purple700,
        backgroundColor: tokens.purple100,
        border: `${BORDER_WIDTH}px solid ${tokens.purple400}`,
        '&:hover, &:active': {
          backgroundColor: tokens.purple200,
        },
      };
    case 'non-master':
      return {
        ...sharedStyles,
        color: tokens.orange700,
        backgroundColor: tokens.orange100,
        border: `${BORDER_WIDTH}px solid ${tokens.orange400}`,
        '&:hover, &:active': {
          backgroundColor: tokens.orange200,
        },
      };
    default:
      // Default to master variant
      return {
        ...sharedStyles,
        color: tokens.green700,
        backgroundColor: tokens.green100,
        border: `${BORDER_WIDTH}px solid ${tokens.green400}`,
        '&:hover, &:active': {
          backgroundColor: tokens.green200,
        },
      };
  }
};

const getWrapperBackground = (variant: EnvVariant) => {
  switch (variant) {
    case 'trial':
      return {
        background: tokens.purple300,
      };
    case 'non-master':
      return {
        background: `linear-gradient(
          -45deg,
          ${tokens.orange300} 28.57%,
          transparent 28.57%,
          transparent 50%,
          ${tokens.orange300} 50%,
          ${tokens.orange300} 78.57%,
          transparent 78.57%,
          transparent 100%
        )`,
        backgroundSize: '9px 9px',
      };
    default:
      // Default to master variant
      return {
        background: tokens.green300,
      };
  }
};
