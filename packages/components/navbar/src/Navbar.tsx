import {
  Box,
  type CommonProps,
  type ExpandProps,
  Flex,
} from '@contentful/f36-core';
import React from 'react';
import { getNavbarStyles } from './Navbar.styles';
type NavbarOwnProps = CommonProps & {
  logo?: React.ReactNode;
  mainNavigation?: React.ReactNode;
  secondaryNavigation?: React.ReactNode;

  /**
   * Defines the max-width of the content inside the navbar.
   * @default '100%'
   */
  contentMaxWidth?: string;
  /**
   * Describes the size variation of the navbar
   */
  variant?: 'wide' | 'fullscreen';
};

// expose only the HTML props that are needed to not pollute the API
type NavbarHTMLElementProps = Pick<React.ComponentPropsWithoutRef<'div'>, 'id'>;

export type NavbarProps = NavbarHTMLElementProps & NavbarOwnProps;

function _Navbar(props: ExpandProps<NavbarProps>, ref: React.Ref<HTMLElement>) {
  const {
    logo,
    mainNavigation,
    secondaryNavigation,
    contentMaxWidth = '100%',
    testId = 'cf-ui-navbar',
    className,
    variant = 'wide',
    ...otherProps
  } = props;
  const styles = getNavbarStyles(contentMaxWidth, variant);

  return (
    <Box {...otherProps} ref={ref} testId={testId} className={className}>
      <Flex className={styles.containerTop}>
        <Flex
          className={styles.containerTopContent}
          justifyContent="space-between"
        >
          {logo}
          <Flex as="nav" aria-label="Main Navigation">
            {mainNavigation}
          </Flex>

          <Flex alignItems="center" gap="spacingXs">
            {secondaryNavigation}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export const Navbar = React.forwardRef(_Navbar);
