import React from 'react';
import { Table } from '@contentful/f36-table';

import { Skeleton } from '../src/index';
import type { SkeletonRowProps } from '../src/SkeletonRow/SkeletonRow';

export default {
  title: 'Components/Skeleton/SkeletonRow',
  component: Skeleton.Row,
  parameters: {
    propTypes: [Skeleton.Row['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = {
  render: (args: SkeletonRowProps) => (
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
        <Skeleton.Row {...args} />
      </Table.Body>
    </Table>
  ),

  args: {
    rowCount: 5,
    columnCount: 5,
  },
};
