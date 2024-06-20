import {
  Box,
  type CommonProps,
  type ExpandProps,
  Flex,
} from '@contentful/f36-core';
import React from 'react';
import { getNavbarStyles } from './Navbar.styles';
import { ContentfulLogoIcon } from './icons';

type NavbarOwnProps = CommonProps & {
  /**
   * Accepts a React Component that will be displayed
   * instead of the Contentful Logo
   */
  logo?: React.ReactNode;

  /** Environment Switcher component */
  switcher?: React.ReactNode;

  /** Main Navigation Elements */
  mainNavigation?: React.ReactNode;

  /** Secondary Navigation Elements, displayed in the right side */
  secondaryNavigation?: React.ReactNode;

  /** User Account Component  */
  account?: React.ReactNode;

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
};

// expose only the HTML props that are needed to not pollute the API
type NavbarHTMLElementProps = Pick<React.ComponentPropsWithoutRef<'div'>, 'id'>;

export type NavbarProps = NavbarHTMLElementProps & NavbarOwnProps;

function _Navbar(props: ExpandProps<NavbarProps>, ref: React.Ref<HTMLElement>) {
  const {
    logo,
    switcher,
    mainNavigation,
    secondaryNavigation,
    account,
    className,
    contentMaxWidth = '100%',
    testId = 'cf-ui-navbar',
    variant = 'wide',
    ...otherProps
  } = props;
  const styles = getNavbarStyles(contentMaxWidth, variant);

  return (
    <Box
      {...otherProps}
      ref={ref}
      testId={testId}
      className={className}
      as="header"
    >
      <Flex className={styles.containerTop}>
        <Flex
          className={styles.containerTopContent}
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap="spacingL">
            {logo || <ContentfulLogoIcon className={styles.logo} />}
            {mainNavigation && (
              <Flex gap="spacingXs" as="nav" aria-label="Main Navigation">
                {mainNavigation}
              </Flex>
            )}
          </Flex>
          <Flex alignItems="center" gap="spacingXs">
            {switcher && (
              <Flex as="nav" aria-label="Space and Environment Navigation">
                {switcher}
              </Flex>
            )}
            {secondaryNavigation && (
              <Flex as="nav" aria-label="Secondary Navigation">
                {secondaryNavigation}
              </Flex>
            )}
            {account && (
              <Flex as="nav" aria-label="Account Navigation">
                {account}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export const Navbar = React.forwardRef(_Navbar);
