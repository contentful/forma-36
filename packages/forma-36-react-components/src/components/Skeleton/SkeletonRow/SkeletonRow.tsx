import React from 'react';

import TableRow from '../../Table/TableRow';
import SkeletonTableCell from './SkeletonTableCell/SkeletonTableCell';

export type SkeletonRowProps = {
  columnCount?: number;
} & typeof defaultProps;

const defaultProps = {
  columnCount: 5,
};

export const SkeletonRow = ({ columnCount }: SkeletonRowProps) => {
  return (
    <React.Fragment>
      <TableRow>
        {Array.from(Array(columnCount)).map((_, cellIndex) => (
          <SkeletonTableCell key={cellIndex} />
        ))}
      </TableRow>
    </React.Fragment>
  );
};
SkeletonRow.defaultProps = defaultProps;

export default SkeletonRow;
