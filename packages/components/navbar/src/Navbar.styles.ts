import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from './utils.styles';
import { NavbarProps } from './Navbar';

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
    minHeight: tokens.spacingL,
    [mqs.small]: {
      padding: `${tokens.spacingM} ${tokens.spacingL}`,
    },
  }),

  mainNavigation: css({
    display: 'none',
    [mqs.small]: {
      display: 'flex',
    },
  }),

  mobileNavigationButton: css({
    display: 'flex',
    height: '36px',
    borderRadius: '10px',
    [mqs.small]: {
      display: 'none',
    },
  }),
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

  account: css({
    display: 'none',
    [mqs.xsmall]: {
      display: 'flex',
    },
  }),
});
