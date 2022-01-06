import React from 'react';
import { Table } from '@contentful/f36-table';

import { SkeletonRow, SkeletonRowProps } from '../src/SkeletonRow/SkeletonRow';

export default {
  title: 'Components/Skeleton/SkeletonRow',
  component: SkeletonRow,
  parameters: {
    propTypes: [SkeletonRow['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = (args: SkeletonRowProps) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>Email</Table.Cell>
        <Table.Cell>Address</Table.Cell>
        <Table.Cell>Postal Code</Table.Cell>
        <Table.Cell>City</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <SkeletonRow {...args} />
    </Table.Body>
  </Table>
);

Basic.args = {
  rowCount: 5,
  columnCount: 5,
};
