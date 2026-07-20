import React from 'react';
import { TableNext } from '@contentful/f36-tablenext';

export default function TableBasicUsageExample() {
  return (
    <TableNext>
      <TableNext.Head>
        <TableNext.Row>
          <TableNext.Cell>Name</TableNext.Cell>
          <TableNext.Cell>Email</TableNext.Cell>
          <TableNext.Cell>Organization role</TableNext.Cell>
          <TableNext.Cell>Last activity</TableNext.Cell>
        </TableNext.Row>
      </TableNext.Head>
      <TableNext.Body>
        <TableNext.Row>
          <TableNext.Cell>Claus Mitchell</TableNext.Cell>
          <TableNext.Cell>claus.mitchell@contentful.com</TableNext.Cell>
          <TableNext.Cell>CEO</TableNext.Cell>
          <TableNext.Cell>August 29, 2018</TableNext.Cell>
        </TableNext.Row>
        <TableNext.Row>
          <TableNext.Cell>Johannes Ramos</TableNext.Cell>
          <TableNext.Cell>johannes.ramos@contentful.com</TableNext.Cell>
          <TableNext.Cell>CTO</TableNext.Cell>
          <TableNext.Cell>July 27, 2019</TableNext.Cell>
        </TableNext.Row>
        <TableNext.Row>
          <TableNext.Cell>Alex Kalinoski</TableNext.Cell>
          <TableNext.Cell>alex.kalinoski@contentful.com</TableNext.Cell>
          <TableNext.Cell>CDO</TableNext.Cell>
          <TableNext.Cell>June 13, 2019</TableNext.Cell>
        </TableNext.Row>
      </TableNext.Body>
    </TableNext>
  );
}
