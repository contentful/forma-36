import React from 'react';
import { TableCell } from '@contentful/f36-table';

import { Skeleton } from '../../index';

export const SkeletonTableCell = () => {
  return (
    <TableCell>
      <Skeleton.Container
        svgHeight={16} // This is equal to the default height of a SkeletonText line, if no value is passed the svg will be bigger than the line
      >
        <Skeleton.BodyText numberOfLines={1} />
      </Skeleton.Container>
    </TableCell>
  );
};
