import React, { Component } from 'react';

import SkeletonTable from '../../Skeleton/SkeletonTable';

export type TableBodyProps = {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  loading?: boolean;
  numberOfRows?: number;
  numberOfCells?: number;
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
      loading,
      numberOfRows,
      numberOfCells,
      ...otherProps
    } = this.props;

    return (
      <tbody data-test-id={testId} className={className} {...otherProps}>
        {loading ? (
          <SkeletonTable
            numberOfRows={numberOfRows}
            numberOfCells={numberOfCells}
          />
        ) : (
          children
        )}
      </tbody>
    );
  }
}

export default TableBody;
