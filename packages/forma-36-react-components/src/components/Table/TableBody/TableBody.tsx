import React, { Component } from 'react';

import SkeletonRow from '../../Skeleton/SkeletonRow';

export type TableBodyProps = {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  isLoading?: boolean;
  loadingColumnCount?: number;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-table-body',
};

export class TableBody extends Component<TableBodyProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      isLoading,
      loadingColumnCount,
      ...otherProps
    } = this.props;

    return (
      <tbody data-test-id={testId} className={className} {...otherProps}>
        {isLoading ? (
          <SkeletonRow columnCount={loadingColumnCount} />
        ) : (
          children
        )}
      </tbody>
    );
  }
}

export default TableBody;
