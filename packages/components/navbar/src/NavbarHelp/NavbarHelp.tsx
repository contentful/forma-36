import React from 'react';
import { cx } from 'emotion';
import { getNavbarHelpStyles } from './NavbarHelp.styles';
import { HelpIcon } from '../icons';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { NavbarMenu } from '../NavbarMenu/NavbarMenu';

type NavbarHelpOwnProps = CommonProps & {
  children: React.ReactNode;
};

export type NavbarHelpProps = PropsWithHTMLElement<
  NavbarHelpOwnProps,
  'button'
>;

function _NavbarHelp(
  props: ExpandProps<NavbarHelpProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    testId = 'cf-ui-navbar-help-trigger',
    ...otherProps
  } = props;
  const styles = getNavbarHelpStyles();

  return (
    <NavbarMenu
      testId="cf-ui-navbar-help-menu"
      trigger={
        <Flex
          aria-label="Help Menu"
          {...otherProps}
          as="button"
          ref={ref}
          className={cx(styles.root, className)}
          testId={testId}
        >
          <HelpIcon size="medium" variant="white" />
          Help
        </Flex>
      }
    >
      {children}
    </NavbarMenu>
  );
}

export const NavbarHelp = React.forwardRef(_NavbarHelp);
