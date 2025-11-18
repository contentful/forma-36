import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from './utils.styles';
import { NavbarProps } from './Navbar';
import { NAVBAR_HEIGHT } from './constants';

export const getNavbarStyles = ({
  contentMaxWidth,
  variant,
}: Pick<NavbarProps, 'contentMaxWidth' | 'variant'>) => ({
  container: css({
    justifyContent: 'center',
    backgroundColor: tokens.gray100,
    width: '100%',
  }),
  logo: css({
    display: 'none',
    [mqs.small]: {
      display: 'block',
      height: '28px',
      width: '28px',
    },
  }),

  navigation: css({
    width: '100%',
    maxWidth: variant === 'wide' ? '1920px' : contentMaxWidth,
    padding: `${tokens.spacingS} ${tokens.spacingM}`,
    height: `${NAVBAR_HEIGHT}px`,
    [mqs.small]: {
      padding: `${tokens.spacingM} ${tokens.spacingL}`,
    },
  }),

  mainNavigation: (mobileNavigationBp: 'small' | 'medium') =>
    css(
      {
        display: 'none',
      },
      mobileNavigationBp === 'small'
        ? {
            [mqs.small]: {
              display: 'flex',
            },
          }
        : {
            [mqs.medium]: {
              display: 'flex',
            },
          },
    ),

  mobileNavigationButton: (mobileNavigationBp: 'small' | 'medium') =>
    css(
      {
        display: 'flex',
        minHeight: 'initial', // unset default 40px height
        height: '36px',
        padding: '0 12px',
        borderRadius: '10px',
      },
      mobileNavigationBp === 'small'
        ? {
            [mqs.small]: {
              display: 'none',
            },
          }
        : {
            [mqs.medium]: {
              display: 'none',
            },
          },
    ),
  mobileNavigationIcon: css({
    heigt: '20px',
    width: '20px',
  }),

  secondaryNavigationWrapper: css({
    '> *:not(:first-child)': {
      display: 'none',
      [mqs.xsmall]: {
        display: 'flex',
      },
    },
  }),
  promoNavigationWrapper: css({
    display: 'none',
    [mqs.large]: {
      display: 'flex',
    },
  }),
  account: css({
    display: 'none',
    [mqs.xsmall]: {
      display: 'flex',
    },
  }),
});
