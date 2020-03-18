import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './SkeletonRow.md';
import SkeletonRow from './SkeletonRow';
import Table from '../../Table';
import TableHead from '../../Table/TableHead';
import TableBody from '../../Table/TableBody';
import TableCell from '../../Table/TableCell';
import TableRow from '../../Table/TableRow';

storiesOf('Components|Skeleton/SkeletonRow', module)
  .addParameters({
    propTypes: SkeletonRow['__docgenInfo'],
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
          <SkeletonRow />
        </TableBody>
      </Table>
    ),
    { notes },
  );
