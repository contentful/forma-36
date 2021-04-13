import { cx, css } from 'emotion';
import React from 'react';

import {
  Box,
  CommonProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';

const DEFAULT_TAG = 'ul';

export type ListElement = 'ul' | 'ol';
export interface ListInternalProps extends CommonProps {
  as?: ListElement;
  children?: React.ReactNode;
}

export type ListProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  ListInternalProps
>;

const _List: PolymorphicComponentWithRef<
  ListInternalProps,
  typeof DEFAULT_TAG
> = ({ as: Tag = DEFAULT_TAG, className, children, ...otherProps }, ref) => {
  return (
    <Box
      as={DEFAULT_TAG}
      className={cx(
        css({
          margin: 0,
          listStyleType: Tag === 'ul' ? 'disc' : 'decimal',
        }),
        className,
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

/**
 * List is component that helps with vertical indexing of content.
 * Every list item begins with a bullet or a number.
 */
export const List: PolymorphicComponent<
  ListInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_List);
