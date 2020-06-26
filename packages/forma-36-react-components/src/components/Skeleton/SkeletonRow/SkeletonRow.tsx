import React from 'react';

import TableRow from '../../Table/TableRow';
import SkeletonTableCell from './SkeletonTableCell/SkeletonTableCell';

export interface SkeletonRowProps {
  /** Defines the number of rows to be rendered */
  rowCount?: number;
  /** Defines the number of columns to be rendered */
  columnCount?: number;
}

const defaultProps = {
  rowCount: 1,
  columnCount: 5,
};

export const SkeletonRow = ({ rowCount, columnCount }: SkeletonRowProps) => {
  return (
    <>
      {Array.from(Array(rowCount)).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from(Array(columnCount)).map((_, cellIndex) => (
            <SkeletonTableCell key={cellIndex} />
          ))}
        </TableRow>
      ))}
    </>
  );
};
SkeletonRow.defaultProps = defaultProps;

export default SkeletonRow;
