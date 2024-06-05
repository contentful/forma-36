import React from 'react';
import { cx } from 'emotion';
import {
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { getNavbarMenuTriggerStyles } from './NavbarMenuTrigger.styles';

type NavbarMenuTriggerOwnProps = CommonProps & {
  children?: React.ReactNode;
  label: string;
  title?: string;
  startIcon?: React.ReactElement;
};

export type NavbarMenuTriggerProps = PropsWithHTMLElement<
  NavbarMenuTriggerOwnProps,
  'button'
>;

export const NavbarMenuTrigger = (
  props: ExpandProps<NavbarMenuTriggerProps>,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const {
    label,
    title,
    children,
    className,
    testId = 'cf-ui-navbar-menu-trigger',
    startIcon,
    ...otherProps
  } = props;

  const styles = getNavbarMenuTriggerStyles();

  return (
    <Button
      aria-label={label}
      as="button"
      ref={ref}
      className={cx(styles.menuTrigger, className)}
      testId={testId}
      variant="transparent"
      size="small"
      startIcon={startIcon}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
