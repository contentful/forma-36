import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import TableNotes from './Table.md';

import Table from './Table';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

storiesOf('Components|Table', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator((story, context) => withNotes(TableNotes)(story)(context))
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add('default', () => (
    <div style={{ width: '800px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Andrey Tigay</TableCell>
            <TableCell>andrey@contentful.com</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>July 27, 2019</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gui Barbosa</TableCell>
            <TableCell>guilherme@contentful.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>August 29, 2018</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ));
