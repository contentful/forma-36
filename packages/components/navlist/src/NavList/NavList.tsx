import React from 'react';
import { cx } from '@emotion/css';
import type {
  CommonProps,
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '@contentful/f36-core';
import { getStyles } from './NavList.styles';

const NAV_LIST_DEFAULT_TAG = 'nav';

export interface NavListInternalProps extends CommonProps {
  children: React.ReactNode;
  /**
   * @default nav
   */
  as?: 'nav' | 'div';
  'aria-label'?: string;
}

export type NavListProps<
  E extends React.ElementType = typeof NAV_LIST_DEFAULT_TAG,
> = PolymorphicProps<NavListInternalProps, E>;

function _NavList<E extends React.ElementType = typeof NAV_LIST_DEFAULT_TAG>(
  props: NavListProps<E>,
  ref: React.Ref<any>,
) {
  const styles = getStyles();

  const {
    as = 'nav',
    className,
    children,
    testId,
    'aria-label': ariaLabel = 'Sidebar',
    ...otherProps
  } = props;
  const role = as === 'nav' ? undefined : 'navigation';

  const Element = (as ?? NAV_LIST_DEFAULT_TAG) as React.ElementType;

  return (
    <Element
      aria-label={ariaLabel}
      {...otherProps}
      data-test-id={testId}
      ref={ref}
      className={cx(styles.root, className)}
      role={role}
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
