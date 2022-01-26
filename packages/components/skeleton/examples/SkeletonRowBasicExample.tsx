import React from 'react';
import { Table, SkeletonRow } from '@contentful/f36-components';

export default function SkeletonRowBasicExample() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>Address</Table.Cell>
          <Table.Cell>Postcode</Table.Cell>
          <Table.Cell>City</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <SkeletonRow rowCount={5} columnCount={5} />
      </Table.Body>
    </Table>
  );
}
