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
  text: css({
    color: 'currentcolor',
    fontWeight: 'inherit',
    lineHeight: 'unset',
  }),

  navbarSwitcher: ({ showSpaceEnv }: { showSpaceEnv: boolean }) =>
    css(
      {
        color: tokens.gray600,
        flexShrink: 1,
        fontWeight: tokens.fontWeightMedium,
        maxWidth: '100%',
        minHeight: 'unset',
        padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
        '&:hover': {
          backgroundColor: hexToRGBA(tokens.gray900, 0.05),
        },
      },
      showSpaceEnv && getEnvVariantColor(isMaster),
      getGlowOnFocusStyles(),
      increaseHitArea(),
    ),

  innerRectangle: css({
    width: `calc(8px - ${BORDER_WIDTH}px)`,
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

  innerSpaceEnv: css({
    height: '26px',
  }),

  switcherSpaceName: css({
    // Set min-width only when there are three span children
    '&:has(> span:last-child:nth-child(3))': {
      minWidth: '12ch',
    },
    maxWidth: '15vw',
    [mqs.xsmall]: {
      maxWidth: '25vw',
    },
    [mqs.small]: {
      maxWidth: '10vw',
    },
    [mqs.medium]: {
      maxWidth: '50vw',
    },
  }),

  switcherEnvIcon: css({
    [mqs.small]: {
      width: '16px',
      height: '16px',
    },
  }),

  switcherSpaceNameStart: css({
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '1.25rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '5ch',
    [mqs.small]: {
      width: 'unset',
    },
  }),

  switcherSpaceNameTruncation: css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '1.25rem',
    verticalAlign: 'middle',
    display: 'none',
    [mqs.xsmall]: {
      display: 'inline-block',
      width: '5ch',
    },
    [mqs.medium]: {
      width: 'unset',
    },
  }),

  switcherSpaceNameEnd: css({
    display: 'none',
    [mqs.medium]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: '1.25rem',
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
