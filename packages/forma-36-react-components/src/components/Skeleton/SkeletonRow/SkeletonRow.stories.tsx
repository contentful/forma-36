import React from 'react';

import SkeletonRow, { SkeletonRowProps } from './SkeletonRow';
import Table from '../../Table';
import TableHead from '../../Table/TableHead';
import TableBody from '../../Table/TableBody';
import TableCell from '../../Table/TableCell';
import TableRow from '../../Table/TableRow';

export default {
  title: 'Components/Skeleton/SkeletonRow',
  component: SkeletonRow,
  parameters: {
    propTypes: [SkeletonRow['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
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
