import React from 'react';
import { Table } from '@contentful/f36-components';

export default function TableBasicUsageExample() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>Organization role</Table.Cell>
          <Table.Cell>Last activity</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Claus Mitchell</Table.Cell>
          <Table.Cell>claus.mitchell@contentful.com</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>August 29, 2018</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Johannes Ramos</Table.Cell>
          <Table.Cell>johannes.ramos@contentful.com</Table.Cell>
          <Table.Cell>CTO</Table.Cell>
          <Table.Cell>July 27, 2019</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Alex Kalinoski</Table.Cell>
          <Table.Cell>alex.kalinoski@contentful.com</Table.Cell>
          <Table.Cell>CDO</Table.Cell>
          <Table.Cell>June 13, 2019</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
