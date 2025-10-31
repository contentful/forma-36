import { type CommonProps, type ExpandProps, Flex } from '@contentful/f36-core';
import React from 'react';
import { getNavbarStyles } from './Navbar.styles';
import { ContentfulLogoIcon } from './icons';
import { cx } from '@emotion/css';
import { Button } from '@contentful/f36-button';
import { ListIcon } from '@contentful/f36-icons';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';

type NavbarOwnProps = CommonProps & {
  /**
   * Accepts a React Component that will be displayed
   * instead of the Contentful Logo
   */
  logo?: React.ReactNode;

  /** Promotions component, displayed on most left side */
  promotions?: React.ReactNode;

  /** Environment Switcher component */
  switcher?: React.ReactNode;

  /** Main Navigation Elements */
  mainNavigation?: React.ReactNode;

  /** Secondary Navigation Elements, displayed in the right side */
  secondaryNavigation?: React.ReactNode;

  /** User Account Component  */
  account?: React.ReactNode;

  /** Navigation displayed on mobile versions */
  mobileNavigation?: React.ReactNode;

  mobileNavigationProps?: {
    /** breakpoint to determine when to show the mobile navigation */
    breakpoint?: 'small' | 'medium';

    /**
     * label of the mobile navigation trigger button
     * @default 'Menu'
     */
    label?: string;
  };

  /**
   * Defines the max-width of the content inside the navbar.
   * @default '100%'
   */
  contentMaxWidth?: string;

  /**
   * Describes the size variation of the Navbar
   * Variant wide will set the contentMaxWidth to 1524px
   */
  variant?: 'wide' | 'fullscreen';

  /**
   * aria labels for different areas of the navigation bar
   */
  aria?: {
    labelMainNavigation?: string;
    labelSecondaryNavigation?: string;
    labelPromotions?: string;
    labelAccount?: string;
  };
};

// expose only the HTML props that are needed to not pollute the API
type NavbarHTMLElementProps = Pick<React.ComponentPropsWithoutRef<'div'>, 'id'>;

export type NavbarProps = NavbarHTMLElementProps & NavbarOwnProps;

function _Navbar(props: ExpandProps<NavbarProps>, ref: React.Ref<HTMLElement>) {
  const {
    logo,
    promotions,
    switcher,
    mainNavigation,
    secondaryNavigation,
    account,
    mobileNavigation,
    mobileNavigationProps = { breakpoint: 'small', label: 'Menu' },
    className,
    contentMaxWidth = '100%',
    testId = 'cf-ui-navbar',
    variant = 'wide',
    aria = {
      labelMainNavigation: 'Main Navigation',
      labelSecondaryNavigation: 'Secondary Navigation',
      labelPromotions: 'Promotions',
      labelAccount: 'Account Navigation',
    },
    ...otherProps
  } = props;
  const styles = getNavbarStyles({ contentMaxWidth, variant });

  return (
    <Flex
      {...otherProps}
      ref={ref}
      testId={testId}
      className={cx(styles.container, className)}
      as="header"
    >
      <Flex
        as="nav"
        className={styles.navigation}
        justifyContent="space-between"
        gap="spacingXs"
      >
        <Flex alignItems="center" gap="spacingL">
          {logo || <ContentfulLogoIcon className={styles.logo} />}
          {mobileNavigation && (
            <NavbarMenu
              trigger={
                <Button
                  className={styles.mobileNavigationButton(
                    mobileNavigationProps.breakpoint,
                  )}
                  startIcon={<ListIcon size="medium" />}
                >
                  {mobileNavigationProps.label}
                </Button>
              }
            >
              {mobileNavigation}
            </NavbarMenu>
          )}
          {mainNavigation && (
            <Flex
              className={styles.mainNavigation(
                mobileNavigationProps.breakpoint,
              )}
              aria-label={aria.labelMainNavigation}
              gap="spacingXs"
            >
              {mainNavigation}
            </Flex>
          )}
        </Flex>
        <Flex alignItems="center" gap="spacingXs">
          <Flex
            alignItems="center"
            className={styles.promoNavigationWrapper}
            aria-label={aria.labelPromotions}
            gap="spacingXs"
          >
            {promotions}
          </Flex>
          <Flex alignItems="center">{switcher}</Flex>
          <Flex alignItems="center" gap="spacingXs">
            {secondaryNavigation && (
              <Flex
                className={styles.secondaryNavigationWrapper}
                aria-label={aria.labelSecondaryNavigation}
                gap="spacingXs"
              >
                {secondaryNavigation}
              </Flex>
            )}
            {account && (
              <Flex
                className={styles.account}
                aria-label={aria.labelAccount}
                gap="spacingXs"
              >
                {account}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const Navbar = React.forwardRef(_Navbar);
