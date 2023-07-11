import { cx } from 'emotion';
import React from 'react';
import { getNavbarSearchStyles } from './NavbarSearch.styles';
import { SearchIcon } from '../icons';
import {
  type CommonProps,
  type ExpandProps,
  Flex,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';

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
    <Flex
      aria-label="Quick Search"
      {...otherProps}
      as="button"
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
    >
      <SearchIcon size="medium" variant="white" />
    </Flex>
  );
}

export const NavbarSearch = React.forwardRef(_NavbarSearch);
