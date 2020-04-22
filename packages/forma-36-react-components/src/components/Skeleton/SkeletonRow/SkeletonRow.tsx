import React from 'react';

import TableRow from '../../Table/TableRow';
import SkeletonTableCell from './SkeletonTableCell/SkeletonTableCell';

export type SkeletonRowProps = {
  rowCount?: number;
  columnCount?: number;
} & typeof defaultProps;

const defaultProps = {
  rowCount: 1,
  columnCount: 5,
};

export const SkeletonRow = ({ rowCount, columnCount }: SkeletonRowProps) => {
  return (
    <React.Fragment>
      {Array.from(Array(rowCount)).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from(Array(columnCount)).map((_, cellIndex) => (
            <SkeletonTableCell key={cellIndex} />
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
};
SkeletonRow.defaultProps = defaultProps;

export default SkeletonRow;
