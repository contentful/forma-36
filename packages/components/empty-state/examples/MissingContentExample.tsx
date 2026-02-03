import React from 'react';
import { MissingContent, Table } from '@contentful/f36-components';

export default function BasicExample() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Filename</Table.Cell>
          <Table.Cell>Dimensions</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Pony.jpg</Table.Cell>
          <Table.Cell>160px x 300px</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cat.jpg</Table.Cell>
          <Table.Cell>
            <MissingContent label="No Dimensions available" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Dog.jpg</Table.Cell>
          <Table.Cell>
            <MissingContent label="No Dimensions available" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
