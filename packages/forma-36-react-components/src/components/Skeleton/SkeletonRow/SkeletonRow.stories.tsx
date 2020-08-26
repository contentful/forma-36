import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonRow from './SkeletonRow';
import Table from '../../Table';
import TableHead from '../../Table/TableHead';
import TableBody from '../../Table/TableBody';
import TableCell from '../../Table/TableCell';
import TableRow from '../../Table/TableRow';

storiesOf('Components/Skeleton/SkeletonRow', module)
  .addParameters({
    propTypes: SkeletonRow['__docgenInfo'],
  })
  .add('default', () => (
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
        <SkeletonRow
          rowCount={number('Number of rows', 5)}
          columnCount={number('Number of columns', 5)}
        />
      </TableBody>
    </Table>
  ));
