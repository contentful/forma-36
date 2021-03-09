import React from 'react';

import { TableRow } from '../../Table';
import { SkeletonTableCell } from './SkeletonTableCell/SkeletonTableCell';

export interface SkeletonRowProps {
  /** Defines the number of rows to be rendered */
  rowCount?: number;
  /** Defines the number of columns to be rendered */
  columnCount?: number;
}

export const SkeletonRow = ({
  columnCount = 5,
  rowCount = 1,
}: SkeletonRowProps) => {
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
