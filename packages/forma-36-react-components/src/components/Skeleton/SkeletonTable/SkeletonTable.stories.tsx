import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './SkeletonTable.md';
import SkeletonTable from './SkeletonTable';
import Table from '../../Table';
import TableHead from '../../Table/TableHead';
import TableBody from '../../Table/TableBody';
import TableCell from '../../Table/TableCell';
import TableRow from '../../Table/TableRow';

storiesOf('Components|Skeleton/SkeletonTable', module)
  .addParameters({
    propTypes: SkeletonTable['__docgenInfo'],
  })
  .add(
    'default',
    () => (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
            <TableCell>2FA status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <SkeletonTable />
        </TableBody>
      </Table>
    ),
    { notes },
  );
