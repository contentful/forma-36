import {
  Box,
  type CommonProps,
  type ExpandProps,
  Flex,
} from '@contentful/f36-core';
import React from 'react';
import { getNavbarStyles } from './Navbar.styles';
import { cx } from 'emotion';
type NavbarOwnProps = CommonProps & {
  children?: React.ReactNode;
  account?: React.ReactNode;
  search?: React.ReactNode;
  switcher?: React.ReactNode;
  help?: React.ReactNode;
  badge?: React.ReactNode;
  /**
   * Items that will be rendered on the bottom-right of the navbar.
   * Useful for separating other navigation items from main ones, (e.g. separating "Settings" from all other navigation items).
   */
  bottomRightItems?: React.ReactNode;
  /**
   * Items that will be rendered on the top-right of the navbar.
   * Useful for providing additional context or actions to the user (e.g. a Feedback form link).
   */
  topRightItems?: React.ReactNode;
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
    children,
    account,
    search,
    switcher,
    help,
    badge,
    bottomRightItems,
    topRightItems,
    contentMaxWidth = '100%',
    testId = 'cf-ui-navbar',
    className,
    variant = 'wide',
    ...otherProps
  } = props;
  const styles = getNavbarStyles(contentMaxWidth, variant);

  return (
    <Box
      {...otherProps}
      ref={ref}
      testId={testId}
      className={cx(className, styles.maxWidth)}
    >
      <Flex className={styles.containerTop}>
        <Flex
          className={styles.containerTopContent}
          justifyContent="space-between"
        >
          <Flex>{switcher}</Flex>
          <Flex alignItems="center" gap="spacingXs">
            {topRightItems}
            {badge}
            {search}
            {help}
            {account}
          </Flex>
        </Flex>
      </Flex>

      <Flex className={styles.containerBottom}>
        <Flex
          className={styles.containerBottomContent}
          justifyContent="space-between"
        >
          <Flex as="nav" aria-label="Main Navigation">
            {children}
          </Flex>
          {bottomRightItems && <Flex>{bottomRightItems}</Flex>}
        </Flex>
      </Flex>
    </Box>
  );
}

export const Navbar = React.forwardRef(_Navbar);
