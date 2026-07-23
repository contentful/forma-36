import React from 'react';
import { TableNext } from '@contentful/f36-table-next';

export default function TableBasicUsageExample() {
  return (
    <TableNext
      columnTitles={['Name', 'Email', 'Organization role', 'Last activity']}
      layout="stackable"
    >
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
