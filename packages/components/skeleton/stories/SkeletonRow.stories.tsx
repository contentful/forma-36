import React from 'react';
import { Table } from '@contentful/f36-table';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonRow',
  component: Skeleton.Row,
  parameters: {
    propTypes: [Skeleton.Row['__docgenInfo']],
  },
  argTypes: {},
} as Meta<typeof Skeleton.Row>;

type Story = StoryObj<typeof Skeleton.Row>;

export const Basic: Story = {
  args: {
    rowCount: 5,
    columnCount: 5,
  },
  render: (args) => (
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
};
