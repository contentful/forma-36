import React from 'react';

import TableCell from '../../../Table/TableCell';
import SkeletonContainer from '../../SkeletonContainer';
import SkeletonBodyText from '../../SkeletonBodyText';

export const SkeletonTableCell = () => {
  return (
    <TableCell>
      <SkeletonContainer
        svgHeight={16} // This is equal to the default height of a SkeletonText line, if no value is passed the svg will be bigger than the line
      >
        <SkeletonBodyText numberOfLines={1} />
      </SkeletonContainer>
    </TableCell>
  );
};

export default SkeletonTableCell;
