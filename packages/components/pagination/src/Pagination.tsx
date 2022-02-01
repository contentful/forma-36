import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Pagination.styles';

export interface PaginationProps extends CommonProps {
  children: React.ReactNode;
}

function _Pagination(props: PaginationProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.pagination, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Pagination = React.forwardRef(_Pagination);
