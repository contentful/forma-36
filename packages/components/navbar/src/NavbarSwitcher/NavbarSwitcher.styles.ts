import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

import { getGlowOnFocusStyles, increaseHitArea, mqs } from '../utils.styles';

const BORDER_WIDTH = 1;

export const getNavbarSwitcherStyles = ({
  isMaster,
}: {
  isMaster: boolean;
}) => ({
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
      showSpaceEnv && getEnvVariantColor(isMaster),
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
        background: isMaster
          ? tokens.green300
          : `linear-gradient(
          -45deg, 
          ${tokens.orange300} 28.57%, 
          transparent 28.57%, 
          transparent 50%, 
          ${tokens.orange300} 50%, 
          ${tokens.orange300} 78.57%, 
          transparent 78.57%, 
          transparent 100%
        )`,
        backgroundSize: isMaster ? 'inherit' : '9px 9px',
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

const getEnvVariantColor = (isMaster: boolean) => ({
  padding: '0',
  paddingRight: tokens.spacingXs,
  color: isMaster ? tokens.green700 : tokens.orange700,
  backgroundColor: isMaster ? tokens.green100 : tokens.orange100,
  border: `${BORDER_WIDTH}px solid ${
    isMaster ? tokens.green400 : tokens.orange400
  }`,

  '&:hover, &:active': {
    backgroundColor: isMaster ? tokens.green200 : tokens.orange200,
  },
});
