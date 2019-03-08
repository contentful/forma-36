import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import notes from './Table.md';
import Table from './Table';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

storiesOf('Components|Table', module)
  .addParameters({
    propTypes: [
      Table['__docgenInfo'],
      TableHead['__docgenInfo'],
      TableBody['__docgenInfo'],
      TableCell['__docgenInfo'],
      TableRow['__docgenInfo'],
    ],
  })
  .add(
    'default',
    () => (
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
    ),
    { notes },
  );
