import React, { Component } from 'react';

import TableRow from '../../Table/TableRow';
import SkeletonTableCell from './SkeletonTableCell/SkeletonTableCell';

export type SkeletonTableProps = {
  columnCount?: number;
} & typeof defaultProps;

const defaultProps = {
  columnCount: 5,
};

export class SkeletonTable extends Component<SkeletonTableProps> {
  static defaultProps = defaultProps;

  render() {
    const { columnCount } = this.props;

    return (
      <React.Fragment>
        <TableRow>
          {Array.from(Array(columnCount)).map((_, cellIndex) => (
            <SkeletonTableCell
              key={cellIndex}
              clipId={`skeleton-cell-${cellIndex}`}
            />
          ))}
        </TableRow>
      </React.Fragment>
    );
  }
}

export default SkeletonTable;
