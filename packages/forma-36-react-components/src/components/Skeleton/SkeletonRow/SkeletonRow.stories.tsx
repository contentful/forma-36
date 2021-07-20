import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@contentful/f36-table';

import { SkeletonRow, SkeletonRowProps } from './SkeletonRow';

export default {
  title: 'Components/Skeleton/SkeletonRow',
  component: SkeletonRow,
  parameters: {
    propTypes: [SkeletonRow['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = (args: SkeletonRowProps) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Postal Code</TableCell>
        <TableCell>City</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <SkeletonRow {...args} />
    </TableBody>
  </Table>
);

Basic.args = {
  rowCount: 5,
  columnCount: 5,
};
