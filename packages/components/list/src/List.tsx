import { cx, css } from 'emotion';
import React from 'react';

import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
export interface ListInternalProps extends CommonProps {
  as?: 'ul' | 'ol';
  children?: React.ReactNode;
}

export type ListProps = PropsWithHTMLElement<ListInternalProps, 'ul'>;

/**
 * List is component that helps with vertical indexing of content.
 * Every list item begins with a bullet or a number.
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ as, className, children, testId = 'cf-ui-list', ...otherProps }, ref) => {
    return (
      <ul
        data-test-id={testId}
        className={cx(
          css({
            margin: 0,
            listStyleType: as === 'ul' ? 'disc' : 'decimal',
          }),
          className,
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </ul>
    );
  },
);

List.displayName = 'List';
