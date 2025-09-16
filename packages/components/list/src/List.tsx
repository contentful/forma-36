import { cx, css } from '@emotion/css';
import React from 'react';

import type {
  CommonProps,
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '@contentful/f36-core';

const LIST_DEFAULT_TAG = 'ul';

export interface ListInternalProps extends CommonProps {
  as?: 'ul' | 'ol';
  children?: React.ReactNode;
}

export type ListProps<E extends React.ElementType = typeof LIST_DEFAULT_TAG> =
  PolymorphicProps<ListInternalProps, E>;

/**
 * List is component that helps with vertical indexing of content.
 * Every list item begins with a bullet or a number.
 */
function _List<E extends React.ElementType = typeof LIST_DEFAULT_TAG>(
  {
    as,
    className,
    children,
    testId = 'cf-ui-list',
    ...otherProps
  }: ListProps<E>,
  ref: React.Ref<any>,
) {
  const Element: React.ElementType = as || LIST_DEFAULT_TAG;

  return (
    <Element
      data-test-id={testId}
      className={cx(
        css({
          margin: 0,
        }),
        className,
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Element>
  );
}

_List.displayName = 'List';

export const List = React.forwardRef(_List) as PolymorphicComponent<
  ExpandProps<ListInternalProps>,
  typeof LIST_DEFAULT_TAG
>;
