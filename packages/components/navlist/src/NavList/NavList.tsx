import React from 'react';
import { cx } from 'emotion';
import {
  type CommonProps,
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '@contentful/f36-core';
import { getStyles } from './NavList.styles';

const NAV_LIST_DEFAULT_TAG = 'div';

export interface NavListInternalProps extends CommonProps {
  children: React.ReactNode;
  as?: 'nav' | 'div';
}

export type NavListProps<
  E extends React.ElementType = typeof NAV_LIST_DEFAULT_TAG,
> = PolymorphicProps<NavListInternalProps, E>;

function _NavList<E extends React.ElementType = typeof NAV_LIST_DEFAULT_TAG>(
  props: NavListProps<E>,
  ref: React.Ref<any>,
) {
  const styles = getStyles();

  const { as, className, children, testId, ...otherProps } = props;

  const Element = (as ?? NAV_LIST_DEFAULT_TAG) as React.ElementType;

  return (
    <Element
      data-test-id={testId}
      ref={ref}
      className={cx(styles.root, className)}
      {...otherProps}
    >
      {children}
    </Element>
  );
}

_NavList.displayName = 'NavList';

export const NavList: PolymorphicComponent<
  ExpandProps<NavListInternalProps>,
  typeof NAV_LIST_DEFAULT_TAG
> = React.forwardRef(_NavList);
