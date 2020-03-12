import React, { Component } from 'react';

import TableRow from '../../Table/TableRow';
import SkeletonTableCell from './SkeletonTableCell/SkeletonTableCell';

export type SkeletonTableProps = {
  numberOfRows?: number;
  numberOfCells?: number;
} & typeof defaultProps;

const defaultProps = {
  numberOfRows: 5,
  numberOfCells: 5,
};

export class SkeletonTable extends Component<SkeletonTableProps> {
  static defaultProps = defaultProps;

  render() {
    const { numberOfRows, numberOfCells } = this.props;

    return (
      <React.Fragment>
        {Array.from(Array(numberOfRows)).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {Array.from(Array(numberOfCells)).map((_, cellIndex) => (
              <SkeletonTableCell
                key={cellIndex}
                clipId={`skeleton-cell-${rowIndex}-${cellIndex}`}
              />
            ))}
          </TableRow>
        ))}
      </React.Fragment>
    );
  }
}

export default SkeletonTable;
