import React from 'react';
import { cx } from 'emotion';
import { HelpIcon } from '../icons';
import {
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { NavbarMenu } from '../NavbarMenu/NavbarMenu';
import { getNavbarHelpStyles } from './NavbarHelp.styles';

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
        <Button
          aria-label="Help Menu"
          {...otherProps}
          as="button"
          ref={ref}
          className={cx(styles.navbarHelp, className)}
          testId={testId}
          variant="transparent"
          size="small"
          startIcon={<HelpIcon size="medium" />}
        >
          Help
        </Button>
      }
    >
      {children}
    </NavbarMenu>
  );
}

export const NavbarHelp = React.forwardRef(_NavbarHelp);
