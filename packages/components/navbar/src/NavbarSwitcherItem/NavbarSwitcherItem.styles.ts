import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from '../utils.styles';

const mobileIcon = {
  display: 'none',
  '&:first-child': {
    display: 'block',
  },

  [mqs.medium]: {
    display: 'block',
    '&:first-child': {
      display: 'none',
    },
  },
};

export const getNavbarSwitcherItemStyles = () => ({
  breadcrumbsItem: css({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    border: `solid 1px ${tokens.gray300}`,
    display: 'inline-flex',
    margin: 0,
    minWidth: 0,
    padding: `0 ${tokens.spacingXs}`,
    height: tokens.spacingL,
    borderRadius: '3rem',
    zIndex: 2,

    whiteSpace: 'nowrap',
    '&:not(:first-child)': {
      clipPath: `path('M0 24C6 24 10 18 10 10C10 5 6 0 0 0H400C400 0 400 5 400 24H0Z')`,
    },
    '&:first-child': {
      minWidth: '24px',
    },
    '&:nth-child(2)': {
      zIndex: 1,
      left: `-${tokens.spacingXs}`,
      paddingLeft: tokens.spacingM,
      borderRadius: `0 3rem 3rem 0`,
      span: {
        maxWidth: '80px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        [mqs.large]: {
          maxWidth: '100%',
        },
      },
    },
    '&:nth-child(3)': {
      left: `-${tokens.spacingM}`,
      paddingLeft: tokens.spacingM,
      borderRadius: `0 3rem 3rem 0`,
      fontFamily: tokens.fontStackMonospace,
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      zIndex: 0,
      span: {
        maxWidth: '40px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        [mqs.large]: {
          maxWidth: '100%',
        },
      },
      '> div': {
        [mqs.medium]: {
          gap: tokens.spacing2Xs,
        },
      },
    },
  }),
  breadcrumbsItemCircle: css({
    borderRadius: '50%',
    color: tokens.gray400,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '11px',
    width: tokens.spacingL,
    height: tokens.spacingL,
  }),
  breadcrumbsItemEnvMaster: css({
    color: tokens.green400,
    ' svg': {
      ...mobileIcon,
      fill: tokens.green400,
    },
  }),
  breadcrumbsItemEnvNonMaster: css({
    color: tokens.orange400,
    svg: {
      ...mobileIcon,
      fill: tokens.orange400,
    },
  }),
});
