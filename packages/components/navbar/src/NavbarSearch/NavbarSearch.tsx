import { cx } from 'emotion';
import React from 'react';
import { SearchIcon } from '../icons';
import {
  type CommonProps,
  type ExpandProps,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button/src';
import { getNavbarSearchStyles } from './NavbarSearch.styles';
type NavbarSearchOwnProps = CommonProps;

export type NavbarSearchProps = PropsWithHTMLElement<
  NavbarSearchOwnProps,
  'button'
>;

function _NavbarSearch(
  props: ExpandProps<NavbarSearchProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { className, testId = 'cf-ui-navbar-search', ...otherProps } = props;
  const styles = getNavbarSearchStyles();
  return (
    <IconButton
      aria-label="Quick Search"
      {...otherProps}
      variant="transparent"
      ref={ref}
      size="small"
      className={cx(styles.root, className)}
      testId={testId}
      icon={<SearchIcon size="medium" />}
    />
  );
}

export const NavbarSearch = React.forwardRef(_NavbarSearch);
