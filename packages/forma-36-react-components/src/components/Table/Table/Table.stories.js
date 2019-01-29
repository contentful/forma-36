import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { boolean, text } from '@storybook/addon-knobs';
import TableNotes from './Table.md';

import Table from './Table';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

storiesOf('Components|Table', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator((story, context) =>
    withNotes({ markdown: TableNotes })(story)(context),
  )
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add('default', () => (
    <div style={{ width: '800px' }}>
      <Table>
        <TableHead
          isSticky={boolean('Header is sticky', false)}
          offsetTop={text('Header offset top', '0px')}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Jane Roe</TableCell>
            <TableCell>jane@roe.com</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>August 29, 2018</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@doe.com</TableCell>
            <TableCell>CTO</TableCell>
            <TableCell>July 27, 2019</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ));
